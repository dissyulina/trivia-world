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
/*
//Response as the user send valid form
$('#contact-form').on('submit', function (e) {
    $("#btn-submit").text('<i class="fas fa-check"></i> Sent');
    $('#contact-form')[0].reset(); //clear the fields
}); 

*/  