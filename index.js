window.addEventListener("load", function(){
	document.getElementById("loadingscreen").remove();
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

margin_left = {"bike":"0", "car":"-90%", "truck":"-190%", "tractor":"-300%"}
key = ["bike", "car", "tractor", "truck"]
others_hidden = false;
async function expand(ele){
	if(others_hidden == false){
		document.getElementById(ele.id).style.marginLeft = margin_left[ele.id];
		for(var i=0; i<key.length; i++){
			if(key[i] != ele.id){
				document.getElementById(key[i]).setAttribute("hidden", "hidden");
			}
		}
		others_hidden = true;
		if(ele.id != "bike"){
			await sleep(500);
		}
		document.getElementById("tyreinfo").style.display = "flex";
	}
	else if(others_hidden){
		document.getElementById("tyreinfo").style.display = "none";
		document.getElementById(ele.id).style.marginLeft = "0";
		if(ele.id != "bike"){
			await sleep(1000);
		}
		for(var i=0; i<key.length; i++){
			if(key[i] != ele.id){
				document.getElementById(key[i]).removeAttribute("hidden");
			}
		}
		others_hidden = false;
	}
	
}