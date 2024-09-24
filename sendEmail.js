// Code for navigation Search bar <---------------------------------------------->
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
//<------------------------------Profile Section ----------------------------->
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

//<---------------------------Back to Purchase list button------------------------>
document.getElementById('backToPurchase').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Start the dissolve effect
    this.style.opacity = '0'; // Start dissolving

    // Navigate after the animation
    setTimeout(() => {
        window.location.href = 'transaction.html'; // Navigate after 200ms
    }, 200); // Match the duration specified
});
//<------------------------Button----------------------------------------------------------->
// Next button interaction
document.querySelector('.next-button').addEventListener('click', function() {
    // Dissolve animation on the rectangle box
    document.querySelector('.genRectangleBox').classList.add('dissolve-out');
    
    // Wait for the animation to finish before navigating
    setTimeout(function() {
        window.location.href = 'transaction.html';
    }, 300);  // 300ms matches the animation duration
});

// Previous button interaction
document.querySelector('.prev-button').addEventListener('click', function() {
    // Dissolve animation on the rectangle box for the previous button
    document.querySelector('.genRectangleBox').classList.add('dissolve-out');
    
    // Wait for the animation to finish before navigating
    setTimeout(function() {
        window.location.href = 'addProduct.html';
    }, 300);  // 300ms matches the animation duration
});
