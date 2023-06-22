/* Ejercicio 1 mejorado con funciones
*************************************************************************************
let Nombre = prompt("Hola, ¿Cómo te llamas?");
let dinero = prompt("¿Con cuanto dinero cuentas?");

function comprarHelado(Nombre, dinero){
    let precio1 = 0.6;
    let precio2 = 1;
    let precio3 = 1.6;
    let precio4 = 1.7;
    let precio5 = 1.8;
    let precio6 = 2.9;

    if (dinero >= precio6) {
    document.write(
        `${Nombre} puede comprar el Potecito de helado con confites o el Pote de 1/4 KG ademas tu vuelto es ${dinero - precio6} <br>`
    );
    } 
    else if (dinero >= precio5){
        document.write(`${Nombre} puede comprar el Bombon helado marca helardo y tu vuelto es ${dinero - precio5} <br>`)
    }
    else if (dinero >= precio4){
        document.write(`${Nombre} puede comprar el Bombon helado marca heladovich y tu vuelto es ${dinero - precio4} <br>`)
    }
    else if (dinero >= precio3){
        document.write(`${Nombre} puede comprar el Bombon helado marca heladix y tu vuelto es ${dinero - precio3} <br>`)
    }
    else if (dinero >= precio2){
        document.write(`${Nombre} puede comprar el helado de crema y tu vuelto es ${dinero - precio2} <br>`)
    }
    else if (dinero >= precio1){
        document.write(`${Nombre} puede comprar el helado de agua y tu vuelto es ${dinero - precio1} <br>`)
    }
    else {
        document.write(`${Nombre} no te alcanza para ningun helado <br>`)
    }
}

comprarHelado(Nombre, dinero)*/


let edad = prompt("¿Cuantos años tenes?")

const mayorEdad = (Edad) => {
    if(Edad >= 18){
        return document.write("Usted es mayor de edad, puede ingresar")
    }
    else{
        return document.write("Usted no es mayor de edad, no puede ingresar")
    }
}

mayorEdad(edad)