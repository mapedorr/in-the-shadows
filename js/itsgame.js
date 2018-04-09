(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var BasicGame = {
  language: "es",
  currentLevel: 1,
  deaths: 0,
  rest: 0,
  setLanguage: function (newLanguage) {
    this.language = newLanguage;
    return this.getCode();
  },
  setDay: function (n) {
    this.currentLevel = n;
    return this.getCode();
  },
  addDeath: function () {
    this.deaths++;
    return this.getCode();
  },
  setRest: function () {
    this.rest = 1;
    return this.getCode();
  },
  getCode: function () {
    var level = this.currentLevel;
    return this.rest +
      '' + this.deaths +
      '' + ((level < 10) ? ('0' + level) : level) +
      '' + this.language;
  },
  readCode: function (code) {
    if (code.length < 4) return;

    if (code.length > 4) {
      this.language = code.slice(code.length - 2) || this.language;
      code = code.slice(0, code.length - 2);
    }

    this.currentLevel = parseInt(code.slice(code.length - 2));
    this.deaths = parseInt(code.slice(1, code.length - 2));
    this.rest = parseInt(code.charAt(0));
  },
  getDeaths: function () {
    return this.deaths;
  },
  reset: function () {
    this.currentLevel = 1;
    this.deaths = 0;
    this.rest = 0;
  },
  changeHTMLBackground: function (color) {
    document.body.style.backgroundColor = color;

  }
};

module.exports = BasicGame;
},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
// levels for testing:
// 4 (free space for testing jumps)
var BasicGame = require('BasicGame');

BasicGame.Days = function () {
  this.days = {
    1: {
      "number": 1095,
      "text": {
        "en": "Maybe it will be there forever",
        "es": "Esto me acompañará siempre"
      },
      "waitTime": 3
    },
    2: {
      "number": 998,
      "text": {
        "en": "Sometimes it comes back",
        "es": "Un par de píldoras pueden ayudar"
      },
      "waitTime": 4
    },
    3: {
      "number": 912,
      "text": {
        "en": "It is here...again",
        "es": "Aún a veces lo recuerdo"
      },
      "waitTime": 3
    },
    4: {
      "number": 839,
      "text": {
        "en": "Why am I thinking about that?",
        "es": "Ya no necesito tantas píldoras"
      },
      "waitTime": 3
    },
    5: {
      "number": 766,
      "text": {
        "en": "It's here",
        "es": "Todos parecen haberlo olvidado"
      },
      "waitTime": 4
    },
    6: {
      "number": 730,
      "text": {
        "en": "No again, please",
        "es": "Algún día se lo contaré a alguien"
      },
      "waitTime": 4
    },
    7: {
      "number": 657,
      "text": {
        "en": "I thought I had overcome it",
        "es": "¡Noooo! No puedo volver a pensar en eso"
      },
      "waitTime": 4
    },
    8: {
      "number": 511,
      "text": {
        "en": "Another day...and it's here",
        "es": "¿Por qué estoy pensando en eso?"
      },
      "waitTime": 4
    },
    9: {
      "number": 401,
      "text": {
        "en": "I'm thinking about it",
        "es": "Pensé que ya lo había superado"
      },
      "waitTime": 4
    },
    10: {
      "number": 365,
      "text": {
        "en": "(peaceful days)",
        "es": "No puedo creer que ya haya pasado un año"
      },
      "waitTime": 5
    },
    11: {
      "number": 313,
      "text": {
        "en": "What I have done is not as wrong as I thought",
        "es": "Dentro de poco habrá pasado un año"
      },
      "waitTime": 5
    },
    12: {
      "number": 248,
      "text": {
        "en": "I can't believe no one cares about it",
        "es": "Su familia parece feliz ahora"
      },
      "waitTime": 5
    },
    13: {
      "number": 212,
      "text": {
        "en": "Two months has passed and no one talks about it, that's good",
        "es": "Pocos lo recuerdan ya"
      },
      "waitTime": 6
    },
    14: {
      "number": 186,
      "text": {
        "en": "I must admit it, my life has improved after that",
        "es": "Se lo merecía, lo sé"
      },
      "waitTime": 5
    },
    15: {
      "number": 171,
      "text": {
        "en": "It is odd, is not affecting me",
        "es": "He estado pensando en eso, no puedo concentrarme"
      },
      "waitTime": 3
    },
    16: {
      "number": 156,
      "text": {
        "en": "No one have been noticed it...could be so insignificant?",
        "es": "Tengo que consumir menos pastillas"
      },
      "waitTime": 5
    },
    17: {
      "number": 101,
      "text": {
        "en": "How could I thought it isn't wrong? It is wrong!",
        "es": "...ughh...ughhh...sólo fue una pesadilla...tranquila"
      },
      "waitTime": 4
    },
    18: {
      "number": 90,
      "text": {
        "en": "Maybe it isn't as wrong as I thought",
        "es": "Han pasado casi 3 meses, no puedo creerlo"
      },
      "waitTime": 4
    },
    19: {
      "number": 74,
      "text": {
        "en": "No one cares about it, that's weird",
        "es": "Una banda fue culpada. No van a seguir buscando, tranquila"
      },
      "waitTime": 4
    },
    20: {
      "number": 35,
      "text": {
        "en": "(cool down days)",
        "es": "Mi mamá ya notó lo de las pastillas"
      },
      "waitTime": 3
    },
    21: {
      "number": 9,
      "text": {
        "en": "I'm a bad person",
        "es": "Hoy supe que tienen pistas..."
      },
      "waitTime": 3
    },
    22: {
      "number": 8,
      "text": {
        "en": "What if someone goes to the appartment?",
        "es": "En las noticias dijeron que fue un robo"
      },
      "waitTime": 4
    },
    23: {
      "number": 7,
      "text": {
        "en": "How could I do it?...how could I?",
        "es": "Su familia está sufriendo..."
      },
      "waitTime": 3
    },
    24: {
      "number": 6,
      "text": {
        "en": "Brother: You have to calm down, I told you it wouldn't be easy",
        "es": "Hoy me pareció verlo en la calle. ¡Eso no puede ser!"
      },
      "waitTime": 5
    },
    25: {
      "number": 5,
      "text": {
        "en": "I must talk with my brother",
        "es": "¡No puedo más! Tengo que confesar lo que hice"
      },
      "waitTime": 4
    },
    26: {
      "number": 4,
      "text": {
        "en": "Don't don't don't...there must be something I can do",
        "es": "Ernesto era un maldito borracho bueno para nada"
      },
      "waitTime": 6
    },
    27: {
      "number": 3,
      "text": {
        "en": "I have to tell everything...I...must...",
        "es": "La policía ha estado preguntando cosas, ¿qué voy a hacer?"
      },
      "waitTime": 6
    },
    28: {
      "number": 2,
      "text": {
        "en": "...maybe she deserved it...but..who am I to judge?",
        "es": "Tranquila, sabes que él lo merecía"
      },
      "waitTime": 7
    },
    29: {
      "number": 1,
      "text": {
        "en": "She didn't deserve it...",
        "es": "Tengo que...confesar...te...tengo que..."
      },
      "waitTime": 3
    },
    30: {
      "number": 0,
      "text": {
        "en": "...oh...what I've done?",
        "es": "¿Qué he hecho? ¿¡QUÉ HE HECHOOO!?"
      },
      "waitTime": 3
    }
  };
};

BasicGame.Days.prototype.getDay = function (dayIndex) {
  if (!this.days[dayIndex]) return { "number": "???" };
  return this.days[dayIndex];
};
},{"BasicGame":1}],4:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Method that set the default values for the properties of the Eye object.
 * 
 * @param {Object} game    The Object of Phaser game
 * @param {Object} gameObj The Object of BasicGame.Game
 */
BasicGame.Eye = function (game, gameObj) {
  // constants
  this.ZONE_SIZE = game.world.width / 3;
  // X radius >> horizontal half-size of the eyelid fill
  this.LATERAL_CANTHUS_DISTANCE = (191 / 2) * 0.9;
  // Y radius >> vertical half-size of the eyelid fill
  this.LOWER_EYELID_DISTANCE = (96 / 2) * 0.9;
  this.RESTART_SEARCH_DELAY = 1200;
  // (!) define the patterns for the EYE
  // each pattern is formed by a series of steps, each steps defines:
  // a start position (sp), an end position (ep) and a movement time (mt)
  //   [
  //     p1[step1[sp, ep, mt], step2[sp, ep, mt]...stepX[sp, ep, mt]],
  //     p2[step1[sp, ep, mt], step2[sp, ep, mt]...stepX[sp, ep, mt]],
  //     ...
  //     pY[step1[sp, ep, mt], step2[sp, ep, mt]...stepX[sp, ep, mt]],
  //   ]
  this.PATTERNS = [
    [[0, 3, 1], [3, 6, 2], [6, 0, 1]], // this will be always the first pattern
    [[0, 1, 0.5], [1, 4, 1], [4, 2, 1], [2, 5, 2], [5, 0, 1]],
    [[0, 3, 0.2], [3, 6, 0.4], [6, 0, 0.2]],
    [[0, 4, 0.5], [4, 1, 1], [1, 5, 1], [5, 2, 2], [2, 0, 1]]
  ];

  // destroyable objects
  this.eye = null;
  this.viewZone = null;
  this.pupil = null;
  this.pupilMask = null;
  this.bitmap = null;
  this.laughSound = null;
  this.angerSound = null;
  this.viewZoneMovementTween = null;
  this.pupilMovementTween = null;
  this.invisibleZoneImage = null;
  this.invisibleZoneMask = null;

  // global properties
  this.game = game;
  this.gameObj = gameObj;
  this.anger = null;
  this.shooting = null;
  this.searching = null;
  this.levelEnded = null;
  this.currentPatternId = -1;
  this.usedPatterns = 0;
  this.movementTime = null;
  this.xDistanceMax = null;
  this.eyeCenterYOffset = null;
  this.currentPatternCompleted = true;

  // things I can take from this.game ═╗
  this.playerObj = null;
  this.level = null;
  this.lightning = null;
  // ╚═════════════════════════════════╝
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.Eye.prototype.create = function (playerObj, level, lightning) {
  // set the default values for some properties
  this.playerObj = playerObj;
  this.level = level;
  this.lightning = lightning;

  // add the sprite of the eye
  this.eye = this.game.add.sprite(this.game.world.width / 2, 84, 'eye', 0);
  this.eye.originalX = this.eye.x;
  this.eye.originalY = this.eye.y;
  this.eye.anchor.setTo(0.5, 0.5);

  // add the  sprite of the pupil
  this.pupil = this.game.add.image(this.eye.x, this.eye.y + 25, 'pupil');
  this.pupil.anchor.setTo(0.5, 0.5);

  // create the mask for the pupil
  this.pupilMask = this.game.add.graphics(this.eye.x - 95.77, this.eye.y);
  this.pupilMask.beginFill(0xff0000);
  this.pupilMask.bezierCurveTo(0, 1, 90, 111, 193, 0);
  this.pupilMask.bezierCurveTo(193, 0, 110, -106, 0, -1);
  this.pupil.mask = this.pupilMask;

  // create the array of key positions for the pupil (this will be linked to
  // the position of the view zone)
  this.pupilImagePositions = {
    '3': this.eye.centerX - this.LATERAL_CANTHUS_DISTANCE / 1.4,
    '2': this.eye.centerX - this.LATERAL_CANTHUS_DISTANCE / 2.4,
    '1': this.eye.centerX - this.LATERAL_CANTHUS_DISTANCE / 4.4,
    '0': this.eye.centerX,
    '4': this.eye.centerX + this.LATERAL_CANTHUS_DISTANCE / 4.4,
    '5': this.eye.centerX + this.LATERAL_CANTHUS_DISTANCE / 2.4,
    '6': this.eye.centerX + this.LATERAL_CANTHUS_DISTANCE / 1.4
  };

  this.invisibleZoneMask = this.game.add.graphics(0, 0);
  this.invisibleZoneMask.beginFill(0xffffff);
  this.invisibleZoneMask.drawRect(-this.ZONE_SIZE, 0, this.ZONE_SIZE * 2, this.game.world.height);
  this.invisibleZoneMask.drawRect(this.ZONE_SIZE * 2, 0, this.ZONE_SIZE * 2, this.game.world.height);
  this.invisibleZoneMask.endFill();

  this.invisibleZoneImage = this.game.add.image(-this.game.world.width, 0, 'credits_background');
  this.invisibleZoneImage.width = this.game.world.width * 3;
  this.invisibleZoneImage.height = this.game.world.height;
  this.invisibleZoneImage.alpha = .3;
  this.invisibleZoneImage.mask = this.invisibleZoneMask;
  this.invisibleZoneImage.alpha = 0;

  // create the view zones
  this.viewZone = this.game.add.image(this.eye.position.x - this.ZONE_SIZE / 2, 0, 'view_zone');
  this.viewZone.alpha = 0;

  // calculate and store the key positions of the view zone
  var zoneDiv = this.ZONE_SIZE / 3;
  this.viewZone.positions = {
    '3': 0,
    '2': zoneDiv,
    '1': zoneDiv * 2,
    '0': this.viewZone.position.x,
    '4': this.viewZone.position.x + zoneDiv,
    '5': this.viewZone.position.x + zoneDiv * 2,
    '6': this.game.world.width - this.ZONE_SIZE
  };

  // create a bitmap texture for drawing lines
  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    this.bitmap = this.game.add.bitmapData(this.game.width, this.game.height);
    this.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
    this.bitmap.context.strokeStyle = 'rgb(255, 255, 255)';
    this.game.add.image(0, 0, this.bitmap);
  }

  // create the lightning for killing the player
  this.lightning.create(this.eye, this.playerObj, this.level);
  this.lightningTimer = 0;

  // ---------------------------------------------------------------------------
  // setup the sounds
  if (!this.laughSound) {
    this.laughSound = this.game.add.sound('eye', 0.1);
  }

  if (!this.angerSound) {
    this.angerSound = this.game.add.sound('eye-anger', 0.8);
  }

  // ---------------------------------------------------------------------------
  // set global properties
  this.shooting = false;
  this.searching = false;
  this.levelEnded = false;
  this.usedPatterns = 0;
  this.anger = false;
  this.xDistanceMax = Math.abs((this.pupilImagePositions['6']) - this.eye.centerX);
  this.eyeCenterYOffset = this.eye.centerY - 40;
};

BasicGame.Eye.prototype.update = function () {
  var checkLeft = false;
  var checkRight = false;
  var canSeePlayer = false;

  this.gameObj.light.lightGroup.children[0].x = this.pupil.x;
  this.gameObj.light.lightGroup.children[0].y = this.pupil.y;
  this.invisibleZoneMask.centerX = this.viewZone.centerX + this.ZONE_SIZE;

  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    // clear the bitmap where we are drawing our lines
    this.bitmap.context.clearRect(0, 0, this.game.width, this.game.height);
  }

  if (this.levelEnded === true) {
    // the player is dead
    return;
  }

  if (this.gameObj.isLoadingLevel === true) {
    this.eye.frame = 0;
    this.pupil.x = this.pupilImagePositions['0'];
    return;
  }

  // ---------------------------------------------------------------------------
  // ray casting

  // test if the target can see the eye by casting a ray (a line) towards the eye.
  // if the ray intersects any walls before it intersects the eye then the wall
  // is in the way.
  canSeePlayer = this.isPlayerInsideViewZone();

  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    if (canSeePlayer === true) {
      this.playerObj.playerSprite.tint = 0x990000;
    }
    else {
      this.playerObj.playerSprite.tint = 0xFFFFFF;
    }
  }

  // check if the player is in the side of vision of the EYE
  if (this.searching === true && canSeePlayer === true) {
    // check which of the points in the player should be used for "in shadow"
    // evaluation
    if (this.playerObj.playerSprite.left > this.viewZone.left) {
      checkLeft = true;
    }

    if (this.playerObj.playerSprite.right < this.viewZone.right) {
      checkRight = true;
    }

    if (this.playerObj.isInShadow(checkLeft, checkRight) === false) {
      if (BasicGame.Game.developmentMode === true) { // [ development mode ]
        // red, of dead
        this.playerObj.playerSprite.tint = 0xFF0000;
      }

      // shoot to the player
      if (this.shooting === false) {
        this.shootPlayer(this.playerObj.playerSprite);
      }
    }
    else {
      if (BasicGame.Game.developmentMode === true) { // [ development mode ]
        // blue, of nor dead
        this.playerObj.playerSprite.tint = 0x00FFFF;
      }
    }
  }

  // This just tells the engine it should update the texture cache
  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    this.bitmap.dirty = true;
  }
};

