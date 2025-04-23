var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var health = 3;
var healthText;
var apples;
var level = 1;
var levelText;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets1/sky.png');
    this.load.image('ground', 'assets1/platform.png');
    this.load.image('star', 'assets1/star.png');
    this.load.image('bomb', 'assets1/bomb.png');
    this.load.spritesheet('dude', 'assets1/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
    this.load.image('spike', 'assets1/spike.png');
    this.load.image('apple', 'assets1/apple.png');
}

function create() {
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(0, 250, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(50, 420, 'ground');
    platforms.create(950, 120, 'ground');
    
    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{
            key: 'dude',
            frame: 4
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();



    ///////
    ////// Create spikes group
spikes = this.physics.add.group({
    key: 'spike',
    repeat: 2,
    setXY: { x: 50, y: 0, stepX: 300 }
});

spikes.children.iterate(function (child) {
    child.setScale(0.25);
    child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.5));
    child.setCollideWorldBounds(true);
    child.body.setSize(child.width * 0.6, child.height * 0.5);
    child.body.setOffset(child.width * 0.2, child.height * 0.5);
});

// Now that spikes exist, add collisions
this.physics.add.collider(spikes, platforms);
this.physics.add.collider(player, spikes, hitSpike, null, this);

///////

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 5,
        setXY: {
            x: 10,
            y: 0,
            stepX: 150
        }
    });
    stars.children.iterate((star) => {
        star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        star.setGravityY(Phaser.Math.Between(100, 600));
    
        let safe = false;
    
        while (!safe) {
            safe = true;
            spikes.children.iterate((spike) => {
                const dist = Phaser.Math.Distance.Between(star.x, star.y, spike.x, spike.y);
                if (dist < 60) {
                    star.x = Phaser.Math.Between(50, 750);
                    star.y = 0;
                    safe = false;
                }
            });
        }
     
        
    });
//////////////
bombs = this.physics.add.group();

 ///////  
 apples = this.physics.add.group({
    key: 'apple',
    repeat: 2,
    setXY: { x: 150, y: 0, stepX: 250 }
});

apples.children.iterate((apple) => {
    apple.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

    let safe = false;
    while (!safe) {
        safe = true;
    }
    // Check against spikes to avoid overlapping
    spikes.children.iterate((spike) => {
        const distance = Phaser.Math.Distance.Between(apple.x, apple.y, spike.x, spike.y);
        if (distance < 250) {
            // Move apple to a new random X position away from spikes
            apple.x = Phaser.Math.Between(50, 750);
            apple.y = 0;
            safe = false;
        }

        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(player, apples, collectApple, null, this);
    });
});

   

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#000'
    });

    //////
    healthText = this.add.text(16, 50, 'Health: 3', {
        fontSize: '28px',
        fill: '#000'
    });

    levelText = this.add.text(16, 84, 'Level: 1', {
        fontSize: '28px',
        fill: '#000'
    });

///////


    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(spikes, platforms);

    //  Checks to see if the player overlaps with any of the stars if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

 
}


function update() {
    if (gameOver) {
        return;
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.space.isDown && player.body.touching.down) {
        player.setVelocityY(-475);
    }
}

function collectStar(player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    // Only do this if ALL stars AND apples are collected
    console.log(stars.countActive(true) + ":" + apples.countActive(true));
    if (stars.countActive(true) === 0 && apples.countActive(true) === 0) {
        level += 1;
        levelText.setText('Level: ' + level);
        stars.children.iterate(function (child) {
            child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);
            console.log("HI");
        });

        apples.children.iterate(function (child) {
            child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);
       });

        var x = (player.x < 400)
             ? Phaser.Math.Between(400, 800)
             : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}


function collectApple(player, apple) {
    apple.disableBody(true, true);
    health += 1;
    healthText.setText('Health: ' + health);
    console.log(stars.countActive(true) + ":" + apples.countActive(true));
    // Check if all items are collected, then respawn
    if (apples.countActive(true) === 0 && stars.countActive(true) === 0 ) {
        respawnItems.call(this);
        child.enableBody(true, child.x, 0, true, true);

        };

       /* var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }*/
}

function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}



function hitSpike(player, spike) {
    this.physics.pause();       // Freeze the game
    player.setTint(0xff0000);   // Red flash
    player.anims.play('turn');  // Stop animation
    gameOver = true;            // Flag game over
}

///////
function respawnItems() {
    console.log("Respawning items...");

    // Respawn stars
    stars.children.iterate(function(child) {
        child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        child.setGravityY(Phaser.Math.Between(100, 600));  // Gravity for stars
    });

    // Respawn apples
    apples.children.iterate(function(child) {
        child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));  // Bounce for apples
    });

    // Add a bomb
    
    let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    let bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
}