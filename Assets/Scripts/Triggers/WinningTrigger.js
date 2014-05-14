#pragma strict

public var cameraa : Camera;

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.collider.CompareTag("Player")) {
		Debug.Log("Winner");
		cameraa.GetComponent(CameraController).win = 1;
	}
}