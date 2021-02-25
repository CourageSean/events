const buttons = document.getElementsByTagName("button");
const rgbs = document.getElementsByTagName("input");
const body = document.getElementsByTagName("body");
const inputs = document.getElementsByTagName("input");

let color;

const ändernHintergrund = (color) => {
  body[0].style.backgroundColor = `${color}`;
};

const ändernRegler = () => {
  body[0].style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;

  let hex = Number(inputs[0].value + inputs[1].value + inputs[2].value);
  console.log(hex);

  return hex;
};
let test = 4512;
let division = [test];
let div;
let remainder = [];
let rest;

for (i = 0; i <= 6; i++) {
  div = division[i] / 16;

  if (div >= 1) {
    division.push(div);
    rest = division[i] % 16;
    remainder.push(rest);
  } else if (div < 1) {
    division.push(div);
    rest = division[i] % 16;
    remainder.push(rest);
    break;
  }
}
console.log(division);
console.log(remainder);
