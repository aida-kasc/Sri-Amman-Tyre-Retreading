window.addEventListener("load", function(){
	document.getElementById("loadingscreen").remove();
})


if(document.readyState == 'complete'){
	document.getElementById('radio1').checked = true;
}
setInterval(function(){
	var s1 = document.getElementById('radio1');
	var s2 = document.getElementById('radio2');
	var s3 = document.getElementById('radio3');
	var s4 = document.getElementById('radio4');
	if(s1.checked){
		s2.checked = true;
	}
	else if(s2.checked){
		s3.checked = true;
	}
	else if(s3.checked){
		s4.checked = true;
	}
	else{
		s1.checked = true;
	}
}, 5000);

other_ele = {"bike":-10, "car":-20, "tractor":-30, "truck":-40};
key = ["bike", "car", "tractor", "truck"]
others_hidden = false;
function expand(ele){
	if(others_hidden == false){
		for(var i=0; i<key.length; i++){
			if(key[i] != ele.id){
				document.getElementById(key[i]).setAttribute("hidden", "hidden");
			}
			else{
				document.getElementById("tyreslider").style.marginLeft = other_ele[ele.id].toString()+"%";
			}
		}
		others_hidden = true;
	}
	else if(others_hidden){
		document.getElementById("tyreslider").style.marginLeft = 0;
		for(var i=0; i<key.length; i++){
			document.getElementById(key[i]).removeAttribute("hidden");
		}
		others_hidden = false;
	}
	
}