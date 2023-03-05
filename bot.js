
const { SlashCommandBuilder } = require("@discordjs/builders");
const { INSPECT_MAX_BYTES } = require("buffer");
const { Console } = require("console");
const { channel } = require("diagnostics_channel");



const play = require('play-dl'); // Everything




const { video_basic_info, stream } = require('play-dl');

const { createAudioPlayer, createAudioResource ,Events, AttachmentBuilder,GatewayIntentBits , StreamType, demuxProbe, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice')



const ytdl = require("ytdl-core");

const ytSearch = require('yt-search');

//const { MembershipScreeningFieldType } = require("discord-api-types/v10");
const { Client, Intents, ReactionCollector, MessageEmbed, DiscordAPIError, discord, PermissionsBitField} = require("discord.js");

const Discord = require("discord.js");
const { startsWith, indexOf } = require("lodash");
const { addAbortSignal } = require("stream");
//const { times } = require("lodash");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS","GUILD_VOICE_STATES"] })







//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
                            //partial: ["MESSAGE", "CHANNEL", "REACTION"] });



const APP_CONFIG = require("./config.json");
//const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

try {
    const data = new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Commande pour suprimer des messages")
    //.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers)
    .addIntegerOption(option =>
        option.setName("number")
            .setDescription("Nombres de messages a suprimer")
            .setRequired(true)
            
            );

const set_name = new SlashCommandBuilder()
    .setName("setname")
    .setDescription("Set le nom du bot")
    //.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers)
    .addStringOption(option =>
        option.setName("nom")
            .setDescription("Le nom du bot")
            .setRequired(true)
        );

const help = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Send help")
            //.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers)
 
const viewsondage = new SlashCommandBuilder()
    .setName("viewsondage")
    .setDescription("Regarde ou en sont les sondages !")            
                    
const ticket = new SlashCommandBuilder()
    .setName("ticket")           
    .setDescription("Utilise la fonction de ticket !")
    .addStringOption(option => 
        option.setName("channel")
            .setDescription("choisit le channel du bot")
            .setRequired(true)
            )
    .addStringOption(option => 
        option.setName("description")
            .setDescription("Choisit la description de ton ticket")
            .setRequired(true)
                    );

const sondage = new SlashCommandBuilder()
    .setName("sondage")           
    .setDescription("fais un sondage !")
    .addStringOption(option => 
        option.setName("sondage")
            .setDescription("Quels est ton sondage ?")
            .setRequired(true)
            )
    .addStringOption(option => 
        option.setName("choix_1")
            .setDescription("Choisit un choix !")
            .setRequired(true)
                    )
    .addStringOption(option => 
         option.setName("choix_2")
            .setDescription("Choisit un choix !")
            .setRequired(true)
    )

    const chatGpt = new SlashCommandBuilder()
    .setName("chatgpt")           
    .setDescription("utilise chat gpt")
    .addStringOption(option => 
        option.setName("question")
            .setDescription("quels est la question que tu veux poser a chat gpt ?")
            .setRequired(true)
            )
    
    const dallee = new SlashCommandBuilder()
            .setName("dallee")           
            .setDescription("utilise dallee")
            .addStringOption(option => 
                option.setName("question")
                    .setDescription("quels est l'image que tu veux génerer avec dallee ?")
                    .setRequired(true)
                    )
    

const annonce = new SlashCommandBuilder()
        .setName("annonce")
        .setDescription("Fais une annonce a ton serveur !")
        .addStringOption(option => 
            option.setName("titre")
            .setDescription("Choisit un titre !")
            .setRequired(true)
            )
        .addStringOption(option => 
            option.setName("annonce")
            .setDescription("Choisit une annonce !")
            .setRequired(true)
            )

const configuration = new SlashCommandBuilder()
    .setName("config")
    .setDescription("Pour configurer le bot")


const rôles = new SlashCommandBuilder()
            .setName("rôles")
            .setDescription("Ajoute des rôles reaction !")

const avatar = new SlashCommandBuilder()
            .setName("avatar")
            .setDescription("montre l'avatar d'un utilisteur")
            .addUserOption(option => 
                option.setName("user")
                    .setDescription("l'utilisateurs dont tu veux voir l'avatar."))
                    

const ban = new SlashCommandBuilder()
                    .setName("ban")
                    .setDescription("permet de bannit un utilistaeur")
                    .addUserOption(option => 
                        option.setName("user")
                            .setDescription("l'utilisateurs que tu veux bannir"))

const info = new SlashCommandBuilder()
                    .setName("info")
                    .setDescription("Donne des informations sur un utilisateur.")
                    .addUserOption(option => 
                        option.setName("user")
                            .setDescription("L'utilistaeur dont tu veux avoir les information"))



const kick = new SlashCommandBuilder()
                            .setName("kick")
                            .setDescription("permet de kick un utilistaeur")
                            .addUserOption(option => 
                                option.setName("user")
                                    .setDescription("l'utilisateurs que tu veux kick"))


const frvr = new SlashCommandBuilder()
                                    .setName("frvr")
                                    .setDescription("pour aller sur frvr")
                                    
            

client.login(APP_CONFIG.bot_token);
client.on("ready", () => {
    console.log("BOT is now ready to Go");
    client.user.setActivity("à FRVR avec noan.", {type: "PLAYING"});
    client.application.commands.create(data)
    client.application.commands.create(avatar)
    client.application.commands.create(info)
    client.application.commands.create(ban)
    client.application.commands.create(kick)
    client.application.commands.create(frvr)
    client.application.commands.create(chatGpt)
    client.application.commands.create(dallee)
    //client.guilds.cache.get("781196291546808330").commands.create(data);

    client.application.commands.create(set_name)
    //client.guilds.cache.get("781196291546808330").commands.create(set_name);

    client.application.commands.create(help)
    //client.guilds.cache.get("781196291546808330").commands.create(help);

    client.application.commands.create(ticket)
    //client.guilds.cache.get("781196291546808330").commands.create(ticket);

    client.application.commands.create(sondage)
    //client.guilds.cache.get("781196291546808330").commands.create(sondage);

    client.application.commands.create(viewsondage)
    //client.guilds.cache.get("781196291546808330").commands.create(viewsondage);

    client.application.commands.create(configuration)
   // client.guilds.cache.get("781196291546808330").commands.create(configuration);

   client.application.commands.create(annonce)
   //client.guilds.cache.get("781196291546808330").commands.create(annonce);

   client.application.commands.create(rôles)
   //client.guilds.cache.get("781196291546808330").commands.create(rôles);
   
  /* const adminRole = message.guild.roles.cache.find(r => r.name === 'Staff');
   if (message.member.roles.cache.some(role => role.id === adminRole.id)) {
       
   } 
 


   const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
       
            } 
 
*/


    client.user.setUsername("NoanBot 🎧");

    client.on("messageCreate", message => {
        if (message.content.startsWith(prefix +'noan'))  {
            const olo = new MessageEmbed()
                    
            .setTitle(monNom)       
                    .setColor("1E90FF")
                    .setImage("https://cdn.discordapp.com/emojis/857715273887776788.webp?size=96&quality=lossless")
                    
                 
                    
                    .setDescription("its noan")
                .setTimestamp()

            message.channel.send({embeds: [olo]} )
        }

        if(message.content.startsWith("sigma") || message.content.startsWith("incredibeble")) {
            message.react("🗿")
        }
    })


    client.on("interactionCreate", interaction => {

        if(interaction.isCommand) {
            if(interaction.commandName == "info") {
                user = interaction.options.getUser("user")

                const avatarURL = user.avatarURL()
                const response = `\n\n**Pseudo** : ${user.username}\n\n**Date de Création du compte** : ${user.createdAt}\n\n**Identifiant** : ${user.id}\n\n`;


            const olo = new MessageEmbed()
                    
            .setTitle(`${user.username +"#" + user.discriminator}`)       
                    .setColor("1E90FF")
                    .setThumbnail(` ${avatarURL}`)
                    
                    
                    
        .setDescription(response)
        .setTimestamp()

            interaction.reply({embeds: [olo]})
            }
        }

    })
    
    client.on("messageCreate", async message => {
        if (message.content.startsWith(prefix +'info')) {
            const user = message.mentions.users.first();

            if(!user) {
                const userss = message.author

                const response = `\n\n**Pseudo** : ${userss.username}\n\n**Date de Création du compte** : ${userss.createdAt}\n\n**Identifiant** : ${userss.id}\n\n`;

                const avatarURL = userss.avatarURL()


            const olo = new MessageEmbed()
                    
            .setTitle(`${userss.username +"#" + userss.discriminator}`)       
                    .setColor("1E90FF")
                    .setThumbnail(` ${avatarURL}`)
                    
                 
                    
                    .setDescription(response)
                .setTimestamp()

            message.channel.send({embeds: [olo]} )
            
            }
            else {
                const avatarURL = user.avatarURL()
                const response = `\n\n**Pseudo** : ${user.username}\n\n**Date de Création du compte** : ${user.createdAt}\n\n**Identifiant** : ${user.id}\n\n`;


            const olo = new MessageEmbed()
                    
            .setTitle(`${user.username +"#" + user.discriminator}`)       
                    .setColor("1E90FF")
                    .setThumbnail(` ${avatarURL}`)
                    
                    
                    
        .setDescription(response)
        .setTimestamp()

            message.channel.send({embeds: [olo]})
            //message.channel.send(response);
            }
            
          }
    

          })


          
         






    client.on("messageCreate", async message => {

        if(message.content.startsWith(prefix + "te")) {
            

            
            
            const olo = new MessageEmbed()
                    
                                .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                            .setDescription("un texte")
                            .setTimestamp()
                    
                                message.channel.send({embeds: [olo]}).then( message => {
                                    
                                    message.react("☠️")
                                    
                                }
                                    
                                )

        }
       
    })

    client.on('messageReactionAdd', async (reaction, user) => {
        // Vérifiez si la réaction a été ajoutée à un message de votre serveur Discord
        console.log("loli")
      
          // Vérifiez si la réaction est celle que vous souhaitez utiliser pour attribuer le rôle
          if (reaction.name === '☠️') {
            // Ajoutez le rôle au membre
            message.channel.send("oui")
          
        }
      });

    




    
    

    //ticket

    client.on("interactionCreate",  interaction => {
        
        if(interaction.isCommand) {
            if(interaction.commandName == "avatar") {
                

               
                user = interaction.options.getUser("user")
                const avatarURL = user.avatarURL();
                
                

                interaction.reply(` ${avatarURL}`)
            }
        }
    })
   
    client.on('message', async message => {
  if (message.content.startsWith(prefix + "avatar")) {
    
    
    
        const user = message.mentions.users.first();
        if(!user) {
            const avatarURL = message.author.avatarURL();
            message.channel.send(` ${avatarURL}`);
        }

        else { 
           const avataruser = user.avatarURL();
            message.channel.send(` ${avataruser}`)
        }
        
     
  }

  
});  




client.on("messageCreate", message => {
    if(message.content.startsWith(prefix +  "frvr" || message.content.startsWith(prefix + "FRVR"))) {
        const olo = new MessageEmbed()
                    
                                .setTitle("FRVR")       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                            .setDescription("Voici le lien du Saint-Graal **FRVR** pour jouer en cours en toute discretion et rater sa scolarité.")
                            .setURL("https://frvr.com/")
                            .setTimestamp()
                    
                                message.channel.send({embeds: [olo]})
    }
})

client.on("interactionCreate", interaction => {
    if(interaction.isCommand) {
        if(interaction.commandName == "frvr") {
            const olo = new MessageEmbed()
                    
                                .setTitle("FRVR")       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                            .setDescription("Voici le lien du Saint-Graal **FRVR** pour jouer en cours en toute discretion et rater sa scolarité.")
                            .setURL("https://frvr.com/")
                            .setTimestamp()
                    
                                interaction.reply({embeds: [olo]})
        }
    }
})



client.on("interactionCreate", interaction => {
    if(interaction.isCommand) {
        if(interaction.commandName == "ban") {
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
   if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
    user = interaction.options.getUser("user")
   
    const member = interaction.guild.members.cache.get(user.id);
    const olo = new MessageEmbed()
                    
                                .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                            .setDescription("Membre Bannis")
                            .setTimestamp()
                    
    interaction.reply({embeds: [olo],ephemeral:true})
    member.ban({ days: 7 });
    

  }



            
        }
    }
})

client.on('message', message => {
    if (message.content.startsWith(prefix + "ban")) {

        const adminRole = message.guild.roles.cache.find(r => r.name === 'Staff');
   if (message.member.roles.cache.some(role => role.id === adminRole.id)) {
    const user = message.mentions.users.first();
    if (!user) {
      return message.channel.send('Vous devez mentionner un utilisateur à bannir dans votre commande.');
    }
    const member = message.guild.members.cache.get(user.id);
    member.ban({ days: 7 });
  }
   } 
      
  });

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix +'kick')) {
        const adminRole = message.guild.roles.cache.find(r => r.name === 'Staff');
   if (message.member.roles.cache.some(role => role.id === adminRole.id)) {
    const user = message.mentions.users.first();
    if (!user) {
      return message.channel.send('Vous devez mentionner un utilisateur à "kicker" dans votre commande.');
    }
    const member = message.guild.members.cache.get(user.id);
    member.kick();
   } 
 }
    
      
    }
  );

  client.on("interactionCreate", interaction => {
    if(interaction.isCommand) {
        if(interaction.commandName == "kick") {
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
   if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
    user = interaction.options.getUser("user")
   
    const member = interaction.guild.members.cache.get(user.id);
    const olo = new MessageEmbed()
                    
                                .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                            .setDescription("Membre kick")
                            .setTimestamp()
                    
    interaction.reply({embeds: [olo],ephemeral:true})
    try {
        member.kick()
    } catch(error) {
        console.log(error)
    }
    
    

  }



            
        }
    }
})
        
        

    if (true) {
        var toto;
    
        //client.channels.cache.get(`1016373854727315606`).send("123");



        console.log("youpi");
        
    }
})
 