BasicGame.Eye.prototype.shutdown = function () {
  this.viewZone.destroy();
  this.invisibleZoneImage.destroy();
  this.invisibleZoneMask.destroy();
  this.pupil.destroy();
  this.pupilMask.destroy();
  this.eye.destroy();
  if (this.bitmap) {
    this.bitmap.destroy();
  }
  this.stopEyeTweens();
  this.laughSound.destroy();
  this.angerSound.destroy();
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

/**
 * Method that checks if the player is inside the view zone of the EYE.
 */
BasicGame.Eye.prototype.isPlayerInsideViewZone = function () {
  if (this.viewZone.alpha > 0) {
    if ((this.playerObj.playerSprite.right >= this.viewZone.left + this.playerObj.playerSprite.width) &&
      this.playerObj.playerSprite.right < this.viewZone.right) {
      return true;
    }

    if (this.playerObj.playerSprite.left > this.viewZone.left &&
      (this.playerObj.playerSprite.left <= this.viewZone.right - this.playerObj.playerSprite.width)) {
      return true;
    }
  }
  return false;
};

/**
 * Method that define the pattern for seeking the player, setup and plays the
 * tweens for both the pupil and the view zone.
 * 
 * @param  {boolean} delay Defines if the seeking should be wait a while before
 *                         starting
 */
BasicGame.Eye.prototype.initSearch = function (delay) {
  if (this.levelEnded === true) {
    return;
  }

  // check if it is necessary to wait before starting the search
  if (delay) {
    this.gameObj.helper.timer(delay,
      function () {
        this.initSearch();
      },
      this);
    return;
  }

  // play the search animation in the EYE's sprite
  this.eye.frame = 0;

  // set the flag that indicates if the EYE is seeking for the player
  this.searching = true;
  this.shooting = false;

  // pick a pattern to start the search
  if (this.currentPatternCompleted === true) {
    this.setPattern();
  }
  else {
    this.viewZone.alpha = 1;
    this.pupil.alpha = 1;
    this.invisibleZoneImage.alpha = .5;

    this.nextStepInPattern(100);
  }

};

BasicGame.Eye.prototype.stopSearch = function () {
  this.viewZoneMovementTween.stop();
  this.pupilMovementTween.stop();
  this.searching = false;
};

BasicGame.Eye.prototype.setPattern = function () {
  var intent = 0;
  var newPatternIndex = 0;

  // set the defaults for the pupil and the view zone
  this.viewZone.x = this.viewZone.positions['0'];
  this.viewZone.alpha = 1;
  this.pupil.x = this.pupilImagePositions['0'];
  this.pupil.alpha = 1;
  this.invisibleZoneImage.alpha = .5;

  this.lap = 0;
  this.currentPatternCompleted = false;

  // define if the pattern will be used reversed
  this.patternReversed = Math.random() > 0.5 ? true : false;

  if (this.usedPatterns === 0) {
    this.currentPatternIdIndex = 0;
    this.currentPatternId = this.currentPatternIdIndex;

    // at level start, init the search in the opposite direction of player's spawn
    // position (player on left then this.patternReversed equals true)
    this.patternReversed = this.gameObj.player.playerSprite.centerX <= this.eye.centerX;
  }
  else if (this.usedPatterns === 1) {
    this.currentPatternIdIndex = this.gameObj.helper.randomNumber(0, this.PATTERNS.length);
    this.currentPatternId = this.currentPatternIdIndex;
  }
  else {
    // pick the next pattern
    if (++this.currentPatternIdIndex >= this.PATTERNS.length) {
      this.currentPatternIdIndex = 0;
    }

    this.currentPatternId = this.currentPatternIdIndex;
  }
  this.usedPatterns++;

  this.pattern = this.PATTERNS[this.currentPatternId];

  // get the index of the initial step of the pattern
  this.currentPatternStep = !this.patternReversed ? 0 : this.pattern.length - 1;
  this.iteratePattern();
};

BasicGame.Eye.prototype.iteratePattern = function () {
  var initPosition = -1;
  var targetPosition = -1;
  var currentPattern = this.pattern[this.currentPatternStep];

  // iterate over the steps of the pattern and make the EYE move to each
  // position of it
  if ((!this.patternReversed && this.currentPatternStep < this.pattern.length) ||
    (this.patternReversed && this.currentPatternStep >= 0)) {
    if (!this.patternReversed) {
      initPosition = currentPattern[0];
      targetPosition = currentPattern[1];
    }
    else {
      initPosition = currentPattern[1];
      targetPosition = currentPattern[0];
    }

    // set the initial X position of the EYE and the view zone
    this.viewZone.x = this.viewZone.positions[initPosition];
    this.pupil.x = this.pupilImagePositions[initPosition];
    this.movementTime = currentPattern[2] * 1000;

    this.runPupilViewZoneTweens(targetPosition);
  }
  else {
    // if there are no more steps in the pattern
    if (++this.lap < 2) {
      this.gameObj.helper.timer(1000,
        function () {
          this.currentPatternStep = !this.patternReversed ? 0 : this.pattern.length - 1;
          this.iteratePattern();
        },
        this);
    }
    else {
      this.currentPatternCompleted = true;
      // if the pattern was used twice, change it
      if (this.shooting === true) {
        // this is triggered when the player enters the view zone while the
        // eye is looking to the front before getting tired
        return;
      }

      if (this.viewZoneMovementTween &&
        this.viewZoneMovementTween.isRunning) {
      }

      this.searching = false;
      this.getTired();
    }
  }
};

BasicGame.Eye.prototype.runPupilViewZoneTweens = function (targetPosition) {
  // move the view zone and the pupil
  if (this.viewZoneMovementTween && this.viewZoneMovementTween.isRunning) {
    return;
  }

  this.pupilMovementTween = this.game.add.tween(this.pupil);
  this.pupilMovementTween.to({
    x: this.pupilImagePositions[targetPosition]
  }, this.movementTime);
  this.pupilMovementTween.onUpdateCallback(function () {
    var dx = Math.abs(this.pupil.x - this.eye.centerX);
    var xDiffPercentage = 1 - dx / this.xDistanceMax;
    var dy = (this.eye.centerY + (this.LOWER_EYELID_DISTANCE * xDiffPercentage)) - this.eyeCenterYOffset;
    var c = Math.sqrt((dx * dx) + (dy * dy));
    var alfa = Math.asin(dy / c);
    this.pupil.y = (Math.sin(alfa) * this.LOWER_EYELID_DISTANCE) + this.eye.centerY;
  }, this);
  this.pupilMovementTween.start();

  this.viewZoneMovementTween = this.game.add.tween(this.viewZone);
  this.viewZoneMovementTween.to({
    x: this.viewZone.positions[targetPosition]
  }, this.movementTime);
  this.viewZoneMovementTween.onComplete.addOnce(function () {
    if (this.shooting === false) {
      this.nextStepInPattern();

      this.viewZoneMovementTween = null;
      this.pupilMovementTween = null;
    }
  }, this);
  this.viewZoneMovementTween.start();
};

BasicGame.Eye.prototype.nextStepInPattern = function (delay) {
  // wait a second before changing to a new pattern
  this.gameObj.helper.timer(delay || 1000, function () {
    if (this.levelEnded === true || this.shooting === true) {
      return;
    }

    if (!this.patternReversed) {
      ++this.currentPatternStep;
    }
    else {
      --this.currentPatternStep;
    }

    this.iteratePattern();
  }, this);
};

BasicGame.Eye.prototype.shootPlayer = function (target) {
  var tweensInPause = false;


  this.shooting = true;
  this.searching = false;
  this.eye.frame = 2; // angry eye
  this.lightning.shoot(target);

  // hide the pupil while shooting
  this.pupil.alpha = 0;
  this.viewZone.alpha = 0;
  this.invisibleZoneImage.alpha = 0;

  // pause the current tweens, if any, for the pupil and the viewzone
  if (this.viewZoneMovementTween && this.viewZoneMovementTween.isRunning === true) {
    this.viewZoneMovementTween.pause();
    this.pupilMovementTween.pause();

    tweensInPause = true;
  }

  this.destroyTimers(this.getTiredTimer, this.getMadTimer, this.searchAgain);

  // init the timer that will make the EYE calm down again and restart the
  // search
  this.calmDownTimer = this.game.time.create(true);
  this.calmDownTimer.add(3000,
    function () {
      if (tweensInPause === true) {
        this.eye.frame = 0;

        this.pupil.alpha = 1;
        this.viewZone.alpha = 1;
        this.invisibleZoneImage.alpha = .5;

        this.searching = true;
        this.shooting = false;

        if (this.viewZoneMovementTween && this.pupilMovementTween) {
          this.viewZoneMovementTween.resume();
          this.pupilMovementTween.resume();
        }
      }
      else {

        if (this.viewZoneMovementTween) {
          this.viewZoneMovementTween.stop();
          this.pupilMovementTween.stop();
        }

        this.initSearch();
      }
    },
    this);
  this.calmDownTimer.start();
};

BasicGame.Eye.prototype.levelStart = function () {
  this.levelEnded = false;
  this.shooting = false;
  this.usedPatterns = 0;
  this.currentPatternCompleted = true;
  this.destroyTimers();

  this.initSearch();
};

BasicGame.Eye.prototype.levelEndedEvent = function (levelCompleted) {
  // this event is called when the level has been ended and all is in darkness (saving progress... message)
  if (this.levelEnded === true) {
    return;
  }

  this.levelEnded = true;
  this.searching = false;
  this.shooting = false;
  this.usedPatterns = 0
  this.currentPatternCompleted = true;
  this.destroyTimers();
  this.stopEyeTweens();
};

BasicGame.Eye.prototype.gameInDarkness = function () {
  this.eye.frame = 0;
  this.viewZone.x = this.viewZone.positions['0'];
  this.pupil.x = this.pupilImagePositions['0'];
  this.levelEnded = true;

  this.destroyTimers();
  this.stopEyeTweens();
};

BasicGame.Eye.prototype.destroyTimers = function () {
  if (arguments.length === 0) {
    if (this.calmDownTimer) {
      this.calmDownTimer.destroy();
    }

    if (this.getTiredTimer) {
      this.getTiredTimer.destroy();
    }

    if (this.getMadTimer) {
      this.getMadTimer.destroy();
    }

    if (this.searchAgain) {
      this.searchAgain.destroy();
    }

    return;
  }

  for (var i = arguments.length - 1; i >= 0; i--) {
    if (arguments[i]) arguments[i].destroy();
  }
};

BasicGame.Eye.prototype.rejoice = function (callback) {
  var shakeTween;

  this.destroyTimers();
  this.viewZone.alpha = 0;
  this.invisibleZoneImage.alpha = 0;

  shakeTween = this.game.add.tween(this.eye);
  shakeTween.to({ y: this.eye.originalY + 10 },
    150,
    null,
    false,
    0,
    4,
    true).start();
  shakeTween.onComplete.add(function () {
    this.eye.y = this.eye.originalY;
    this.laughSound.stop();
    callback();
  }, this);

  this.laughSound.play();
};

/**
 * Method that plays the 'tired' animation and makes the EYE get mad.
 */
BasicGame.Eye.prototype.getTired = function () {
  this.eye.frame = 1;

  this.pupil.alpha = 0;
  this.viewZone.alpha = 0;
  this.invisibleZoneImage.alpha = 0;

  if (this.levelEnded === true) {
    return;
  }

  this.getMadTimer = this.game.time.create(true);
  this.getMadTimer.add(1200,
    function () {
      this.getMad();
    },
    this);
  this.getMadTimer.start();
};

/**
 * Method that play the 'angry' animation of the EYE, shakes the camera and
 * restarts the seeking for the player.
 */
BasicGame.Eye.prototype.getMad = function () {
  var shakeTween = this.game.add.tween(this.eye);

  // play the angry animation and the sound linked to it
  this.eye.frame = 2;
  this.angerSound.play();

  // shake the world
  shakeTween.to({ x: this.eye.originalX + 10 },
    40,
    Phaser.Easing.Sinusoidal.InOut,
    false,
    0,
    4,
    true);
  shakeTween.onComplete.addOnce(function () {
    // restart the search after a while
    this.searchAgain = this.game.time.create(true);
    this.searchAgain.add(this.RESTART_SEARCH_DELAY,
      function () {
        if (this.levelEnded === true) {
          return;
        }

        this.initSearch();
      },
      this);
    this.searchAgain.start();
  }, this);
  shakeTween.start();

};

BasicGame.Eye.prototype.updateLevel = function (level) {
  this.level = level;
  this.anger = false;
  this.usedPatterns = 0;

  this.stopEyeTweens(true);
};

BasicGame.Eye.prototype.restartLevel = function () {
  this.anger = false;
  this.levelEnded = true;

  this.destroyTimers();
  this.stopEyeTweens(true);
};

BasicGame.Eye.prototype.stopEyeTweens = function (resetPosition) {
  if (this.viewZoneMovementTween && this.pupilMovementTween) {
    this.viewZoneMovementTween.onComplete.removeAll();
    this.pupilMovementTween.onComplete.removeAll();
    this.viewZoneMovementTween.stop();
    this.pupilMovementTween.stop();
  }

  if (resetPosition === true) {
    this.viewZone.x = this.viewZone.positions['0'];
    this.viewZone.alpha = 1;
    this.pupil.x = this.pupilImagePositions['0'];
    this.pupil.alpha = 1;
    this.invisibleZoneImage.alpha = .5;
  }
};

BasicGame.Eye.prototype.drawLinesToTarget = function (target) {
  // draw a line from the eye to the target
  this.bitmap.context.beginPath();
  this.bitmap.context.moveTo(target.x, target.y);
  this.bitmap.context.lineTo(this.eye.x, this.eye.y);
  this.bitmap.context.stroke();

  this.bitmap.context.beginPath();
  this.bitmap.context.moveTo(target.x + target.width, target.y);
  this.bitmap.context.lineTo(this.eye.x, this.eye.y);
  this.bitmap.context.stroke();

  this.bitmap.context.beginPath();
  this.bitmap.context.moveTo(target.x, target.y + target.height);
  this.bitmap.context.lineTo(this.eye.x, this.eye.y);
  this.bitmap.context.stroke();

  this.bitmap.context.beginPath();
  this.bitmap.context.moveTo(target.x + target.width, target.y + target.height);
  this.bitmap.context.lineTo(this.eye.x, this.eye.y);
  this.bitmap.context.stroke();
};
},{"BasicGame":1}],5:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
 * Method that set the default values for the properties of the Helper object.
 * 
 * @param {Object} game    The Object of Phaser game
 * @param {Object} gameObj The Object of BasicGame.Game
 */
BasicGame.Helper = function (game, gameObj) {
  this.game = game;
  this.gameObj = gameObj;
};

BasicGame.Helper.prototype.timer = function (delay, callback, context) {
  this.game.time.create(this.game, true)
    .add(delay, callback, context || this)
    .timer.start(100);
};

BasicGame.Helper.prototype.randomColor = function () {
  var letters = '0123456789ABCDEF';
  var color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

BasicGame.Helper.prototype.randomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

BasicGame.Helper.prototype.getLevelIdAndName = function (levelNumber) {
  var postfix = (levelNumber < 10) ? '0' : '';
  return {
    id: 'lvl' + postfix + levelNumber,
    name: 'level' + postfix + levelNumber
  };
};

BasicGame.Helper.prototype.getSkyName = function (levelNumber) {
  if (levelNumber <= 10) {
    return 'sky01';
  } else if (levelNumber <= 20) {
    return 'sky02';
  } else {
    return 'sky03';
  }
};

BasicGame.Helper.prototype.getSkyColor = function (levelNumber) {
  if (!levelNumber) {
    return '#F2F2F0';
  }

  if (levelNumber <= 10) {
    return '#2B3825';
  } else if (levelNumber <= 20) {
    return '#33393D';
  } else {
    return '#4E1B1B';
  }
};
},{"BasicGame":1}],6:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

BasicGame.Level = function (game, gameObj) {
  // destroyable objects
  this.levelTextGroup = null;
  this.dayNumberText = null;
  this.daySound = null;
  this.spikeSound = null;
  this.map = null;
  this.ground = null;
  this.walls = null;
  this.spikes = null;
  this.pieces = null;

  // global properties
  this.game = game;
  this.gameObj = gameObj;
  this.endTimer = null;
  this.initPlayerPos = { x: 0, y: 0 };
  this.daysShown = false;
  this.isShowingDays = false;
  this.dayText = {
    "es": "Día",
    "en": "Day"
  };

  // font attributes
  this.fontId = 'font-medium';
  this.hasFloor = false;
  this.hasSpikes = false;

  this.daySound = null;
  this.spikeSound = null;
};

BasicGame.Level.prototype.create = function () {
  // create the background for the day
  this.levelTextGroup = this.game.add.group();

  // create the bitmap for the day number
  this.dayNumberText = this.game.add.bitmapText(this.game.world.width / 2,
    this.game.world.height / 2 - 15,
    this.fontId,
    '',
    72,
    this.levelTextGroup);
  this.dayNumberText.anchor.set(0.5, 0.5);
  this.dayNumberText.align = "center";
  this.dayNumberText.tint = 0x8d8d8e;
  this.dayNumberText.oriY = this.dayNumberText.y;

  if (!this.daySound) {
    this.daySound = this.game.add.sound('day', 0.15);
  }

  if (!this.spikeSound) {
    this.spikeSound = this.game.add.sound('spike', 0.2);
  }

  this.createLevel(parseInt(BasicGame.currentLevel));
};

BasicGame.Level.prototype.createLevel = function (num) {
  var _self = this;
  this.map = this.game.add.tilemap('lvl' + ((num < 10) ? '0' + num : num));

  // create the floor of the level
  this.hasFloor = false;
  if (this.map.objects.floor) {
    this.hasFloor = true;
    this.ground = this.game.add.group();

    this.map.createFromObjects("floor", "", 'platform', 0, true, false,
      this.ground, Phaser.Sprite, false);

    this.ground.enableBody = true;
    this.game.physics.arcade.enable(this.ground);
    this.ground.forEach(function (groundSprite) {
      groundSprite.body.immovable = true;
      groundSprite.body.allowGravity = false;
    });
  }

  // create the walls of the level
  this.walls = this.game.add.group();
  this.map.createFromObjects("platforms", "", 'platform', 0, true, false,
    this.walls, Phaser.Sprite, false);

  this.walls.enableBody = true;
  this.game.physics.arcade.enable(this.walls);
  this.walls.forEach(function (platformSprite) {
    platformSprite.body.immovable = true;
    platformSprite.body.allowGravity = false;
  });

  // create the spikes (and platform) of the level
  this.hasSpikes = false;
  if (this.map.objects.spikes) {
    this.hasSpikes = true;

    this.spikes = this.game.add.group();
    this.spikes.openedSpikes = 0;

    this.map.createFromObjects("spikes", "", 'spike-platform', 0, true, false,
      this.walls, Phaser.Sprite, false);
    this.walls.forEach(function (platformSprite) {
      if (platformSprite["spike-platform"] == "1") {
        var createdSpike = null;
        if (platformSprite["spike-side"]) {
          createdSpike = _self.addHeightSpike(platformSprite, platformSprite["spike-side"]);
        }
        else {
          createdSpike = _self.addWidthSpike(platformSprite, platformSprite["spike-down"]);
        }

        // add a reference to the spikes in the platform to they belong which
        platformSprite.spikeRef = createdSpike;
        platformSprite.body.immovable = true;
        platformSprite.body.allowGravity = false;
      }
    });
  }

  // create the pieces of the level
  this.pieces = this.game.add.group();
  this.map.createFromObjects("pieces", "", 'piece', null, true, false,
    this.pieces, Phaser.Sprite, false);

  this.pieces.forEach(function (pieceSprite) {
    pieceSprite.anchor.set(0.5, 0.5);
    _self.game.physics.arcade.enableBody(pieceSprite);
    pieceSprite.body.allowGravity = false;
    pieceSprite.body.immovable = false;
    pieceSprite.body.friction = new Phaser.Point(0, 0);
  });

  // get the player initial position
  if (this.map.objects.player_pos) {
    this.initPlayerPos.x = this.map.objects.player_pos[0].x;
    this.initPlayerPos.y = this.map.objects.player_pos[0].y;
  }

  // show the days of the level
  var dayObj = this.gameObj.days.getDay(parseInt(BasicGame.currentLevel));
  this.dayNumberText.setText(this.dayText[BasicGame.language] + ' ' + dayObj.number);
  this.dayNumberText.y = this.dayNumberText.oriY;

  // notify to the game that the level is ready
  this.gameObj.levelReady();
};

BasicGame.Level.prototype.destroyCurrentLevel = function () {
  this.map.destroy();
  if (this.ground) {
    this.ground.destroy();
  }
  this.walls.destroy();
  if (this.hasSpikes) {
    this.spikes.forEach(function (spikeSprite) {
      if (!spikeSprite || !spikeSprite.showTween || !spikeSprite.hideTween) return;
      spikeSprite.showTween.stop();
      spikeSprite.hideTween.stop();
    });
    this.spikes.destroy();
  }
  if (this.pieces) {
    this.pieces.destroy();
  }
  this.dayNumberText.setText("");
};

BasicGame.Level.prototype.render = function () {
  if (BasicGame.Game.developmentMode === true) {
    var _self = this;
    if (this.spikes) {
      this.spikes.forEach(function (pieceSprite) {
        _self.game.debug.body(pieceSprite, 'rgba(0,0,255,0.8)');
      });
    }
  }
};

BasicGame.Level.prototype.showDay = function () {
  // if (this.isShowingDays === true) {
  //   return;
  // }

  // this.isShowingDays = true;

  // this.levelTextGroup.getChildAt(0).alpha = 1;
  // this.levelTextGroup.alpha = 1;

  // this.game.world.bringToTop(this.levelTextGroup);

  // this.daySound.play();

  /* // create the timer
  var dayTimer = this.game.time.create(true);

  // set the timer to stop showing the day
  var currentDayObj = this.gameObj.days.getDay(BasicGame.currentLevel);
  dayTimer.add((currentDayObj.waitTime || 2) * 1000,
    function () {
      this.levelTextGroup.alpha = 0;
      this.isShowingDays = false;
      this.gameObj.hideDarkness();
    },
    this);
  dayTimer.start(); */
};

