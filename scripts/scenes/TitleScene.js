class TitleScene extends Phaser.Scene {
    constructor() {
        super("TitleScene");
    }

    create() {
        this.add.image('background','/assets/images/game_background_2.png');

        let playText = this.add.text(20,20,"Play Game"); 
        playText.setInteractive({useHandCursor: true});
        playText.on("pointerdown", () => this.playGame());
    }

    playGame() {
        this.scene.start('GameScene');
        // console.log("clicked");
    }
}

