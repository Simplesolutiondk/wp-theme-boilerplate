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
        <script>
            var currentTermId = <?php echo Helper::getCurrentTermId(); ?>;
            var url = "<?php echo get_site_url(); ?>";
            var urlSlug = "<?php echo Helper::getCurrentSlug(); ?>";
            var postid = <?php if (get_the_ID()){ echo get_the_ID(); } else { echo 'false'; } ?>;
            var posttype = <?php if (get_the_ID()){ echo '"'.get_post_type(get_the_ID()).'"'; } else { echo '""'; } ?>;
            var is_logged_in = <?php echo is_user_logged_in() ? 'true' : 'false'; ?>;
            var current_user = <?php echo get_current_user_id(); ?>;
        </script>
    </head>
<body <?php body_class(); ?>>
    <header id="main-service">
        <div id="header">

        </div>
    </header>
    <header id="main-header">

    </header>