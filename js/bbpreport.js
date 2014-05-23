// bbPress 2014 Survery Results

// Charts
var genderData = [
    { value: 89, color:"#3498db" },
    { value : 11, color : "#d94e27" } 
];
var setupData = [
    { value: 83, color:"#7bbc31" },
	{ value: 52, color:"#ffc558" },
	{ value: 29, color:"#ff9346" },
	{ value: 13, color:"#ff633c" },
    { value : 3, color :"#ba0d28"} 
];
var bbpfirstnowOptions = {
	scaleOverride : true,
	scaleSteps : 10,
	scaleStepWidth : 10,
	scaleStartValue : 0.
}	
var bbpfirstnowData = {
	labels : ["0.7.2","0.8+","0.9+","1.0+","2.0+","2.1+","2.2+","2.3+","2.4+","2.5+"],
	datasets : [
		{
			fillColor : "rgba(200,249,165,1)",
			strokeColor : "rgba(200,249,165,1)",
			data : [4,3,7,20,20,6,3,10,9,18]
		},
		{
			fillColor : "rgba(39, 174, 96,1)",
			strokeColor : "rgba(39, 174, 96,1)",
			data : [0,0,1,5,2,1,1,3,10,88]
		}
	]
}
var theGenders = new Chart(document.getElementById("genders")
	.getContext("2d")).Doughnut(genderData);
var bbpSetup = new Chart(document.getElementById("bbp-setup")
	.getContext("2d")).Doughnut(setupData);
var bbpFirstNow = new Chart(document.getElementById("bbp-first-now")
	.getContext("2d")).Bar(bbpfirstnowData,bbpfirstnowOptions);

// Width of Bar Charts
$(".bar > span").each(function() {
    $(this).animate({ width: $(this).data("percent")+"%" }, 1000);
});

// Scroll-to-top etc.
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});
	$('.scroll-to-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
			return false;
	});

});
