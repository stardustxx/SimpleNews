var sideBar = document.getElementById("sideNav");

var show = function(smth){
	console.log(smth.innerText);
}

var binding = function(itemHolder){
	console.log("binding");
	var link = itemHolder.querySelector("a");
	$(link).click(function(){
		console.log('running');
		$('#mainContent').hide(500, function(){
			//$('#loading').show(500);
			var name = link.getAttribute("id") + ".php";
			$('#mainContent').load(name, function(){
				//$('#mainContent').show();
				$('#mainContent').fadeIn('slow');
				//$('#loading').hide(500);
			});
		});
		
	})
}

$(document).ready(function(){
	for (var i = 0; i < sideBar.children.length	; i++){
		binding(sideBar.children[i]);
	}
	$('#loading').hide(0);
})
