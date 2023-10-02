function convertidor(dolar, euro, libra) {
    let resul = 0;

    let option = parseInt(prompt`Seleccione qué tipo de divisa desea convertir
    1. Dólar oficial
    2. Euro
    3. Libra esterlina`);

    let peso = parseInt(prompt("Ingrese la cantidad de dinero (en pesos) que desea convertir: "));

    switch (option) {
        case 1:
            resul = dolar * peso;
            console.log(`El equivalente a $${peso} pesos es igual a $${resul} dólares `);
            break;
        case 2:
            resul = euro * peso;
            console.log(`El equivalente a $${peso} pesos es igual a $${resul} euros `);
            break;
        case 3:
            resul = libra * peso;
            console.log(`El equivalente a $${peso} pesos es igual a $${resul} libras `);
            break;
        default:
            alert("Elija una de las divisas anteriores.");
            break;
    }

}

function impuestos(dolar) {
    resul = 0;
    let option = parseInt(prompt(`¿En qué divisa desea calcular los impuestos?
    1. Peso AR$
    2. Dólar U$S`));

    switch (option) {
        case 1:
            let montoPesos = parseInt(prompt(`Ingrese el monto en pesos que desea calcular: `));
            resul = (75 / 100) * montoPesos;
            resul = resul + montoPesos;
            console.log(`El precio total con impuestos sería de $${resul} pesos`);
            break;
        case 2:
            let montoDolar = parseInt(prompt(`Ingrese el monto que desea calcular: `));
            resul = (75 / 100) * dolar;
            resul = resul + dolar;
            resul = resul * montoDolar;
            console.log(`El precio total con impuestos sería de $${resul} pesos`);
            break;
        default:
            alert("Seleccione una de las opciones anteriores.");
    }
}

const dolar = 350;
const euro = 369;
const libra = 425;

edad = parseInt(prompt(`Debe ser mayor de 18 años para utilizar el sistema. Por favor, ingrese su edad para corroborarla`))

if (edad >= 18) {
    let option = parseInt(prompt(`¿Qué desea realizar?,
1. Convertir divisas
2. Calcular impuestos`))

    switch (option) {
        case 1:
            convertidor(dolar, euro, libra);
            break
        case 2:
            impuestos(dolar);
            break;
        default:
            alert("Elija una de las dos opciones anteriores.")
            break;
    }

}else{
    alert("No eres mayor de 18. Tienes restringido el acceso.")
} 

