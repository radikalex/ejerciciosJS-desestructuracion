// --------------- 1. Ejercicios destructuring ------------------------
// Dado el siguiente objeto
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae a la empleada Ana con todos sus datos personales
const [,empleada_Ana] = empleados;
console.log(empleada_Ana);
// Extrae el email del empleado Luis --> Luis@gmail.com
const [{email:emailLuis}] = empleados;
console.log(emailLuis);

// Dado el siguiente objeto
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
const {name:nombre} = pokemon;
// Extrae el nombre del Pokemon
console.log(nombre);
// Extrae el tipo de Pokemon que es
const {type} = pokemon;
console.log(type);
// Extrae el movimiento “Tackle”
const {moves:[,tackel]} = pokemon;
console.log(tackel);





// --------------- 2. Ejercicios spread/rest ------------------------

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const merge_pokemons = {...pokemon, ...pikachu}
console.log(merge_pokemons)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...numeros) => {
    for (const numero of numeros) {
        if(typeof numero !== 'number')
            return "Alguno de los argumentos introducidos no es un numero";
    }
    return numeros.reduce((a,b) => a + b);
};
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
const addOnlyNums = (...argumentos) => {
    return sumEveryOther(...argumentos.filter((argumento) => typeof argumento === 'number')); // Lo he hecho así pa mezclar un poco spread y rest
}
console.log(addOnlyNums(1, 'perro', 2, 4));

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
const countTheArgs = (...argumentos) => {
    return argumentos.length;
}
console.log(countTheArgs('gato', 'perro')); 
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); 

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const combineTwoArrays = (array1, array2) => {
    if ( !Array.isArray(array1) || !Array.isArray(array2) ) {
        return "Uno de los dos argumentos recibidos no es un array";
    }
    return [...array1, ...array2];
}
const mugiwarasEastBlue = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji'];
const mugiwarasGrandLine = ['Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']
const mugiwarasActuales = combineTwoArrays(mugiwarasEastBlue, mugiwarasGrandLine);
console.log(mugiwarasActuales);




// --------------- 3. Extras ------------------------
// Dado el siguiente objeto
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy)
// console.log(maximaManana)
const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES
console.log(maximaHoy)
console.log(maximaManana)

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (...argumentos) => {
    const resultado = [];
    for (const argumento of argumentos) {
        if(!resultado.includes(argumento))
            resultado.push(argumento);
    }
    return resultado
}
console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
const combineAllArrays = (...arrays) => {
    for (const array of arrays) {
        if(!Array.isArray(array)) {
            return "Alguno de los argumentos introducidos no es un array";
        }
    }
    return arrays.reduce((a, b) => [...a, ...b]);
}
console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
const sumAndSquare = (...numeros) => {
    for (const numero of numeros) {
        if(typeof numero !== 'number')
            return "Alguno de los argumentos introducidos no es un numero";
    }
    return numeros.map( numero => numero**2).reduce( (a, b) => a + b);
}
console.log(sumAndSquare(3, 4, -3, 1));