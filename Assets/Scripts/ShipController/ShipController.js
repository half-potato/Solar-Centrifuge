#pragma strict

public var thrust = 1000;
var rotate:int = 90;
var rotationSpeed:int = 100;
var currentRotation:float;
var yVelocity:int;

function Start () {
	currentRotation = 90;
}

function Update () {
	yVelocity += Input.GetAxis("Vertical")*Time.deltaTime*thrust; 
	rotate += Input.GetAxis("Horizontal")*rotationSpeed*Time.deltaTime;
	
	rigidbody2D.AddForce(transform.right * yVelocity);
	
	currentRotation+=rotate;
	
	rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, rotate);
}