BasicGame.Level.prototype.addWidthSpike = function (platformSprite, inBottom) {
  // add the spikes to the platform
  var spikeSprite = null;

  if (!inBottom) {
    spikeSprite = this.game.add.tileSprite(platformSprite.x,
      platformSprite.y + 5,
      platformSprite.width, 16, "spike", 0, this.spikes);
    spikeSprite.isHidden = true;
    spikeSprite.oriY = spikeSprite.y;
    spikeSprite.desY = platformSprite.y - 16;
    this.spikes.openedSpikes++;
  }
  else {
    spikeSprite = this.game.add.tileSprite(platformSprite.x,
      platformSprite.bottom,
      platformSprite.width, 16, "spike-d", 0, this.spikes);
    spikeSprite.isHidden = false;
    // spikeSprite.oriY = spikeSprite.y;
    // spikeSprite.desY = platformSprite.y -16;
  }

  if (!inBottom) {
    // create the tweens for showing and hiding the spikes
    var showSpikeTween = this.createShowSpikeTween(spikeSprite,
      { y: spikeSprite.desY }, 100, 300);

    var hideSpikeTween = this.game.add.tween(spikeSprite)
      .to({ y: spikeSprite.oriY },
        300,
        Phaser.Easing.Exponential.Out,
        false,
        1000);
    hideSpikeTween.onComplete.add(function () {
      this.isHidden = true;
      this.parent.openedSpikes--;
    }, spikeSprite);

    spikeSprite.showTween = showSpikeTween;
    spikeSprite.hideTween = hideSpikeTween;
  }

  // set physics properties for the spikes
  this.game.physics.arcade.enable(spikeSprite);
  spikeSprite.body.immovable = true;
  spikeSprite.body.allowGravity = false;


  var numofspikes = platformSprite.width / 32;
  spikeSprite.body.width = platformSprite.width * (numofspikes / (numofspikes + 0.5));
  spikeSprite.body.height = 8;
  spikeSprite.body.offset.x = (platformSprite.width / 2) - (spikeSprite.body.width / 2);

  if (!inBottom)
    spikeSprite.body.offset.y = 8;
  else
    spikeSprite.body.offset.y = 0;

  return spikeSprite;
};

BasicGame.Level.prototype.addHeightSpike = function (platformSprite, side) {
  // add the spikes to the platform
  var spikeSprite = null;
  if (side === 'r') {
    spikeSprite = this.game.add.tileSprite(platformSprite.right - 21,
      platformSprite.y,
      16, platformSprite.height,
      "spike-r", 0, this.spikes);
    spikeSprite.isHidden = true;
    spikeSprite.oriX = spikeSprite.x;
    spikeSprite.desX = platformSprite.right;
  }
  else if (side === 'l') {
    spikeSprite = this.game.add.tileSprite(platformSprite.x + 5,
      platformSprite.top,
      16, platformSprite.height,
      "spike-l", 0, this.spikes);
    spikeSprite.isHidden = true;
    spikeSprite.oriX = spikeSprite.x;
    spikeSprite.desX = platformSprite.x - 16;
  } else {
    return null;
  }

  // create the tweens for showing and hiding the spikes
  var showSpikeTween = this.createShowSpikeTween(spikeSprite,
    { x: spikeSprite.desX }, 100, 500);

  var hideSpikeTween = this.game.add.tween(spikeSprite)
    .to({ x: spikeSprite.oriX },
      300,
      Phaser.Easing.Exponential.Out,
      false,
      1000);
  hideSpikeTween.onComplete.add(function () {
    this.isHidden = true;
    this.parent.openedSpikes--;
  }, spikeSprite);

  spikeSprite.showTween = showSpikeTween;
  spikeSprite.hideTween = hideSpikeTween;

  // set physics properties for the spikes
  this.game.physics.arcade.enable(spikeSprite);
  spikeSprite.body.immovable = true;
  spikeSprite.body.allowGravity = false;

  var numofspikes = platformSprite.height / 32;
  spikeSprite.body.width = 8;
  spikeSprite.body.height = platformSprite.height * (numofspikes / (numofspikes + 0.5));
  spikeSprite.body.offset.y = (platformSprite.height / 2) - (spikeSprite.body.height / 2);

  if (side === 'r')
    spikeSprite.body.offset.x = 0;
  else
    spikeSprite.body.offset.x = 8;

  return spikeSprite;
};

BasicGame.Level.prototype.createShowSpikeTween = function (spikeSprite, properties, duration, delay) {
  var _self = this;
  var showSpikeTween = this.game.add.tween(spikeSprite)
    .to(properties,
      duration,
      null,
      false,
      delay);

  showSpikeTween.onComplete.add(function () {
    this.isHidden = false;
    this.hideTween.start();
    this.parent.openedSpikes++;
  }, spikeSprite);

  return showSpikeTween;
};

BasicGame.Level.prototype.restartLevel = function () {
  // enable the body physics for each piece and make it visible
  this.pieces.forEach(function (pieceSprite) {
    pieceSprite.alpha = 1;
    pieceSprite.body.enable = true;
  });
};

// ╔═══════════════════════════════════════════════════════════════════════════╗
BasicGame.Level.prototype.shutdown = function () {
  this.levelTextGroup.destroy();
  this.dayNumberText.destroy();
  this.daySound.destroy();
  this.spikeSound.destroy();
  this.map.destroy();
  this.ground.destroy();
  this.walls.destroy();
  this.spikes.destroy();
  this.pieces.destroy();
};
// ╚═══════════════════════════════════════════════════════════════════════════╝
},{"BasicGame":1}],7:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

BasicGame.Light = function (game, gameObj) {
  // destroyable objects
  this.lightGroup = null;
  this.bitmap = null;
  this.lightBitmap = null;
  this.rayBitmap = null;
  this.rayBitmapImage = null;

  // global properties
  this.game = game;
  this.gameObj = gameObj;
  this.walls = null;
  this.level = null;
  this.shadowsDrawn = null;
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.Light.prototype.create = function (level) {
  var light = null;

  this.level = level;
  this.walls = this.level.walls;
  this.shadowsDrawn = false;

  // Add the light(s)
  this.lightGroup = this.game.add.group();
  light = this.game.add.sprite((this.game.world.width / 2), -16, 'light');
  // light = this.game.add.sprite((this.game.world.width / 2) - 16, -16, 'light');
  light.alpha = 0;

  // Set the pivot point of the light to the center of the texture
  light.anchor.setTo(0.5, 0.5);

  //Add the light to the array of lights
  this.lightGroup.add(light);

  // Create a bitmap texture for drawing light cones
  this.bitmap = this.game.add.bitmapData(this.game.world.width, this.game.height);
  this.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
  this.bitmap.context.strokeStyle = 'rgb(255, 255, 255)';
  this.lightBitmap = this.game.add.image(0, 0, this.bitmap);

  // This bitmap is drawn onto the screen using the MULTIPLY blend mode.
  // Since this bitmap is over the background, dark areas of the bitmap
  // will make the background darker. White areas of the bitmap will allow
  // the normal colors of the background to show through. Blend modes are
  // only supported in WebGL. If your browser doesn't support WebGL then
  // you'll see gray shadows and white light instead of colors and it
  // generally won't look nearly as cool. So use a browser with WebGL.
  this.lightBitmap.blendMode = Phaser.blendModes.MULTIPLY;

  // Create a bitmap for drawing rays
  this.rayBitmap = this.game.add.bitmapData(this.game.world.width, this.game.height);
  this.rayBitmapImage = this.game.add.image(0, 0, this.rayBitmap);
  this.rayBitmapImage.visible = false;
};

BasicGame.Light.prototype.update = function () {
  // if (this.shadowsDrawn === false) {
  this.drawShadows();
  // }
  // draw shadows if light is moving in the level
};

BasicGame.Light.prototype.shutdown = function () {
  this.lightGroup.destroy();
  this.bitmap.destroy();
  this.lightBitmap.destroy();
  this.rayBitmap.destroy();
  this.rayBitmapImage.destroy();
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

BasicGame.Light.prototype.drawShadows = function () {
  // Move the light to the pointer/touch location
  this.rayBitmapImage.visible = BasicGame.Game.developmentMode || false;

  if (this.gameObj.inDarkness == true) {
    return;
  }

  // Next, fill the entire light bitmap with a dark shadow color.
  this.bitmap.context.fillStyle = 'rgb(102, 185, 204)';
  this.bitmap.context.fillRect(0, 0, this.game.world.width, this.game.height);

  // An array of the stage corners that we'll use later
  var stageCorners = [
    new Phaser.Point(0, 0),
    new Phaser.Point(this.game.world.width, 0),
    new Phaser.Point(this.game.world.width, this.game.height),
    new Phaser.Point(0, this.game.height)
  ];

  // Ray casting!
  // Cast rays from each light
  this.lightGroup.forEach(function (light) {
    // Cast rays through the corners of each wall towards the stage edge.
    // Save all of the intersection points or ray end points if there was no intersection.
    var points = [];
    var ray = null;
    var intersect;
    var i;

    this.walls.forEach(function (wall) {
      // Create a ray from the light through each corner out to the edge of the stage.
      // This array defines points just inside of each corner to make sure we hit each one.
      // It also defines points just outside of each corner so we can see to the stage edges.
      var corners = [
        new Phaser.Point(wall.x + 0.1, wall.y + 0.1),
        new Phaser.Point(wall.x - 0.1, wall.y - 0.1),

        new Phaser.Point(wall.x - 0.1 + wall.width, wall.y + 0.1),
        new Phaser.Point(wall.x + 0.1 + wall.width, wall.y - 0.1),

        new Phaser.Point(wall.x - 0.1 + wall.width, wall.y - 0.1 + wall.height),
        new Phaser.Point(wall.x + 0.1 + wall.width, wall.y + 0.1 + wall.height),

        new Phaser.Point(wall.x + 0.1, wall.y - 0.1 + wall.height),
        new Phaser.Point(wall.x - 0.1, wall.y + 0.1 + wall.height)
      ];

      // Calculate rays through each point to the edge of the stage
      for (i = 0; i < corners.length; i++) {
        var c = corners[i];

        // Here comes the linear algebra.
        // The equation for a line is y = slope * x + b
        // b is where the line crosses the left edge of the stage
        var slope = (c.y - light.y) / (c.x - light.x);
        var b = light.y - slope * light.x;

        var end = null;

        if (c.x === light.x) {
          // Vertical lines are a special case
          if (c.y <= light.y) {
            end = new Phaser.Point(light.x, 0);
          } else {
            end = new Phaser.Point(light.x, this.game.height);
          }
        } else if (c.y === light.y) {
          // Horizontal lines are a special case
          if (c.x <= light.x) {
            end = new Phaser.Point(0, light.y);
          } else {
            end = new Phaser.Point(this.game.world.width, light.y);
          }
        } else {
          // Find the point where the line crosses the stage edge
          var left = new Phaser.Point(0, b);
          var right = new Phaser.Point(this.game.world.width, slope * this.game.world.width + b);
          var top = new Phaser.Point(-b / slope, 0);
          var bottom = new Phaser.Point((this.game.height - b) / slope, this.game.height);

          // Get the actual intersection point
          if (c.y <= light.y && c.x >= light.x) {
            if (top.x >= 0 && top.x <= this.game.world.width) {
              end = top;
            } else {
              end = right;
            }
          } else if (c.y <= light.y && c.x <= light.x) {
            if (top.x >= 0 && top.x <= this.game.world.width) {
              end = top;
            } else {
              end = left;
            }
          } else if (c.y >= light.y && c.x >= light.x) {
            if (bottom.x >= 0 && bottom.x <= this.game.world.width) {
              end = bottom;
            } else {
              end = right;
            }
          } else if (c.y >= light.y && c.x <= light.x) {
            if (bottom.x >= 0 && bottom.x <= this.game.world.width) {
              end = bottom;
            } else {
              end = left;
            }
          }
        }

        // Create a ray
        ray = new Phaser.Line(light.x, light.y, end.x, end.y);

        // Check if the ray intersected the wall
        intersect = this.getWallIntersection(ray);
        if (intersect) {
          // This is the front edge of the light blocking object
          points.push(intersect);
        } else {
          // Nothing blocked the ray
          points.push(ray.end);
        }
      }
    }, this);

    // Shoot rays at each of the stage corners to see if the corner
    // of the stage is in shadow. This needs to be done so that
    // shadows don't cut the corner.
    for (i = 0; i < stageCorners.length; i++) {
      ray = new Phaser.Line(light.x, light.y,
        stageCorners[i].x, stageCorners[i].y);
      intersect = this.getWallIntersection(ray);
      if (!intersect) {
        // Corner is in light
        points.push(stageCorners[i]);
      }
    }

    // Now sort the points clockwise around the light
    // Sorting is required so that the points are connected in the right order.
    //
    // This sorting algorithm was copied from Stack Overflow:
    // http://stackoverflow.com/questions/6989100/sort-points-in-clockwise-order
    //
    // Here's a pseudo-code implementation if you want to code it yourself:
    // http://en.wikipedia.org/wiki/Graham_scan
    var center = { x: light.x, y: light.y };
    points = points.sort(function (a, b) {
      if (a.x - center.x >= 0 && b.x - center.x < 0)
        return 1;
      if (a.x - center.x < 0 && b.x - center.x >= 0)
        return -1;
      if (a.x - center.x === 0 && b.x - center.x === 0) {
        if (a.y - center.y >= 0 || b.y - center.y >= 0)
          return 1;
        return -1;
      }

      // Compute the cross product of vectors (center -> a) x (center -> b)
      var det = (a.x - center.x) * (b.y - center.y) - (b.x - center.x) * (a.y - center.y);
      if (det < 0)
        return 1;
      if (det > 0)
        return -1;

      // Points a and b are on the same line from the center
      // Check which point is closer to the center
      var d1 = (a.x - center.x) * (a.x - center.x) + (a.y - center.y) * (a.y - center.y);
      var d2 = (b.x - center.x) * (b.x - center.x) + (b.y - center.y) * (b.y - center.y);
      return 1;
    });

    // Connect the dots and fill in the shape, which are cones of light,
    // with a bright white color. When multiplied with the background,
    // the white color will allow the full color of the background to
    // shine through.
    this.bitmap.context.beginPath();
    this.bitmap.context.fillStyle = 'rgb(255, 255, 255)';
    this.bitmap.context.moveTo(points[0].x, points[0].y);
    for (var j = 0; j < points.length; j++) {
      this.bitmap.context.lineTo(points[j].x, points[j].y);
    }
    this.bitmap.context.closePath();
    this.bitmap.context.fill();

    if (BasicGame.Game.developmentMode) {
      // Draw each of the rays on the rayBitmap
      this.rayBitmap.context.clearRect(0, 0, this.game.world.width, this.game.height);
      this.rayBitmap.context.beginPath();
      this.rayBitmap.context.strokeStyle = 'rgb(255, 255, 255)';
      this.rayBitmap.context.fillStyle = 'rgb(255, 255, 255)';
      this.rayBitmap.context.moveTo(points[0].x, points[0].y);
      for (var k = 0; k < points.length; k++) {
        this.rayBitmap.context.moveTo(light.x, light.y);
        this.rayBitmap.context.lineTo(points[k].x, points[k].y);
        this.rayBitmap.context.fillRect(points[k].x - 2, points[k].y - 2, 4, 4);
      }
      this.rayBitmap.context.stroke();
    }

  }, this);

  // This just tells the engine it should update the texture cache
  this.bitmap.dirty = true;
  if (BasicGame.Game.developmentMode) {
    this.rayBitmap.dirty = true;
  }

  this.shadowsDrawn = true;
};

// Given a ray, this function iterates through all of the walls and
// returns the closest wall intersection from the start of the ray
// or null if the ray does not intersect any walls.
BasicGame.Light.prototype.getWallIntersection = function (ray) {
  var distanceToWall = Number.POSITIVE_INFINITY;
  var closestIntersection = null;

  // For each of the walls...
  this.walls.forEach(function (wall) {
    // Create an array of lines that represent the four edges of each wall
    var lines = [
      new Phaser.Line(wall.x, wall.y, wall.x + wall.width, wall.y),
      new Phaser.Line(wall.x, wall.y, wall.x, wall.y + wall.height),
      new Phaser.Line(wall.x + wall.width, wall.y,
        wall.x + wall.width, wall.y + wall.height),
      new Phaser.Line(wall.x, wall.y + wall.height,
        wall.x + wall.width, wall.y + wall.height)
    ];

    // Test each of the edges in this wall against the ray.
    // If the ray intersects any of the edges then the wall must be in the way.
    for (var i = 0; i < lines.length; i++) {
      var intersect = Phaser.Line.intersects(ray, lines[i]);
      if (intersect) {
        // Find the closest intersection
        distance =
          this.game.math.distance(ray.start.x, ray.start.y, intersect.x, intersect.y);
        if (distance < distanceToWall) {
          distanceToWall = distance;
          closestIntersection = intersect;
        }
      }
    }
  }, this);

  return closestIntersection;
};

BasicGame.Light.prototype.updateWalls = function (level) {
  this.walls = level.walls;
  this.shadowsDrawn = false;
};
},{"BasicGame":1}],8:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

BasicGame.Lightning = function (game, gameObj) {
  // destroyable objects
  this.lightningBitmap = null;
  this.lightning = null;
  this.fakeThing = null;
  this.lightningSound = null;

  this.game = game;
  this.gameObj = gameObj;
  this.playerObj = null;
  this.eye = null;
  this.level = null;
};

BasicGame.Lightning.prototype.create = function (eye, player, level) {
  this.playerObj = player;
  this.eye = eye;
  this.level = level;

  // Create a bitmap for the lightning bolt texture
  this.lightningBitmap = this.game.add.bitmapData(200, 10000);

  // Create a sprite to hold the lightning bolt texture
  this.lightning = this.game.add.image(this.eye.x,
    this.eye.y + 32,
    this.lightningBitmap);
  this.lightning.anchor.setTo(0.5, 0);

  this.fakeThing = this.game.add.sprite(-10, -10, "player");
  this.fakeThing.anchor.setTo(0.5, 0.5);
  this.fakeThing.width = this.fakeThing.height = 16;
  this.fakeThing.alpha = 0;

  this.lightningTimer = 0;

  if (!this.lightningSound) {
    this.lightningSound = this.game.add.sound('ray', 0.2);
  }
};

BasicGame.Lightning.prototype.update = function () {
  // check if the ray hits the player
  if (this.playerObj.playerSprite && this.fakeThing) {
    if (this.fakeThing.left > this.playerObj.playerSprite.left &&
      this.fakeThing.right < this.playerObj.playerSprite.right &&
      this.fakeThing.top > this.playerObj.playerSprite.top &&
      this.fakeThing.bottom < this.playerObj.playerSprite.bottom) {
      this.gameObj.subtractLife();
      this.gameObj.shakeCamera();
    }
    this.fakeThing.x = this.fakeThing.y = -10;
  }
};

BasicGame.Lightning.prototype.shoot = function (target) {
  this.fakeThing.x = this.fakeThing.y = 0;
  var targetPos = {
    x: target.centerX,
    y: target.centerY
  };

  // Rotate the lightning sprite so it goes in the
  // direction of the pointer
  this.lightning.rotation = this.game.math.angleBetween(
    this.lightning.x, this.lightning.y,
    targetPos.x, targetPos.y
  ) - Math.PI / 2;

  // Calculate the distance from the lightning source to the pointer
  var distance = this.game.math.distance(
    this.lightning.x, this.lightning.y,
    targetPos.x, targetPos.y
  );

  // Create the lightning texture
  this.createLightningTexture(this.lightningBitmap.width / 2, 0, 20, 2, false, distance);

  // Make the lightning sprite visible
  this.lightning.alpha = 1;

  // Fade out the lightning sprite using a tween on the alpha property
  // Check out the "Easing function" examples for more info.
  this.game.add.tween(this.lightning)
    .to({ alpha: 0.5 }, 100, Phaser.Easing.Bounce.Out)
    .to({ alpha: 1.0 }, 100, Phaser.Easing.Bounce.Out)
    .to({ alpha: 0.5 }, 100, Phaser.Easing.Bounce.Out)
    .to({ alpha: 1.0 }, 100, Phaser.Easing.Bounce.Out)
    .to({ alpha: 0 }, 250, Phaser.Easing.Cubic.In)
    .start();

  this.fakeThing.x = targetPos.x;
  this.fakeThing.y = targetPos.y;

  this.lightningSound.play();
};

