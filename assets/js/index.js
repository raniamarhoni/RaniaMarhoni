function sendEmail() {
  // Fetch the configuration from the JSON file
  fetch('assets/js/config.json')
    .then(response => response.json())
    .then(data => {
      // Extract EmailJS service ID and template ID from the JSON data
      const serviceID = data.emailjs.service_id;
      const templateID = data.emailjs.template_id;

      // Create templateParams object using form values
      var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
      };
      
      // Send email using EmailJS
      emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
          // Reset form after successful submission
          document.getElementById("contact-form").reset();
          // Show modal or alert
          $('#contactFormModal').modal('show');
        })
        .catch(function(error) {
          console.error("Error sending email:", error);
        });
    })
    .catch(error => {
      console.error("Error fetching configuration:", error);
    });
}
