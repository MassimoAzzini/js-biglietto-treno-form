console.log('ciao');

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const km = parseInt(document.getElementById('km').value);
const age = document.getElementById('age').value;

const priceKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;
const price = km * priceKm;

let finalPrice;
let discountMessage;
let code;

console.log(firstName);
console.log(lastName);
console.log(km);
console.log(age);

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const emissioneBiglietto = document.getElementById('emissione-biglietto');


if(age == 'Maggiorenne'){
      
  finalPrice = price;
  discountMessage = `Biglietto Standard`
  
}else if(age == 'Minorenne'){
  
  finalPrice = price * (1 - (discountUnderage/100));
  discountMessage = `Biglietto Young`
      
}else if (age == 'Over65'){
  
  finalPrice = price * (1 - (discountOver65/100));
  discountMessage = `Biglietto Over65`
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


button1.addEventListener('click', function(){
  
  emissioneBiglietto.classList.remove('d-none');
  emissioneBiglietto.classList.add('d-block');
  
});

button2.addEventListener('click', function(){
  
  emissioneBiglietto.classList.remove('d-block');
  emissioneBiglietto.classList.add('d-none');
  location.reload()
  
});



document.getElementById('output-firstname').innerHTML = firstName;
document.getElementById('output-lastname').innerHTML = lastName;
document.getElementById('output-discount').innerHTML = discountMessage;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;
document.getElementById('code-tiket').innerHTML = getRndInteger(1000,2000);
document.getElementById('output-finalprice').innerHTML = finalPrice;

