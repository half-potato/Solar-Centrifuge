#pragma strict

var cameraa : Camera;
var middlePoint : Vector2;
var ship : GameObject;

function OnValidate () {
	middlePoint = cameraa.WorldToScreenPoint(transform.position);
	middlePoint.y = -middlePoint.y;
	Debug.Log(middlePoint);
}

function getAngleToMouse ()
{
	var slope : Vector2;
	var mousePos : Vector2;
	mousePos = Vector2(Input.mousePosition.x - 400, -Input.mousePosition.y + 200);
	mousePos = middlePoint - mousePos;
	var output = Mathf.Atan2(mousePos.y, mousePos.x);
	return (Mathf.Rad2Deg * output);
}

function Update () {
	Debug.Log(Input.mousePosition.x - 400);
	Debug.Log(Input.mousePosition.y - 100);
	if (cameraa.GetComponent(CameraController).freezeGame != 1) {
		rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, getAngleToMouse());
	}
}