const result = document.querySelector("#gmail_result")

const gmailInput = document.querySelector("#gmail_input");
const button = document.querySelector("#gmail_button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const gmail = gmailInput.value.trim();
  const RegExp = /^[a-z0-9._%+-]+@gmail\.com$/i;

  if (!RegExp.test(gmail)) {
    result.innerHTML = "<span style='color:red'>Неверный Gmail</span>";
  } else {
    result.innerHTML = "<span style='color:green'>Gmail корректный</span>";
  }
});

// gmail_input.addEventListener("input", function () {
//   const gmail = gmail_input.value.trim();
//   const RegExp = /^[a-z0-9._%+-]+@gmail\.com$/i;

//   if (!RegExp.test(gmail)) {
//     result.innerHTML = "<span style='color:red'>Неверный Gmail</span>";
//   } else {
//     result.innerHTML = "<span style='color:green'>Gmail корректный</span>";
//   }
// }); // здесь я не использовал кнопку


const block = document.querySelector(".child_block");

let position = 0;

function moveRight() {
  if (position >= 448) return; 

  position++;
  block.style.left = position + "px";

  setTimeout(moveRight, 5); 
}

moveRight();

