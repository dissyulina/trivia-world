// Using emailJS, send email
function sendMail(contactForm) {
    emailjs.send("gmail", "template_trivaworld", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    return false;
}


    