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

    // Toggle the 'nav-open' class on the navMenu
    navMenu.classList.toggle('nav-open');

    // Adjust body padding for the menu
    if (navMenu.classList.contains('nav-open')) {
        body.style.paddingTop = '300px'; // Adjust this value based on your menu height
    } else {
        body.style.paddingTop = '60px'; // Reset the padding when menu is closed
    }
}

// Function to filter items based on the selected category
function filterItems(category) {
    const items = document.querySelectorAll('.work-card');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to open the order form and pre-fill the design type
function openForm(designType) {
    // Set the design type in the dropdown (it will automatically update the value)
    const designDropdown = document.getElementById('design-type');
    designDropdown.value = designType;  // Dynamically set the value to match the clicked design type

    // Show the modal and prevent scrolling on the body
    document.getElementById('order-form').classList.add('show');
    document.body.classList.add('modal-open');  // Prevent body scrolling
}

// Function to close the form and allow body scrolling again
function closeForm() {
    document.getElementById('order-form').classList.remove('show');
    document.body.classList.remove('modal-open');  // Allow body scrolling again
}


    // For now, log to the console (you can replace this with an actual form submission)
    console.log(formData);
    
    // Close the form after submission
    closeForm();


// Function to redirect with category
function redirectWithCategory(event, link) {
    // Prevent the default action of the link
    event.preventDefault();
    
    // Get the category from the data-category attribute
    var category = link.getAttribute("data-category");

    // Redirect to the work.html page with the category filter
    window.location.href = "work.html?category=" + category;
}

// Function to extract category from URL
function getCategoryFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

// Function to filter work items based on category
function filterWorkByCategory(category) {
    var workItems = document.querySelectorAll('.work-card');
    
    workItems.forEach(function(workCard) {
        if (workCard.getAttribute('data-category') === category || category === null) {
            workCard.style.display = 'block';  // Show the work card
        } else {
            workCard.style.display = 'none';   // Hide the work card
        }
    });
}

// Function to set active class for the selected filter
function setActiveCategory(category) {
    var links = document.querySelectorAll('.project-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
}

// Run when the page loads
window.onload = function() {
    var category = getCategoryFromURL();
    if (category) {
        filterWorkByCategory(category);  // Apply the filter based on the category in the URL
        setActiveCategory(category);  // Set active class to the selected filter
    }
};
document.body.addEventListener('modal-open', function() {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

document.body.addEventListener('modal-close', function() {
    document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
});

// Optional: Add CSS for `.modal-open` to ensure no scrolling happens when modal is open:
// .modal-open {
//     overflow: hidden;
// }
