async function getdata(url){
	const response = await fetch(url);
	const data = await response.json();
	return data
}

function cngchar(s){
	var newstr = "";
	for(var i=0; i<s.length; i++){
		if(s[i] == "."){
			newstr += "";
		}
		else{
			newstr += s[i];
		}
	}
	return newstr;
}

function Options(ele){
	document.getElementById("name_email").style.display = "flex";
	all_options = ["askq", "feedback", "complaint"]
	all_options.forEach(function(item){
		document.getElementById(item).style.display = "none";
	})
	if(ele.value == "Select"){
		document.getElementById("name_email").style.display = "none";
	}
	else if(ele.value == "Ask Questions"){
		document.getElementById("askq").style.display = "flex";
	}
	else if(ele.value == "Complaint"){
		document.getElementById("complaint").style.display = "flex";
	}
	else if(ele.value == "Feedback"){
		document.getElementById("feedback").style.display = "flex";
	}
}

var pro = false;
var ser = false;
var stf = false;

var url = "https://sri-amman-tyre-retreading-default-rtdb.firebaseio.com/client_req.json";

async function record_response(ele){
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var client_req = await getdata(url);
	var email = document.getElementById("email").value;
	var name = document.getElementById("name").value;

	if(email.match(validRegex) && name.length >= 5){
		email = cngchar(email);
		document.getElementById("error").innerHTML = "";
	
		if(ele.id == "askqbtn"){
			var question = document.getElementById("acomments").value;
			if(question.length >= 10){
				client_req["questions"] = {[email]:{"name":name, "question":question}};
			}
			else{
				document.getElementById("error").inneText = "Fill the above details";
				return;
			}
		}
		else if(ele.id == "complainsbtn"){
			var complaint = document.getElementById("ccomment").value;
			if(complaint.length >= 10){
				client_req["complaints"] = {[email]:{"name":name, "Complaint":complaint}};
			}
			else{
				document.getElementById("error").inneText = "Fill the above details";
				return;
			}
		}
		else if(ele.id == "feedbackbtn"){
			if(pro){
				comment = document.getElementById("pcomments").value;
				type = document.getElementById("selecttype")
				model = document.getElementById("model")
				if(selecttype != "Select" && model != "Select model" && comment.length >= 10){
					client_req["feedback"]["products"] = {[email]:{"name":name, "type":type, "model":model, "comments":comment}};
				}
				else{
					document.getElementById("error").inneText = "Fill the above details";
					return;
				}
			}
			else if(ser){
				comment = document.getElementById("scomments").value;
				if(comment.length >= 10){
					client_req["feedback"]["service"] = {[email]:{"name":name, "Comment":comment}};
				}
				else{
					document.getElementById("error").inneText = "Fill the above details";
					return;
				}
			}
			else if(stf){
				sname = document.getElementById("sname");
				scode = document.getElementById("staffcode");
				comment = document.getElementById("stcomments");
				if(sname.length >= 5 && scode.length >= 8 && comment.length >= 10){
					client_req["feedback"]["staffs"] = {[email]:{"name":name, "staff name": sname, "Staff code":scode, "Comment":comment}};
				}
				else{
					document.getElementById("error").inneText = "Fill the above details";
					return;
				}
			}
			else{
				document.getElementById("error").inneText = "Fill the above details";
				return;
			}
		}
	}
	else{
		document.getElementById("error").inneText = "Fill the above details";
		return; 
	}

	data = JSON.stringify(client_req);
	console.log(data)
	await fetch(url, {
    	method: 'POST',
    	headers: {
        	'Content-Type': 'application/json',
        },
        body: data
	});

	document.getElementById("final").style.display = "flex"
	document.getElementById("final").inneText = "OK";

}

function catoption(ele){
	all_options = ["products", "services", "staffs"]
	all_options.forEach(function(item){
		pro = false;
		stf = false;
		ser = false
		document.getElementById(item).style.display = "none";
	})
	if(ele.value == "Product"){
		pro = true;
		document.getElementById("products").style.display = "flex";
	}
	else if(ele.value == "Service"){
		ser = true;
		document.getElementById("services").style.display = "flex";
	}
	else if(ele.value == "Staffs"){
		stf = true;
		document.getElementById("staffs").style.display = "flex";
	}
}

function selectftype(ele){

}