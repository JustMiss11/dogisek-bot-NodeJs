const Discord = require("discord.js");
const prefix = ">";

const bot = new Discord.Client();

bot.on("ready", async () => {
       console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

       let statuses = [
       //   `to ${bot.guilds.size} servers!`, //shows in how many servers I am!
          "můj prefix je >", //my Prefix!
          "začni s >help", //simple help!
          "Version: 3.3-alpha!", //Bots version!
          `kolem ${bot.users.size} lidí!` //shows how many users im managing!
       ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});
        bot.user.setStatus("idle"); //online, idle, dnd
    }, 5000)
});


bot.on("message" async () => {
       if(message.author.bot) return;
       if(!message.content.startsWith(prefix)) return;
       if(message.channel.dm) return message.author.send("Commands wont work in here.");
       let messageArray = message.content.split(" ");
       let msg = messageArray[0];
       let content = message.content;
       let author = message.author.username;
       let user = message.mentions.members.first();
       
       if(msg.content.startsWith('Dogisek Bot')) {
              var embed = new Discord.RichEmbed()
              .setAuthor("Dogisek Bot!", message.author.avatarURL)
              .setColor("BLUE")
              .addField("Prefix:", ">")
              .setTimestamp()
              .setFooter("JustNela je best xd");
              message.channel.send(embed)
              return;
       }
}
       
bot.login(process.env.TOKEN)
