let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

let chance = 1


btn1.onclick = function() {
	let x = btn1.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn1.innerHTML = "O"
			chance = 2
		} else {
			btn1.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()

	}
	

}

btn2.onclick = function() {
	let x = btn2.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn2.innerHTML = "O"
			chance = 2
		} else {
			btn2.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}

		
}

btn3.onclick = function() {
	let x = btn3.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn3.innerHTML = "O"
			chance = 2
		} else {
			btn3.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn4.onclick = function() {
	let x = btn4.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn4.innerHTML = "O"
			chance = 2
		} else {
			btn4.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn5.onclick = function() {
	let x = btn5.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn5.innerHTML = "O"
			chance = 2
		} else {
			btn5.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn6.onclick = function() {
	let x = btn6.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn6.innerHTML = "O"
			chance = 2
		} else {
			btn6.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn7.onclick = function() {
	let x = btn7.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn7.innerHTML = "O"
			chance = 2
		} else {
			btn7.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn8.onclick = function() {
	let x = btn8.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn8.innerHTML = "O"
			chance = 2
		} else {
			btn8.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}

btn9.onclick = function() {
	let x = btn9.innerHTML

	if(x == "-") {
		if(chance == 1) {
			btn9.innerHTML = "O"
			chance = 2
		} else {
			btn9.innerHTML = "X"
			chance = 1
		}
		checkIfWinner()
	}
		
}


function checkIfWinner() {
	let one = btn1.innerHTML
	let two = btn2.innerHTML
	let three = btn3.innerHTML
	let four = btn4.innerHTML
	let five = btn5.innerHTML
	let six = btn6.innerHTML
	let seven = btn7.innerHTML
	let eight = btn8.innerHTML
	let nine = btn9.innerHTML

	if(one==two && two==three) {
		if(one=="O"){
			window.alert("Winner Winner Chicken Dinner to Player 1")
		}
		if(one == "X"){
			window.alert("Winner Winner Chicken Dinner to Player 2")
		}
	}

	// Complete other conditions

}























