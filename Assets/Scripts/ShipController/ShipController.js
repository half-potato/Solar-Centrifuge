#pragma strict

public var thrust = 10;

function Start () {

}

function Update () {
	var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime; 
	var xVelocity = Input.GetAxis("Horizontal")*thrust*Time.deltaTime;

	transform.position.y+=yVelocity;
}