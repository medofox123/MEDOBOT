/* 
# Créditos a https://github.com/AzamiJs
•• @AzamiJs ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg)
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `｢غـــلط كـــــدا يـــسطا｣\n\n*الــــࢪجـاء عــــــمل ࢪيبلاي عـــلـي الــصوره او الـــفــــديـو لࢪفـعه*`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `🛑 الــــࢪابـــط:\n${link}\n🥏 الــــمـقاس: ${media.length}\n🚀 الـــمـــــده: ${isTele ? 'لانــــــــهائـي' : 'مــــــــحــدود'}\n🦊 ࢪابـــــــــط : ${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(للينك|رفع)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
