#pragma strict

var cameraa : Camera;
var middlePoint : Vector2;
var ship : GameObject;

function OnValidate () {
	middlePoint = cameraa.WorldToScreenPoint(transform.position);
	middlePoint.y = -middlePoint.y;
}

function getAngleToMouse ()
{
	var slope : Vector2;
	var mousePos : Vector2;
	mousePos = Vector2(Input.mousePosition.x, -Input.mousePosition.y);
	mousePos = middlePoint - mousePos;
	var output = Mathf.Atan2(mousePos.y, mousePos.x);
	return (Mathf.Rad2Deg * output);
}

function Update () {
	if (cameraa.GetComponent(CameraController).freezeGame != 1) {
		rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, getAngleToMouse());
	}
}