const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.commands = new Enmap();




// https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});




client.on('channelCreate', channel => {

  const canal = client.channels.cache.get('715328249458327612');
  channel.send('<a:610576303652995130Cpia:715319364781604866> O Olho que tudo vê viu que esse canal foi criado e relatou a staff! <a:610576303652995130Cpia:715319364781604866>')

  const log = new Discord.MessageEmbed() 
  .setColor('RANDOM')
  .setTitle('O Olho que tudo vê viu:')
  .addFields(
    { name: 'Um canal foi criado com o nome:', value: `${channel.name}` },
    { name: 'E ele e um canal tipo:', value: `${channel.type}`},
    { name: 'O ID Dele é:', value: `${channel.id}`},
    { name: 'Esse canal foi criado ha:', value: `${channel.createdAt}`}

  )

  canal.send(log)

  });

  client.on('message', message => {

    if (message.content == '!ping') return message.channel.send('=ping')
  })



client.login(config.token);