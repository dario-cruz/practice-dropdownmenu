// Define all of the needed elements.
const dropDownButton = document.getElementById('drop-down-button')
const dropDownMenu = document.getElementById('drop-down')
const toggleArrow = document.getElementById('arrow')

// Func, when triggers will add class and start the transition in appearance and position.
const toggleDropDown = () => {
    dropDownMenu.classList.toggle('show')
    toggleArrow.classList.toggle('arrow')
}

// Event for when button is clicked, triggers the above func.
dropDownButton.addEventListener('click', (e) => {
    e.stopPropagation() // stops function of button from being passed to parent element. Stops func from running twice.
    toggleDropDown()
})

// Close the dropdown if being showed, when clicked away from. 
document.documentElement.addEventListener('click', () => dropDownMenu.classList.contains('show') ? toggleDropDown(): null)