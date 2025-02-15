// create a listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.grid');
    let equation = ""
    let display = document.getElementById('display')

    // create a listener to filter out invalid characters [only allows numbers and operators]
    display.addEventListener('input', (event) => {
        display.value = event.target.value.replace(/[^0-9+\-*/.%=]/g, "")
        equation = display.value
    })

    // create a listener for when a button is clicked on the calculator
    calculator.addEventListener('click', (event) => {
        const button = event.target
        if (button.tagName !== "BUTTON") return

        // switch-case for the button ids to perform the correct action
        switch(button.id) {
            case "clear":
                equation = ""
                break
            case "plus-minus":
                equation += "-"
                break
            case "modulus":
                equation += "%"
                break
            case "divide":
                equation += "/"
                break
            case "multiply":
                equation += "*"
                break
            case "subtract":
                equation += "-"
                break
            case "add":
                equation += "+"
                break
            case "equals":
                if (equation.includes("=")) equation = equation.replace("=", "")
                // add and equal sign to show that the equation was completed
                    equation = eval(display.value).toString() + "="
                break
            default:
                // if the user types a number after an equal sign start a new equation
                if (equation[equation.length - 1] === "=") equation = ""
                equation += button.textContent.trim()
                break
        }

        // if the equation has an equal sign, remove it and display the result
        if (equation.includes("=")) {
            display.value = equation.replace("=", "")
            return
        }

        // otherwise, display the equation
        display.value = equation
    })
})
