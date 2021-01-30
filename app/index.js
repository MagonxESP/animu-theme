import $ from 'jquery';

function fixGalleryOverflow() {
    let $contentWrapper = $('#content-wrapper');
    let $content = $('#content');

    $contentWrapper.toggleClass('is-gallery', $content.hasClass('app-gallery'));
}

$(() => {

    let favicon = '/custom/animu-theme/core/img/favicon.ico';

    $('link[rel="icon"]').attr('href', favicon);
    $('link[rel="apple-touch-icon-precomposed"]').attr('href', favicon);


    $(document).on('click', '.view-switcher', () => {
        fixGalleryOverflow();
    });

    fixGalleryOverflow();
});