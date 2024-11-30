await Bun.build({
  outdir: './dist',
  entrypoints: ['./src/index.ts'],
  minify: { whitespace: true },
  target: 'bun',
});
