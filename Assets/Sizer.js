#pragma strict

public var pointer : GameObject;
public var size : int;

function Update () {
	transform.localScale = Vector3(size / (transform.position - pointer.transform.position).magnitude, size /(transform.position - pointer.transform.position).magnitude * .04695787, 1);
}