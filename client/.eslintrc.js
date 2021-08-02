module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		semi: [2, 'always'],
	},
	ignorePatterns: ['dist/', 'node_modules/'],
};
