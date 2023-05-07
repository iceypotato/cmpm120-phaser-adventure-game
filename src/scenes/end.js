class EndingScene extends Phaser.Scene {
    constructor() {
        super("end")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height
    }

    create() {

        let endtext = this.add.text(this.gamew / 2, this.gameh / 2, "I am finally able to live peacefully...")
        .setOrigin(0.5, 0.5)
        .setAlpha(0)

        this.tweens.add({
            targets: endtext,
            alpha: 1,
            duration: 1000,
        })
    }
    

}