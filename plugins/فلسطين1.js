///////حقوق شانكس
////////https://whatsapp.com/channel/0029VarhaRr8F2pHJOrzkd0h
/////ملاحظة:الapi المستعمل للمطور زورو صاحب بوت زورو✅


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
      '📸 تم تفريغ الصورة من الخلفية.',
      m
    );

    await m.react('✅'); // نجاح العملية

  } catch (error) {
    console.error("Error:", erro