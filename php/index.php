<?php 
include 'includes/header.php';

include 'includes/menu.php';

switch ($_GET['page']) {
    case 'home': 
        include 'pages/home.php';
        break;
    case 'users':
        include 'pages/users.php';
        break;
    case 'products':
        include 'pages/products.php';
        break;
    default:
        echo '<h1>404: page not found</h1>';        
}

include 'includes/footer.php';
