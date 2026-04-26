const result = document.getElementById("result");
const history = document.getElementById("history");
const buttons = document.querySelectorAll(".btn");

let current = "";
let operator = "";
let firstValue = null;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value) || value === ".") {
            current += value;
            result.textContent = current;
        }

        else if (value === "AC") {
            current = "";
            firstValue = null;
            operator = "";
            result.textContent = "0";
            history.textContent = "";
        }

        else if (value === "DEL") {
            current = current.slice(0, -1);
            result.textContent = current || "0";
        }

        else if (["+", "-", "*", "/","%"].includes(value)) {
            firstValue = parseFloat(current);
            operator = value;
            history.textContent = firstValue + " " + operator;
            current = "";
        }

        else if (value === "=") {
            let secondValue = parseFloat(current);
            let output;

            switch (operator) {
                case "+": output = firstValue + secondValue; break;
                case "-": output = firstValue - secondValue; break;
                case "*": output = firstValue * secondValue; break;
                case "/": output = firstValue / secondValue; break;
                case "%": output = firstValue % secondValue; break;
            }

            result.textContent = output;
            history.textContent += " " + secondValue + " =";
            current = output.toString();
        }
    });
});