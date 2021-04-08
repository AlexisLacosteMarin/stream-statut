//Configuration : 

1 : Go in Terminal 
2 : Write npm init
3 : Touch your Entry touch seven times
4 : Write npm i --save discord.js

//Code : 

1 : Create an new file, name index.js
2 : Copy my code

//Setup : 

IMPORTANT : What do you must to change is just this : NAME, CHANNEL, TOKEN : 
 
const Discord = require ('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setActivity('NAME', {type: 'STREAMING', url: 'https://twitch.tv/CHANNEL'})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
})

bot.login('TOKEN')
