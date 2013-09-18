$(function() {
  $(document).on('ajaxStart', function() { NProgress.start(); });
  $(document).on('ajaxStop',  function() { NProgress.done();  });
});
