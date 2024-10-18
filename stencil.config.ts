import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import tailwind from 'tailwindcss';

export const config: Config = {
  namespace: 'stencil-first-try',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [
    postcss({
      plugins: [tailwind()],
    }),
  ],
};
