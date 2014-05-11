#pragma strict

var isGoingUp : int = 1;
public var travelDistance : float;
var speed : float;

function Update () {
	if (transform.position.y >= travelDistance) {
		isGoingUp = 0;
	} else if (transform.position.y <= 1) {
		isGoingUp = 1;
	}

	if (isGoingUp) {
		transform.Translate(0, Time.deltaTime * speed, 0, Space.World);
	} else {
		transform.Translate(0, -(Time.deltaTime * speed), 0, Space.World);
	}
	transform.Rotate(new Vector3(15, 30, 45) * Time.deltaTime);
}