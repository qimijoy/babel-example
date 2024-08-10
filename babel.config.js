export default function primaryConfig(api) {
	api.cache(true)

	const presets = [
		[
			"@babel/preset-env", {
				useBuiltIns: 'usage',
				corejs: "3.38"
			}
		]
	];

	const plugins = [];

	return {
		presets,
		plugins
	}
}
