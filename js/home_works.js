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


const parent = document.querySelector(".parent_block");
const child = document.querySelector(".child_block ");

let positionX = 0 , positionY = 0;

const toRight = parent.clientWidth - child.clientWidth;
const toBottom = parent.clientHeight - child.clientHeight;

const moveBlock = () => {
  requestAnimationFrame(moveBlock)
  child.style.top = `${positionY}px`;
  child.style.left = `${positionX}px`;
  if (positionX < toRight && positionY === 0) positionX++;
  else if (positionX >= toRight && positionY < toBottom) positionY++;
  else if (positionY >= toBottom && positionX > 0) positionX--;
  else if (positionX === 0 && positionY > 0) positionY--;
}
moveBlock()
// Честно сказать чтобы квадрат двигался по кругу было сложнее чем таймер я сначало написал огромную кучу кода,
// потом смотрю на ютубе как делают у видел что человек сделать пару строк кода

let interval = null
let seconds = 0
const reset = document.querySelector("#reset")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const secondsValue = document.querySelector('#seconds')

start.addEventListener('click', () => {
  if (interval) return;

  interval = setInterval(() => {
    seconds++
    secondsValue.innerText = seconds
  }, 1000)
})

stop.addEventListener('click', () => {
  clearInterval(interval)
  interval = null
})

reset.addEventListener('click',() => {
  clearInterval(interval)
  interval = null
  seconds = 0
  secondsValue.innerText=seconds
})