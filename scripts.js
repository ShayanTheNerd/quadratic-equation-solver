// Declare all variables
let a, b, c, delta = 0, x1 = 0, x2 = 0;

// Trigger calculate button on Enter keydonw
document.onkeydown = function (event) {
    if (event.key === 'Enter') {
        checkCalc();
    }
}

// 'clearall' and 'calc' buttons
document.getElementById('clearAllBtn').addEventListener('click', clearAll);
document.getElementById('calc').addEventListener('click', checkCalc);

// Chek the value of inputs
function checkCalc() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    if (a == "" || b == "" || c == "") {
        alert("Please declare appropriate values for all variables (a, b, c)!")
    }
    else {
        if (+a === 0) {
            alert("Variable 'a' cannot be declared as '0'");
        }
        else {
            calculate();
        }
    }
}

// Clear all inputs and result
function clearAll() {
    a = b = c = delta = x1 = x2 = 0;
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("results").textContent = "x = ?";
}

// Calculate Delta(Δ) and the value/values of 'x'
function calculate() {
    // Declare Delta(Δ)
    delta = (Math.pow(b, 2)) + (-4 * a * c);

    if (delta > 0) {
        x1 = (((-b) + Math.sqrt(delta)) / (2 * a)).toFixed(3);
        x2 = (((-b) - Math.sqrt(delta)) / (2 * a)).toFixed(3);
        document.getElementById("results").innerHTML = `X<sub>1</sub> = ${x1} , X<sub>2</sub> = ${x2}`;
    }
    else if (delta == 0) {
        x1 = (-b) / (2 * a);
        document.getElementById("results").textContent = `x = ${x1}`;
    }
    else {
        document.getElementById("results").textContent = "x = no real value";
    }
}

// Credit's year
const now = new Date();
document.getElementById('yearOfDate').textContent = now.getFullYear();
