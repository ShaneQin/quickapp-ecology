import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  legacyOutput: true,
  external: [
    '@system.alarm',
    '@system.barcode',
    '@system.battery',
    '@system.bluetooth',
    '@system.brightness',
    '@system.calendar',
    '@system.clipboard',
    '@system.contact',
    '@system.device',
    '@service.exchange',
    '@system.file',
    '@system.geolocation',
    '@system.keyguard',
    '@system.network',
    '@system.package',
    '@system.prompt',
    '@system.record',
    '@system.request',
    '@system.share',
    '@system.shortcut',
    '@system.sms',
    '@system.storage',
    '@system.telecom',
    '@system.volume',
    '@system.webview',
    '@system.wifi',
    '@system.zip'
  ]
})