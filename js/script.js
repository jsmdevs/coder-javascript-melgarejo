function procesarImpuestos(impuestosCalculados, servSelect, checked) {
    let sumaImp = 0;
    let sumaTotal = 0;
    if (checked) {
        for (let i = 0; i < impuestos.length; i++) {
            sumaImp = impuestos[i].valor * servSelect;
            impuestosCalculados[i].valor += sumaImp
            sumaTotal += sumaImp
        }
        impuestosCalculados[4].valor += sumaTotal;
        impTotal += sumaTotal;
    } else {
        for (let i = 0; i < impuestos.length; i++) {
            sumaImp = impuestos[i].valor * servSelect;
            impuestosCalculados[i].valor -= sumaImp;
            sumaTotal += sumaImp
            if (sumaTotal < 0) {
                sumaTotal = 0;
              }
        }
        impuestosCalculados[4].valor -= sumaTotal
        impTotal -= sumaTotal;
        if (impTotal < 0) {
            impTotal = 0;
          }
        return impuestosCalculados;
    }

}

function formatNum(num) {
    let numConvert = num.toFixed(2).replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    if (numConvert === -0) {
        numConvert = 0;
      }
    return numConvert
}

function calcImpuestos(moneda, precio) {
    let totalImpuestos = 0;
    let totalFinal = 0;
    if (moneda === "peso") {
        impuestos.forEach(e => {
            totalImpuestos += precio * e.valor;
        });
        totalFinal = totalImpuestos + precio;

    } else if (moneda === "dolar") {
        const conversion = precio * monedas[0].valor;
        impuestos.forEach(e => {
            totalImpuestos += conversion * e.valor;
        });
        totalFinal = totalImpuestos + conversion;
    }
    return formatNum(totalFinal);
}

function formatearTexto(texto) {
    // Reemplaza los guiones por espacios
    let textoConEspacios = texto.replace(/-/g, ' ');

    // Divide el texto en palabras
    let palabras = textoConEspacios.split(' ');

    // Convierte la primera letra de cada palabra a mayúsculas
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Une las palabras de nuevo en una cadena de texto
    let textoFormateado = palabras.join(' ');

    return textoFormateado;
}


class Servicio {
    constructor(nombre, planes,categoria, moneda) {
        this.nombre = nombre;
        this.planes = planes;
        this.categoria = categoria
        this.moneda = moneda;
    }
};

class ServicioCarrito {
    constructor(servicio, plan, precio) {
        this.servicio = servicio,
            this.plan = plan,
            this.precio = precio
    }
}

const monedas = [{ divisa: "dolar", valor: 349.98 }];

const impuestos =
    [{ nombre: "IVA 21%", valor: 0.21 },
    { nombre: "Impuesto PAIS 8%", valor: 0.08 },
    { nombre: "Percepción a cuenta de Ganancias 45%", valor: 0.45 }, 
    {nombre: "Percepción a cuenta de Bienes Personales 25%", valor: 0.25 }];

const servicios = [

    new Servicio("Netflix", [{ nombre: "Básico", precio: 1649 }, { nombre: "Estándar", precio: 2799 }, { nombre: "Premium", precio: 3999 },],"video", "peso", ),

    new Servicio("Prime Video", [{ nombre: "Individual", precio: 580 }],"video", "peso"),

    new Servicio("HBO Max", [{ nombre: "Móvil", precio: 389 }, { nombre: "Estándar", precio: 699 }],"video", "peso"),

    new Servicio("Disney+ Star+", [{ nombre: "Disney+", precio: 799 }, { nombre: "Star+", precio: 1749 }, { nombre: "Combo Disney+ Star+", precio: 1999 }],"video", "peso"),

    new Servicio("Spotify", [{ nombre: "Individual", precio: 599 }, { nombre: "Duo", precio: 699 }, { nombre: "Familiar", precio: 999 }, { nombre: "Premium Estudiante", precio: 329 }],"musica", "peso"),

    new Servicio("Apple Music", [{ nombre: "Individual", precio: 6.49 }, { nombre: "Familiar", precio: 9.99 }, { nombre: "Estudiantes", precio: 3.99 }],"musica", "dolar"),

    new Servicio("Tidal", [{ nombre: "Hi-Fi", precio: 380 }, { nombre: "Hi-Fi Plus", precio: 570 }, { nombre: "Familiar Hi-Fi", precio: 589 }, { nombre: "Familiar Hi-Fi Plus", precio: 890 }],"musica", "peso"),

    new Servicio("Deezer", [{ nombre: "Premium", precio: 429 }, { nombre: "Familair", precio: 719 }, { nombre: "Student", precio: 209 }],"musica", "peso"),

    new Servicio("Nvidia GeForce Now", [{ nombre: "Priority", precio: 8242 }, { nombre: "Pro", precio: 14842 }, { nombre: "Ultra", precio: 28044 }],"gaming", "peso"),

    new Servicio("Playstation Plus", [{ nombre: "Essential", precio: 6.99 }, { nombre: "Estra", precio: 10.49 }, { nombre: "Ultra", precio: 11.99 }],"gaming", "dolar"),

    new Servicio("EA Play", [{ nombre: "Estándar", precio: 0.99 }, { nombre: "Pro", precio: 14.99 }],"gaming", "dolar"),

    new Servicio("Xbox Game Pass", [{ nombre: "PC", precio: 1199 }, { nombre: "Core", precio: 949 }, { nombre: "Ultimate", precio: 1499 }],"gaming", "peso"),

    new Servicio("Dropbox", [{ nombre: "Plus 2TB", precio: 9.99 }, { nombre: "Essentials 3TB", precio: 18 }, { nombre: "Business 9TB", precio: 20 }, { nombre: "Business Plus 15TB", precio: 26 }],"storage", "dolar"),

    new Servicio("iCloud", [{ nombre: "50GB", precio: 0.99 }, { nombre: "200GB", precio: 2.99 }, { nombre: "2TB", precio: 10.99 }],"storage", "dolar"),

    new Servicio("Google One", [{ nombre: "Básico 100GB", precio: 1.99 }, { nombre: "Standard 200GB", precio: 2.99 }, { nombre: "Premium 2TB", precio: 9.99 }],"storage", "dolar"),

    new Servicio("One Drive", [{ nombre: "Básico 100GB", precio: 229 }],"storage", "peso"),

    new Servicio("YouTube Premium", [{ nombre: "Individual", precio: 389 }, { nombre: "Familiar", precio: 699 }],"video", "peso")];