// This function creates a texture that looks like a lightning bolt
BasicGame.Lightning.prototype.createLightningTexture = function (x, y, segments, boltWidth, branch, distance) {
  // Get the canvas drawing context for the lightningBitmap
  var ctx = this.lightningBitmap.context;
  var width = this.lightningBitmap.width;
  var height = this.lightningBitmap.height;

  // Our lightning will be made up of several line segments starting at
  // the center of the top edge of the bitmap and ending at the target.

  // Clear the canvas
  if (!branch) ctx.clearRect(0, 0, width, height);

  // Draw each of the segments
  for (var i = 0; i < segments; i++) {
    // Set the lightning color and bolt width
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = boltWidth;

    ctx.beginPath();
    ctx.moveTo(x, y);

    // Calculate an x offset from the end of the last line segment and
    // keep it within the bounds of the bitmap
    if (branch) {
      // For a branch
      x += this.game.rnd.integerInRange(-10, 10);
    } else {
      // For the main bolt
      x += this.game.rnd.integerInRange(-30, 30);
    }
    if (x <= 10) x = 10;
    if (x >= width - 10) x = width - 10;

    // Calculate a y offset from the end of the last line segment.
    // When we've reached the target or there are no more segments left,
    // set the y position to the distance to the target. For branches, we
    // don't care if they reach the target so don't set the last coordinate
    // to the target if it's hanging in the air.
    if (branch) {
      // For a branch
      y += this.game.rnd.integerInRange(10, 20);
    } else {
      // For the main bolt
      y += this.game.rnd.integerInRange(20, distance / segments);
    }
    if ((!branch && i == segments - 1) || y > distance) {
      // This causes the bolt to always terminate at the center
      // lightning bolt bounding box at the correct distance to
      // the target. Because of the way the lightning sprite is
      // rotated, this causes this point to be exactly where the
      // player clicked or tapped.
      y = distance;
      if (!branch) x = width / 2;
    }

    // draw the line segment
    ctx.lineTo(x, y);
    ctx.stroke();

    // quit when we've reached the target
    if (y >= distance) break;

  }

  // This just tells the engine it should update the texture cache
  this.lightningBitmap.dirty = true;
};

BasicGame.Lightning.prototype.updateLevel = function (level) {
  this.level = level;
};

// ╔═══════════════════════════════════════════════════════════════════════════╗
BasicGame.Lightning.prototype.shutdown = function () {
  this.lightningBitmap.destroy();
  this.lightning.destroy();
  this.fakeThing.destroy();
  this.lightningSound.destroy();
};
// ╚═══════════════════════════════════════════════════════════════════════════╝
},{"BasicGame":1}],9:[function(require,module,exports){
var BasicGame = require('BasicGame');

/**
The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

BasicGame.Player = function (game, input, gameObj) {
  // constants
  this.DIALOGUE_TEXT_MAX_WIDTH = 292;
  this.DIALOGUE_TEXT_H_PADDING = 10;
  this.DIALOGUE_TEXT_V_PADDING = 5;
  this.FADE_SPEED = 300;
  this.DIALOGUE_WIDTH = this.DIALOGUE_TEXT_MAX_WIDTH + this.DIALOGUE_TEXT_H_PADDING * 2;
  this.STRETCH_SQUASH_VALUE = 8;
  this.BASE_SIZE = 32;
  this.HALF_SIZE = this.BASE_SIZE / 2;

  // destroyable objects
  this.playerSprite = null;
  this.particlesGroup = null;
  this.jumpSound = null;
  this.walkSound = null;
  this.slideSound = null;
  this.fallSound = null;
  this.deathSound = null;
  this.pieceSound = null;
  this.dialogueGroup = null;
  this.dialogueBackground = null;
  this.dialogueMark = null;
  this.dialogueText = null;

  // global properties
  this.game = game;
  this.input = input;
  this.gameObj = gameObj;
  this.playerSprite = null;
  this.level = null;
  this.bitmap = null;
  this.collectedPieces = 0;
  this.jumpPressed = false;
  this.currentJumpMultiplier = 0;
  this.jumpChance = false;
  this.walkInAirTimer = null;
  this.fontId = 'font';
  this.dialogueDisplayed = false;
  this.flipDialogue = false;
  this.dialogueFadeOutStarted = false;
  this.jumpFeedbackStarted = false;

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // define movement constants
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // speed of movement in X axis
  this.MAX_SPEED = 300;

  // base speed of movement in X axis when an arrow key (left, right) is pressed
  // in ground
  this.ACCELERATION = 2500;

  // base speed of movement in X axis when an arrow key (left, right) is pressed
  // while jumping from a wall
  this.ACCELERATION_WALL = 12000;

  // pixels per second used in character falls
  this.GRAVITY = 2600;

  // base speed used to make the character jump
  this.JUMP_SPEED = -850;

  // base speed used to make the character jump while is against a wall
  this.JUMP_SPEED_WALL = -850;


  this.SLID_SPEED = 1;
  this.JUMP_TIME = 150;
  this.JUMP_MULTIPLIER_AMOUNT = 0.01;
  this.JUMP_MULTIPLIER_MAX = 0.23;
  this.JUMP_MULTIPLIER = 0.3;

  // define gameplay keys
  this.leftKey1 = Phaser.Keyboard.LEFT;
  this.leftKey2 = Phaser.Keyboard.A;
  this.rightKey1 = Phaser.Keyboard.RIGHT;
  this.rightKey2 = Phaser.Keyboard.D;
  this.jumpKey1 = Phaser.Keyboard.Z;
  this.jumpKey2 = Phaser.Keyboard.SPACEBAR;
  this.jumpKey3 = Phaser.Keyboard.UP;
  this.jumpKey4 = Phaser.Keyboard.W;
  this.downKey1 = Phaser.Keyboard.DOWN;
  this.downKey2 = Phaser.Keyboard.S;

  this.justLeaveGround = false;

  this.jumpSound = null;
  this.walkSound = null;
  this.slideSound = null;
  this.fallSound = null;
  this.deathSound = null;
  // this.piecesSound = [];
  this.pieceSound = null;

  this.jumpCount = 0;
  this.dead = false;

  this.leftFirstPress = false;
  this.rightFirstPress = false;

  this.particlesGroup = null;
  this.PARTICLES_AMOUNT = 4;
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.Player.prototype.create = function (level) {
  var particle = null,
    particleX = null,
    particleY = null,
    increaseAmount = null;

  //Save the walls in the level
  this.level = level;

  //Put the player in the game's world
  this.playerSprite = this.game.add.sprite(0, 0, 'player');
  this.playerSprite.anchor.setTo(0.5, 1);

  //Enable physics on the player
  this.game.physics.arcade.enable(this.playerSprite);

  //Set player minimum and maximum movement speed
  this.playerSprite.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 20);

  //Since we're jumping we need gravity
  this.game.physics.arcade.gravity.y = this.GRAVITY;

  this.setPlayerPositionInLevel();

  //Capture certain keys to prevent their default actions in the browser.
  //This is only necessary because this is an HTML5 game. Games on other
  //platforms may not need code like this.
  this.game.input.keyboard.addKeyCapture([
    this.leftKey1,
    this.rightKey1,
    this.jumpKey1,
    this.jumpKey2,
    this.downKey1
  ]);

  // disable physics in the player's body while the game starts
  this.playerSprite.body.enable = false;

  // create a bitmap texture for drawing lines
  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    this.bitmap = this.game.add.bitmapData(this.game.width, this.game.height);
    this.bitmap.context.fillStyle = 'rgb(0, 0, 255)';
    this.bitmap.context.strokeStyle = 'rgb(0, 0, 255)';
    this.game.add.image(0, 0, this.bitmap);
  }

  if (!this.jumpSound) {
    this.jumpSound = this.game.add.sound('jump', 0.2);
    this.jumpSound.onPlay.add(function () {
      this.slideSound.stop();
    }, this);
  }

  if (!this.walkSound) {
    this.walkSound = this.game.add.sound('walk', 0.1);
    this.walkSound.onPlay.add(function () {
      this.slideSound.stop();
    }, this);
    this.walkSound.onStop.add(function () {
      if (this.onGround === true) {
        this.slideSound.play();
      }
    }, this);
  }

  if (!this.slideSound) {
    this.slideSound = this.game.add.sound('slide', 0.08, true);
  }

  if (!this.fallSound) {
    this.fallSound = this.game.add.sound('fall', 0.1);
  }

  if (!this.deathSound) {
    this.deathSound = this.game.add.sound('death', 0.3);
    this.deathSound.onPlay.add(function () {
      this.slideSound.stop();
    }, this);
  }

  // load the audio for pieces
  if (!this.pieceSound) {
    this.pieceSound = this.game.add.sound('piece', 0.2);
  }

  // create the group that will contain the particles that will be used during
  // player death
  this.particlesGroup = this.game.add.group();

  particleX = 0;
  particleY = 0;
  increaseAmount = this.playerSprite.width / this.PARTICLES_AMOUNT;

  while (this.particlesGroup.children.length < Math.pow(this.PARTICLES_AMOUNT, 2)) {
    particle = this.game.add.sprite(particleX, particleY, 'player');
    particle.width = particle.height = increaseAmount;
    particle.originalX = particle.x;
    particle.originalY = particle.y;

    this.game.physics.arcade.enable(particle);
    particle.body.allowGravity = false;

    this.particlesGroup.addChild(particle);

    particleX += particle.width;
    if (particleX >= this.playerSprite.width) {
      particleX = 0;
      particleY += particle.height;
    }
  }

  this.particlesGroup.x = -100;
  this.particlesGroup.y = -100;

  // ═ dialogue ═══════════════════════════════════════════════════════════════╗
  this.dialogueGroup = this.game.add.group();

  this.dialogueBackground = this.game.add.image(0, 0, 'dialogue_background', 0, this.dialogueGroup);
  this.dialogueBackground.width = this.DIALOGUE_WIDTH;
  this.dialogueBackground.height = this.DIALOGUE_TEXT_V_PADDING * 2;

  this.dialogueMark = this.game.add.image(0, 0, 'dialogue_mark', 0, this.dialogueGroup);
  this.dialogueMark.y = this.dialogueBackground.height + 8;

  // create the bitmap for the day phrase
  this.dialogueText = this.game.add.bitmapText(0, 0, this.fontId, '', 18, this.dialogueGroup);
  this.dialogueText.x = this.DIALOGUE_TEXT_H_PADDING;
  this.dialogueText.y = this.DIALOGUE_TEXT_V_PADDING;
  this.dialogueText.maxWidth = this.DIALOGUE_TEXT_MAX_WIDTH;
  this.dialogueText.tint = 0x161a1e;

  this.dialogueGroup.alpha = 0;
  // ══════════════════════════════════════════════════════════════════════════╝
};

BasicGame.Player.prototype.update = function () {
  var leftPressed = false;
  var rightPressed = false;
  var upPressed = false;
  var downPressed = false;
  var onRightWall = false;
  var onLeftWall = false;
  var headHit = false;
  var jumpMul = 0;

  // update the position of the dialogue bubble based on the player's position
  this.placeDialogueGroup();

  this.game.physics.arcade.isPaused = this.gameObj.isLoadingLevel;
  if (this.gameObj.isLoadingLevel) {
    this.playerSprite.body.velocity.y = 0;
    return;
  }

  if (this.gameObj.isLoadingLevel === true || this.dead === true) {
    if (this.dead === true) {
      this.playerSprite.body.acceleration.x = 0;

      // check if a particle is out of the world to disable its gravity
      this.particlesGroup.forEach(function (particle) {
        var particleX = this.particlesGroup.x + particle.x;
        var particleY = this.particlesGroup.y + particle.y;
        if (particleX < 0 || particleX > this.game.world.width ||
          particleY > this.game.world.height) {
          particle.body.allowGravity = false;
          particle.body.acceleration.x = 0;
          particle.body.velocity.y = 0;
        }
      }, this);
    }
    return;
  }

  if (this.playerSprite.top > this.game.world.height) {
    this.dead = true;
    this.playerSprite.body.velocity.y = 0;
    this.playerSprite.body.allowGravity = false;
    this.gameObj.subtractAllLifes();
    return;
  }

  // ___________________________________________________________________________
  // check collisions
  // ___________________________________________________________________________
  this.checkCollisions();

  // ___________________________________________________________________________
  // handle player movement
  // ___________________________________________________________________________

  leftPressed = this.leftInputIsActive() === true;
  rightPressed = this.rightInputIsActive() === true;
  upPressed = this.upInputIsActive() === true;
  downPressed = this.downInputIsActive() === true;

  if (this.duckTweenPlaying === true && !downPressed) {
    this.playBaseSizeTween();
    this.duckTweenPlaying = false;
  }

  if (this.dialogueDisplayed === true && this.dialogueFadeOutStarted === false &&
    (leftPressed || rightPressed || upPressed)) {
    // if the player is moving and the dialogue box is visible, start the timer
    // to fade it out
    this.dialogueFadeOutStarted = true;
    this.gameObj.helper.timer(this.waitTime, this.hideDialogue, this);
  }

  if (this.playerSprite.touchingPiece === false) {
    this.onGround = this.playerSprite.body.touching.down === true;
    onRightWall = this.playerSprite.body.touching.right === true && this.playerSprite.body.velocity.y > -500;
    onLeftWall = this.playerSprite.body.touching.left === true && this.playerSprite.body.velocity.y > -500;
    headHit = this.playerSprite.body.touching.up === true && this.onGround === false;
  }

  if (headHit) {
    this.isJumping = false;
  }

  // jump jump jump
  if (this.isJumping && this.jumpFeedbackStarted === false) {
    this.jumpFeedback();
  }

  if (this.onGround || onRightWall || onLeftWall) {
    this.jumpCount = 0;
  }

  // reset some values to default if the player is touching the ground
  if (this.onGround) {
    this.onGroundFeedback();
  }
  else {
    this.walkSound.stop();
    this.slideSound.stop();

    // check if the character just left the ground
    if (this.justLeaveGround === false && this.playerSprite.body.velocity.y > 0) {
      this.justLeaveGround = true;

      // create a time to allow the player walk in the air for a while after
      // leaving a platform
      this.walkInAirTimer = this.game.time.create(true);
      this.walkInAirTimer.add(150, function () {
        this.jumpCount++;
      }, this);

      // restart the position of the player's body after an amount of time has
      // passed
      this.walkInAirTimer.start();
    }
  }

  // handle behaviour of player on walls
  if (onRightWall || onLeftWall) {
    this.onWallFeedback();
    this.playerSprite.body.velocity.y = this.SLID_SPEED;

    this.currentJumpMultiplier = 0;
    this.jumpChance = false;
  }

  if (leftPressed && this.playerSprite.left > 0) {
    // set the player velocity to move left
    this.rightFirstPress = false;
    this.playerSprite.body.acceleration.x = -this.ACCELERATION;

    if (this.onGround) {
      if (!this.leftFirstPress) {
        this.leftFirstPress = true;
        this.currentJumpMultiplier = 0;
        this.walkFeedback(true);
      }
      else {
        this.currentJumpMultiplier += this.JUMP_MULTIPLIER_AMOUNT;
      }
    }
    else {
      if (!onLeftWall) {
        this.slideSound.stop();
      }
      else if (upPressed) {
        this.playerSprite.body.acceleration.x = this.ACCELERATION_WALL;
        this.playerSprite.body.velocity.y = this.JUMP_SPEED_WALL;

        if (this.isJumping && this.jumpFeedbackStarted === false) {
          this.jumpFeedback();
        }
      }
    }
  }
  else if (rightPressed && this.playerSprite.right < this.game.world.width) {
    // If the RIGHT key is down, set the player velocity to move right
    this.leftFirstPress = false;
    this.playerSprite.body.acceleration.x = this.ACCELERATION;

    if (this.onGround) {
      if (this.rightFirstPress === false) {
        this.rightFirstPress = true;
        this.currentJumpMultiplier = 0;
        this.walkFeedback();
      }
      else {
        this.currentJumpMultiplier += this.JUMP_MULTIPLIER_AMOUNT;
      }
    }
    else {
      if (!onRightWall) {
        this.slideSound.stop();
      }
      else if (upPressed) {
        this.playerSprite.body.acceleration.x = -this.ACCELERATION_WALL;
        this.playerSprite.body.velocity.y = this.JUMP_SPEED_WALL;

        if (this.isJumping && this.jumpFeedbackStarted === false) {
          this.jumpFeedback();
        }
      }
    }
  }
  else {
    // not moving in X direction
    this.leftFirstPress = this.rightFirstPress = false;
    this.playerSprite.body.acceleration.x = 0;
    this.playerSprite.body.velocity.x = 0;
    this.currentJumpMultiplier = 0;
    this.walkSound.stop();
    this.slideSound.stop();

    if (downPressed) {
      this.duckFeedback();
    }

    /* if (this.walkTweenPlayed === true) {
      this.playBaseSizeTween();
      this.walkTweenPlayed = false;
    } */
  }

  if (upPressed && !headHit) {
    jumpMul = Math.min(this.currentJumpMultiplier, this.JUMP_MULTIPLIER_MAX);
    this.playerSprite.body.velocity.y = this.JUMP_SPEED;
    this.playerSprite.body.velocity.y += this.JUMP_SPEED * jumpMul;
    this.jumpMultiplier = this.JUMP_MULTIPLIER;
    if (!this.isJumping) {
      this.isJumping = true;
    }
  }
  else {
    this.isJumping = false;
  }

  // sprite out of the bounds of the game world
  if (this.playerSprite.left < 0) this.playerSprite.left = 0;
  if (this.playerSprite.right > this.game.world.width) this.playerSprite.left = this.game.world.width - this.playerSprite.width;

  // make the jump a bit higher if the player keeps pressing the jump button
  // if (this.input.keyboard.downDuration(this.jumpKey1, this.JUMP_TIME) === true ||
  //     this.input.keyboard.downDuration(this.jumpKey2, this.JUMP_TIME)
  // ) {
  //   this.playerSprite.body.velocity.y += this.JUMP_SPEED * 0.1 * this.jumpMultiplier;
  //   if (this.jumpMultiplier > 0.1)
  //     this.jumpMultiplier *= 0.95;
  //   else
  //     this.jumpMultiplier = 0;
  // }
  // else {
  //   this.jumpMultiplier = 0;
  // }

  if (headHit && !this.fallSound.isPlaying) {
    this.fallSound.play();
  }

  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    this.bitmap.dirty = true;
  }
};

BasicGame.Player.prototype.render = function () {
  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    // Sprite debug info
    this.game.debug.bodyInfo(this.playerSprite, 0, 100, 'rgba(0,255,0,0.4)');
    // this.game.debug.body(this.playerSprite, 'rgba(0,255,0,0.4)');
  }

  if (BasicGame.Game.developmentMode === true) { // [ development mode ]
    // clear the bitmap where we are drawing our lines
    this.bitmap.context.clearRect(0, 0, this.game.width, this.game.height);
  }
};

