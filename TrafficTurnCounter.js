
var straight1 = 0;
var left1 = 0;
var right1 = 0;

var straight2 = 0;
var left2 = 0;
var right2 = 0;

var straight3 = 0;
var left3 = 0;
var right3 = 0;

var straight4 = 0;
var left4 = 0;
var right4 = 0;

function updateCounts()
{
	var countsString = "<b>1:</b> L " + left1.toString() + " S " + straight1.toString() + " R " + right1.toString() + "<br/>";
	countsString += "<b>2:</b> L " + left2.toString() + " S " + straight2.toString() + " R " + right2.toString() +  "<br/>";
	countsString += "<b>3:</b> L " + left3.toString() + " S " + straight3.toString() + " R " + right3.toString() + "<br/>";
	countsString += "<b>4:</b> L " + left4.toString() + " S " + straight4.toString() + " R " + right4.toString() + "<br/>";
	$("#counts").html(countsString);
}

function IncrementStraight1(e)
{
	window.navigator.vibrate(30);
	straight1++;
	updateCounts();
}

function IncrementLeft1(e)
{
	window.navigator.vibrate(30);
	left1++;
	updateCounts();
}

function IncrementRight1(e)
{
	window.navigator.vibrate(30);
	right1++;
	updateCounts();
}

function IncrementStraight2(e)
{
	window.navigator.vibrate(30);
	straight2++;
	updateCounts();
}

function IncrementLeft2(e)
{
	window.navigator.vibrate(30);
	left2++;
	updateCounts();
}

function IncrementRight2(e)
{
	window.navigator.vibrate(30);
	right2++;
	updateCounts();
}

function IncrementStraight3(e)
{
	window.navigator.vibrate(30);
	straight3++;
	updateCounts();
}

function IncrementLeft3(e)
{
	window.navigator.vibrate(30);
	left3++;
	updateCounts();
}

function IncrementRight3(e)
{
	window.navigator.vibrate(30);
	right3++;
	updateCounts();
}

function IncrementStraight4(e)
{
	window.navigator.vibrate(30);
	straight4++;
	updateCounts();
}

function IncrementLeft4(e)
{
	window.navigator.vibrate(30);
	left4++;
	updateCounts();
}

function IncrementRight4(e)
{
	window.navigator.vibrate(30);
	right4++;
	updateCounts();
}

$(function() {
    updateCounts();
});