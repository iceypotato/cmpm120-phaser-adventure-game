let gamecfg = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [
        // StartGameScene,
        // SplashScene,
        // TitleScene,
        ComputerRoomScene,
        HallwayScene,
    ]
}

function main() {
    let phazerGame = new Phaser.Game(gamecfg)
}

main()