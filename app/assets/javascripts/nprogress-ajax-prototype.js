Ajax.Responders.register({
  onCreate: function() {
    NProgress.start();
  },
  onComplete: function() {
    NProgress.done();
  }
});
