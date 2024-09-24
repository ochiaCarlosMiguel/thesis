//<-------------------------------------Navigation Search Bar------------------------------------------>
document.addEventListener('DOMContentLoaded', () => {
    const blinker = document.getElementById('blinker');
    const searchInput = document.getElementById('search-input');
    const clearIcon = document.getElementById('clear-icon');

    function startBlinker() {
        blinker.style.display = 'block';
    }

    function stopBlinker() {
        blinker.style.display = 'none';
    }

    function togglePlaceholder() {
        searchInput.placeholder = searchInput.value === "" ? "Search anything here" : "";
    }

    function clearSearch() {
        searchInput.value = '';
        stopBlinker();
        togglePlaceholder();
    }

    searchInput.addEventListener('input', togglePlaceholder);
    searchInput.addEventListener('focus', startBlinker);
    searchInput.addEventListener('blur', stopBlinker);
    clearIcon.addEventListener('click', clearSearch);

});
//<-----------------------------Profile Section--------------------------------->
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.navProfileImage'); // Profile image element
    const caretIcon = document.querySelector('.fa-caret-down'); // Caret-down icon
    const profileSection = document.getElementById('profileSection'); // The container
    const viewProfileButton = document.getElementById('navViewProfileButton'); // View Profile button
    const signOutButton = document.querySelector('.navSignOutButton'); // Sign Out button

    // Function to toggle the dropdown
    function toggleDropdown() {
        profileSection.classList.toggle('active'); // Toggle dropdown on click
        updateButtonState();
    }

    // Function to update the button's clickability
    function updateButtonState() {
        const isActive = profileSection.classList.contains('active');
        // Enable or disable both buttons based on dropdown visibility
        viewProfileButton.disabled = !isActive;
        signOutButton.classList.toggle('disabled', !isActive); // Toggle a 'disabled' class for styling
    }

    // Add click event listeners to both the profile image and caret icon
    profileImage.addEventListener('click', toggleDropdown);
    caretIcon.addEventListener('click', toggleDropdown);

    // Initially disable the buttons since the dropdown is not open
    updateButtonState();
});

// Redirect View Profile button
document.getElementById('navViewProfileButton').addEventListener('click', function() {
    window.location.href = 'settings.html';
});
//<----------------------------------------Product List------------------------------------------>
// Function to toggle dropdown visibility
function toggleDropdown(event) {
    const dropdown = event.currentTarget.querySelector(".dropdown");
    dropdown.classList.toggle("active"); // Toggle dropdown visibility on click
}

// Function to delete the row when 'Delete' is clicked in the dropdown
function deleteRow(event) {
    const row = event.closest(".row"); // Find the parent row
    row.remove(); // Remove the row
}

// Function to edit text within a row
function enableEdit(event) {
    const row = event.closest(".row"); // Find the parent row
    const textCells = row.querySelectorAll(".cell:not(.fillBox):not(.actionIcons)"); // Find all text cells except action icons and fill boxes

    textCells.forEach(cell => {
        // Make text content editable
        cell.setAttribute("contenteditable", "true");
        cell.classList.add("editable"); // Add a class for styling if needed
    });

    // Save changes when Enter is pressed
    textCells.forEach(cell => {
        cell.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                cell.removeAttribute("contenteditable"); // Disable editing after saving
                cell.classList.remove("editable"); // Remove editable styling
            }
        });
    });
}


    
