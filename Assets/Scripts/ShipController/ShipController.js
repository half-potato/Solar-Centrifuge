#pragma strict

public var thrust = 1000;
var rotate = 100;
var currentRotation:float;

function Start () {
	currentRotation = 0;
}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	var rotate:int = Input.GetAxis("Horizontal")*rotate*Time.deltaTime;
	
	rigidbody2D.AddForce(transform.forward * yVelocity);
	
	currentRotation+=rotate;
	
	rigidbody2D.transform.rotation = Quaternion.Euler ( currentRotation , 270, 90);
}