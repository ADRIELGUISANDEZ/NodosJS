const nombreUsuario = prompt("ingrese nombre y apellido");
alert ("Hola " + nombreUsuario + "!! " + "Bienvenido");

let nacimiento = Number(prompt("ingrese su año de nacimiento"))
alert ("Usted tiene " + (2023 - nacimiento) + " " + "años");

let importe = Number(prompt("ingrese sueldo de bolsillo"))

if (importe <= 150000){
    alert ("no puede solicitar préstamo");
} else if (importe > 150000 && importe <= 250000){
    alert ("usted tiene pre aprobado 200 mil pesos");
} else if (importe > 250000 && importe <= 350000){
    alert ("usted tiene pre aprobado 300 mil pesos");
} else {
    alert ("usted tiene pre aprobado 500 mil pesos");
}


for (importe > 150000; importe < 1000000; importe = importe + 40000)
console.log("Ciclo de Cuotas " + importe);



let localidad = prompt("ingrese localidad")
alert ("Buenísimo!! tenemos sucursal en " + localidad)

function sumaPrestamo1 (prestamo1, meses){;
console.log(prestamo1/meses);
}

function sumaPrestamo2 (prestamo2, meses){;
console.log(prestamo2/meses);
}

function sumaPrestamo3 (prestamo3, meses){;
    console.log(prestamo3/meses);
    }


sumaPrestamo1(400000, 12);
sumaPrestamo2(600000, 12);
sumaPrestamo3(1000000, 12);