BasicGame.Player.prototype.shutdown = function () {
  this.playerSprite.destroy();
  this.particlesGroup.destroy();
  this.jumpSound.destroy();
  this.walkSound.destroy();
  this.slideSound.destroy();
  this.fallSound.destroy();
  this.deathSound.destroy();
  this.pieceSound.destroy();
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

BasicGame.Player.prototype.leftInputIsActive = function () {
  return this.input.keyboard.isDown(this.leftKey1) ||
    this.input.keyboard.isDown(this.leftKey2);
};

BasicGame.Player.prototype.rightInputIsActive = function () {
  return this.input.keyboard.isDown(this.rightKey1) ||
    this.input.keyboard.isDown(this.rightKey2);
};

BasicGame.Player.prototype.upInputIsActive = function (duration) {
  if ((this.input.keyboard.downDuration(this.jumpKey1, duration) ||
    this.input.keyboard.downDuration(this.jumpKey2, duration) ||
    this.input.keyboard.downDuration(this.jumpKey3, duration) ||
    this.input.keyboard.downDuration(this.jumpKey4, duration)) &&
    this.jumpCount === 0) {
    this.jumpCount++;
    return true;
  }

  return false;
};

BasicGame.Player.prototype.downInputIsActive = function () {
  return this.input.keyboard.isDown(this.downKey1) ||
    this.input.keyboard.isDown(this.downKey2);
};

BasicGame.Player.prototype.onGroundFeedback = function () {
  var squashTween = null;
  if (this.justLeaveGround === true && !this.squashTweenPlaying) {
    squashTween = this.game.add.tween(this.playerSprite);
    squashTween.to({
      width: this.BASE_SIZE + this.STRETCH_SQUASH_VALUE,
      height: this.BASE_SIZE - this.STRETCH_SQUASH_VALUE
    }, 150, Phaser.Easing.Exponential.Out);
    squashTween.onComplete.add(function () {
      this.playBaseSizeTween();
      this.squashTweenPlaying = false;
    }, this);
    squashTween.start();
    this.squashTweenPlaying = true;
  }

  this.isFalling = false;
  this.isJumping = false;

  if (this.justLeaveGround === true) {
    this.fallSound.play();
  }

  this.justLeaveGround = false;
};

BasicGame.Player.prototype.walkFeedback = function (left) {
  var squashTween = null;

  if (!this.walkTweenPlayed) {
    squashTween = this.game.add.tween(this.playerSprite);
    squashTween.to({
      width: this.BASE_SIZE + this.STRETCH_SQUASH_VALUE / 1.5
    }, 150, Phaser.Easing.Exponential.Out);
    squashTween.onComplete.add(function () {
      this.playBaseSizeTween();
      this.walkTweenPlayed = false;
    }, this);
    squashTween.start();
    this.walkTweenPlayed = true;
  }

  if (!this.walkSound.isPlaying) {
    this.walkSound.play();
  }
};

BasicGame.Player.prototype.duckFeedback = function () {
  var squashTween = null;

  if (!this.duckTweenPlaying) {
    squashTween = this.game.add.tween(this.playerSprite);
    squashTween.to({
      width: this.BASE_SIZE + this.STRETCH_SQUASH_VALUE,
      height: this.BASE_SIZE - this.STRETCH_SQUASH_VALUE
    }, 150, Phaser.Easing.Exponential.Out);
    // squashTween.onComplete.add(function () {
    //   this.playBaseSizeTween();
    //   this.duckTweenPlaying = false;
    // }, this);
    squashTween.start();
    this.duckTweenPlaying = true;
  }
};

BasicGame.Player.prototype.onWallFeedback = function () {
  this.playBaseSizeTween();
  if (!this.slideSound.isPlaying) this.slideSound.play();
};

BasicGame.Player.prototype.playBaseSizeTween = function () {
  var baseSizeTween = null;
  if (this.playerSprite.width !== this.BASE_SIZE && !this.baseSizeTweenPlaying) {
    baseSizeTween = this.game.add.tween(this.playerSprite);
    baseSizeTween.to({
      width: this.BASE_SIZE,
      height: this.BASE_SIZE
    }, 150, Phaser.Easing.Exponential.Out);
    baseSizeTween.onComplete.add(function () {
      this.playerSprite.width = this.BASE_SIZE;
      this.playerSprite.height = this.BASE_SIZE;
      this.baseSizeTweenPlaying = false;
    }, this);
    baseSizeTween.start();
    this.baseSizeTweenPlaying = true;
  }
};

BasicGame.Player.prototype.jumpFeedback = function () {
  var stretchTween;

  this.jumpFeedbackStarted = true;

  stretchTween = this.game.add.tween(this.playerSprite);
  stretchTween.to({
    width: this.BASE_SIZE - this.STRETCH_SQUASH_VALUE,
    height: this.BASE_SIZE + this.STRETCH_SQUASH_VALUE
  }, 200, Phaser.Easing.Exponential.Out);
  stretchTween.onComplete.add(function () {
    this.jumpFeedbackStarted = false;
  }, this);
  stretchTween.start();

  // this.isJumping = true;
  this.currentJumpMultiplier = 0;

  if (!this.jumpSound.isPlaying) {
    this.jumpSound.play();
  }
};

/**
 * Method that checks collisions against walls, the ground and collectable pieces
 */
BasicGame.Player.prototype.checkCollisions = function () {
  this.playerSprite.touchingPiece = false;

  if (this.level.hasFloor === true) {
    this.game.physics.arcade.collide(this.playerSprite, this.level.ground);
  }

  // check if the player touches a piece
  this.game.physics.arcade.overlap(this.playerSprite, this.level.pieces,
    function (player, piece) {
      player.touchingPiece = true;
      piece.body.enable = false;
      piece.alpha = 0;

      // (this.piecesSound[this.collectedPieces++]).play();
      this.collectedPieces++;
      this.pieceSound.play();

      if (this.collectedPieces === this.level.pieces.children.length) {
        // the level has been finished
        this.gameObj.levelEnded();
      }
    },
    null,
    this);

  if (this.level.hasSpikes === true) {
    this.game.physics.arcade.collide(this.playerSprite, this.level.walls,
      function (player, spikePlatform) {
        if (spikePlatform.spikeRef && spikePlatform.spikeRef.isHidden === true) {
          if (this.gameObj.level.spikeSound.isPlaying === false) {
            this.gameObj.level.spikeSound.play();
          }
          spikePlatform.spikeRef.showTween.start();
        }
      }, null, this);

    if (this.level.spikes.openedSpikes > 0) {
      this.game.physics.arcade.overlap(this.playerSprite, this.level.spikes,
        function (player, spike) {
          if (this.dead === false) {
            this.gameObj.subtractAllLifes(true);
          }
        }, null, this);
    }
  } else {
    this.game.physics.arcade.collide(this.playerSprite, this.level.walls);
  }
};


//Function that checks if  the player is completely in shadows or not
BasicGame.Player.prototype.isInShadow = function (checkLeft, checkRight) {
  //Trace rays toward the light from each corner of the player sprite.
  //If ALL the rays intersects a wall, then the player is in the shadows
  var lightImage = BasicGame.light.lightGroup.getAt(0);
  var raysToLight = [];
  var offset = 8;

  if (checkLeft === true) {
    // top left corner
    raysToLight.push(new Phaser.Line(this.playerSprite.left + offset,
      this.playerSprite.top + offset,
      lightImage.x,
      lightImage.y));

    // bottom left corner
    raysToLight.push(new Phaser.Line(this.playerSprite.left + offset,
      // this.playerSprite.bottom - offset,
      this.playerSprite.bottom,
      lightImage.x,
      lightImage.y));
  }

  if (checkRight === true) {
    // top right corner
    raysToLight.push(new Phaser.Line(this.playerSprite.right - offset,
      this.playerSprite.top + offset,
      lightImage.x, lightImage.y));

    // bottom right corner
    raysToLight.push(new Phaser.Line(this.playerSprite.right - offset,
      // this.playerSprite.bottom - offset,
      this.playerSprite.bottom,
      lightImage.x, lightImage.y));
  }

  if (BasicGame.Game.developmentMode === true) {
    // [ development mode ]
    this.drawLinesToLight(lightImage, raysToLight);
  }

  // Test if any walls intersect the ray
  return this.allRaysIntersectWall(raysToLight);
};

BasicGame.Player.prototype.allRaysIntersectWall = function (rays) {
  // check intersections for each ray
  // (!) if at least one ray has no intersection with a wall, then the player isn't in shadow
  var hiddenRays = 0;
  rays.forEach(function (ray) {
    var intersect = null;

    //for each of the walls...
    this.level.walls.forEach(function (wall) {
      if (!intersect) {
        // create an array of lines that represent the four edges of each wall
        var lines = [
          new Phaser.Line(wall.x, wall.y, wall.x + wall.width, wall.y),
          new Phaser.Line(wall.x, wall.y, wall.x, wall.y + wall.height),
          new Phaser.Line(wall.x + wall.width, wall.y, wall.x + wall.width, wall.y + wall.height),
          new Phaser.Line(wall.x, wall.y + wall.height, wall.x + wall.width, wall.y + wall.height)
        ];

        // test each of the edges in the wall against the ray from the player to the light
        for (var i = 0; i < lines.length; i++) {
          intersect = Phaser.Line.intersects(ray, lines[i]);
          if (intersect) {
            // if there is an intersect, the wall must be in the way
            break;
          }
        }
      }
    }, this);

    if (intersect) {
      // this edge is hidden. :D
      hiddenRays++;
    }
  }, this);

  return (hiddenRays === rays.length);
};

BasicGame.Player.prototype.drawLinesToLight = function (lightImage, raysToLight) {
  // draw a line from the light to the targets
  for (var i = 0; i < raysToLight.length; i++) {
    this.bitmap.context.beginPath();
    this.bitmap.context.moveTo(raysToLight[i].start.x, raysToLight[i].start.y);
    this.bitmap.context.lineTo(lightImage.x, lightImage.y);
    this.bitmap.context.stroke();
  }
};

BasicGame.Player.prototype.updateLevel = function (level) {
  this.collectedPieces = 0;
  this.playerSprite.body.reset(this.playerSprite.x, this.playerSprite.y);
  this.playerSprite.body.enable = false;
  this.level = level;
  this.justLeaveGround = false;
  this.slideSound.stop();
  this.enableBody();
  this.setPlayerPositionInLevel();
  this.dead = false;
  this.dialogueFadeOutStarted = false;
};

BasicGame.Player.prototype.explote = function () {
  var timer;

  this.dead = true;

  // stop sounds
  this.slideSound.stop();
  this.jumpSound.stop();
  this.walkSound.stop();
  this.fallSound.stop();

  this.playerSprite.body.enable = false;
  this.playerSprite.body.acceleration.x = 0;
  this.playerSprite.body.velocity.y = 0;
  this.playerSprite.body.allowGravity = false;

  timer = this.game.time.create(true);
  timer.add(100, function () {
    this.deathSound.play();
  }, this);
  timer.start();

  this.playerSprite.alpha = 0;

  this.particlesGroup.x = this.playerSprite.x;
  this.particlesGroup.y = this.playerSprite.y;

  this.particlesGroup.forEach(function (particle) {
    particle.x = particle.originalX;
    particle.y = particle.originalY;
    particle.body.allowGravity = true;
    particle.body.velocity.y = -50 * this.gameObj.helper.randomNumber(10, 20);
    if (this.gameObj.helper.randomNumber(1, 10) > 5) {
      particle.body.acceleration.x = -this.gameObj.helper.randomNumber(100, 200);
    }
    else {
      particle.body.acceleration.x = this.gameObj.helper.randomNumber(100, 200);
    }
  }, this);
};

BasicGame.Player.prototype.restartLevel = function (hideDarknessDelay) {
  this.collectedPieces = 0;
  this.walkSound.stop();
  this.slideSound.stop();
  this.setPlayerPositionInLevel();
  // this.game.time
  //   .create(true)
  //   .add(hideDarknessDelay || 100, function () {
  //     this.enableBody();
  //   }, this)
  //   .timer.start();
  this.dead = false;
};

BasicGame.Player.prototype.gameInDarkness = function () {
  this.playerSprite.alpha = 1;
};

BasicGame.Player.prototype.placeDialogueGroup = function () {
  if (this.flipDialogue === true) {
    this.dialogueGroup.x = this.playerSprite.centerX - this.dialogueGroup.width + 16;
  }
  else {
    this.dialogueGroup.x = this.playerSprite.centerX;
  }
  this.dialogueGroup.y = this.playerSprite.top - this.dialogueGroup.height - 6.8;
};

BasicGame.Player.prototype.showDialogue = function (immediateHide) {
  var dayObj = this.gameObj.days.getDay(BasicGame.currentLevel);
  var displayTween = null;
  var dialogueHeight = 0;

  if (dayObj.text) {
    this.waitTime = (immediateHide === true) ? 100 : dayObj.waitTime * 1000;
    this.dialogueText.text = dayObj.text[BasicGame.language];
    this.dialogueBackground.height = this.dialogueText.textHeight + this.DIALOGUE_TEXT_V_PADDING * 2;
    this.dialogueMark.y = this.dialogueBackground.height + 8;
    dialogueHeight = this.dialogueMark.bottom;
    this.game.world.bringToTop(this.dialogueGroup);

    if (this.DIALOGUE_WIDTH + this.playerSprite.centerX > this.game.width) {
      this.flipDialogue = true;
      this.dialogueMark.x = this.DIALOGUE_WIDTH - 18;
    }
    else {
      this.flipDialogue = false;
      this.dialogueMark.x = 0;
    }

    this.dialogueGroup.alpha = 0;
    this.dialogueGroup.width = 0;
    this.dialogueGroup.height = 0;
    displayTween = this.game.add.tween(this.dialogueGroup);
    displayTween.to({
      alpha: 1,
      width: this.DIALOGUE_WIDTH,
      height: dialogueHeight
    }, this.FADE_SPEED, Phaser.Easing.Exponential.Out);
    displayTween.onComplete.add(function () {
      this.dialogueDisplayed = true;
    }, this);
    displayTween.start();
  }
};

BasicGame.Player.prototype.hideDialogue = function (delay) {
  var displayTween = this.game.add.tween(this.dialogueGroup);
  displayTween.to({
    alpha: 0
  }, this.FADE_SPEED, Phaser.Easing.Cubic.Out, false, delay);
  displayTween.onComplete.add(function () {
    this.dialogueDisplayed = false;
    this.dialogueFadeOutStarted = false;
    this.dialogueGroup.width = 0;
    this.dialogueGroup.height = 0;
  }, this);
  displayTween.start();
};

BasicGame.Player.prototype.enableBody = function () {
  this.playerSprite.body.enable = true;
  this.playerSprite.body.allowGravity = true;
};

BasicGame.Player.prototype.setPlayerPositionInLevel = function () {
  this.playerSprite.position.set(this.level.initPlayerPos.x + this.HALF_SIZE,
    this.level.initPlayerPos.y + this.BASE_SIZE);
  this.playerSprite.body.reset(this.playerSprite.x, this.playerSprite.y);
};

},{"BasicGame":1}],10:[function(require,module,exports){
var BasicGame = require('BasicGame');
window.onload = function () {
    //Create your Phaser game and inject it into the gameContainer div.
    //We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    var game = new Phaser.Game(1024, 640, Phaser.CANVAS, 'gameContainer');

    //Add the States your game has.
    //You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
    game.state.add('Boot', BasicGame.Boot);
    game.state.add('Preloader', BasicGame.Preloader);
    game.state.add('MainMenu', BasicGame.MainMenu);
    game.state.add('Game', BasicGame.Game);
    game.state.add('TheEnd', BasicGame.TheEnd);

    //Now start the Boot state.
    game.state.start('Boot');
};
},{"BasicGame":1}],11:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.Boot = function (game) {
};

BasicGame.Boot.prototype.preload = function () {
  //  Here we load the assets required for our preloader (in this case a background and a loading bar)
  this.load.image('preloaderBackground', 'assets/sprites/preloader_background.png');
  this.load.image('preloaderBar', 'assets/sprites/preloader_bar.png');

  // Add the plugin for debugging
  // this.game.add.plugin(Phaser.Plugin.Debug);
};

BasicGame.Boot.prototype.create = function () {
  //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
  this.input.maxPointers = 1;

  //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
  // this.stage.disableVisibilityChange = true;

  //If the parent container of the game is the browser window (ie. document.body), rather than a div, this should set to true.
  this.scale.parentIsWindow = true;

  // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  if (this.game.device.desktop) {
    //  If you have any desktop specific settings, they can go in here
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  } else {
    //  Same goes for mobile settings.
    //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
    this.scale.setMinMax(480, 260, 1024, 640);
    this.scale.forceLandscape = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    this.scale.refresh();
  }

  // this.scale.setScreenSize(false);
};

BasicGame.Boot.prototype.update = function () {
  //  By this point the preloader assets have loaded to the cache, we've set the game settings
  //  So now let's start the real preloader going
  if (localStorage.getItem("oh-my-blob")) {
    BasicGame.readCode(localStorage.getItem("oh-my-blob"));
  }
  this.state.start('Preloader');
};
},{"BasicGame":1}],12:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.Credits = function (game) {
  this.mainMenuKey1 = Phaser.Keyboard.Z;
  this.mainMenuKey2 = Phaser.Keyboard.SPACEBAR;
  this.goingToMainMenu = false;
  this.fontId = 'font';
  this.creditsImage = null;
  this.creditsMusic = null;
  this.showCreditsTimer = null;
};

BasicGame.Credits.prototype.preload = function(){
  this.load.image('credits', 'assets/images/credits-min.png');
};

BasicGame.Credits.prototype.create = function(){
  var _self = this;

  // set the default values for some properties of the state
  this.goingToGame = false;

  // set the backgound color
  this.game.stage.backgroundColor = 0x000000;

  // load the image that has the credits
  this.creditsImage = this.game.add.image(0,
    this.game.world.height - 200,
    'credits');

  // add the game title
  this.gameTitle = this.game.add.image(this.game.world.width / 2,
    this.game.world.height / 2, 'title');
  this.gameTitle.anchor.set(0.5, 0.5);
  this.gameTitle.alpha = 0;

  var tapa = new Phaser.BitmapData(this.game,
    'credits_tapa',
    this.game.width,
    this.game.height);
  tapa.ctx.rect(0, 0, this.game.width, 50);
  tapa.ctx.fillStyle = '#000';
  tapa.ctx.fill();
  this.game.add.sprite(0, this.game.height - 50, tapa);

  this.mainmenuBitmapText = this.add.bitmapText(this.game.world.width - 20,
    this.game.world.height - 20,
    this.fontId,
    "(Z) Main menu / (Z) Menú principal",
    32,
    this.textBitmapsGroup);
  this.mainmenuBitmapText.align = "left";
  this.mainmenuBitmapText.tint = 0xF2C249;
  this.mainmenuBitmapText.anchor.set(1, 1);

  // add the credits music
  if (!this.creditsMusic) {
    this.creditsMusic = this.game.add.sound('splash_music', 0.8, false);
    this.creditsMusic.play();
  }
  else {
    this.creditsMusic.play();
  }

  this.scrollTween = this.game.add.tween(this.creditsImage);
  this.scrollTween.to({y: -this.creditsImage.height},
    75 * 1000,
    null,
    false);

  this.scrollTween.onComplete.add(function(){
    // show the game name in the middle of the screen
    // this.creditsMusic.fadeOut(7000);
    this.alphaTween = this.game.add.tween(this.gameTitle);
    this.alphaTween.to({alpha: 1},
      8000,
      null,
      true);
  }, this);

  this.scrollTween.start();
};

