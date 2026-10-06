import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // public/Assets would clash with Vite's default "assets" output dir on
    // case-insensitive filesystems (Windows), so bundle into "static" instead.
    build: { assetsDir: 'static', emptyOutDir: true },
});
