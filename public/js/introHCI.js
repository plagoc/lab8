// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function() {
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event) {
			// Get id of event source
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			// Show bio
			$("#" + targetIDPrefix + "-bio").show();
		}
	});

}

// init RSVP form submit listener
function initRSVPForm() {
	$('#rsvpForm').submit(function(e) {
		// Prevents default submit + reload
		e.preventDefault();
		console.log("Submitting form...");
		var rsvpEmail = $('#rsvpEmail').val();
		// Send POST request
		$.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);
	});

	function postCallback(res) {
		alert("RSVP form successfully submitted!");
		$('#rsvpEmail').val(''); // Clear form
	}
}