const btnIncrease = document.querySelector(".increase")
const btnDecrease = document.querySelector(".decrease")
const showCount = document.querySelector(".count")

let count = 0

btnIncrease.addEventListener("click", () => {
  count++
  showCount.textContent = count;
})

btnDecrease.addEventListener("click", () => {
  count--
  showCount.textContent = count;
})
