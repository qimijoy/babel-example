export default function primaryConfig(api) {
	api.cache(true)

	const presets = [
		[
			"@babel/preset-env", {
				useBuiltIns: 'usage',
				corejs: "3.40"
			}
		]
	];

	const plugins = [];

	return {
		presets,
		plugins
	}
}
