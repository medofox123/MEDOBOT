import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/v2/img/feed')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} 𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇 ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(اكل|طعام|ياكل|يأكل)$/i 
export default handler
