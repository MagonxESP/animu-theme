import $ from 'jquery';

$(() => {

    let favicon = '/custom/animu-theme/core/img/favicon.ico';

    $('link[rel="icon"]').attr('href', favicon);
    $('link[rel="apple-touch-icon-precomposed"]').attr('href', favicon);

});