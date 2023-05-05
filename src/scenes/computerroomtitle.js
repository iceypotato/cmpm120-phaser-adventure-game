class TitleScene extends Phaser.Scene {

    constructor() {
        super("title")

    }

    preload() {
        // Images here
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height

        this.load.path = "./assets/images/"
        this.load.image("title", "title.png")
        this.load.image("empty room", "empty room.png")
        this.load.image("desk", "desk.png")
        this.load.image("pc", "desktop pc.png")
        this.load.image("monitoron", "computer on.png")
        this.load.image("chair", "office chair.png")
        this.load.image("key", "key.png")
        this.load.image("door", "door.png")

        // Audio here
        this.load.path = "./assets/audio/"
        
        this.cameras.main.setBackgroundColor(0)
    }

    create() {

        let fullscreenKey = this.input.keyboard.addKey("F")
        fullscreenKey.on("down", function() {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this)

        // this.input.mousePointer
        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
            console.log(this.input.mousePointer.x, this.input.mousePointer.y)
        })

        let room = this.add.sprite(this.gamew / 2, this.gameh / 2, "empty room")
        room.setScale(3.575, 3.354)

        let desk = this.add.sprite(this.gamew / 2, 800, "desk")
        desk.setScale(0.8, 0.8)

        let pc = this.add.sprite(desk.x - 170, desk.y - 260, "pc")
        pc.setScale(0.8, 0.8)

        let monitor = this.add.sprite(desk.x, desk.y - 220, "monitoron")

        let chair = this.add.sprite(450, 800, "chair")
        chair.setScale(0.9, 0.9)

        let door = this.add.sprite(1800, 650, "door")
        
        this.title = this.add.sprite(this.gamew / 2, 220, "title")
        this.title.setScale(0.4, 0.4)

        this.text = this.add.text(monitor.x, monitor.y - 40, "play", )
        this.text.setColor("black")
        this.text.setFontFamily("calibri")
        this.text.setOrigin(0.5, 0.5)
        this.text.setFontSize(50)
        this.text.setInteractive()
        this.text.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.text.setColor("red")
        })
        this.text.on(Phaser.Input.Events.POINTER_OUT, () => {
            this.text.setColor("black")
        })
        this.text.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start("computer room")
        })

        
        this.createTweens()
    }

    createTweens() {
        
        let tw1 = this.tweens.chain({
            tweens: [
                // {
                //     targets: this.title,
                //     angle: -10,
                //     duration: 2000,
                //     scale: 0.45,
                //     ease: "Sine.easeInOut",
                // },
                {
                    targets: this.title,
                    angle: 10,
                    repeat: -1,
                    yoyo: true,
                    duration: 2000,
                    scale: 0.45,
                    ease: "Sine.easeInOut",
                }
            ]
        })
    }

}