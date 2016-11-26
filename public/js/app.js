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

      if (num > 0 && num % 5 == 0) {
        var sub = $('#subtext');
        var subtexts = [
          "Shiny? Shiny.",
          "Cause' the chaining life is for me.",
          "Is it a 6IV Ditto?",
          "That doesn't look like a good nature to me.",
          "Oooh? Hidden Ability?",
          "I bet you need to spend more time chaining.",
          "Remember to Wonder Trade your rejects~",
          "Did you get a Pidgey in Wonder Trade.. Again..?",
          "I wonder what you're multitasking chaining with.",
          "That doesn't look like a high chain number.",
          "May the RNGesus be ever in your favor.",
          "I bet you're killing boredom with these flavor texts.",
          "You should get the Pokémon Super Music Collection on iTunes.",
          "I hope you have a music playlist playing..",
          "This is gonna take awhile.",
          "Are you sure you have a Shiny Charm?"
        ];
        var subtext = "Press spacebar to increment, R to reset.";

        sub.fadeOut(fade, function() {
          sub.text(subtexts[Math.floor(Math.random() * subtexts.length)])
            .fadeIn(fade * 3)
            .delay(2400)
            .fadeOut(fade * 3, function() {
              sub.text(subtext)
                .fadeIn(fade * 3);
            });
        });
      }
    });
});
