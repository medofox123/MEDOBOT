// *Downloader API Guide Code ✅ | كود تحميل فيديوهات من جميع المواقع*
// https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
import fetch from "node-fetch";

let handler = async (m, { conn, text, command, usedPrefix }) => {
    const url = text;
    if (!url) {
return m.reply(`هذا الأمر خاص بتحميل فيديوات من جميع المنصات مثال :\n${usedPrefix + command} *ورابط الفيديو*`);
     };

    let website;

    if (url.includes("youtube.com")) {
        website = 'yt';
    } else if (url.includes("facebook.com")) {
        website = 'fb';
    } else if (url.includes("instagram.com")) {
        website = 'ig';
    } else if (url.includes("vt.tiktok.com")) {
        website = 'tt';
    } else {
        return m.reply(`هذه المنصه غير مدعومه لكي احمل منها الفيديو المنصات المتاحه \nYoutube, Facebook, Instagram, TikTok`);
    }
    await m.reply(`جاري تحميل الفيديو 🔮`);

    try {

       let apires = await fetch(`https://jo-animi-apis-for-devs.vercel.app/api/dl?url=${text}&from=${website}`);
        let res = await apires.json(); 
        let title = res.title;
        let url = res.result;

        await conn.sendFile(m.chat, url, '', title, m);
        
    } catch (error) {
        return m.reply(`حدث عطل في الخادم 😔`);
    }
};

handler.help = ["سناب"];
handler.tags = ["down"];
handler.command = /^(snaptube|سناب)$/i;

export default handler;