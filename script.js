document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = button.textContent;
            
            switch (buttonValue) {
                case 'C':
                    display.textContent = "0";
                    break;
                case '←':
                    if (display.textContent.length > 1) {
                        display.textContent = display.textContent.slice(0, -1);
                    } else {
                        display.textContent = "0";
                    }
                    break;
                case '%':
                    display.textContent = (parseFloat(display.textContent) / 100).toString();
                    break;
                case '=':
                    try {
                        display.textContent = eval(display.textContent.replace(/×/g, "*").replace(/÷/g, "/"));
                    } catch {
                        display.textContent = "Error";
                    }
                    break;
                case '.':
                    if (!display.textContent.includes('.')) {
                        display.textContent += buttonValue;
                    }
                    break;
                default:
                    if (display.textContent === "0" || display.textContent === "Error") {
                        display.textContent = buttonValue;
                    } else {
                        display.textContent += buttonValue;
                    }
                    break;
            }
        });
    });
});
