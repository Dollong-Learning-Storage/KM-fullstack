// wadah untuk nyimpan lebih dari satu instruksi/perintah

// DOM
const input = prompt("Background color ");

document.getElementById("about").style.background = input;
console.log(document.getElementById("about"));

function riceCooker(rice, water) {
  console.log(rice, water);
}

riceCooker("beras", 5);
riceCooker("beras juga", 10);

function isNumber(num) {
  if (isNaN(num)) {
    return "Bukan angka";
  } else {
    return "Ini angka";
  }
}

console.log(isNumber(10));
console.log(isNumber("11"));

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }

  if (operator === "-") {
    return num1 - num2;
  }
}

// console.log(1 + 1)
// console.log(calculator(1, 2, "+"));
