const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const print = document.getElementById("print");
let count = 0;
function common() {
  print.innerHTML = flag == 1 ? "Player X Turn" : "Player 0 Turn";
  if (count == 4) {
    if ((b1.value == "X" && b2.value == "X" && b3.value == "X") || (b1.value == "0" && b2.value == "0" && b3.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b4.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b7.disabled = true;
      b8.disabled = true;
      b9.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b1.value == "X" && b4.value == "X" && b7.value == "X") || (b1.value == "0" && b4.value == "0" && b7.value == "0") ) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b2.disabled = true;
      b3.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b8.disabled = true;
      b9.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b7.value == "X" && b8.value == "X" && b9.value == "X") || (b7.value == "0" && b8.value == "0" && b9.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      b4.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b3.value == "X" && b6.value == "X" && b9.value == "X") || (b3.value == "0" && b6.value == "0" && b9.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b1.disabled = true;
      b2.disabled = true;
      b4.disabled = true;
      b5.disabled = true;
      b7.disabled = true;
      b8.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b1.value == "X" && b5.value == "X" && b9.value == "X") || (b1.value == "0" && b5.value == "0" && b9.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b2.disabled = true;
      b3.disabled = true;
      b4.disabled = true;
      b6.disabled = true;
      b7.disabled = true;
      b8.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b3.value == "X" && b5.value == "X" && b7.value == "X") || (b3.value == "0" && b5.value == "0" && b7.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b1.disabled = true;
      b2.disabled = true;
      b4.disabled = true;
      b6.disabled = true;
      b8.disabled = true;
      b9.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b2.value == "X" && b5.value == "X" && b8.value == "X") || (b2.value == "0" && b5.value == "0" && b8.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b1.disabled = true;
      b3.disabled = true;
      b4.disabled = true;
      b6.disabled = true;
      b7.disabled = true;
      b9.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } else if ((b4.value == "X" && b5.value == "X" && b6.value == "X") || (b4.value == "0" && b5.value == "0" && b6.value == "0")) {
      print.innerHTML = flag == 1 ? "Player 0 Win" : "Player X Win";
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      b7.disabled = true;
      b8.disabled = true;
      b9.disabled = true;
      flag == 1 ?  alert("Player 0 Win") :  alert("Player X Win");
    } 
    else if (
      (b1.value == "X" || b1.value == "0") &&
      (b2.value == "X" || b2.value == "0") &&
      (b3.value == "X" || b3.value == "0") &&
      (b4.value == "X" || b4.value == "0") &&
      (b5.value == "X" || b5.value == "0") &&
      (b6.value == "X" || b6.value == "0") &&
      (b7.value == "X" || b7.value == "0") &&
      (b8.value == "X" || b8.value == "0") &&
      (b9.value == "X" || b9.value == "0")
    ) {
      print.innerHTML = "Match Tie";
      alert("Match Tie");
    }
  }else {
    count++;
  } 
}

function reset() {
  location.reload();
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
}

flag = 1;
function fun_3() {
  const newOne = b1;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
  
}

function fun_4() {
  const newOne = b2;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;

}

function fun_5() {
  const newOne = b3;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_6() {
  const newOne = b4;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_7() {
  const newOne = b5;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_8() {
  const newOne = b6;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_9() {
  const newOne = b7;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_10() {
  const newOne = b8;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}

function fun_11() {
  const newOne = b9;
  newOne.value = flag == 1 ? "X" : "0";
  newOne.disabled = true;
  flag = flag == 1 ? 0 : 1;
}
