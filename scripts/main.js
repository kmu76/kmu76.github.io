document.querySelector('html').onclick = function() {
    alert('you ready?!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google.svg') {
      myImage.setAttribute ('src','images/google1.png');
    } else {
      myImage.setAttribute ('src','images/google.svg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = '<p1>G</p1><p2>o</p2><p3>o</p3><p1>g</p1><p4>l</p4><p2>e</p2> is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = '<p1>G</p1><p2>o</p2><p3>o</p3><p1>g</p1><p4>l</p4><p2>e</p2> is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}