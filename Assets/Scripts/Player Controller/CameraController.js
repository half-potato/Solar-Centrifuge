#pragma strict

var ship : GameObject;
var offset : Vector3 = new Vector3(0, 1, 1);

void Update() {
	transform.position = ship.transform.position + offset;
}