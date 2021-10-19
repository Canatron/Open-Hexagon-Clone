function Wall(type, gap, sides, size) {
  this.type = type;
  this.pos = 200 - level.nextWallOffset; //keep wall spacing consistent as delay => 0
  this.gap = gap % level.sides;
  this.width = size;
  this.sides = sides;
  if (this.width == undefined) this.width = 7;

  this.show = function(sides) {
    noStroke();
    fill(level.style.getColor(level.style.walls));
    if (this.type == "basic") {
      beginShape();
      for (var i = level.sides; i >= 1; i--) {
        vertex(Math.cos(Math.PI * 2 / level.sides * (i + this.gap)) * this.pos * width / 200,
               Math.sin(Math.PI * 2 / level.sides * (i + this.gap)) * this.pos * width / 200);
      }
      for (var i = 1; i <= level.sides; i++) {
        vertex(Math.cos(Math.PI * 2 / level.sides * (i + this.gap)) * (this.pos + this.width) * width / 200,
               Math.sin(Math.PI * 2 / level.sides * (i + this.gap)) * (this.pos + this.width) * width / 200);
      }
      endShape();
    } else if (this.type == "block") {
      beginShape();
      for (var i = this.sides; i >= 0; i--) {
        vertex(Math.cos(Math.PI * 2 / sides * (i + this.gap)) * this.pos * width / 200,
               Math.sin(Math.PI * 2 / sides * (i + this.gap)) * this.pos * width / 200);
      }
      for (var i = 0; i <= this.sides; i++) {
        vertex(Math.cos(Math.PI * 2 / sides * (i + this.gap)) * (this.pos + this.width) * width / 200,
               Math.sin(Math.PI * 2 / sides * (i + this.gap)) * (this.pos + this.width) * width / 200);
      }
      endShape();
    }
  }

  this.update = function(sides) {
      if (level.wallDelay > 0) {
        level.wallDelay--;
        return false;
      }
      var displace = level.speed;
      if (!level.beatPulse) {
        if (level.framesAlive % level.pulseFrequency * 2 < level.pulseFrequency) displace += level.pulseMin;
        else displace += level.pulseMax;
      }
      if (!player.dead && this.pos > 10) this.pos -= displace;
      else if (!player.dead && this.pos <= 10) this.width -= displace;
      if (!player.dead && this.pos < 10) {
        var cow = 10 - this.pos;
        this.pos = 10;
        this.width -= cow;
      }

      if (this.type == "basic") {
        if (this.pos <= 15) { //in range
          if (this.gap != player.side) { //player not in gap
            if (player.previousSide == this.gap) { //check if they were last frame... (aka moved out of gap)
                player.pos = player.oldPos;
                player.side = this.gap;
            } else if (!player.invincible && !player.dead) { //if they werent on the wall side... die
              if (level.music != undefined) songs[level.music].song.stop();
              songs.die.play();
              player.dead = true;
              level.style = new Style("dead");
              finalTime = (Math.floor((level.framesAlive / 60) * 100) / 100);
            }
          }
          if (this.width < 0) return true;
        }
        else return false;
      } else if (this.type == "block") {
        if (this.pos <= 15) {
          var collided = false;
          for (var i = this.gap; i < this.gap + this.sides; i++) {
            if (player.side == (i) % level.sides) collided = true;
          }
          if (collided) {
            collided = false;
            for (var i = this.gap; i < this.gap + this.sides; i++) {
              if (player.previousSide == (i) % level.sides) collided = true;
            }
            if (!collided) {
              player.pos = player.oldPos;
              if (player.pos > Math.PI * 2) player.pos -= Math.PI * 2;
              else if (player.pos < 0) player.pos += Math.PI * 2;
              player.side = Math.floor(player.pos / (Math.PI * 2) * level.sides);
            } else if (!player.invincible && !player.dead) {
              if (level.music != undefined) songs[level.music].song.stop();
              songs.die.play();
              player.dead = true;
              level.style = new Style("dead");
              finalTime = (Math.floor((level.framesAlive / 60) * 100) / 100);
            }
          }
          if (this.width < 0) return true;
        }
        else return false;
      }
    }
}
