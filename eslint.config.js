const importPlugin = require('eslint-plugin-import');

module.exports = [
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			// Требует использования точки с запятой в конце каждой инструкции
			'semi': ['error', 'always'],

			// Предупреждение при наличии неиспользуемых переменных
			'no-unused-vars': 'warn',

			// Требует использования строго равенства (===) вместо нестрогого (==)
			'eqeqeq': ['error', 'always'],

			'no-var': 'error',

			// Требует использования фигурных скобок для всех условных операторов (if, else и т.д.)
			'curly': 'error',

			// Предупреждение при использовании console.log и других методов console
			// 'no-console': 'warn', вернем, когда в прод пустим

			// Требует отступа в 2 пробела
			'indent': ['error', 'tab'],

			// Требует использования одинарных кавычек для строк
			'quotes': ['error', 'single'],

			// Предупреждение, если длина строки превышает 80 символов
			'max-len': ['warn', { code: 110 }],

			// Правила для порядка импортов
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],
		},
	}
];