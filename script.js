function squared(num) {
  return num * num;
}
// console.log(squared(3));
function cubed(num) {
  return num * num * num;
}
// console.log(cubed(3));
function factorial(num) {
  if (num < 0) return 0;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}
// console.log(factorial(345));
const input = document.getElementById("inputBtn");
// const para = document.getElementById("para");
var res = factorial(4);
console.log(res);
input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});
