<?php
/**
 * The header for our theme
 **
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage sso-deco
 * @since 1.0.0
 */

use ssoFramework\src\assets\Helper; ?>

<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="profile" href="https://gmpg.org/xfn/11"/>
	    <?php wp_enqueue_script("jquery"); ?>
        <?php wp_head(); ?>
    </head>
<body <?php body_class(); ?>>
    <header id="main-service">
        <div id="header">

        </div>
    </header>
    <header id="main-header">

    </header>