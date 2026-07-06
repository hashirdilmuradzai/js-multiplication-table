let number = Number(prompt("Enter Your Number"));
let result = "";

for (let i = 1; i <= 10; i++) {
  result += number + " x " + i + " = " + number * i + "\n";
}

alert(result);
