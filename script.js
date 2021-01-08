function multiply() {
let answer1 = document.getElementById("firstNumber").value;
answer1 = parseInt(answer1)
let answer2 = document.getElementById("secondNumber").value;
let answer = 0
answer = parseInt(answer)
for (answer2 = document.getElementById("secondNumber").value; answer2 > 0; answer2--) {
  answer = answer+answer1
}
if (answer2 === 0) {
  alert (answer)
}
}
