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

var margin = 0;
function tprev(){
	var s = document.getElementById("tfirst");
	if(margin == -80){
		margin = 0;
	}
	console.log(margin.toString())
	s.style.marginLeft = margin.toString()+"%";
	margin -= 20;
}