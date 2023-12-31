// definizione variabili
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const emissioneBiglietto = document.getElementById('emissione-biglietto');


let firstName;
let lastName;
let km;
let age;
let finalPrice;
let discountMessage;

// funzioni al click del bottone GENERA
button1.addEventListener('click', function(){
  
  firstName = document.getElementById('first-name').value;
  lastName = document.getElementById('last-name').value;
  km = parseInt(document.getElementById('km').value);
  age = document.getElementById('age').value;
  
  const priceKm = 0.21;
  const discountUnderage = 20;
  const discountOver65 = 40;
  const price = km * priceKm;
  
  emissioneBiglietto.classList.remove('d-none');
  
  if(age == 'Maggiorenne'){
        
    finalPrice = price.toFixed(2);
    discountMessage = `Biglietto Standard`
    
  }else if(age == 'Minorenne'){
    
    finalPrice = (price * (1 - (discountUnderage/100))).toFixed(2);
    discountMessage = `Biglietto Young`
        
  }else if (age == 'Over65'){
    
    finalPrice = (price * (1 - (discountOver65/100))).toFixed(2);
    discountMessage = `Biglietto Over65`
  }

  document.getElementById('output-firstname').innerHTML = firstName;
  document.getElementById('output-lastname').innerHTML = lastName;
  document.getElementById('output-discount').innerHTML = discountMessage;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;
  document.getElementById('code-tiket').innerHTML = Math.floor(Math.random() * (10000 - 9000 + 1) + 9000);
  document.getElementById('output-finalprice').innerHTML = finalPrice;
  
});

button2.addEventListener('click', function(){
  
  emissioneBiglietto.classList.add('d-none');
  
});





