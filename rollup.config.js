import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import polyfills from 'rollup-plugin-node-polyfills'

export default {
    input: './src/index.js',
    output: { file: 'dist/sharedb-client.js', format: 'esm' },
    plugins: [
        resolve(),
        commonjs({ include: 'node_modules/**' }),
        polyfills(),
    ],
}