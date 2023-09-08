console.log('ciao');

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const km = parseInt(document.getElementById('km').value);
const age = document.getElementById('age').value;

const priceKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;
const price = km * priceKm;


// let insertOk = true
// let messageKm;
let discountMessage;
let code

console.log(firstName);
console.log(lastName);
console.log(km);
console.log(age);

// if(isNaN(km)){
//   insertOk = false
//   messageKm = 'Errore! Devi inserire un numero nel campo chilometri';

// }else if(km < 1){
//   insertOk = false
//   messageKm = 'Errore! Inserire un numero superiore a 1';
// }

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


document.getElementById('output-firstname').innerHTML = firstName;
document.getElementById('output-lastname').innerHTML = lastName;
document.getElementById('output-discount').innerHTML = discountMessage;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;
document.getElementById('code-tiket').innerHTML = getRndInteger(1000,2000);
document.getElementById('output-finalprice').innerHTML = finalPrice

