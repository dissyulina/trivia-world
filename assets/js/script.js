let newUserName;
$(document).ready(function(){
	$("#username-modal").modal('show');
	$("#submit-username").click(function() {

		newUserName = document.getElementById("#new-username");
		console.log(newUserName);
	
	});

});




