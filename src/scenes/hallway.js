class HallwayScene extends AdventureScene {

    constructor() {
        super("hallway", "Hallway")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height
        // Images here
        this.load.path = "./assets/images/"
        this.load.image("title", "title.png")
        this.load.image("meme", "meme.jpg")

        this.hallywayimg = this.load.image("hallway", "hallway 2.png")

        // Audio here
        this.load.path = "./assets/audio/"
        
        this.cameras.main.setBackgroundColor(0)
    }

    onEnter() {
        this.hallway = this.add.sprite(this.gamew / 2, this.gameh / 2, "hallway")
        this.hallway.setScale(this.gameh / this.hallway.height)

        this.leftdoor = this.add.rectangle(this.hallway.x - 410, this.hallway.y + 50, 350, 700, 0xff00ff, 0)
        .setInteractive()

        this.rightdoor = this.add.rectangle(this.hallway.x + 390, this.hallway.y + 50, 350, 700, 0xff00ff, 0)
        .setInteractive()

        this.meme = this.add.sprite(this.hallway.x, this.hallway.y + 500, "meme")
        .setScale(0.1, 0.1)
        .setAngle(40)
        .setInteractive()
        
        
        this.createTweens()
        this.createInteractions()
    }

    createTweens() {

    }

    createInteractions() {
        this.locked = true

        this.leftdoor.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("The room I just came from. Uh oh stinky")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.showMessage("There's no need to go back.")
        })

        this.meme.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("I should probabily pick this up. It's a waste of space.")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.showMessage("I need this.")
            this.gainItem("dank meme")
            this.destroyItemFromScene(this.meme)
        })

        this.rightdoor.on(Phaser.Input.Events.POINTER_OVER, () => {
            if (this.locked) {
                this.showMessage("The bedroom. It's locked.")
            }
            else {
                this.showMessage("The bedroom is unlocked.")
            }
            
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            if (this.hasItem("key")) {
                this.showMessage("I unlocked the secrets to the bedroom")
                this.loseItem("key")
                this.locked = false
            }
            else if (this.hasItem("dank meme")) {
                this.showMessage("Onto the next room")
                this.gotoScene("bedroom")
            }
            else {
                this.showMessage("There's something on the floor that I have to take out.")
            }
        })
    }

}
