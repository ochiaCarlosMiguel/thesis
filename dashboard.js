// Navigation Bar Search Button Code <---------------------------------------------->
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



//Code to The Piechart <--------------------------------------------------------->  
  const ctx = document.getElementById('pieChart').getContext('2d');

// Set the canvas size to fit well within the container
ctx.canvas.width = 200; // Width of the pie chart
ctx.canvas.height = 200; // Height of the pie chart

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Ink Tank',
            'Capping Set/Frame',
            'Capping Set/Frame (Alt)',
            'Headboard dx7/dx11',
            'Eyelet',
            'Canvas Paper'
        ],
        datasets: [{
            data: [10, 20, 15, 25, 5, 25], // Example data
            backgroundColor: [
                '#4171C3',
                '#EE7D31',
                '#A5A5A5',
                '#69B10F',
                '#599AD2',
                '#FDBD01'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Allows custom size
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});
