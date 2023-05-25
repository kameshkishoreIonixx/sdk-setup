import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';


// Exclude dev dependencies:
const EXTERNAL = [
  ...Object.keys(pkg.dependencies),

  // See issues https://github.com/rollup/rollup/issues/3684, https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency:
  'react/jsx-runtime',
  'prop-types',
  'react-is',
  'react-payment-inputs/images',
  '@mui/material/styles',
  '@apollo/client/link/context',
  /@mui\/icons\-material\/.*/,
];
export default [{
  input: 'src/index.ts',

  output: [{
    dir: 'dist/esm',
    format: 'esm',
    preserveModules: true,
    globals: {
      react: 'React',
    },
    exports: 'named',
  }, {
    dir: 'dist/cjs',
    format: 'cjs',
    preserveModules: true,
    sourcemap: false,
    globals: {
      react: 'React',
    },
    exports: 'named',
  }],

  external: EXTERNAL,

  plugins: [
    // peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
    // externals(), // https://www.npmjs.cyarn om/package/rollup-plugin-node-externals.
    resolve(),
    commonjs({
      ignoreGlobal: true,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.json',
    }),
    terser(),
  ].filter(Boolean),

}, {
  input: './dist/types/index.d.ts',
  output: [{ file: './dist/index.d.ts', format: 'esm' }],
  external: EXTERNAL,
  plugins: [dts.default()],
}];
