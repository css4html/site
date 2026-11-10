import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:4321',
    channel: 'chrome',
    viewport: { width: 1365, height: 1000 },
    launchOptions: { args: ['--no-sandbox'] },
  },
});
