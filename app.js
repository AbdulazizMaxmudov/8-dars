var elInput = document.querySelector(".js-input");  
var elForm = document.querySelector('.js-form');
var elValk = document.querySelector('.title_walk');
var elRiding = document.querySelector('.title_bike');
var elCar = document.querySelector('.title_car');
var elPlane = document.querySelector('.title_plane');

var fastCar = 70 ;
var fastWalk = 3.6;
var fastBike = 20;
var fastPlane = 800;  
elForm.addEventListener("submit", function(e) {
  e.preventDefault()
  var value = elInput.value;
  console.log(value)
  elValk.textContent = Math.floor(value / fastWalk) + ' soat';
  elRiding.textContent = Math.floor(value / fastBike) + ' soat' ;
  elCar.textContent = Math.floor(value / fastCar) + ' soat' ;
  elPlane.textContent = Math.floor(value / fastPlane) + ' soat' ;


})  





