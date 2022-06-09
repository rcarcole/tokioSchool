// Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:
// 1. Crear un documento HTML con un botón que al hacer click llame a la función “generar_tabla”.
// 2. Crear una función “generar_tabla” que cada vez que sea llamada cree una tabla de 3x3 elementos.
// 3. En cada elemento de la tabla se debe indicar a que celda y a que columna corresponde:



function generar_tabla(){
    let tabla = "<table border='1'>"
    for (let i=0; i < 3; i++){
        tabla+='<tr>';
        for(let j=0; j < 3; j++){
            tabla+=`<td>Celda de la fila ${i}, columna ${j}</td>`;
        }
        tabla+='</tr>';
    }
    tabla+="</table></br>"
    document.getElementById('contenedorTabla').innerHTML += tabla;
}