//var importante

//const myPlayer = createAudioPlayer();

prefix = "n!"

monNom = "NoanBot 🎧"

helping =false

var m1 = ""


//config

var chan = ""



var base = ""

var setarriver = ""

var setdepart = ""

var bienvenue = "Souhaiton lui la bienvenue !"

var adieux = "C'est trop triste..."

var non1 = false

var arriversurleserv = false 

var quitteleserv = false

var cl = false

var ab = false 

var messarriver = ""

var sup = ""
var nom1 = false

var co = false 

var ca = false

var ce = false

var cm = false

var cn = false

var ct = false

var cb = false

var messdepart = ""

var sop = ""

var oki = false

var a1 = false 

prof = ""
client.on("interactionCreate", async interaction => {
    
    if(interaction.isCommand) {
        if(interaction.commandName === "config"){
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            messarriver = ""
            
            
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
                .setCustomId("oui1")
                .setLabel("oui")
                .setStyle("SUCCESS")
            )
            .addComponents( new Discord.MessageButton()
                .setCustomId("non1")
                .setLabel("non")
                .setStyle("DANGER")
                
                )
            const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription("Veux tu configurer ton bot ? ")
                    
                    .setTimestamp()
                    
            
            interaction.reply({embeds: [helpe], components: [row]})    
                
            m1 = interaction.id
            chan = interaction.channel.id 
            console.log(chan)
           
            
        
            
            } 

            

        }
    
    if(interaction.isButton) {
        messarriver = ""

        
        if(interaction.customId === "oui1") {
            interaction.message.delete()

            client.message
            
            
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
                .setCustomId("oui2")
                .setLabel("oui")
                .setStyle("SUCCESS")
            )
            .addComponents( new Discord.MessageButton()
                .setCustomId("non2")
                .setLabel("non")
                .setStyle("DANGER")
                
                )
            const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription(" Veux tu envoyer un messages quand un membre arrive dans le serveur ?")
                    .setTimestamp()
                    
            
            interaction.channel.send({embeds: [helpe], components: [row]})

        }
        else if(interaction.customId === "non1") {
            interaction.message.delete()
            const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription("Fin de la configuration !")
                    .setTimestamp()
                    
            
            interaction.channel.send({embeds: [helpe]})
            
            

        }
        
        
        if(interaction.customId === "oui2" ){
            interaction.message.delete()
            ca = true 
            arriversurleserv = true

            setarriver = ""
            
            if(ca == true){
                console.log("yopla")

                const helpe = new MessageEmbed()

                                .setTitle(monNom)       
                                .setColor("1E90FF")
                                    
                                    
                                    
                                .setDescription("merci d'écrire l'id du salon ou envoyer le message !")
                                .setTimestamp()

                    interaction.reply({embeds: [helpe], ephemeral: true})
                    m1 = interaction.id
                    
                    
                client.on("messageCreate", message => {
                    
                    
                        if(ca == true ) {
                            
                            const str = message.content.substring(base.length)
                            setarriver = str
                            
                            console.log(setarriver)

                            

                            if(setarriver != "") {
                                message.delete()
                                
                                
                                ca = false
                                ce = true
                            }
                            
                    }

                    
                        
                         
                    if(ce == true ){
                        
                        var row = new Discord.MessageActionRow()
                        .addComponents( new Discord.MessageButton()
                            .setCustomId("oui3")
                            .setLabel("oui")
                            .setStyle("SUCCESS")
                        )
                        .addComponents( new Discord.MessageButton()
                            .setCustomId("non3")
                            .setLabel("non")
                            .setStyle("DANGER")
                            
                            )
                        const helpe = new MessageEmbed()
            
                                .setTitle(monNom)       
                                .setColor("1E90FF")
                                
                                
                                
                                .setDescription("Veux tu modifier le message d'acceuil sur le serveur ? Celui actuel étant  : \n **"+ bienvenue +"**")
                                .setTimestamp()
            
                        message.channel.send({embeds: [helpe], components: [row]})
                        ce = false 
                        
                    }
                   
                    
                    

            
                })
            }
        }
        
        
        if(interaction.customId === "oui3" ) {
            interaction.message.delete()
            
            const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription("Ecrit ton message !")
                    .setTimestamp()

            interaction.reply({embeds: [helpe],ephemeral: true})
            arriversurleserv = true
            cl = true 

        
            if (cl == true ) { 
                
                client.on("messageCreate", message =>  {
                    if(cl == true ) {
                        
                        const str = message.content.substring(base.length)
                        messarriver = str
                        console.log(messarriver)

                        if(messarriver != "") { 
                            message.delete()
                            cl = false
                            
                            console.log(messarriver)
                        var row = new Discord.MessageActionRow()
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("oui5")
                                .setLabel("oui")
                                .setStyle("SUCCESS")
                            )
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("non5")
                                .setLabel("non")
                                .setStyle("DANGER")
                                    
                                    )
                                const olo = new MessageEmbed()
                    
                                        .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                                        .setDescription("Le message que tu a choisit est : **" + messarriver + "**")
                                        .setTimestamp()
                    
                                message.channel.send({embeds: [olo], components: [row]})
                                sup = messarriver
                        }
                    }
                }
               )
            }
        
        
            
        
        
    }
        if(interaction.customId == "oui5") {
            bienvenue = sup
            console.log(bienvenue)
        }

    
        if(interaction.customId == "oui5" || interaction.customId == "non2" || interaction.customId == "non3" || interaction.customId == "non5") {
            interaction.message.delete()
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
                .setCustomId("oui6")
                .setLabel("oui")
                .setStyle("SUCCESS")
            )
            .addComponents( new Discord.MessageButton()
                .setCustomId("non6")
                .setLabel("non")
                .setStyle("DANGER")
                    
                    )
                const olo = new MessageEmbed()

                        .setTitle(monNom)       
                        .setColor("1E90FF")
                        
                        
                    
                        .setDescription(" Veux tu envoyer un messages quand un membre quitte le serveur ?")
                        .setTimestamp()

                interaction.channel.send({embeds: [olo], components: [row]})
            }
        if(interaction.customId === "oui6" ){
            interaction.message.delete()
                    cm = true 
                    
        
                    setdepart = ""
                    quitteleserv = true
                    
                    if(cm == true){
                        console.log("yopla")
                        
                        const helpe = new MessageEmbed()
        
                                        .setTitle(monNom)       
                                        .setColor("1E90FF")
                                            
                                            
                                            
                                        .setDescription("merci d'écrire l'id du salon ou envoyer le message !")
                                        .setTimestamp()
        
                            interaction.reply({embeds: [helpe],ephemeral: true})
                        client.on("messageCreate", message => {
                            
                            
                                if(cm == true ) {
                                    
                                    const str = message.content.substring(base.length)
                                    setdepart = str
                                    console.log(setdepart)
                                    console.log(cn)
                                    if(setdepart != "") {
                                        message.delete()
                                        cn = true
                                    }
                                    
                                    if(cn == true) {
                                        
                                        var row = new Discord.MessageActionRow()
                                        .addComponents( new Discord.MessageButton()
                                            .setCustomId("oui7")
                                            .setLabel("oui")
                                            .setStyle("SUCCESS")
                                        )
                                        .addComponents( new Discord.MessageButton()
                                            .setCustomId("non7")
                                            .setLabel("non")
                                            .setStyle("DANGER")
                                                
                                                )
                                            const olo = new MessageEmbed()
                            
                                                    .setTitle(monNom)       
                                                    .setColor("1E90FF")
                                                    
                                                    
                                                
                                                    .setDescription("Veux tu modifier le message quand un membre quitte le serveur ? Celui actuel étant : \n **"+ adieux +"**")
                                                    .setTimestamp()
                            
                                            interaction.channel.send({embeds: [olo], components: [row]})
                                            cn = false
                                            cm = false
                                           
                                    }
                                    
                            }})
               
                    }
                }
        if(cn == true ) {
           
               
                    }    
            
        if(interaction.customId == "oui7"){
            interaction.message.delete()
            const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription("Ecrit ton message !")
                    .setTimestamp()

            interaction.reply({embeds: [helpe], ephemeral: true})
            co = true


            if (co == true ) {
                
                
                client.on("messageCreate", message =>  {
                    if(co == true ) {
                        
                        const str = message.content.substring(base.length)
                        messdepart = str
                        console.log(messdepart)

                        if(messdepart != "") { 
                            message.delete()
                            co = false
                            
                            console.log(messdepart)
                        var row = new Discord.MessageActionRow()
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("oui8")
                                .setLabel("oui")
                                .setStyle("SUCCESS")
                            )
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("non8")
                                .setLabel("non")
                                .setStyle("DANGER")
                                    
                                    )
                                const olo = new MessageEmbed()
                    
                                        .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                                        .setDescription("Le message que tu a choisit est : **" + messdepart + "**")
                                        .setTimestamp()
                    
                                message.channel.send({embeds: [olo], components: [row]})
                                sop = messdepart
                        }
                    }}) 

            }  
        
        }

        if(interaction.customId == "oui8") {
            
            adieux = messdepart
        }

        if(interaction.customId == "oui8" || interaction.customId == "non6" || interaction.customId == "non7" || interaction.customId == "non8") {
            interaction.message.delete()

            var row = new Discord.MessageActionRow()
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("oui9")
                                .setLabel("oui")
                                .setStyle("SUCCESS")
                            )
                            .addComponents( new Discord.MessageButton()
                                .setCustomId("non9")
                                .setLabel("non")
                                .setStyle("DANGER")
                                    
                                    )
                                const olo = new MessageEmbed()
                    
                                        .setTitle(monNom)       
                                        .setColor("1E90FF")
                                        
                                        
                                        
                                        .setDescription("Veux tu changer le prefix qui est : **" + prefix + "**")
                                        .setTimestamp()
                    
                                interaction.channel.send({embeds: [olo], components: [row]})
        }

       if(interaction.customId == "oui9")  {
        interaction.message.delete()
                    ct = true 
                    
                    pref = ""
                    
                    
                    
                    if(ct == true){
                        
                        
                        const helpe = new MessageEmbed()
        
                                        .setTitle(monNom)       
                                        .setColor("1E90FF")
                                            
                                            
                                            
                                        .setDescription("merci d'écrire le nouveau prefix !")
                                        .setTimestamp()
        
                            interaction.reply({embeds: [helpe],ephemeral: true})
                        client.on("messageCreate", message => {
                            
                            
                                if(ct == true ) {
                                    
                                    const str = message.content.substring(base.length)
                                    pref = str
                                    
                                    
                                    if(pref != "") {
                                        message.delete()
                                        cb = true
                                    }
                                    
                                    if(cb == true) {
                                        
                                        var row = new Discord.MessageActionRow()
                                        .addComponents( new Discord.MessageButton()
                                            .setCustomId("oui10")
                                            .setLabel("oui")
                                            .setStyle("SUCCESS")
                                        )
                                        .addComponents( new Discord.MessageButton()
                                            .setCustomId("non10")
                                            .setLabel("non")
                                            .setStyle("DANGER")
                                                
                                                )
                                            const olo = new MessageEmbed()
                            
                                                    .setTitle(monNom)       
                                                    .setColor("1E90FF")
                                                    
                                                    
                                                
                                                    .setDescription("Veux tu mettre **" + pref + "** comme nouveau prefix ?")
                                                    .setTimestamp()
                            
                                            interaction.channel.send({embeds: [olo], components: [row]})
                                            ct = false
                                            cb = false
                                           
                                    }}})}
                    }
        if(interaction.customId == "oui10") {
            prefix = pref
        }

        if(interaction.customId == "oui10" || interaction.customId == "non10" || interaction.customId == "non9" ) {
            console.log("salut")
            interaction.message.delete()
            const olo = new MessageEmbed()
                            
                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                                                    
                                                    
                                                
                    .setDescription("Tu a finit la configuration du bot !\n**Note : **\n\n- Phrase d'arrivée : **" + bienvenue + "**\n\n- Phrase de départ : **" + adieux + "**\n\n- Prefix : **"+ prefix + "**")
                    .setTimestamp()
                            
            interaction.channel.send({embeds: [olo]})
        }


    }}})


   


