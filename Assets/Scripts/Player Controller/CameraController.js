#pragma strict

var ship : GameObject;
var offset : Vector3;
offset = Vector3(0, 250, 100);

function Update() {
	transform.position = ship.transform.position + offset;
}