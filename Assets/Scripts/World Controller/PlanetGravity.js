#pragma strict

var ship:GameObject;
var gravity = 10;

function Update () {
	var forceVector:Vector2 = (transform.position - ship.transform.position) * ship.rigidbody2D.mass ;
	ship.rigidbody2D.AddForce(forceVector*Time.deltaTime);
}