//commande help

client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "h")){
       


        const helpe = new MessageEmbed()

                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    
                    
                    
                    .setDescription(" | La liste des commandes du bot t'a été envoyer en **Message privée** ! | \n\n  | Faite **n!help** ou **/help** afin de recevoir la liste des commandes ! | ")
                    .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                    .setTimestamp()
                    
    
                    


        message.reply({embeds: [helpe]})
        

        message.author.createDM().then(channel => {
            const lilo = new MessageEmbed()

                .setTitle(monNom)       
                .setColor("1E90FF")
                
                
                
                .setDescription("<@"+ message.author.id + ">\n\n **Voici la liste des comandes :**\n\n- **n!help(/help)** : Recois la liste des commande en Mp !\n\n- **/clear** : Suprime entre 1 et 99 message (requied admisitrateur premission)\n\n- **/ticket** : crée un message ticket dans le salon de votre choix !\n\n- **/setname** : definisser le nom du bot ! (requied admisitrateur premission)\n\n- **n!hug** : envois un hug a la personne desirer ! \n\n- **n!slap** : envois une claque a la personne desirer !\n\n- **/sondage** : crée un sondage avec des réponse personaliser ! (requied admisitrateur premission)\n\n- **n!viewsondage(/viewsondage)** : permet de voir ou en est le sondage !\n\n- **/config** : configure le bot (messsage d'arrivée/depart, prefix, ...) ! (requied admisitrateur premission)\n\n- **/annonce** : Soumet une annonce depuis le bot ! (requied admisitrateur premission)\n\n- **n!play** : Permet de jouer la musique que tu veux à condition d'avoir le lien youtube !\n\n- **n!kick (/kick)** : Permet d'expulser un membre du serveur. (requied administrateur permission)\n\n- **n!ban(/ban)** : Permet de bannir un membre du serveur. (requied administrateur permission)\n\n- **n!avatar(/avatar)** : Permet d'afficher l'avatar d'un membre.\n\n- **n!info(/info)** : Permet d'avoir des information sur un membre du serveur.\n\n- **n!gpt(/chatgpt)** : Permet d'utiliser l'API d'openai Assistant.\n\n- **n!dallee(/dallee)** : Permet d'utiliser l'API d'openai DALL·E.")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
              
                .setTimestamp()


                channel.send({embeds: [lilo]})
        })

        
        
    }
})

