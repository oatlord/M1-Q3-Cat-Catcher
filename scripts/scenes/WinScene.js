class WinScene extends Phaser.Scene{
    constructor() {
        super("WinScene");
    }

    create() {
        this.add.text(20,20,"Congratulations!");
        let retryText = this.add.text(20,60,"Retry");
        retryText.setInteractive({useHandCursor: true});
        retryText.on('pointerdown', () => this.retry());

        let backToMenu = this.add.text(20,80,"Back to Menu");
        backToMenu.setInteractive({useHandCursor: true});
        backToMenu.on('pointerdown', () => this.backToMenu());

    }

    retry() {
        this.scene.start("GameScene");
    }

    backToMenu() {
        this.scene.start("MenuScene");
    }
}