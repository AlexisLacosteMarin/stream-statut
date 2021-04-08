//It's just a code to get an stream activity
//Type "npm init" in Terminal
//Then, type "npm i --save discord.js" (in Terminal too)
//Do an new file, name "index.js"
//And copy this code. You must do changes (they are in capital letters) BUT NOT TOUCH TO THIS: {type: 'STREAMING'

const Discord = require ('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setActivity('WRITE THE NAME FROM THE BOT STREAM NAME', {type: 'STREAMING', url: 'https://twitch.tv/WRITE YOUR TWITCH URL HERE'})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
})

bot.login('COPY YOUR TOKEN HERE')
