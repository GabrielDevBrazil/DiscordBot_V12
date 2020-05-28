const Discord = require("discord.js")
const botconfig = require("../config.json");



module.exports.run = async (client, message, args) => {

    if(message.author.id != "655590153955442698") return message.channel.send("Você é o bot, o dono!")

    try {
        await message.channel.send("Bot está sendo desligado ...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


}


module.exports.config = {
    name: "desligar",
    description: "shuts down the bot!",
    usage: "!desligar",
    accessableby: "Bot Owner",
    aliases: ["botstop"]
}