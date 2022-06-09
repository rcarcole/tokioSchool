/*
Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:

1. Crear un programa que pregunte un número entero entre 0 y 10. Si introduce un número mayor que 10 o menor que 0 el
programa lanzará un mensaje indicando que el número introducido no es correcto y volverá a preguntar.

2. El programa deberá calcular su factorial e indicárnoslo por pantalla con un mensaje.

3. Recordamos que el factorial de un número se calcula de la siguiente forma:
4. 5! = 5 x 4 x 3 x 2 x 1 = 120.
5. Nota: El factorial de 0 es 1.

*/

let numeroIntroducido = 0;
let continuar = true;

while(continuar) {
    numeroIntroducido = window.prompt('Introduzca un número entre 0 y 10');
    if (numeroIntroducido > 10 || numeroIntroducido < 0) {
        alert('el número introducido no es correcto');
    } else{
        continuar = false;
    }

}

let factorial = 1;
for (let i = numeroIntroducido; i > 0; i--){
    factorial = factorial * i;
}

alert('El factorial de: ' +numeroIntroducido+ ' es: ' +factorial+ '.');
