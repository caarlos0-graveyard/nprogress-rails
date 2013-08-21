$(function() {
  $(document).on('page:fetch', function() { NProgress.start(); });
  $(document).on('page:load',  function() { NProgress.done(); });
});
