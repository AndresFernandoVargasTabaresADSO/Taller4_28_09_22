addEventListener("DOMContentLoaded", () => {
    console.log(`7. Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana.
    Su política de pagos es que un vendedor recibe un sueldo base, y un 10% extra por comisiones de
    sus ventas. El gerente de su compañía desea saber cuanto dinero obtendrá en la semana cada
    vendedor por concepto de comisiones por las tres ventas realizadas, y cuanto tomando en cuenta su
    sueldo base y sus comisiones.`)

    
    let i = 1
    
    let sueldoBase = Number(prompt(`Ingresa el sueldo base: `))
    let vendedores = Number(prompt(`Cantidad Vendedores: `))
    
    while(vendedores>0){
        let ventas = Number(prompt(`Ingresa el precio de venta #1: `))
        let ventas2 = Number(prompt(`Ingresa el precio de venta #2: `))
        let ventas3 = Number(prompt(`Ingresa el precio de venta #3: `))
        
        comision = ventas * 0.10
        comision2 = ventas2 * 0.10
        comision3 = ventas3 * 0.10
        
        let acum = 0
        acum+=comision + comision2 + comision3

        vendedores -= 1
        extra = sueldoBase+acum
        console.log(`-----------------Vendedor ${i++}-------------------------`)
        console.log(`Comision de la Venta 1: ${comision}`)
        console.log(`Comision de la Venta 2: ${comision2}`)
        console.log(`Comision de la Venta 3: ${comision3}`)
        console.log(`Comision: ${acum}`)
        console.log(`Sueldo base: ${sueldoBase}`)
        console.log(`El sueldo mas la comision es: ${extra}`)
    }


})