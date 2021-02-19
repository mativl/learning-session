const string = 'testing';
const number = 123;
const bool = true;
const pesos = [1, 2, 4, 66];
const objecto = {
	nombre: 'fran', // ',' trailing comma
};
const isNull = null;
let isUndefined;

const name = "franc O'Connor, estas bien " + bool;
// template string
const name2 = `franc O'Connor, estas bien ${bool ? 'SI' : 'NO'}`;

console.log(name2);

// Ternarios
const evalucion = true;
const results = 1 === 2 ? 'si se evalua bien' : 'si se evalua mal';
console.log('Ternario:', results);

const evalucion1 = 1 === 2;
const evalucion2 = 1 === 3;
const results2 = evalucion1
	? 'si se evalua bien'
	: evalucion2
	? 'ok con eval2'
	: 'ninguno va bien';
console.log('Ternario 2:', results2);

// Tema == vs ===
const customerId = 31909;
if ('31909' === `${customerId}`) {
	console.log('Entre al if ==');
} else {
	console.log('Entre al else ==');
}
if (5 == '5') {
	console.log('Entre al if ===');
} else {
	console.log('Entre al else ===');
}

// Como se evalua el falso y true
const test = 0;
console.log('test: ', test);
if (test) console.log('In');
else console.log('Out');

/**
 * Se evalua en falso:
 * - 0
 * - ''
 * - false
 * - undefined
 * - null
 * Se evalua verdadero:
 * - 1
 * - 'dasdsasd'
 * - true
 * - basicamente la existencia de ese valor, por ejemplo en objectos
 */

// Undefined
let testUndefined;
console.log('testUndefined: ', testUndefined);
if (1) {
	testUndefined = 'si';
} else {
	testUndefined = 'no';
}
console.log('testUndefined: ', testUndefined);

const testObject = {
	name: 'fran',
	age: 26,
};
console.log('testObject.hobby: ', testObject.hobby);
if (!testObject.hobby) console.log('testObject.hobby no existe');
else console.log('testObject.hobby es:', testObject.hobby);

// switch case
function checkValor(valor) {
	switch (valor) {
		case 'fran':
			console.log('Hola fran');
			break; // o return

		default:
			throw new Error('xxx');
			break;
	}
}

// Iterar !== loop
// Loops
// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// }
// for (const iterator of [1, 2, 3]) {
// }
const objectLoop = {
	name: 'fran',
	age: 26,
};

for (const key in objectLoop) {
	if (Object.hasOwnProperty.call(objectLoop, key)) {
		console.log(key);
	}
}
// Iterar
const testArr = [
	{ name: 'fran', email: 'xxxxxx' },
	{ name: 'mati', email: 'xxxxxx' },
	{ name: 'pepe', age: 12 },
];
const newArr = testArr.map((value, idx) => {
	return value * 2;
});
console.log('testArr: ', testArr);
console.log('newArr: ', newArr);
console.log(
	'every: ',
	testArr.every((persona) => {
		return persona.email;
	})
);
console.log(
	'some: ',
	testArr.some((persona) => persona.age)
);
const testOOB = { name: 'fran', email: 'xxxxxx' };
Object.entries(testOOB).forEach(([key, value]) => {
	console.log(`${key}: ${value}`);
});

// Destructuring y spread operator
const objPayload = {
	my_name: 'fran',
	age: 123,
	address: 'San Miguel',
	algo: 'mas',
};
const {
	my_name: myNombre,
	noExiste = 'epaa si existo',
	address,
	...fran
} = objPayload;
console.log(myNombre);
console.log(noExiste);
console.log(address);
console.log(fran);

const arrPayload = [1, 2, 3, 4, 5];
const [primerNumero, , tercerNum, ...restNum] = arrPayload;
console.log(primerNumero);
console.log(tercerNum);
console.log(restNum);

function logAddress({ address }) {
	console.log(address);
}
logAddress(objPayload);
