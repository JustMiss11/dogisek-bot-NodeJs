const randomPuppy = require("random-puppy");
const ms = require("ms");
const Discord = require("discord.js");
const prefix = ">";
const db = require("quick.db");
const bot = new Discord.Client();
//reload
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


bot.on("message", async message => {
       if(message.author.bot) return;
       if(!message.content.startsWith(prefix)) return;
       if(message.channel.dm) return message.author.send("Commands wont work in here.");
       let messageArray = message.content.split(" ");
       let cmd = messageArray[0];
       let args = messageArray.slice(1);
       let content = message.content;
       let author1 = message.author.username;
       let user = message.mentions.members.first();
       let reason = args.join(" ").slice(0);
       //ping
       if(cmd === `${prefix}PING`.toLowerCase ()) {
              var embed = new Discord.RichEmbed()
              .setAuthor("GALAXY Core!", message.author.avatarURL)
              .setColor("BLUE")
              .addField("Prefix:", ">")
              .addField("Pong :P", "POOOOOOOOOOOOOMG")
              .setTimestamp()
              .setFooter("JustNela je best xd");
              message.channel.send(embed)
              return;
       }
       //invite
       if(cmd === `${prefix}invite`.toLowerCase()) {
              if(message.author.id !== "342364288310312970") return message.channel.send("Nejsi developer!");
     //  if(cmd === "invite".toLowerCase()) {
              var embed = new Discord.RichEmbed()
              .setAuthor("Invitni me")
              .setThumbnail(message.author.avatarURL)
              .setFooter(author1 + " mě chtěl invitnout!")
              .setDescription("[INVITE](https://discordapp.com/api/oauth2/authorize?client_id=527487615025545227&permissions=8&scope=bot)")
              .setColor("GREEN");
              message.channel.send(embed)
              return;
       }
       //help
       if(cmd === `${prefix}help`){
              var embed = new Discord.RichEmbed()
              .setAuthor(`${message.guild.name}`, message.guild.iconURL)
              .setColor("GREEN")
              .setDescription("Pokud budete spamovat/zneužívat nějaký z těhto příkazů tak dostanete warn; warn, ban, kick, report")
              .addField("Pro Developera", "Tyto příkazy jsou jen pro Developera!", true)
              .addField("invite", "Dá Invite na bota")
              .addField("log", "Pošle novej update.")
              .setTimestamp()
              .addField("😅 Fun (1)", "`meme`")
              .addField("🔨 Moderation (3)", "`warn`, `ban`, `kick`")
              .addField("🙂 General (1)", "`report`")
              .addField("Pomohlo ti to?", ":white_check_mark: ANO \n:x: NE")
              .setFooter("Dogisek Bot © 2019");
              message.channel.send(embed).then(async msg =>{
                     
              
                     let reaction1 = "❌";
                     let reaction2 = "✅";
                     await msg.react(reaction1);
                     await msg.react(reaction2);
                     
                     if(!reaction1) return message.channel.send("Pokusíme se to opravit :/");
                     });
              return;
       }
       //report
       if(cmd === `${prefix}report`){
              if(!user) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "color": 0x700606,
                     "description": "Toto je normální chyba. \nSyntax error: <user> \nUsage: >report <user> <důvod>",
                    
                     //reload ::::::)))))))
                     
              }})
              if(!reason) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "color": 0x700606,
                     "description": "Toto je normální chyba. \nSyntax error: <důvod> \nUsage: >report <user> <důvod>",
                    
                     //reload ::::::)))))))
                     
              }})
              var embed = new Discord.RichEmbed()
              .setAuthor("Noví report", message.author.avatarURL)
              .setColor("RED")
              .addField("Reportován:", user)
              .addField("Reportován od:", author1)
              .addField("Důvod:", reason);
              let channel = message.guild.channels.find('name', "logs");
              channel.send(embed);
       }
       //warn
       if(cmd === `${prefix}warn`){
          //  const Discord = require("discord.js");
//const fs = require("fs");
            
//let warns = JSON.parse(fs.readFileSync("./data/warns.json", "utf8"));
         //   const db = require('quick.db');



  //!warn @daeshan <reason>
           if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
  //let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
           var wUser = message.mentions.users.first() || bot.users.get(args[0]);
           if(!wUser) return message.reply("Couldn't find them yo");
 // if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
           let reason = args.join(" ").slice(22);
  if(!reason) return message.reply("Specify a reason.............. ||noob..||")
           let warnchannel = message.guild.channels.find('name', "logs");
           if(!warnchannel) return message.reply("Couldn't find channel");
             const warns = db.fetch(`warns_${wUser.id}`);
             const reasonDB = db.fetch(`reason_${wUser.id}`);

  //if(!warns) warns = "0";
//pls Funguj 
  //warns[wUser.id].warns++;

              db.add(`warns_${wUser.id}`, 1)
              db.push(`reason_${wUser.id}`, reason)

              let warnEmbed = new Discord.RichEmbed()
              .setDescription("Warns")
              .setAuthor(message.author.username)
              .setColor("#fc6400")
              .addField("Warned User", `<@${wUser.id}>`)
              .addField("Warned In", message.channel)
              .addField("Number of Warnings", warns+1)
              .addField("Reason", reason);

               warnchannel.send(warnEmbed);

           if(warns == 1){
              let muterole = message.guild.roles.find(`name`, "1. STRIKE");
              if(!muterole) return message.reply("You should create that role dude.");

              let mutetime = "20m";
              await(wUser.addRole(muterole.id));
              message.channel.send(`<@${wUser.id}> has been temporarily muted`);

          setTimeout(function(){
             wUser.removeRole(muterole.id)
             message.reply(`<@${wUser.id}> has been unmuted.`)
          }, ms(mutetime))
          }
          if(warns == 2){
          let muterole = message.guild.roles.find(`name`, "2.STRIKE");
          if(!muterole) return message.reply("| Create a muted role!");
    
          let mutetime = "2h";
          await(wUser.addRole(muterole.id));
          message.channel.send(`<@${wUser.id}> has been muted for 2 hours.`);
    
          setTimeout(function(){
             wUser.removeRole(muterole.id)
             message.reply(`<@${wUser.id}> has been unmuted.`)
         }, ms(mutetime))
         }
         if(warns == 3){
           let muterole = message.guild.roles.find(`name`, "3.STRIKE");
          if(!muterole) return message.reply("| Create a muted role!");
    
          let mutetime = "2h";
          await(wUser.addRole(muterole.id));
          message.channel.send(`<@${wUser.id}> has been muted for 2 hours.`);
    
          setTimeout(function(){
             wUser.removeRole(muterole.id)
             message.reply(`<@${wUser.id}> has been unmuted.`)
         }, ms(mutetime))
         }
     }
       //meme
     if(cmd === `${prefix}meme`){

         let reddit = ["meme",
                       "animemes", 
                       "MemesOfAnime",
                       "animememes",
                       "AnimeFunny",
                       "dankmemes", 
                       "dankmeme"
                      ]

         let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

 //message.channel.startTyping(); 

         randomPuppy(subreddit).then(async url => {
                            await message.channel.send({
                                  files: [{ 
                                         attachment: url, 
                                         name: "meme.png"
                                                
                                              
                                 }]           
                           })//then(() => message.channel.stopTyping()); 
               }).catch(err => console.error(err));
     };
     //log
     if(cmd === `${prefix}log`){
        if(message.author.id !== "342364288310312970") return message.reply('Nejsi Developer tohodle bota!');
        let reason1 = args.join(" ").slice(22)
     //   var embed = new Discord.RichEmbed()
       // .setAuthor(`${message.guild.name} New Galaxy Core Update!`, message.guild.iconURL)
    //    .setDescription(reason1)
     //   .setFooter(`Log od: ${author1}`)
      //  .setTimeStamp()
      //  .setColor('GREEN');
        let logC = message.guild.channels.find('name', "🤖galaxy-core-updates");
        logC.send({embed:{
               "author":{
                      "name": message.guild.name
               },
               "color": "1118316",
               "description": reason1,
               "footer": {
                      "text": `Log od ${author1}`,
                      "icon_url": message.author.avatarURL
               }
        }})
        return;
       };
       //ban
       if(cmd === `${prefix}ban`){
              if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
              if(!user) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <uživatel> \nPoužití: >ban <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              if(!reason) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <dúvod> \nPoužití: >ban <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              if(user.hasPermissions("BAN_MEMBERS")) return message.channel.send({embed:{
                     "author":{
                            "name": "Error"
                     },
                     "description": "Nemohu tohodle uživatele zabanovat. \nUživatel má pravomoc: BAN_MEMBERS.",
                     "color": 0x700606,
                     
              }});
            //  if(!message.author.hasPermissions("BAN_MEMBERS")) return message.channel.send("Nemáš pravomoc.");
              let reason1 = args.join(" ").slice(22);
              var embed = new Discord.RichEmbed()
              .setAuthor(author1 + " zabanoval/a")
                         
              .addField("Zabanován/a:", user)
              .addField("Zabanován/a od:", author1)
              .addField("Dúvod:", reason1)
              .setColor("RED")
              .setTimestamp();
              let logs = message.guild.channels.find('name', "logs")
              await message.guild.member(user).ban(reason1).catch(err => console.error(err)); 
              await logs.send(embed)
              
       }//.catch(err => console.error(err));
       //KICK
       if(cmd === `${prefix}kick`){
              if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
              if(!user) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <uživatel> \nPoužití: >kick <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              let reason1 = args.join(" ").slice(22);
              if(!reason1) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <dúvod> \nPoužití: >kick <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              if(user.hasPermissions("KICK_MEMBERS")) return message.channel.send({embed:{
                     "author":{
                            "name": "Error"
                     },
                     "description": "Nemohu tohodle uživatele kicknout. \nUživatel má pravomoc: KICK_MEMBERS.",
                     "color": 0x700606,
                     
              }});
            //  if(!message.author.hasPermissions("BAN_MEMBERS")) return message.channel.send("Nemáš pravomoc.");
              
              var embed = new Discord.RichEmbed()
              .setAuthor(author1 + " kickul/a")
                         
              .addField("Kicknut/a", user)
              .addField("Kicknut/a od:", author1)
              .addField("Dúvod:", reason1)
              .setColor("RED")
              .setTimestamp();
              let logs = message.guild.channels.find('name', "logs")
              await message.guild.member(user).ban(reason1).catch(err => console.error(err)); 
              await logs.send(embed)
              
       }
});
       
bot.login(process.env.TOKEN)
