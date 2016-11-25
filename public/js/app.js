$(function() {
  $(document)
    .keyup(function(evt) {
      var fade = 100;
      var el = $('#counter');
      var num = parseInt(el.text());

      if (evt.keyCode == 82) {
        num = 0;
      }
      if (evt.keyCode == 32) {
        num = num + 1;
      }

      el.fadeOut(fade, function() {
        el.text(num).fadeIn(fade);
      });
    });
});
