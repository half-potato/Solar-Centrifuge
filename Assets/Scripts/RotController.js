#pragma strict

var cameraa : Camera;
var middlePoint : Vector2;

function OnValidate () {
	middlePoint = cameraa.WorldToScreenPoint(Vector3(0, 0, 0));
	middlePoint.y = -middlePoint.y;
}

function getAngleToMouse ()
{
	var slope : Vector2;
	var mousePos : Vector2;
	mousePos = Vector2(Input.mousePosition.x, -Input.mousePosition.y);
	mousePos = mousePos - middlePoint;
	var output = Mathf.Atan2(mousePos.y, mousePos.x);
	return (Mathf.Rad2Deg * output) - 180;
}

function Update () {
	if (cameraa.GetComponent(CameraController).freezeGame != 1) {
		rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, getAngleToMouse());
	}
}