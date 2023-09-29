var drawItems;


$(document).ready(function () {

    (function () {
        
        data = {
            filter: getParameterByName('filter') || "new",
            offset: getParameterByName('offset') || 0,
            limit: getParameterByName('count') || 20
        };

        console.log(data)
    
        doAjaxQuery('GET', '/api/v1/books', data, function (res) {
            // console.log('qindex');
             drawItems = initDrawItemsOnPage(res.data.total.amount);
        });
    }());
});


// parse request query 
function getParameterByName(name, url) {
    if (!url) url = $(location).attr('href');
    // console.log(url);
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        
    if (!results) return null;
    if (!results[2]) return '';
    
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var initDrawItemsOnPage = function (maxItems) {
    let defaultLimit = 20;
    var maxNumOfItems = maxItems,
               pages = parseInt(getParameterByName('count')*defaultLimit);
               totalPages = Math.ceil(maxItems/limit);                
               

      
    return function () {
        if (pages < totalPages) {
            var data = {
                'filter': getParameterByName('filter') || "new",
                'limit': defaultLimit,
                'offset': pages,
                "prevOffset": pages-1
            };
            doAjaxQuery('GET', '/api/v1/books', data,
                function (res) {
                    view.addBooksItems(res.data.books, false);
                });
            pages += 1;
        }
    }
};



function loadIndexPage(reqData) {
    doAjaxQuery('GET', '/api/v1/books', reqData, function (res) {
        // view.addBooksItems(res.data.books, true);
        drawItems = initDrawItemsOnPage(res.data.total.amount);
    });
}


function doAjaxQuery(method, url, data, callback){
    $.ajax({
        method: method,
        url: url,
        data: data,
        success: function (response) {
            callback(response);
        },
        error: function (xhr, status, error) {
            console.error('Ajax request failed:', error);
        }
})
};
