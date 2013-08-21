$(function() {
  $(document).on('page:fetch', function() { NProgress.start(); });
  $(document).on('page:load',  function() { NProgress.done(); });
  $(document).on('page:restore', function() { NProgress.remove(); })
});
