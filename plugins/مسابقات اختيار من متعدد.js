let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `┈─── • ◞☆◜ • ───┈ ⋅\n\n  *فــــيـن بـيـانات التـصويت*\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n*｢الطريقه｣*\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n  *.تصويت عنوان التصويت|اسم اول اختيار|اسم تاني اختيار|تالت اختيار وهكذا*\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n*مثال*\n\n.تصويت مسابقه|medo|fox\n\n‏ ┈─── • ◞☆◜ • ───┈ `, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `┈─── • ◞☆◜ • ───┈ ⋅\n\n  *فــــيـن بـيـانات التـصويت*\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n｢*الطريقه*｣\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n  *.تصويت عنوان التصويت|اسم اول اختيار|اسم تاني اختيار|تالت اختيار وهكذا*\n‏ ┈─── • ◞☆◜ • ───┈ ⋅\n*مثال*\n\n.تصويت مسابقه|medo|fox\n\n‏ ┈─── • ◞☆◜ • ───┈ `, fkontak, m)
if (b[13]) return conn.reply(m.chat, `‏ ┈─── • ◞☆◜ • ───┈ ⋅\n\n  *فــــيـن بـيـانات التـصويت*\n\n*الطريقه*\n\n  *.تصويت عنوان التصويت|اسم اول اختيار|اسم تاني اختيار|تالت اختيار وهكذا*\n\n*مثال*\n\n.تصويت مسابقه|medo|fox\n\n‏ ┈─── • ◞☆◜ • ───┈ `, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `*📊تـــــصـويــــــــت📊*\n بـــواسـطه\n*🦊⇢ ${conn.getName(m.sender)}*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'تصويت', 'encuestas', 'polls'] 
export default handler
