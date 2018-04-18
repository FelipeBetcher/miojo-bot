const Discord = require("discord.js");
const PREFIX = "m!";

var bot = new Discord.Client(); 
var hex = '#'+Math.floor(Math.random()*16777215).toString(16);
var fortunes = [
    "Sim",
    "Não",
    "Talvez",
];
var cara = [
    "👑",
    "😃"
];
var teste = [
    "https://cdn.discordapp.com/attachments/432150862190739458/432643557472600076/jpg.jpg",
    "https://cdn.discordapp.com/attachments/432150862190739458/432643581283532812/download.jpg",
    "https://cdn.discordapp.com/attachments/432150862190739458/432643607040753694/download.png",
    "https://cdn.discordapp.com/attachments/432150862190739458/432643650447474688/chip.jpg"
];

bot.on('ready', () => {
    console.log("-------------Miojo-------------")
    console.log("          esta online")
    bot.user.setStatus('dnd') 
});

/*bot.on('guildMemberAdd', member => {
    const channeli = member.guild.channels.find('id', '425865939691765760');
    message.channeli.send(`Seja bem-vindo ao servidor **${member.user.username}**`)
})*/

/*bot.on('message', message => {
    if (message.content.startsWith(PREFIX + "setstatus")){
    const lider = message.author.id === "412582853834965003"
    if (lider){
    const irin = message.content.split(" ").join(" ").slice(12);
    if (irin === 1)
    bot.user.setStatus('online')
    .setColor(0x48d11f)
    .setAuthor("m!setstatus", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Status mudado para: 💚 online")
    .setFooter("Comando ultilizado por " + message.author.tag)
    if (irin === 2)
    bot.user.setStatus('idle') 
    .setColor(0x48d11f)
    .setAuthor("m!setstatus", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Status mudado para: 💛 ausente")
    .setFooter("Comando ultilizado por " + message.author.tag)
    if (irin === 3)
    bot.user.setStatus('dnd') 
    message.channel.send(new Discord.RichEmbed()
    .setColor(0x48d11f)
    .setAuthor("m!setstatus", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Status mudado para: ❤️ não pertube")
    .setFooter("Comando ultilizado por " + message.author.tag)
    )
    }
    if (!lider){
    message.channel.send(new Discord.RichEmbed()
    .setColor(0xcc2020)
    .setAuthor("m!setstatus", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Você não tem permissão para ultilizar esse comando")
    .setFooter("Comando ultilizado por " + message.author.tag)
    )    
}}})*/

