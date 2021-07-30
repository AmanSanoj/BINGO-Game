// getting every button element
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn14 = document.getElementById("btn14")
const btn15 = document.getElementById("btn15")
const btn16 = document.getElementById("btn16")
const btn17 = document.getElementById("btn17")
const btn18 = document.getElementById("btn18")
const btn19 = document.getElementById("btn19")
const btn20 = document.getElementById("btn20")
const btn21 = document.getElementById("btn21")
const btn22 = document.getElementById("btn22")
const btn23 = document.getElementById("btn23")
const btn24 = document.getElementById("btn24")
const btn25 = document.getElementById("btn25")

const NumsArray = [];
do {
	const randomNumber = Math
		.floor(Math.random() * 25) + 1
	if (!NumsArray.includes(randomNumber)) {
		NumsArray.push(randomNumber);
	}

} while (NumsArray.length < 25);

// Declaring GLOBAL vars for X and Y and Z
let X1 = 0;
let X2 = 0;
let X3 = 0;
let X4 = 0;
let X5 = 0;
let Y1 = 0;
let Y2 = 0;
let Y3 = 0;
let Y4 = 0;
let Y5 = 0;
let Z1 = 0;
let Z2 = 0;
let ButtonsPressedNo = 0

btn1.innerHTML = NumsArray.shift()
btn2.innerHTML = NumsArray.shift()
btn3.innerHTML = NumsArray.shift()
btn4.innerHTML = NumsArray.shift()
btn5.innerHTML = NumsArray.shift()
btn6.innerHTML = NumsArray.shift()
btn7.innerHTML = NumsArray.shift()
btn8.innerHTML = NumsArray.shift()
btn9.innerHTML = NumsArray.shift()
btn10.innerHTML = NumsArray.shift()
btn11.innerHTML = NumsArray.shift()
btn12.innerHTML = NumsArray.shift()
btn13.innerHTML = NumsArray.shift()
btn14.innerHTML = NumsArray.shift()
btn15.innerHTML = NumsArray.shift()
btn16.innerHTML = NumsArray.shift()
btn17.innerHTML = NumsArray.shift()
btn18.innerHTML = NumsArray.shift()
btn19.innerHTML = NumsArray.shift()
btn20.innerHTML = NumsArray.shift()
btn21.innerHTML = NumsArray.shift()
btn22.innerHTML = NumsArray.shift()
btn23.innerHTML = NumsArray.shift()
btn24.innerHTML = NumsArray.shift()
btn25.innerHTML = NumsArray.shift()

function Clicked(buttonId) {
	ButtonsPressedNo++
	// Getting B-I-N-G-O letters from document
	const B = document.getElementById("b");
	const I = document.getElementById("i");
	const N = document.getElementById("n");
	const G = document.getElementById("g");
	const O = document.getElementById("o");

	// Changing the button onClick
	const button = document.getElementById(buttonId);
	button.style.backgroundColor = "white";
	button.disabled = true;
	button.innerHTML = "❌";
	button.style.borderTopColor = "red";
	button.style.borderBottomColor = "red";
	button.style.borderRightColor = "red";
	button.style.borderLeftColor = "red";
	// Handling X1
	if (button.id === "btn1" || button.id === "btn2" || button.id === "btn3" || button.id === "btn4" || button.id === "btn5") {
		X1++;
		if (X1 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling X2
	if (button.id === "btn6" || button.id === "btn7" || button.id === "btn8" || button.id === "btn9" || button.id === "btn10") {
		X2++;
		if (X2 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling X3
	if (button.id === "btn11" || button.id === "btn12" || button.id === "btn13" || button.id === "btn14" || button.id === "btn15") {
		X3++;
		if (X3 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling X4
	if (button.id === "btn16" || button.id === "btn17" || button.id === "btn18" || button.id === "btn19" || button.id === "btn20") {
		X4++;
		if (X4 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling X5
	if (button.id === "btn21" || button.id === "btn22" || button.id === "btn23" || button.id === "btn24" || button.id === "btn25") {
		X5++;
		if (X5 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Y1
	if (button.id === "btn1" || button.id === "btn6" || button.id === "btn11" || button.id === "btn16" || button.id === "btn21") {
		Y1++;
		if (Y1 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Y2
	if (button.id === "btn2" || button.id === "btn7" || button.id === "btn12" || button.id === "btn17" || button.id === "btn22") {
		Y2++;
		if (Y2 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Y3
	if (button.id === "btn3" || button.id === "btn8" || button.id === "btn13" || button.id === "btn18" || button.id === "btn23") {
		Y3++;
		if (Y3 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Y4
	if (button.id === "btn4" || button.id === "btn9" || button.id === "btn14" || button.id === "btn19" || button.id === "btn24") {
		Y4++;
		if (Y4 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Y5
	if (button.id === "btn5" || button.id === "btn10" || button.id === "btn15" || button.id === "btn20" || button.id === "btn25") {
		Y5++;
		if (Y5 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Z1
	if (button.id === "btn1" || button.id === "btn7" || button.id === "btn13" || button.id === "btn19" || button.id === "btn25") {
		Z1++;
		if (Z1 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	// Handling Z2
	if (button.id === "btn5" || button.id === "btn9" || button.id === "btn13" || button.id === "btn17" || button.id === "btn21") {
		Z2++;
		if (Z2 === 5) {
			if (B.style.color != "magenta") {
				B.style.color = "magenta";
			} else if (I.style.color != "magenta") {
				I.style.color = "magenta";
			} else if (N.style.color != "magenta") {
				N.style.color = "magenta";
			} else if (G.style.color != "magenta") {
				G.style.color = "magenta";
			} else if (O.style.color != "magenta") {
				O.style.color = "magenta";
			}
		}
	}
	if (B.style.color === "magenta" && I.style.color === "magenta" && N.style.color === "magenta" && G.style.color === "magenta" && O.style.color === "magenta") {
		const ButtonsPressed = document.getElementById('ButtonsPressed')
		const ButtonsRemainNo = 25 - ButtonsPressedNo
		ButtonsPressed.innerHTML = "You have " + ButtonsRemainNo.toString() + " buttons left. Make them beat that!"
	}
}