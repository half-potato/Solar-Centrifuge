#pragma strict
var planetNum:int = 40;
var planet:GameObject;

function Start () {
	for(var i=0; i<planetNum; i++){
		var position = Vector2(Random.Range(-1500,1500), Random.Range(-1500,1500));

		var newPlanet = Instantiate (planet, position, Quaternion.identity);
	
		var scaleAmount = Random.Range (30,50);
		newPlanet.transform.localScale += Vector3(scaleAmount, scaleAmount, scaleAmount);
		
	}
}
