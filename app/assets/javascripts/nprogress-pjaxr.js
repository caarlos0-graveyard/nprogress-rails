$(function() {
  $(document).on('pjaxr:send',     function() { NProgress.start(); });
  $(document).on('pjaxr:complete', function() { NProgress.done();  });
});
