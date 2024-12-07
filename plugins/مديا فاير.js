import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `           😓          \n\n*فــــــــــــيـن الــــــــࢪابـــــط يـــــسـطـــــا*`
try {  
let res = await mediafireDl(args[0])
let { name, size, date, mime, link } = res
let caption = `｢*تـــــم العـثور عــلي الـــملف*｣
> ┃ *${gt}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃📔 ｢اســـم الـمـلف｣
> ┃ ${name}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🗃｢حــجم الــمـلف｣
> ┃ ${size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀｢الــــــــحزمـه｣
> ┃ ${mime}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Super Bot WhatsApp', previewType: 0, thumbnail: gataMenu, sourceUrl: md}}})
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false      
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(مديافاير|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = true
export default handler

async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
