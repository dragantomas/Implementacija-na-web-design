window.onload = function(){


document.getElementById("googlelink").addEventListener("click", redirectToYahoo);
document.getElementById("googlelink").addEventListener("auxclick", redirectToYahooNewTab);
//document.getElementById("googlelink").addEventListener("contextmenu", rightClick);


function redirectToYahoo() {
 	this.href = "https://www.yahoo.com";
}

function redirectToYahooNewTab() {
	this.href = "https://www.yahoo.com";
 	this.target = "_blank";
}

}