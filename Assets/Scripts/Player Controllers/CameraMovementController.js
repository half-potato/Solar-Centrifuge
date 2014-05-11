#pragma strict

var ship : GameObject;

var offset : Vector3;

function Update() {
	transform.position = ship.transform.position - offset;
}