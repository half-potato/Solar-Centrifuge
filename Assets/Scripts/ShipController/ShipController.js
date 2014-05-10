#pragma strict

public var thrust = 1000;
var rotate:int = 0;
var rotationSpeed:int = 100;
var yVelocity:int;

function Start () {
	
}

function Update () {
	yVelocity += Input.GetAxis("Vertical")*Time.deltaTime*thrust; 
	rotate += Input.GetAxis("Horizontal")*rotationSpeed*Time.deltaTime;
	
	rigidbody2D.AddForce(transform.right * yVelocity);
	
	rigidbody2D.transform.rotation = Quaternion.Euler (0 , 180, rotate);
}