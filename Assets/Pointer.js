#pragma strict

public var radarObject : GameObject;

function Update () {
	transform.LookAt(radarObject.transform.position, transform.right);
}