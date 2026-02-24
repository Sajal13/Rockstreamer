module.exports = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    'react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^@/',
    '^components/(.*)$',
    '^.types',
    '^.styles',
    '^[./]',
  ],
};