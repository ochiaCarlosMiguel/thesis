//<-----------------------------Search bar In navigation bar------------------------------------>
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
//<-----------------------------Profile Section------------------------------------>
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

//<---------------------------Filter Section-------------------------------->
// Handling click effects for buttons
const buttons = document.querySelectorAll('.filter-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    buttons.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
  });
});

//<--------------------------Search Bar-------------------------------------->
function clearSearch() {
    document.getElementById("searchInput").value = "";
}

//<-------------------------Order Tracking---------------------------------->
// This script will be used for dynamic changes in the order tracking if needed
function updateTrackingStatus(status) {
    const steps = document.querySelectorAll('.tracking-step');
    const lines = document.querySelectorAll('.tracking-line');

    steps.forEach((step, index) => {
        if (index < status) {
            step.classList.add('active');
            if (lines[index]) {
                lines[index].classList.add('active');
            }
        } else {
            step.classList.remove('active');
            if (lines[index]) {
                lines[index].classList.remove('active');
            }
        }
    });
}
// Example usage: Call this function to update the status dynamically
// updateTrackingStatus(3); // will highlight the first three steps
//<-------------------------------New purchase button------------------------>
document.querySelector('.new-purchase-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const link = this.parentElement.href; // Get the link from the parent
    this.style.opacity = 0; // Start the dissolve effect
    setTimeout(() => {
        window.location.href = link; // Navigate after the animation
    }, 200); // Match the duration of the animation
});