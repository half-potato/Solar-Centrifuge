#pragma strict

function OnTriggerExit2D (coll : Collider2D) {
	if (coll.CompareTag("GameArea")) {
		this.GetComponent(DeathController).isDead = 1;
	}
}