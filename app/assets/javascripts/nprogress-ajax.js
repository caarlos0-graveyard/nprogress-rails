jQuery(function() {
  jQuery(document).on('ajaxStart', function() { NProgress.start(); });
  jQuery(document).on('ajaxStop',  function() { NProgress.done();  });
});
