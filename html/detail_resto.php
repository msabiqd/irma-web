<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Sentiment Analysis">
    <meta name="keywords" content="HTML">
    <meta name="author" content="IR(MA)">
    <title>Sentiment Analysis Warunk Upnormal</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/detail_resto.css">
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="intro">
                    <h1 class="big-title"></h1>
                    <h3 class="zomato-resto"></h3>
                    <h3 class="irma-resto"></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="lineChartArea">
                    <canvas id="lineChart" width="600" height="300"></canvas>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/detail_resto.js"></script>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="demo">
                    <button class="btn btn-primary" onclick="loadDoc()">Lihat Detail</button>
                    <div class="panel panel-default">
                        <!-- <div class="panel-body">
                            asdasd
                            <p class="rating rating-irma"> <b>rating by irma </b><p>
                            <p class="rating rating-zomato"> <b>rating by zomato </b><p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
    </div>
    
    
</body>
</html>