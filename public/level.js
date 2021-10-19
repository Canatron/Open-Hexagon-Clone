function Level(type) {

  this.sideIncrement = 0;
  this.nextWall = 0;
  this.nextWallOffset = 0;
  this.rotation = 0;
  this.framesAlive = 0;
  this.trueFrames = 0;
  this.incrementing = false;
  this.increments = 0;
  this.pulseMin = 0;
  this.pulseMax = 0;
  this.rotationPulseFrequency = 0;
  this.rotationPulseMin = 0;
  this.rotationPulseMax = 0;
  this.pulseFrequency = 30;
  this.name = type;
  this.wallDelay = 0;
  this.events = [];
  this.messages = [];
  this.beatFrames = [];
  this.beatStr = 0;
  player = new Player();

  if (type == "Rox") {
    this.description = "Starts spinning real fast, real quick.";
    this.speed = 1.2;
    this.speedIncrement = 0.3;
    this.rotationSpeed = 1.5 / 180 * Math.PI;
    this.rotationSpeedIncrement = 1 / 180 * Math.PI;
    this.sideMin = 6;
    this.style = new Style("rox");
    this.pattern = new PatternMaker("default");
    this.delay = 40;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
  } else if (type == "Baby Steps") {
    this.description = "Difficulty: Trivial";
    this.speed = 0.7;
    this.speedIncrement = 0.1;
    this.rotationSpeed = 0.5 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.1 / 180 * Math.PI;
    this.sideMin = 6;
    this.style = new Style("tutorial");
    this.pattern = new PatternMaker("simple");
    this.delay = 120;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
  	this.events.push(new Event("stat", 0, "wallDelay", 240));
    this.events.push(new Event("text", 0, "Welcome to Open Hexagon"));
    this.events.push(new Event("text", 0, "Use the arrow keys to rotate around the hexagon."));
    this.events.push(new Event("text", 0, "Avoid the incoming walls!"));
    this.events.push(new Event("text", 15 + 4, "As time passes, things get slightly harder..."));
    this.events.push(new Event("style", 60 + 4,"tutorial super"));
    this.events.push(new Event("text", 60 + 4, "Super Hexagon!"));
    this.events.push(new Event("stat", 60 + 4, "delay", 0.8, "mult"));
    this.events.push(new Event("stat", 60 + 4, "speed", 1.3 , "mult"));
    this.events.push(new Event("stat", 60 + 4, "rotationSpeed", 1.3 , "mult"));
    this.events.push(new Event("text", 120 + 4, "You have played this before... haven't you?"));
    this.music = "tutorial";
  } else if (type == "Pointless") {
    this.description = "Difficulty: Very Easy";
  	this.events.push(new Event("stat", 0, "wallDelay", 120));
  	this.events.push(new Event("text", 0, "Tutorials are over..."));
    this.events.push(new Event("text", 0, "Good luck getting some killer highscores"));
    this.speed = 1;
    this.speedIncrement = 0.15;
    this.rotationSpeed = 0.8 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.2 / 180 * Math.PI;
    this.sideMin = 6;
    this.style = new Style("pointless");
    this.pattern = new PatternMaker("default");
    this.delay = 80;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
    this.music = "pointless";
  } else if (type == "Flattering Shape") {
    this.description = "Difficulty: Easy";
    this.speed = 1.2;
    this.speedIncrement = 0.2;
    this.rotationSpeed = 1 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.25 / 180 * Math.PI;
    this.sideMin = 5;
    this.sideMax = 6;
    this.sides = 6;
    this.style = new Style("flattering");
    this.pattern = new PatternMaker("multiside safe");
    this.delay = 60;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
    this.events.push(new Event("style", 60 ,"flattering super"));
    this.events.push(new Event("text", 60, "Super Hexagon!"));
    this.events.push(new Event("stat", 60, "delay", 0.8 , "mult"));
    this.events.push(new Event("stat", 60, "speed", 1.3 , "mult"));
    this.events.push(new Event("stat", 60, "rotationSpeed", -1.4 , "mult"));
    this.music = "flattering";
  } else if (type == "Second Dimension") {
    this.description = "Difficulty: Still Easy";
    this.speed = 1.5;
    this.speedIncrement = 0.2;
    this.rotationSpeed = 1.5 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.25 / 180 * Math.PI;
    this.sideMin = 6;
    this.style = new Style("second dimension");
    this.pattern = new PatternMaker("default");
    this.delay = 45;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
    this.music = "mayo";
  } else if (type == "Flamingo") {
    this.description = "Difficulty: A little hard";
    this.speed = 2;
    this.speedIncrement = 0.25;
    this.rotationSpeed = 1.5 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.35 / 180 * Math.PI;
    this.sideMin = 5;
    this.sideMax = 7;
    this.sides = 6;
    this.style = new Style("flamingo");
    this.pattern = new PatternMaker("multiside safe");
    this.delay = 30;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
    this.music = "milky";
  } else if (type == "Seasick") {
    this.description = "BLAAAAAARRRGH";
    this.speed = 1.2;
    this.speedIncrement = 0.2;
    this.rotationSpeed = 1 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.2 / 180 * Math.PI;
    this.sideMin = 4;
    this.sideMax = 6;
    this.sides = 6;
    this.style = new Style("testing");
    this.pattern = new PatternMaker("multiside safe");
    this.delay = 40;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
  } else if (type == "Commando") {
    this.description = "More sides, more fun, right?";
    this.speed = 1.5;
    this.speedIncrement = 0;
    this.rotationSpeed = 0;
    this.rotationSpeedIncrement = 0;
    this.sideMin = 4;
    this.sides = 4;
    this.pulseMax = 0.6;
    this.pulseMin = -0.6;
    this.pulseFrequency = 30;
    this.sideIncrement = 2;
    this.style = new Style("commando");
    this.pattern = new PatternMaker("commando");
    this.delay = 30;
    this.delayIncrement = 1.1;
    this.incrementTime = 10 * 60;
    this.music = "commando";
    this.events.push(new Event("text", 0, "Level: 1 / Sides: 4"));
  } else if (type == "David") {
    this.description = "Weird patterns only david could think of..."
    this.speed = 2;
    this.speedIncrement = 0.3;
    this.rotationSpeed = 0;
    this.rotationSpeedIncrement = 0.01;
    this.sideMin = 10;
    this.pulseMax = 1;
    this.pulseMin = -1;
    this.pulseFrequency = 37;
    this.style = new Style("david");
    this.pattern = new PatternMaker("david");
    this.delay = 30;
    this.delayIncrement = 1.15;
    this.beatPulse = true;
    this.incrementTime = 10 * 60;
    this.events.push(new Event("text", 0, "funky fresh"));
    this.music = "juice";
  } else if (type == "Sunshine") {
    this.description = "Waiting for two sunrises...";
    this.speed = 1.2;
    this.speedIncrement = 0.25;
    this.rotationSpeed = 1.5 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0.35 / 180 * Math.PI;
    this.sideMin = 6;
    this.style = new Style("sunshine");
    this.pattern = new PatternMaker("default");
    this.delay = 46;
    this.delayIncrement = 1.1;
    this.incrementTime = 15 * 60;
    this.events.push(new Event("style", 18.8, "sunrise"));
    this.events.push(new Event("stat", 18.8, "beatPulse", true, "set"));
    this.events.push(new Event("stat", 18.8, "pulseMax", 1, "set"));
    this.events.push(new Event("stat", 18.8, "pulseFrequency", 8 * 6, "set"));
    this.events.push(new Event("stat", 18.8, "speed", 1.25, "mult"));
    this.events.push(new Event("stat", 18.8, "delay", 1/1.4, "mult"));
    this.events.push(new Event("stat", 18.8, "rotationSpeed", 1.9, "mult"));
    this.events.push(new Event("stat", 18.8, "rotationPulseFrequency", 8, "set"));
    this.events.push(new Event("stat", 18.8, "rotationPulseMin", -0.2, "set"));
    this.events.push(new Event("stat", 18.8, "rotationPulseMax", 1.2, "set"));
    this.events.push(new Event("style", 48, "sunrise super"));
    this.events.push(new Event("stat", 48, "pulseMax", 2, "set"));
    this.events.push(new Event("stat", 48, "rotationSpeed", 1.6, "mult"));
    this.events.push(new Event("stat", 48, "rotationPulseMin", -0.4, "set"));
    this.events.push(new Event("stat", 48, "rotationPulseMax", 2.2, "set"));
    this.music = "starfish";
  } else if (type == "Eye Sore") {
    this.description = "Legitimately painful visuals.";
    this.speed = 1.2;
    this.speedIncrement = 0;
    this.rotationSpeed = 1 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0;
    this.sideMin = 6;
    this.sideMax = 6;
    this.sides = 6;
    this.style = new Style("eye sore");
    this.pattern = new PatternMaker("sore");
    this.delay = 40;
    this.delayIncrement = 1;
    this.incrementTime = 10 * 60;
  } else if (type == "Tap Teleport") {
    this.description = "One tap moves a full side.";
    this.speed = 2;
    this.speedIncrement = 0.1;
    this.rotationSpeed = 1 / 180 * Math.PI;
    this.rotationSpeedIncrement = 0;
    this.sideMin = 6;
    this.sideMax = 6;
    this.sides = 6;
    this.style = new Style("pretty");
    this.pattern = new PatternMaker("tap");
    this.delay = 40;
    this.delayIncrement = 1.1;
    this.incrementTime = 10 * 60;
    //this.music = "foolMoon";
  }
  if (this.sides == undefined) this.sides = this.sideMin;
  if (this.sidesMax == undefined) this.sideMax = this.sideMin;

  if (this.music != undefined) {
    if (!levelSelect) {
  	var music = songs[this.music];
  	music.song.play();
    //music.song.setVolume(0.4);
    if (firstLevelRun) music.song.jump(music.times[0]);
  	else music.song.jump(music.times[Math.floor(Math.random() * music.times.length)]);
    }
  }

  this.update = function() {
  	this.trueFrames++;
    if (this.wallDelay == 0) {
    	this.framesAlive++;
    	this.nextWall--;
    }
    if (this.nextWall < 0) this.nextWall += this.delay;
    if (walls.length == 0 && this.pattern.wallsPending.length == 0 && this.incrementing) {
      if (this.sideIncrement == 0) this.sides = this.sideMin + Math.floor((this.sideMax - this.sideMin + 1) * Math.random());
      else this.sides += this.sideIncrement;
      this.speed += this.speedIncrement;
      this.rotationSpeed += this.rotationSpeedIncrement;
      this.delay = Math.ceil(this.delay / this.delayIncrement);
      this.nextWall = 60; //give em a second to breathe...
      this.incrementing = false;
      if (this.name == "Commando") this.events.splice(0,0,new Event("text", 0, "Level " + (this.increments + 1) + " / Sides: " + (this.sides)));
    }
    this.rotation += this.rotationSpeed;
    if (this.rotationPulseFrequency != 0) this.rotation += this.rotationPulseMin / 180 * Math.PI +  Math.sin(this.trueFrames / this.rotationPulseFrequency) * (this.rotationPulseMax - this.rotationPulseMin) / 180 * Math.PI
    if (this.framesAlive % this.incrementTime == 0) {
      this.incrementing = true;
      this.increments++;
    }
  }
}
