#pragma strict

var ship : GameObject;
var GuiSkin : GUISkin;
var offset : Vector3;
offset = Vector3(0, -1, 70);
var textSize : Vector2;
var buttonSize : Vector2;

function Update() {
	transform.position = ship.transform.position - offset;
}

function OnGUI() {
	GUI.skin = GuiSkin;
	if (ship.GetComponent(DeathController).isDead == 1) {
		Debug.Log("Dead");
		GUI.Box(Rect(Screen.width/2 - textSize.x/2, Screen.height/4 - textSize.y/2, textSize.x, textSize.y), "YOU SUCK");
		if (GUI.Button(Rect(Screen.width/2 - buttonSize.x/2, Screen.height/2 - buttonSize.y/2, buttonSize.x, buttonSize.y), "Restart"))
		{
			Application.LoadLevel(Application.loadedLevel);
		}
	}
}