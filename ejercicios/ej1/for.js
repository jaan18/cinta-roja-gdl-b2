for(let i = 0; i < 10; i++){
    console.log(`Numero: ${i}`);
    if(i == 5) {
        console.log("Voy en el 5");
        continue; //evita el 5 en el loop del for y deja el if 
    }
}

let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
for(let i = 0; i < array.length; i++){
    if(i % 2 == 0){
    console.log(`El numero ${i} es Par`);
    }
}