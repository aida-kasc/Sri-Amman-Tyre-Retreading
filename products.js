window.addEventListener("load", function(){
	document.getElementById("loadingscreen").remove();
	load();
})

async function getdata(url){
	const response = await fetch(url);
	const data = await response.json();
	return data
}
 
var tyres;
var total_pages;
var total_entity;
var cur_page = 1;
var cur_entry = 0;

(async () => {
	tyres = await getdata("https://sri-amman-tyre-retreading-default-rtdb.firebaseio.com/all_products.json");
	total_entity = Object.keys(tyres).length;
	total_pages = Math.ceil(total_entity/25);
})();

async function load(keyword=null, filter="All"){
	total_cols = [];
    for(var j=1; j<=5; j++){
    	cols = document.getElementById("row"+(j).toString()).childNodes;
    	for(var k=1; k<=9; k+=2){
    		total_cols.push(cols[k]);
    	}
    }

    for(var i=0; i<25; i++){
    	itemno = cur_entry+i
    	if(tyres[itemno] !=  null){
    		total_cols[i].innerHTML = "<div class='imgwrapper'><img src='"+tyres[itemno][0]+"'></div>";
    		total_cols[i].innerHTML += "<p>"+tyres[itemno][1]+"</p>";
    	}
    	else{
    		total_cols[i].style.display = "none";
    	}
    }
}

var filterval = "All";
function filter(ele){
    filterval = ele.value
}

function search(){
    document.getElementById("searchicon").src = "images/search.gif";
    keyword = document.getElementById("search").value;
    load(keyword, filterval)
}

function prev_page(ele){
	cur_entry -= 25;
	cur_page--;
	if(cur_page == 1){
		ele.setAttribute("disabled", "disabled");
	}
	document.getElementById("next_page").removeAttribute("disabled");
	load();
}

function next_page(ele){
	cur_entry += 25;
	cur_page++;
	if(cur_page == total_pages){
		ele.setAttribute("disabled", "disabled");
	}
	document.getElementById("prev_page").removeAttribute("disabled");
	load();
}