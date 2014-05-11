#pragma strict

var rotationSpeed : float;

function Update () {
	transform.Rotate(Vector3.right * Time.deltaTime * rotationSpeed);
}