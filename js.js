addEventListener("DOMContentLoaded", () => {
    console.log(`3. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de
    computación.`)


    let estudiantes = 0
    let acum = 0

    while(estudiantes<5){
        let nombre = String(prompt(`Ingresa tu nombre y apellido: `))
        let edad = String(prompt(`Ingresa tu edad: `))
        let nota = Number(prompt(`Ingresa tu nota: `))

        console.log(`Estudiante: ${nombre}  Nota: ${nota}`)
        estudiantes+=1
        acum+=nota
    }

    let promedio=(acum/5)
    console.log(`La nota promedio de los 5 estudiantes es: ${promedio}`)
})