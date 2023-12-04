// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function makeMultiSelectDropdown(nm, stext = 'Select') {
    let dpBtn =
        document.getElementById(nm);

    let chBoxes = dpBtn.parentElement.
        querySelectorAll('.dropdown-menu input[type="checkbox"]');

    let mySelectedListItems = [];

    function handleCB() {
        mySelectedListItems = [];
        let mySelectedListItemsText = '';

        chBoxes.forEach((checkbox) => {
            if (checkbox.checked) {
                mySelectedListItems.push(checkbox.value);
                mySelectedListItemsText += checkbox.value + ', ';
            }
        });

        dpBtn.innerText =
            mySelectedListItems.length > 0
                ? mySelectedListItemsText.slice(0, -2) : stext;
    }

    chBoxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCB);
    });

    handleCB();
}