client.on("interactionCreate", async interaction => {
    
    if(interaction.isCommand) {
        if(interaction.commandName === "help"){

            var choice = interaction.user.id
            const helpe = new MessageEmbed()

            .setTitle(monNom)       
            .setColor("1E90FF")
            
            
            
            .setDescription(" | La liste des commandes du bot t'a été envoyer en **Message privée** ! | ")
            
            .setTimestamp()
            
            
            


            interaction.reply({embeds: [helpe], ephemeral: true})

            interaction.user.createDM().then(channel => {

                const lilo = new MessageEmbed()

                .setTitle(monNom)       
                .setColor("1E90FF")
                
                
                
                .setDescription("<@"+ choice + ">\n\n **Voici la liste des comandes :**\n\n- **n!help(/help)** : Recois la liste des commande en Mp !\n\n- **/clear** : Suprime entre 1 et 99 message (requied admisitrateur premission)\n\n- **/ticket** : crée un message ticket dans le salon de votre choix !\n\n- **/setname** : definisser le nom du bot ! (requied admisitrateur premission)\n\n- **n!hug** : envois un hug a la personne desirer ! \n\n- **n!slap** : envois une claque a la personne desirer !\n\n- **/sondage** : crée un sondage avec des réponse personaliser ! (requied admisitrateur premission)\n\n- **n!viewsondage(/viewsondage)** : permet de voir ou en est le sondage !\n\n- **/config** : configure le bot (messsage d'arrivée/depart, prefix, ...) ! (requied admisitrateur premission)\n\n- **/annonce** : Soumet une annonce depuis le bot ! (requied admisitrateur premission)\n\n- **n!play** : Permet de jouer la musique que tu veux à condition d'avoir le lien youtube !\n\n- **n!kick (/kick)** : Permet d'expulser un membre du serveur. (requied administrateur permission)\n\n- **n!ban(/ban)** : Permet de bannir un membre du serveur. (requied administrateur permission)\n\n- **n!avatar(/avatar)** : Permet d'afficher l'avatar d'un membre.\n\n- **n!info(/info)** : Permet d'avoir des information sur un membre du serveur.\n\n- **n!gpt(/chatgpt)** : Permet d'utiliser l'API d'openai Assistant.\n\n- **n!dallee(/dallee)** : Permet d'utiliser l'API d'openai DALL·E.")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                
                .setTimestamp()


                channel.send({embeds: [lilo]})
            })


        }
    }
})



//commande clear


client.on("ready", async() => {
    console.log("activer");
    
    
});

client.on("ready", async() => {
    console.log("activer");
    client.application.commands.create(data)
    
});

client.on("interactionCreate", async interaction => {     
    
    if(interaction.isCommand()){
        if(interaction.commandName === "clear"){

            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            const number = interaction.options.getInteger("number");
            if({ permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [Discord.Permissions.FLAGS.ADMINISTRATOR]
                }
                
            ]})
            {
                if(number >= 1 && number <= 99){
                    
                    interaction.channel.bulkDelete(number);
    
                    const clear1 = new MessageEmbed()
                            
                    .setColor("1E90FF")
                
                        
                    
                    .setDescription(number + " Messages suprimer")
                    .setTimestamp()
    
    
                    
                    interaction.reply({ embeds: [clear1], ephemeral: true});
                }
    
                else {
    
                    const clear2 = new MessageEmbed()
                            
                                    
                    .setColor("1E90FF")
                                
                                        
                                    
                    .setDescription("❌ Merci de rentrer une valeur entre 1 et 99 !")
                                    
                                    
                    
                    
                                
                    interaction.reply({embeds: [clear2], ephemeral: true});
                }

            }
            } 
            
            
        }
    }
});

//commande ticket


var nbTicket = 0;





        

