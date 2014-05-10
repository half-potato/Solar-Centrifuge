#pragma strict

public var thrust = 1000;
var rotate = 100;
var currentRotation:float;

function Start () {
	currentRotation = 90;
}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	var rotate:int = Input.GetAxis("Horizontal")*rotate*Time.deltaTime;
	
	rigidbody2D.AddForce(transform.forward * yVelocity*-1);
	
	currentRotation+=rotate;
	
	rigidbody2D.transform.rotation = Quaternion.Euler ( currentRotation , 90, 90);
}