function wait(seconds) {
	const timeToWait = seconds * 1000;
	console.log(
		`This shipment have to wait ${timeToWait} miliseconds before creating a filfillment`
	);
	return new Promise((resolve) =>
		setTimeout(() => {
			console.log('Termine de esperar');
			resolve(`Espere ${seconds} segundo`);
		}, timeToWait)
	);
}

function returnPromise() {
	return new Promise((resolve, reject) => {
		// tu codigo
		reject('not ok');
		resolve('ok');
	});
}
// returnPromise()
// 	.then((response) => console.log('en el then', response))
// 	.catch((err) => console.error('en el catch', err));

function sinAsyncAwait() {
	console.log('hola');
	wait(2).then((response) => console.log('chau', response));
}

async function conAsyncAwait() {
	console.log('hola');
	await wait(2);
	console.log('chau');
}

async function A() {
	console.log('ABC');
	await conAsyncAwait();
	console.log('123');
}

async function A1() {
	console.log('Inicio A1');
	await A2();
	console.log('Final A1');
}
async function A2() {
	console.log('Inicio A2');
	await A3();
	console.log('Final A2');
}
async function A3() {
	console.log('Inicio A3');
	await A4();
	console.log('Final A3');
}
async function A4() {
	console.log('Inicio A4');
	await wait(2);
	console.log('Final A4');
}
// A1(); // Inicio A1, Inicio A2, Inicio A3, Inicio A4, 'Termine de esperar', Final A4, Final A3, Final A2, Final A1

const axios = require('axios');

async function getPokemon() {
	try {
		const { data: myPokemon, status } = await axios.get(
			'https://pokeapi.co/apis/v2/'
		);
		console.log(myPokemon);
	} catch (error) {
		console.error('eyy falle: ', error.message);
	}
}

function getPokemonPromise(number) {
	return axios.get('https://pokeapi.co/api/v2/pokemon/' + number);
}

// CRUD
// POST, GET, UPDATE, DELETE

async function test() {
	try {
		const [promise1Result, promise2Result] = await Promise.all([
			getPokemonPromise(1),
			getPokemonPromise(2213123123213),
		]);
		console.log(promise1Result.data.name);
		console.log(promise2Result.data.name);
	} catch (error) {
		console.log(error.message);
	}
}
test();
