import { registerBlockType } from '@wordpress/blocks';

import * as categories from './block-library/categories'
import * as productList from './block-library/productList'

const registerBlocks = [
    categories,
    productList
];

// register all the pre-defined blocks
function registerBlock (block) {
    const { Name, Settings } = block;
    registerBlockType(Name, Settings);
}

registerBlocks.forEach(registerBlock);