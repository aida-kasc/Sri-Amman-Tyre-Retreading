function option(ele){
	all_options = ["askq", "feedback", "complains"]
	all_options.forEach(function(item){
		document.getElementById(item).style.display = "none";
	})
	if(ele.value == "Ask Questions"){
		document.getElementById("askq").style.display = "flex";
	}
	else if(ele.value == "Complain"){
		document.getElementById("complains").style.display = "flex";
	}
	else if(ele.value == "Feedback"){
		document.getElementById("feedback").style.display = "flex";
	}
}

function record_response(ele){
	console.log(ele.id);
}

function catoptions(ele){
	if(ele.value == "Products"){

	}
	else if(ele.value == "Service"){

	}
	else if(ele.value == "Staffs"){
		
	}
}