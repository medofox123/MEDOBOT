let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['ما المؤيدة التي قمت بتعدينها',
'🌟✨ باهِر!! لقد حصلت',
'رائع!! أنت عامل منجم عظيم؟
'لقد قمت بالتعدين !!',
'😲 لقد تمكنت من تعدين كمية',
'سيرتفع دخلك بفضل حقيقة أنك تعدين',
'⛏️⛏️⛏️⛏️⛏️ التعدين',
'🤩 نعم!!! الآن لديك',
'ميناريا في صفك ، ولهذا السبب تحصل عليه',
'😻 يارتني عندي حظ زيك',
'♻️ لقد تم إنجاز مهمتك ، وتمكنت من مهمتي',
'⛏️ لقد أفادك التعدين',
'🛣️لقد وجدت مكانًا وللتعدين قال المكان الذي تحصل عليه',
'👾 بفضل حقيقة أنك قمت بالتعدين ، زاد دخلك',
'تهانينا!! الآن لديك','⛏️⛏️⛏️ لقد حصلت'])}`
let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

let string = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let stringpremium = `${pickRandom([3, 4, 6, 7, 9, 11])}` * 1

let coal = `${pickRandom([4, 5, 8, 10, 12])}` * 1
let coalpremium = `${pickRandom([9, 14, 15, 17, 20])}` * 1

let emas = `${pickRandom([1, 0, 2, 3, 0, 0, 0])}` * 1
let emaspremium = `${pickRandom([2, 4, 5, 1, 1, 7, 8])}` * 1

const recompensas = {	
  string: premium ? stringpremium : string,
  coal: premium ? coalpremium : coal,
  emas: premium ? emaspremium : emas,
}
//let xp = Math.floor(Math.random() * 2000)
let xp = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let exppremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1

let time = user.lastmiming + 600000 //10 min
if (new Date - user.lastmiming < 600000) return await conn.reply(m.chat, `*⏱️ عد بعد ${msToTime(time - new Date())} للمواصلة ${global.rpgshopp.emoticon('exp')}⛏️*`, fkontak,  m)
user.exp += premium ? exppremium : xp  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}
m.reply(`*${minar} ${xp} XP*`)
user.lastmiming = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'كوينز', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

