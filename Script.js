// creating a display variable for the div ID  "display"
let display = document.getElementById('display');

// creating a display variable for the div class "button"
let buttons = Array.from(document.getElementsByClassName('button'));

const toggleSwitch = document.getElementById("toggle-effect");
const body = document.body;

function toggleDarkMode() {
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }
)}
  
// Call the function to enable the event listener
toggleDarkMode();


// creating a method to carry out a function on each item in the array to return a new array with the result
buttons.map( button => {

// added an event listener to the button object with the switch case, break, try, catch and break statement for the operators
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case `%`:
                    if (display.innerText){
                        display.innerText  = display.innerText / 100;}
                        break;
                        case`+/-`:
                        if (display.innerText){
                            display.innerText = display.innerText* (-1)
                        }
                        else {
                            (Math.sign(screen.innerText) = 0)
                        } 
                          break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
