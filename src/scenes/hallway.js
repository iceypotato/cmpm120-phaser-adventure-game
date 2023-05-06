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
        this.hallywayimg = this.load.image("hallway", "hallway 2.png")

        // Audio here
        this.load.path = "./assets/audio/"
        
        this.cameras.main.setBackgroundColor(0)
    }

    onEnter() {
        this.hallway = this.add.sprite(this.gamew / 2, this.gameh / 2, "hallway")
        this.hallway.setScale(this.gameh / this.hallway.height)

        this.door = this.add.rectangle(this.hallway.x - 410, this.hallway.y + 50, 350, 700, 0xff00ff, 0)
        .setInteractive()
        
        this.createTweens()
        this.createInteractions()
    }

    createTweens() {

    }

    createInteractions() {
        this.door.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.showMessage("The room I just came from. Uh oh stinky")
        })
        // .on(Phaser.Input.Events.POINTER_DOWN, () => {
        //     this.gotoScene("computer room")
        // })
    }

}
