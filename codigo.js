//alert("hola amoor");

var typed = new Typed(".typed", {
  strings: ["ME PERDONAS"],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
  onBegin: function (self) {
    prettyLog("onBegin " + self);
  },
  onComplete: function (self) {
    prettyLog("onCmplete " + self);
  },
  preStringTyped: function (pos, self) {
    prettyLog("preStringTyped " + pos + " " + self);
  },
  onStringTyped: function (pos, self) {
    prettyLog("onStringTyped " + pos + " " + self);
  },
  onLastStringBackspaced: function (self) {
    prettyLog("onLastStringBackspaced " + self);
  },
  onTypingPaused: function (pos, self) {
    prettyLog("onTypingPaused " + pos + " " + self);
  },
  onTypingResumed: function (pos, self) {
    prettyLog("onTypingResumed " + pos + " " + self);
  },
  onReset: function (self) {
    prettyLog("onReset " + self);
  },
  onStop: function (pos, self) {
    prettyLog("onStop " + pos + " " + self);
  },
  onStart: function (pos, self) {
    prettyLog("onStart " + pos + " " + self);
  },
  onDestroy: function (self) {
    prettyLog("onDestroy " + self);
  },
});
