let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `‏ ┈─── • ◞☆◜ • ───┈ \n\n*فـيـن الـصـوࢪه الـلي عـاوز تـحطها بايـو الـجروب*\n\n❃━═━═✦•〘🦊〙•✦═━═━❃\n\n*اعـمـل ريـبـلاي او اختار الـصوࢪه المــراد رفـعها*\n\n‏ ┈─── • ◞☆◜ • ───┈ ⋅`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(` ┈─── • ◞☆◜ • ───┈ \n\n*تـم تـغـيـࢪ بـايـو الـمــجـمـوعـه بـنـجـاح*\n\n‏ ┈─── • ◞☆◜ • ───┈`))
} else throw `┈─── • ◞☆◜ • ───┈ \n\n*فـيـن الـصـوࢪه الـلي عـاوز تـحطها بايـو الـجروب*\n\n❃━═━═✦•〘🦊〙•✦═━═━❃\n\n*اعـمـل ريـبـلاي او اختار الـصوࢪه المــراد رفـعها*\n\n‏ ┈─── • ◞☆◜ • ───┈ ⋅`}
handler.command = /^بايو_الجروب?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
