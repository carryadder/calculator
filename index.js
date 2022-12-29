display = document.querySelector("input");  // selcting input box
displayValue = '';
document.addEventListener('keydown', (event) => {
    
    const keyValue = event.key;
    const type = event.location;
    
    
    
    

    switch (keyValue) {

        case 'Enter':
            var str = displayValue.replace(/[^-()\d/*+.%]/g, '');
                const compute = eval(str);
                display.value = compute;
                displayValue=compute;       
                break;
            
        case '1':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '2':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '3':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '4':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '5':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '6':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '7':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '8':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '9':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '0':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '+':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '-':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '*':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case '/':
            displayValue += keyValue;
            display.value = displayValue;
            break;

        case '%':
            displayValue += keyValue; 
            display.value = displayValue;
                break;

        case '.':
            displayValue += keyValue; 
            display.value = displayValue;
            break;

        case 'Backspace':
            var lenValue = displayValue.length -1;  
            display.value = displayValue.substr(0, displayValue.length - 1)
            displayValue = displayValue.substr(0, displayValue.length - 1)
                break;
        case 'Delete':
            displayValue = ''; 
            display.value = '';
                break;
    
        
            

        default:
            keyValue = null;
            display.value = ''
            break;
    }

    
})