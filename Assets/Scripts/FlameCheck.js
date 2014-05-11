#pragma strict
var InnerCore:GameObject;

function Update () {
	var yVelocity:float = Input.GetAxis("Vertical");
	
	if (yVelocity<=0){
		InnerCore.particleEmitter.localVelocity = Vector3(0, 0, 0);
		InnerCore.particleEmitter.maxEnergy = 0;
	} else {
		InnerCore.SetActive(true);
		InnerCore.particleEmitter.maxEnergy = 3;
	}
}