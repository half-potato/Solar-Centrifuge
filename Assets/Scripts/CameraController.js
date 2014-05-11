#pragma strict

var ship : GameObject;
var radarGlass : GameObject;
var texture : Texture2D;
var radarRadius : float;
var radarObjects : GameObject[];

var GuiSkin : GUISkin;
var offset : Vector3;
offset = Vector3(0, -1, 70);
var textSize : Vector2;
var buttonSize : Vector2;

var points:GameObject[];

var hasExploded : int = 0;

var explosion : GameObject;

public var freezeGame : int = 0;

function Update() {
	transform.position = ship.transform.position - offset;
}

function OnGUI() {
	GUI.skin = GuiSkin;
	if (ship.GetComponent(DeathController).isDead == 1) {
		if (hasExploded == 0) {
			Instantiate(explosion, ship.transform.position, Quaternion.identity);
			hasExploded = 1;
		}
		freezeGame = 1;
		GUI.Box(Rect(Screen.width/2 - textSize.x/2, Screen.height/4 - textSize.y/2, textSize.x, textSize.y), "YOU SUCK");
		if (GUI.Button(Rect(Screen.width/2 - buttonSize.x/2, Screen.height/2 - buttonSize.y/2, buttonSize.x, buttonSize.y), "Restart"))
		{
			Application.LoadLevel(Application.loadedLevel);
		} 
	}
	if (ship.GetComponent(Win).hasWon == 1) {
		freezeGame = 1;
		GUI.Box(Rect(Screen.width/2 - textSize.x/2, Screen.height/4 - textSize.y/2, textSize.x, textSize.y), "YOU ROCK");
		if (GUI.Button(Rect(Screen.width/2 - buttonSize.x/2, Screen.height/2 - buttonSize.y/2, buttonSize.x, buttonSize.y), "Next Level"))
		{
			Application.LoadLevel(Application.loadedLevel);
		}
	}
	Debug.Log(radarObjects[0]);
	for (var i in radarObjects) {
		Debug.Log(i);
		/*var point : Vector3 = radarObjects[i].transform.position;
		point = point.normalized * 100;
		Debug.Log(point);
		GUI.Box(Rect(Screen.width/2 + point.x, Screen.height/2 + point.y, 20, 20), texture);*/
	}
}