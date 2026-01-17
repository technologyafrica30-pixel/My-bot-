require("./lib/global")
const func = require("./lib/place")
const readline = require("readline")
const usePairingCode = true
const yargs = require("yargs")
const axios = require("axios")
const { Boom } = require('@hapi/boom');
const { load_Module } = require("./lib/function.js")
global.status = 0
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const question = (text) => {
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function fetchData() {
  try {
    const response = await axios.get('https://hamz-key.glitch.me/key2.json');
    return {
      secretCode: response.data.secretCode,
      description: response.data.description,
      lastUpdated: response.data.lastUpdated,
      author: response.data.author,
      status: response.data.status
    };
  } catch (error) {
    console.error('Error fetching data from the website:', error);
    return null;
  }
}
const DataBase = require('./lib/database.js');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 5000)
})()

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)

const connectionOptions = {
version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
browser: ['Ubuntu', 'Safari', '18.1'],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}}, 
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state
}

const client = await func.makeWASocket(connectionOptions)
if (!client.authState.creds.registered) {

    const data = await fetchData();

    if (!data || !data.secretCode) {
      console.log(chalk.red('Could not fetch the secret code or data. Exiting...'));
      process.exit(1);
    }

    
    console.log(chalk.blue(`\nDescription: ${data.description}`));
    console.log(chalk.blue(`Last Updated: ${data.lastUpdated}`));
    console.log(chalk.blue(`Author: ${data.author}`));
      console.log(chalk.blue(`Status: ${data.status}`));

    // Prompt user for the secret code
    let userCode = await question(chalk.cyan('\nMasukkan Key:\n '));

    if (userCode === data.secretCode) {
      console.log(chalk.green('\n✔ Secret code accepted!\n'));
    } else {
      console.log(chalk.red('\n✖ Incorrect secret code! Restarting...\n'));
      return startSesi(); 
    }
const phoneNumber = await question(chalk.blue.bold('Masukkan Nomor Wa Lu Nyet :\n'));
const code = await client.requestPairingCode(phoneNumber.trim())
await console.log(`${chalk.blue.bold('Pairing Code')} : ${chalk.white.bold(code)}`)
rl.close()
}

await store?.bind(client.ev)

client.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(lastDisconnect.error)
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`)
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('[SYSTEM]\nConnection closed, reconnecting...')
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log('[SYSTEM]\nConnection lost, trying to reconnect')
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First')
client.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startSesi()
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Scan Again And Run.`)
client.logout()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection TimedOut, Reconnecting...')
startSesi()
}
} else if (connection === "open") {
console.log(chalk.blue.bold('Succees Connected To Server'))
}
})

client.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return 
if (!client.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
m = await func.smsg(client, m, store)
if (m.isBaileys) return
if (status == 0) {
await load_Module(client)
global.status = 1 }
require("./case.js")(client, m, store)
} catch (err) {
console.log(err)
}
})

client.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = client.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

client.ev.on('creds.update', saveCreds)
client.public = true

return client
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})