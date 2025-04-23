document.addEventListener("DOMContentLoaded", () => {

// Lista de Ramos //
const ramos = ["HTML", "CSS", "JavaScript"];

// Contenedor de tabla notas //
const tabla = document.getElementById("tabla-contenido");

let promedios = [];

// Recorrer cada ramo //
ramos.forEach(ramo => {
    // Completar las notas //
    const nota1 = parseFloat(prompt(`Ingresa la primera nota de ${ramo}:`));
    const nota2 = parseFloat(prompt(`Ingresa la segunda nota de ${ramo}:`));
    const nota3 = parseFloat(prompt(`Ingresa la tercera nota de ${ramo}:`));
    // Calcular promedio //
    const promedio = ((nota1 + nota2 + nota3)/3).toFixed(1);
    promedios.push(parseFloat(promedio));

    // Creación de Fila en el HTML //
    const fila = `
        <tr>
            <td>${ramo}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${nota3}</td>
            <td>${promedio}</td>
        </tr>
    `;

    // Insertando fila en tabla //
    tabla.innerHTML += fila;
});

// Promedio final (extra) //
   const sumaFinal = promedios.reduce((acc, val) => acc + val, 0);
   const promedioFinal = (sumaFinal / promedios.length).toFixed(1);
   
   document.getElementById("promedio-final").innerText = `Tu promedio final es: ${promedioFinal}`;
});