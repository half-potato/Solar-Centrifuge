#pragma strict

public var toLoad : String;

function Update () {
	if(Input.GetKeyUp("space")) {
		Application.LoadLevel(toLoad);
	}
}