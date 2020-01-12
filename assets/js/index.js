  
// Delayed scrolling to different sections of the page
// Modified from a tutorial found at
// https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2


$('#contact-form').on('submit', function(e) {
    $('#contactFormModal').modal('show');
    e.preventDefault();
})