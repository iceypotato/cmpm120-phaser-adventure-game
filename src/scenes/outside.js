class OutsideScene extends AdventureScene {

    constructor() {
        super("outside", "The outside world")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height

        this.load.path = "./assets/images/"
        this.load.image("outside", "outside.png")

    }

    onEnter() {
        this.outside = this.add.sprite(this.gamew / 2, this.gameh / 2, "outside")
        this.outside.setScale(this.gameh / this.outside.displayHeight)

        this.grass = this.add.rectangle(this.outside.x, this.outside.y + 420, this.outside.displayWidth, 240, 0xff00ff, 0)
        .setInteractive()
        
        this.createInteractions()
    }

    createInteractions() {
        this.grass.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("THE HOLY GRASS")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.showMessage("I FINALLY TOUCHED GRASS!!!! Woah something is happening!")
            this.cameras.main.fade(2000, 255, 255, 255, false)
            this.time.delayedCall(2000, () => {
                this.scene.start("end")
            })
        })
    }

}