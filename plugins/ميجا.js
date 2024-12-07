import { File } from "megajs";
import mime from 'mime-types';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`_*فـــين اللينك يسطا*_`);
        const file = File.fromURL(text);
        await file.loadAttributes();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const mimeType = mime.lookup(fileExtension);
        let caption = `｢*تـــــم العـثور عــلي الـــملف*｣\n
┃  *${gt}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📔 ｢اســـم الـمـلف｣
┃ ${file.name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🗃｢حــجم الــمـلف｣
┃ ${formatBytes(file.size)}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  🚀｢الــــــــحزمـه｣
┃ ${mimeType}
┃
┃ ${wm}`.trim()
conn.reply(m.chat,caption, m)
        if (file.size >= 1800000000 && !file.directory) return m.reply('Error: El archivo es muy pesado');
        const data = await file.downloadBuffer();
        await conn.sendFile(m.chat, data, file.name, null, m, null, { mimeType, asDocument: true });

    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(ميجا)$/i
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
