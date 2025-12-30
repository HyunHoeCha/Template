import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores(['dist', 'node_modules']),

	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser
		},
		plugins: {
			import: importPlugin
		},
		rules: {
			'no-unused-vars': 'off',

			'@typescript-eslint/no-unused-vars': [
				'error',

				{ varsIgnorePattern: '^[A-Z_]' }
			],

			'react/react-in-jsx-scope': 'off',

			'import/order': [
				'warn',

				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],

					'newlines-between': 'always',

					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],

			'import/newline-after-import': 'warn',

			'import/no-duplicates': 'warn'
		},

		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.json'
				}
			}
		}
	}
])
