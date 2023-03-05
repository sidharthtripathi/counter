let current_val = 0;
let value = document.getElementById("value");
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
value.innerText = current_val;
val_detector()

}
function decrement(){
  current_val--;
  value.innerText = current_val;
  val_detector();
}
function reset(){
  current_val = 0;
  value.innerText = current_val;
  val_detector();
}