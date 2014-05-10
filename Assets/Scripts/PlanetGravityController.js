#pragma strict

var ship : GameObject;
var gravityDirection : Vector2;
var gravityForce : Vector2;
var gravityStrength : int;
var gravityReach : int;
var quadrant : int;

function isNegative(number : int) {
	if ( Mathf.Ceil(number) / (Mathf.Abs(Mathf.Ceil(number))) == -1) {
		return true;
	} else {
		return false;
	}
}

function truncate(number) {
	return  Mathf.Ceil(number) / Mathf.Abs( Mathf.Ceil(number));
}

function Update () {
	gravityDirection = transform.position - ship.transform.position;
	gravityForce = Vector2(gravityStrength / gravityDirection.x, gravityStrength / gravityDirection.y);
	ship.rigidbody2D.AddForce(gravityForce);
	quadrant = truncate(gravityDirection.x) + truncate(gravityDirection.x) + truncate(gravityDirection.y);
	switch (quadrant) {
		case 3: 
			//Quadrant 1, to the left and down
			break;
		case -1: 
			//Quadrant 2, to the right and down
			break;
		case -3:
			//Quadrant 3, to the right and up
			break;
		
		case 1: 
			//Quadrant 4, to the left and up
			break;
	}
}