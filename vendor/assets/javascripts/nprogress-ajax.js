$(function() {
  $(document).on('ajaxStart',    function() { NProgress.start(); });
  $(document).on('ajaxComplete', function() { NProgress.done();  });
});
