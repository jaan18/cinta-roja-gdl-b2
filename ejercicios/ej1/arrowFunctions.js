//1. leer un array de enteros y sacar su promedio
const promedioprom =() =>{
    let suma = 0
    for(let x = 0; x < arreglo.length; x++){
        suma += arreglo[x];
      }
      let promedio = suma / arreglo.length;
    return promedio
}
    let arreglo =[1,2,3,4,5]
  console.log(promedioprom())
  


/*
//2. guardar en un array los primeros numeros pares
const guardar = () =>{;
    let numeros = new Array(41);
    for(let i=0; i < numeros.length; i++){
        if(i % 2 == 0){
            console.log(`EL numero ${i} es par`);
        }

    }
}
console.log(guardar());
*/

//3. funcion que pida N parametros y devuelva cuantos parametros se le pasaron

const pedir = () => {
    let numbers = new Array ();
    let guarda;
    numbers = prompt("Ingresa el numero de parametros que quieres agregar ")
    for(let i=0; i<numbers.length;i++){
        console.log("Agregado exitosamente")
        continue;
        console.log(numbers[i]);
    }
    console.log("Tienes "+numbers+" parametros")

}
console.log(pedir());