let carrito = [];
let precioSinImp = 0;
let impTotal = 0;
let precioTotal = 0;

let impuestosCalculados = JSON.parse(JSON.stringify(impuestos));

impuestosCalculados.push({ nombre: "Suma de impuestos" });
impuestosCalculados.forEach(impuesto => {
    impuesto.valor = 0;
});

// -------------------------------------------------------------
// ----------------------- MOSTRAR SERVICIOS -------------------
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    servicios.forEach(s => {
        let nomServicio = s.nombre.toLowerCase().replace(/\s/g, '-');
        let $servicio = document.getElementById(`${nomServicio}`);
        s.planes.forEach(p => {
            let plan = document.createElement("div");
            plan.className = `${nomServicio}`
            plan.innerHTML = `<input class="${p.nombre}" type="checkbox"><p><span class="negrita plan">${p.nombre}</span>: $${calcImpuestos(s.moneda, p.precio)}</p>`;
            $servicio.appendChild(plan);
        });
    });
});

// -------------------------------------------------------------
// -------------------- MOSTRAR EN CARRITO ---------------------
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    let $carrito = document.getElementById("carrito");
    $carrito.style.display = "none";
})

let select = document.querySelector("main");

select.addEventListener("click", e => {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        const plan = e.target.className;
        const servicioClass = e.target.parentElement.className;
        const servSelect = servicios.find(e => e.nombre.toLowerCase().replace(/\s/g, '-') === servicioClass);
        // const $card = document.querySelector(`.${servicioClass}`);
        
        if (servSelect) {
            const moneda = servSelect.moneda;
            let servPrecio = servSelect.planes.find(e => e.nombre === plan)?.precio; 

            if (servPrecio) {
                if (moneda === "dolar") {
                    servPrecio = servPrecio * monedas[0].valor
                }

                if (e.target.checked) {
                    // $card.style.transform = 'scale(1.1)';
                    const servicio = formatearTexto(servicioClass);
                    carrito.push(new ServicioCarrito(servicio, plan, servPrecio));
                    procesarImpuestos(impuestosCalculados, servPrecio, e.target.checked);
                    precioSinImp += servPrecio;
                    

                } else {
                    // $card.style.cssText = "scale(1.0); background-color: black;";
                    carrito = carrito.filter(c => c.plan !== plan);
                    procesarImpuestos(impuestosCalculados, servPrecio, e.target.checked);
                    precioSinImp -= servPrecio;
                }

                impuestosCalculados.forEach((elemento, i) => {
                    let $imp = document.getElementById(`impuestos-${i}`)
                    $imp.innerHTML = `<p>${elemento.nombre} = $${formatNum(elemento.valor)}`;
                });

                precioTotal = impTotal + precioSinImp

                let $totalFinal = document.getElementById("total-final")
                $totalFinal.innerHTML = formatNum(precioTotal);

                let $precioSinImp = document.getElementById("precio-total-navbar")
                $precioSinImp.innerText = formatNum(precioTotal)
                let $carrito = document.getElementById("carrito")
                let $carritoVacio = document.getElementById("carrito-vacio")

                if (precioSinImp != 0) {
                    let $listServSelect = document.getElementById("list-serv-select")
                    
                    $carritoVacio.style.display = "none"
                    $listServSelect.innerHTML = "";


// DESAPARECER CONTENEDOR DE CARRITO SI NO SE SELECCIONÓ NINGÚN SERVICIO

                    carrito.forEach((e, i) => {
                        let serv = document.createElement("div")
                        serv.cassName = `servicio-${i}`
                        serv.innerHTML = `<p><strong>${e.servicio}</strong> Plan ${e.plan} = $${formatNum(e.precio)}</p>`
                        $listServSelect.appendChild(serv);

                    })
                    $carrito.style.display = "block"
                } else {
                    let $carrito = document.getElementById("carrito");
                    $carrito.style.display = "none"
                    $carritoVacio.style.display = "block"
                }
            }
        }
    }
});


// let date = new Date();
// let copyrightYear = date.getFullYear();
// let copyright = document.getElementById("date-copy");
// copyright.innerHTML = copyrightYear


