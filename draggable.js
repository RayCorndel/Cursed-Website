
$(document).ready(function() {
    $("#stage").throwable({
      drag: true,
      gravity: {
        x: 0,
        y: 0
      },
      impulse: {
        f: 52,
        p: {
          x: 0,
          y: 0
        }
      },
      autostart: false,
      bounce: 0.5,
      damping: 100
    });
  });