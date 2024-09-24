document.addEventListener('DOMContentLoaded', () => {
    // Elements for dropdowns and inputs
    const dateStart = document.getElementById('date-start');
    const dateEnd = document.getElementById('date-end');
    const locationButton = document.getElementById('location-button');
    const reportButton = document.getElementById('report-button');
    const locationDropdown = document.getElementById('location-dropdown');
    const reportDropdown = document.getElementById('report-dropdown');

    let selectedLocation = "";
    let selectedReport = "";

    // Toggle dropdowns on click
    locationButton.addEventListener('click', () => {
        locationDropdown.style.display = locationDropdown.style.display === "block" ? "none" : "block";
    });

    reportButton.addEventListener('click', () => {
        reportDropdown.style.display = reportDropdown.style.display === "block" ? "none" : "block";
    });

    // Event listener for Location dropdown
    locationDropdown.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            selectedLocation = this.getAttribute('data-location');
            locationButton.querySelector('.repButtonText').textContent = selectedLocation;
            locationDropdown.style.display = "none";  // Hide dropdown after selection
        });
    });

    // Event listener for Report dropdown
    reportDropdown.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            selectedReport = this.getAttribute('data-report');
            reportButton.querySelector('.repButtonText').textContent = selectedReport;
            reportDropdown.style.display = "none";  // Hide dropdown after selection
        });
    });

    // Event listeners for date inputs
    dateStart.addEventListener('change', function() {
        this.classList.add('selected');
    });

    dateEnd.addEventListener('change', function() {
        this.classList.add('selected');
    });

    // Generate report button
    const generateButton = document.querySelector('.repGenerateButton');
    generateButton.addEventListener('click', function() {
        console.log('Generating report with the following details:');
        console.log('Location:', selectedLocation);
        console.log('Report Type:', selectedReport);
        console.log('Date Started:', dateStart.value);
        console.log('Date Ended:', dateEnd.value);
    });
});

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
// Code to Profile Dropdown Section <---------------------------------------------------->
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