//<--------------------------------------------Navigation Search bar----------------------------------------->
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
//<--------------------------------------------Profile Section----------------------------------------->
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

//<------------------------------------------------------------------------------------------------>
// Function to toggle dropdown menu for ellipsis icons
document.querySelectorAll('.ellipsis-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Function to enable editing of brand names
document.querySelectorAll('.edit-icon').forEach(button => {
    button.addEventListener('click', function () {
        const brandText = this.previousElementSibling;
        const newBrandName = prompt('Edit Locations:', brandText.textContent);
        if (newBrandName) {
            brandText.textContent = newBrandName;
        }
    });
});

// Function to delete brand items
document.querySelectorAll('.deleteBtn').forEach(button => {
    button.addEventListener('click', function () {
        const listItem = this.closest('.locationItem');
        listItem.remove();
    });
});

//<---------------------------------------------------------------------------------------------->