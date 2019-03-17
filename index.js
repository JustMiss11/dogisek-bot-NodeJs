const superagent = require("superagent");
const randomPuppy = require("random-puppy");
const ms = require("ms");
const Discord = require("discord.js");
const prefix = ">";
const db = require("quick.db");
const ytdl = require("ytdl-core");
const search = require("youtube-search");
const bot = new Discord.Client();
//reload
bot.on("ready", () => {
       console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

       let statuses = [
       //   `to ${bot.guilds.size} servers!`, //shows in how many servers I am!
          "můj prefix je >", //my Prefix!
          "začni s >help", //simple help!
          "Version: 3.5-alpha!", //Bots version!
          `kolem ${bot.users.size} lidí!` //shows how many users im managing!
       ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});
        bot.user.setStatus("idle"); //online, idle, dnd
    }, 5000)
}); 
//RELOAD AGAIN
//bot.on('raw', (message, event) => {
    //if (event.t === 'MESSAGE_REACTION_ADD'){
	    
	   // let user = message.guild.members.get(event.d.user_id);
	    
	  //  var roleObj = message.guild.roles.find(r => r.name === role);
           //     var memberObj = message.guild.members.get(user.id);
	    
	   // if (event.t === "MESSAGE_REACTION_ADD"){
                   // memberObj.addRole(roleObj);
              //  }
   // }
bot.on("guildMemberAdd", member => {
       let user = member
       let channel = member.guild.channels.find('name', "〔👋〕log");
       let avatar = member.user.avatarURL;
       
       var embed = new Discord.RichEmbed()
       .setAuthor("Welcome!", avatar)
       .setColor("GREEN")
       .setDescription(`Vítej **${user}** na DarkShade! Přečti si <#554197244648357889> a neporušuj je! Jasný?`)
       .setThumbnail(avatar);
       channel.send(embed)
})

bot.on("guildMemberRemove", member => {
       let user = member
       let channel = member.guild.channels.find('id', "544818675157434368");
       let avatar = member.user.avatarURL;
       
       var embed = new Discord.RichEmbed()
       .setAuthor("Papa!", avatar)
       .setColor("RED")
        .setDescription(`Budeš nám chybět **${user}**. ||Ne dělám si prdel nebudeš nám chybět. #kappa||`)
       .setThumbnail(avatar);
       channel.send(embed)
})

