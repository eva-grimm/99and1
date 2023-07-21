// Gets the numbers from the start/end value input fields
function getValues() {
    // get the values from the form and attempt to convert string to number
    let startNumber = Number(document.getElementById('start-value').value);
    let endNumber = Number(document.getElementById('end-value').value);

    // validation
    if (isNaN(startNumber) == true || isNaN(endNumber) == true ) { 
        // if we don't have numbers
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but 99 & 1 only works with real numbers',
            icon: 'error',
            backdrop: false
        });
    } else if (startNumber > endNumber) {
        // if we have a starting value greater than the ending value 
        Swal.fire({
            title: 'Oops!',
            text: 'The starting value must be less than the ending value',
            icon: 'error',
            backdrop: false
        });
    } else if (startNumber < 1) {
        // if we have a starting value less than 1
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no starting value less than 1',
            icon: 'error',
            backdrop: false
        });
    } else if (endNumber > 5000) {
        // if we have a ending value greater than 5000
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no ending value greater than 5,000',
            icon: 'error',
            backdrop: false
        });
    } else {
        // create an array of numbers within the range
        let range = generateNumbers(startNumber, endNumber);

        // display the numbers in range
        displayNumbers(range);
    }
}

// Creates every number in the chosen input range
function generateNumbers(startNumber, endNumber) {
    let numbersToDisplay = [];

    // create an array including only the numbers in range
    for (let i = startNumber; i <= endNumber; i++) {
        numbersToDisplay.push(i);
    }

    return numbersToDisplay;
}

// Puts the numbers on the page
function displayNumbers(numbersToDisplay) {
    let tableHtml = '';
    let currentHtmlString = '';

    for (let i = 0; i < numbersToDisplay.length; i++) {
        // wipe currentHtmlString clean
        currentHtmlString = '';
        // set currentNumber to the next number in the array
        let currentNumber = numbersToDisplay[i];

        // if currentNumber is one greater than a number divisible by 5, 
        // or otherwise the number 1, then begin a new row
        if (currentNumber % 5 == 1) {
            currentHtmlString = `<tr>`;
        }

        // if currentNumber is divisible by 2, then make it bold
        if (currentNumber % 2 == 0) {
            currentHtmlString += `<td><strong>${currentNumber}<strong></td>`
        } else {
            currentHtmlString += `<td>${currentNumber}</td>`
        }

        // if currentNumber is divisible by 5, then end the row
        if (currentNumber % 5 == 0) {
            currentHtmlString += `</tr>`;
        }

        // append the string the loop's been building to tableHtml 
        tableHtml += currentHtmlString;
    }

    document.getElementById('results').innerHTML = tableHtml;
}