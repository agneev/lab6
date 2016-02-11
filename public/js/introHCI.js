'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	$.get("/project/" + idNumber,test);

	console.log("User clicked on project " + idNumber);
}
function test(response)
{
	console.log(response);
	var proj_html = '<img src = '+ response.image +'> </img>'+'<p>' + response.summary+'</p>';	
	$("#project"+response.id+" .details").html(proj_html);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */["hex"]
function randomizeColors(e)
{
	//console.log("user clicked on color button");
//console.log(e);
$.get("/palette",test1);
} 
function test1(resp)
{
	var colors = resp["hex"];
	//console.log(resp["hex"]);
	$('body').css('background-color', colors[0]);
$('.thumbnail').css('background-color', colors[1]);
$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
$('p').css('color', colors[3]);
$('.project img').css('opacity', .75);
}