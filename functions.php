<?php

// =============================================================================
// Register Theme Support
// =============================================================================

// function register_theme_support() {
//     // Wordpress Title Tag
// 	add_theme_support( 'title-tag' );
    
// 	// Wordpress Thumbnails
// 	add_theme_support( 'post-thumbnails' );
    
// 	// Set Default Thumbnail Size
// 	set_post_thumbnail_size(125, 125, true);
    
// 	// Set Custom Thumbnail Sizes
// 	add_image_size( 'post-thumbnail-preview', 760, 428, true );
// 	add_image_size( 'post-thumbnail-feature', 1280, 720, true );
// 	add_image_size( 'post-thumbnail-banner', 1920, 1080, true );
    
// 	// Post Formats
// 	add_theme_support( 'post-formats',
//     array(
//         'aside',
//         'audio',
//         'chat',
//         'gallery',
//         'image',
//         'link',
//         'quote',
//         'status',
//         'video'
// 		)
//     );
    
// 	// Enable support for HTML5 markup
// 	add_theme_support( 'html5',
//     array(
//         'comment-list',
//         'comment-form',
//         'search-form',
//         'gallery',
//         'caption'
// 		)
//     );
    
//     // This theme uses wp_nav_menu() in one location.
//     register_nav_menus( array(
//         'menu-1' => esc_html__( 'Primary', 'sso' ),
//     ) );

//     /**
//      * Add support for core custom logo.
//      *
//      * @link https://codex.wordpress.org/Theme_Logo
//      */
//     add_theme_support( 'custom-logo', array(
//         'height'      => 250,
//         'width'       => 250,
//         'flex-width'  => true,
//         'flex-height' => true,
//     ) );

//     // Add theme support for selective refresh for widgets.
//     add_theme_support( 'customize-selective-refresh-widgets' );

//     // Set up the WordPress core custom background feature.
//     add_theme_support( 'custom-background', apply_filters( 'vsp_custom_background_args', array(
//         'default-color' => 'ffffff',
//         'default-image' => '',
//     ) ) );
// }

// add_action( 'after_setup_theme', 'register_theme_support' );
?>