console.log ('probando,probando')

let n1=4

const n2=2

n1=6

console.log (n1+n2)

const array=[n1,n2]

function sumaVec(arr) {
    let suma = 0; 
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]; 
    }
    return suma; 
}

const resultado = sumaVec(array);
console.log(resultado)

const numero = prompt("Por favor, ingresa un número:");


alert("Hola mundo");


const confirmacion = confirm("¿Quieres continuar?");

if (confirmacion) {
    alert("Has elegido continuar.");
} else {
    alert("Has decidido no continuar.");
}