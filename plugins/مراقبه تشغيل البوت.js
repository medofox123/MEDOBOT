let { generateWAMessageFromContent } = (await import(global.baileys)).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
import moment from 'moment-timezone';
import fetch from 'node-fetch';
let handler  = async (m, { conn, usedPrefix: _p }) => {
const res = await fetch('https://api.github.com/repos/GataNina-Li/GataBot-MD');
const json = await res.json();
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `🦊𝗙𝗢𝗫 𝗪𝗛𝗔𝗧'𝗦𝗔𝗣𝗣 𝗕𝗢𝗧🦊\n\n» الـمـطوࢪ :𝙁𝙊𝙓\n\n» الـــــــتاࢪيــخ :* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n  \n\n*⏰ وقــــــت الــتـشـغـيــل:*\n \t${pad(days)} يوم\t ${pad(hours)} ساعه ${pad(minutes)} دقـيـقه ${pad(seconds)} ثـانـيه \t\n`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi Sis',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: 'ಠ_ಠ',
totalAmount1000: '1000000',
sellerJid: md,
thumbnail: gataImg
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
//conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(وقت_التشغيل|sc|activo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null 

export default handler