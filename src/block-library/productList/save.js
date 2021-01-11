import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Wp Plugin Product View product list – hello from the saved content!',
				'wp-plugin-product-view'
			) }
		</p>
	);
}