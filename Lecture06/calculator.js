let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let list = document.getElementById("list")

let plusButton = document.getElementById("btn1")
let minusButton = document.getElementById("btn2")
let multiplyButton = document.getElementById("btn3")
let divideButton = document.getElementById("btn4")

plusButton.onclick = function () {
	let a = parseInt(input1.value)
	let b = parseInt(input2.value)
	let sum = a+b
	let previousValue = list.innerHTML
	list.innerHTML = previousValue + "<li>" + sum + "</li>"
}

minusButton.onclick = function () {
	let a = parseInt(input1.value)
	let b = parseInt(input2.value)
	console.log(a - b)
}

multiplyButton.onclick = function() {
	let a = parseInt(input1.value)
	let b = parseInt(input2.value)
	console.log(a * b)
}

divideButton.onclick = function () {
	let a = parseInt(input1.value)
	let b = parseInt(input2.value)
	console.log(a / b)
}