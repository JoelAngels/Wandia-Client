const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', sendMail)

function sendMail(event) {
    event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

    
  let params = {
    name,
    email,
    subject,
    message
  };

  emailjs.send("service_fb2hqwm", "template_1mmdvgi", params)
  .then(function(response) {
    alert("Email Sent Successfully!");
  }, function(error) {
    alert("Email Sending Failed: " + error);
    console.error('EmailJS error:', error); // Log the error for debugging
  });
    // emailjs.send("service_fb2hqwm","template_1mmdvgi", params).then(alert("Email Sent"))
}