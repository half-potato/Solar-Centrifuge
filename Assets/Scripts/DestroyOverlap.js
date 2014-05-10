#pragma strict
var sphereRadius:int = 50;
function Update () {
	if(Physics.CheckSphere(transform.position, sphereRadius)){
		Destroy (this.gameObject);
		Debug.Log("OVERLAPPING");
	}
}
