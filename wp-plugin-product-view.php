<?php
/**
 * Plugin Name:     Wp Plugin Product View
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.2.0
 * Author:          Gang Gao (gaogang@gmail.com)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     wp-plugin-product-view
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function init_product_view_blocks() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/wp-plugin-product-view-categories" block first.'
		);
	}
	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-wp-plugin-product-view-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	register_block_type( 'create-block/wp-plugin-product-view-categories', array(
		'editor_script' => 'create-block-wp-plugin-product-view-block-editor'
	));
}

add_action( 'init', 'init_product_view_blocks' );
