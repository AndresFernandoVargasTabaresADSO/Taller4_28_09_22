addEventListener("DOMContentLoaded", () => {
    console.log(`8. Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del ITT. El cálculo se hace
    de la siguiente forma:
    Se multiplica cada calificación por los créditos de cada materia
    El resultado anterior se suma con los resultados de todas las materias, por separado se suman los
    créditos de cada materia y finalmente se divide la suma de todas las materias por sus respectivos
    créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética).`)

    
    let estado = 'si'
    let i = 1

    while (estado != 'no'){ 
        nota = parseFloat(prompt("Ingrese la nota de fundamentos: "))
        cred1 = Number(prompt("Ingrese los creditos de la materia Fundamentos: "))
        nota2 = parseFloat(prompt("Ingrese la nota de Base de datos: "))
        cred2 = Number(prompt("Ingrese los creditos de Bases de datos: "))
        notaE = parseFloat(prompt("Ingrese la nota de Etica: "))
        credE = Number(prompt("Ingrese los creditos de Etica: "))

        let fin = nota * cred1             
        let fin2 = nota2 * cred2
        let finE = notaE * credE
        let finC = cred2 + credE + cred1

        prom = (fin + fin + finE) / finC   
        console.log(`Promedio ponderado del estudiante #${i++}: ${Math.round(prom)}`)
        estado = String(prompt(`Desea agregar las notas de un alumno? (si/no): `)) 
    }
})