let tableOf = Number(prompt("Enter a number"));
let result = "";

for (let i = 1; i <= 12; i++) {
  result += tableOf + " x " + i + " = " + tableOf * i + "\n";
}

alert(result);
