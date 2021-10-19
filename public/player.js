function Player(side) {
  this.side = 0;
  this.previousSide = this.side;
  this.pos = 0 + Math.PI / 6;
  this.oldPos = this.pos;
  this.moving = undefined;
  this.dead = false;
  this.invincible = false;

  this.update = function() {
    this.previousSide = this.side;
    if (this.pos > Math.PI * 2) this.pos -= Math.PI * 2;
    else if (this.pos < 0) this.pos += Math.PI * 2;
    this.side = Math.floor(this.pos / (Math.PI * 2) * level.sides);
  }

  this.show = function(sides) {
    push();
    noStroke();
    fill(level.style.getColor(level.style.outline));
    rotate(this.pos);
    translate(width/18,0);
    triangle(0, width / 150, 0, width / -150, width / 75, 0);
    pop();
  }
}