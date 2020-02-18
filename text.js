function rafaela (a,b) {
var c=a+b
var d=c+a
console.log(d)}

function amit (a) {
  if (a%2==0){
  console.log ('it is even!')
  }else if(a%2==1){
  console.log ('it is odd!')
  }else{
  console.log ('i do not know')
  }
   }

function susana () {
for (a=0;a<100;a=a+1){
if (a%2==0)
console.log(a)
}
}
a=b
a==b && b==c
a==b || b===c

function exercise (am,c1,c2) {
 if (c1=='GBP' && c2=='EUR'){
 am=am*1.2;
 console.log (am);
 }
 if (c1=='GBP' && c2=='USD'){
 am=am*1.4;
 console.log (am);
 }
 if (c1=='GBP' && c2=='AUD'){
 am=am*1.3
 console.log (am);
 }
 else {
 console.log (am);
 }
 }



 function BodyMassIndex (weight,height) {
 var weight = document.getElementById('weight');
 var height = document.getElementById('height');
 var bmi = weight.value/(height.value*height.value);
 var bmi1 = document.getElementById('bmiValue')

 bmi1.textContent = bmi;

 if (weight.value<=height.value){
 alert ('you have to put the data correctly!');
 bmi1.style.color = 'blue'
 }
 if (bmi<=19.9){
 alert ('underweight! EAT MORE!');
 bmi1.style.color = 'yellow'
 }
 else if (bmi>20 && bmi<=23.4){
 alert ('HEALTHY!');
  bmi1.style.color = 'green'
 }
 else if (bmi>=23.5 && bmi<26){
 alert ('Overweight');
  bmi1.style.color = 'orange'
 }
 else {
 alert ('OBESE! WARNING, WARNING!');
  bmi1.style.color = 'red'
 }
 }
