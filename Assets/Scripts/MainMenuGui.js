#pragma strict

public var skingui: GUISkin;

public var titleSize : Vector2;

function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.skin = skingui;
	GUI.Box(Rect(Screen.width/2 - titleSize.x/2, Screen.height/4 - titleSize.y/2, titleSize.x, titleSize.y), "Planetary Centrifuge");
	GUI.Box(Rect(Screen.width/2 - titleSize.x/2, Screen.height - titleSize.y/1.5, titleSize.x, titleSize.y), "Press Space to Play");
}