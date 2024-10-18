import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    languageOptions: {
      globals: {
        browser: globals.browser,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
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
      // 'no-console': 'warn',
      
      // Требует отступа в 2 пробела
      'indent': ['error', 2],
      
      // Требует использования одинарных кавычек для строк
      'quotes': ['error', 'single'],
      
      // Предупреждение, если длина строки превышает 80 символов
      // 'max-len': ['warn', { code: 80 }],
      
      // Отключает правило, запрещающее использование неопределенных переменных
      'no-undef': 'off',
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },
];