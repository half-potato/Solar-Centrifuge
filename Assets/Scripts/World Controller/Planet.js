var NEWTONS_PER_UNIT : int = 9.55;

public class Planet {
  
  var size : int;
  var color : Vector3;
  var type : int;
  var position : Vector2;
  var gravity : int;
  
  function Planet(size, color, type, position) {
	this.size = size;
	this.color = color;
	this.type = type;
	this.position = position;

	this.gravity = size * 9.55;
  }

  function getForceVector(otherPosition) {
    var outputVector = new Vector3(0, 0, 0);
    outputVector.x = position.x - otherPosition.x;
    outputVector.y = position.y - otherPosition.y;
    outputVector.setLength(outputVector.length / gravity);
    return outputVector;
  }
}
