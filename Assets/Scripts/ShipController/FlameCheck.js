#pragma strict
var InnerCore:GameObject;

function Update () {
	var yVelocity:float = Input.GetAxis("Vertical");
	
	if (yVelocity<=0){
		InnerCore.SetActive(false);
	} else {
		InnerCore.SetActive(true);
	}
}