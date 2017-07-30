var searchrow = document.getElementById("searchRow");
var searchButton = document.getElementById("clearTextButton");

$(document).ready(function(){
    searchButton.addEventListener("click", function(){
        searchrow.style.top = "2%";
    })
});