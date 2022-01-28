<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Turismo - Puno</title>
  <meta content="" name="description">

  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/inicial/css_discover.min.css">
  <link rel="stylesheet" href="assets/css/inicial/css_fanpage.min.css">
  <link rel="stylesheet" href="assets/css/inicial/css_redes.min.css">
  <link rel="stylesheet" href="assets/css/inicial/css_slider.min.css">
  <link rel="stylesheet" href="assets/css/inicial/estilos.min.css">
  <link rel="stylesheet" href="assets/css/inicial/owl.carousel.min.css">
  <link rel="stylesheet" href="assets/css/inicial/Principal.css">
  <link rel="stylesheet" href="assets/css/inicial/css_blog.min.css">
</head>

<body> 
      
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span>TURISMO</span>
      </a>
     <?php
     include "nav.php";
     ?>
    </div>

  </header><!-- End Header -->
    
    
    <?php
    include "titulo.php";
    ?>
  <main id="main">

    
    <?php
        include "atractivos.php";
        ?>
    <?php
        include "complejos.php";
    ?>
    <?php
        include "emprendimientos.php";
    ?>
    <!--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
    <?php
        include "video.php"
    ?>
    <?php
        include "auspicia.php"
    ?>

    <?php
     include "footer.php";
     ?>
  </main><!-- End #main -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/jsfile.js"></script>
  <script src="assets/js/inicio/jquery-ui.js"></script>
  <script src="assets/js/inicio/jquery.js"></script>
  <script src="assets/js/inicio/js_slider.min.js"></script>
  <script src="assets/js/inicio/owl.carousel.min.js"></script>
  <script src="assets/js/inicio/Principal.js"></script>
  <script src="assets/js/inicio/scrollreveal.js"></script>
  
  </body>
</html>