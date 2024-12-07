import fetch from 'node-fetch';

let handler = async (m, { text, command, conn }) => {
  // التحقق من مدخلات المستخدم
  if (!text) {
    return m.reply(`*مثال الاستخدام:* ${command} كلمة_بحث عدد_النتائج`);
  }

  // تقسيم المدخلات إلى النص وعدد النتائج
  let [query, num] = text.split(' ');

  if (!query || !num || isNaN(num)) {
    return m.reply(`⚠️ يجب كتابة النص وعدد النتائج بالشكل الصحيح.\n*مثال:* ${command} كلمة_بحث 5`);
  }

  num = parseInt(num);
  if (num <= 0) {
    return m.reply("⚠️ عدد النتائج يجب أن يكون أكبر من 0.");
  }

  // استبدال النص وعدد النتائج في رابط API
  let encodedQuery = encodeURIComponent(query.trim());
  let apiUrl = `https://api1.zenonhs.store/googel/search?term=${encodedQuery}&num=${num}`;

  try {
    // إرسال طلب للحصول على النتائج من API
    let response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة من الخادم: ${response.statusText}`);
    }

    // تحويل الاستجابة إلى JSON
    let data = await response.json();

    // طباعة استجابة API للتحقق من البيانات
    console.log('استجابة API:', JSON.stringify(data, null, 2));

    // التحقق من وجود بيانات في النتائج
    if (!data || !data.results || data.results.length === 0) {
      return m.reply("⚠️ لم يتم العثور على نتائج. يرجى التحقق من كلمة البحث.");
    }

    // استخراج العناوين، الروابط، والوصف من النتائج
    let results = data.results
      .map(
        (result, index) =>
          `🔗 ${index + 1}. *${result.title || 'لا يوجد عنوان'}*\n📄 ${result.description || 'لا يوجد وصف'}\n🌐 ${result.url || 'لا يوجد رابط'}`
      )
      .join('\n\n');

    // إرسال النتائج إلى المستخدم
    m.reply(`🔍 نتائج البحث عن "${query}":\n\n${results}`);
  } catch (error) {
    console.error("حدث خطأ:", error);
    m.reply(`⚠️ حدث خطأ أثناء جلب النتائج: ${error.message}`);
  }
};

handler.help = ["search-links"];
handler.tags = ["tools"];
handler.command = /^(بحث_روابط|links)$/i;

export default handler;