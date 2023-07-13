window.addEventListener("load", function(){
	document.getElementById("loadingscreen").remove();
	document.getElementById('radio1').checked = true;
	slideshow()
})


async function getdata(url){
	const response = await fetch(url);
	const data = await response.json();
	return data
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function slideshow(){
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
}

var tyres;
var selectedtyre;
var type;

(async () => {
	tyres = await getdata("tyres.json");
})();

margin_left = {"bike":"0", "car":"-90%", "truck":"-190%", "tractor":"-300%"}
key = ["bike", "car", "tractor", "truck"]
others_hidden = false;
async function expand(ele){
	type = ele.id;
	if(others_hidden == false){
		document.getElementById(type).style.marginLeft = margin_left[ele.id];

		for(var i=0; i<key.length; i++){
			if(key[i] != type){
				document.getElementById(key[i]).setAttribute("hidden", "hidden");
			}
		}
		others_hidden = true;
		if(type != "bike"){
			await sleep(500);
		}
		document.getElementById("tyreinfo").style.display = "flex";

		var tyremodel = Object.keys(tyres[type])
		document.getElementById("selecttyre").innerHTML = "";
		for(var i=0; i<tyremodel.length; i++){
			document.getElementById("selecttyre").innerHTML += "<option>"+tyremodel[i]+"</option>";
		}
		selectedtyre = tyremodel[0]

		tyress = tyres[type][selectedtyre]
		document.getElementById("tyreimg").src = tyress[0];
		document.getElementById("abouttyre").innerHTML = tyress[1];
		document.getElementById("features").innerHTML = tyress[2];
	}
	else if(others_hidden){
		document.getElementById("tyreinfo").style.display = "none";
		document.getElementById(type).style.marginLeft = "0";
		if(type != "bike"){
			await sleep(1000);
		}
		for(var i=0; i<key.length; i++){
			if(key[i] != type){
				document.getElementById(key[i]).removeAttribute("hidden");
			}
		}
		others_hidden = false;
	}
	
}

function selecttyre(ele){
	selectedtyre = document.getElementById(ele.id).value;
	tyress = tyres[type][selectedtyre]
	document.getElementById("tyreimg").src = tyress[0];
	document.getElementById("abouttyre").innerHTML = tyress[1];
	document.getElementById("features").innerHTML = tyress[2];
}

function showproduct(){
	console.log(selectedtyre)
}