client.on("interactionCreate", async interaction => {
   
    if(interaction.isCommand){
        if(interaction.commandName === "ticket"){
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            const channelID = interaction.options.getString("channel")
            const descript = interaction.options.getString("description")
           
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
                .setCustomId("📩 open ticket")
                .setLabel("📩 ouvrir un ticket")
                .setStyle("PRIMARY")
            );

            const tic = new MessageEmbed()
                .setTitle(monNom)       
                .setColor("1E90FF")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                    
                
                .setDescription(descript)
                .setTimestamp()

                client.channels.cache.get(channelID).send({embeds: [tic], components: [row]})
            
                const toc = new MessageEmbed()
                    .setTitle(monNom)       
                    .setColor("1E90FF")
            
                    
                
                    .setDescription("Votre ticket a bien été crée !")
                    .setTimestamp()

                interaction.reply({embeds: [toc], ephemeral: true})
            } 
            
                


                
        }
    }
})
        




client.on("interactionCreate", async interaction => {
    
    if(interaction.isButton()){
        if(interaction.customId === "📩 open ticket"){
            nbTicket++;

            interaction.guild.channels.create("ticket-" + nbTicket, {

                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id:interaction.user.id,
                        allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents( new Discord.MessageButton()
                        .setCustomId("🛑 close ticket")
                        .setLabel("🛑 fermer le ticket")
                        .setStyle("DANGER")
                    );



                    const tic2 = new MessageEmbed()
                .setTitle(monNom)       
                .setColor("1E90FF")
            
                    
                
                .setDescription("Appuyer sur le bouton en dessous pour suprimer le ticket !")
                .setTimestamp()




                channel.send({embeds: [tic2], components: [row]})

                const tic3 = new MessageEmbed()
                    
                .setColor("1E90FF")
            
                    
                
                .setDescription("Ticket correctement crée")
                .setTimestamp()
                

                interaction.reply({embeds :[tic3], ephemeral: true});
            });
        }
        else if(interaction.customId === "🛑 close ticket"){
            //interaction.channel.setParent("1017115637333630997");

            var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("delete ticket")
                .setLabel("🔒 Delete le ticket")
                .setStyle("SECONDARY")
                );

            interaction.message.delete();

            const tic4 = new MessageEmbed()
                .setTitle(monNom)       
                .setColor("1E90FF")
            
                    
                
                .setDescription("Delete definitivement le ticket ?")
                .setTimestamp()

            interaction.channel.send({embeds: [tic4], components: [row]});

            
        }
        else if(interaction.customId === 'delete ticket'){

            
                
                    interaction.channel.delete();               

                const tic6 = new MessageEmbed()
                       
                .setColor("1E90FF")
            
                    
                
                .setDescription("Le  ticket va se suprimer dans quelques secondes")
                .setTimestamp()

                interaction.reply({embeds: [tic6], ephemeral: true});

        }
    }
});


//salut au debutt des message

client.on("messageCreate", message => {
    if(  message.content.startsWith("salut") || message.content.startsWith("Salut") || message.content.startsWith("SALUT") || message.content.startsWith("salut!")) {
        toto = true
        if(toto == true){
            message.react("👋")
            toto = false
        }
        
        console.log(toto)
        
        
    }
})





//n!slap command

const slap = ["https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif", "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif", "https://thumbs.gfycat.com/TerribleLightBagworm-max-1mb.gif", "https://c.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif","https://c.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif","https://c.tenor.com/eU5H6GbVjrcAAAAC/slap-jjk.gif","https://c.tenor.com/PeJyQRCSHHkAAAAC/saki-saki-mukai-naoya.gif","https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif","https://c.tenor.com/FJsjk_9b_XgAAAAC/anime-hit.gif","https://c.tenor.com/WR_V0PKeUroAAAAC/hibi-slap.gif","https://c.tenor.com/1-1M4PZpYcMAAAAd/tsuki-tsuki-ga.gif","https://c.tenor.com/pgq_YsVX7sEAAAAC/meliodas-seven-deadly-sins.gif","https://c.tenor.com/LUJRVpYgy-8AAAAC/kiniro-kiniro-mosaic.gif","https://c.tenor.com/yl9kMAB2pHYAAAAC/slap.gif","https://c.tenor.com/ra17G61QRQQAAAAC/tapa-slap.gif", "https://c.tenor.com/2-r7BEc-cb8AAAAC/slap-smack.gif","https://c.tenor.com/1tk5BKEdCzcAAAAM/fumoffu-full-metal-panic.gif","https://c.tenor.com/grtajaSeUt0AAAAC/money-money-slap.gif","https://c.tenor.com/8f8ciLp9_T0AAAAM/anime-slap.gif","https://c.tenor.com/8SoReGELlnAAAAAC/anime-girl-slap.gif","https://c.tenor.com/2HjyotNxqiAAAAAC/cass-will.gif"];



client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "slap") ) {
        console.log("1")

        var splited_message = message.content.split(" ");
        //console.log(splited_message[1])
        if(splited_message.length == 2) {
            
            console.log("2");

        
            
        var nom = message.author.id 

        var mention = splited_message[1].length > 0 && splited_message[1].startsWith("<@") && splited_message[1].endsWith(">");
            
        var pers = message.mentions.users.first().id

        
        var item = slap[Math.floor(Math.random()*slap.length)];

        const slapok = new MessageEmbed()
                
        
                .setTitle(monNom)
                .setColor("1E90FF")
            
                    
                
                .setDescription("<@"+ nom + "> met une claque à <@"+ pers + "> !")
                .setTimestamp()
                .setImage(item)

                message.reply({embeds: [slapok]})
        }

    else if(splited_message.length == 1) {

        var nom = message.author.id

        var item = slap[Math.floor(Math.random()*slap.length)];

        const slapok = new MessageEmbed()
                
        
                .setTitle(monNom)
                .setColor("1E90FF")
            
                    
                
                .setDescription("<@"+ nom + "> met une claque à **NoanBot 🎧** !")
                .setTimestamp()
                .setImage(item)

                message.reply({embeds: [slapok]})
    }


    }})
//commande hug 

var hug = ["https://c.tenor.com/3mr1aHrTXSsAAAAC/hug-anime.gif","https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif","https://c.tenor.com/kCZjTqCKiggAAAAC/hug.gif","https://c.tenor.com/DYd0JWyc0ZQAAAAC/dojoxprincess.gif","https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif","https://c.tenor.com/8o4fWGwBY1EAAAAd/aharensan-aharen.gif","https://c.tenor.com/lzKyZchfMzAAAAAC/anime-hug.gif","https://c.tenor.com/AvXyGGhalDsAAAAC/anime-hug.gif","https://c.tenor.com/y9_xxO9iMwkAAAAC/hug.gif","https://c.tenor.com/35RotStN1BkAAAAC/anime-hug-anime.gif","https://c.tenor.com/0T3_4tv71-kAAAAC/anime-happy.gif","https://c.tenor.com/8BqG6yTLCLEAAAAC/anime.gif","https://c.tenor.com/m_bbfF_KS-UAAAAC/engage-kiss-anime-hug.gif","https://c.tenor.com/DVOTqLcB2jUAAAAM/anime-hug-love.gif","https://c.tenor.com/7iPTAAXlPmMAAAAM/crying.gif","https://c.tenor.com/2lr9uM5JmPQAAAAC/hug-anime-hug.gif","https://c.tenor.com/-0nQoPY5sZ0AAAAC/anime-hug-hug.gif","https://c.tenor.com/zvlN9ZJEaj4AAAAC/anime-hug.gif","https://c.tenor.com/PuuhAT9tMBYAAAAC/anime-cuddles.gif"]


