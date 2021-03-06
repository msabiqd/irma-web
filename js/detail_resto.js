var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var increment = 0;

var beji_data = function(){
    var tmp = null;

    $.ajax({
        url: "https://private-e75e5-muhammadsabiqdanurrohman.apiary-mock.com/"+window.location.href.split("=")[1],
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
        result += '<div class="panel panel-default"><div class="panel-body">' + '<div class="row"><div class="col-md-10">' + 
                  beji_data.reviews[i].review_body + window.location.href.split("=")[1] +'</div><div class="col-md-2"><p class="rating rating-irma"> <b>rating by irma : ' + beji_data.reviews[i].rating_irma + '</b></p>'
                  + '<p class="rating rating-zomato"> <b>rating by zomato : ' + beji_data.reviews[i].rating_zomato + '</b></p>' + '<p class="rating sentiment"> <b>sentiment point : ' + beji_data.reviews[i].sentiment_point + '</b></p>' +
                  '</div></div></div></div>'
    }

    result += '<button type="button" class="btn btn-primary" onclick="loadMore()">Load More</button>'
    var div = $('#demo');
    div.html(result);
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
        result += '<div class="panel panel-default"><div class="panel-body">' + '<div class="row"><div class="col-md-10">' + 
                    beji_data.reviews[i].review_body + window.location.href.split("=")[1] +'</div><div class="col-md-2"><p class="rating rating-irma"> <b>rating by irma : ' + beji_data.reviews[i].rating_irma + '</b></p>'
                    + '<p class="rating rating-zomato"> <b>rating by zomato : ' + beji_data.reviews[i].rating_zomato + '</b></p>' + '<p class="rating sentiment"> <b>sentiment point : ' + beji_data.reviews[i].sentiment_point + '</b></p>' +
                    '</div></div></div></div>' 
    }
    if (increment < beji_data.reviews.length) {
        result += '<button type="button" class="btn btn-primary" onclick="loadMore()">Load More</button>'
    }

    $("#demo").append(result);
 
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
                    suggestedMin: 0,   
                    beginAtZero: true   
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


window.onload = function() {
    var param = findGetParameter('resto_option')
    var ctx = document.getElementById("lineChart").getContext("2d");
    $('.big-title').html('Warunk Upnormal Cabang ' + window.location.href.split("=")[1] + '<br><br>');
    $('.zomato-resto').html('Zomato Rating : ' + beji_data.rating_zomato);
    $('.irma-resto').html('IR(MA) Rating : ' + beji_data.rating_irma);
    window.myLine = new Chart(ctx, config);
};




  