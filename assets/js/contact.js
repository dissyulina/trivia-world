// JS for Contact page

$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    // Display a loader
    $("#btn-submit").html(
        `<div id="loader">
            <img src="assets/images/spinner.gif" alt="loading" height="30px">
        </div>`
    );

    sendMail(this); 
});

// Using emailJS, send email to developer everytime a form is submitted
function sendMail(contactForm) {
    emailjs.send("gmail", "template_trivaworld", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Turn the text inside the button to Sent
        $("#btn-submit").html('<i class="fas fa-check"></i> Sent');
        $("#btn-submit i").css("color", "#01a74b");
        $('#contact-form')[0].reset();
    }, function(error) {
        console.log('FAILED...', error);
        $("#btn-submit").html('Try again');
    });
    return false;
}
