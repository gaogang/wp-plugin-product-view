import { registerBlockType } from '@wordpress/blocks';

import * as categories from './block-library/categories'

const registerBlocks = [
    categories
];

// register all the pre-defined blocks
function registerBlock (block) {
    const { Name, Settings } = block;
    registerBlockType(Name, Settings);
}

registerBlocks.forEach(registerBlock);