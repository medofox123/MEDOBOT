let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗اشعار❗] مثال : .تغير-الاسم 𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗اشعار❗] *مثال : .تغيرالاسم 𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغير-الاسم|تغيرالاسم)$/i
handler.group = true
handler.admin = true
export default handler
