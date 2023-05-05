class ComputerRoomScene extends AdventureScene {

    constructor() {
        super("computer room", "Computer Room")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height
        // Images here
        this.load.path = "./assets/images/"
        this.load.image("title", "title.png")
        this.load.image("empty room", "empty room.png")
        this.load.image("desk", "desk.png")
        this.load.image("pc", "desktop pc.png")
        this.load.image("monitoron", "computer on.png")
        this.load.image("monitoroff", "computer.png")
        this.load.image("chair", "office chair.png")
        this.load.image("key", "key.png")
        this.load.image("door", "door.png")

        // Audio here
        this.load.path = "./assets/audio/"
        
        this.cameras.main.setBackgroundColor(0)
    }

    onEnter() {
        // this.input.mousePointer
        this.isPCon = true

        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
            console.log(this.input.mousePointer.x, this.input.mousePointer.y)
        })

        this.room = this.add.sprite(this.gamew / 2, this.gameh / 2, "empty room")
            .setScale(3.575, 3.354)

        this.desk = this.add.sprite(this.gamew / 2, 800, "desk")
            .setScale(0.8, 0.8)

        this.pc = this.add.sprite(this.desk.x - 170, this.desk.y - 260, "pc")
            .setScale(0.8, 0.8)
            .setInteractive()

        this.monitor = this.add.sprite(this.desk.x, this.desk.y - 220, "monitoron")

        let chair = this.add.sprite(450, 800, "chair")
        chair.setScale(0.9, 0.9)

        this.door = this.add.sprite(1800, 650, "door")
            .setInteractive()

        
        this.createTweens()
        this.createInteractions()
    }

    createTweens() {

    }

    createInteractions() {
        this.door.on(Phaser.Input.Events.POINTER_OVER, () => {
            if (this.isPCon) this.showMessage("Do I want to go outside?")
            else this.showMessage("Let's go i guess")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            if (this.isPCon) this.showMessage("You can't open the door. It's not safe unless my pc is off.")
            else {}
        })

        this.pc.on(Phaser.Input.Events.POINTER_OVER, () => {
            if (this.isPCon) this.showMessage("The pc is on. It should probabily be turned off.")
            else this.showMessage("My \"homework\" folder is safe.")
        })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
            if (this.isPCon) {
                this.showMessage("You turn off the pc.");
                // this.gainItem('key');
                this.monitor.setTexture("monitoroff")
                this.isPCon = false
            }
            else this.showMessage("I dont want to get back into league.")
        })

    }

}
