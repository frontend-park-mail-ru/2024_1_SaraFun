import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        browser: globals.browser,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
    extends: [
      'eslint:recommended', // Расширяем стандартные рекомендации ESLint
      'plugin:import/errors', // Ошибки плагина import
      'plugin:import/warnings', // Предупреждения плагина import
    ],
    rules: {
      // Требует использования точки с запятой в конце каждой инструкции
      'semi': ['error', 'always'],

      // Предупреждение при наличии неиспользуемых переменных
      'no-unused-vars': 'warn',

      // Требует использования строго равенства (===) вместо нестрогого (==)
      'eqeqeq': ['error', 'always'],

      // Требует использования фигурных скобок для всех условных операторов (if, else и т.д.)
      'curly': 'error',

      // Предупреждение при использовании console.log и других методов console
      'no-console': 'warn',

      // Требует отступа в 2 пробела
      'indent': ['error', 2],

      // Требует использования одинарных кавычек для строк
      'quotes': ['error', 'single'],

      // Предупреждение, если длина строки превышает 80 символов
      'max-len': ['warn', { code: 80 }],

      // Правила для порядка импортов
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },
  pluginJs.configs.recommended,
];
