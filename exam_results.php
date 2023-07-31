<?php
session_start();
?>


<script>
        
    $sience_score = localStorage.getItem("science");
    $bio_score = localStorage.getItem("bio");
    $commerce_score = localStorage.getItem("commerce");

</script>


<?php


if(isset($_SESSION['exam_start']))
{
    mysqli_query($link,"insert into exam_result (id,username,science_score,bio_score,commerce_score) values(NULL,'$_SESSION[username]','$science_score','$bio_score','$commerce_score'))");

}

if(isset($_SESSION['exam_start']))
{
    unset($_SESSION['exam_start']);
}
?>
