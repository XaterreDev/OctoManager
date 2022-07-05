exports.run = (client, message, args) => {
    var Discord = require("discord.js");
      message.delete();
      const embed = new Discord.MessageEmbed()
        .setTitle(`<:verifcation:993192770678300714> Progamme de vérification`)
        .setDescription(`ID & Prefix du bot \`${args.join(' & ')}\` | Demandeur \`${message.author.tag}\``)
        .setTimestamp()
        .setColor("FEE75C")
        message.channel.send(embed);
  }