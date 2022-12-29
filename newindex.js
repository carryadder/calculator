btns = document.querySelectorAll("button"); //selecting all buttons 
display = document.querySelector("input");  // selcting input box
displayValue = ''; // one variable to store the value;

//adding event listner to all buttons when they clicked.
for (i of btns){
    i.addEventListener('click', (e) => {

        //getting the value of input text in buttonText.
        buttonText = e.target.innerText;

        //set the value of button text to this variable and storing previous value also.
        // displayValue += buttonText ;
        //set the value to display to show on the screen.
        // display.value = displayValue;

        //checking condition for various button     
        switch (buttonText) {

        case '=':
            var str = displayValue.replace(/[^-()\d/*+.%]/g, '');
                const compute = eval(str);
                display.value = compute;
                displayValue=compute;       
                break;
            
        case '1':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '2':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '3':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '4':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '5':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '6':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '7':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '8':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '9':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '0':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '+':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '-':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '*':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '/':
            displayValue += buttonText;
            display.value = displayValue;
            break;

        case '%':
            displayValue += buttonText; 
            display.value = displayValue;
                break;

        case '.':
            displayValue += buttonText; 
            display.value = displayValue;
            break;

        case '«':
            var lenValue = displayValue.length -1;  
            display.value = displayValue.substr(0, displayValue.length - 1)
            displayValue = displayValue.substr(0, displayValue.length - 1)
                break;

        case 'AC' :
            displayValue = ''; 
            display.value = '';
                break;

        case 'C' :
            displayValue = ''; 
            display.value = '';
                break;

        default:
            buttonText = null;
            display.value = ''
            break;
    }
});
}


////carryadder



