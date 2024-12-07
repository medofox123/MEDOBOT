import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, command, usedPrefix}) => {
if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()} ${mid.smsMalused2}`);
try {
const anime = await client.searchAnime(text);
const result = anime.data[0];
const resultes = await translate(`${result.background}`, {to: 'ar', autoCorrect: true});
const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
const AnimeInfo = ` الـــعـــنوان
: ${result.title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈   
 الـــحـــلـقـات
: ${result.episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 نـــــشـࢪ فــي
: ${result.source.toUpperCase()}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 تـــــاࢪيـخ الاصدار
: ${result.aired.from}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 عـدد الاعـضـاء
: ${result.popularity}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 الــمـفـضلون
: ${result.favorites}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 المده الزمنيه لكل حلقه
: ${result.duration}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 الـتصـنـيف
: ${result.rating}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 المـقطـع الدعـائي
: ${result.trailer.url}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 الـــــــࢪابــــــط
: ${result.url}`;
conn.sendButton(m.chat, AnimeInfo, null, result.images.jpg.image_url, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['الــقائـمه', '/menu']], null, [['𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', ig]], m)
//conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
//conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, fkontak);
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = /^(anime|انمي)$/i;
//handler.level = 2
//handler.register = true
export default handler;
