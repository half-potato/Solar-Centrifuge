#pragma strict
var forwardThruster:GameObject;
var rightThruster:GameObject;
var leftThruster:GameObject;
var rightThruster2:GameObject;
var leftThruster2:GameObject;

function Update () {
	var isMovingForward:float = Input.GetAxis("Vertical");
	var isMovingHorizontally:float = Input.GetAxis("Horizontal");
	
	if (isMovingForward<=0){
		deactivate(forwardThruster);
	} else {
		activate(forwardThruster);
	}
	
	if (isMovingHorizontally <0) {
		deactivate(leftThruster);
		activate(rightThruster);
		deactivate(leftThruster2);
		activate(rightThruster2);
	} else if (isMovingHorizontally > 0) {
		deactivate(rightThruster);
		activate(leftThruster);
		deactivate(rightThruster2);
		activate(leftThruster2);
	} else {
		deactivate(leftThruster);
		deactivate(rightThruster);
		deactivate(leftThruster2);
		deactivate(rightThruster2);
	}
}

function activate(thruster : GameObject) {
	thruster.particleEmitter.maxEnergy = 3;
}

function deactivate(thruster : GameObject) {
	thruster.particleEmitter.localVelocity = Vector3(0, 0, 0);
	thruster.particleEmitter.maxEnergy = 0;
}