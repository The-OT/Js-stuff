const btnIncrease = document.querySelector(".increase")
const btnDecrease = document.querySelector(".decrease")
const showCount = document.querySelector(".count")

let count = 0
const valueChangingFunc = (increment) => () =>{
  increment === true ? count++ : count--
  showCount.textContent = count
}

btnIncrease.addEventListener("click", valueChangingFunc(true))

btnDecrease.addEventListener("click", valueChangingFunc(false))


