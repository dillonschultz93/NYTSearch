var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var generatedURL = []
var search;
var beginDate;
var endDate;
var sort;
var highlight;

function generateURL(){
    
}


// url += '?' + $.param({
//     //Standard API key
//     'api-key': "3af329218907494292b4799b9106fbdd",
//     //Search term
//     'q': "Net neutrality",
//     //Dates of search, format YYYYMMDD
//     'begin_date': "20170101",
//     'end_date': "20170601",
//     //sort method, string, newest or oldest
//     'sort': "newest",
//     //True or false, highlights search paramater
//     'hl': "true"
// });
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});