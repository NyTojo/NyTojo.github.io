let iceCream = 'chocolat';
if (iceCream ==='chocolat') {
  alert("J'adore la glace au chocolat !");
}else {
  alert("Ooooh, mais j'aurais préferé au chocolat.");
}
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
document.querySelector("html").addEventListener('click',function() {
  alert('aiie, arreter de clicker !!');
});
let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mozilla.png') {
    myImage.setAttribute('src','images/mozilla2.png');}
    else {
    myImage.setAttribute('src','images/mozilla.png');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('veiller saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool,' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
}
else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}
myButton.addEventListener('click',function() {
  setUserName();
});
