const Discord = require("discord.js");
const prefix = ">";

const bot = new Discord.Client();

bot.on("ready", () => {
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


bot.on("message", msg => {
       if(msg.author.bot) return;
       if(!msg.content.startsWith(prefix)) return;
       if(msg.channel.dm) return msg.author.send("Commands wont work in here.");
       let messageArray = msg.content.split(" ");
       let cmd = messageArray[0];
       let content = msg.content;
       let author = msg.author.username;
       let user = msg.mentions.members.first();
       
       if(cmd.content.startsWith('Dogisek Bot')) {
              var embed = new Discord.RichEmbed()
              .setAuthor("Dogisek Bot!", msg.author.avatarURL)
              .setColor("BLUE")
              .addField("Prefix:", ">")
              .setTimestamp()
              .setFooter("JustNela je best xd");
              msg.channel.send(embed)
              return;
       }
}); //reload ;)
       
bot.login(process.env.TOKEN)
