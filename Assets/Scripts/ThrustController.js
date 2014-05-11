#pragma strict

var forwardThruster:GameObject;

var thrust : int;
var speedCap : float;

var maxTrailSize : float;

var trailSize : float;

function Update () {
	
	if (Input.GetAxis("Vertical") > 0 && rigidbody2D.velocity.magnitude < speedCap) {
		var yVelocity = Input.GetAxis("Vertical")*thrust*Time.deltaTime;
	}
	
	var xVelocity = Input.GetAxis("Horizontal")*thrust*Time.deltaTime/4;
	
	if (rigidbody2D.velocity.magnitude > speedCap) {
		speedCap = rigidbody2D.velocity.magnitude;
	}
	
	if (this.GetComponent(DeathController).isDead != 1) {
		rigidbody2D.AddForce(transform.right * yVelocity);
		rigidbody2D.AddForce(transform.up * xVelocity);
	} else {
		this.gameObject.SetActive(false);
	}
	trailSize = rigidbody2D.velocity.magnitude * maxTrailSize;
	forwardThruster.particleEmitter.localVelocity = Vector3(-trailSize, 0, 0);
}
