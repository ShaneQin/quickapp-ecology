import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  legacyOutput: true,
  external: [
    '@system.device',
    '@system.network',
    '@system.prompt',
    '@system.request',
    '@system.share',
    '@system.shortcut',
    '@system.storage',
    '@system.webview'
  ]
})