const numeros = [56, 100, 1245, 80, 43, 50]

let mayor = 0;

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

for(let i = 0; i < numeros.length; i++){
   if(numeros[i]> mayor){
    mayor = numeros[i]
   }
}

console.log(`el mayor de los numeros: ${numeros} es ${mayor}` )