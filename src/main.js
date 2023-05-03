let gamecfg = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [
        StartGameScene,
        SplashScene,
        TitleScene,
        GameScene,
    ]
}

function main() {
    let phazerGame = new Phaser.Game(gamecfg)
}

main()