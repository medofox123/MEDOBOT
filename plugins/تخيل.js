// *# Text2 Cartoon, Anime, Art and Real API Guide Code | كود تخيل جميع الاصدارات ✅*
// https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {

    const msg = encodeURIComponent(text);

       if (command === 'تخيل') {
      return conn.sendFile(m.chat, 'https://i.ibb.co/pzkYHrk/0f545301f407.jpg', 'HelpToGenerate.png', `هنا يمكنك استخدام أوامر التخيل التالية:\n1/ *.تخيل-كرتون* شخص راكب للامواج على سمكة قرش\n2/ *.تخيل-انمي* شخص راكب للامواج على سمكة قرش\n3/ *.تخيل-رسم* شخص راكب للامواج على سمكة قرش\n4/ *.تخيل-حقيقي* شخص يركب على سمكة قرش حقيقيه وهوا راكب على أمواج البحر , منظر غروب الشمس في بحر كبير`, m, false);
     } else if (!text) throw (`مثال:\n${usedPrefix + command} شخص راكب للامواج على سمكة قرش`);
    
        await m.reply(`ثواني، جاري التخيل 🔮`);
       const response = await fetch(`https://api.joanimi-world.site/api/tr?text=${msg}&lang=en`);
        const result = await response.json();
        const translatedText = result.result;

      let model;
    if (command === 'تخيل-كرتون') {
        model = `cartoon`;
    } else if (command === 'تخيل-انمي') {
        model = `anime`;
    } else if (command === 'تخيل-رسم') {
        model = `paint`;
    } else if (command === 'تخيل-حقيقي') {
        model = `real/v1`;
    }
   const generator = `https://api.joanimi-world.site/api/text2${model}?text=${translatedText}`;
     await conn.sendFile(m.chat, generator, 'generator.png', '', m, false);

};

handler.tags = ['تخيل'];
handler.tags = ['ai'];
handler.command = /^(تخيل|تخيل-كرتون|تخيل-انمي|تخيل-رسم|تخيل-حقيقي)$/i;

export default handler;