client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "hug") ) {
        console.log("1")

        var splited_message = message.content.split(" ");
        //console.log(splited_message[1])
        if(splited_message.length == 2) {
            
            console.log("2");

        
            
        var nom = message.author.id 

        var mention = splited_message[1].length > 0 && splited_message[1].startsWith("<@") && splited_message[1].endsWith(">");
            
        var pers = message.mentions.users.first().id

        
        var item = hug[Math.floor(Math.random()*hug.length)];

        const hugon = new MessageEmbed()
                
        
                .setTitle(monNom)
                .setColor("1E90FF")
            
                    
                
                .setDescription("<@"+ nom + "> fait un câlin à <@"+ pers + "> !")
                .setTimestamp()
                .setImage(item)

                message.reply({embeds: [hugon]})
        }

    else if(splited_message.length == 1) {

        var nom = message.author.id

        var item = hug[Math.floor(Math.random()*hug.length)];

        const slapok = new MessageEmbed()
                
        
                .setTitle(monNom)
                .setColor("1E90FF")
            
                    
                
                .setDescription("<@"+ nom + "> fait un câlin à  **NoanBot 🎧** !")
                .setTimestamp()
                .setImage(item)

                message.reply({embeds: [slapok]})
    }
        

        




        


    }
});


//setname




client.on("interactionCreate", async interaction => {     
    
    if(interaction.isCommand()){
        if(interaction.commandName === "setname"){
            
            
        const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
            
            

        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            const name = interaction.options.getString("nom");

            monNom = name


            const myName = new MessageEmbed()
                       
                .setColor("1E90FF")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                    
                
                .setDescription("Le bot s'appelle maintenant : **"+ monNom  + "** !")
                .setTimestamp()

                interaction.reply({embeds: [myName], ephemeral: false});
            } 
           
            
                
            
            

            
            
        }
    }
});


//sondage

var player = []



var nome1 = ""
var nome = ""

var rep1 = 0
var rep2 = 0

client.on("interactionCreate", async interaction => {
    
    if(interaction.isCommand) {
        

        if(interaction.commandName === "sondage"){
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            rep1 = 0
            rep2 = 0
            player = []
            
            const sondage = interaction.options.getString("sondage");

            nome1 = interaction.options.getString("choix_1");

            nome = interaction.options.getString("choix_2");

            const nom = interaction.user.id

           
            

            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
                .setCustomId("one")
                .setLabel(nome1)
                .setStyle("SUCCESS")
            )
            .addComponents( new Discord.MessageButton()
                .setCustomId("two")
                .setLabel(nome)
                .setStyle("DANGER")
                
                )
            



            const sondagea = new MessageEmbed()
                
        
                .setTitle(monNom)
                .setColor("1E90FF")
            
                    
                
                .setDescription('<@'+ nom + '> **Propose un sondage :**\n\n "' + sondage + '"\n' )
                .setTimestamp()
                
            interaction.channel.send({embeds: [sondagea], components: [row]})
            } 
            
            

        }
        else if(interaction.commandName === "viewsondage") {
            if(rep1 !=0 || rep2 != 0){ 
                const nom = interaction.user.id
                
                const sondaged = new MessageEmbed()
                        
                
                            .setTitle(monNom)
                            .setColor("1E90FF")
                    
                            
                            
                            .setDescription("<@"+ nom +"> Actuellement " + rep1 +" personnes on voter pour " + nome1 + " et " + rep2 + " personnes on voter pour "+ nome + " !!!")
                            .setTimestamp()
            
                            interaction.reply({embeds: [sondaged], ephemeral: true})
            }
            else {
                const nom = interaction.user.id
                const sondaged = new MessageEmbed()
                        
                
                            .setTitle(monNom)
                            .setColor("1E90FF")
                    
                            
                            
                            .setDescription("<@"+ nom +"> Soit il n'y a pas encore de sondage soit il n'y a pas encore eu de reponse !")
                            .setTimestamp()
            
                            interaction.reply({embeds: [sondaged], ephemeral: true})
            }
            }

        else if(interaction.isButton) {
                
                const nom = interaction.user.id

                if(interaction.customId === "one"){
                    
                    
        
                    console.log("one")
                    
        
                    if(player.indexOf(nom)) {
       
                        

                     player.push(nom)
        
                        rep1++; 
        
                        const sondaged = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                
                        
                        
                        .setDescription("<@"+ nom +"> Merci d'avoir voter !!!\n Actuellement " + rep1 +" personnes on voter pour " + nome1 + " et " + rep2 + " personnes on voter pour "+ nome + " !!!")
                        .setTimestamp()
        
                        interaction.reply({embeds: [sondaged], ephemeral: true})
                    }
                    else {
                        const sondagec = new MessageEmbed()
                        
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                
                        
                        
                        .setDescription("<@"+ nom +'> Tu a déja voter !' )
                        .setTimestamp()
        
                        interaction.reply({embeds: [sondagec], ephemeral: true})
                        
                        
        
                    }
                     }

                if(interaction.customId === "two") {
                    const nom = interaction.user.id
                    console.log("ok")
                        
        
                     if(player.indexOf(nom)) {
                        rep2++; 
                            
                        player.push(nom)
                       const sondagea = new MessageEmbed()
                       
               
                       .setTitle(monNom)
                       .setColor("1E90FF")
                   
                           
                           
                       .setDescription("<@"+ nom + "> Merci d'avoir voter !!!\n Actuellement " + rep1 +" personnes on voter pour " + nome1 + " et " + rep2 + " personnes on voter pour"+ nome + " !!!")
                       .setTimestamp()
       
                       interaction.reply({embeds: [sondagea], ephemeral: true})
                           
                       console.log(player)
                        
                    }
                    else {
                       


                        const sondageb = new MessageEmbed()
                        
                
                        .setTitle(monNom)
                        .setColor("1E90FF")
                    
                            
                            
                        .setDescription("<@"+ nom +'> Tu a déja voter !' )
                        .setTimestamp()
        
                        interaction.reply({embeds: [sondageb], ephemeral: true})
        
                    }
                }       
        
           
            
            
           
        
    }
}  })



client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "viewsondage") ) {
        if(rep1 !=0 || rep2 != 0){ 
            const nom = message.member.id
            
            const sondaged = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                        .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                
                        
                        
                        .setDescription("<@"+ nom +"> Actuellement " + rep1 +" personnes on voter pour " + nome1 + " et " + rep2 + " personnes on voter pour "+ nome + " !!!")
                        .setTimestamp()
        
                        message.reply({embeds: [sondaged]})
        }
        else {
            const nom = message.member.id
            const sondaged = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                        .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                        

                
                        
                        
                        .setDescription("<@"+nom +"> Soit il n'y a pas encore de sondage soit il n'y a pas encore eu de reponse !")
                        .setTimestamp()

                        message.reply({embeds: [sondaged], ephemeral: true})
    }
}})

//message d'arriver 


client.on('messageCreate', message => {
    if (message.content === '!createRainbowRole') {
      // Vérifie si l'utilisateur a la permission de gérer les rôles
      if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Vous n'avez pas la permission de gérer les rôles.");
  
      // Crée le rôle arc-en-ciel
      message.guild.roles.create({
        data: {
          name: 'Rainbow',
          color: 'RANDOM',
          hoist: true,
          permissions: ['READ_MESSAGES', 'SEND_MESSAGES']
        }
      })
        .then(role => message.channel.send(`Le rôle arc-en-ciel a été créé avec succès ! Utilisez la commande "!assignRainbowRole" pour l'attribuer à un utilisateur.`))
        .catch(console.error); // Affiche une erreur en cas de problème
    }
  });


client.on("guildMemberAdd", member => {
    var news = member.displayName
    
    if(arriversurleserv == true) {
        const arrive = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                        .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                        

                
                        
                        
                        .setDescription("**"+ news + "** est Arrivé dans le serveur !!\n\n**" + bienvenue + "**")
                        .setTimestamp()

    client.channels.cache.get(setarriver).send({embeds: [arrive]})
        
    }
    
});

client.on("guildMemberRemove", member => {
    var bad = member.displayName

    if(quitteleserv == true ) { 
        const part = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                        .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                        

                
                        
                        
                        .setDescription("**"+ bad + "** à quitter le serveur !!\n\n**" + adieux + "**")
                        .setTimestamp()

        client.channels.cache.get(setdepart).send({embeds: [part]})

    }
    
    
});

//annonce 


