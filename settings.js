const fs = require('fs')
const chalk = require('chalk')
const { global.ownernumber, global.ownername, global.ytname, global.socialm, global.location, global.wm, global.themeemoji  } =  fs.readFileSync (' .client_setting/client_global.json')
const { global.autoRecording, global.autoTyping, global.autorecordtype, global.autoread, global.autobio, global.anti212, global.autoread_status } = fs.readFileSync (' .client_setting/client_za.json')

//Start 

global.stickername = 'Erza V BETA'
global.packname = 'By'
global.author = 'Rey'
global.link = 'https://chat.whatsapp.com/Jllsl2OaQNoBjepxzuVsZM'
global.prefa = ['.']
global.mess = fs.readFileSync (' .client_setting/client_mess.json')
global.thumb = 'https://api.betabotz.org/api/cecan/justinaxie?apikey=z6X9NYDN'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
