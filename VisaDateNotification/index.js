const sns = require('./lib/sns');
const axios = require('axios');

exports.handler = async (event) => {
	console.log('Event: ', JSON.stringify(event));
	const { data: dates } = await axios.get(
		'https://agendamigracolbackend.emtelco.co/api/list_date_schedule/?nopaginate=true&city_id=tipi33&headquarters_id=tipi48&schedulecstm__level1=Registro_de_Visa'
	);
	console.log('Dates: ', JSON.stringify(dates));
	if (dates.length) {
		await sns.PublishMessage(
			dates,
			'arn:aws:sns:us-east-1:120534925340:VisaDateNotification'
		);
	}
	return 'Executed';
};
