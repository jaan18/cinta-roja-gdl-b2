//objeto animal y extender subclases de tipo voladores y terrestres y hacer cosas 
class Animal{

    constructor(size,name,color){
        this.size = size
        this.name = name
        this.color = color
    }
    
    comer(){
        console.log("El "+this.name+ " esta comiendo")
    }

    dormir(){
        console.log("EL "+this.name+ " esta durmiendo")
    }

}

class Voladores extends Animal{
    constructor(size,name,color,maxAltura){
        super(size,name,color)
        this.maxAltura = maxAltura
    }

    volar(){
       // return "El "+this.name+ " empezo a volar a una altura de "+this.maxAltura
       console.log("EL "+this.name+ " esta volando")
    }
}

const animal = new Animal(" grande"," oso"," cafe")
const pajaro = new Voladores(" Pequeño","Cotorro"," Verde","10 metros")
console.log(animal.dormir())
console.log(pajaro.volar())