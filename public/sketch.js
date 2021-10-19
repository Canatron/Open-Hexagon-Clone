var musicLoading = false;

function preload() {
  songs = {
    die: loadSound('sounds/die.ogg'),
    juice: {
      song: undefined,//loadSound('sounds/juice.ogg'),
      times: [78,97,155,174]
    },
    tutorial: {
      song: undefined,//loadSound('sounds/tutorial.ogg'),
      times: [0,18,68]
    },
    mayo: {
      song: undefined,//loadSound('sounds/mayo.ogg'),
      times: [35,52,93]
    },
    milky: {
      song: undefined,//loadSound('sounds/milky.ogg'),
      times: [16,37,81]
    },
    pointless: {
      song: undefined,//loadSound('sounds/pointless.ogg'),
      times: [32,47,98,125]
    },
    flattering: {
      song: undefined,//loadSound('sounds/flattering.ogg'),
      times: [26,66]
    },
    commando: {
      song: undefined,//loadSound('sounds/commando.ogg'),
      times: [61,88]
    },
    starfish: {
      song: undefined,
      times: [0]
    },
    foolMoon: {
      song: undefined,
      times: [0]
    }
  }
}

function setup() {
  width  = 1000;//window.innerWidth;
  if (window.innerHeight < 700) height = window.innerHeight;
  else height = 700;
  canvas = createCanvas(width,height);
  canvas.position(0,0);
  levelSelect = true;
  for(var propt in songs) { //why is this sound so damn loud anyways?
    if (songs.hasOwnProperty(propt)) {
      if (propt == "die") {
        songs[propt].setVolume(0.4);
      } else {

      }
    }
  }
  walls = [];
  player = new Player();
  levels = ["Baby Steps","Pointless","Flattering Shape","Second Dimension","Flamingo","Seasick","Rox","Commando","David","Sunshine","Eye Sore","Tap Teleport"];
  levelIndex = 0;
  level = new Level(levels[levelIndex]);
  firstLevelRun = true;
}



