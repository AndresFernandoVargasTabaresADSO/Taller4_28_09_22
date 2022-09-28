addEventListener("DOMContentLoaded", () => {
    console.log(`5. El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen
    de nivelación. Diseñe un pseudocódigo que lea las calificaciones obtenidas en las 5 unidades por cada
    uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación.`)


    let valiste=0
    let finos=0
    let alumnos=0
    i=1

    while(alumnos<40){
        let nota1 = Number(prompt(`Ingresa tu nota #1: `))
        let nota2 = Number(prompt(`Ingresa tu nota #2: `))
        let nota3 = Number(prompt(`Ingresa tu nota #3: `))
        let nota4 = Number(prompt(`Ingresa tu nota #4: `))
        let nota5 = Number(prompt(`Ingresa tu nota #5: `))
        i+=1
        let promedio= (nota1 + nota2 + nota3 + nota4 + nota5) / 5

        if(promedio<=6){
            valiste += 1
        }

        else{
            finos += 1
        }
        alumnos+=1
    }
    console.log(`Alumnos sin derecho al examen de nivelación: ${valiste}`)
    console.log(`Alumnos con derecho al examen de nivelación: ${finos}`)
})