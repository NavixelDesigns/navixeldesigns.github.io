// Function to close the Announcement Bar
function closeAnnouncementBar() {
    const announcementBar = document.querySelector('.announcement-bar');
    const body = document.body;
    announcementBar.classList.add('hidden'); // Hide the announcement bar
    body.style.paddingTop = '60px'; // Adjust body padding when the bar is closed
}

// Function to toggle the Menu (open/close)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    navMenu.classList.toggle('open'); // Toggle menu visibility

    // Adjust body padding for the menu
    if (navMenu.classList.contains('open')) {
        body.style.paddingTop = '300px'; // Adjust this value based on your menu height
    } else {
        body.style.paddingTop = '60px'; // Reset the padding when menu is closed
    }
}
