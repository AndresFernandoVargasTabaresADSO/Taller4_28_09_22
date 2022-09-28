addEventListener("DOMContentLoaded", () => {
    console.log(`1. En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo
    de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la
    granja. La calidad de cada gallina se obtiene según la formula:
    calidad = (peso de la gallina * altura de la gallina)/Numero de huevos que pone;`)

    let N = 0, i=0;
    do{
        if(!N){
            N = Number(prompt("Cuantas gallinas hay en la granja"));
            i++;
        }
        let peso = parseFloat(prompt(`Ingresa el peso de la gallina #${i} en Kilos: `))
        let altura = parseFloat(prompt(`Ingrese la altuta de la gallina #${i} en Cemtimetros `))
        let num = Number(prompt(`Ingresa el número de huevos que pone la gallina #${i}: al dia`))
        let calidad = (peso * altura) / num
        alert(`la gallina #${i} tiene un precio por kilo de huevo de : ${Math.round((calidad / N))} `);
        i++;
    }while(N==i)
})