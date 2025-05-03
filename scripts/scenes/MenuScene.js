class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        this.load.image('bg', '/assets/images/game_background_2.png')
    }

    create() {
        this.add.image(0,0,'bg').setOrigin(0,0);

        let playText = this.add.text(20,20,"Play Game").setOrigin(0,0); 
        playText.setInteractive({useHandCursor: true});
        playText.on("pointerdown", () => this.playGame());

        let creditText = this.add.text(20,40,"Credits").setOrigin(0,0);
        creditText.setInteractive({useHandCursor: true});
        creditText.on("pointerdown", () => this.credits());

        let quitText = this.add.text(20,60,"Quit").setOrigin(0,0);
        quitText.setInteractive({useHandCursor: true});
        quitText.on("pointerdown", () => this.quit());
    }

    playGame() {
        this.scene.start('GameScene');
    }

    credits() {
        this.scene.start("CreditScene");
    }

    quit() {
        alert("You have quit the game.");
    }
}

