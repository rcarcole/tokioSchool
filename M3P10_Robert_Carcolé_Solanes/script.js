// Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:
// 1. Crear la clase Persona con los atributos: nombre, apellidos y edad.
// 2. Los objetos tipo Persona deben de almacenarse en un array.
// 3. Crear en el documento HTML un botón “Añadir” que al hacer click llame a la función “Persona”, y un botón “Mostrar” que
// al pulsarlo muestre todas las personas almacenadas en el array.
// 4. Crear la función “Persona()”. Esta función pedirá ingresar un nombre, pedirá ingresar un apellido y pedirá ingresar la edad.
// 5. La función deberá repetir este procedimiento cinco veces.


let personas = [];

class PersonaClass {
    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

function Persona() {
    for (let i=0; i < 5; i++){
    let nombre = window.prompt('Ingrese un nombre: ');
    let apellidos = window.prompt('Ingrese los apellidos: ');
    let edad = window.prompt('Ingrese la edad: ');
    let persona = new PersonaClass(nombre, apellidos, edad);
    personas.push(persona);
}
}

function Mostrar(){
    let tabla = '<table border="1">'
    for (let i = 0; i < personas.length; i++){
        tabla += `  <tr>
                        <td>${personas[i].nombre}</td>   
                        <td>${personas[i].apellidos}</td>   
                        <td>${personas[i].edad}</td>            
                    </tr>`
    }
    tabla += `</table>`
    document.getElementById('contenedor').innerHTML = tabla;
}

    








// personas = [...personas, persona]

    // personas[personas.length] = persona


    // array personas =    [
    //                         {   nombre: rrrrrr, 
    //                             apellidos: ccccccc, 
    //                             edad: 33333
    //                         },
    //                         {   nombre: ddddddd, 
    //                             apellidos: tttttttt, 
    //                             edad: 55555}
    //                     ]
    //                     persona1 = {   nombre: rrrrrr, 
    //                                     apellidos: cccccc, 
    //                                     edad: 33333
    //                                 }
    //                     persona2 = {   nombre: ddddddd, 
    //                                     apellidos: ttttttt, 
    //                                     edad: 555555
    //                                 }
                                    
    //                     personas2.push(persona1)
    //                     personas2.push(persona2)
    //                     personas2.push(persona)
    //                     personas = personas2;

