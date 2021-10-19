function gameText(message) {
  this.message = message;
  this.duration = message.length * 3;
  if (this.duration < 150) this.duration = 150;
  this.startingFrame = -1;

  this.show = function() {
    if (this.startingFrame == -1) this.startingFrame = level.trueFrames;
    stroke(level.style.getColor(level.style.textColors[1]));
    fill(level.style.getColor(level.style.textColors[0]));
    strokeWeight(width / 200);
    textSize(width / 30);
    textAlign("center",BASELINE);
    text(this.message,width / 2, height / 5);
    if (level.trueFrames > this.startingFrame + this.duration) return true;
    else return false;
  }

}
