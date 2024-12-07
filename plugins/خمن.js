/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /x/g
if (!text) throw '*فـــــــيــــن الــــࢪقـــــم الـلي هـخـمنه*🤔'
if (!text.match(regex)) throw `*غــــــلط كدا مــثال: ${usedPrefix + command} 20100720357x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = '♨️ تـم الـتـخـمـين\n\n' + array.filter(v => v.exists).map(v => `•🔢 الـــࢪقـم: wa.me/${v.jid.split('@')[0]}\n*الــــبايو:* ${v.status || 'مـفـيش بــــايو'}\n*•❇️ تاريخ الانضمام:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*❎ اللي معندهمش واتس*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^خمن$/i
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}
