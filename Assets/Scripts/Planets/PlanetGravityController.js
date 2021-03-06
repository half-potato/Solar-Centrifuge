﻿#pragma strict

var ship : GameObject;
var gravityDirection : Vector2;
var gravityForce : Vector2;
var gravityStrength : int;
var gravityReach : int;
var quadrant : int;
var distance : int;
var previousDistance : int;
var escapeVelocity : int;

function isNegative(number : int) {
	if ( Mathf.Ceil(number) / (Mathf.Abs(Mathf.Ceil(number))) == -1) {
		return true;
	} else {
		return false;
	}
}

function truncate(number) {
	return  Mathf.Ceil(number) / Mathf.Abs( Mathf.Ceil(number));
}

function Update () {
	previousDistance = distance;
	distance = Vector2.Distance(ship.transform.position, transform.position);
	if (((1 - distance / gravityReach) > 0) && ship.rigidbody2D.velocity.magnitude < escapeVelocity) {
		gravityDirection = transform.position - ship.transform.position;
		ship.rigidbody2D.AddForceAtPosition(gravityDirection.normalized * (1.0 - distance / gravityReach * 2) * gravityStrength * 2, transform.position);
	}
}