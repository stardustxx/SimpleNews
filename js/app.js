var sideBar = document.getElementById("sideNav");

var show = function(smth){
	console.log(smth.innerText);
	//title.innerText = smth.innerText;
}

var binding = function(itemHolder){
	console.log("binding");
	var link = itemHolder.querySelector("a");
	$(link).click(function(){
		console.log('running');
		var name = link.getAttribute("id") + ".php";
		$('#mainContent').load(name);
	})
}


$(document).ready(function(){
	for (var i = 0; i < sideBar.children.length	; i++){
		binding(sideBar.children[i]);
	}
})
