function common() {
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var b4 = document.getElementById("b4").value;
  var b5 = document.getElementById("b5").value;
  var b6 = document.getElementById("b6").value;
  var b7 = document.getElementById("b7").value;
  var b8 = document.getElementById("b8").value;
  var b9 = document.getElementById("b9").value;

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Win");
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    alert("Player X Win");
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    alert("Player X Win");
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert("Player X Win");
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert("Player X Win");
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Win");
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Win");
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("print").innerHTML = "Player X Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Win");
  } else if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player 0 Win");
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player 0 Win");
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    alert("Player 0 Win");
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert("Player 0 Win");
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert("Player 0 Win");
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player 0 Win");
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player 0 Win");
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("print").innerHTML = "Player 0 Win";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player 0 Win");
  } else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Match Tie";
    alert("Match Tie");
  } else {
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player X Turn";
    } else {
      document.getElementById("print").innerHTML = "Player 0 Turn";
    }
  }
}

function reset() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

flag = 1;
function fun_3() {
  if (flag == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function fun_4() {
  if (flag == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function fun_5() {
  if (flag == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function fun_6() {
  if (flag == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}

function fun_7() {
  if (flag == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}

function fun_8() {
  if (flag == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}

function fun_9() {
  if (flag == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}

function fun_10() {
  if (flag == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

function fun_11() {
  if (flag == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}
