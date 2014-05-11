#pragma strict

public var isDead : int = 0;

function OnCollisionEnter2D(coll: Collision2D) {
	isDead = 1;
}