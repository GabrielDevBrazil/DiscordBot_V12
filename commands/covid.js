const Discord = require("discord.js")
const axios = require("axios")
const deleteCount = parseInt(1, 10);

module.exports.run = async (client, message, args) => {


	axios.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi").then(response => {


		let confirmado = response.data.confirmados.total
		let novos = response.data.confirmados.novos
		let curados = response.data.confirmados.recuperados

		const embed = new Discord.MessageEmbed()
		.setColor('#DC143C')
		.setTitle('Informações do coronavirus no Brasil')
		.addFields(
		{ name: 'Casos confirmados em todo o Brasil:', value: `${confirmado} mil casos` },
		{ name: 'Casos novos em todo o Brasil:', value: `${novos} mil casos` },
		{ name: 'Casos recuperados em todo o Brasil:', value: `${curados} mil casos` },
		{ name: 'Oque é o covid-19?:', value: `O Coronavírus, causador da pandemia global, pertence a uma família de vírus (CoV) que já circula no Brasil. Os vírus dessa família podem causar desde resfriados comuns a doenças mais graves, como a Síndrome Aguda Respiratória Severa (SARS) e a Síndrome Respiratória do Oriente Médio (MERS). O Novo Coronavírus recebeu a denominação SARS-CoV-2 pela Organização Mundial da Saúde (OMS) e a doença que ele provoca tem a denominação COVID-19.` },
		{ name: 'Principais sintomas causado pela covid-19:', value: `Febre, Dor de Garganta, Tosse, Falta de Ar` },
		{ name: 'Como se previnir do covid-19:', value: `Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos. | Evite tocar olhos, nariz e boca com as mãos não lavadas. | Ao tocar, lave sempre as mãos como já indicado. | Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando. | Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto. | Higienize com frequência o celular e os brinquedos das crianças. | Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos. | Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência. ` },
		)
		.setThumbnail('https://d2dxldo5hhj2zu.cloudfront.net/img/983x,jpg/https://d3043uog1ad1l6.cloudfront.net/uploads/2020/03/photo-1584118624012-df056829fbd0.jpeg')
		.setTimestamp()

	message.channel.send(embed)
        

        

        
    

    })
}