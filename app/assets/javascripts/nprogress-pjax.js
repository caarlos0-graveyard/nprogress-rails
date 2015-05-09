jQuery(function() {
  jQuery(document).on('pjax:send',     function() { NProgress.start(); });
  jQuery(document).on('pjax:complete', function() { NProgress.done();  });
});
