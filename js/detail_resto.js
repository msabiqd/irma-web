var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var increment = 0;
var beji_data = function(){
    var tmp = null;

    $.ajax({
        url: "http://www.mocky.io/v2/5a34abbd3000004b324b7640",
        type: "GET",
        async: false, 
        contentType: 'application/json; charset=utf-8',
        success: function(resultData) {
            tmp = resultData;
            console.log(tmp);
            console.log("resData" + resultData)
        },
        error : function(jqXHR, textStatus, errorThrown) {
        },
    
        timeout: 120000,
    }).responseText ;
    return tmp;
}();


function loadDoc() {
    var result = '<h1 class="title-review">User review</h1>';
    increment += 5;
    var max;
    if (increment > beji_data.reviews.length) {
        max = beji_data.reviews.length;
    } else {
        max = increment;
    }
    for (i = 0; i < max; i++) {
        result += '<div class="panel panel-default"><div class="panel-body">' + 
                  beji_data.reviews[i].review_body + window.location.href.split("=")[1] +'<p class="rating rating-irma"> <b>rating by irma : ' + beji_data.reviews[i].rating_irma + '</b><p>'
                  + '<p class="rating rating-zomato"> <b>rating by zomato : ' + beji_data.reviews[i].rating_zomato + '</b><p>' +
                  '</div></div>'
    }
    // document.getElementById("demo").innerHTML = beji_data.reviews[0].rating_zomato;
    // $('.btn btn-primary').remove();
    result += '<button type="button" class="btn btn-primary" onclick="loadMore()">Load More</button>'
    var div = $('#demo');
    // div.slideUp(1); 
    div.html(result);
    // div.fadeIn(1000);  
    $('html, body').animate({
        scrollTop: $(".title-review").offset().top
    }, 1000);
}

function loadMore() {
    $('.btn-primary').remove();
    var result = ""
    var start = increment;
    increment += 5;
    var max;
    if (increment > beji_data.reviews.length) {
        max = beji_data.reviews.length;
    } else {
        max = increment;
    }
    for (i = start; i < max; i++) {
        result += '<div class="panel panel-default"><div class="panel-body">' + 
                  beji_data.reviews[i].review_body + '<p class="rating rating-irma"> <b>rating by irma : ' + beji_data.reviews[i].rating_irma + '</b></p>'
                  + '<p class="rating rating-zomato"> <b>rating by zomato : ' + beji_data.reviews[i].rating_zomato + '</b></p>' +
                  '</div></div>' 
    }
    if (increment < beji_data.reviews.length) {
        result += '<button type="button" class="btn btn-primary" onclick="loadMore()">Load More</button>'
    }
    // var div = $("#demo");
    // div.slideUp(1);
    $("#demo").append(result);
    // div.fadeIn(1000);  
    // $('html, body').animate({
    //     scrollTop: $(".footer").offset().top+1000
    // }, 2000);
     
    // div.html(result);
    // div.fadeIn(1000);  
    $('html, body').animate({
        scrollTop: $(".btn-primary").offset().top
    }, 1000);
}

var config = {
    type: 'line',
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],
        datasets: [{
            label: "Zomato Review",
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
        //    data: [beji_data['rating_zomato']]
            data: [beji_data.reviews[0].rating_zomato,beji_data.reviews[1].rating_zomato,beji_data.reviews[2].rating_zomato,
            beji_data.reviews[3].rating_zomato,beji_data.reviews[4].rating_zomato,beji_data.reviews[5].rating_zomato,beji_data.reviews[6].rating_zomato,
            beji_data.reviews[7].rating_zomato,beji_data.reviews[8].rating_zomato,beji_data.reviews[9].rating_zomato,beji_data.reviews[10].rating_zomato,
            beji_data.reviews[11].rating_zomato,beji_data.reviews[12].rating_zomato,beji_data.reviews[13].rating_zomato,beji_data.reviews[14].rating_zomato,
            beji_data.reviews[15].rating_zomato,beji_data.reviews[16].rating_zomato,beji_data.reviews[17].rating_zomato,beji_data.reviews[18].rating_zomato,
            beji_data.reviews[19].rating_zomato,beji_data.reviews[20].rating_zomato,beji_data.reviews[21].rating_zomato,beji_data.reviews[22].rating_zomato,
            beji_data.reviews[23].rating_zomato,beji_data.reviews[24].rating_zomato,beji_data.reviews[25].rating_zomato,]
        }, {
            label: "IR(MA) review",
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [beji_data.reviews[0].rating_irma,beji_data.reviews[1].rating_irma,beji_data.reviews[2].rating_irma,
            beji_data.reviews[3].rating_irma,beji_data.reviews[4].rating_irma,beji_data.reviews[5].rating_irma,beji_data.reviews[6].rating_irma,
            beji_data.reviews[7].rating_irma,beji_data.reviews[8].rating_irma,beji_data.reviews[9].rating_irma,beji_data.reviews[10].rating_irma,
            beji_data.reviews[11].rating_irma,beji_data.reviews[12].rating_irma,beji_data.reviews[13].rating_irma,beji_data.reviews[14].rating_irma,
            beji_data.reviews[15].rating_irma,beji_data.reviews[16].rating_irma,beji_data.reviews[17].rating_irma,beji_data.reviews[18].rating_irma,
            beji_data.reviews[19].rating_irma,beji_data.reviews[20].rating_irma,beji_data.reviews[21].rating_irma,beji_data.reviews[22].rating_irma,
            beji_data.reviews[23].rating_irma,beji_data.reviews[24].rating_irma,beji_data.reviews[25].rating_irma,],
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            text:'Zomato\'s Review Rating Comparison Chart'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true   // minimum value will be 0.
                },
                gridLines: {
                    display:false
                }
            }]
        }
    }
};

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


// function loadDoc() {
//     $.ajax({
//         url: "http://www.mocky.io/v2/5a34abbd3000004b324b7640",
//         type: "GET",
    
//         contentType: 'application/json; charset=utf-8',
//         success: function(resultData) {
//             //here is your json.
//               // process it
//               var result = JSON.stringify(resultData)
//               document.getElementById("demo").innerHTML = resultData['rating_zomato']
//         },
//         error : function(jqXHR, textStatus, errorThrown) {
//         },
    
//         timeout: 120000,
//     });
// }

window.onload = function() {
    var param = findGetParameter('resto_option')
    var ctx = document.getElementById("lineChart").getContext("2d");
    $('.big-title').html('Warunk Upnormal Cabang ' + window.location.href.split("=")[1] + '<br><br>');
    $('.zomato-resto').html('Zomato Rating : ' + beji_data.rating_zomato);
    $('.irma-resto').html('IR(MA) Rating : ' + beji_data.rating_irma);
    window.myLine = new Chart(ctx, config);
};




  