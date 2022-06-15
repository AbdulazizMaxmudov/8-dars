var elInput = document.querySelector(".js-input");
var elForm = document.querySelector('.js-form')

elForm.addEventListener('sumbit', function(e) {
  e.preventDefault();
  var value1 = elInput.value;
  console.log(value1.trim());
})

