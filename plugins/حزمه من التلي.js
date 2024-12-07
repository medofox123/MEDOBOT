import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoIIG']()}ادخــل لــــــيــنـك الـــــتـــلـــيجࢪام\nمـــــــثـــــال:\n${usedPrefix + command} https://t.me/addstickers/Porcientoreal`
if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `${lenguajeGB['smsAvisoIIG']()}الــــــــــࢪابــط الخـــــــاص بــك غـــــــيــࢪ صـــــــحـــــــيـح😡`
let packName = args[0].replace("https://t.me/addstickers/", "")
let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
if (!gas.ok) throw eror
let json = await gas.json()
m.reply(`${lenguajeGB['smsAvisoIIG']()} *مـــجــــمـــوع الـــــمــلــــصـقات:* ${json.result.stickers.length}\n*تــم اࢪســـال:* ${json.result.stickers.length * 1.5} ثــوانــي`.trim())
for (let i = 0; i < json.result.stickers.length; i++) {
let fileId = json.result.stickers[i].thumb.file_id
let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
let jisin = await gasIn.json()
let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ` 𝗙𝗢𝗫 𝗪𝗛𝗔𝗧"𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 `, mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: gataImg.getRandom()}}}, { quoted: m })
await delay(3000)
}
throw `${lenguajeGB['smsAvisoEG']()}`
}
handler.help = ['stikertele *<url>*']
handler.tags = ['sticker', 'downloader']
handler.command = /^(ستيك_تلي)$/i
handler.cookie = 1
handler.limit = 1
handler.register = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))
