var sharpnel,database;
var position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    sharpnel = createSprite(250,250,10,10);
    sharpnel.shapeColor = "red";

var sharpnelPosition= database.ref('ball/position');
sharpnelPosition.on("value",readPosition,showerror)



}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y,

    })
}
function readPosition(data){

    position=data.val();
    sharpnel.x=position.x;
    sharpnel.y=position.y;
}

    function showerror(){

            console.log("error according to database");

    }