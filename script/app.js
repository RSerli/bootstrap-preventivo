// console.log("TEST")

/*
*   --- Getting elements from DOM ---
*/
const formElement = document.getElementById('QuotationForm')
console.dir(formElement)
const selectionQuotationWork = formElement.querySelector('#SelectQuotationWork')
console.dir(selectionQuotationWork)
const textUserPromo = formElement.querySelector('#inputPromo')
console.dir(textUserPromo)
const checkboxPrivacyPolicy = formElement.querySelector('#checkPrivacy')
console.dir(checkboxPrivacyPolicy)
const rowIntegerPartFinalPrice = formElement.querySelector('#outputFinalQuotationPrice > #integerPart')
console.dir(rowIntegerPartFinalPrice)
const rowDecimalPartFinalPrice = formElement.querySelector('#outputFinalQuotationPrice > #decimalPart')
console.dir(rowDecimalPartFinalPrice)


/*
*   --- Utility Variables ---
*/
const PRICE_BACKEND = 20.50 // number float
const PRICE_FRONTEND = 15.30 // number float
const PRICE_PROJECT = 33.60 // number float

const VALID_PROMO_CODES = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24"
]

const DEFAULT_WORKINGHOURS = 11 // number integer
/*
*   --- Utility Functions ---
*/
function isValidUserPromoCode(promoCode) {
    // transform the user promo code before get checked
    const promoCodeUpperCase = promoCode.toUpperCase()
    console.log(promoCodeUpperCase)
    return VALID_PROMO_CODES.includes(promoCodeUpperCase)
    // for (let i = 0; i < VALID_PROMO_CODES.length; i++) {
    //     const currentElement = VALID_PROMO_CODES[i];
    //     if (promoCodeUpperCase === currentElement) { //IF the user promo code is valid => TRUE
    //         return true
    //     }
    // }
    // return false //IF the user promo code is NOT valid => FALSE
}

function isEmpty(inputValue) {
    return inputValue.length == 0
    // if (inputValue == "") {
    //     return true
    // }
    // return false
}

function gettingPriceData(PriceValue, option) {
    // Set the option to display the currency
    const PriceOption = {
        style: "currency",
        currency: "EUR"
    }
    // Create the array object with the last set options
    const priceArrayFormatted = new Intl.NumberFormat("it-IT", PriceOption).formatToParts(PriceValue)
    console.log(priceArrayFormatted)
    // getting the info that we need
    let dataNeeded
    for (let i = 0; i < priceArrayFormatted.length; i++) {
        const currentElement = priceArrayFormatted[i];
        // console.log(currentElement)
        if (currentElement.type === option) { // getting the integer of the price
            dataNeeded = currentElement.value
        }
    }
    // console.log(dataNeeded)
    return dataNeeded
}

/*
*   --- Main Functions ---
*/

// Event Listener submit the form the user
formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    // getting user data from the form
    const selectedWork = selectionQuotationWork.value
    console.log(selectedWork)
    const insertedUserPromo = textUserPromo.value
    console.log(insertedUserPromo)
    const isPrivacyPolicyChecked = checkboxPrivacyPolicy.checked
    console.log(isPrivacyPolicyChecked)
    let discountPromoCode = 0 // number integer
    // Checking entered user values
    // - Checking IF quotation work is selected
    if (selectedWork === "") {
        alert("Inserire il tipo di lavoro da preventivare!")
        return
    }
    // - Checking IF privacy policy checkbox is toggled
    if (!isPrivacyPolicyChecked) {
        alert("Attenzione! Accettare la privacy policy per proseguire")
        return
    }
    // - Checking IF the user promo is written
    if (!isEmpty(insertedUserPromo)) {
        // -- Checking IF the user promo is valid
        if (isValidUserPromoCode(insertedUserPromo)) {
            discountPromoCode = 25
        } else {
            alert(`
            ATTENZIONE!
            Il codice inserito non è valido!
            Quindi, il prezzo finale verrà calcolato senza applicare sconti.
            `)
        }
    }
    // Calculating the price of the quatation
    let quotationPrice //numeber float
    // checking type of work selected
    if (selectedWork == "BackEnd") { // IF the item selected is a backend work
        quotationPrice = DEFAULT_WORKINGHOURS * PRICE_BACKEND
    } else if (selectedWork == "FrontEnd") { // IF the item selected is a frontend work
        quotationPrice = DEFAULT_WORKINGHOURS * PRICE_FRONTEND
    } else if (selectedWork == "Project") { // IF the item selected is a project analysis work
        quotationPrice = DEFAULT_WORKINGHOURS * PRICE_PROJECT
    }
    console.log(selectedWork, quotationPrice)
    // Calculating final price of the quatation with the possible discount
    const actualDiscountValue = (quotationPrice * discountPromoCode) / 100
    console.log("Sconto", actualDiscountValue)
    const finalQuotationPrice = quotationPrice - actualDiscountValue
    console.log("Prezzo finale", finalQuotationPrice)
    // display final quotation price
    const finalPriceInteger = gettingPriceData(finalQuotationPrice, "integer") // getting the integer of the price
    const finalPriceDecimal = gettingPriceData(finalQuotationPrice, "fraction") // getting the decimals of the price
    console.log(finalPriceInteger, finalPriceDecimal)
    rowIntegerPartFinalPrice.innerHTML = `&euro; ` + finalPriceInteger
    rowDecimalPartFinalPrice.innerHTML = "," + finalPriceDecimal
})