///////حقوق شانكس
//////https://whatsapp.com/channel/0029VarhaRr8F2pHJOrzkd0h

import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

let handler = async (m, { text, conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  try {
    if (!mime) {
      return await m.reply("❌ يرجى الرد على صورة لكي تفرغها من خلفيتها.");
    }

    if (!mime.startsWith("image/")) {
      return await m.reply("❌ يرجى الرد على صورة، لا فيديو أو مستند!");
    }

    // React أثناء تنزيل الصورة
    await m.react('⏳'); // إشارة إلى أن العملية بدأت

    let media = await q.download(true);
    let data = await uploadFile(media);

    let imag = data.files[0]?.url;
    if (!imag) throw "⚠️ لم يتم العثور على رابط الصورة بعد الرفع.";

    // إرسال الصورة مع رابط API 
    await conn.sendFile(
      m.chat,
      `https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/makers/Palestine?image=${imag}`,
      '',
      '📸 *احـلي اطـــاࢪ لـصوࢪتـك ومـتنساش تـــدعي لخواتنا في غزه*',
      m
    );

    await m.react('✅'); // نجاح العملية

  } catch (error) {
    console.error("Error:", error);
    await m.reply("❌ حدث خطأ أثناء تنفيذ الأمر.");
    await m.react('❌'); // إشارة إلى فشل العملية
  }
};

handler.help = ["Palestine"];
handler.tags = ["tools"];
handler.command = ['فلسطين', 'فلسطينن', 'ph'];

export default handler;

async function uploadFile(path) {
  let form = new FormData();
  form.append('files[]', fs.createReadStream(path));

  let res = await (await fetch('https://uguu.se/upload.php', {
    method: 'POST',
    headers: {
      ...form.getHeaders()
    },
    body: form
  })).json();

  // حذف الملف المؤقت بعد رفعه
  await fs.promises.unlink(path);
  return res;
}