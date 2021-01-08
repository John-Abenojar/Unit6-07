function multiply() {
let answer1 = document.getElementById("first").value;
answer1 = parseInt(answer1)
let answer2 = document.getElementById("second").value;
let answer = 0
answer = parseInt(answer)
for (answer2 = document.getElementById("second").value; answer2 > 0; answer2--) {
  answer = answer+answer1
}
if (answer2 === 0) {
  alert (answer)
}
}
