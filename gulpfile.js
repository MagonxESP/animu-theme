require('@magonxesp/gulpfilejs')({
    js: {
        webpack_config_path: './webpack.config.js',
    },
    scss: {
        src: './core/scss/styles.scss',
        dist: './core/css',
    }
});