bot.on("message", async message => {
       if(message.author.bot) return;
       if(!message.content.startsWith(prefix)) return;
       if(message.channel.dm) return message.author.send("Commands wont work in here.");
       let messageArray = message.content.split(" ");
       let cmd = messageArray[0];
       let args = messageArray.slice(1);
       let content = message.content;
       let author1 = message.author.username;
       let user1 = message.mentions.users.first() || message.author;
       let reason = args.join(" ").slice(0);
       var id = []
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
              .addField("😅 Fun (1)", "`meme`, `say`")
              .addField("🔨 Moderation (4)", "`warn`, `ban`, `kick`, `suspend`")
              .addField("🙂 General (6)", "`report`, `user`, `server`, `cat`, `dog`, `data`")
	      .addField("🔞NSFW (5)", "`boobs`, `anal`, `4k`, `hentai`, `ass`")
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
              if(!user1) return message.channel.send({embed:{
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
              .addField("Reportován:", user1)
              .addField("Reportován od:", author1)
              .addField("Důvod:", reason);
              let channel = message.guild.channels.find('name', "logs");
              channel.send(embed);
              await message.channel.send("✅ || **" + user + " byl reportován");
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
               await message.channel.send("✅ || ** " + user + " byl varován!**");

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
        let reason1 = args.join(" ").slice(0)
     //   var embed = new Discord.RichEmbed()
       // .setAuthor(`${message.guild.name} New Galaxy Core Update!`, message.guild.iconURL)
    //    .setDescription(reason1)
     //   .setFooter(`Log od: ${author1}`)
      //  .setTimeStamp()
      //  .setColor('GREEN');
        let logC = message.guild.channels.find('name', "〔🛠〕ds-core-updates");
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
	       let reasonn = args.join(" ").slice(1);
	       let user1 = message.guild.member(message.mentions.users.first())
              if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
              if(!user1) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <uživatel> \nPoužití: >ban <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              if(!reasonn) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <dúvod> \nPoužití: >ban <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              if(user1.hasPermissions("BAN_MEMBERS")) return message.channel.send({embed:{
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
                         
              .addField("Zabanován/a:", user1)
              .addField("Zabanován/a od:", author1)
              .addField("Dúvod:", reason1)
              .setColor("RED")
              .setTimestamp();
              let logs = message.guild.channels.find('name', "logs")
              await message.guild.member(user1).ban(reasonn).catch(err => console.error(err)); 
              await logs.send(embed)
              message.channel.send(":white_check_mark: ||** Úspěšně zabanován " + user + "za " + reason1);
              
       }//.catch(err => console.error(err));
       //KICK
       if(cmd === `${prefix}kick`){
	       let user = message.guild.member(message.mentions.users.first());
              if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nemáš pravomoc ");
              if(!user) return message.channel.send({embed:{
                     "author":{
                            "name": "Syntax error"
                     },
                     "description": "Toto je běžná chyba.. \nSyntax error <uživatel> \nPoužití: >kick <uživatel> <dúvod>",
                     "color": 0x700606,
                     
              }});
              let reason1 = args.join(" ").slice(1);
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
                         
              .addField("Kicknut/a", user1)
              .addField("Kicknut/a od:", author1)
              .addField("Dúvod:", reason1)
              .setColor("RED")
              .setTimestamp();
              let logs = message.guild.channels.find('name', "logs")
              await message.guild.member(user).kick(reason).catch(err => console.error(err)); 
              await logs.send(embed)
              message.channel.send(":white_check_mark: ||** Úspěšně vyhozen " + user + " za " + reason1);
             
       }
       if(cmd === `${prefix}suspend`){
              
            //  let suspendT = args[1];
           //   let reason1 = args[2];
              let SuspendRole = message.guild.roles.find('name', "►-Suspended");
              let AT1 = message.guild.roles.find('name', "⅀ Sᴘᴏʟᴜᴍᴀᴊɪᴛᴇʟ");               //<@&544863807521030164> <@&544864311076585515> <@&551038392746377237> <@&544549074494291997> <@&548787756348997632> <@&544547020732497920> <@&544548014128365580> <@&>
              let AT2 = message.guild.roles.find('name', "⅀ Sᴜᴘᴘᴏʀᴛ ᴛᴇᴀᴍ");
              let AT3 = message.guild.roles.find('name', "⅀ ʜᴇʟᴘᴇʀ");
              
              let AT4 = message.guild.roles.find('name', "⅀ ᴀᴅᴍɪɴɪsᴛʀáᴛᴏʀ");
              let AT5 = message.guild.roles.find('name', "⅀ ᴍᴀɴᴀžᴇʀ");
              let AT6 = message.guild.roles.find('name', "⅀ ᴍᴏᴅᴇʀáᴛᴏʀ");
	      let AT7 = message.guild.roles.find('name', "⅀ ᴠᴇᴅᴇɴí");
	      var wUser = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]));
              let suspendT = args[1];
              
              if(!wUser) return message.channel.send(":x: || **Zadej člověka**");
             // db.add(`warns_${wUser.id}`, 1)
              if(!suspendT) return message.reply("❌ || **Zadej čas!**");

            //  if(!reason1) return message.channel.send(":x: || **Zadej dúvod!**");
              if(!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send("❌ || **Nemúžeš tento příkaz použít!**");
              
              await(wUser.addRole(SuspendRole.id));
              db.add(`susp_${wUser.id}`, 1)
	       
              var embed = new Discord.RichEmbed()
              .setColor("RED")
              .setAuthor("Suspend log")
              .addField("Suspendován:", user)
              .addField("Administrátor:", author1)
           //   .addField("Dúvod:", reason1)
              .addField("Čas suspenze:", message.createdAt)
              .addField("Čas:", `${ms(ms(suspendT))}`);
              let logs = message.guild.channels.find('name', "logs");
              logs.send(embed);
              user1.removeRole(AT1.id);
              await user1.removeRole(AT2.id);
              await user1.removeRole(AT3.id);
              await user1.removeRole(AT4.id);
              await user1.removeRole(AT5.id);
              await user1.removeRole(AT6.id);
	      await user1.removeRole(AT7.id);
              await message.channel.send("✅ || **" + user1 + " byl suspendován!**");
              setTimeout(function(){
                     user1.removeRole(SuspendRole.id);
                     
                     logs.send(`**<@${user1.id}> byl unsuspendován!**`);
              }, ms(suspendT))
       }
       if(cmd === `${prefix}data`){
	      
              if(args[0] == "warns"){
		      let user = message.mentions.users.first() || message.author;
                      let warns = db.fetch(`warns_${user.id}`);
		    //  let susp = db.fetch(`susp_${user.id}`);
		     // if(!user) user = message.author;
			      var embed = new Discord.RichEmbed()
			      .setAuthor(message.author.username)
			      .addField("Tvá varování:", `${warns? `${warns}` : '0'}`)
			    //  .addField("Tvé suspenze:", `${susp? `${susp}` : '0'}`)
                              .setColor("0xe57e24");
			      message.channel.send(embed)
		      return;
                      }
              if(args[0] == "suspensions"){
		     // let susp = db.fetch(`susp_${user.id}`);
		      let user = message.mentions.users.first() || message.author;
                      let susp = db.fetch(`susp_${user.id}`);
			
		      var embed = new Discord.RichEmbed()
		      .setAuthor(message.author.username)
		      .addField("Tvé suspenze", `${susp? `${susp}` : '0'}`)
		      .setColor("0xe57e24");
		      message.channel.send(embed)
		      return;
             }
             if(args[0] == "oceneni"){
		     let user = message.mentions.users.first() || message.author;
		     let reason = db.fetch(`reason_${user.id}`);
		     let oceneni = db.fetch(`oceneni_${user.id}`);
		     
		     var embed = new Discord.RichEmbed()
		     .setAuthor(user.username)
		     .setColor("0xe5c914")
		     .setDescription(`Tvé ocenění: \nPočet: ${oceneni? `${oceneni}` : '0'} \n Ocenění za: ${reason ? `${reason}` : '** Žádná ocenění**'}`);
		     message.channel.send(embed)
		     return;
	     }
                 
              
              var embed = new Discord.RichEmbed()
              .setAuthor("Data")
              .setColor("BLUE")
              .setDescription("Použití: `>data <data typ>` \n Data: \n `warns` \n `suspensions`");
              message.channel.send(embed)
              return;
            
       }
	       
       if(cmd === `${prefix}dog`){
              let api = "dogs"
              randomPuppy(api).then(api => {
                   const theirembed = new Discord.RichEmbed()
	            .setAuthor("Dog 🐕 ")
                   .setColor(0xff9000)
                   .setImage(api)
                   .setFooter("Galaxy Core")
                   .setTimestamp();
                   message.channel.send(theirembed)
             })
       }
       if(cmd === `${prefix}cat`){
              let api = "cats"
              randomPuppy(api).then(api => {
                   const theirembed = new Discord.RichEmbed()
	            .setAuthor("Cat 🐈 ")
                   .setColor(0xff9000)
                   .setImage(api)
                   .setFooter("Galaxy Core")
                   .setTimestamp();
                   message.channel.send(theirembed)
             })
       }
       if(cmd === `${prefix}server`){
              var serverinfo = new Discord.RichEmbed()
             .setAuthor("Server Info")
             .setColor("RANDOM")
             .addField("Server Name", message.guild.name)
             .addField("Created", message.guild.createdAt)
             .addField("You Already Join", message.member.joinedAt)
             .addField("Owner", message.guild.owner)
             .addField("Owner ID", message.guild.owner.id)

             .setImage(message.guild.iconURL);

             message.channel.send(serverinfo);
       }
       if(cmd === `${prefix}user`){
              let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinfo = new Discord.RichEmbed()
        .setAuthor("User info")
        .addField("Username:", `${message.author.username}#${message.author.discriminator}` + "\n" )
        .addField("ID: ",message.author.id + "\n" )
        .addField("Created At: ", message.author.createdAt)
        .setColor("RANDOM")

        .setThumbnail(message.author.avatarURL)

        message.channel.send(userinfo);

    }else{

      var userinfoo = new Discord.RichEmbed()
          .setAuthor("User info")
          .addField("Username: ", `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" )
          .addField("ID: ", memberInfo.id + "\n" )
          .addField("Created At: ", memberInfo.user.createdAt)
          .setColor("RANDOM")

          .setThumbnail(memberInfo.user.avatarURL);
  
          message.channel.send(userinfoo);
      }
    }
     if(cmd === `${prefix}evals`){
	     
	     var bot = bot;
             var msg = message;

    if (message.author.id !== "342364288310312970") return message.channel.send("Tento příkaz je jen pro Developera!")

    const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .addField('Input', '```js\n' + args.join(" ") + '```')

    try {
      const code = args.join(" ");
      if (!code) return;
      let evaled;
      if (code.includes(`token`)) {
        evaled = 'TOKEN!!! O-oh thats my token';
      } else {
        evaled = eval(code);
      }

      if (typeof evaled !== "string")
      evaled = require('util').inspect(evaled, { depth: 0});

      let output = clean(evaled);
      if (output.length > 1023) {
          embed.addField('Output', '```js\n' + output + '```')
          embed.setFooter(`React to delete message.`);
      } else {
          embed.addField('Output', '```js\n' + output + '```')
          embed.setFooter(`React to delete message.`);
      }
      const m = await message.channel.send(embed);
    } catch (e) {
      let error = clean(e);
      const m = await message.channel.send(embed);
      
    }
     

}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;




 
   }
   if(cmd === `${prefix}announce`){
	   let content = args.join(" ").slice(9);
	   if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply(":x: || **Nemáš BAN MEMBERS pravomoc!**")
	   
      if(args[0] == "everyone"){
	  // let user = message.guild.member(message.mentions.users.first());
	  // let content = args.join(" ").slice(9);
	  // if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply(":x: || **Nemáš BAN MEMBERS pravomoc!**")
	   var embed = new Discord.RichEmbed()
	   .setAuthor("G A L A X Y Core")
	   .setDescription(content)
	   .setFooter(message.author.username)
	   .setColor("0x26cc7e");
	   let channel = message.guild.channels.find('id', "544818063107686420");
	   channel.send("@everyone")
	   await channel.send(embed)
	   message.channel.send("✅ || **Informace odeslána!**")
	   return;
      }
      var embed = new Discord.RichEmbed()
      .setAuthor("G A L A X Y Core")
      .setDescription(content)
      .setFooter(message.author.username)
      .setColor("0x26cc7e");
      let channel1 = message.guild.channels.find('id', "544818063107686420")
      await channel1.send(embed)
      message.channel.send("✅ || **Informace odeslána!**")
      return;
   }
   if(cmd === `${prefix}test`){
	   var msgID = ''
	   let r1 = "🗑";
	   message.channel.send("Lol").then(async message11 => {
	     await message11.react(r1)
           //  await get_message_id(message);
	     msgID += message.id
	   })
   }
   if(cmd === `${prefix}4k`){
	   if (message.channel.nsfw === true) {
              superagent.get('https://nekobot.xyz/api/image')
              .query({ type: '4k'})
              .end((err, response) => {
              message.channel.send({ file: response.body.message });
              });
          } else {
              message.channel.send(":x: || Toto není NSFW channel.!")
          }
   }
   if(cmd === `${prefix}anal`){
	   if (message.channel.nsfw === true) {
              superagent.get('https://nekobot.xyz/api/image')
              .query({ type: 'anal'})
              .end((err, response) => {
              message.channel.send({ file: response.body.message });
              });
          } else {
             message.channel.send(":x: || Toto není NSFW channel!")
          }
   }
   if(cmd === `${prefix}boobs`){
	   if(!message.channel.nsfw) return message.reply("Používej tento příkaz pouze v NSFW roomkách.")
	   let reddit = ["boobs", 
               "tits",
               "animeboobs",
               "bigBoobs",
			 
               "animetits"
                       
                      
                       
          ]

          let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

// message.channel.startTyping(); 

          randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'boobs.png' 
                            }]           
                     })//then(() => message.channel.stopTyping()); 
      }).catch(err => console.error(err)); 
   }
   if(cmd === `${prefix}ass`){
	   if (message.channel.nsfw === true) {
              superagent.get('https://nekobot.xyz/api/image')
              .query({ type: 'ass'})
              .end((err, response) => {
              message.channel.send({ file: response.body.message });
              });
          } else {
             message.channel.send(":x: || Toto není NSFW channel.!")
          }
   }
   if(cmd === `${prefix}hentai`){
	   if (!message.channel.nsfw) return message.channel.send(":x: || Prosím používej tento příkaz jen v NSFW channelech.");
         // return 
           superagent.get('https://nekos.life/api/v2/img/hentai')
             .end((err, response) => {
                var lewdembed = new Discord.RichEmbed()
                    .setTitle(`Hentai`)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setFooter("DS Core", /*/isplayAvatarURL*/)
                    .setTimestamp();
                message.channel.send(lewdembed);
            });
   }
   if(cmd === `${prefix}play`){
	 //  if (!bot.voiceConnection.get('server', message.server)) {
           if (!message.author.voiceChannel) return bot.sendMessage(message, 'Musíš být ve Voice Channelu.')
           bot.joinVoiceChannel(message.author.voiceChannel)
        //   }
           let suffix = message.content.split(" ").slice(1).join(" ")
           if (!suffix) return bot.sendMessage(message, 'Zadej URL nebo Název písničky.')
           play(message, getQueue(message.server.id), suffix)
           
   }
   if(cmd === `${prefix}clean`){
	  // if(message.server.owner.id == message.author.id || message.author.id == config.owner_id || config.admins.indexOf(message.author.id) != -1 || message.server.permissionsOf(message.author).hasPermission('MANAGE_SERVER')){
           let queue = getQueue(message.server.id);
           if(queue.length == 0) return bot.sendMessage(message, `Žádná muzika v queue`);
           for(var i = queue.length - 1;  i >= 0; i--){
                queue.splice(i, 1);
           }
           bot.sendMessage(message, `Vyčištěno!`)
         // }else{
          //  bot.sendMessage(message, 'Only the admins can do this command');
          
   }
   if(cmd === `${prefix}skip`){
	  // if(message.server.owner.id == message.author.id || message.author.id == config.owner_id || config.admins.indexOf(message.author.id) != -1 || message.server.permissionsOf(message.author).hasPermission('MANAGE_SERVER')){
           let player = bot.voiceConnections.get('server', message.server);
            if(!player || !player.playing) return bot.sendMessage(message, 'Však nic nehraju ty debílku :smile:');
            player.stopPlaying()
            bot.sendMessage(message, 'Přeskakuju písničku <:thinksUp:545246334647664681>');
         // }else{
         //   bot.sendMessage(message, ');
        //  }
   }
   if(cmd === `${prefix}pause`){
	 // if(message.server.owner.id == message.author.id || message.author.id == config.owner_id || config.admins.indexOms/e.author.id) != -1){
           let player = bot.voiceConnections.get('server', message.server);
           if(!player || !player.playing) return bot.sendMessage(message, 'Co? Nic nehraju?');
           player.pause();
           bot.sendMessage(message, "Pozastavuji písničku.");
           
   }
   if(cmd === `${prefix}resume`){
	  // if (message.content.startsWith(prefix + 'resume')) {
           //  if(message.server.owner.id == message.author.id || message.author.id == config.owner_id || config.admins.indexOf(message.author.id) != -1){
             let player = bot.voiceConnections.get('server', message.server);
             if(!player) return bot.sendMessage(message, 'Právě žádná muzika nehraje.');
             if( player.playing) return bot.sendMessage(message, 'Muzika už dávno hraje.');
             player.resume();
             bot.sendMessage(message, "Spouštím...");
   }
   if (message.content.startsWith(prefix + 'np') || message.content.startsWith(prefix + 'nowplaying')) {
    let queue = getQueue(message.server.id);
    if(queue.length == 0) return bot.sendMessage(message, "Nic nehraje.");
    bot.sendMessage(message, `${rb}xl\nCurrently playing: ${queue[0].title} | by ${queue[0].requested}${rb}`);
}

if (message.content.startsWith(prefix + 'queue')) {
    let queue = getQueue(message.server.id);
    if(queue.length == 0) return bot.sendMessage(message, "Žádná muzika v Queue");
    let text = '';
    for(let i = 0; i < queue.length; i++){
      text += `${(i + 1)}. ${queue[i].title} | by ${queue[i].requested}\n`
    };
    bot.sendMessage(message, `${rb}xl\n${text}${rb}`);
  }
  if(cmd === `${prefix}suggest`) {
	  let owner = message.guild.members.find('id', "342364288310312970");
	  let message1 = args.join(" ").slice(0);
	  if(!message1) return message.author.send(":x: | **Prosím zadej nějakou novou věc co bys chtěl na mě vidě.**");
	  
	  var embed = new Discord.RichEmbed()
	  .setAuthor("Nová suggesce.", message.author.avatarURL)
	  .setDescription("Máte tu 1 novou suggesci.\n" + message1)
	  .setColor("GREEN")
	  .setFooter(`Suggesce od: ${message.author.username} |`)
	  .setTimestamp()
	  owner.send(embed)
	  
	  return;
	
  }
  if(cmd === `${prefix}ocenit`){
	  if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("Né né ne.. Pouze role s Administrátor pravomocí mohou udělovat ocenění!");
	  let wUser = message.guild.member(message.mentions.users.first());
	  if(!wUser) return message.channel.send("Prosím zadej člověka kterého chceš ocenit.");
	 // if(wUser.id == message.author.id) return message.channel.send("Nemůžeš si sám předat ocenení.");
	  let reason = args.join(" ").slice(22);
	  db.add(`oceneni_${wUser.id}`, 1);
	  db.push(`reason_${wUser.id}`, reason);
	  if(!reason) return message.channel.send("Zadej ocenění.");
	  
	  var succes = new Discord.RichEmbed()
	  .setAuthor(message.guild.username)
	  .setColor("GREEN")
	  .setDescription(`Hráčovy <@${wUser.id}> bylo předáno ocenění ${reason}!`)
	  .setTimestamp();
	  message.channel.send(succes)
  }
  if(cmd === `${prefix}say`){
	  let mesage = args.join(" ").slice(0);
	  
	  if(!mesage) return message.reply(":x: | ** Nějakou zpeávu by to raky chtělo..**");
	  message.channel.send(mesage)
  }
});

//function get_msg_id(message) {
 //   id = message.id;


bot.on("messageReactionAdd", m => { if(m.emoji.identifier === ":wastebasket:") m.message.delete(); })
	//(reaction.emoji.name === "🗑" && reaction.message.id === msgID){
        //   reaction.message.delete()
          // message.delete()
        //}
	//.id != member.id) return;
    // (reaction.emoji.name == '🗑' && !user.bot) {
	    //reaction.message.delete()
    

  

       
bot.login(process.env.TOKEN)
