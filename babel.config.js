/**
 * Babel configuration function
 * @param {object} api - The api object exposes everything Babel itself exposes from its index module, along
 * with config-file specific APIs
 * @returns {object} { presets, plugins }
 */
export default function primaryConfig(api) {
	api.cache(true);

	const presets = [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: '3.41',
			},
		],
	];

	const plugins = [];

	return {
		presets,
		plugins,
	};
}
