/*

Author: Jonathan Woong

*/

/* Ripped from the web */
// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('dc');

$(document).ready(function() {
 
	// Check if the URL parameter is about
	if (dynamicContent == 'about') {
		$('#about').fadeIn(1000); // fade in content
	} 
	// Check if the URL parameter is courses
	else if (dynamicContent == 'courses') {
		$('#courses').fadeIn(1000); // fade in content
	} 
	// Check if the URL parameter is projects
	else if (dynamicContent == 'projects') {
		$('#projects').fadeIn(1000); // fade in content
	} 
	// Check if the URL parameter is contact
	else if (dynamicContent == 'contact') {
		$('#contact').fadeIn(1000); // fade in content
	}
	// Check if the URL parameter is formsubmit
	else if (dynamicContent == 'formsubmit') {
		$('#formsubmit').fadeIn(1000); // fade in content
	}
	// Check if the URL parmeter is empty or not defined, display default content
	else {
		$('#about').fadeIn(1000); // fade in content
	}
});