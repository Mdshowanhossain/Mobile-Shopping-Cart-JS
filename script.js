function handleProductsChange(isIncreased) {
    const caseInput = document.getElementById("caseValue");
    const caseInputNumber = parseInt(caseInput.value);

    let newCaseNumber = caseInputNumber;

    if (isIncreased === true) {
        newCaseNumber = newCaseNumber + 1;
    } else if (isIncreased === false && newCaseNumber > 0) {
        newCaseNumber = newCaseNumber - 1;
    }
    caseInput.value = newCaseNumber;
    const caseTotal = newCaseNumber * 59;
    document.getElementById("caseAmout").innerText = '$' + caseTotal;
}

//  PHONE PRICE CALCULATION

function phonePriceHandler(isIncreased) {
    const phoneInput = document.getElementById("phoneValue");
    const phoneInputNumber = parseInt(phoneInput.value)

    let newPhoneValue = phoneInputNumber;

    if (isIncreased === true) {
        newPhoneValue = phoneInputNumber + 1
    } else if (isIncreased === false && newPhoneValue > 0) {
        newPhoneValue = phoneInputNumber - 1;
    }

    phoneInput.value = newPhoneValue;
    document.getElementById("phoneValue").innerText = newPhoneValue;
    const total = newPhoneValue * 1219;
    document.getElementById("phonePrice").innerText = '$' + total;

    getTotal()
}

//  PHONE PRICE CALCULATION

// Total Count

function getTotal() {
    const phoneInput = document.getElementById("phoneValue");
    const phoneInputNumber = parseInt(phoneInput.value);

    const caseInput = document.getElementById("caseValue");
    const caseInputNumber = parseInt(caseInput.value)

    const total = phoneInputNumber * 1219 + caseInputNumber * 59;
    document.getElementById("total").innerText = total;

    const vat = total * .01;
    const vatNumber = Math.round(vat)

    document.getElementById("tax").innerText = vatNumber;

    const grandTotal = vatNumber + total;
    document.getElementById("grand-total").innerText = grandTotal

}













// function getInputValue(product) {
//     const productInput = document.getElementById(product + "caseValue");
//     const productInputNumber = parseInt(productInput.value);
//     return productInputNumber;
// }



//  PHONE PRICE CALCULATION


// document.getElementById("phoneIncrease").addEventListener("click", function () {
//     const phoneInput = document.getElementById("phoneValue");
//     const phoneInputNumber = parseInt(phoneInput.value)
//     const newPhoneValue = phoneInputNumber + 1;
//     phoneInput.value = newPhoneValue;
//     document.getElementById("phoneValue").innerText = newPhoneValue;
//     const total = newPhoneValue * 1219;
//     document.getElementById("phonePrice").innerText = total;

// })


// document.getElementById("phoneDecrease").addEventListener("click", function () {
//     const phoneValue = document.getElementById("phoneValue")
//     const phoneValueNumber = parseInt(phoneValue.value);
//     const newPhoneValue = phoneValueNumber - 1;
//     phoneValue.value = newPhoneValue;
//     document.getElementById("phoneValue").innerText = newPhoneValue;
//     const total = newPhoneValue * 1219
//     document.getElementById("phonePrice").innerText = total
// })




//  PHONE PRICE CALCULATION























// document.getElementById("caseIncrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseValue");
//     const caseInputNumber = parseInt(caseInput.value);
//     const newCaseNumber = caseInputNumber + 1;
//     caseInput.value = newCaseNumber;

//     const caseTotal = newCaseNumber * 59;
//     document.getElementById("caseAmout").innerText = '$' + caseTotal;
// })

// document.getElementById("caseDecrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseValue");
//     const caseInputNumber = parseInt(caseInput.value);
//     const newCaseNumber = caseInputNumber - 1;
//     caseInput.value = newCaseNumber;

//     const caseTotal = newCaseNumber * 59;

//     document.getElementById("caseAmout").innerText = '$' + caseTotal;
// })