function draw() {
  if (!player.dead) {

  if (level.name != "Tap Teleport") {
	  if (keyIsDown(LEFT_ARROW)) {
	    player.oldPos = player.pos;
	    player.pos -= 0.15;
	  }

	  if (keyIsDown(RIGHT_ARROW)) {
	    player.oldPos = player.pos;
	    player.pos += 0.15;
	  }
  }
  }
  push();
  translate(width/2,height/2);
  if (level.name == "Seasick") {
    rotate(Math.sin(level.framesAlive / 60) * level.rotationSpeed * 200);
  } else rotate(level.rotation);
  if (level.name == "Eye Sore") {
    if (!levelSelect) {
      shearY(Math.sin(level.framesAlive / (15 - level.increments)) * (0.2 + level.increments * 0.1));
      shearX(Math.cos(level.framesAlive / (15 - level.increments)) * (0.2 + level.increments * 0.1));
    }
  }
  scale(0.8);
  if (level.beatPulse) scale(1 + Math.sin(level.trueFrames * Math.PI * 2 / level.pulseFrequency) * (level.pulseMax / 10));
  background(0);
  level.style.show();
  drawCenter(level.sides);
  if (levelSelect) {
    if (level.name == "Seasick") rotate(Math.sin(level.framesAlive / 60) * level.rotationSpeed * -200);
    else rotate(-level.rotation);
    fill(level.style.getColor(level.style.walls));
    noStroke();
    textAlign(LEFT, BASELINE);
    translate(width/-2,height/-2);
    textSize(100);
    text(level.name,-width / 10,height * 0.9);
    textSize(50);
    text(level.description,-width / 10,height * 0.98);
    if (musicLoading) {
      textAlign(CENTER);
      text("Loading music...",width / 2, height * 0.7);
    }
    level.framesAlive++;
    level.rotation += level.rotationSpeed;
  } else {

  if (level.events.length > 0)
    if (level.events[0].update()) level.events.splice(i,1);

  //wall maker
  if (level.pattern.wallsPending.length == 0 && !level.incrementing) level.pattern.update();

  while (level.pattern.wallsPending.length > 0 && level.nextWall == 0 && !player.dead) {
    var nextDelay = level.pattern.wallsPending[0].delay * level.delay;
    level.nextWall = Math.floor(level.pattern.wallsPending[0].delay * level.delay);
    if (level.pattern.wallsPending[0].type == "spacer") {
      level.pattern.wallsPending.splice(0,1);
      break;
    }
    level.nextWallOffset = (nextDelay - level.nextWall) * level.speed;
    if (!level.changeSideAmount) walls.push(new Wall(level.pattern.wallsPending[0].type,level.pattern.wallsPending[0].gap,level.pattern.wallsPending[0].sides,level.pattern.wallsPending[0].width));
    level.pattern.wallsPending.splice(0,1);
  }

  player.show();
  if (!player.dead) {
    player.update();
    level.update();
  }

  for (var i = 0; i <= walls.length - 1; i++) { //collide oldest "soonest" walls first to avoid invincibility through "hiding in sooner walls"
    walls[i].show(level.sides);
    if (walls[i].update(level.sides)) {
      walls.splice(i,1);
      i--;
    }
  }

  if (player.dead) {
    pop();
    fill(0);
    rect(width/ 3.2, height /8, width / 2.7, height / 10);
    noStroke();
    fill(255);
    textSize(width / 20);
    textAlign("center",BASELINE);
    text("Dead at " + finalTime + "s", width / 2, height / 5);
  } else {
    pop();
    fill(level.style.getColor(level.style.walls));
    noStroke();
    textSize(width / 50);
    textAlign("left","top");
    text("Time " + (Math.floor(level.framesAlive / 60 * 100) / 100) + "s", 0, 0);

    if (level.messages.length > 0)
      if (level.messages[0].show()) level.messages.splice(0,1);
  }
}
}
var cow = [];
function keyPressed() {
	cow.push(level.trueFrames);
  if (keyCode == 32) { //space
    if (levelSelect) {
      if (level.music == undefined || songs[level.music].song != undefined) {
        levelSelect = false;
        firstLevelRun = true;
        var rot = level.rotation; //seamless transition into level start by copying rotation
        level = new Level(level.name);
        level.rotation = rot;
      } else {
        musicLoading = true;
        songs[level.music].song = loadSound('sounds/' + level.music + '.ogg', musicDone)
      }
    }
  }

if (levelSelect) {
  if (keyCode == 37) { //left
    levelIndex--;
    if (level.music != undefined && songs[level.music].song != undefined) songs[level.music].song.stop();
    if (levelIndex == -1) levelIndex = levels.length - 1;
    player.dead = false;
    level = new Level(levels[levelIndex]);
  }

  if (keyCode == 39) { //right
    levelIndex++;
    if (level.music != undefined && songs[level.music].song != undefined) songs[level.music].song.stop();
    if (levelIndex == levels.length) levelIndex = 0;
    player.dead = false;
    level = new Level(levels[levelIndex]);
  }
} else {
	if (level.name == "Tap Teleport" && !player.dead) {
	  if (keyIsDown(LEFT_ARROW)) {
	    player.oldPos = player.pos;
	    player.pos -= Math.PI * 2 / level.sides;
	  }

	  if (keyIsDown(RIGHT_ARROW)) {
	    player.oldPos = player.pos;
	    player.pos += Math.PI * 2 / level.sides;
	  }
	}
}

  if (keyCode == 27) { //esc
    if (!levelSelect) {
      if (level.music != undefined) songs[level.music].song.stop();
      walls = [];
      wallsPending = [];
      player.dead = false;
      levelSelect = true;
      var rot = level.rotation; //seemless transition
      level = new Level(level.name);
      level.rotation = rot;
    }
  }

  if ((keyCode == UP_ARROW || keyCode == 32) && player.dead) {
  	firstLevelRun = false;
    walls = [];
    level = new Level(levels[levelIndex]);
    player.dead = false;
  }
}

function musicDone(song) {
  song.setLoop(true);
  song.setVolume(0.4);
  musicLoading = false;
  levelSelect = false;
  firstLevelRun = true;
  var rot = level.rotation; //seemless transition
  level = new Level(level.name);
  level.rotation = rot;
}

function drawCenter (sides) {
  if (level.beatFrames.length > 0) {
  	if (level.beatFrames[0] == level.framesAlive) {
  		level.beatFrames.splice(0,1);
  		level.beatStr = 1;
  	}
  	level.beatStr -= 0.1;
  	if (level.beatStr < 0) level.beatStr = 0;
  	scale(1 + level.beatStr * 0.1);
  }
  fill(level.style.getColor(level.style.hexagon));
  stroke(level.style.getColor(level.style.outline));
  strokeWeight(width / 200);
  beginShape();
  for (i = 0; i < sides; i++) {
    vertex(Math.cos(Math.PI * 2 / sides * i) * width / 20,Math.sin(Math.PI * 2 / sides * i) * width / 20);
  }
  endShape(CLOSE);
  scale(1 / (1 + level.beatStr * 0.1));
}
