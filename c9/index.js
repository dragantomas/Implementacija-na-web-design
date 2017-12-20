// console.log('Hello World');

// function drawElement(el, txt){
	
// 	var newDoc = document.createElement(el);
// 	newDoc.appendChild(document.createTextNode(txt));
// 	document.body.appendChild(newDoc);

// 	if(el == "a"){
// 		newDoc.setAttribute("href", "https://www.google.com/")
// 	}else if(el == "img"){
// 		newDoc.setAttribute("src", "images/img1.jpg")
// 	}
// };


// drawElement("a", "Hello World");



var div = document.createElement("div");

var h2 = document.createElement("h2");

var img = document.createElement("img");

img.src = "https://imagejournal.org/wp-content/uploads/2017/12/mole-by-zaytsev-artem-on-flickr-600x300.jpg";

h2.appendChild(document.createTextNode("Hello World"));
div.appendChild(h2);
div.appendChild(img);

document.body.appendChild(div);

 