bot.on('message', async message => {
    var args = message.content.substring(prefixo.length).split(" ");
    const lider = message.author.id === "412582853834965003"

        if(message.content.startsWith(prefixo + "sa 1")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'PLAYING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("2!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Jogando " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("2!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

        if(message.content.startsWith(prefixo + "sa 2")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'LISTENING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("2!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Ouvindo " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("2!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

        if(message.content.startsWith(prefixo + "sa 3")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'WATCHING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("2!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Assistindo " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("2!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

        if(message.content.startsWith("eu sou gay?")){
            if (lider) { message.channel.send("Não")}
            if (!lider) { message.channel.send("Sim")}}

/*PLAYING
STREAMING
LISTENING
WATCHING*/
})

bot.on('message', message => {
    if (message.content.startsWith(PREFIX + "setgame")){
    const lider = message.author.id === "412582853834965003"
    if (lider){
    const irin = message.content.split(" ").join(" ").slice(10);
    bot.user.setActivity(irin)
    message.channel.send(new Discord.RichEmbed()
    .setColor(0x48d11f)
    .setAuthor("m!setgame", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Jogo mudado para: " + irin)
    //.setDescription("Jogando **" + irin +"**")
    .setFooter("Comando ultilizado por " + message.author.tag)
    )
    }
    if (!lider){
    message.channel.send(new Discord.RichEmbed()
    .setColor(0xcc2020)
    .setAuthor("m!setgame", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle("Você não tem permissão para ultilizar esse comando")
    .setFooter("Comando ultilizado por " + message.author.tag)
    )    
}}})

bot.on('message', async message => {
    if(message.content.startsWith(PREFIX + "ping")) {
    message.react("🏓")
    const m = await message.channel.send("🏓");
    m.edit(new Discord.RichEmbed()
    .setColor(0xf7ed31)
    .setAuthor("m!ping", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
    .setTitle(`Seu ping é de ${Date.now() - m.createdTimestamp} MS`)
    .setFooter("Comando ultilizado por " + message.author.tag)
    )
    };
    });

bot.on('message', async message => {
    if(message.content.startsWith(PREFIX + "vote")) {
    const agree = "✅";
    const disagre = "❎";
    var n = 2;
    var a = message.content.split(' ')
    var first = a.slice(0, n).join(' ')
    var second =  a.slice(n).join(' ')
    var minu = first.slice(7)*1000
    var embed = new Discord.RichEmbed()
    .setColor(0xf7ed31)
    .setAuthor("Votação de " + message.author.tag, message.author.avatarURL)
    .setDescription(second)
    .setFooter("Vote utilizandos as reações")

    let msg = await message.channel.send({embed});
    await msg.react(agree);
    await msg.react(disagre);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagre, {time: minu});
    message.channel.send(new Discord.RichEmbed()
    .setColor(0xf7ed31)
    .setAuthor("Votação de " + message.author.tag + " completa", message.author.avatarURL)
    .setDescription(second + `\n\n${agree}: ${reactions.get(agree).count-1}\n\n${disagre}: ${reactions.get(disagre).count-1}`)
    .setFooter("A votação durou " + first.slice(7) + " segundos"))
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    const boo = message.author.id === "374272831967592479"
    const lider = message.author.id === "412582853834965003"

    switch (args[0].toLowerCase()) {
        case "ajuda":
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xf7ed31)
            .setTitle("Lista de comandos enviada no privado")
            .setAuthor("m!ajuda", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
            .setFooter("Comando ultilizado por " + message.author.tag)).then(msg => msg.delete(5000));
            message.react("✉")
            var embed = new Discord.RichEmbed()
            .setColor(hex)
            .setTitle("PREFIXO: m!")
            .setAuthor("Comandos do Miojo", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
            .setDescription("\n\n**ajuda** - envia os comandos do Miojo no privado\n\n**fale** - repete o que você escreve\n\n**vote** - cria um embed e adiciona a reação: ✅ e ❎. E depois fala o resultado\n\n**pergunta** - responde a sua pergunta com: sim, não ou talvez\n\n**ping** - mostra seu ms\n\n**moeda** - reage a sua mensagem com:👑 ou 😃\n\n**sorteio** - um numero aleatório entre 1 e o número que você escolheu")
            .setFooter("Criado por BTR#6986")
            message.author.send({embed});
            break;
        case "moeda":
            message.react(cara[Math.floor(Math.random() * cara.length)]);
            break;
        case "image":
            var embed = new Discord.RichEmbed()
            .setColor(0xf7ed31)
            .setImage(teste[Math.floor(Math.random() * teste.length)]);
            message.channel.send({embed});
            break;
        case "oi":
            const sallum = message.author.tag === "SALLUM#9767"
            if (lider)
            message.channel.send("Oi, meu líder");
            if (boo)
            message.channel.send("Põe ordem no cão");
            if (sallum)
            message.channel.send("Oi, sallum gay");
            if (!lider && !boo && !sallum)
            message.channel.send("Oi");
            break;
        case "sorteio":
            const lama = message.content.split(" ").join(" ").slice(10)
            if (args[1]) {
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xf7ed31)
            .setTitle(Math.floor(Math.random() * ((lama) - 1)) + 1))
            } else {
                var embed = new Discord.RichEmbed()
                .setColor(0xf7ed31)
                .setAuthor("m!sorteio", "https://images-ext-1.discordapp.net/external/TBdknEe5W9Jz2fzWrkBU1PFI1pQrjcM9pL1gqgbgE7Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/431244678583549952/8347da5b120a86d8aa39571bdbe29cce.png?width=531&height=531")
                .setTitle("Como usar?")
                .setDescription("Basta colocar algum número na frente do comando")
                .addField("Exemplo:","m!sorteio 10")
                .setFooter("Ajudinha para " + message.author.tag)
                message.channel.send({embed});
            }
            break;
        case "color":
                message.channel.send("Gerando cor").then(a => {
                    setTimeout(function () {
                        a.edit(`Gerando cor.`)
                    }, 300)
                    setTimeout(function () {
                        a.edit(`Gerando cor..`)
                    }, 1000)
                    setTimeout(function () {
                        a.edit(`Gerando cor...`)
                    }, 1000)
                    setTimeout(function () {
                        a.edit(`Gerando cor....`)
                    }, 1000)
                    setTimeout(function () {
                        a.edit('#'+Math.floor(Math.random()*16777215).toString(16))
                    }, 1000)
                })
            break;
        /*case "oi":
            message.channel.send("0")
            setInterval(function () {
                message.channel.send(`${bot.message.get(Number).count+1}`)
            }, 1000);
            break;*/
        case "fale":
            const iri = message.content.split(" ").join(" ").slice(6);
            if (args[1]) {message.channel.send(`${iri}`);}
            else {message.channel.send("Escreva alguma coisa para eu dizer");}
            break;
        case "pergunta":
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("Escreva alguma coisa pra eu responder"); 
            break;
        /*default:
            message.reply("Comando inválido").then(msg => msg.delete(5000));
            break;*/
    }
});

bot.login(process.env.BOT_TOKEN);
