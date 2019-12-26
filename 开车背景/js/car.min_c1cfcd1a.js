"use strict";
!function () {
  function e(e, t, a) {
    this.speed = 10,
    this.backdrop,
    this.tmp = [],
    this.easel = document.getElementById("gameView"),
    this.stage = new createjs.Stage("gameView"),
    createjs.Ticker.timingMode = createjs.Ticker.RAF
  }

  e.prototype = {
    init: function (e) {
      this.easel && this.preLoad(e)
    },
    preLoad: function (e) {
      function t() {
        var e = a.getResult("car"),
          t = a.getResult("effbomb"),
          i = a.getResult("effquick"),
          s = a.getResult("effslow"),
          d = a.getResult("bg1");
          this.drawBg(d),
          this.drawRole(e, t, i, s)
      }

      var a = new createjs.LoadQueue((!1));
      a.on("complete", t, this), a.loadManifest(e)
    },
    drawBg: function (e) {
      function t(e) {
        1 !== e.paused && (a.backdrop.y = a.speed + a.backdrop.y, a.copy.y = a.speed + a.copy.y, a.copy.y > -40 && (a.backdrop.y = a.copy.y + i), a.copy.y > -i - 100 && (a.copy.y = i + a.backdrop.y), a.stage.update(e))
      }

      var a = this;
      this.backdrop = new createjs.Bitmap(e),
        this.backdrop.x = 0,
        this.backdrop.y = 0,
        this.stage.addChild(a.backdrop),
        this.w = e.width, this.h = e.height;
      var i = -e.height;
      this.copy = new createjs.Bitmap(e),
        this.copy.x = 0,
        this.copy.y = i,
        a.stage.addChild(a.backdrop),
        a.stage.addChild(a.copy),
        createjs.Ticker.addEventListener("tick", t),
        this.tick = t;
    },
    drawRole: function (e, t, a, i) {
      var
        s = new createjs.Container,
        e = new createjs.Bitmap(e),
        t = new createjs.Bitmap(t),
        i = new createjs.Bitmap(i),
        a = new createjs.Bitmap(a);
      s.name = "role",
      s.addChild(e),
      s.addChild(t),
      s.addChild(a),
      s.addChild(i),
      a.x = -8,
      a.y = -4,
      t.x = -30,
      t.y = -8,
      i.x = 2,
      i.y = 0,
      t.name = "bomb",
      a.name = "quick",
      i.name = "slow",
      t.visible = !1,
      a.visible = !1,
      i.visible = !1,
      s.y = 970,
      s.x = 323,
      this.stage.addChild(s)
    }
  },
    window.CarGame = e
}();