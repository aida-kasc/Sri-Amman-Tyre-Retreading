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
(async () => {
	tyres = await getdata("allproducts.json");
	tyres = tyres["tyres"]
	total_entity = Object.keys(tyres).length;
	total_pages = Math.ceil(total_entity/25);
})();

async function load(keyword=null, filter="All"){
	console.log(cur_page)
    for(var i=25*(cur_page-1); i<25*(cur_page); i++){
    	for(var j=1; j<=5; j++, i++){
    		if(tyres[i] != null){
    			console.log(document.getElementsByClassName("col"+toString(j)).class);
    		}
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
	cur_page--;
	if(cur_page == 1){
		ele.setAttribute("disabled", "disabled");
	}
	document.getElementById("next_page").removeAttribute("disabled");
	load();
}

function next_page(ele){
	cur_page++;
	if(cur_page == total_pages){
		ele.setAttribute("disabled", "disabled");
	}
	document.getElementById("prev_page").removeAttribute("disabled");
	load();
}