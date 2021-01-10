import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Wp Plugin Product View - categories – hello from the editor!', 'wp-plugin-product-view' ) }
		</p>
	);
}
