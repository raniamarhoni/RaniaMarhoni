function sendEmail() {
  // Initialize EmailJS with your public key
  emailjs.init('8LoNusw-cP50PcckJ');

// Fetch the configuration from the JSON file
fetch('assets/js/config.json')
.then(response => response.json())
.then(data => {
  // Extract EmailJS service ID and template ID from the JSON data
  const serviceID = data.emailjs.service_id;
  const templateIDtome = data.emailjs.template_id_me;
  const templateIDtouser = data.emailjs.template_id_user;


  // Get the user-entered email address
  const userEmail = document.getElementById("email").value;

  // Create templateParams object using form values
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };
  
  // Send email to your email address
  emailjs.send(serviceID, templateIDtome, templateParams)
    .then(function(response) {
      // Reset form after successful submission
      document.getElementById("contact-form").reset();
      // Show modal or alert
      $('#contactFormModal').modal('show');
    })
    .catch(function(error) {
      console.error("Error sending email to you:", error);
    });

  // Send email to the user's email address
  emailjs.send(serviceID, templateIDtouser , templateParams)
    .then(function(response) {
      console.log("Email sent to user successfully!");
    })
    .catch(function(error) {
      console.error("Error sending email to user:", error);
    });
})
.catch(error => {
  console.error("Error fetching configuration:", error);
});
}