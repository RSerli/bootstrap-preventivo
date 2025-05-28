// console.log("TEST")

/*
*   --- Getting elements from DOM ---
*/
const FormElement = document.getElementById('QuotationForm')
console.dir(FormElement)
const SelectionQuotationWork = FormElement.querySelector('#SelectQuotationWork')
console.dir(SelectionQuotationWork)
const textUserPromo = FormElement.querySelector('#inputPromo')
console.dir(textUserPromo)

/*
*   --- Utility Variables ---
*/
const PRICE_BACKEND = 20.50 // number float
const PRICE_FRONTEND = 15.30 // number float
const PRICE_BPROJECT = 33.60 // number float

const ValidPromoCodes = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24"
]

const DiscountPromoCode = 25 // number integer


/*
*   --- Utility Functions ---
*/


/*
*   --- Main Functions ---
*/

// Event Listener submit the form the user
FormElement.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    // getting user data from the form
    const SelectedWork = SelectionQuotationWork.value
    console.log(SelectedWork)
    const UserPromo = textUserPromo.value
    console.log(UserPromo)
})