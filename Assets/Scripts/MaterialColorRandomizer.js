#pragma strict

var arrayMaterials = new Array();
var dirtMat : Material;
var grassMat : Material;
var waterMat : Material;
var lavaMat : Material;
var grassRockMat : Material;
var rockMat : Material;

arrayMaterials = new Array(dirtMat, grassMat, waterMat, lavaMat, rockMat, grassRockMat);

var materialNumber : int;
var material : Material;

function Start () {
	materialNumber = Random.Range(0, 5);
	material = arrayMaterials[materialNumber];
	this.gameObject.renderer.material.CopyPropertiesFromMaterial(material);
}