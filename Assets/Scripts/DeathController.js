#pragma strict

public var isDead : int = 0;

var explosion : GameObject;

function OnCollisionEnter2D(coll: Collision2D) {
	if (isDead!=1) {
		Instantiate(explosion, transform.position, Quaternion.identity);
	}
	isDead = 1;
}