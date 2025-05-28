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
const checkboxPrivacyPolicy = FormElement.querySelector('#checkPrivacy')
console.dir(checkboxPrivacyPolicy)


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

/*
*   --- Utility Functions ---
*/
function isValidUserPromoCode(promoCode) {
    // transform the user promo code before get checked
    const promoCodeUpperCase = promoCode.toUpperCase()
    console.log(promoCodeUpperCase)
    for (let i = 0; i < ValidPromoCodes.length; i++) {
        const currentElement = ValidPromoCodes[i];
        if (promoCodeUpperCase === currentElement) { //IF the user promo code is valid => TRUE
            return true
        }
    }
    return false //IF the user promo code is NOT valid => FALSE
}

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
    const isPrivacyPolicyChecked = checkboxPrivacyPolicy.checked
    console.log(isPrivacyPolicyChecked)
    let DiscountPromoCode = 0
    // Checking entered user values
    // - Checking IF quotation worked is selected
    if (SelectedWork === "") {
        alert("Inserire il tipo di lavoro da preventivare!")
        return
    }
    // - Checking IF privacy policy checkbox is toggled
    if (!isPrivacyPolicyChecked) {
        alert("Attenzione! Accettare la privacy policy per proseguire")
        return
    }
    // - Checking IF the user promo written is valid
    if (isValidUserPromoCode(UserPromo)) {
        DiscountPromoCode = 25
    } else {
        alert(`
            ATTENZIONE!
            Il codice inserito non è valido!
            Quindi, il prezzo finale verrà calcolato senza applicare sconti.
            `)
    }
})