function PatternMaker(type) {
  this.wallsPending = [];
  if (type == "default") {
    this.chances = {
      "leeeft riiight":0.5, //all the way left and right and left
      "spam left":2, //spam left quadlet
      "LLLRRR":1.5, //left left left right right right
      "spiral":0.5, //spiral
      "alt stagger":1, //alternating stagger
      "triple stack":0.2, //triple stack
      "spam cage walls":0.5, //left right spam cage walls
      "normal": 5
    };
  } else if (type == "multiside safe") {
    this.chances = {
      "leeeft riiight":0.5, //all the way left and right and left
      "spam left":2, //spam left quadlet
      "LLLRRR":1.5, //left left left right right right
      "spiral":0.5, //spiral
      "alt stagger":1, //alternating stagger
      "triple stack":0.2, //triple stack
      "normal": 5 //normal wall / open hexagon
    };
  } else if (type == "simple") {
    this.chances = {
      "spam left":1, //spam left quadlet
      "spiral":0.5, //spiral
      "triple stack":0.3, //triple stack
      "normal":5 //normal wall / open hexagon
    };
  } else if (type == "commando") {
    this.chances = {
      "commando walls":1 //commando walls
    };
  } else if (type == "david") {
    this.chances = {
      "spikes":2, //spikes
      "shatter":3 //shatter
    };
  } else if (type == "sore") {
    this.chances = {
      "leeeft riiight":0.4, //all the way left and right and left
      "spam left":2, //spam left quadlet
      "LLLRRR":1.5, //left left left right right right
      "spiral":0.5, //spiral
      "alt stagger":1, //alternating stagger
      "triple stack":0.2, //triple stack
      "normal": 5,
      "piano": 0.4
    };
  } else if (type == "tap") {
    this.chances = {
      "leeeft riiight":0.5, //all the way left and right and left
      "spam left":2, //spam left quadlet
      "LLLRRR":1.5, //left left left right right right
      "alt stagger":1, //alternating stagger
      "triple stack":0.2, //triple stack
      "spam cage walls":0.5, //left right spam cage walls
      "normal": 5
    };
  }

  this.chanceSum = 0;
  for(var prop in this.chances) {
    if (this.chances.hasOwnProperty(prop)) {
      this.chanceSum += this.chances[prop];
    }
  }

  var past = 0;
  for(var prop in this.chances) {
    if (this.chances.hasOwnProperty(prop)) {
      this.chances[prop] += past;
      past = this.chances[prop];
    }
  }

  this.update = function() {
    var chance = Math.random() * this.chanceSum;
    var gaunlet = "";
    for(var prop in this.chances) {
      if (this.chances.hasOwnProperty(prop)) {
        if (chance < this.chances[prop]) {
          gaunlet = prop;
          break;
        }
      }
    }
    if (gaunlet == "leeeft riiight") { //all the way left and right and left
        var gap = Math.floor(Math.random() * level.sides);
        this.wallsPending.push({type:"block",sides:1,gap: gap,delay: 0, width: 3.2 * level.speed * level.delay});
        this.wallsPending.push({type:"basic",gap: gap - 1 + level.sides,delay: 1.4});
        this.wallsPending.push({type:"basic",gap: gap + 1 + level.sides,delay: 1.4});
        this.wallsPending.push({type:"basic",gap: gap - 1 + level.sides,delay: 1.4});
    } else if (gaunlet == "spam left") { //spam left quadlet
      var gap = Math.floor(Math.random() * level.sides);
      var random = Math.random();
      var direction = (random - 0.5) / Math.abs(random - 0.5);
      for (var i = 0; i < 3; i++) {
        this.wallsPending.push({type:"basic",gap: 6 + gap + i * direction,delay: 0.5});
      }
      this.wallsPending.push({type:"basic",gap: 6 + gap + 3 * direction, delay: 1});
    } else if (gaunlet == "LLLRRR") { //left left left right right right && level.sides >= 6
      var gap = Math.floor(Math.random() * level.sides);
      var random = Math.random();
      var direction = (random - 0.5) / Math.abs(random - 0.5);
      for (var i = 0; i <= 3; i++) {
        this.wallsPending.push({type:"block",gap: 6 + gap + i * direction,delay: 0, sides: 2});
        this.wallsPending.push({type:"block",gap: 3 + gap + i * direction,delay: 0.5, sides: 2});
      }
      for (var i = 2; i > 0; i--) {
        this.wallsPending.push({type:"block",gap: 6 + gap + i * direction,delay: 0, sides: 2});
        this.wallsPending.push({type:"block",gap: 3 + gap + i * direction,delay: 0.5, sides: 2});
      }
      this.wallsPending.push({type:"block",gap: 6 + gap, delay: 0, sides: 2});
      this.wallsPending.push({type:"block",gap: 3 + gap, delay: 1, sides: 2});
    } else if (gaunlet == "spiral") { //spiral //damn negative gap values
      var gap = Math.floor(Math.random() * level.sides) + level.sides * 100;
      var random = Math.random();
      var direction = (random - 0.5) / Math.abs(random - 0.5);
      var thicc = level.delay * level.speed * 1.5 / level.sides;
      var delayMax = 30 / level.delay;
      if (delayMax < 1) delayMax = 1;
      for (var i = 0; i <= 10; i++) {
        this.wallsPending.push({type:"block",gap: 6 + gap + i * direction,delay: 0, sides: 1, width: thicc * delayMax});
        this.wallsPending.push({type:"block",gap: 3 + gap + i * direction,delay: 1.5 / level.sides * delayMax, sides: 1, width: thicc * delayMax});
      }
      this.wallsPending.push({type:"block",gap: 6 + gap + 11 * direction, delay: 0, sides: 1, width: thicc * delayMax});
      this.wallsPending.push({type:"block",gap: 3 + gap + 11 * direction, delay: 1.5, sides: 1, width: thicc * delayMax});
    } else if (gaunlet == "stagger") { //stagger
      var gap = Math.floor(Math.random() * 2);
      for (var i = 0; i <= 7; i++) {
        for (var j = level.sides - 1; j >= 0; j -= 2) {
          this.wallsPending.push({type:"block",gap: 6 + gap + i % 2 + j,delay: 0, sides: 1});
        }
        this.wallsPending.push({type:"block",gap: 6 + gap + 1 * direction,delay: 0.5, sides: 1});
      }
      for (var i = level.sides - 1; i >= 0; i -= 2) {
        this.wallsPending.push({type:"block",gap: 6 + gap + i * direction,delay: 0, sides: 1});
      }
      this.wallsPending.push({type:"block",gap: 6 + gap + i * direction,delay: 1, sides: 1});
    } else if (gaunlet == "triple stack") { //triple stack
      var gap = Math.floor(Math.random() * 2);
      this.wallsPending.push({type:"basic",gap: gap,delay: 0.2});
      this.wallsPending.push({type:"basic",gap: gap,delay: 0.2});
      this.wallsPending.push({type:"basic",gap: gap,delay: 1});
    } else if (gaunlet == "commando walls") { //commando walls
      var gap = Math.floor(Math.random() * level.sides);
      this.wallsPending.push({type:"block",gap: gap,delay: 0 , sides: level.sides / 2 - 1});
      this.wallsPending.push({type:"block",gap: gap + level.sides / 2,delay: 1,sides: level.sides / 2 - 1});
    } else if (gaunlet == "spam cage walls") { //left right spam cage walls
      var gap = Math.floor(Math.random() * level.sides);
      this.wallsPending.push({type:"block",gap: gap,delay: 0 , sides: 1, width: 6 * level.speed * level.delay});
      this.wallsPending.push({type:"block",gap: gap + level.sides / 2,delay: 1,sides: 1, width: 6 * level.speed * level.delay});
      for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          this.wallsPending.push({type:"block",gap: gap + level.sides / 2 + 1,delay: 0,sides: 1});
          this.wallsPending.push({type:"block",gap: gap + 1,delay: 0.5,sides: 1});
        } else {
          this.wallsPending.push({type:"block",gap: gap + level.sides / 2 + 2,delay: 0,sides: 1});
          this.wallsPending.push({type:"block",gap: gap + 2,delay: 0.5,sides: 1});
        }
      }
      this.wallsPending.push({type:"spacer",delay: 1});
    } else if (gaunlet == "spikes") { //spikes
      var spots = [];
      for (var i = 0; i < level.sides; i++) {
        spots.push(i);
      }
      for (var i = 0; i < level.sides; i++) {
        var index = Math.floor(Math.random() * spots.length);
        var gap = spots[index];
        this.wallsPending.push({type:"block",gap: gap,delay: 0.7,sides: 1, width: 100});
        spots.splice(index,1);
      }
      this.wallsPending.push({type:"spacer",delay: 1});
    } else if (gaunlet == "shatter") { //shatter
      var spots = [];
      for (var i = 0; i < level.sides; i++) {
        spots.push(i);
      }
      for (var i = 0; i < level.sides; i++) {
        var index = Math.floor(Math.random() * spots.length);
        var gap = spots[index];
        this.wallsPending.push({type:"block",gap: gap,delay: 0.2,sides: 1});
        spots.splice(index,1);
      }
      this.wallsPending.push({type:"spacer",delay: 1});
    } else if (gaunlet == "piano") { //cage which goes right
      var gap = Math.floor(Math.random() * level.sides) + level.sides * 100;
      var random = Math.random();
      var direction = (random - 0.5) / Math.abs(random - 0.5);
      this.wallsPending.push({type:"block",gap:gap,delay: 0,sides: 1,width: level.speed * level.delay * (level.sides - 2)});
      for (var i = 1; i < level.sides; i++) {
        this.wallsPending.push({type:"basic",gap: gap + i * direction,delay:1});
      }
      this.wallsPending.push({type:"spacer",delay: 1});
    } else if (gaunlet == "normal") { //normal wall
      var gap = Math.floor(Math.random() * level.sides);
      this.wallsPending.push({type:"basic",gap: gap,delay: 1});
    }
  }
}
