var sideBar = document.getElementById("sideNav");
var mainContent = true;

var show = function(smth){
	console.log(smth.innerText);
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
				bindArticles();
			});
		});
	})
}

var bindArticles = function(){
	//checks for articles
	$('a').click(function(){
		alert("ID: " + this.id);
	})
}

$(document).ready(function(){
	for (var i = 0; i < sideBar.children.length	; i++){
		binding(sideBar.children[i]);
	}
})
