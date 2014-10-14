var sideBar = document.getElementById("sideNav");
var itemList;;
var mainContent = true;

var binding2 = function(x){
	console.log("binding article elements" + x);
}

var binding = function(itemHolder){
	console.log("binding");
	var hidingSpeed;
	var link = itemHolder.querySelector("a");
	$(link).click(function(){
		console.log('running');
		if (mainContent == true) {
			console.log("true");
			hidingSpeed = 0;
			mainContent = false;
		}
		else {
			console.log("false");
			hidingSpeed = 300;
		}
		$('#articleContent').hide(hidingSpeed, function(){
			//$('#loading').show(500);
			var name = link.getAttribute("id") + ".php";
			$('#articleContent').load(name, function(){
				//$('#mainContent').show();
				$('#articleContent').fadeIn('slow');
				//$('#loading').hide(500);
			});
		});
		$('#itemLists').ready(function(){
			itemList = document.getElementById("itemLists");
			for (var i = 0; i < itemList.children.length; i++){
					binding2(sideBar.children[i]);
				}
		});
	})
}



$(document).ready(function(){
	for (var i = 0; i < sideBar.children.length; i++){
		binding(sideBar.children[i]);
	}
	//$('#loading').hide(0);
})


