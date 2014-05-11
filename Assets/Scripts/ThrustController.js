#pragma strict

var thruster : GameObject;

var thrust : int;
var speedCap : float;

var decelerating : int;

var maxTrailSize : float;

var trailSize : float;

function Update () {
	decelerating == false;
	
	if (Input.GetAxis("Vertical") > 0 && rigidbody2D.velocity.magnitude < speedCap) {
		decelerating = 0;
		var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime;
	}
	
	if (rigidbody2D.velocity.magnitude > speedCap) {
		speedCap = rigidbody2D.velocity.magnitude;
	}
	
	rigidbody2D.AddForce(transform.right * yVelocity);
	trailSize = rigidbody2D.velocity.magnitude * maxTrailSize;
	thruster.particleEmitter.localVelocity = Vector3(-trailSize, 0, 0);
}
