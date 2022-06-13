// Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:
// 1. Crear un script, que nos indique en el documento la fecha y hora actual.
// 2. El texto de salida tendrá el siguiente formato: “Hoy es Lunes, 15 de Noviembre de 2021, y son las 15:29 horas”.

function fechaActual() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];
      let numeroDia = fecha.getDay();
      let nombreDia = dias[numeroDia];

      let meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
      let numeroMes = fecha.getMonth();
      let nombreMes = meses[numeroMes];

    let texto = `Hoy es ${nombreDia}, ${dia} de ${nombreMes} de ${anio}, y son las ${hora}:${minutos}:${segundos} horas`;
    document.getElementById('contenedor').innerHTML = texto;

}