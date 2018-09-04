import "./css/main.scss";
import "./map.js";
import "./rsvp-options.js";

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/dist/sw.js');
	});
}
