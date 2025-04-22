let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 800,
    // height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let platforms;
let cat, player, cursors;

function preload ()
{
    this.load.image('player', '/assets/images/adhd creature.png');
    this.load.image('cat', '/assets/images/yippee.png');
    this.load.image('bg', '/assets/images/game_background_2.png');
    this.load.image('ground', '/assets/images/platform.png');
}

function create ()
{
    this.add.sprite(window.innerWidth/2,window.innerHeight/2,'bg');

    // platforms = this.physics.add.staticGroup();
    // platforms.create(window.innerWidth,window.innerHeight,'ground').refreshBody();

    player = this.physics.add.sprite(100,450,'player');
    player.scale = 0.10;
    player.body.setGravityY(300);

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    cat = this.physics.add.sprite(400, 300, 'cat').setOrigin(0,0);
    cat.scale = 0.10;
    cat.setCollideWorldBounds(true);
    
    cursors = this.input.keyboard.createCursorKeys();

    // this.physics.add.collider(player, platforms);
    // this.physics.add.collider(cat, platforms);
    this.physics.add.collider(player, cat, catHitHandler);
}

function catHitHandler() {
    alert("You hit the cat!");
}

function update ()
{
    if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        }
        else
        {
            player.setVelocityX(0);
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
}

