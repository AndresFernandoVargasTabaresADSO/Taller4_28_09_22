addEventListener("DOMContentLoaded", () => {
    console.log(`2. Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación
    y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de
    contadores`)


    let CP = 0 

    while (CP < 10){

        let n1 = Number(prompt("Ingrese un numero (n1): ")) 
        let n2 = Number(prompt("Ingrese un numero diferente de cero (n2): "))

        let suma = n1 + n2  
        let multiplicacion = n1 * n2
        let resta = n1 - n2
        let division = n1 / n2


        alert(`${n1} + ${n2} = ${suma}`)  
        alert(`${n1} * ${n2} = ${multiplicacion}`)
        alert(`${n1} - ${n2} = ${resta}`)
        alert(`${n1} / ${n2} = ${division}`)
        
        CP+=1
    }
})