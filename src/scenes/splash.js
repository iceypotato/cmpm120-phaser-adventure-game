class SplashScene extends Phaser.Scene {

    constructor() {
        super("splash screen")
    }

    preload() {
        this.gamew = this.game.config.width
        this.gameh = this.game.config.height

        this.load.path = "./assets/"

        this.load.image("splash", "images/studio splash.png")

        this.load.audio("clap", "audio/clap.mp3")

        this.cameras.main.setBackgroundColor(0xffffff)
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
    
        let studio = this.add.sprite(this.gamew / 2 , this.gameh / 2, "splash")
        studio.alpha = 0
        studio.scaleY = 0.5
        studio.scaleX = 0.5

        // let poggers = this.add.sprite(gamecfg.width / 2 + 200, gamecfg.height / 2, "poggers")
        // poggers.alpha = 0
        // poggers.scaleX = 0.4
        // poggers.scaleY = 0.4

        let clap = this.sound.add("clap")


        // Sequence stuff
        let camera = this.cameras.main
        camera.fadeIn(1000)

        let tw = this.tweens.chain({
            delay: 2000,
            tweens: [
                {
                    targets: studio,
                    alpha: 1,
                    duration: 0,
                    hold: 1000,
                    onStart: () => {
                        clap.play()
                        this.time.delayedCall(2000, fadeout)
                    }
                }
            ]
        })

        let fadeout = () => {
            camera.fadeOut(1000)
            this.time.delayedCall(1000, () => {
                this.scene.start("title")
            })
        }
    }

    update() {

    }

}