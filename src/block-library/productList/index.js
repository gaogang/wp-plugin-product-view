import { __ } from '@wordpress/i18n';

import Edit from './edit';
import Save from './save';

export const Name = 'create-block/wp-plugin-product-view-product-list';

export const Settings = {

	apiVersion: 2,

	title: __(
		'Product View - Product List',
		'wp-plugin-product-view'
	),

	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'wp-plugin-product-view'
	),

	category: 'widgets',

	icon: 'carrot',

	supports: {
		html: false,
	},

	edit: Edit,

	save: Save,
};
