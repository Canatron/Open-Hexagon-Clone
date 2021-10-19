function Event(event, time, value, value2, operation) {

  this.update = function() {
    if (Math.floor(time * 60) <= level.trueFrames) {
      if (event == "style") {
        level.style = new Style(value);
      } else if (event == "text") {
      	level.messages.push(new gameText(value));
      } else if (event == "stat") {
      	if (operation == undefined) level[value] += value2;
        else if (operation == "set") level[value] = value2;
        else if (operation == "mult") level[value] *= value2;
      }
      return true;
    } else return false;
  }

}
