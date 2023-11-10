// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Genderselect
const male = document.querySelector("#flexRadioDefault1");
const female = document.querySelector("#flexRadioDefault2");
const custom = document.querySelector("#flexRadioDefault3");
const genderSelect = document.querySelector("#gender-select");

male.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
})
female.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
})
custom.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
})