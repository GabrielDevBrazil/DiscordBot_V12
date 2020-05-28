const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Este é realmente o meu ping "," Está tudo bem? Não consigo olhar "," espero que não seja ruim"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Latencia do Bot: \`${ping}\`, Latencia da API: \`${Math.round(client.ws.ping)}\``)
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "!ping",
    accessableby: "Members",
    aliases: ["latency"]

}