BasicGame.Credits.prototype.update = function(){
  if (this.goingToGame === true) {
    return;
  }

  if (this.input.keyboard.isDown(this.mainMenuKey1) ||
      this.input.keyboard.isDown(this.mainMenuKey1)
  ) {
    this.goingToGame = true;
    this.creditsMusic.stop();
    this.scrollTween.stop();
    this.state.start('MainMenu');
  }
};
},{"BasicGame":1}],13:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.Game = function (game) {
  // constants
  this.LIFES_AMOUNT = 3;
  this.FADE_DURATION = 700;
  this.KEY_PAUSE = Phaser.Keyboard.P;
  this.KEY_MUTE = Phaser.Keyboard.M;
  this.KEY_CHAT = Phaser.Keyboard.C;
  this.GO_TO_NEXT_LEVEL_DELAY
  this.DARKNESS_ALPHA = 1;
  this.GO_TO_NEXT_LEVEL_DELAY = 1500;
  this.PAUSE_WIDTH = 660; // Illustrator
  this.PAUSE_HEIGHT = 470; // Illustrator

  // destroyable objects (sprites, sounds, groups, tweens...)
  this.background = null;
  this.lifesGroup = null;
  this.flashGroup = null;
  this.darknessGroup = null;
  this.music = null;
  this.putDarkTween = null;
  this.removeDarkTween = null;
  this.noiseImage = null;
  this.savingText = null;
  this.uiGroup = null;
  this.pauseGroup = null;

  // references to other classes
  this.days = null;
  this.player = null;
  this.level = null;
  this.light = null;
  this.eye = null;
  this.lightning = null;
  this.helper = null;

  // global properties
  this.showFPS = null;
  this.map = null;
  this.inDarkness = null;
  this.isLoadingLevel = null;
  this.lifes = null;
  this.pausedOn = 0;
  this.mutedOn = 0;
  this.checkMKey = true;
  this.checkCKey = true;
  this.changingLevel = false;
  this.fontId = 'font';
  this.savingMsg = {
    "es": "Guardando progreso...",
    "en": "Saving progress..."
  };
  this.levelCompleted = null;
};

BasicGame.Game.developmentMode = false;
BasicGame.isRetrying = false;
BasicGame.ignoreSave = false;

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.Game.prototype.preload = function () {
  // create the days object
  this.days = new BasicGame.Days();
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  // define the size of the world
  this.game.world.setBounds(0, 0, this.game.width, this.game.height);
  // init the level
  this.level = new BasicGame.Level(this.game, this);
  // init the player
  this.player = new BasicGame.Player(this.game, this.input, this);
  // init a light
  this.light = new BasicGame.Light(this.game, this);
  BasicGame.light = this.light;
  // init the EYE
  this.eye = new BasicGame.Eye(this.game, this);
  // init the lightning
  this.lightning = new BasicGame.Lightning(this.game, this);
  // init the helper
  this.helper = new BasicGame.Helper(this.game, this);
};

BasicGame.Game.prototype.create = function () {
  var darknessBitmap = null;
  var darknessSprite = null;
  var flashBitmap = null;
  var flashSprite = null;

  // ═════════════════════════════════════════════
  // define game properties and setup game objects
  this.lifes = this.LIFES_AMOUNT;
  this.showFPS = false;
  this.inDarkness = true;
  this.levelCompleted = false;

  // set stage background
  this.background = this.game.add.image(0, 0, this.getSkyName());
  this.background.width = this.game.world.width;
  this.background.height = this.game.world.height;

  this.noiseImage = this.game.add.image(0, 0, 'noise');
  this.noiseImage.alpha = .5;

  this.savingText = this.game.add.bitmapText(this.game.world.width / 2,
    this.game.world.height / 2,
    this.fontId,
    this.savingMsg[BasicGame.language],
    18);
  this.savingText.anchor.set(0.5, 0.5);
  this.savingText.align = "center";
  this.savingText.tint = 0xfafafa;
  this.savingText.alpha = 0;

  // configure the camera for shaking
  this.game.camera.setSize(this.game.world.width / 2, this.game.world.height / 2);
  this.game.camera.setPosition(0, 0);

  // add the music
  if (!this.music) {
    this.music = this.game.add.sound('level_music', 0.1, true);
  }

  this.game.input.keyboard.addKeyCapture([
    this.KEY_PAUSE,
    this.KEY_MUTE,
    this.KEY_CHAT
  ]);

  // ═══════════════════
  // create the UI group
  this.createUIGroup();

  // ═══════════════════
  // create the Pause group
  this.createPauseGroup();

  // ═══════════════════
  // create the darkness
  this.darknessGroup = this.add.group();
  darknessBitmap = new Phaser.BitmapData(this.game,
    'darkness',
    this.game.width,
    this.game.height);
  darknessBitmap.ctx.rect(0, 0, this.game.width, this.game.height);
  darknessBitmap.ctx.fillStyle = '#212121';
  darknessBitmap.ctx.fill();
  darknessSprite = new Phaser.Sprite(this.game, 0, 0, darknessBitmap);
  this.darknessGroup.addChild(darknessSprite);

  // create the darkness tween
  this.putDarkTween = this.game.add.tween(this.darknessGroup.getChildAt(0));
  this.putDarkTween.to({ alpha: this.DARKNESS_ALPHA }, this.FADE_DURATION, Phaser.Easing.Quadratic.Out, false);
  this.putDarkTween.onComplete.add(this.putDarkTweenCompleted, this);

  // create the brightness tween
  this.removeDarkTween = this.game.add.tween(this.darknessGroup.getChildAt(0));
  this.removeDarkTween.to({ alpha: 0 }, 700, null, false);
  this.removeDarkTween.onComplete.add(this.removeDarkTweenCompleted, this);

  // create flash sprite
  this.flashGroup = this.add.group();
  flashBitmap = new Phaser.BitmapData(this.game,
    'flash',
    this.game.width,
    this.game.height);
  flashBitmap.ctx.rect(0, 0, this.game.width, this.game.height);
  flashBitmap.ctx.fillStyle = '#fff';
  flashBitmap.ctx.fill();
  flashSprite = new Phaser.Sprite(this.game, 0, 0, flashBitmap);
  flashSprite.alpha = 0;
  this.flashGroup.addChild(flashSprite);

  // ════════════════
  // create the level
  this.level.create();

  // create the player
  this.player.create(this.level);

  // create the group of sprites for lifes
  this.lifesGroup = this.game.add.group();
  this.createLifeIndicators();
  this.lifesGroup.x = 16;
  this.lifesGroup.y = 16;

  // create the light
  this.light.create(this.level);

  // create THE EYE
  this.eye.create(this.player, this.level, this.lightning);

  // ═════════════════════════════════════════════════
  // bring to top some things so the game looks better
  this.arrangeRenderLayers();

  BasicGame.changeHTMLBackground(this.helper.getSkyColor(BasicGame.currentLevel));

  // show FPS
  if (BasicGame.Game.developmentMode) {
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(this.game.world.width / 2 - 80, 100, '', { font: '80px Arial', fill: '#fefefe' });
  }
};

BasicGame.Game.prototype.update = function () {
  // update the light
  this.light.update();

  // update The Player
  this.player.update(this.light);

  // update The Eye
  this.eye.update();

  // update the lightning
  this.lightning.update();

  if (this.showingDarkness === true) {
    return;
  }

  if (this.inputIsActive(this.KEY_PAUSE) === true) {
    this.pausedOn = this.game.time.now;
    this.pauseGame();
  }

  if (this.game.time.now - this.mutedOn >= 100) {
    this.checkMKey = true;
  }

  if (this.checkMKey && this.inputIsActive(this.KEY_MUTE) === true) {
    this.mutedOn = this.game.time.now;
    this.checkMKey = false;
    this.muteGame();
  }

  if (this.checkCKey === false && this.player.dialogueGroup.alpha === 0) {
    this.checkCKey = true;
  }

  if (this.checkCKey && this.inputIsActive(this.KEY_CHAT) === true) {
    this.checkCKey = false;
    this.showPlayerDialogue(true);
  }

  // show development information
  if (BasicGame.Game.developmentMode) {
    if (this.game.time.fps !== 0) {
      this.fpsText.setText(this.game.time.fps + ' FPS');
    }
  }
};

BasicGame.Game.prototype.render = function () {
  this.player.render();
  this.level.render();
};

BasicGame.Game.prototype.pauseUpdate = function () {
  if ((this.game.time.now - this.pausedOn >= 100) && this.inputIsActive(this.KEY_PAUSE) === true) {
    this.pauseGame();
    this.pausedOn = 0;
  }
};

/**
 * This method will be called when the State is shutdown (i.e. you switch to another state from this one).
 */
BasicGame.Game.prototype.shutdown = function () {
  // stop music, delete sprites, purge caches, free resources, all that good stuff.
  // destroy sprites
  this.background.destroy();
  this.noiseImage.destroy();
  // destroy groups
  this.lifesGroup.destroy();
  this.flashGroup.destroy();
  this.darknessGroup.destroy();
  // destroy sounds
  this.music.destroy();
  // destroy tweens
  this.putDarkTween.stop();
  this.removeDarkTween.stop();
  // call the methods that will destroy everything in other classes
  this.player.shutdown();
  this.level.shutdown();
  this.light.shutdown();
  this.eye.shutdown();
  this.lightning.shutdown();
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

BasicGame.Game.prototype.createUIGroup = function () {
  this.uiGroup = this.game.add.group();

  this.chatImage = this.game.add.button(0, 0, 'chat', function () {
    this.showPlayerDialogue(true);
  }, this, null, null, null, null, this.uiGroup);

  this.muteButton = this.game.add.button(this.chatImage.right + 10, 0, 'mute',
    this.muteGame, this, null, null, null, null, this.uiGroup);

  this.pauseButton = this.game.add.button(this.muteButton.right + 10, 0, 'pause',
    this.pauseGame, this, null, null, null, null, this.uiGroup);

  this.uiGroup.x = this.game.world.width - this.uiGroup.width - 16;
  this.uiGroup.y = 16;
};

BasicGame.Game.prototype.createPauseGroup = function () {
  var pauseBackgroundImage = null;
  var textImage = null;
  var center = { x: this.game.world.width / 2, y: this.game.world.height / 2 };

  this.pauseGroup = this.game.add.group();

  pauseBackgroundImage = this.game.add.image(center.x, center.y, 'credits_background');
  pauseBackgroundImage.width = this.PAUSE_WIDTH;
  pauseBackgroundImage.height = this.PAUSE_HEIGHT;
  pauseBackgroundImage.anchor.set(0.5, 0.5);

  textImage = this.game.add.image(center.x, center.y, 'pause_' + BasicGame.language);
  textImage.anchor.set(0.5, 0.5);

  this.pauseGroup.addChild(pauseBackgroundImage);
  this.pauseGroup.addChild(textImage);

  this.pauseGroup.alpha = 0;
};

BasicGame.Game.prototype.arrangeRenderLayers = function () {
  if (this.level.spikes) {
    this.game.world.bringToTop(this.level.spikes);
  }
  this.game.world.bringToTop(this.level.walls);
  this.game.world.bringToTop(this.noiseImage);
  this.game.world.bringToTop(this.light.lightBitmap);
  this.game.world.bringToTop(this.level.pieces);
  this.game.world.bringToTop(this.lifesGroup);
  this.game.world.bringToTop(this.player.dialogueGroup);
  this.game.world.bringToTop(this.uiGroup);
  this.game.world.bringToTop(this.darknessGroup);
};

BasicGame.Game.prototype.inputIsActive = function (key) {
  return this.game.input.keyboard.isDown(key);
};

BasicGame.Game.prototype.levelEnded = function () {
  this.levelCompleted = true;
  BasicGame.isRetrying = false;
  this.putDarkTween.onComplete.addOnce(function () {
    // show the Progress saved message
    this.savingText.alpha = 1;
    this.game.world.bringToTop(this.savingText);

    this.helper.timer(this.GO_TO_NEXT_LEVEL_DELAY, function () {
      // set the flag for loading level
      this.isLoadingLevel = true;

      // notify to the eye that the level was ended
      this.eye.levelEndedEvent(true);
      this.loadLevel(++BasicGame.currentLevel);
    }, this);
  }, this);
  this.showDarkness();
};

BasicGame.Game.prototype.loadLevel = function (levelNumber) {
  this.saveGame(BasicGame.setDay(levelNumber));

  if (levelNumber > 30) {
    // congrats, you ended the game
    this.state.start('TheEnd');
    return;
  }

  this.level.destroyCurrentLevel();

  var skyName = this.getSkyName();
  if (this.background.key != skyName) {
    this.load.image(skyName, 'assets/sprites/' + skyName + '.png');
  }

  this.game.load.onLoadComplete.addOnce(function () {
    if (this.background.key != skyName) {
      this.background.loadTexture(skyName);
    }
    this.savingText.alpha = 0;
    this.level.createLevel(levelNumber);
  }, this);

  var levelData = this.helper.getLevelIdAndName(levelNumber);
  this.game.load.tilemap(levelData.id,
    'assets/levels/' + levelData.name + '.json',
    null,
    Phaser.Tilemap.TILED_JSON);

  this.game.load.start();
};

BasicGame.Game.prototype.levelReady = function () {
  if (this.isLoadingLevel === true) {
    this.player.updateLevel(this.level);
    this.light.updateWalls(this.level);
    this.eye.updateLevel(this.level);
    this.lightning.updateLevel(this.level);
    this.arrangeRenderLayers();
  }

  this.levelCompleted = false;
  this.hideDarkness();
};

BasicGame.Game.prototype.shakeCamera = function () {
  var shakeTween;

  // shake the camera by moving it up and down 5 times really fast
  this.game.camera.y = 10;
  this.game.camera.x = 10;

  // create the tween for shaking the camera
  shakeTween = this.game.add.tween(this.game.camera);
  shakeTween.to({ y: -5, x: -5 },
    40,
    Phaser.Easing.Sinusoidal.InOut,
    false,
    0,
    4,
    true);

  shakeTween.onComplete.add(function () {
    // set the camera position to its initial position
    this.game.camera.setPosition(0, 0);
  }, this);

  shakeTween.start();
};

BasicGame.Game.prototype.subtractLife = function () {
  var that = this;

  // if the player collected all the pieces, don't kill him
  if (this.level.endTimer) {
    return;
  }

  // remove one life sprite
  if (this.lifes <= 0) {
    return;
  }

  var lifeTween = this.game.add.tween(this.lifesGroup.getChildAt(--this.lifes));
  lifeTween.to({ alpha: 0 },
    300,
    Phaser.Easing.Quadratic.Out,
    true);

  // create the tween for flashing the camera
  var flashTween = this.game.add.tween(this.flashGroup.getChildAt(0));
  flashTween.to({ alpha: 1 },
    40,
    Phaser.Easing.Sinusoidal.InOut,
    false,
    0,
    4,
    true);
  flashTween.start();

  if (this.lifes <= 0) {
    // save the current level
    this.saveGame(BasicGame.addDeath());

    // notify the PLAYER that its time to show the animation for dead
    this.player.explote();

    // notify to the EYE the player has died
    this.eye.rejoice((function () {
      this.showDarkness(200);
    }).bind(this));
  }
};

BasicGame.Game.prototype.subtractAllLifes = function (destroyPlayer) {
  var lifeTween = null;

  // if the player collected all the pieces, don't kill him
  if (this.level.endTimer) {
    return;
  }

  this.saveGame(BasicGame.addDeath());
  this.lifes = 0;

  lifeTween = this.game.add.tween(this.lifesGroup);
  lifeTween.to({ alpha: 0 },
    180,
    Phaser.Easing.Quadratic.Out,
    true);

  this.eye.levelEndedEvent(false);

  if (destroyPlayer) {
    // play the animation of death of the player
    this.player.explote();

    // create the timer to give the player die animation time to be played
    this.helper.timer(1000,
      function () {
        this.showDarkness(200);
      },
      this);
  } else {
    this.showDarkness(200);
  }
};

BasicGame.Game.prototype.showDarkness = function (durationInMS) {
  this.showingDarkness = true;
  this.game.world.bringToTop(this.darknessGroup);
  this.putDarkTween.updateTweenData("duration", durationInMS || this.FADE_DURATION);
  this.putDarkTween.start();

  this.chatImage.input.enabled = false;
  this.muteButton.input.enabled = false;
  this.pauseButton.input.enabled = false;
};

BasicGame.Game.prototype.putDarkTweenCompleted = function () {
  this.inDarkness = true;

  this.eye.gameInDarkness();
  this.player.gameInDarkness();

  this.showLifes();

  if (this.lifes <= 0 && !this.levelCompleted) {
    this.restartLevel(true);
  }
};

BasicGame.Game.prototype.hideDarkness = function (durationInMS) {
  this.inDarkness = false;
  this.showingDarkness = false;
  this.removeDarkTween.updateTweenData("duration", durationInMS || this.FADE_DURATION);
  this.removeDarkTween.start();

  this.chatImage.input.enabled = true;
  this.muteButton.input.enabled = true;
  this.pauseButton.input.enabled = true;
};

BasicGame.Game.prototype.removeDarkTweenCompleted = function () {
  this.isLoadingLevel = false;

  if (BasicGame.isRetrying === false) {
    // make the player say a line
    this.showPlayerDialogue();
  }

  this.lifes = this.LIFES_AMOUNT;

  // make the EYE seek for the player

  if (this.music.isPlaying === false) {
    this.music.play();
  }

  this.player.enableBody();
  this.eye.levelStart();
};

BasicGame.Game.prototype.restartLevel = function (runHideDarkness) {
  // restore the alpha for life indicators and lifes' group
  BasicGame.isRetrying = true;
  this.lifes = this.LIFES_AMOUNT;
  this.showLifes();

  this.player.restartLevel(runHideDarkness);
  this.level.restartLevel(runHideDarkness);
  this.eye.restartLevel(runHideDarkness);

  if (runHideDarkness === true) {
    this.hideDarkness(200);
  }
};

BasicGame.Game.prototype.createLifeIndicators = function () {
  for (var i = 0; i < this.lifes; i++) {
    var lifeSprite = new Phaser.Sprite(this.game, 0, 0, "life");
    // lifeSprite.scale.set(0.5, 0.8);
    lifeSprite.x = (i % 3) * (lifeSprite.width + 6);

    this.lifesGroup.addChild(lifeSprite);
  }
};

BasicGame.Game.prototype.showLifes = function () {
  this.lifesGroup.alpha = 1;
  this.lifesGroup.forEach(function (lifeSprite) {
    lifeSprite.alpha = 1;
  });
};

BasicGame.Game.prototype.getSkyName = function () {
  return this.helper.getSkyName(BasicGame.currentLevel);
};

BasicGame.Game.prototype.saveGame = function (data) {
  if (BasicGame.Game.developmentMode === true || BasicGame.ignoreSave === true) {
    return;
  }

  localStorage.setItem("oh-my-blob", data);
};

BasicGame.Game.prototype.showPlayerDialogue = function (immediateHide) {
  this.player.showDialogue(immediateHide);
};

BasicGame.Game.prototype.muteGame = function () {
  this.game.sound.mute = !this.game.sound.mute;
  this.muteButton.frame = (this.game.sound.mute === true) ? 1 : 0;
};

BasicGame.Game.prototype.pauseGame = function () {
  this.game.paused = !this.game.paused;
  this.pauseButton.frame = 0;
  this.darknessGroup.getChildAt(0).alpha = 0;
  this.pauseGroup.alpha = 0;

  if (this.game.paused === true) {
    this.pauseButton.frame = 1;
    this.pauseGroup.alpha = 1;
    this.game.world.bringToTop(this.pauseGroup);
  }
};


// ╔═══════════════════════════════════════════════════════════════════════════╗
BasicGame.Game.prototype.quitGame = function () {
  this.shutdown();
};
// ╚═══════════════════════════════════════════════════════════════════════════╝
},{"BasicGame":1}],14:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.GameOver = function(game){
  this.fontId = 'font';

  this.gameOverBitmap = null;
  this.gameOverGroup = null;

  this.phraseBitmap = null;
  this.phraseGroup = null;

  this.tryAgainBitmap = null;
  this.sPressedFlag = false;

  this.bSpeech = {
    "a": {
      "es": "Bill: Pensé que lo había superado.",
      "en": "Bill: I thought I had overcome this."
    },
    "b": {
      "es": "Bill: Creo que nunca lograré superarlo.",
      "en": "Bill: I think I'll never be able to get over this."
    },
    "c": {
      "es": "Bill: No puedo más con esto.",
      "en": "Bill: I can't handle this."
    }
  };

  this.hSpeech = {
    "es": "Hub: Espera...¿Qué vas a hacer?",
    "en": "Hub: Wait...¿What are you going to do?"
  };

  this.tryAgainText = {
    "es": "Reintentar (Barra espaciadora)",
    "en": "Try again (Spacebar)"
  };
  this.tryAgainKey = Phaser.Keyboard.SPACEBAR;
};

