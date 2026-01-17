require("./lib/module.js")

// Setting Bot Dan Owner
global.owner = "6282186906766"
global.namabot = "𝕏ʜᴀᴍᴢ" 
global.namaowner = "𝐇ᴀᴍᴢx 🕊️"
global.packname = "Sticker By"
global.author = "𝐇ᴀᴍᴢx 🕊"
global.thumb = "https://files.catbox.moe/nm2wqy.jpg"
global.thumb2 = "https://files.catbox.moe/nm2wqy.jpg"
// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
wait: "Memproses . . .", 
owner: "Fitur ini khusus untuk owner!", 
group: "Fitur ini untuk dalam grup!", 
admin: "Fitur ini untuk admin grup!", 
botadmin: "Fitur ini hanya untuk bot menjadi admin"
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})