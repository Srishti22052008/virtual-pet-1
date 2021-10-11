//Create variables here

var dog,happyDogImage,dogImg;
var foodStock,foodS;
var database;

function preload()
{
	//load images here
  happyDogImage = loadImage("images/dogImg.pmg");
  dogImg = loadImage("images/dogImg1");

}

function setup() {
	createCanvas(500,500);
  database=firebase.database();

  dog = createSprite(200,200,100,100);
  dog = addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(30);



}


function draw() {  
  background(46,139,87);

  if(KeyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }


  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining" + foodS,170,200);
  text("Note:- Press Up Arrow Key to Feed Your Pet Milk.",130,10,300,20);



}


function  readStock(data)
{
   foodS=data.val();

}

function writeStock(X)
{
  if(x<=0)
  {
    x=0
  }
  else 
  {
    x=x-1;
  }
  database.ref('/').update({Food:x})
}

