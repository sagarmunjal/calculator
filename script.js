function run1(){
document.calc.result.value += "1";
}
function run2(){
document.calc.result.value += "2";
}
function run3(){
document.calc.result.value += "3";
}
function plus(){
document.calc.result.value += "+";
}
function run4(){
document.calc.result.value += "4";
}
function run5(){
document.calc.result.value += "5";
}
function run6(){
document.calc.result.value += "6";
}
function diff(){
document.calc.result.value += "-";
}
function run7(){
document.calc.result.value += "7";
}
function run8(){
document.calc.result.value += "8";
}
function run9(){
document.calc.result.value += "9";
}
function divide(){
document.calc.result.value += "/";
}
function remainder(){
document.calc.result.value += "%";
}
function clearAll(){
  document.calc.result.value = null;
}
function equalsto(){
var evalo = eval(document.calc.result.value)
document.calc.result.value = evalo
}
