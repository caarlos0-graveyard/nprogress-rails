jQuery(function() {
  jQuery(document)
    .on('turbolinks:click', function() {
        NProgress.start();
    })
    .on('turbolinks:render', function() {
        NProgress.done();
        NProgress.remove();
    });
});
