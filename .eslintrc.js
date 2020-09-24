module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'prettier', 'plugin:nuxt/recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'linebreak-style': 'off',
    camelcase: [0, { properties: 'never' }],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
  }
}
