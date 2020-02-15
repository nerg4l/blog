let mix = require('laravel-mix');

// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;

mix.disableNotifications();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.options({
    terser: {
        extractComments: false,
    },
})
    .js('assets/src/main.js', 'assets/dist/app.js')
    .sass('assets/src/main.scss', 'assets/dist/app.css', {
        sassOptions: {
            includePaths: ['node_modules'],
        },
    });
