#pragma strict

public var thrust : int;
var rotate = 100;
var currentRotation:float;
var speed : int;

function Start () {
	currentRotation = 90;
}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	speed = speed + yVelocity;
	
	rigidbody2D.AddForce(transform.right * yVelocity);
	
	rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, getAngleToMouse());
}

function getAngleToMouse ()
{
	var slope : Vector2;
	var mousePos : Vector2;
	mousePos = Vector2(Input.mousePosition.x, -Input.mousePosition.y);
	mousePos = mousePos - Vector2(445, -150);
	var output = Mathf.Atan2(mousePos.y, mousePos.x);
	return (Mathf.Rad2Deg * output) - 180;
}