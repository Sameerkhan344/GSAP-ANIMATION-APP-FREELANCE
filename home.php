<?php

/**
 * Template name: Homepage
 */

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief description of your webpage">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Your Name">
    <title>Title</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Poppins:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body {
            overflow-x: hidden;
        }
        body {
            margin: 0;
        }
        section.hero_section {
            height: 130vh;
            display: block;
            background-image: url('assets/images/t3rlanding.png');
            background-size: cover;
            position: relative;
            overflow: hidden;
        }
        .darkgreen_land img, .midgreen_land img, .lightgreen_land img {
            width: 100%;
        }
        .darkgreen_land {
            width: 104%;
            position: absolute;
            bottom: -112px;
            z-index: 1;
            opacity: 0;
            opacity: 0;
            transform: translate(-030%, 0%);
        }
        .lightgreen_land {
            width: 110%;
            position: absolute;
            bottom: -10px;
            z-index: 3;
            opacity: 0;
            transform: translate(-030%, 0%);
        }
        .midgreen_land {
            width: 110%;
            position: absolute;
            bottom: 150px;
            z-index: 2;
            left: 0%;
            transform: scale(1.3);
        }
        .sky_cloud img {
            width: 100%;
        }
        .sky_cloud {
            width: 100%;
            transform: translate(-10%, -10%);
            opacity: 0.5;
        }
        .hero-text h2 {
            font-family: 'Poppins', sans-serif;
            color: #fff;
            font-size: 48px;
            line-height: 72px;
            font-weight: bold;
            margin: 0;
            transform: translateY(50%);
            opacity: 0;
        }
        .hero-text button {
            background: transparent;
            border: 0;
            box-shadow: none;
            transform: translateX(-12%);
            opacity: 0;
        }
        .hero-text button a {
            width: 378px;
            height: 67px;
            color: #368863;
            text-decoration: none;
            font-size: 36px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            border: 5px solid #368863;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .hero-text button {
            background: #fff;
            border: 0;
            box-shadow: none;
            margin-top: 68px;
            padding: 0;
            border-radius: 25px;
        }
        .hero-text {
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            top: 16%;
            z-index: 4;
        }
        .hero-text button a:before {
            content: '';
            position: absolute;
            background: #368863;
            left: 0;
            height: 100%;
            width: 0%;
            transition: 0.3s all ease;
            z-index: -1;
        }
        .hero-text button a:hover{
            color: #ffffff;
        }
        .hero-text button a:hover:before {
            width: 100%;
            transition: 0.3s all ease;
        }
        .testimo-text h2 {
            font-family: 'Poppins', sans-serif;
            color: #28424F;
            font-size: 48px;
            line-height: 72px;
            font-weight: bold;
            margin: 0;
            transform: translateY(50%);
            opacity: 0;
            text-align: center;
        }
        .testimo-text img {
            width: 45%;
            margin-top: -65px;
        }
        section#testimonialsection {
            position: relative;
            height: 110vh;
            overflow: hidden;
        }
        .testimo-text {
            text-align: center;
            position: absolute;
            top: 0%;
            left: 0;
            right: 0;
            z-index: 9999;
        }
        section#fishessection .testimo-text {
            top: 10%;
        }
        .clouds2 img {
            width: 100%;
        }
        .sun {
            display: inline-block;
            position: absolute;
            top: 17%;
            left: 0;
            z-index: 1;
        }
        .clouds2 {
            display: inline-block;
            position: absolute;
            top: 15%;
            width: 50%;
            right: 0;
        }
        .darkblue {
            position: absolute;
            bottom: -20%;
            z-index: 3;
            opacity: 0;
        }
        .midblue {
            position: absolute;
            bottom: -8%;
            z-index: 3;
        }
        .lightblue {
            position: absolute;
            bottom: -20%;
            z-index: 5;
            opacity: 0;
        }
        .hills1 {
            position: absolute;
            bottom: -6%;
            right: 4%;
            left: 0;
            z-index: 1;
        }
        .hills1 img {
            width: 100%;
        }
        .hills2 {
            position: absolute;
            bottom: 0;
            z-index: 2;
            right: 0;
            left: 0;
        }
        .lightblue img, .midblue img, .darkblue img {
            width: 100%;
        }
        .fish_section {
            position: relative;
            height: 110vh;
            overflow: hidden;
        }
        h2#herotext2 {
            font-family: 'Poppins', sans-serif;
            color: #28424F;
            font-size: 48px;
            line-height: 72px;
            font-weight: bold;
            margin: 0;
            transform: translateY(50%);
            opacity: 0;
            text-align: center;
        }
        section#fishessection form input {
            background: transparent url('img/Rectangle 248.png') 0% 0% no-repeat padding-box;
            border: 1px solid #2B5842;
            border-radius: 10px;
            font-size: 36px;
            color: #368863;
            height: 73px;
            padding: 0 20px;
            width: 588px;
            background-color: #fff;
        }
        section#fishessection form input::placeholder{
            color: #368863;
        }
        section#fishessection form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
        }
        section#fishessection form button {
            margin-top: 19px;
        }
        section#fishessection form button a {
            width: 450px;
        }
        .water_midgreen {
            width: 70%;
            position: absolute;
            bottom: 0;
            z-index: 999;
            opacity: 1;
            /*transform: translate(0%, 20%);*/
            right: 0;
            left: auto;
        }
        .water_midgreen img, .water_darkgreen img, .water_lightgreen img {
            width: 100%;
        }
        .water_darkgreen {
            width: 70%;
            position: absolute;
            bottom: -65%;
            z-index: 999;
            opacity: 1;
            /*transform: translate(0%, 48%) rotate(-6deg)scale(0.6);*/
            right: 13%;
            left: auto;
        }
        .water_lightgreen {
            width: 70%;
            position: absolute;
            bottom: -30%;
            z-index: 999;
            opacity: 0;
            /*transform: translate(10%, 20%);*/
            right: 0;
            left: auto;
        }
        .fish {
            position: absolute;
            bottom: 5%;
            left: 5%;
        }
        .fish_section {
            position: relative;
            height: 110vh;
            overflow: hidden;
            background-image: url('assets/images/Rectangle 78.svg');
            background-repeat: no-repeat;
            background-size: cover;
        }
        .backbackground img {
            width: 100%;
        }
        /*.hills2 {*/
        /*    position: absolute;*/
        /*    bottom: 0;*/
        /*    z-index: 2;*/
        /*    width: 100%;*/
        /*}*/
        #hills2 img{
            width: 100%;
        }







    </style>
