import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        preserveSymlinks: true,
        alias: {
            '@pages': '/src/pages',
            '@components': '/src/components',
            '@utils': '/src/utils',
            '@styles': '/src/styles',
            '@services': '/src/services',
            '@interfaces': '/src/interfaces',
            '@redux': '/src/redux',
        },
    },
});
