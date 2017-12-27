console.log('proba');

fetch('https://jsonplaceholder.typicode.com/albums')

.then(function(response){

	if(response.status !== 200){
		console.error("Error Fetching Files");
		return;
	}

	return response.json();

}).then(function(data){
	console.log(data);

var table = document.createElement("table");
var tr = document.createElement("tr");
var headers = Object.keys(data[0]);

for(var i = 0; i < headers.length; i ++){
	var header = headers[i];
	var th = document.createElement("th");
	th.appendChild(document.createTextNode(header));
	tr.appendChild(th);
	th.style.textTransform = "capitalize"
}

table.appendChild(tr);
// table.setAttribute("cellpading", "20");

data.forEach(function(row){
	tr = document.createElement("tr");

	for(var i = 0; i < headers.length; i++){
		var header = headers[i];
		var td = document.createElement("td");

		td.appendChild(document.createTextNode(row[header]));
		tr.appendChild(td);
	}

	tr.addEventListener("click", function(){
		this.remove();
	})

	table.appendChild(tr);

})

document.body.appendChild(table);
});


// fetch('https://jsonplaceholder.typicode.com/albums')

// .then(function(response){

// 	if(response.status !== 200){
// 		console.error("Error Fetching Files");
// 		return;
// 	}

// 	return response.json();

// }).then(function(data){
// 	console.log(data);

// var ul = document.createElement("ul");
// var li = document.createElement("li");
// var liEl = Object.keys(data[0]);

// data.forEach(ul)




