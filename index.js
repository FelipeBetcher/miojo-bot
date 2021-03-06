const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Estou pronto!")
    bot.user.setActivity('ou melhor xitando no R6', { type: 'PLAYING' })
    bot.user.setStatus("dnd")
})

bot.on("guildMemberUpdate", mem => {
    bot.channels.get("460888924357656615").setName("Membros VIPS: "+mem.guild.roles.get("460550113773879317").members.size)
})

bot.on("guildMemberAdd", mem => {
    bot.channels.get("460893598427381798").setName("Membros totais: "+mem.guild.memberCount)
    mem.addRole("460910412209061903")
    bot.channels.get("460546789498421266").send(mem+" seja bem-vindo, olhe <#460546521256034309> e <#460978980036804608> para ter mais informações")
})

bot.on("guildMemberRemove", mem => {
    bot.channels.get("460893598427381798").setName("Membros totais: "+mem.guild.memberCount)
    bot.channels.get("460546789498421266").send(mem+" saiu do servidor")
})

bot.on('message', async message => {
        if(message.channel.type == "dm") return;
    if(message.author.bot) return;

    const registro = bot.channels.get("460922518560309249")
    var cmd = message.content.split(" ")[0]

    if((message.content.toLowerCase() === "b!preco") || (message.content.toLowerCase() === "b!preço") || (message.content.toLowerCase() === "preço") || (message.content.toLowerCase() === "preco")) {
      message.author.send(new Discord.RichEmbed()
      //.setTimestamp()
      .setColor("#0CBF9D")
      .setTitle("BOOST")
      //.setImage("https://cdn.discordapp.com/attachments/460549914695434252/460976003351576576/image.png")
      //.setFooter(bot.users.get("412582853834965003").username, bot.users.get("412582853834965003").avatarURL)
      .setDescription("**AVISO**\nO preço varia de acordo com os pontos que está ganhando por partida.\n\n**Pagamento**\nPara comprar fale com <@412582853834965003>.\nPagamento via Mercado Pago ou GiftCard Steam.\n⠀")
      .addField("Lista de preços","MD10 → diamante\nPlatina → diamante\nOuro → diamante\nPrata → diamante\nBronze → diamante\nCobre → diamante",true)
      .addField("BRL","R$ 60,00\nR$ 50,00\nR$ 70,00\nR$ 80,00\nR$ 110,00\nR$ 140,00",true))

      message.author.send(new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#0CBF9D")
      .setTitle("MACRO")
      .setImage("https://cdn.discordapp.com/attachments/460549914695434252/460976003351576576/image.png")
      .setFooter(bot.users.get("412582853834965003").username, bot.users.get("412582853834965003").avatarURL)
      .setDescription("**Pagamento**\nPara comprar fale com <@412582853834965003>.\nPagamento via Mercado Pago ou GiftCard Steam.\n\n**Promoção**\nCaso divulgue o macro para 3 pessoas e os mesmos comprarem você ganha o macro de graça.\n⠀"))
    }

    if((cmd.toLowerCase() === "b!boost")) {
      if(message.author.id !== "412582853834965003") return;
      function msg() {
        if(!message.content.slice(8)) return "<@&460550113773879317> **Boost on**"
        if(message.content.slice(8)) return "<@&460550113773879317> **Boost on:** " + message.content.slice(8)
      }
      message.delete()
      message.channel.send(msg())
    }

    if((cmd.toLowerCase() === "b!aviso")) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      if(!message.content.slice(8)) {
        message.author.send(message.author+", escreva algo depois do `b!aviso`")
      }
      if(message.content.slice(8)) {
        bot.channels.get("460917098860904453").send(new Discord.RichEmbed()
        .setColor("#FFCC4D")
        .setTitle("AVISO")
        .setDescription(message.content.slice(8))
        .setThumbnail("https://cdn.discordapp.com/attachments/460917098860904453/460919852744441866/26a0.png"))
      }
      message.delete()
    }

    if((cmd.toLowerCase() === "b!clear")) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
      if(!message.content.slice(8)) {
        message.reply(message.author + " digite um número").then(a => {
          a.delete(3000)
        })
        message.delete()
      }
      if(message.content.slice(8)) {
        if(!isNaN(message.content.slice(8)) && !message.content.slice(8) < 1) {
          var b = parseFloat(message.content.slice(8)).toFixed(0)
          if(b > 99) {
            b = 99
          }
          b++
          message.channel.bulkDelete(b)
          message.reply(b.toString() + " mensagens deletadas").then(a => {
            a.delete(3000)
          })
        } else {
          message.reply("digite um número maior que 0").then(a => {
            a.delete(3000)
          })
          message.delete()
        }
      }
    }

    if((cmd.toLowerCase() === "b!ban")) {
      if(!message.member.hasPermission("BAN_MEMBERS")) return;
        if(!message.mentions.members.first()) {
           message.reply("mencione um usuário").then(msg => {
             msg.delete(3000)
           })
           message.delete()
        }
        if(message.mentions.members.first()) {
          if(!message.mentions.members.first().bannable) {
            message.reply("esse membro não pode ser banido").then(msg => {
              msg.delete(3000)
            })
            message.delete()
          } else {
          function msg() {
            var y = message.content.indexOf(message.mentions.members.first())
            var b = message.content.slice(y)
            b = b.slice(b.split(" ")[0].length)
            if(b) {
              return b.slice(0,1).toUpperCase()+b.slice(1,b.length)
            }
              return "Razão não especificada"
          }
          registro.send(new Discord.RichEmbed()
          .setColor(message.guild.members.get(bot.user.id).highestRole.hexColor)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(message.mentions.members.first() + " **banido por " + message.author + " em " + message.channel + "**")
          .addField("Razão", msg())
          .setFooter("ID: " + message.mentions.members.first().id)
          .setTimestamp())
          message.delete()
          message.mentions.members.first().ban(msg())
        }
      }
    }

    if((cmd.toLowerCase() === "b!kick")) {
      if(!message.member.hasPermission("KICK_MEMBERS")) return;
        if(!message.mentions.members.first()) {
           message.reply("mencione um usuário").then(msg => {
             msg.delete(3000)
           })
           message.delete()
        }
        if(message.mentions.members.first()) {
          if(!message.mentions.members.first().kickable) {
            message.reply("esse membro não pode ser kickado").then(msg => {
              msg.delete(3000)
            })
            message.delete()
          } else {
          function msg() {
            var y = message.content.indexOf(message.mentions.members.first())
            var b = message.content.slice(y)
            b = b.slice(b.split(" ")[0].length)
            if(b) {
              return b.slice(0,1).toUpperCase()+b.slice(1,b.length)
            }
              return "Razão não especificada"
          }
          registro.send(new Discord.RichEmbed()
          .setColor(message.guild.members.get(bot.user.id).highestRole.hexColor)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(message.mentions.members.first() + " **kickado por " + message.author + " em " + message.channel + "**")
          .addField("Razão", msg())
          .setFooter("ID: " + message.mentions.members.first().id)
          .setTimestamp())
          message.delete()
          message.mentions.members.first().kick(msg())
        }
      }
    }

    if(!message.member.roles.map(e => e.id).includes("460550113773879317")) {
      if(message.member.hasPermission("ADMINISTRATOR")) return;
          var oi = {}
          var a = message.content.toLowerCase()

          for(var i = 0; i < a.length; i++) {
          var letra = a.split("")[i]
          if(!oi[letra]) {
          oi[letra] = {
            ve:
            1
          }
          } else {
          oi[letra] = {
            ve:
            oi[letra].ve + 1
          }
          }
          }
          var u = Object.values(oi)
          var t = []
          for(var i = 0; i < u.length; i++) {
          var y = u[i].ve
          if(y > 20) {
          t.push(y)
          }
          }

        var ii = 0
        for(var i = 0; i < message.content.length; i++) {
          var letra = message.content.split("")[i]
          if(letra !== letra.toLowerCase()) {
            ii++
          }
        }
        var raz = []
        if(ii > 10) {
          raz.push("muitas letras maiúsculas")
        }

        var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
        if(re != null){
          raz.push("link")
        }

        if(message.content.length > 256){
          raz.push("mais de 256 caracteres")
        }

        if(t.length > 0) {
          raz.push("muitos caracteres iguais")
        }

        if((t.length > 0) || (ii > 10) || (re != null) || (message.content.length > 256)){
          function oi(){
          raz[0] = raz[0].slice(0,1).toUpperCase()+raz[0].slice(1,raz[0].length)
          if(raz.length === 1) return raz
          raz = [raz.slice(0,raz.length-1).join(", "), raz.slice(raz.length-1,raz.length)]
          return raz
          }
          registro.send(new Discord.RichEmbed()
          .setColor(message.guild.members.get(bot.user.id).highestRole.hexColor)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription("**Mensagem enviada por " + message.author + " deletada em " + message.channel + "**")
          .addField("Razão", oi().join(" e "))
          .setFooter("ID: " + message.author.id)
          .setTimestamp()).catch()
          message.delete(300)
        }
    }

})

bot.login(process.env.BOT_TOKEN);
