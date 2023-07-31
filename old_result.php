<?php
session_start();
include "connection.php"

?>
	<link rel="stylesheet" href="table.css">
    <link rel="icon" type="image/png" sizes="32x32" href="/Project/favicon-32x32.png">
    <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Merriweather&family=Playfair+Display&display=swap"
        rel="stylesheet">
    
<body>
<!-- <style>
		body{
			background-image: url('lib.jpg');
			background-repeat: no-repeat;
			background-size: 100% 240%;
			background-blend-mode:multiply;
		}
	</style> -->
    <div class="row">
        <div class="col-lg-6 col-lg-push-3">
            <a href="dashboard.html">&laquo; Dashboard</a>
            <center>
                <h1>Previous results</h1>
            </center>
            <center>
            <?php
            
            $count=0;
            $res=mysqli_query($link,"select * from exam_results where usernames='$_SESSION[username]' order by id desc");
            $count=mysqli_num_rows($res);

            if($count==0)
            {
                ?>
                <center>
                    <h1>No Results Found</h1>
                </center>
                <?php
                
            }

            
            else{
                echo "<table class='content-table'>";
                echo "<tr>";
                echo "<th>"; echo "Username"; echo "</th>";
                echo "<th>"; echo "Science_Score"; echo "</th>";
                echo "<th>"; echo "Commerce_Score"; echo "</th>";
                echo "<th>"; echo "Art_Score"; echo "</th>";
                echo "</tr>";
                
                while($row=mysqli_fetch_array($res))
                {
                    echo "<tr>";
                    echo "<td>"; echo $row["usernames"]; echo "</td>";
                    echo "<td>"; echo $row["science_score"]; echo "</td>";
                    echo "<td>"; echo $row["commerce_score"]; echo "</td>";
                    echo "<td>"; echo $row["bio_score"]; echo "</td>";
                    echo "</tr>";
                }
                echo "</table>";


                
            }
            ?>
            </center>
            <!-- <center>
            <button type="submit" class="loginbtn" onclick="document.location='dashboard.html'">go back</button>
            </center> -->
        </div>
    </div>
</body>