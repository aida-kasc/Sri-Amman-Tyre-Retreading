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

margin_left = "-100%"
resert_mragin = {"bike":"-150%", "car":"-150%", "truck":"-150%", "tractor":"-150%"}
key = ["bike", "car", "tractor", "truck"]
others_hidden = false;
async function expand(ele){
	if(others_hidden == false){
		for(var i=0; i<key.length; i++){
			if(key[i] != ele.id){
				document.getElementById(key[i]).setAttribute("hidden", "hidden");
			}
			else{
				document.getElementById(ele.id).style.marginLeft = resert_mragin[ele.id];
			}
		}
		others_hidden = true;
	}
	else if(others_hidden){
		document.getElementById(ele.id).style.marginLeft = 0;
		for(var i=0; i<key.length; i++){
			document.getElementById(key[i]).removeAttribute("hidden");
		}
		others_hidden = false;
	}
	
}