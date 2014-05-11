#pragma strict

public var hasWon : int = 0;

function OnTriggerEnter(coll : Collider) {
	if (coll.CompareTag("WinArea")) {
		hasWon = 1;
	}
}