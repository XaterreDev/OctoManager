exports.run = (client, message, args) => {
    var Discord = require("discord.js");
      message.delete();
      const embed = new Discord.MessageEmbed()
        .setTitle(`<:verifcation:993192770678300714> Vérification effectué par ${message.author.tag} (<:diamond:992722958856499250>)`)
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("FEE75C")
        message.channel.send(embed);
  }