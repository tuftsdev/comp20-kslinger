function parse () {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);	
	request.send();
	console.log(request.readyState);
	if(request.readyState == 4 && request.status == 200) {
	    	content = JSON.parse(request.responseText);
		console.log(request.readyState);
		document.getElementById("messages").innerHTML = content;
		alert(content);		
	}
	

}
