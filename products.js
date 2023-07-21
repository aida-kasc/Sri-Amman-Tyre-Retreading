window.addEventListener("load", function(){
	document.getElementById("loadingscreen").remove();
})

async function getdata(url){
	const response = await fetch(url);
	const data = await response.json();
	return data
}
 
var tyres;
(async () => {
	tyres = await getdata("populartyres.json");
})();
console.log(tyres)

function load(keyword, filter){
    console.log(keyword, filter);
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