let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let who = true;
let whoWin = "";
let btn1Valid = true;
let btn2Valid = true;
let btn3Valid = true;
let btn4Valid = true;
let btn5Valid = true;
let btn6Valid = true;
let btn7Valid = true;
let btn8Valid = true;
let btn9Valid = true;


btn1.addEventListener("click", ()=>{
    if (btn1Valid == true) {
        if(who == true) {
            btn1.textContent = "X";
            checkWinX();
            btn1.style.color = "#224414";
            who = false;
        } else {
            btn1.textContent = "O";
            checkWinO();
            btn1.style.color = "#224414";
            who = true
        }
        btn1Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn2.addEventListener("click", ()=>{
    if (btn2Valid == true) {
        if(who == true) {
            btn2.textContent = "X";
            checkWinX();
            btn2.style.color = "#224414";
            who = false;
        } else {
            btn2.textContent = "O";
            checkWinO();
            btn2.style.color = "#224414";
            who = true
        }
        btn2Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn3.addEventListener("click", ()=>{
    if (btn3Valid == true) {
        if(who == true) {
            btn3.textContent = "X";
            checkWinX();
            btn3.style.color = "#224414";
            who = false;
        } else {
            btn3.textContent = "O";
            checkWinO();
            btn3.style.color = "#224414";
            who = true
        }
        btn3Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn4.addEventListener("click", ()=>{
    if (btn4Valid == true) {
        if(who == true) {
            btn4.textContent = "X";
            checkWinX();
            btn4.style.color = "#224414";
            who = false;
        } else {
            btn4.textContent = "O";
            checkWinO();
            btn4.style.color = "#224414";
            who = true
        }
        btn4Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn5.addEventListener("click", ()=>{
    if (btn5Valid == true) {
        if(who == true) {
            btn5.textContent = "X";
            checkWinX();
            btn5.style.color = "#224414";
            who = false;
        } else {
            btn5.textContent = "O";
            checkWinO();
            btn5.style.color = "#224414";
            who = true
        }
        btn5Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn6.addEventListener("click", ()=>{
    if (btn6Valid == true) {
        if(who == true) {
            btn6.textContent = "X";
            checkWinX();
            btn6.style.color = "#224414";
            who = false;
        } else {
            btn6.textContent = "O";
            checkWinO();
            btn6.style.color = "#224414";
            who = true
        }
        btn6Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn7.addEventListener("click", ()=>{
    if (btn7Valid == true) {
        if(who == true) {
            btn7.textContent = "X";
            checkWinX();
            btn7.style.color = "#224414";
            who = false;
        } else {
            btn7.textContent = "O";
            checkWinO();
            btn7.style.color = "#224414";
            who = true
        }
        btn7Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn8.addEventListener("click", ()=>{
    if (btn8Valid == true) {
        if(who == true) {
            btn8.textContent = "X";
            checkWinX();
            btn8.style.color = "#224414";
            who = false;
        } else {
            btn8.textContent = "O";
            checkWinO();
            btn8.style.color = "#224414";
            who = true
        }
        btn8Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

btn9.addEventListener("click", ()=>{
    if (btn9Valid == true) {
        if(who == true) {
            btn9.textContent = "X";
            checkWinX();
            btn9.style.color = "#224414";
            who = false;
        } else {
            btn9.textContent = "O";
            checkWinO();
            btn9.style.color = "#224414";
            who = true
        }
        btn9Valid = false;
        if(whoWin == "") {
            if(btn1Valid == false && btn2Valid == false && btn3Valid == false && btn4Valid == false && btn5Valid == false && btn6Valid == false && btn7Valid == false && btn8Valid == false && btn9Valid == false) {
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                btn4.disabled = true;
                btn5.disabled = true;
                btn6.disabled = true;
                btn7.disabled = true;
                btn8.disabled = true;
                btn9.disabled = true;
                document.querySelector('p').textContent =  "EGALITE !";
            }
        }
    } else {
        alert("La case est déjà occuper.")
    }
})

function checkWinX() {
    if(btn1.textContent == "X" && btn3.textContent == "X" && btn5.textContent == "X" && btn7.textContent == "X" && btn9.textContent == "X") {
        btn1.style.backgroundColor = "green";
        btn3.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn1.textContent == "X" && btn2.textContent == "X" && btn3.textContent == "X") {
        btn1.style.backgroundColor = "green";
        btn2.style.backgroundColor = "green";
        btn3.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn4.textContent == "X" && btn5.textContent == "X" && btn6.textContent == "X") {
        btn4.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn6.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn7.textContent == "X" && btn8.textContent == "X" && btn9.textContent == "X") {
        btn7.style.backgroundColor = "green";
        btn8.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn1.textContent == "X" && btn4.textContent == "X" && btn7.textContent == "X") {
        btn1.style.backgroundColor = "green";
        btn4.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn2.textContent == "X" && btn5.textContent == "X" && btn8.textContent == "X") {
        btn2.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn8.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn3.textContent == "X" && btn6.textContent == "X" && btn9.textContent == "X") {
        btn3.style.backgroundColor = "green";
        btn6.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "X"
        win();
    } else if(btn1.textContent == "X" && btn5.textContent == "X" && btn9.textContent == "X") {
        btn1.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "X"
        win();
    }  else if(btn3.textContent == "X" && btn5.textContent == "X" && btn7.textContent == "X") {
        btn3.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        whoWin = "X"
        win();
    }
}

function checkWinO() {
    if(btn1.textContent == "O" && btn3.textContent == "O" && btn5.textContent == "O" && btn7.textContent == "O" && btn9.textContent == "O") {
        btn1.style.backgroundColor = "green";
        btn3.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn1.textContent == "O" && btn2.textContent == "O" && btn3.textContent == "O") {
        btn1.style.backgroundColor = "green";
        btn2.style.backgroundColor = "green";
        btn3.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn4.textContent == "O" && btn5.textContent == "O" && btn6.textContent == "O") {
        btn4.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn6.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn7.textContent == "O" && btn8.textContent == "O" && btn9.textContent == "O") {
        btn7.style.backgroundColor = "green";
        btn8.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn1.textContent == "O" && btn4.textContent == "O" && btn7.textContent == "O") {
        btn1.style.backgroundColor = "green";
        btn4.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn2.textContent == "O" && btn5.textContent == "O" && btn8.textContent == "O") {
        btn2.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn8.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn3.textContent == "O" && btn6.textContent == "O" && btn9.textContent == "O") {
        btn3.style.backgroundColor = "green";
        btn6.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "O"
        win();
    } else if(btn1.textContent == "O" && btn5.textContent == "O" && btn9.textContent == "O") {
        btn1.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn9.style.backgroundColor = "green";
        whoWin = "O"
        win();
    }  else if(btn3.textContent == "O" && btn5.textContent == "O" && btn7.textContent == "O") {
        btn3.style.backgroundColor = "green";
        btn5.style.backgroundColor = "green";
        btn7.style.backgroundColor = "green";
        whoWin = "O"
        win();
    }
}

function win() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    if(whoWin == "X") {
        if(btn1.textContent == "X" && btn3.textContent == "X" && btn5.textContent == "X" && btn7.textContent == "X" && btn9.textContent == "X") {
            document.querySelector('p').textContent =  "CROIX (DOUBLE) GAGNE !";
        } else {
            document.querySelector('p').textContent =  "CROIX GAGNE !";
        }
    } else {
        if(btn1.textContent == "O" && btn3.textContent == "O" && btn5.textContent == "O" && btn7.textContent == "O" && btn9.textContent == "O") {
            document.querySelector('p').textContent =  "ROND (DOUBLE) GAGNE !";
        } else {
            document.querySelector('p').textContent =  "ROND GAGNE !";
        }
    }
}

btn1.addEventListener("mouseover", ()=>{
    if(btn1Valid == true) {
        if(who == true) {
            btn1.textContent = "X"
            btn1.style.color = "#22441450";
        } else {
            btn1.textContent = "O"
            btn1.style.color = "#22441450";
        }
    }
})

btn1.addEventListener("mouseout", ()=>{
    if(btn1Valid == true) {
        btn1.textContent = ""
    }
})

btn2.addEventListener("mouseover", ()=>{
    if(btn2Valid == true) {
        if(who == true) {
            btn2.textContent = "X"
            btn2.style.color = "#22441450";
        } else {
            btn2.textContent = "O"
            btn2.style.color = "#22441450";
        }
    }
})

btn2.addEventListener("mouseout", ()=>{
    if(btn2Valid == true) {
        btn2.textContent = ""
    }
})

btn3.addEventListener("mouseover", ()=>{
    if(btn3Valid == true) {
        if(who == true) {
            btn3.textContent = "X"
            btn3.style.color = "#22441450";
        } else {
            btn3.textContent = "O"
            btn3.style.color = "#22441450";
        }
    }
})

btn3.addEventListener("mouseout", ()=>{
    if(btn3Valid == true) {
        btn3.textContent = ""
    }
})

btn4.addEventListener("mouseover", ()=>{
    if(btn4Valid == true) {
        if(who == true) {
            btn4.textContent = "X"
            btn4.style.color = "#22441450";
        } else {
            btn4.textContent = "O"
            btn4.style.color = "#22441450";
        }
    }
})

btn4.addEventListener("mouseout", ()=>{
    if(btn4Valid == true) {
        btn4.textContent = ""
    }
})

btn5.addEventListener("mouseover", ()=>{
    if(btn5Valid == true) {
        if(who == true) {
            btn5.textContent = "X"
            btn5.style.color = "#22441450";
        } else {
            btn5.textContent = "O"
            btn5.style.color = "#22441450";
        }
    }
})

btn5.addEventListener("mouseout", ()=>{
    if(btn5Valid == true) {
        btn5.textContent = ""
    }
})

btn6.addEventListener("mouseover", ()=>{
    if(btn6Valid == true) {
        if(who == true) {
            btn6.textContent = "X"
            btn6.style.color = "#22441450";
        } else {
            btn6.textContent = "O"
            btn6.style.color = "#22441450";
        }
    }
})

btn6.addEventListener("mouseout", ()=>{
    if(btn6Valid == true) {
        btn6.textContent = ""
    }
})

btn7.addEventListener("mouseover", ()=>{
    if(btn7Valid == true) {
        if(who == true) {
            btn7.textContent = "X"
            btn7.style.color = "#22441450";
        } else {
            btn7.textContent = "O"
            btn7.style.color = "#22441450";
        }
    }
})

btn7.addEventListener("mouseout", ()=>{
    if(btn7Valid == true) {
        btn7.textContent = ""
    }
})

btn8.addEventListener("mouseover", ()=>{
    if(btn8Valid == true) {
        if(who == true) {
            btn8.textContent = "X"
            btn8.style.color = "#22441450";
        } else {
            btn8.textContent = "O"
            btn8.style.color = "#22441450";
        }
    }
})

btn8.addEventListener("mouseout", ()=>{
    if(btn8Valid == true) {
        btn8.textContent = ""
    }
})

btn9.addEventListener("mouseover", ()=>{
    if(btn9Valid == true) {
        if(who == true) {
            btn9.textContent = "X"
            btn9.style.color = "#22441450";
        } else {
            btn9.textContent = "O"
            btn9.style.color = "#22441450";
        }
    }
})

btn9.addEventListener("mouseout", ()=>{
    if(btn9Valid == true) {
        btn9.textContent = ""
    }
})