client.on("interactionCreate", async interaction => {
    
    if(interaction.isCommand) {
        if(interaction.commandName === "annonce") {
            const adminRole = interaction.guild.roles.cache.find(r => r.name === 'Staff');
        if (interaction.member.roles.cache.some(role => role.id === adminRole.id)) {
            const annoncestring = interaction.options.getString("annonce")
            const titrestring = interaction.options.getString("titre")

            const part = new MessageEmbed()
                    
            
                        .setTitle(monNom)
                        .setColor("1E90FF")
                        
                        

                
                        
                        
                        .setDescription('__**' + titrestring + '**__\n\n"' + annoncestring + '"')
                        .setTimestamp()

        interaction.channel.send({embeds: [part]})
            } 
            

        }
    }
})


//commande musique 

var playList = []
var status = "idle"

var idMessageBase 

var connection 

var rootMessage 

var msg 

var loop = false

var lastTrack

const myPlayer = createAudioPlayer({
    behaviors: {
        noSubscriber: NoSubscriberBehavior.Play
    }
});



client.on("messageCreate", async message => {
    msg = message
    if(message.content.startsWith(prefix + "play")) { 
        if(message.member.voice.channel) {
            var args = message.content.split(" ")
            
            if(args.length == 2) {
                try{ 

                    if( status == "idle" && playList.length == 0) {
                        var row = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("stop")
                            .setLabel("✖")
                            .setStyle("PRIMARY")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("pause")
                            .setLabel("❙❙")
                            .setStyle("DANGER")
                            )
                            .addComponents(new Discord.MessageButton()
                            .setCustomId("loop")
                            .setLabel("⇋")
                            .setStyle("SECONDARY")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("play")
                            .setLabel("▶")
                            .setStyle("SUCCESS")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("next")
                            .setLabel("➠")
                            .setStyle("PRIMARY")
                            );
                        

                        const tic4 = new MessageEmbed()
                            .setTitle(monNom)       
                            .setColor("1E90FF")
                            .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                            .setDescription("**En train de jouer**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + args[1] + "**\n Sur youtube !")
                            .setTimestamp()

                        message.channel.send({embeds: [tic4], components: [row]}).then(message => {
                            //console.log(message.id)
                            rootMessage = message.id
                            })
                         


                         //console.log(toto+ " c'est le message !")
                       
                         

                      
                    }

                    connection = joinVoiceChannel({
                        channelId: message.member.voice.channel.id,
                        guildId: message.guild.id,
                        adapterCreator: message.guild.voiceAdapterCreator
                    });
                    
                    console.log(args[1])
                    playList.push(args[1])
                    
                    if (status == "idle") {
                        var track = playList.shift()
                        const ytStream = await play.stream(track);
        
                        const resource = createAudioResource(ytStream.stream, {
                            inputType: ytStream.type
                        })
                
                        myPlayer.play(resource)
            
                        connection.subscribe(myPlayer)
                        
                        lastTrack = track
                    }
                    else {
                       
                        message.delete()

                        //message.delete(rootMessage)
                        client.channels.fetch(message.channel.id).then(channel => {
                            channel.messages.delete(rootMessage);
                        });

                        var row = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("stop")
                            .setLabel("✖")
                            .setStyle("PRIMARY")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("pause")
                            .setLabel("❙❙")
                            .setStyle("DANGER")
                            )
                            .addComponents(new Discord.MessageButton()
                            .setCustomId("loop")
                            .setLabel("⇋")
                            .setStyle("SECONDARY")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("play")
                            .setLabel("▶")
                            .setStyle("SUCCESS")
                            )
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("next")
                            .setLabel("➠")
                            .setStyle("PRIMARY")
                            );
                        
                        if (loop) {
                            const tic5 = new MessageEmbed()
                            .setTitle(monNom)       
                            .setColor("1E90FF")
                            .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                            .setThumbnail("https://www.i2symbol.com/images/symbols/arrows/leftwards_harpoon_over_rightwards_harpoon_u21CB_icon_256x256.png")
                            .setDescription("**En train de jouer ⇋**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + args[1] + "**\n Sur youtube !")
                            .setTimestamp()

                        message.channel.send({embeds: [tic5], components: [row]}).then(message => {
                            //console.log(message.id)
                            rootMessage = message.id

                        const tic4 = new MessageEmbed()
                            .setTitle(monNom)       
                            .setColor("1E90FF")
                            .setDescription("**Ajouter à la queue**\n**Num: " + playList.length + "**")
                            .setTimestamp()

                         message.channel.send({embeds: [tic4], ephemeral: true});
                            })

                        } else {
                            const tic5 = new MessageEmbed()
                            .setTitle(monNom)       
                            .setColor("1E90FF")
                            .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                            .setDescription("**En train de jouer**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + args[1] + "**\n Sur youtube !")
                            .setTimestamp()

                        message.channel.send({embeds: [tic5], components: [row]}).then(message => {
                            //console.log(message.id)
                            rootMessage = message.id
                            })
                        }
                        


                        
                    }
                    
                    
                } catch(error) {
                    message.reply("une erreur est survenue")
                    console.log(error)
                }
                
            }
            
            else {
                message.reply("Merci de mettre un lien !")
            }



            //const resource = createAudioResource();

            //const resource = connection.play(ytdl(args[1], {quality: "highestaudio"}));

            //const resource = ytdl(args[1], {quality: "highestaudio"})
           
            //myPlayer.play(resource)

            //const subscription = connection.subscribe(myPlayer);
            
           

            

            //setTimeout(() => subscription.unsubscribe(), 5000);df
            
            //myPlayer.play(resource);
        }
        else {
           const tic5 = new MessageEmbed()
           .setTitle(monNom)       
           .setColor("1E90FF")
           .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
           .setDescription("Tu n'est pas connecter !")
           .setTimestamp()
           message.reply({embeds: [tic5]})
               
        }
    }
}); 


myPlayer.on('stateChange', async (oldState, newState) => {
    status = newState.status;
    console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
    if (newState.status == "idle") 
    {
        if(playList != 0 ) {
            console.log("lecture terminée")
            var track

            if(loop) {
                track = lastTrack 
            }
            else{
                track = playList.shift()
            }
            
            client.channels.fetch(msg.channel.id).then(channel => {
                channel.messages.delete(rootMessage);
            });

            var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("stop")
                .setLabel("✖")
                .setStyle("PRIMARY")
                )
            .addComponents(new Discord.MessageButton()
                .setCustomId("pause")
                .setLabel("❙❙")
                .setStyle("DANGER")
                )
                .addComponents(new Discord.MessageButton()
                .setCustomId("loop")
                .setLabel("⇋")
                .setStyle("SECONDARY")
                )
            .addComponents(new Discord.MessageButton()
                .setCustomId("play")
                .setLabel("▶")
                .setStyle("SUCCESS")
                )
            .addComponents(new Discord.MessageButton()
                .setCustomId("next")
                .setLabel("➠")
                .setStyle("PRIMARY")
                );
            
            if (loop) {
                const tic5 = new MessageEmbed()
                .setTitle(monNom)       
                .setColor("1E90FF")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                .setDescription("**En train de jouer ⇋**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + track + "**\n Sur youtube !")
                .setTimestamp()
                msg.channel.send({embeds: [tic5], components: [row]}).then(message => {
                    //console.log(message.id)
                    rootMessage = message.id
                })
            } 
            else {
            const tic5 = new MessageEmbed()
                .setTitle(monNom)       
                .setColor("1E90FF")
                .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                .setDescription("**En train de jouer**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + track + "**\n Sur youtube !")
                .setTimestamp()
                msg.channel.send({embeds: [tic5], components: [row]}).then(message => {
                    //console.log(message.id)
                    rootMessage = message.id
                })
            }

           
            
            
            const ytStream = await play.stream(track);
            const resource = createAudioResource(ytStream.stream, {
                inputType: ytStream.type
            })
        
            myPlayer.play(resource)

            connection.subscribe(myPlayer)

            track = lastTrack
        }
        else if(playList == 0){
           
            if(loop) {
                client.channels.fetch(msg.channel.id).then(channel => {
                    channel.messages.delete(rootMessage);
                });
    
                var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("stop")
                    .setLabel("✖")
                    .setStyle("PRIMARY")
                    )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("pause")
                    .setLabel("❙❙")
                    .setStyle("DANGER")
                    )
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("loop")
                    .setLabel("⇋")
                    .setStyle("SECONDARY")
                    )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("play")
                    .setLabel("▶")
                    .setStyle("SUCCESS")
                    )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("next")
                    .setLabel("➠")
                    .setStyle("PRIMARY")
                    );
                
    
                const tic5 = new MessageEmbed()
                    .setTitle(monNom)       
                    .setColor("1E90FF")
                    .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
                    .setDescription("**En train de jouer ⇋**\n\n**Dans la queue : " + playList.length +"**\n\n** Joue** :** " + lastTrack + "**\n Sur youtube !")
                    .setTimestamp()
    
                msg.channel.send({embeds: [tic5], components: [row]}).then(message => {
                    //console.log(message.id)
                    rootMessage = message.id
                })
                
                
                const ytStream = await play.stream(lastTrack);
                const resource = createAudioResource(ytStream.stream, {
                    inputType: ytStream.type
                })
            
                myPlayer.play(resource)
    
                connection.subscribe(myPlayer)
    
                
            }
            else {
                client.channels.fetch(msg.channel.id).then(channel => {
                    channel.messages.delete(rootMessage);
                    connection.disconnect();
                    
                });
            }
            
        }
        
    }

});

