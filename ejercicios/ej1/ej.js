class persona{

    constructor(name,edad,telefono,email){
        this.nombre = name
        this.edad = 25
        this.telefono = telefono
        this.email = email
    }


//Funcion 
    presentarse(){
     return "Hola me llamo " + this.nombre + "y tengo" + this.edad + "años"
    }

    correr(){
      return "estoy corriendo"
    }

}

var arturo = new persona ("arturo",34,3343542312,"arturo@gmail.com")
var jovani = new persona ("jovani",25,3317227996,"hola")
console.log(jovani.presentarse())

//--------------------------------------------------------------------------
class triangulo{
    
    constructor(base,altura){
        this.base = base
        this.altura = altura
    }
    
area(){
    return (this.base * this.altura) / 2
    }
perimetro(){
    return (this.base * 3)
}
}

var triangulito = new triangulo(3,5)
console.log("area "+triangulito.area())
console.log("perimetro " +triangulito.perimetro())

