//<------------------------------NAvigation Search bar------------------------------->
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

//<-------------------Profile Section------------------------------>
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

//<---------------------------------------------------------------------------------------->
// Function to enable editing of input fields
document.querySelectorAll('.editBtn').forEach(button => {
    button.addEventListener('click', function () {
        const inputField = this.closest('.inputWrapper').querySelector('.inputField');
        if (inputField) {
            inputField.disabled = !inputField.disabled; // Toggle disabled state
            if (!inputField.disabled) {
                inputField.focus(); // Focus on the input field when enabled
            }
        }
    });
});

// Function to save the input values as fixed values
document.querySelector('.saveBtn').addEventListener('click', function () {
    document.querySelectorAll('.inputField').forEach(input => {
        input.disabled = true; // Disable input after saving
    });
    
    const timezoneField = document.querySelector('.timezone-field');
    timezoneField.textContent = timezoneField.textContent; // Ensure timezone text is fixed
});

// List of time zones to be used in the custom dropdown
const timeZones = [
    { label: "Pacific Standard Time (PST)", value: "PST" },
    { label: "Mountain Standard Time (MST)", value: "MST" },
    { label: "Central Standard Time (CST)", value: "CST" },
    { label: "Eastern Standard Time (EST)", value: "EST" },
    { label: "Greenwich Mean Time (GMT)", value: "GMT" },
    { label: "Central European Time (CET)", value: "CET" },
    { label: "Eastern European Time (EET)", value: "EET" },
    { label: "China Standard Time (CST)", value: "CST" },
    { label: "Japan Standard Time (JST)", value: "JST" },
    { label: "Australian Eastern Time (AET)", value: "AET" }
];

// Function to dynamically populate time zone dropdown content
const timeZoneField = document.querySelector('.timezone-field');
const timeZoneDropdown = document.querySelector('.timezone-dropdown');

timeZones.forEach(zone => {
    const option = document.createElement('div');
    option.classList.add('timezone-option');
    option.textContent = zone.label;
    option.setAttribute('data-value', zone.value);
    
    // Add an event listener for each option
    option.addEventListener('click', function () {
        timeZoneField.textContent = this.textContent;
        timeZoneDropdown.style.display = 'none';  // Hide the dropdown after selection
    });
    
    timeZoneDropdown.appendChild(option);
});

// Toggle the visibility of the time zone dropdown when the time zone field is clicked
timeZoneField.addEventListener('click', function () {
    timeZoneDropdown.style.display = timeZoneDropdown.style.display === 'block' ? 'none' : 'block';
});
//<-------------------------------------------------------------------------------------->
