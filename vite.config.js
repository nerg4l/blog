import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    // plugins: [
    //     laravel({
    //         input: ['assets/src/main.js'],
    //         publicDirectory: 'assets/dist',
    //         refresh: true,
    //     }),
    // ],
    build: {
        outDir: 'assets/dist',
        lib: {
            name: 'nerg4l',
            fileName: 'script',
            entry: 'assets/src/main.js',
            formats: ['cjs'],
        },
    },
    resolve: {
        alias: {
            '~bootstrap': 'node_modules/bootstrap',
        }
    },
});
