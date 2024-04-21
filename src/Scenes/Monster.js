class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;
    
    
        
        my.sprite.leftArm = this.add.sprite(this.bodyX - 105, this.bodyY + 40, "monsterParts", "arm_blueA.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX + 105, this.bodyY + 40, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true; 
    
        // Legs
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 130, "monsterParts", "leg_redE.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 130, "monsterParts", "leg_blueE.png");
        my.sprite.leftLeg.flipX = true;

        // Head Accessories 
        my.sprite.leftEar = this.add.sprite(this.bodyX - 30, this.bodyY - 110, "monsterParts", "detail_white_ear.png");
        my.sprite.rightEar = this.add.sprite(this.bodyX + 30, this.bodyY - 110, "monsterParts", "detail_white_ear.png");
        my.sprite.leftEar.flipX = true;


        // Main body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
    
        // Eyes
        my.sprite.leftEye = this.add.sprite(this.bodyX - 35, this.bodyY - 20, "monsterParts", "eye_angry_red.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX + 35, this.bodyY - 20, "monsterParts", "eye_angry_red.png");
        my.sprite.leftEye.flipX = true;
    
        // Smiling Mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthI.png");
    

    
        
        this.input.keyboard.on("keydown", function (event) {
            if (event.code === "KeyA") {
                my.sprite.body.x -= 5; // Move left
                my.sprite.leftArm.x -= 5;
                my.sprite.rightArm.x -= 5;
                my.sprite.leftLeg.x -= 5;
                my.sprite.rightLeg.x -= 5;
                my.sprite.leftEye.x -= 5;
                my.sprite.rightEye.x -= 5;
                my.sprite.mouth.x -= 5;
                my.sprite.leftEar.x -= 5;
                my.sprite.rightEar.x -= 5;
            } else if (event.code === "KeyD") {
                my.sprite.body.x += 5; // Move right
                my.sprite.leftArm.x += 5;
                my.sprite.rightArm.x += 5;
                my.sprite.leftLeg.x += 5;
                my.sprite.rightLeg.x += 5;
                my.sprite.leftEye.x += 5;
                my.sprite.rightEye.x += 5;
                my.sprite.mouth.x += 5;
                my.sprite.leftEar.x += 5;
                my.sprite.rightEar.x += 5;
            } else if (event.code === "KeyS") {
                my.sprite.mouth.setTexture("monsterParts", "mouthI.png"); //fangs
            } else if (event.code === "KeyF") {
                my.sprite.mouth.setTexture("monsterParts", "mouth_closed_fangs.png"); // smile
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}
