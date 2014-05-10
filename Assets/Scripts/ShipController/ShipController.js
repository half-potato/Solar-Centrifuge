#pragma strict

public var thrust = 1000;
var rotate = 100;
var currentRotation:float;

function Start () {
	currentRotation = 90;
}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	var rotatetion:int = Input.GetAxis("Horizontal")*rotate*Time.deltaTime;
	Debug.Log(rotatetion);
	
	rigidbody2D.AddForce(transform.right * yVelocity);
	
	currentRotation+=rotatetion;
	
	rigidbody2D.transform.rotation = Quaternion.Euler ( 0 , 180, currentRotation);
}