</head>
<body>

<section id="herosection" class="hero_section">
    <div class="container-fluid">
        <div class="row">
            <div id="clouds" class="sky_cloud">
                <img src="assets/images/clouds.webp" alt=""/>
            </div>
            <div id="darkgreen" class="darkgreen_land">
                <img src="assets/images/Dark-Green.webp" alt=""/>
            </div>
            <div id="midgreen" class="midgreen_land">
                <img src="assets/images/midgreen.webp" alt=""/>
            </div>
            <div id="lightgreen" class="lightgreen_land">
                <img src="assets/images/lightgreen.webp" alt=""/>
            </div>
            <div class="hero-text">
                <h2 id="herotext">We Bring your brand to life, <br>
                    Through creativity and strategy</h2>
                <button id="herobutton" class="herobutton"><a href="#">Start Project</a></button>
            </div>
        </div>
    </div>
</section>

<section id="testimonialsection" class="testimonials_section">
    <div class="container-fluid">
        <div class="row">
            <div class="backbackground">
                <img src="assets/images/Rectangle 54.svg" alt=""/>
            </div>
            <div class="testimo-text">
                <h2 id="herotext">Client Testimonials</h2>
                <img src="assets/images/review.webp" alt=""/>
            </div>
            <div id="sun" class="sun">
                <img src="assets/images/sun.svg" alt=""/>
            </div>
            <div id="clouds2" class="clouds2">
                <img src="assets/images/clouds2.svg" alt=""/>
            </div>
            <div id="darkblue" class="darkblue">
                <img src="assets/images/darkblue.webp" alt=""/>
            </div>
            <div id="midblue" class="midblue">
                <img src="assets/images/midblue.webp" alt=""/>
            </div>
            <div id="lightblue" class="lightblue">
                <img src="assets/images/lightblue.webp" alt=""/>
            </div>
            <div id="hills1" class="hills1">
                <img src="assets/images/hills1.svg" alt=""/>
            </div>
            <div id="hills2" class="hills2">
                <img src="assets/images/hills2.svg" alt=""/>
            </div>
        </div>
    </div>
</section>



<section id="fishessection" class="fish_section">
    <div class="container-fluid">
        <div class="row">
            <div class="testimo-text hero-text">
                <h2 style="color:#4B6575;" id="herotext">Elevate Your Designs! Claim Your FREE <br>Assessment Today!</h2>
                <h2 id="herotext2">Don’t settle for average designs. <br>Transform them into captivating works of art!</h2>
                <form>
                    <input type="text" name="mail" placeholder="Email Address"/>
                    <button id="herobutton" class="herobutton" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"><a href="#">Elevate My Designs</a></button>
                </form>
            </div>
            <div id="water_darkgreen" class="water_darkgreen">
                <img src="assets/images/Water_darkgreen.webp" alt=""/>
            </div>
            <div id="water_midgreen" class="water_midgreen">
                <img src="assets/images/water_midgreen.webp" alt=""/>
            </div>
            <div id="water_lightgreen" class="water_lightgreen">
                <img src="assets/images/water_lightgreen.webp" alt=""/>
            </div>
            <div id="fish" class="fish">
                <img src="assets/images/fish.svg" alt=""/>
            </div>
        </div>
    </div>
</section>
<!--<section class="anoimation">-->
<!--    <img class="paper-plane" src="plane.webp" alt=""/>-->
<!--</section>-->



<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/wp-content/themes/hello-elementor/assets/js/app.js"></script>
</body>
</html>