let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `وطـي ونـا افـــتـحـها`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '🖕🏻', key: m.key } })

 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ده نورك والله 😘*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
   } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` بكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حاضر`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` عارفين ف اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وانت من اهل الخير حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^احبك فوكس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` انا اكتر ✨🥹💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '❤', key: m.key } })
 
  }  
  
 if (/^كسمك|ك$مك|ك س م ك| كس مك|كسمكك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*انا ذكاء اصطناعي معنديش ام الدور والباقي عل العايبه امك اللي وفقت للخول ابوك علشان ينيكها وتخلفلنا عيل معاق ابن متناكه زيك* `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '🖕🏻', key: m.key } })
 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` انظر بعيد `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/باي^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `باي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/هلا^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `هلا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كيفك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler