function Style(type) {
  this.colorExponent = 1;
  if (type == "testing") {
    this.hexagon = [color(255, 25, 0)];
    this.outline = [color(255)];
    this.primary = [color(155, 12, 0)];
    this.secondary = [color(255, 82, 0)];
    this.walls = [color(255)];
    this.funky = true;
  } else if (type == "rox") {
    this.hexagon = [color(127, 0, 0)];
    this.outline = [color(53, 255, 124)];
    this.primary = [color(127, 0, 0)];
    this.secondary = [color(0, 0, 127)];
    this.walls = [color(53, 255, 124)];
  } else if (type == "tutorial") {
    this.hexagon = [color(63, 70, 90)];
    this.outline = [color(0)];
    this.primary = [color(255)];
    this.secondary = [color(63, 70, 90)];
    this.walls = [color(0)];
    this.textColors = [this.primary,this.secondary];
  } else if (type == "pointless") {
    this.hexagon = [color(0, 255 / 3, 110 / 3), color(0, 225 / 3, 255 / 3), color(157 / 3, 0, 255 / 3), color(255 / 3 , 0, 178 / 3)];
    this.outline = [color(0, 255, 110), color(0, 225, 255), color(157, 0, 255), color(255, 0, 178)];
    this.primary = this.hexagon;
    this.secondary = [color(0, 255 / 5, 110 / 5), color(0, 225 / 5, 255 / 5), color(157 / 5, 0, 255 / 5), color(255 / 5 , 0, 178 / 5)];
    this.walls = this.outline;
    this.textColors = [this.walls,this.primary];
  } else if (type == "flattering") {
    this.hexagon = [color(0, 255 / 3, 110 / 3), color(0, 225 / 3, 255 / 3), color(157 / 3, 0, 255 / 3), color(255 / 3 , 0, 178 / 3)];
    this.outline = [color(0, 255, 110), color(0, 225, 255), color(157, 0, 255), color(255, 0, 178)];
    this.primary = this.hexagon;
    this.secondary = [color(100)];
    this.walls = this.outline;
  } else if (type == "flattering super") {
    this.hexagon = [color(0, 255 / 3, 110 / 3), color(100), color(157 / 3, 0, 255 / 3), color(100)];
    this.outline = [color(0, 255, 110), color(0, 225, 255), color(157, 0, 255), color(255, 0, 178)];
    this.primary = this.hexagon;
    this.secondary = [color(100), color(0, 225 / 3, 255 / 3), color(100), color(255 / 3 , 0, 178 / 3)];
    this.walls = this.outline;
    this.textColors = [this.outline, this.secondary];
    this.colorExponent = 2;
  } else if (type == "second dimension") {
    this.hexagon = [color(227, 212, 255),color(241, 212, 255),color(255, 212, 255),color(255, 212, 233)];
    this.outline = [color(89, 0, 255),color(174, 0, 255),color(255, 0, 255),color(255, 0, 63)];
    this.primary = this.hexagon;
    this.secondary = [color(255)];
    this.walls = this.outline;
  } else if (type == "flamingo") {
    this.hexagon = [color(160), color(255, 110, 170)];
    this.outline = [color(255)];
    this.primary = this.hexagon;
    this.secondary = [color(80)];
    this.walls = this.outline;
  } else if (type == "tutorial super") {
    this.hexagon = [color(63, 70, 90), color(204, 0, 153)];
    this.outline = [color(0)];
    this.primary = [color(255)];
    this.secondary = [color(63, 70, 90), color(204, 0, 153)];
    this.walls = [color(0)];
    this.textColors = [this.primary,this.secondary];
  } else if (type == "commando") {
    this.hexagon = [color(0,255,0),color(255,255,0)];
    this.outline = [color(0)];
    this.primary = [color(255)];
    this.secondary = [color(0,255,0),color(255,255,0)];
    this.walls = [color(0)];
    this.textColors = [this.secondary,this.walls];
    this.colorExponent = 2;
  } else if (type == "david") {
    this.hexagon = [color(0)];
    this.outline = [color(0,255,255)];
    this.primary = [color(0), color(0,100,100)];
    this.secondary = [color(0)];
    this.walls = [color(0,255,255)];
    this.textColors = [[color(0,255,255)],this.secondary];
    this.colorExponent = 2;
  } else if (type == "sunshine") {
    this.hexagon = [color(0,0,105), color(0,0,155)];
    this.outline = [color(255)];
    this.primary = this.hexagon;
    this.secondary = this.hexagon;
    this.walls = this.outline;
    this.textColors = [[color(0,255,255)],this.secondary];
    this.colorExponent = 2;
  } else if (type == "sunrise") {
    this.hexagon = [color(0,255,255),color(255,255,0)];
    this.outline = [color(0,0,0)];
    this.primary = [ color(0,255,255),color(255,255,0)];
    this.secondary = [color(0,255,255)];
    this.walls = [color(0,0,0)];
    this.textColors = [[color(0,255,255)],this.secondary];
    this.colorExponent = 2;
  } else if (type == "sunrise super") {
    this.hexagon = [color(0,255,255),color(255,255,0)];
    this.outline = [color(0,0,0),color(199,129,0)];
    this.primary = [ color(0,255,255),color(255,255,0)];
    this.secondary = [color(0,255,255)];
    this.walls = [color(0,0,0),color(199,129,0)];
    this.textColors = [[color(0,255,255)],this.secondary];
    this.colorExponent = 2;
  } else if (type == "dead") {
    this.hexagon = [color(0)];
    this.outline = [color(255)];
    this.primary = [color(0)];
    this.secondary = [color(0)];
    this.walls = [color(255)];
  } else if (type == "pretty") { //FIX: UNUSED
    this.hexagon = [color(3, 207, 252),color(0, 110, 255),color(0, 30, 255),color(76, 0, 255),color(140, 0, 255),color(195, 0, 255)];
    this.outline = [color(255)];
    this.colours = [[color(3, 207, 252)],[color(0, 110, 255)],[color(0, 30, 255)],[color(76, 0, 255)],[color(140, 0, 255)],[color(195, 0, 255)]];
    //for (var i = this.colours.length - 1; i >= 0; i--) this.colours[i].push(color(this.colours[i][0].levels[0] * 0.5,this.colours[i][0].levels[1] * 0.5,this.colours[i][0].levels[2] * 0.5));
    this.walls = [color(255)];
  } else if (type == "party") { //FIX: UNUSED
    this.hexagon = [color(127, 0, 255),color(255, 200, 0)];
    this.outline = [color(0)];
    this.colours = [[color(127, 0, 255)],[color(255, 200, 0)]];
    this.walls = this.outline;
  } else if (type == "eye sore") {
    this.hexagon = [color(255,0,0)];
    this.outline = [color(255)];
    this.colours = [[color(255, 42, 0)],[color(255, 106, 0)],[color(255, 183, 0)]];
    this.walls = [color(255)];
  }

  this.show = function() {
      noStroke();
        for (var i = level.sides - 1; i >= 0; i--) {
          if (this.colours != undefined) fill(level.style.getColor(this.colours[i % (this.colours.length)]));
          else {
            if (i % 2 == 0) fill(level.style.getColor(this.primary));
            else fill(level.style.getColor(this.secondary));
          }
          beginShape();
          vertex(0,0);
          vertex(Math.cos(Math.PI * 2 / level.sides * i) * 3000,
                 Math.sin(Math.PI * 2 / level.sides * i) * 3000);
          vertex(Math.cos(Math.PI * 2 / level.sides * (i + 1.005)) * 3000,
                 Math.sin(Math.PI * 2 / level.sides * (i + 1.005)) * 3000); //1.005 so there are no bad borders
          endShape(CLOSE);
        }
    }
  this.getColor = function(colorArray) {
    if (colorArray.length == 1) return colorArray[0];
    else {
    var colorNum = (level.framesAlive % (colorArray.length * 60)) / 60;
    var delta = colorNum - Math.floor(colorNum);
    delta = Math.pow(delta,this.colorExponent);
    colorNum = Math.floor(colorNum);
    return color((colorArray[(colorNum + 1) % colorArray.length].levels[0] - colorArray[colorNum].levels[0]) * delta + colorArray[colorNum].levels[0],
          (colorArray[(colorNum + 1) % colorArray.length].levels[1] - colorArray[colorNum].levels[1]) * delta + colorArray[colorNum].levels[1],
          (colorArray[(colorNum + 1) % colorArray.length].levels[2] - colorArray[colorNum].levels[2]) * delta + colorArray[colorNum].levels[2],
          (colorArray[(colorNum + 1) % colorArray.length].levels[3] - colorArray[colorNum].levels[3]) * delta + colorArray[colorNum].levels[3]);
    }
  }
}
