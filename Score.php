<?php
session_start();
include "connection.php"

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Test Result</title>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Merriweather&family=Playfair+Display&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <link rel="stylesheet" href="chart_style.css">
  <link rel="icon" type="image/png" sizes="32x32" href="Project/favicon-32x32.png">

</head>

<body>
  <style>
    body {
      background-image: url(scorebgm.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-blend-mode: multiply;
    }
  </style>

  <div class="wrapper">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div>
        <div class="titlee">
          <h1 style="margin-left:3rem;">Your Result:</h1>
          <h2 class="science" style="margin-left: -1px;"> Science score.......... <span id="science"></span></h2>
          <h2 class="atrs" style="margin-left:-2px;"> Arts score................ <span id="bio"></span></h2>
          <h2 class="commerce" style="margin-left: -2px;"> Commerce score.... <span id="commerce"></span></h2>
        </div>
      </div>
      <div class="chart-wrapper">
        <canvas id="myChart"></canvas>
        <button type="submit" class="loginbtn" style="border:none; border-radius: 20px; padding: 18px;background-color: #74b9ff; color: #fff; display: block; cursor: pointer; font-family: 'Merriweather', serif; margin-left:13rem ; margin-top:2rem;" onclick="document.location='dashboard.html'">Continue</button>
      </div>
    </div>
  </div>
  <script>
    let cookieString = document.cookie;

    function extractCookieByName(cookie, name) {
      const array = cookie.split("; ");
      console.log(array);

      const filteredArray = array.filter(e => e.indexOf(name) >= 0);
      console.log(filteredArray);
      const keyVal = filteredArray[0].split("=");

      return keyVal[1];
    }

    const scienceScoreSpan = document.querySelector("#science");
    scienceScoreSpan.innerHTML = extractCookieByName(cookieString, "science");

    const bioScoreSpan = document.querySelector("#bio");
    bioScoreSpan.innerHTML = extractCookieByName(cookieString, "bio");

    const commerceScoreSpan = document.querySelector("#commerce");
    commerceScoreSpan.innerHTML = extractCookieByName(cookieString, "commerce");
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
  <script src="chart.js">

  </script>


  <?php
  $count = 0;
  // $science_scores=;
  // echo($science_scores);
  $science = $_COOKIE["science"];
  $bio = $_COOKIE["bio"];
  $commerce = $_COOKIE["commerce"];

  // $bio_scores=`<script>localStorage.getItem("bio");</script>`;
  // $commerce_scores=`<script>localStorage.getItem("commerce");</script>`;
  // $query = sprintf("insert into exam_results (usernames,science_score,bio_score,commerce_score) values('%s','%s','%s','%s')", $_SESSION["username"], $science, $bio, $commerce);
  // mysqli_query($link, $query);



  ?>


</body>


</html>