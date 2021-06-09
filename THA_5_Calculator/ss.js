// switch (z) {
//   case "+":
//     text = parseFloat(x) + parseFloat(y);
//     break;
//   case "-":
//     text = parseFloat(x) - parseFloat(y);
//     break;
//   case "*":
//     text = parseFloat(x) * parseFloat(y);
//     break;
//   case "/":
//     text = parseFloat(x) / parseFloat(y);
//     break;
//   default:
//     text = "No value found";
// }
function sum() {
  x = document.getElementById("fnum").value;
  y = document.getElementById("lnum").value;
  console.log(x);
  document.getElementById("ans").innerHTML = parseFloat(x) + parseFloat(y);
}
function sub() {
  x = document.getElementById("fnum").value;
  y = document.getElementById("lnum").value;
  console.log(x);
  document.getElementById("ans").innerHTML = parseFloat(x) - parseFloat(y);
}
function multiply() {
  x = document.getElementById("fnum").value;
  y = document.getElementById("lnum").value;
  console.log(x);
  document.getElementById("ans").innerHTML = parseFloat(x) * parseFloat(y);
}
function divide() {
  x = document.getElementById("fnum").value;
  y = document.getElementById("lnum").value;
  console.log(x);
  document.getElementById("ans").innerHTML = parseFloat(x) / parseFloat(y);
}
