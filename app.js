let value = document.getElementById("value");
value.innerText = localStorage.getItem('value');
let current_val = value.innerText;
val_detector();
console.log(current_val);
  localStorage.setItem('value',current_val);
function val_detector(){
  if(current_val>0){
    value.style.color = "green";
  }
  else if(current_val<0){
    value.style.color = "red";
  }
  else
  value.style.color = "black";
}
function increment(){
current_val++;
localStorage.setItem('value',current_val);
value.innerText = current_val;
val_detector()

}
function decrement(){
  current_val--;
  localStorage.setItem('value',current_val);
  value.innerText = current_val;
  val_detector();
}
function reset(){
  current_val = 0;
  localStorage.setItem('value',current_val);
  value.innerText = current_val;
  val_detector();
}