BasicGame.GameOver.prototype.create = function(){
  // set stage background
  // this.game.stage.backgroundColor = 0x000;
  this.background = this.game.add.tileSprite(0, 0,
    this.game.world.width, this.game.world.height, this.getSkyName());
  this.background.alpha = 0.3;

  // create the group and text for the "Game Over" text
  this.gameOverGroup = this.game.add.group();
  this.dialogTextBitmap = this.add.bitmapText(this.game.world.width/2,
    this.game.world.height/2 - 20,
    this.fontId,
    this.getPhrase(),
    48,
    this.gameOverGroup);
  this.dialogTextBitmap.anchor.set(.5, .5);
  this.dialogTextBitmap.tint = 0xFFFFFF;

  // create the group and text for the phrase
  this.phraseGroup = this.game.add.group();
  this.phraseBitmap = this.add.bitmapText(this.game.world.width/2,
    this.dialogTextBitmap.bottom + 20,
    this.fontId,
    this.hSpeech[BasicGame.language],
    48,
    this.phraseGroup);
  this.phraseBitmap.anchor.set(.5, .5);
  this.phraseBitmap.tint = 0xFFFF50;

  // create the group and text for Try again
  this.tryAgainGroup = this.game.add.group();
  this.tryAgainBitmap = this.game.add.bitmapText(this.game.world.width/2,
    this.game.world.height/2 + 280,
    this.fontId,
    this.tryAgainText[BasicGame.language],
    36,
    this.tryAgainGroup);
  this.tryAgainBitmap.anchor.set(.5, .5);
  this.tryAgainBitmap.tint = 0xF2C249;

  // add the keyboard listener for Try again
  this.game.input.keyboard.addKeyCapture([
    this.tryAgainKey
  ]);
};

BasicGame.GameOver.prototype.update = function(){
  if(this.input.keyboard.isDown(this.tryAgainKey)
      && this.sPressedFlag == false){
    BasicGame.isRetrying = true;
    this.state.start('Game');
  }else if(!this.input.keyboard.isDown(this.tryAgainKey) && this.sPressedFlag == true){
    this.sPressedFlag = false;
  }
};

BasicGame.GameOver.prototype.getPhrase = function(){
  if(BasicGame.currentLevel <= 10){
    return this.bSpeech.a[BasicGame.language];
  } else if (BasicGame.currentLevel <= 20) {
    return this.bSpeech.b[BasicGame.language];
  } else {
    return this.bSpeech.c[BasicGame.language];
  }
};

BasicGame.GameOver.prototype.getSkyName = function(){
  if(BasicGame.currentLevel <= 10){
    return 'sky01';
  } else if (BasicGame.currentLevel <= 20) {
    return 'sky02';
  } else {
    return 'sky03';
  }
};
},{"BasicGame":1}],15:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.Intro = function (game) {
  this.background = null;
  this.skipKey1 = Phaser.Keyboard.Z;
  this.skipKey2 = Phaser.Keyboard.SPACEBAR;
  
  this.fontId = 'font';
  this.textColors = {
    'Hub': 0xFFFF50,
    'Bill': 0xFFFFFF
  };
  this.dialogs = {
    "es": [
      {
        character: 'Hub',
        text: 'Tienes que calmarte, todo estará bien.',
        bips: 3
      },
      {
        character: 'Bill',
        text: '¿Cómo puedes decir eso? No puedo hacerlo!',
        bips: 3
      },
      {
        character: 'Hub',
        text: 'Descansa, ya verás cómo en unos días dejará de acecharte.',
        bips: 5
      },
      {
        character: 'Bill',
        text: 'Creo que no seré capaz...',
        bips: 2
      }
    ],
    "en": [
      {
        character: 'Hub',
        text: 'Calm down, all its going to be fine.',
        bips: 3
      },
      {
        character: 'Bill',
        text: "How can you say that? I can't do that!",
        bips: 3
      },
      {
        character: 'Hub',
        text: 'Have a rest, it will stop haunting you in a few days.',
        bips: 4
      },
      {
        character: 'Bill',
        text: "I think I won't be able to handle this...",
        bips: 3
      }
    ]
  };
  this.textBitmapsGroup = null;
  this.dialogTextBitmap = null;
  this.dialogNumber = 0;
  this.dialogTween = null;

  this.skipGroup = null;
  this.skipBitmap = null;
  this.skipText = {
    "es": "Siguiente (Z)",
    "en": "Next (Z)"
  };
  this.sPressedFlag = false;

  this.goingToGame = false;

  this.BSound = null;
  this.HSound = null;
  this.soundLoopTimer = null;
};

BasicGame.Intro.prototype.create = function(){
  // set the backgound
  this.game.stage.backgroundColor = 0x000000;
  // this.background = this.game.add.tileSprite(0, 0,
  //   this.game.world.width, this.game.world.height, "sky03");
  // this.background.alpha = 0.2;

  // create the group and text for the dialog and the Skip
  this.textBitmapsGroup = this.game.add.group();

  this.dialogTextBitmap = this.add.bitmapText(this.game.world.width / 2,
    this.game.world.height / 2,
    this.fontId,
    '???',
    36,
    this.textBitmapsGroup);
  this.dialogTextBitmap.align = "left";
  this.dialogTextBitmap.anchor.set(.5, .5);
  this.dialogTextBitmap.alpha = 0;

  // create the group and the text for Skip
  this.skipGroup = this.game.add.group();
  this.skipBitmap = this.add.bitmapText(this.game.world.width - 20,
    this.game.world.height - 20,
    this.fontId,
    this.skipText[BasicGame.language],
    32,
    this.textBitmapsGroup);
  this.skipBitmap.align = "left";
  this.skipBitmap.tint = 0xF2C249;
  this.skipBitmap.anchor.set(1, 1);

  // add the keyboard listener for Skip
  this.game.input.keyboard.addKeyCapture([
    this.skipKey1,
    this.skipKey2
  ]);

  // create the tween to use in the dialog
  this.dialogTween = this.game.add.tween(this.dialogTextBitmap);
  this.dialogTween.to({alpha: 1},
    300,
    Phaser.Easing.Quadratic.Out,
    false);

  // load the sounds of B and H
  this.BSound = this.game.add.sound('b', 0.2);
  this.HSound = this.game.add.sound('h', 0.2);

  // show the first dialog
  this.updateDialog();
};

BasicGame.Intro.prototype.update = function(){
  if (this.goingToGame === true){
    return;
  }

  if ((this.input.keyboard.isDown(this.skipKey1) ||
      this.input.keyboard.isDown(this.skipKey2)) && this.sPressedFlag == false){
    this.sPressedFlag = true;
    this.dialogTween.onComplete.dispatch(this.dialogTween.target, this.dialogTween);
    // this.dialogTextBitmap.alpha = 1;
    this.updateDialog();
  }
  else if ((!this.input.keyboard.isDown(this.skipKey1) ||
            !this.input.keyboard.isDown(this.skipKey2)) && this.sPressedFlag == true
  ){
    this.sPressedFlag = false;
  }
};

BasicGame.Intro.prototype.updateDialog = function(){
  if (this.dialogNumber <= this.dialogs[BasicGame.language].length - 1){
    var dialogObj = this.dialogs[BasicGame.language][this.dialogNumber];
    // there are still dialogs to be shown
    var currentDialogLine = dialogObj.text;
    var character = dialogObj.character;

    this.dialogTextBitmap.tint = this.textColors[character];
    this.dialogTextBitmap.setText(character + ': ' + currentDialogLine);

    this.dialogTextBitmap.alpha = 0;
    this.dialogTween.start();

    // play the bips of the dialog
    if (dialogObj.bips > 0) {
      this.soundLoopTimer = this.game.time.create(true);
      this.soundLoopTimer.repeat(100, dialogObj.bips, function(){
        this[dialogObj.character.charAt(0) + "Sound"].play();
      }, this);
      this.soundLoopTimer.start();
    }

    this.dialogNumber++;
  }else{
    // tween the dialog bitmap to alpha = 0, then, start the game.
    this.goingToGame = true;
    this.game.add.tween(this.textBitmapsGroup).to({alpha: 0},
      500,
      Phaser.Easing.Quadratic.Out,
      true)
      .onComplete.add(function(){
        this.state.start('Game');
      },this);
  }
};
},{"BasicGame":1}],16:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.MainMenu = function (game) {
  // constants
  this.BUTTON_WIDTH = 180;
  this.BUTTON_HEIGHT = 38;
  this.BUTTON_VSPACING = 15;
  this.BUTTON_HSPACING = 12;
  this.SCREEN_PADDING = 32;
  this.BUTTON_PADDING = 16;
  this.FONT_REGULAR = 'font';
  this.FONT_MEDIUM = 'font-medium';
  this.CONTINUE_MSG = {
    'es': 'Continuar',
    'en': 'Continue'
  };
  this.NEWGAME_MSG = {
    'es': 'Nuevo juego',
    'en': 'New game'
  };
  this.CREDITS_MSG = {
    'es': 'Créditos',
    'en': 'Credits'
  };
  this.KEYS_DESCRIPTION_MSG = {
    'es': 'usa A y D o IZQUIERA y DERECHA para moverte\n' +
      'usa W, Z, ESPACIO o ARRIBA para saltar\n' +
      'usa C para ver los diálogos\n' +
      'toma las píldoras para superar el día',
    'en': 'use A and D or LEFT and RIGHT to move\n' +
      'use W, Z, SPACE or UP to jump\n' +
      'use C to show the dialogues' +
      'take pills to get over the day'
  };
  this.CONTINUE_DAY_MSG = {
    'es': 'Día',
    'en': 'Day'
  };
  this.SPANISH_LANG_MSG = {
    'es': 'Español',
    'en': 'Spanish'
  };
  this.ENGLISH_LANG_MSG = {
    'es': 'Inglés',
    'en': 'English'
  };
  this.END_SCENE_MSG = {
    'es': 'Escena final',
    'en': 'End scene'
  };

  // destroyable objects (sprites, sounds, groups, tweens...)
  this.backgroundImage = null;
  this.titleText = null;
  this.giantPupilImage = null;
  this.optionsGroup = null;
  this.languageGroup = null;
  this.keysDescriptionText = null;
  this.continueDayText = null;
  this.creditsGroup = null;
  this.closeButton = null;
  this.splashMusic = null;

  // global properties
  this.fakeEye = {
    centerX: 512,
    centerY: 321,
    radius: 210
  };
  this.translatableTexts = [];
  this.menuButtons = [];
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.MainMenu.prototype.create = function () {
  var _self = this;

  this.translatableTexts = [];
  this.menuButtons = [];

  // set the background
  this.backgroundImage = this.game.add.image(0, 0, 'main_menu_background');
  this.backgroundImage.width = this.game.world.width;
  this.backgroundImage.height = this.game.world.height;

  // add the pupil
  this.giantPupilImage = this.game.add.image(this.game.world.width / 2,
    this.game.world.height / 2,
    'giant_pupil');
  this.giantPupilImage.anchor.set(.5, .5);

  // add the title
  this.titleText = this.game.add.bitmapText(this.game.world.width / 2,
    41,
    this.FONT_MEDIUM,
    'In the Shadows',
    72);
  this.titleText.anchor.set(0.5, 0);
  this.titleText.align = 'center';
  this.titleText.tint = 0x303c42;

  // add the text for key inputs
  this.keysDescriptionText = this.game.add.bitmapText(0, 0,
    this.FONT_REGULAR,
    this.KEYS_DESCRIPTION_MSG[BasicGame.language],
    18);
  this.keysDescriptionText.anchor.set(0.5, 0);
  this.keysDescriptionText.align = 'center';
  this.keysDescriptionText.tint = 0x303c42;
  this.keysDescriptionText.x = this.game.world.width / 2;
  this.keysDescriptionText.bottom = this.game.world.height - this.SCREEN_PADDING;
  this.keysDescriptionText.alpha = 0;

  this.translatableTexts.push({
    sourceMsg: this.KEYS_DESCRIPTION_MSG,
    phaserObj: this.keysDescriptionText
  });

  // create the group for menu buttons
  this.createOptionsGroup();

  // create the group for language buttons
  this.createLanguageGroup();

  // create the assets for the credits
  this.createCreditsGroup();
  this.creditsGroup.alpha = 0;

  // add the splash_music
  this.splashMusic = this.game.add.sound('splash_music', 0.2, true);
  this.splashMusic.onFadeComplete.addOnce(function (soundObj) {
    soundObj.stop();
  }, this);
  this.splashMusic.play();

  BasicGame.changeHTMLBackground(BasicGame.Helper.prototype.getSkyColor(BasicGame.currentLevel));
};

BasicGame.MainMenu.prototype.update = function () {
  // this.followPointer();
};

/**
 * This method will be called when the State is shutdown (i.e. you switch to another state from this one).
 */
BasicGame.MainMenu.prototype.shutdown = function () {

  // destroy sprites and images
  this.backgroundImage.destroy();
  this.titleText.destroy();
  this.giantPupilImage.destroy();
  this.keysDescriptionText.destroy();
  // destroy groups
  this.optionsGroup.destroy();
  this.languageGroup.destroy();
  this.creditsGroup.destroy();
  // destroy audio
  this.splashMusic.destroy();

  this.translatableTexts = null;
  this.menuButtons = null;
  this.closeButton = null;
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

BasicGame.MainMenu.prototype.createOptionsGroup = function () {
  this.optionsGroup = this.game.add.group();

  if (BasicGame.currentLevel > 1) {
    this.addOptionTo({
      changeWidth: true,
      msg: this.CONTINUE_MSG,
      attachTextChangeCallback: true,
      hSpace: 0,
      vSpace: 1,
      group: this.optionsGroup,
      overCallback: (function() {
        if (BasicGame.currentLevel <= 30) {
          this.showKeysDescription(true);
        }
      }).bind(this),
      outCallback: (function() {
        if (BasicGame.currentLevel <= 30) {
          this.showKeysDescription(false);
        }
      }).bind(this),
      clickCallback: this.nextScene
    });
  }
  this.addOptionTo({
    changeWidth: true,
    msg: this.NEWGAME_MSG,
    attachTextChangeCallback: true,
    hSpace: 0,
    vSpace: 1,
    group: this.optionsGroup,
    overCallback: this.showKeysDescription.bind(this, true),
    outCallback: this.showKeysDescription.bind(this, false),
    clickCallback: this.newGame
  });
  this.addOptionTo({
    changeWidth: true,
    msg: this.CREDITS_MSG,
    attachTextChangeCallback: true,
    hSpace: 0,
    vSpace: 1,
    group: this.optionsGroup,
    clickCallback: function (button, pointer, isOver) {
      // invoke input out event on the button to retore its apperance to default
      button.onInputOutHandler(button, pointer);
      this.showCredits(true);
    }
  });

  this.optionsGroup.right = this.game.world.width - this.SCREEN_PADDING;
  this.optionsGroup.bottom = this.game.world.height - this.SCREEN_PADDING;

  if (BasicGame.currentLevel > 1) {
    // add a text to display the current day to load
    this.continueDayText = this.game.add.bitmapText(this.optionsGroup.right,
      this.optionsGroup.top - 10,
      this.FONT_REGULAR,
      this.getDayString(),
      18);
    this.continueDayText.anchor.set(1, 1);
    this.continueDayText.alpha = 0;
    this.continueDayText.tint = 0x303c42;
    this.continueDayText.alpha = .8;

    this.translatableTexts.push({
      sourceMsg: this.CONTINUE_DAY_MSG,
      phaserObj: this.continueDayText,
      onChangeCallback: (function () {
        this.continueDayText.text = this.getDayString();
      }).bind(this)
    });
  }
};

BasicGame.MainMenu.prototype.createLanguageGroup = function () {
  var spanishOption = null;
  var englishOption = null;

  this.languageGroup = this.game.add.group();

  spanishOption = this.addOptionTo({
    msg: this.SPANISH_LANG_MSG,
    textColor: 0x303c42,
    textAlign: 'left',
    clickCallback: this.setLanguage.bind(this, 'es'),
    hSpace: 0,
    vSpace: 1,
    fixedWidth: 115,
    group: this.languageGroup,
    key: 'main_menu_background'
  });

  englishOption = this.addOptionTo({
    msg: this.ENGLISH_LANG_MSG,
    textColor: 0x303c42,
    textAlign: 'left',
    clickCallback: this.setLanguage.bind(this, 'en'),
    hSpace: 0,
    vSpace: 1,
    fixedWidth: 115,
    group: this.languageGroup,
    key: 'main_menu_background'
  });

  spanishOption.textObj.anchor.set(0, 0.5);
  spanishOption.textObj.x = spanishOption.buttonObj.left + 32;
  englishOption.textObj.anchor.set(0, 0.5);
  englishOption.textObj.x = englishOption.buttonObj.left + 32;

  // add the checkbox for spanish language option
  this.spanishCheckbox = this.addCheckboxFor({
    referenceObj: spanishOption.buttonObj,
    group: this.languageGroup,
    checked: BasicGame.language === 'es'
  });

  // add the checkbox for english language option
  this.englishCheckbox = this.addCheckboxFor({
    referenceObj: englishOption.buttonObj,
    group: this.languageGroup,
    checked: BasicGame.language === 'en'
  });

  this.languageGroup.left = this.SCREEN_PADDING;
  this.languageGroup.bottom = this.game.world.height - this.SCREEN_PADDING;
};

BasicGame.MainMenu.prototype.addOptionTo = function (prop) {
  var button = null;
  var text = null;
  var buttonsInGroup = Math.max(0, prop.group.children.length - prop.group.children.length / 2);
  var translatableObj = {};

  button = this.game.add.button(
    0 + ((this.BUTTON_WIDTH + this.BUTTON_HSPACING) * buttonsInGroup) * prop.hSpace,
    0 + ((this.BUTTON_HEIGHT + this.BUTTON_VSPACING) * buttonsInGroup) * prop.vSpace,
    prop.key || 'button_background', prop.clickCallback, this
  );
  button.anchor.set(1, 0);
  button.width = this.BUTTON_WIDTH;
  button.height = this.BUTTON_HEIGHT;

  text = this.game.add.bitmapText(button.right - this.BUTTON_PADDING,
    button.centerY,
    this.FONT_REGULAR, prop.msg[BasicGame.language], 18);
  text.anchor.set(1, 0.5);
  text.align = prop.textAlign || 'right';
  text.tint = prop.textColor || 0xfafafa;
  text.defaultTint = text.tint;
  text.linkedButton = button;
  translatableObj.sourceMsg = prop.msg;
  translatableObj.phaserObj = text;
  if (prop.attachTextChangeCallback) {
    translatableObj.onChangeCallback = (function (textObj) {
      textObj.linkedButton.width = textObj.textWidth + this.BUTTON_PADDING * 2;
      textObj.linkedButton.defaultWidth = textObj.textWidth + this.BUTTON_PADDING * 2;
    }).bind(this, text);
  }
  this.translatableTexts.push(translatableObj);
  this.menuButtons.push(button);

  button.onInputOver.add(function (sprite, pointer, text) {
    text.tint = 0xf15a4a;

    if (prop.overCallback) {
      prop.overCallback();
    }
  }, this, 0, text);

  button.onInputOut.add(function (sprite, pointer, text) {
    text.tint = text.defaultTint;

    if (prop.outCallback) {
      prop.outCallback();
    }
  }, this, 0, text);

  button.width = text.textWidth + this.BUTTON_PADDING * 2;
  button.defaultWidth = text.textWidth + this.BUTTON_PADDING * 2;

  if (prop.fixedWidth) {
    button.width = prop.fixedWidth;
    button.defaultWidth = prop.fixedWidth;
  }

  if (prop.changeWidth === true) {

    button.onInputOver.add(function (sprite, pointer) {
      var overTween = this.game.add.tween(sprite);
      overTween.to({ width: this.BUTTON_WIDTH }, 150, Phaser.Easing.Exponential.Out);
      overTween.start();
    }, this, 0);

    button.onInputOut.add(function (sprite, pointer) {
      var overTween = this.game.add.tween(sprite);
      overTween.to({ width: sprite.defaultWidth }, 250, Phaser.Easing.Exponential.Out);
      overTween.start();
    }, this, 0);
  }

  prop.group.add(button);
  prop.group.add(text);

  return {
    buttonObj: button,
    textObj: text
  };
};

BasicGame.MainMenu.prototype.addCheckboxFor = function (prop) {
  var checkbox = this.game.add.image(prop.referenceObj.left, 0, 'checkbox',
    (prop.checked) ? 1 : 0, prop.group);
  checkbox.centerY = prop.referenceObj.centerY;
  return checkbox;
};

BasicGame.MainMenu.prototype.showKeysDescription = function (show) {
  var showTween = this.game.add.tween(this.keysDescriptionText);
  showTween.to({ alpha: (show === true) ? 1 : 0 }, 200, Phaser.Easing.Exponential.Out);
  showTween.start();
};

BasicGame.MainMenu.prototype.newGame = function () {
  var levelData = null;
  var skyName = null;

  localStorage.removeItem('oh-my-blob');
  BasicGame.reset();

  this.game.load.onLoadComplete.addOnce(this.nextScene, this);
  levelData = BasicGame.Helper.prototype.getLevelIdAndName(BasicGame.currentLevel);
  skyName = BasicGame.Helper.prototype.getSkyName(BasicGame.currentLevel);
  this.load.image(skyName, 'assets/sprites/' + skyName + '.png');
  this.game.load.tilemap(levelData.id,
    'assets/levels/' + levelData.name + '.json',
    null,
    Phaser.Tilemap.TILED_JSON);
  this.game.load.start();
};

BasicGame.MainMenu.prototype.nextScene = function () {
  this.state.start((BasicGame.currentLevel <= 30) ? 'Game' : 'TheEnd');
};

BasicGame.MainMenu.prototype.setLanguage = function (newLang) {
  if (BasicGame.language === newLang) {
    return;
  }

  this.spanishCheckbox.frame = 0;
  this.englishCheckbox.frame = 0;

  localStorage.setItem('oh-my-blob', BasicGame.setLanguage(newLang));

  if (newLang === 'es') {
    this.spanishCheckbox.frame = 1;
  }
  else {
    this.englishCheckbox.frame = 1;
  }

  this.translatableTexts.forEach(function (element, index) {
    element.phaserObj.text = element.sourceMsg[BasicGame.language];
    if (element.onChangeCallback) {
      element.onChangeCallback();
    }
  });
};

BasicGame.MainMenu.prototype.createCreditsGroup = function (newLang) {
  var backgroundImage = null;
  var englishImage = null;
  var spanishImage = null;
  var socialImage = null;

  this.creditsGroup = this.game.add.group();

  backgroundImage = this.game.add.image(0, 0, 'credits_background', 0, this.creditsGroup);
  backgroundImage.width = this.game.world.width;
  backgroundImage.height = this.game.world.height;

  englishImage = this.game.add.image(this.game.world.width / 2, 32, 'credits_es', 0, this.creditsGroup);
  englishImage.anchor.set(.5, 0);

  spanishImage = this.game.add.image(this.game.world.width / 2, 32, 'credits_en', 0, this.creditsGroup);
  spanishImage.anchor.set(.5, 0);

  social = this.game.add.image(this.game.world.width / 2,
    this.game.world.height - 16,
    'social', 0, this.creditsGroup);
  social.anchor.set(.5, 1);

  this.closeButton = this.game.add.button(this.game.world.width - 32, 32,
    'close', function (button, pointer, isOver) {
      this.showCredits(false);
    }, this, null, null, null, null, this.creditsGroup);
  this.closeButton.anchor.set(1, 0);
  this.closeButton.input.enabled = false;
};

BasicGame.MainMenu.prototype.showCredits = function (show) {
  this.creditsGroup.children[1].alpha = 0;
  this.creditsGroup.children[2].alpha = 0;
  this.creditsGroup.alpha = 0;
  this.closeButton.input.enabled = false;

  if (show === true) {
    if (BasicGame.language === 'es') {
      this.creditsGroup.children[1].alpha = 1;
    }
    else {
      this.creditsGroup.children[2].alpha = 1;
    }

    this.creditsGroup.alpha = 1;
    this.closeButton.input.enabled = true;
  }

  this.menuButtons.forEach(function (element, index) {
    element.input.enabled = !show;
  });
};

BasicGame.MainMenu.prototype.followPointer = function () {
  // afstand van middenpunt oog tot cursor
  dx = this.game.input.activePointer.x - this.fakeEye.centerX;
  dy = this.game.input.activePointer.y - this.fakeEye.centerY;
  // stelling van pythagoras
  c = Math.sqrt((dx * dx) + (dy * dy));

  // afstand middelpunt tot pupil
  r = this.fakeEye.radius * 0.3;

  // cursor op oog
  if (Math.abs(dx) < r && Math.abs(dy) < r && c < r) {
    r = c;
  }

  // hoek bepalen
  alfa = Math.asin(dy / c);

  // coordinaten op rand cirkel bepalen
  this.giantPupilImage.x = (Math.cos(alfa) * r) + this.fakeEye.centerX;
  // 180 graden fout herstellen
  if (dx < 0) {
    this.giantPupilImage.x = this.fakeEye.centerX * 2 - this.giantPupilImage.x;
  }
  this.giantPupilImage.y = (Math.sin(alfa) * r) + this.fakeEye.centerY;
};

BasicGame.MainMenu.prototype.getDayString = function (newLang) {
  var days = new BasicGame.Days();
  if (BasicGame.currentLevel <= 30) {
    return this.CONTINUE_DAY_MSG[BasicGame.language] +
      ' ' + days.getDay(BasicGame.currentLevel).number;
  }
  
  return this.END_SCENE_MSG[BasicGame.language];
};
},{"BasicGame":1}],17:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.Preloader = function (game) {
  this.background = null;
  this.preloadBar = null;
  this.ready = false;
};

