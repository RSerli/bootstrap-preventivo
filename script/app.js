// console.log("TEST")

/*
*   --- Getting elements from DOM ---
*/
const FormElement = document.getElementById("QuotationForm")
console.dir(FormElement)
const SelectedQuotationWork = FormElement.querySelector('#SelectQuotationWork')
console.dir(SelectedQuotationWork)
const UserPromo = FormElement.querySelector('#inputPromo')
console.dir(UserPromo)

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