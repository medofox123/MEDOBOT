export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ازيــك يــســطا @${m.sender.split`@`[0]}, مــعــلش الـمـطوࢪ مـنـع ان الـــمـستخدمين تـسـتخدم الــبوت فـي الـــخـاص تـــقـدࢪ تستخدم البوت في الجروبات  ف احـلي بـــلوك مــن الـــمطوࢪ😘*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
