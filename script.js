var searchrow = document.getElementById("searchRow");
var searchButton = document.getElementById("clearTextButton");
var iconLink = document.getElementById("searchIconLink");
var searchTB = document.getElementById("searchTextBox");
var groupDiv = document.getElementById("searchGroupDiv");

$(document).ready(function () {
    searchButton.addEventListener("click", function () {
        searchrow.style.marginTop = "20px";
    });

    iconLink.addEventListener("click", function () {
        groupDiv.style.visibility = "visible";
    });

    searchTB.addEventListener("keyup", function(event){
        if(event.keyCode == 13){
            alert("You presses enter key");
        }
    });

});