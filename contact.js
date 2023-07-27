async function getdata(url){
	const response = await fetch(url);
	const data = await response.json();
	return data
}

function Options(ele){
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

var url = "https://sri-amman-tyre-retreading-default-rtdb.firebaseio.com/client_req.json";
async function record_response(ele){
	var client_req = await getdata(url);
	console.log(client_req)
	if(ele.id == "askqbtn"){
		var email = document.getElementById("aemail").value;
		var name = document.getElementById("aname").value;
		var question = document.getElementById("acomments").value;
		console.log(client_req)
		if(email.length && name.length && question.length){
			client_req["questions"] = {email:{"name":name, question}};
		}
	}
	else if(ele.id == "complainsbtn"){

	}
	else if(ele.id == "feedbackbtn"){
		
	}

	client_req = JSON.stringify(client_req);
	await fetch(url, {
    	method: 'PUT',
    	headers: {
        	'Content-Type': 'application/json',
        },
        body: client_req
	});
}

function catoption(ele){
	all_options = ["products", "services", "staffs"]
	all_options.forEach(function(item){
		document.getElementById(item).style.display = "none";
	})
	if(ele.value == "Product"){
		document.getElementById("products").style.display = "flex";
	}
	else if(ele.value == "Service"){
		document.getElementById("services").style.display = "flex";
	}
	else if(ele.value == "Staffs"){
		document.getElementById("staffs").style.display = "flex";
	}
}