$(function() {
  $(document).on('pjax:send',     function() { NProgress.start(); });
  $(document).on('pjax:complete', function() { NProgress.done();  });
});
