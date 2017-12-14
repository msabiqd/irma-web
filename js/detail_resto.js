var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'line',
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],
        datasets: [{
            label: "Zomato Review",
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
            data: [2.0,3.0,2.0,3.0,1.5,1.0,1.0,3.0,3.0,3.5,1.0,3.5,2.5,4.0,3.5,4.5,4.0,2.5,2.5,4.0,3.5,2.0,1.0,2.5,1.0]
        }, {
            label: "IR(MA) review",
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [2.0,2.2,2.066666666666667,2.3333333333333335,2.0,2.0,2.0,1.6666666666666667,2.0,3.0,2.0,2.2,2.0,1.8333333333333333,2.0,2.0,2.1666666666666665,2.0,2.0,2.2,2.0,2.0,2.0,2.0,2.0],
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

window.onload = function() {
    var param = findGetParameter('resto_option')
    var ctx = document.getElementById("lineChart").getContext("2d");
    window.myLine = new Chart(ctx, config);
};
  