/*
var searchrow = document.getElementById("searchRow");
var clearButton = document.getElementById("clearTextButton");
var iconLink = document.getElementById("searchIconLink");
var searchTB = document.getElementById("searchTextBox");
var groupDiv = document.getElementById("searchGroupDiv");
var resultsRow = document.getElementById("resultsRow");
var searchingText = document.getElementById("searchText");
var searchResultsUL = document.getElementById("apiResultsUL");

var interval = null;

$(document).ready(function () {
   
    clearButton.addEventListener("click", function () {
        searchTB.value = "";
    });

    iconLink.addEventListener("click", function () {
        groupDiv.style.visibility = "visible";
    });

    searchTB.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            removeAllULChildren();
            searchingText.style.display = "block";
            searchingText.innerText = "Getting relevant pages";
            showSearching();
            getArticles(searchTB.value);
        }
    });

});

function getArticles(searchText) {
    $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        datatype: "jsonp",
        jsonp: "jsonp",
        timeout: 30000,
        data:
        {
            action: "query",
            format: "json",
            titles: "buhari",
            prop: "info|revisions|extracts",
            rvprop: "content",
            generator: "search",
            gsrlimit: 15,
            gsrnamespace: 0,
            gsrsearch: searchText,
            gsrprop: "wordcount",
            exintro: true,
            exsentences: 2
        }
    })

        .done(update)
        .fail(errorHandler);
}

function update(response) {
    if (response != null) {
        var queryData = response.query;
        var pageData = queryData.pages;
        cancelInterval();
        searchrow.style.marginTop = "20px";
        resultsRow.style.visibility = "visible";
        console.log(response);
        //console.log("Query is: "+ queryData);
        //console.log("Page is: "+ pageData);
        for(var page in pageData){
            if(pageData.hasOwnProperty(page)){
                //console.log(page);
                //console.log(response.query.pages[page].title);
                var listItem = document.createElement("li");
        var hyperLink = document.createElement("a");
        var header3 = document.createElement("h3");
        header3.innerText = response.query.pages[page].title;
        hyperLink.href = "http://en.wikipedia.org/?curid=" + response.query.pages[page].pageid;
        hyperLink.target = "_blank";
        hyperLink.appendChild(header3);
        $(hyperLink).append(response.query.pages[page].extract);
        listItem.appendChild(hyperLink);
        searchResultsUL.appendChild(listItem);
            }
        }
		//http://en.wikipedia.org/?curid=
/*
        var listItem = document.createElement("li");
        var hyperLink = document.createElement("a");
        var header3 = document.createElement("h3");
        header3.innerText = response.query.pages[0].title;
        hyperLink.href = "http://en.wikipedia.org/?curid=" + response.query.pages[0].pageid;
        hyperLink.appendChild(header3);
        hyperLink.appendChild(response.query.pages[0].extract);
        listItem.appendChild(hyperLink);
        searchResultsUL.appendChild(listItem);
*/
/*
    }
    else {
        console.log("No response from server");
        showNoResultsFound("no-results");
    }
}

function errorHandler(jqXhr, textStatus, errorThrown){
    console.log("AJAX api failed and is not available");
    showNoResultsFound("error");
}

function showSearching(){
    interval = setInterval(function(){
        if(searchingText.innerText.length === 28){
            searchingText.innerText = "Getting relevant pages";
        }
        else if(searchingText.innerText.length < 28){
            searchingText.innerText += " .";
        }
    }, 1000);
}

function cancelInterval(){
    clearInterval(interval);
    searchingText.innerText = "Getting relevant pages";
    searchingText.style.display = "none";
}

function showNoResultsFound(state){
    if(state === "error"){
        searchingText.innerText = "Something happened, please try searching again..";
    }
    else if(state === "no-results"){
        searchingText.innerText = "No results was found";
    }
}

function removeAllULChildren(){
    $("#apiResultsUL li").remove();
}
*/

var searchrow = $("#searchRow");
var clearButton = $("#clearTextButton");
var iconLink = $("#searchIconLink");
var searchTB = $("#searchTextBox");
var groupDiv = $("#searchGroupDiv");
var resultsRow = $("#resultsRow");
var searchingText = $("#searchText");
var searchResultsUL = $("#apiResultsUL");

var interval = null;

$(document).ready(function () {
    clearButton.click(function () {
        searchTB.val("");
    });

    iconLink.click(function () {
        groupDiv.css("visibility", "visible");
    });

    searchTB.keyup(function (event) {
        if (event.which == 13) {
            removeAllULChildren();
            searchingText.css("display", "block");
           searchingText.empty().append(document.createTextNode("Getting relevant pages"));
            showSearching();
            getArticles(searchTB.val());
        }
    });

});


function getArticles(searchText) {
    $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        datatype: "jsonp",
        jsonp: "jsonp",
        timeout: 30000,
        data:
        {
            action: "query",
            format: "json",
            prop: "info|revisions|extracts",
            rvprop: "content",
            generator: "search",
            gsrlimit: 15,
            gsrnamespace: 0,
            gsrsearch: searchText,
            gsrprop: "wordcount",
            exintro: true,
            exsentences: 2
        }
    })

        .done(update)
        .fail(errorHandler);
}

function update(response) {
    if (response != null) {
        var queryData = response.query;
        var pageData = queryData.pages;
        cancelInterval();
        searchrow.css("margin-top", "20px");
        resultsRow.css("visibility", "visible");
        console.log(response);
        for(var page in pageData){
            if(pageData.hasOwnProperty(page)){
        searchResultsUL.append("<li><a href='" + "http://en.wikipedia.org/?curid=" + response.query.pages[page].pageid + "' target='_blank'><h3>" + response.query.pages[page].title + "</h3>" + response.query.pages[page].extract + "</a></li>")
            }
        }
    }
    else {
        console.log("No response from server");
        showNoResultsFound("no-results");
    }
}

function errorHandler(jqXhr, textStatus, errorThrown){
    console.log("AJAX api failed and is not available");
    showNoResultsFound("error");
}

function showSearching(){
    interval = setInterval(function(){
        if(searchingText.text().length === 28){
            searchingText.empty().append(document.createTextNode("Getting relevant pages"));
        }
        else if(searchingText.text().length < 28){
            var text = searchingText.text();
            searchingText.append(document.createTextNode(" ."));
        }
    }, 1000);
}

function cancelInterval(){
    clearInterval(interval);
    searchingText.empty().appendTo("Getting relevant pages");
    searchingText.css("display", "none");
}

function showNoResultsFound(state){
    if(state === "error"){
        searchingText.empty().append(document.createTextNode("Something happened, please try searching again"));
    }
    else if(state === "no-results"){
        searchingText.empty().append(document.createTextNode("No results was found"));
    }
}

function removeAllULChildren(){
    $("#apiResultsUL li").remove();
}