var pause = false

client.on("interactionCreate", async interaction => {
    
    if(interaction.isButton) {
        if(interaction.customId === "pause" && !pause) {
            interaction.deferUpdate()

            myPlayer.pause()
            pause = true
            
            return;
        };
        if(interaction.customId === "play" && pause) {
            interaction.deferUpdate()
            myPlayer.unpause()
            pause = false
            return;
        };
        if(interaction.customId === "next") {
            loop = false
            interaction.deferUpdate()
            
            if(playList != 0) {
                myPlayer.stop()
            }
           
        }
        if(interaction.customId === "stop") {
            loop = false
            interaction.deferUpdate()
            args = []
            playList = []
            myPlayer.stop()
            connection.disconnect();
        }
        if(interaction.customId === "loop" && !loop) {
            interaction.deferUpdate()
            loop = true

        }
        else if(interaction.customId === "loop" && loop) {
            interaction.deferUpdate()
            loop = false
        }
}});


                            
//role commande


client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix + "r1") ) {
        const tic5 = new MessageEmbed()
            .setTitle(monNom)       
            .setColor("1E90FF")
            .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
            
            .setDescription("Choisit ton sexe : \n\n- **Homme : ** ♂️\n\n- **Femme : **♀️")
            .setTimestamp()
        message.channel.send({embeds: [tic5]}).then(sentMessage => {
            sentMessage.react("♂️"), sentMessage.react("♀️") })
        message.delete()
    }
        

    if(message.react == "♂️") {
        message.channel.send("oui")
    }
       
    
})



} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}



//gpt 3 

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);





client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "gpt")) {
        const prompt = message.content.slice(6);

        

        async function getAiResponse(topic) {
            const openai = new OpenAIApi(configuration);
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: topic,
              max_tokens: 1024,
              n: 1,
              stop: null,
              temperature: 0.7
            });

            const tic5 = new MessageEmbed()
            .setTitle("ChatGpt")       
            .setColor("000000")
            
            
            .setDescription("**Question : **"+ prompt + "\n " + completion.data.choices[0].text)
            .setTimestamp()
            message.reply({embeds: [tic5]});
          }
          getAiResponse(prompt);
}});

client.on("interactionCreate", async interaction => {
    if(interaction.isCommand) {
        if(interaction.commandName == "chatgpt") {

            const prompt = interaction.options.getString("question")
            const tic6 = new MessageEmbed()
            .setTitle("ChatGpt")       
            .setColor("000000")
            
            
            .setDescription("Le Bot va te répondre cela peux prendre quelque secondes !")
            .setTimestamp()
            interaction.reply({embeds: [tic6], ephemeral:true});

        

        async function getAiResponse(topic) {
            const openai = new OpenAIApi(configuration);
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: topic,
              max_tokens: 1024,
              n: 1,
              stop: null,
              temperature: 0.7
            });
            

            const tic5 = new MessageEmbed()
            .setTitle("ChatGpt")       
            .setColor("000000")
            
            
            .setDescription("**Question : **"+ prompt  + completion.data.choices[0].text)
            .setTimestamp()
            interaction.channel.send({embeds: [tic5]});
            
          }
          getAiResponse(prompt);

        }
    }

})



const request = require('request');
const API_URL = 'https://api.openai.com/v1/images/generations';


client.on('message', message => {
    // ignorer les messages envoyés par le bot
    if (message.author.bot) return;
  
    // ignorer les messages qui ne commencent pas par le préfixe "!dallee"
    if (!message.content.startsWith(prefix + 'dallee')) return;
  
    // récupérer la description de l'image à partir du message
    const prompt = message.content.slice((prefix + 'dallee').length).trim();


  
    // envoyer une requête à l'API DALL-E
    const API_URL = 'https://api.openai.com/v1/images/generations';
    const options = {
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"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"}`
      },
      body: {
        'model': 'image-alpha-001',
        'prompt': prompt,
        'num_images': 1,
        'size': '256x256',
        'response_format': 'url'
      },
      json: true
    };
    request(options, function(error, response, body) {
      if (error) {
        console.log(error);
        message.channel.send('Oops, il y a eu une erreur lors de la génération de l\'image.');
      } else {
        
        
        const tic5 = new MessageEmbed()
            .setTitle("Dallee")       
            .setColor("000000")
            
            
            .setDescription("**Requête : **"+ prompt )
            .setImage(body.data[0].url)
                
            .setURL(body.data[0].url)

            .setTimestamp()
            message.channel.send({embeds: [tic5]});
      }
    });
  });


  client.on("interactionCreate", async interaction => {
    if(interaction.isCommand) {
        if(interaction.commandName == "dallee") {
            const prompt = interaction.options.getString("question")

            const tic5 = new MessageEmbed()
            .setTitle("Dallee")       
            .setColor("000000")
            
            
            .setDescription("Le Bot va te répondre cela peux prendre quelque secondes !")
            

            .setTimestamp()
            interaction.reply({embeds: [tic5], ephemeral:true});
  
    // envoyer une requête à l'API DALL-E
    const API_URL = 'https://api.openai.com/v1/images/generations';
    const options = {
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"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"}`
      },
      body: {
        'model': 'image-alpha-001',
        'prompt': prompt,
        'num_images': 1,
        'size': '256x256',
        'response_format': 'url'
      },
      json: true
    };
    request(options, function(error, response, body) {
      if (error) {
        console.log(error);
        interaction.channel.send('Oops, il y a eu une erreur lors de la génération de l\'image.');
      } else {
        
        
        const tic5 = new MessageEmbed()
            .setTitle("Dallee")       
            .setColor("000000")
            
            
            .setDescription("**Requête : **"+ prompt )
            .setImage(body.data[0].url)
                
            .setURL(body.data[0].url)

            .setTimestamp()
            interaction.channel.send({embeds: [tic5]});
      }})
        }
    }
  })

  const Jimp = require('jimp');

 
  
  client.on('message', async message => {
    if (message.content === '!canvas') {
      // Create a new image with Jimp
      const image = await Jimp.create(700, 250);
  
      // Draw text on the image
      image.print(Jimp.loadFont(Jimp.FONT_SANS_32_BLACK), 350, 125, "Hello, Canvas!")
      .write("canvas.png") //save image
      
      // Attach the image to the message as an attachment
      const attachment = new Discord.MessageAttachment("canvas.png", 'canvas.png');
      message.channel.send(attachment);
    }
  });


  client.on('messageCreate', message => {
    if(message.content.startsWith(prefix + "sp")) {
    
         
         message.author.createDM().then(channel => {
           const lilo = new MessageEmbed()

               .setTitle(monNom)       
               .setColor("1E90FF")
               
               
               
               .setDescription("123")
               .setImage("https://thumbs.gfycat.com/DarlingTornAsiaticmouflon-size_restricted.gif")
             
               .setTimestamp()


               channel.send({embeds: [lilo]})
               
        
})}

    
    

    
     
})