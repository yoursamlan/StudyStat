var countDownDate = new Date("Mar 1, 2022 12:12:12").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

	var now = new Date().getTime();
	var timeleft = countDownDate - now;

	// Calculating the days, hours, minutes and seconds left
	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	// Result is output to the specific element
	document.getElementById("days").innerHTML = days + "d "
	document.getElementById("hours").innerHTML = hours + "h "
	document.getElementById("mins").innerHTML = minutes + "m "
	document.getElementById("secs").innerHTML = seconds + "s "

	// Display the message when countdown is over
	if (timeleft < 0) {
		clearInterval(myfunc);
		document.getElementById("days").style.visibility = "hidden";
		document.getElementById("hours").style.visibility = "hidden";
		document.getElementById("mins").style.visibility = "hidden";
		document.getElementById("secs").style.visibility = "hidden";
		document.getElementById("end").innerHTML = "Best of luck for the exam";
	}
}, 1000);
