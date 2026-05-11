let persona = {
    nombre: "Kira",
    edad: "6",
    ciudad: "Madrid",
    address: {
        calle: "Calle Mayor",
        numero:10
    },
    saludar(){
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

console.log(persona.saludar());

console.log(persona.address.calle);

console.log(persona.ciudad);