class BedroomScene extends AdventureScene {
    constructor() {
        super("bedroom", "The Bedroom")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height

        this.load.path = "./assets/images/"
        this.load.image("bedroom", "bedroom.png")
        this.load.image("clout", "clout goggles.png")
        this.load.image("amogus", "amogus.png")
        this.load.image("trash", "trash bin.png")

        this.load.path = "./assets/audio/"
        this.load.audio("amogus drip", "Among Us Drip Theme cut.mp3")
    }

    onEnter() {
        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
            console.log(this.input.mousePointer.x, this.input.mousePointer.y)
        })

        this.bedroom = this.add.sprite(this.gamew / 2, this.gameh / 2, "bedroom")
        this.bedroom.setScale(this.gameh / this.bedroom.height)

        this.clout = this.add.sprite(this.bedroom.x - 600, this.bedroom.y + 400, "clout")
        .setScale(0.3, 0.3)
        .setInteractive()

        this.outside = this.add.rectangle(this.bedroom.x + 320, this.bedroom.y + 50, 200, 200, 0xff00ff, 0)
        .setInteractive()

        this.amogus = this.add.sprite(this.bedroom.x + 300, this.bedroom.y + 100, "amogus")
        this.amogus.setScale(0.1, 0.1)
        .setInteractive()

        this.trash = this.add.sprite(this.bedroom.x + 300, this.bedroom.y + 300, "trash")
        .setScale(0.3, 0.3)
        .setInteractive()

        this.amogusdrip = this.sound.add("amogus drip")

        this.createInteractions()
    }

    createInteractions() {
        this.amogus.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.tweens.add({
                targets: this.amogus,
                angle: 360 * 10,
                // repeat: 10,
                x: -400,
                y: -400,
                duration: 5000
            })
            this.amogusdrip.play()
        })
        this.trash.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("Rubbish bin. Just like my teammates in League of Legends.")
        })
        this.trash.on(Phaser.Input.Events.POINTER_DOWN, () => {
            if (this.hasItem("dank meme")) {
                this.showMessage("It was a trash meme anyways.")
                this.loseItem("dank meme")
            }
        })
        
        this.clout.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("Clout Goggles. This will help me go outside.")
        })
        this.clout.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.showMessage("Now I am protected.")
            this.gainItem("clout goggles")
            this.destroyItemFromScene(this.clout)
        })

        this.outside.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("The outside world. Contains ligma. Beware.")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            if (!this.hasItem("clout goggles")) {
                this.showMessage("I need protection before I can go out.")
                return
            }
            if (this.hasItem("dank meme")) {
                this.showMessage("I am holding something dirty.")
                return
            }
            else {
                this.showMessage("いけえええ")
                this.gotoScene("outside")
            }
        })

    }
}