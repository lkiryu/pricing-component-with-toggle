const toggleButton = document.querySelector('.checkbox')
const basicPrice = document.querySelector('.basic')
const professionalPrice = document.querySelector('.professional')
const masterPrice = document.querySelector('.master')

toggleButton.addEventListener('click', ()=> {
    if (toggleButton.checked) {
        basicPrice.innerHTML = '<span>$</span>19.99'
        professionalPrice.innerHTML = '<span>$</span>14.99'
        masterPrice.innerHTML = '<span>$</span>39.99'
    } else {
        basicPrice.innerHTML = '<span>$</span>199.99'
        professionalPrice.innerHTML = '<span>$</span>149.99'
        masterPrice.innerHTML = '<span>$</span>399.99'
    }
})