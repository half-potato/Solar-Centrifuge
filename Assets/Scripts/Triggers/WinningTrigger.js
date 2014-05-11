#pragma strict

public var cameraa : Camera;

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.collider.CompareTag("Player")) {
		cameraa.GetComponent(CameraController).win = 1;
	}
}