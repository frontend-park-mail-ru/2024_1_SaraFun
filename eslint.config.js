const importPlugin = require('eslint-plugin-import');

module.exports = {
	plugins: {
		import: importPlugin,
	},
	rules: {
		'semi': ['error', 'always'],

		'no-unused-vars': 'warn',

		'eqeqeq': ['error', 'always'],

		'no-var': 'error',

		'curly': 'error',

		'no-console': 'warn',

		'indent': ['error', 'tab'],

		'quotes': ['error', 'single'],

		'max-len': ['warn', { code: 110 }],

		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
			},
		],
	},
	ignores: ['dist/*']

};
	