document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";

    // Helper function to update the display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Add click event listeners to number and operator buttons
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;
            if (!isNaN(value) || value === ".") {
                // Append numbers and decimal point
                currentInput += value;
            } else if (value === "C") {
                // Clear the input
                currentInput = "";
                currentOperator = "";
            } else if (["+", "-", "*", "/"].includes(value)) {
                // Set the current operator
                if (currentInput !== "") {
                    currentOperator = value;
                    currentInput += value;
                }
            } else if (value === "=") {
                // Perform calculation
                if (currentInput !== "") {
                    try {
                        currentInput = eval(currentInput).toString();
                    } catch (error) {
                        currentInput = "Error";
                    }
                }
            }
            updateDisplay();
        });
    });
});
