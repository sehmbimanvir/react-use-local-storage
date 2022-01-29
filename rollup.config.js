export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        }
    ],
    watch: {
        chokidar: {},
        exclude: ['node_modules/**']
      }
  };