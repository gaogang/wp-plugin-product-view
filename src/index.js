/**
 * Master server side script. It maintains a block registery and makes sure all the block
 * defined in the registry are registered in Wordpress.
 * 
 * @author Gang Gao
 */
import { registerBlockType } from '@wordpress/blocks';

import * as categories from './block-library/categories'
import * as productList from './block-library/productList'

// Pre-defined block registry
const blockRegistry = [
    categories,
    productList
];

/**
 * Register a block
 * @param {*} block 
 */
function registerBlock (block) {
    const { Name, Settings } = block;
    registerBlockType(Name, Settings);
}

// Register all the blocks in the block registry
blockRegistry.forEach(registerBlock);