<?php
/*
Plugin Name: Custom Accordion Block
Description: This is Accordion block plugin which will add Custom Accordion Block to your site. This Accordion block will allow you to design your accordion by providing custom CSS settings.
Author: mansi-trivedi
Version: 1.2
Author URI: https://profiles.wordpress.org/mansi-trivedi
Text Domain: gca
*/

/**
 * Define all global constants.
 *
 */
defined( 'ABSPATH' ) || exit;
if( !defined('gca_version') ) {
	define( 'gca_version', '1.2' ); // Plugin version
}
if( !defined('gca_plugin_path') ) {
	define( 'gca_plugin_path', plugin_dir_url(__FILE__) ); // Plugin version
}

/**
 * Add action for enqueue block editor assets.
 *
 */
add_action( 'enqueue_block_editor_assets', 'gca_block_jsx_backend_enqueue' );
/**
 * Add call back function for enqueue block editor assets.
 *
 */
function gca_block_jsx_backend_enqueue() {

	/**
	 * Enqueue block.js file,
	 */
	wp_enqueue_script( 'gca-block-backend-script', // Unique handle.
		gca_plugin_path."js/block.build.js", // block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		'1');

	/**
	 * Enqueue editor-style file,
	 */
	wp_enqueue_style( 'gca-accordion-editor-css', gca_plugin_path."css/accordion-editor-style.css" );
}

/**
 * Add action for enqueue scripts.
 *
 */
add_action( 'wp_enqueue_scripts', 'gca_frontend_script_enqueue' );
/**
 * Add call back function for enqueue scripts.
 *
 */
function gca_frontend_script_enqueue() {

	// enqueue jquery.js
	wp_enqueue_script( "jquery" );

	// register custom-script.js
	wp_register_script( 'gca-custom-script', gca_plugin_path."js/custom-script.js" , "", gca_version );

	// enqueue custom-script.js
	wp_enqueue_script( 'gca-custom-script', gca_plugin_path."js/custom-script.js", '', gca_version, true );

	// register accordion-frontend-style.css
	wp_enqueue_style( 'gca-accordion-editor-css', gca_plugin_path."css/accordion-frontend-style.css" );
}