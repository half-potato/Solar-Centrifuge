#pragma strict

var arrayMaterials = new Array();
var dirtMat : Material;
var grassMat : Material;
var waterMat : Material;
var lavaMat : Material;
var grassRockMat : Material;
var rockMat : Material;
/*arrayMaterials[0] = dirtMat;
arrayMaterials[1] = grassMat;
arrayMaterials[2] = waterMat;
arrayMaterials[3] = lavaMat;
arrayMaterials[4] = rockMat;
arrayMaterials[5] = grassRockMat;*/

arrayMaterials = new Array(dirtMat, grassMat, waterMat, lavaMat, rockMat, grassRockMat);

var materialNumber : int;
var material : Material;

function Start () {
	materialNumber = Random.Range(0, 5);
	material = arrayMaterials[materialNumber];
	/*switch (materialNumber) {
		case 0:
			this.gameObject.renderer.material.color.r = Random.Range(120, 200);
			this.gameObject.renderer.material.color.g = Random.Range(80, 140);
			this.gameObject.renderer.material.color.b = Random.Range(0, 100);
			this.gameObject.renderer.material.color.a = 1;
			break;
		case 1:
			this.gameObject.renderer.material.color.r = Random.Range(90, 300);
			this.gameObject.renderer.material.color.g =  Random.Range(160, 255);
			this.gameObject.renderer.material.color.b = Random.Range(0, 80);
			this.gameObject.renderer.material.color.a = 1;
			break;
		case 2:
			this.gameObject.renderer.material.color.r = Random.Range(0, 110);
			this.gameObject.renderer.material.color.g = Random.Range(140, 255);
			this.gameObject.renderer.material.color.b = 255;
			this.gameObject.renderer.material.color.a = 1;
			break;
		case 3:
			this.gameObject.renderer.material.color.r = Random.Range(175, 255);
			this.gameObject.renderer.material.color.g = Random.Range(0, 30);
			this.gameObject.renderer.material.color.b = Random.Range(1, 33);
			this.gameObject.renderer.material.color.a = 1;
			break;
		case 4:
			this.gameObject.renderer.material.color.r = Random.Range(0, 255);
			this.gameObject.renderer.material.color.g = Random.Range(0, 255);
			this.gameObject.renderer.material.color.b = Random.Range(0, 255);
			this.gameObject.renderer.material.color.a = 1;
			break;
		case 5:
			this.gameObject.renderer.material.color.r = Random.Range(0, 255);
			this.gameObject.renderer.material.color.g = Random.Range(0, 255);
			this.gameObject.renderer.material.color.b = Random.Range(0, 255);
			this.gameObject.renderer.material.color.a = 1;
			break;
	}*/
	this.gameObject.renderer.material.CopyPropertiesFromMaterial(material);
}