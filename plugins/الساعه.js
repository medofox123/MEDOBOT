import moment from 'moment-timezone'

let handler = async (m, { conn }) => {  
const fechaper = moment().tz('America/Lima').format('DD/MM HH:mm')
const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm')
const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm')
const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm')
const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm')
const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm')
const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm')
const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm')
const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm')
const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm')
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm')
const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm')
const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm')
const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm')
const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm')
const fechanew = moment().tz('Africa/cairo').format('DD/MM HH:mm')
const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm')
const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm')
const fechaafri = moment().tz('Africa/Malabo').format('DD/MM HH:mm')
await conn.sendMessage(m.chat, { text: `\`\`\`
「 الـــســــاعـــه الــعالــمــيه 🗺️ 」
⏱️بـيـرو      : ${fechaper}
⏱️مـصـر     :${fechanew}
⏱️المـكـسـيك    : ${fechamex}
⏱️بـــولـڤيا     : ${fechabol}
⏱️شـيـلي      : ${fechachi}
⏱️الاࢪجـنـتـين  : ${fechaarg}
⏱️كـلومبيا.    : ${fechacol}
⏱️ايـكادور    : ${fechaecu}
⏱️ســاحل ࢪوسـيا : ${fechacosr}
⏱️كـوبـا       : ${fechacub}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
💻 *الـــتاࢪيخ والوقـت في منـطقتك:*\n*[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]*\n*${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}*` }, {quoted: m })
}

handler.help = ['horario']
handler.tags = ['info']
handler.command = /^(الساعه)$/i

export default handler
