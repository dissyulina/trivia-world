// Using emailJS, send email
//$('#btn-submit').click(function (event) {
$('#contact-form').on('submit', function (e) {

    e.preventDefault();

    setTimeout(function() {
        $("#btn-submit").html('<i class="fas fa-check"></i> Sent');
        $("#btn-submit i").css("color", "#01a74b");
        $('#contact-form')[0].reset();
    }, 1000);
    
    //sendMail(this); 
});

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

    $("#btn-submit").text('<i class="fas fa-check"></i> Sent');
    $('#contact-form')[0].reset(); //clear the fields

    return false;
}
