let platforms;
let cat, player, cursors;

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image('player', '/assets/images/adhd creature.png');
        this.load.image('cat', '/assets/images/yippee.png');
        this.load.image('bg', '/assets/images/game_background_2.png');
        this.load.image('ground', '/assets/images/platform.png');
    }

    create() {
        this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'bg');

        player = this.physics.add.sprite(100, 450, 'player');
        player.scale = 0.10;
        player.body.setGravityY(300);

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        cat = this.physics.add.sprite(400, 300, 'cat').setOrigin(0, 0);
        cat.scale = 0.10;
        cat.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player, cat, catHitHandler);
    }  

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
        }
        else {
            player.setVelocityX(0);
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }
}

function catHitHandler() {
    alert("You hit the cat!");
}