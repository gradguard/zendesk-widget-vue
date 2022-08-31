/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import vue from 'rollup-plugin-vue';

const common = {
  external: ['zendesk', 'vue3'],
  watch: {
    include: 'src/**',
    exclude: ['node_modules/**', 'tests'],
  },
};
export default [
  {
    input: 'src/zendesk/index.ts',
    output: {
      dir: 'build',
      format: 'cjs',
    },
    plugins: [resolve(), typescript(), vue(), dts()],
    ...common,
  },
  {
    input: 'src/zendesk/index.ts',
    output: {
      dir: 'build',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [resolve(), typescript(), vue()],
    ...common,
  },
];
