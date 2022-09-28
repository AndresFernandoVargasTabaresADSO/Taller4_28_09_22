addEventListener("DOMContentLoaded", () => {
    console.log(`4. 42 personas toman parte de un baile. Durante la fiesta una dama bailó con 7 caballeros, una segunda
    dama con 8, una tercera con 9, y así sucesivamente hasta que la última bailó con todos los hombres.
    Cuantas damas había en el baile?`)


    let mujeres = 0 
    let personas = 0
    let hombres = 0

    while (personas <= 42){ 
        mujeres += 1
        hombres = mujeres + 7  
        personas = mujeres + hombres  
    }

console.log(`Personas: ${personas} `)
console.log(`Mujeres: ${mujeres}`)
console.log(`Hombres: ${hombres}`)
})