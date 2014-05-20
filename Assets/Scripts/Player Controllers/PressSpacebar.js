#pragma strict

public var toLoad : String;

function Update () {
	if(Input.GetKeyUp("space")) {
		Application.LoadLevel(toLoad);
		Debug.Log("hi");
	}
}