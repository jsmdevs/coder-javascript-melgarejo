function leerMonto(moneda){
    monto = parseInt(prompt(`Ingrese la cantidad de dinero (en ${moneda}) que desea convertir: `));
    return monto
}

function infoDivisas() {
    const opcion = parseInt(prompt(`
    1. Buscar una divisa
    2. Ver todas las divisas`))

    switch(opcion) {
        case 1:
            const busqueda = prompt("Ingrese la divisa que desea buscar: ")
            resul = divisas.find((e) => e.moneda === busqueda)
            console.log(resul) 
            break;

        case 2:
            for (i=0; i < divisas.length; i++){
                console.log(divisas[i])
            }
            break;
    }
}

function convertidor() {
    let resul = 0;
    let monto = 0
    const option = parseInt(prompt`Seleccione qué tipo de divisa desea convertir
    1. Dólar oficial
    2. Euro
    3. Libra esterlina
    4. Ver información sobre las divisas`);
    const convertir = (a, b) => a * b

    switch (option) {
        case 1:
            monto = leerMonto(divisas[0].moneda)
            resul = convertir(divisas[0].valor, monto)
            console.log(`El equivalente a $${monto} dólares es igual a $${resul} pesos `);
            break;
        case 2:
            monto = leerMonto(divisas[1].moneda)
            resul = convertir(divisas[1].valor, monto);
            console.log(`El equivalente a $${monto} euros es igual a $${resul} pesos `);
            break;
        case 3:
            monto = leerMonto(divisas[2].moneda)
            resul = convertir(divisas[2].valor, monto);
            console.log(`El equivalente a $${monto} libras es igual a $${resul} pesos `);
            break;
        case 4:
            infoDivisas()
        default:
            alert("Elija una de las divisas anteriores.");
            break;
    }

}

function impuestos() {
    resul = 0;
    let option = parseInt(prompt(`¿En qué divisa desea calcular los impuestos?
    1. Peso AR$
    2. Dólar U$S`));

    const calcImpuesto = a => impuesto / 100 * a
    const calcFinalPesos = (a, b) => a + b
    const calcFinalDolar = (a, b) => (a + divisas[0].valor) * b

    function calcImpuestoPesos() {
        let montoPesos = parseInt(prompt(`Ingrese el monto en pesos que desea calcular: `));
        let resulFinal = calcFinalPesos(calcImpuesto(montoPesos), montoPesos)
        console.log(`El precio total con impuestos sería de $${resulFinal} pesos`);
    }

    function calcImpuestoDolar() {
        let montoDolar = parseInt(prompt(`Ingrese el monto en dólares que desea calcular: `));
        let resulFinal = calcFinalDolar(calcImpuesto(divisas[0].valor), montoDolar)
        console.log(`El precio total con impuestos sería de $${resulFinal} pesos`);
    }

    switch (option) {
        case 1:
            calcImpuestoPesos()
            break;
        case 2:
            calcImpuestoDolar()
            break;
        default:
            alert("Seleccione una de las opciones anteriores.");
    }
}

const impuesto = 75;

const divisas = [{pais: "Estados Unidos", moneda: "dólar", valor: 350}, {pais: "España", moneda: "euro", valor: 369}, {pais: "Reino Unido", moneda: "libra", valor: 425}]

class Edad {
    constructor(edad) {
        this.edad = edad
    }

    esMayor() {
        return this.edad >= 18
    }
}

const edad = new Edad(parseInt(prompt("Debe ser mayor de 18 años para utilizar el sistema. Por favor, ingrese su edad para corroborarla")));

if (edad.esMayor()) {
    let option = parseInt(prompt(`¿Qué desea realizar?,
    1. Convertir divisas
    2. Calcular impuestos`))

    switch (option) {
        case 1:
            convertidor();
            break
        case 2:
            impuestos();
            break;
        default:
            alert("Elija una de las dos opciones anteriores.")
            break;
    }

} else {
    alert("No eres mayor de 18. Tienes restringido el acceso.")
}

