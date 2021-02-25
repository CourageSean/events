const btn = document.getElementsByTagName("button");
const example = document.getElementsByClassName("example");
const changeBtn = document.querySelector("#navChange");
const home = document.querySelector("#navHome");
let select = document.querySelector("select");
const body = document.querySelector("#body");
// btn[0].addEventListener("click", () => {
//   console.log(example);
//   for (let i = 0; i < example.length; i++) {
//     example[i].style.background = "red";
//   }
// });

// changeBtn.addEventListener("click", () => {
//   home.style.background = "blue";
// });

// const inputs = document.getElementsByTagName("input");

// inputs[inputs.length - 1].addEventListener("click", () => {
//   for (let i = 0; i < inputs.length - 1; i++) {
//     console.log(inputs[i].value);
//   }
//   console.log(select.value);
// });

const btn2 = document.querySelector("#button");
const select2 = document.querySelector("#farbeAuswahlen");
const options = document.getElementsByTagName("options");

console.log();
btn2.addEventListener("click", () => {
  console.log(select2.selectedIndex);
  switch (select2.selectedIndex) {
    case 0:
      body.style.backgroundColor = "mediumorchid";
  }
});