BasicGame.Preloader.prototype.preload = function () {
  var i = 0;
  var skyName = null;
  var levelData = null;

  // these are the assets we loaded in Boot.js
  // a nice sparkly background and a loading progress bar
  this.background = this.add.sprite(0, 0, 'preloaderBackground');
  this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');

  // set the preloadBar sprite as a loader sprite.
  // automatically crop the sprite from 0 to full-width as the
  // files below are loaded in.
  this.load.setPreloadSprite(this.preloadBar, 1);

  //  --------------------------------------
  //  ---| load the assets for the Main menu
  // this.load.image('title', 'assets/images/title.png');
  this.load.image('main_menu_background', 'assets/sprites/main_menu_background.png');
  this.load.image('button_background', 'assets/sprites/button_background.png');
  this.load.image('giant_pupil', 'assets/sprites/giant_pupil.png');
  this.load.image('close', 'assets/sprites/close.png');
  this.load.image('credits_background', 'assets/sprites/credits_background.png');
  this.load.image('credits_en', 'assets/sprites/credits_en.png');
  this.load.image('credits_es', 'assets/sprites/credits_es.png');
  this.load.image('social', 'assets/sprites/social.png');

  this.load.audio('splash_music', 'assets/music/splash_music.ogg', true);

  //  ---------------------------------
  //  ---| load the assets for the Game
  this.load.image('pupil', 'assets/sprites/pupil_normal.png');
  this.load.image('light', 'assets/sprites/light.png');
  this.load.image('view_zone', 'assets/sprites/view_zone.png');
  this.load.image('piece', 'assets/sprites/piece.png');
  this.load.image('platform', 'assets/sprites/platform.png');
  this.load.image('life', 'assets/sprites/life.png');
  this.load.image('dialogue_background', 'assets/sprites/dialogue_background.png');
  this.load.image('dialogue_mark', 'assets/sprites/dialogue_mark.png');
  this.load.image('noise', 'assets/sprites/noise.png');
  this.load.image('chat', 'assets/sprites/chat.png');
  this.load.image('pause_es', 'assets/sprites/pause_es.png');
  this.load.image('pause_en', 'assets/sprites/pause_en.png');

  // this.load.spritesheet('noise', 'assets/sprites/noise.png', 1024, 640);
  this.load.spritesheet('player', 'assets/sprites/player.png', 32, 32, 1);
  this.load.spritesheet('eye', 'assets/sprites/eye.png', 222, 118, 3);
  this.load.spritesheet('checkbox', 'assets/sprites/checkbox.png', 24, 24, 2);
  this.load.spritesheet('mute', 'assets/sprites/mute.png', 24, 24, 2);
  this.load.spritesheet('pause', 'assets/sprites/pause.png', 24, 24, 2);

  this.load.audio('b', 'assets/soundfx/b.ogg', true);
  this.load.audio('h', 'assets/soundfx/h.ogg', true);
  this.load.audio('jump', 'assets/soundfx/jump.ogg', true);
  this.load.audio('walk', 'assets/soundfx/walk.ogg', true);
  this.load.audio('slide', 'assets/soundfx/slide.ogg', true);
  this.load.audio('fall', 'assets/soundfx/fall.ogg', true);
  this.load.audio('death', 'assets/soundfx/death.ogg', true);
  this.load.audio('day', 'assets/soundfx/day.ogg', true);
  this.load.audio('ray', 'assets/soundfx/ray.ogg', true);
  this.load.audio('eye', 'assets/soundfx/eye.ogg', true);
  this.load.audio('eye-anger', 'assets/soundfx/anger.ogg', true);
  this.load.audio('level_music', 'assets/music/levels_music.ogg', true);
  this.load.audio('piece', 'assets/soundfx/piece01.ogg', true);

  this.load.bitmapFont('font', 'assets/fonts/FiraCode_0.png',
    'assets/fonts/FiraCode.fnt', null);
  this.load.bitmapFont('font-medium', 'assets/fonts/FiraCodeMedium_0.png',
    'assets/fonts/FiraCodeMedium.fnt', null);

  // it will not be necessary to load this one if the player already passed the
  // first part of the game
  skyName = BasicGame.Helper.prototype.getSkyName(BasicGame.currentLevel);
  this.load.image(skyName, 'assets/sprites/' + skyName + '.png');

  // load this if the current level stored requires it, otherwise load it
  // when the player is near the end of the corresponding chapter
  this.load.spritesheet('spike-platform', 'assets/sprites/spike-platform.png', 32, 32);
  this.load.image('spike', 'assets/sprites/spike.png');
  this.load.image('spike-r', 'assets/sprites/spike-r.png');
  this.load.image('spike-l', 'assets/sprites/spike-l.png');
  this.load.image('spike-d', 'assets/sprites/spike-d.png');
  this.load.audio('spike', 'assets/soundfx/spike.ogg', true);

  levelData = BasicGame.Helper.prototype.getLevelIdAndName(BasicGame.currentLevel);
  this.game.load.tilemap(levelData.id,
    'assets/levels/' + levelData.name + '.json',
    null,
    Phaser.Tilemap.TILED_JSON);
};

BasicGame.Preloader.prototype.create = function () {
  // Once the load has finished we disable the crop because we're going to sit in
  // the update loop for a short while as the music decodes
  this.preloadBar.cropEnabled = false;
};

BasicGame.Preloader.prototype.update = function () {
  if (this.ready === false) {
    this.ready = true;
    this.state.start('MainMenu');
  }
};

},{"BasicGame":1}],18:[function(require,module,exports){
var BasicGame = require('BasicGame');

BasicGame.TheEnd = function (game) {
  // constants
  this.PANELS_SPACING = 16;
  this.FADEIN_DELAY = 800;
  this.NEXT_PANEL_DELAY = 1500;
  this.KEY_NEXT1 = Phaser.Keyboard.D;
  this.KEY_NEXT2 = Phaser.Keyboard.RIGHT;
  this.FONT_REGULAR = 'font';
  this.FONT_MEDIUM = 'font-medium';
  this.FOOTER_MSG = {
    'es': 'Hace un par de horas\nPasada la media noche',
    'en': 'A couple of hours ago\nPast midnight'
  };
  this.NEXT_MSG = {
    'es': 'siguiente',
    'en': 'next'
  };
  this.MAINMENU_MSG = {
    'es': 'ir al menú principal',
    'en': 'go to main menu'
  };
  this.PANELS_KEYS = [
    'end_scene_p1v1',
    'end_scene_p1v2',
    'end_scene_p1v3',
    'end_scene_p2v1',
    'end_scene_p2v2',
    'end_scene_p2v3'
  ];

  // destroyable objects (sprites, sounds, groups, tweens...)
  this.background = null;
  this.panelsGroup = null;
  this.buttonGroup = null;
  this.footerText = null;
  this.music = null;

  // global properties
  this.currentPanelIndex = 0;
  this.nextClicked = false;
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ PHASER STATE METHODS                                                     ║
BasicGame.TheEnd.prototype.preload = function() {
  if (BasicGame.language === 'es') {
    this.load.image(this.PANELS_KEYS[0], 'assets/sprites/end_es_1-1.png');
    this.load.image(this.PANELS_KEYS[1], 'assets/sprites/end_es_1-2.png');
    this.load.image(this.PANELS_KEYS[2], 'assets/sprites/end_es_1-3.png');
    this.load.image(this.PANELS_KEYS[3], 'assets/sprites/end_es_2-1.png');
    this.load.image(this.PANELS_KEYS[4], 'assets/sprites/end_es_2-2.png');
    this.load.image(this.PANELS_KEYS[5], 'assets/sprites/end_es_2-3.png');
  }
  else if (BasicGame.language === 'en') {
    this.load.image(this.PANELS_KEYS[0], 'assets/sprites/end_en_1-1.png');
    this.load.image(this.PANELS_KEYS[1], 'assets/sprites/end_en_1-2.png');
    this.load.image(this.PANELS_KEYS[2], 'assets/sprites/end_en_1-3.png');
    this.load.image(this.PANELS_KEYS[3], 'assets/sprites/end_en_2-1.png');
    this.load.image(this.PANELS_KEYS[4], 'assets/sprites/end_en_2-2.png');
    this.load.image(this.PANELS_KEYS[5], 'assets/sprites/end_en_2-3.png');
  }

  this.load.audio('exit_music', 'assets/music/the_end.ogg', true);
};

BasicGame.TheEnd.prototype.create = function () {
  var index = 0;
  var panelImage = null;
  var panelCounter = 0;
  var nextButton = null;
  var nextText = null;

  this.nextClicked = false;

  // set the background for the scene
  this.background = this.game.add.image(0, 0, 'credits_background');
  this.background.width = this.game.world.width;
  this.background.height = this.game.world.height;

  // add the footer message
  this.footerText = this.game.add.bitmapText(this.game.world.width - 16,
    this.game.world.height - 16,
    this.FONT_MEDIUM, this.FOOTER_MSG[BasicGame.language], 24);
  this.footerText.anchor.set(1, 1);
  this.footerText.align = 'right';

  // add the panels group
  this.panelsGroup = this.game.add.group();
  for (index = 0; index < this.PANELS_KEYS.length; index++) {
    panelImage = this.game.add.image(0, 0, this.PANELS_KEYS[index], 0, this.panelsGroup);
    panelImage.x = panelCounter * (panelCounter > 0 ? panelImage.width + this.PANELS_SPACING : 0);
    panelImage.alpha = 0;

    if (++panelCounter > 2) {
      panelCounter = 0;
    }
  }
  this.panelsGroup.x = 16;
  this.panelsGroup.y = 16;

  // add the next group
  this.createButton({
    buttonText: this.NEXT_MSG[BasicGame.language],
    clickCallback: function () {
      this.buttonGroup.destroy();
      this.nextClicked = true;
      this.showPanel();
    }
  });
  this.buttonGroup.children[0].input.enabled = false;
  this.buttonGroup.alpha = 0;

  // play the music
  this.music = this.game.add.sound('exit_music', 0.1, true);

  // init the animations for the first page
  this.currentPanelIndex = 0;
  this.showPanel();
};

BasicGame.TheEnd.prototype.update = function () {

};

/**
 * This method will be called when the State is shutdown (i.e. you switch to another state from this one).
 */
BasicGame.TheEnd.prototype.shutdown = function () {
  this.background.destroy();
  this.panelsGroup.destroy();
  this.buttonGroup.destroy();
  this.footerText.destroy();
  this.music.destroy();
};
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝
BasicGame.TheEnd.prototype.showPanel = function () {
  var fadeTween = null;

  if (this.currentPanelIndex > 2) {
    if (this.currentPanelIndex > 5) {
      // show main menu button
      this.createButton({
        buttonText: this.MAINMENU_MSG[BasicGame.language],
        clickCallback: function () {
          this.state.start('MainMenu');
        }
      });
      return;
    }
    else if (this.buttonGroup.alpha === 0 && !this.nextClicked) {
      // show next button
      this.buttonGroup.children[0].input.enabled = true;
      this.buttonGroup.alpha = 1;
      return;
    }
  }
  
  fadeTween = this.game.add.tween(this.panelsGroup.children[this.currentPanelIndex++]);
  fadeTween.to({ alpha: 1 }, this.FADEIN_DELAY, Phaser.Easing.Quadratic.Out, false);
  fadeTween.onComplete.addOnce(function () {
    this.game.time.create(this.game, true)
    .add(this.NEXT_PANEL_DELAY, this.showPanel, this)
    .timer.start(100);
  }, this);
  fadeTween.start();
};

BasicGame.TheEnd.prototype.createButton = function (prop) {
  this.buttonGroup = this.game.add.group();

  nextButton = this.game.add.button(this.game.world.width / 2,
    this.footerText.centerY, 'button_background', prop.clickCallback, this);
  nextButton.anchor.set(.5, .5);

  nextText = this.game.add.bitmapText(nextButton.x, nextButton.y,
    this.FONT_REGULAR, prop.buttonText, 18);
  nextText.anchor.set(.5, .5);

  nextButton.width = nextText.textWidth + 32;
  nextButton.height = nextText.textHeight + 16;

  this.buttonGroup.addChild(nextButton);
  this.buttonGroup.addChild(nextText);
};
},{"BasicGame":1}]},{},[11,12,13,14,15,16,17,18,3,4,5,6,7,8,9,10,2])
//# sourceMappingURL=itsgame.js.map
