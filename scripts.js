// declaring all variables
var a, b, c, delta = 0, x1 = 0, x2 = 0;

// triggering calculate button with Enter
document.onkeydown = function (e) {
    let keyCode = e.key;
    if (keyCode == 'Enter') {
        checkCalc();
    }
}

// checking the validity of inputs
function checkCalc() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    if (a == "" || b == "" || c == "") {
        alert("Please declare appropriate values for all variables (a, b, c)!")
    }
    else {
        if (a == 0) {
            alert("variable 'a' cannot be declared as '0'");
        }
        else {
            calculate();
        }
    }
}

// clearing all inputs and result
function clearAll() {
    a = 0, b = 0, c = 0, delta = 0, x1 = 0, x2 = 0;
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("result").innerHTML = "x = ?";
}

// calculating Delta(Δ) and the value/values of 'x'
function calculate() {
    // declaring Delta(Δ)
    delta = (Math.pow(b, 2)) + (-4 * a * c);

    if (delta > 0) {
        x1 = (((-b) + Math.sqrt(delta)) / (2 * a)).toFixed(3);
        x2 = (((-b) - Math.sqrt(delta)) / (2 * a)).toFixed(3);
        document.getElementById("result").innerHTML = "x1 = " + x1 + " , x2 = " + x2;
    }
    else if (delta == 0) {
        x1 = (-b) / (2 * a);
        document.getElementById("result").innerHTML = "x = " + x1;
    }
    else {
        document.getElementById("result").innerHTML = "x = no real value";
    }
}

// Credit's year
const now = new Date();
document.getElementById('yearOfDate').textContent = now.getFullYear();