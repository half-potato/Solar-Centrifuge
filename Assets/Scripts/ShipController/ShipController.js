#pragma strict

public var thrust = 1000;
var rotate = 100;
var currentRotation:float;

function Start () {
	currentRotation = 90;
}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	var xVelocity = Input.GetAxis("Horizontal")*thrust*Time.deltaTime; 
	var rotate:int = Input.GetAxis("Horizontal")*rotate*Time.deltaTime;
	
	var speed:Vector3 = new Vector3(xVelocity,yVelocity,0)*-1;
	
	speed =  transform.rotation * speed;
	Debug.Log(speed);
	rigidbody2D.AddForce (speed*Time.deltaTime);
	
	currentRotation+=rotate;
	
	rigidbody2D.transform.rotation = Quaternion.Euler ( currentRotation , 90, 90);
}