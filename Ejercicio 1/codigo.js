let dineroCofla = prompt("¿cuanto dinero tiene cofla?");
let dineroRoberto = prompt("¿cuanto dinero tiene Roberto?");
let dineroPedro = prompt("¿cuanto dinero tiene Pedro?");

let precio1 = 0.6;
let precio2 = 1;
let precio3 = 1.6;
let precio4 = 1.7;
let precio5 = 1.8;
let precio6 = 2.9;

if (dineroCofla >= precio6) {
  document.write(
    `Cofla puede comprar el Potecito de helado con confites o el Pote de 1/4 KG ademas tu vuelto es ${dineroCofla - precio6} <br>`
  );
} 
else if (dineroCofla >= precio5){
    document.write(`Cofla puede comprar el Bombon helado marca helardo y tu vuelto es ${dineroCofla - precio5} <br>`)
}
else if (dineroCofla >= precio4){
    document.write(`Cofla puede comprar el Bombon helado marca heladovich y tu vuelto es ${dineroCofla - precio4} <br>`)
}
else if (dineroCofla >= precio3){
    document.write(`Cofla puede comprar el Bombon helado marca heladix y tu vuelto es ${dineroCofla - precio3} <br>`)
}
else if (dineroCofla >= precio2){
    document.write(`Cofla puede comprar el helado de crema y tu vuelto es ${dineroCofla - precio2} <br>`)
}
else if (dineroCofla >= precio1){
    document.write(`Cofla puede comprar el helado de agua y tu vuelto es ${dineroCofla - precio1} <br>`)
}
else {
    document.write(`Cofla no te alcanza para ningun helado <br>`)
}

if (dineroRoberto >= precio6) {
    document.write(
      `Roberto puede comprar el Potecito de helado con confites o el Pote de 1/4 KG ademas tu vuelto es ${dineroRoberto - precio6} <br>`
    );
  } 
  else if (dineroRoberto >= precio5){
      document.write(`Roberto puede comprar el Bombon helado marca helardo y tu vuelto es ${dineroRoberto - precio5} <br>`)
  }
  else if (dineroRoberto >= precio4){
      document.write(`Roberto puede comprar el Bombon helado marca heladovich y tu vuelto es ${dineroRoberto - precio4} <br>`)
  }
  else if (dineroRoberto >= precio3){
      document.write(`Roberto puede comprar el Bombon helado marca heladix y tu vuelto es ${dineroRoberto - precio3} <br>`)
  }
  else if (dineroRoberto >= precio2){
      document.write(`Roberto puede comprar el helado de crema y tu vuelto es ${dineroRoberto - precio2} <br>`)
  }
  else if (dineroRoberto >= precio1){
      document.write(`Roberto puede comprar el helado de agua y tu vuelto es ${dineroRoberto - precio1} <br>`)
  }
  else {
      document.write(`Roberto no te alcanza para ningun helado <br>`)
  }

  if (dineroPedro >= precio6) {
    document.write(
      `Pedro puede comprar el Potecito de helado con confites o el Pote de 1/4 KG ademas tu vuelto es ${dineroPedro - precio6} <br>`
    );
  } 
  else if (dineroPedro >= precio5){
      document.write(`Pedro puede comprar el Bombon helado marca helardo y tu vuelto es ${dineroPedro - precio5} <br>`)
  }
  else if (dineroPedro >= precio4){
      document.write(`Pedro puede comprar el Bombon helado marca heladovich y tu vuelto es ${dineroPedro - precio4} <br>`)
  }
  else if (dineroPedro >= precio3){
      document.write(`Pedro puede comprar el Bombon helado marca heladix y tu vuelto es ${dineroPedro - precio3} <br>`)
  }
  else if (dineroPedro >= precio2){
      document.write(`Pedro puede comprar el helado de crema y tu vuelto es ${dineroPedro - precio2} <br>`)
  }
  else if (dineroPedro >= precio1){
      document.write(`Pedro puede comprar el helado de agua y tu vuelto es ${dineroPedro - precio1} <br>`)
  }
  else {
      document.write(`Pedro no te alcanza para ningun helado <br>`)
  }