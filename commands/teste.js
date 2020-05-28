const Discord = require("discord.js");
const fs = require("fs");
let db = fs.readFileSync('./personagem.json','utf-8')




const nickGenerator = require('nick-generator')
const nick = nickGenerator();
const nick2 = nickGenerator();
const nick3 = nickGenerator();
const nick4 = nickGenerator();
const nick5 = nickGenerator();
const nick6 = nickGenerator();


exports.run = async (client, message, args) => {


		 message.channel.send("Desejar criar um novo personagem?").then(async m => {

		 	
		 	m.react('709902499812737084')
            m.react('709902499288711168')

           

	

	const filter = (r, u) => r.me && u.id === message.author.id;
	const collector = m.createReactionCollector(filter, { time: 15000 });

    

    collector.on('collect', async (r) => {

        switch(r.emoji.name) {
        case 'Success':
        m.reactions.removeAll()
        if(!db[message.guild.id]) db[message.guild.id] = {
            [message.author.id]: {
            "Personagem": "0",
            "username": `${message.author.username}`,
            "Registro": "Não ativo"
            }
            }
if (db[message.guild.id][message.author.id].username === undefined) return m.edit('Você ja tem um personagem em nosso sistema!');
            fs.writeFile("./personagem.json", JSON.stringify(db), (err) => {
                    if (err) console.log(err)
                })
            m.edit(`Escolha um nome para seu personagem:
 ┎╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
 ┡ ${nick}
 ┡ ${nick2}
 ┡ ${nick3}
 ┡ ${nick4}
 ┡ ${nick5}
 ┡ ${nick6}
 ┖╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┚
             `)
             m.react('1️⃣')
             m.react('2️⃣')
             m.react('3️⃣')
             m.react('4️⃣')
             m.react('5️⃣')
             m.react('6️⃣')

            break;
            case 'Error':
            m.reactions.removeAll()
            m.edit('Comando cancelado com sucesso!')
            break;
            case 'one' :
            break;
            case 'two' :
            break;
            case 'three' :
            break;
            case 'four' :
            break;
            case 'five' :
            break;
            case 'six' :
            break;
            }
            })


	 


        })


}
		