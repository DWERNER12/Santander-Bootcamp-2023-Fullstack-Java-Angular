let array = ["string", 1, true, ['array1'], ['array2']];
console.log(array);
console.log(array[2]);

array.forEach(function (item, index) { console.log(item, index)});

array.push("David");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(54);
console.log(array);

console.log(array.indexOf(1)); 

array.splice(0, 3);
console.log(array);

let novoArray = array.slice(0, 3);
console.log(novoArray);


let object1 = { propriedade1: 'valor1', propriedade2: 'valor2' }
console.log(object1); 

let object2 = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };


// usando ponto "."
//console.log(object2.objectInterno); 

// manipulando objeto
// desestruturando objeto
// let string = object.string;
//let number = object.number;
//let boolean = object.boolean; 


// desestruturando usando chaves
// let { string, number, boolean } = object;
// console.log(string, number, boolean);