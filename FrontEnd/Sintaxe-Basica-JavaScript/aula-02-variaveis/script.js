//boolean
var vOuF = false;
console.log(`${vOuF} é do tipo: ${typeof (vOuF)}`);

//number
var n = 45;
console.log(`${n} é do tipo: ${typeof (n)}`);

//string
var s = 'David';
console.log(`${s} é do tipo: ${typeof (s)}`);

var n1 = 2;
var n2 = 2;
//adição
function adicao() {
    let soma = n1 + n2;
    console.log(`A soma de ${n1} + ${n2} = ${soma}`);
}
adicao();

//subtração
function subtracao() { 
    let sub = n1 - n2;
    console.log(`A Subtração de ${n1} - ${n2} = ${sub}`);
}
subtracao();

//multiplicação
function multiplicacao() { 
    let mult = n1 * n2;
    console.log(`A mutiplicação de ${n1} * ${n2} = ${mult}`);
}
multiplicacao();

//potenciação
function potenciacao() {
    let p = n1 * n1;
    console.log(`A potenciação de ${n1} = ${p}`);
}
potenciacao();

