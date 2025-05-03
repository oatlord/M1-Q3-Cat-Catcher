class CreditScene extends Phaser.Scene{
    constructor() {
        super("CreditScene");
    }

    create() {
        this.add.text(20,20,"Adrienne Marie C. Tamdang, A224, BS-EMC");

        let backButton = this.add.text(20,40,"Back");
        backButton.setInteractive({useHandCursor: true});
        backButton.on("pointerdown", () => this.backToMenu());
    }

    backToMenu() {
        this.scene.start("MenuScene");
    }
}