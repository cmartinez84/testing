var keys = document.querySelectorAll('.key');
var input = document.querySelector('input');
let message = document.querySelector('#message');
var pin = [];

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function(){
      if(this.value ==="enter"){
        submit();
      }
      else if(this.value ==="clear"){
        clear();
      }
      else{
        addToInput(this.value);
      }
  })
}

function addToInput(number){
  pin.push(number);
  input.value =  pin.join("");
}

function clear(){
  pin.pop();
  input.value =  pin.join("");
}

function submit(){
  let text;
  if(pin.join("") === "1234"){
    text = "PIN accpeted. You will be logged in shortly.";
  }
  else{
    pin = [];
    input.value = pin.join("");
    text = "Incorrect PIN";
  }
  message.innerHTML = text;
}
