#pragma strict

var rotationSpeed : float;

function Update () {
	transform.Rotate(Vector3.up * Time.deltaTime * rotationSpeed);
}