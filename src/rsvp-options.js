const rsvpOptions = document.querySelector('[data-component="rsvp"]');
const dietarySection = document.querySelector('[data-component="dietary"]');

rsvpOptions.addEventListener('change', function(event) {
	if (event.srcElement.id === 'yes') {
		dietarySection.classList.remove('hide');
	} else {
		dietarySection.classList.add('hide');
	}
});
