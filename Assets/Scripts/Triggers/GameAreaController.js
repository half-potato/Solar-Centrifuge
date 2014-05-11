#pragma strict

public var cameraa : Camera;

function OnTriggerExit2D (coll : Collider2D) {
	Debug.Log("Collide");
	if (coll.CompareTag("Player")) {
		cameraa.GetComponent(CameraController).isDead = 1;
	}
}