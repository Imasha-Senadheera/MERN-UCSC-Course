let globalVariable = "I'm a global variable";

function showGlobalScope() {
  console.log(globalVariable);
}

function modifyGlobalScope() {
  globalVariable = "I've been modified!";
  console.log(globalVariable);
}

showGlobalScope();
modifyGlobalScope();
console.log(globalVariable);
