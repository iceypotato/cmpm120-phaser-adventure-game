class AdventureScene extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];
    }

    constructor(key, name) {
        super(key);
        this.name = name;
    }

    create() {
        this.onEnter();  // This needs to be called before
        this.isInvOpen = true

        this.transitionDuration = 1000;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#444');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.inv = this.add.rectangle(this.w * 0.75, 0, this.w * 0.25, this.h).setOrigin(0, 0).setFillStyle(0);
        this.scenename = this.add.text(this.w * 0.75 + this.s, this.s)
            .setText(this.name)
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);
        
        this.floatingMsgBox = this.add.rectangle(this.w - 50, 50, this.w * 0.25, this.h * 0.30, 0)
            .setOrigin(1, 0)
            .setAlpha(0)

        this.messageBox = this.add.text(this.w * 0.75 + this.s, this.h * 0.33)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.inventoryBanner = this.add.text(this.w * 0.75 + this.s, this.h * 0.66)
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setText("Inventory")
            .setAlpha(0);

        this.inventoryTexts = [];
        this.updateInventory();

        let fs = this.add.text(this.w-3*this.s, this.h-3*this.s, "📺")
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => this.showMessage('Fullscreen?'))
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });
        

        // Opening and closing the inventory



        this.closeinv = this.add.rectangle(this.inv.x, this.inv.y, 30, 50, 0xff00ff)
        this.closeinv.setOrigin(1, 0)
        this.closeinv.setInteractive()

        this.arrowclose = this.add.text(this.closeinv.x - (this.closeinv.width / 2), this.closeinv.y + (this.closeinv.height / 2), ">")
        this.arrowclose.setOrigin(0.5, 0.5)
        this.arrowclose.setFontSize(20)
        this.arrowclose.setColor("blue")

        this.closeinv.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.toggleinv(false)
        })
        
        this.openinv = this.add.rectangle(this.w, 0, 30, 50, 0xff00ff)
        .setOrigin(1, 0)
        .setVisible(0)

        this.arrowopen = this.add.text(this.openinv.x - (this.openinv.width / 2), this.openinv.y + (this.openinv.height / 2), "<")
        .setOrigin(0.5, 0.5)
        .setFontSize(20)
        .setColor("blue")
        .setVisible(0)

        this.openinv.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.toggleinv(true)
        })
        
    }

    toggleinv(open) {
        this.inv.setVisible(open)
        this.scenename.setVisible(open)
        // this.messageBox.setVisible(open)
        this.inventoryBanner.setVisible(open)
        this.arrowclose.setVisible(open)
        this.closeinv.setVisible(open)
        this.arrowopen.setVisible(!open)
        this.openinv.setVisible(!open)
        this.floatingMsgBox.setVisible(!open)

        this.inventoryTexts.forEach((obj) => {
            obj.setVisible(open)
        })

        if (open) {
            this.messageBox.setX(this.w * 0.75 + this.s).setY(this.h * 0.33)
            this.closeinv.setInteractive()
            this.openinv.disableInteractive()
        }
        else {
            this.messageBox.setX(this.floatingMsgBox.x - this.floatingMsgBox.width + 10)
            .setY(this.floatingMsgBox.y + 10)
            this.closeinv.disableInteractive()
            this.openinv.setInteractive()
        }

        this.isInvOpen = open
    }

    setPointerOverMsg(object, func) {
        object.on(Phaser.Input.Events.POINTER_DOWN, func)
    }
    
    showMessageBoxClosed() {
        this.tweens.add({
            targets: this.floatingMsgBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    showMessage(message) {
        this.messageBox.setText(message);
        if (!this.isInvOpen) {
            this.showMessageBoxClosed()
        }
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    updateInventory() {
        if (this.inventory.length > 0) {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 1,
                duration: this.transitionDuration
            });
        } else {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 0,
                duration: this.transitionDuration
            });
        }
        if (this.inventoryTexts) {
            this.inventoryTexts.forEach((t) => t.destroy());
        }
        this.inventoryTexts = [];
        let h = this.h * 0.66 + 3 * this.s;
        this.inventory.forEach((e, i) => {
            let text = this.add.text(this.w * 0.75 + 2 * this.s, h, e)
                .setStyle({ fontSize: `${1.5 * this.s}px` })
                .setWordWrapWidth(this.w * 0.75 + 4 * this.s);
            h += text.height + this.s;
            this.inventoryTexts.push(text);
            if (!this.isInvOpen) {
                text.setVisible(0)
            }
        });
    }

    hasItem(item) {
        return this.inventory.includes(item);
    }

    destroyItemFromScene(itemObject) {
        this.add.tween({
            targets: itemObject,
            alpha: 0,
            duration: 1000,
            onComplete: () => {
                itemObject.destroy()
            }
        })
    }

    gainItem(item) {
        if (this.inventory.includes(item)) {
            console.warn('gaining item already held:', item);
            return;
        }
        this.inventory.push(item);
        this.updateInventory();
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x - 20, to: text.x },
                    alpha: { from: 0, to: 1 },
                    ease: 'Cubic.out',
                    duration: this.transitionDuration
                });
            }
        }
    }

    loseItem(item) {
        if (!this.inventory.includes(item)) {
            console.warn('losing item not held:', item);
            return;
        }
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x, to: text.x + 20 },
                    alpha: { from: 1, to: 0 },
                    ease: 'Cubic.in',
                    duration: this.transitionDuration
                });
            }
        }
        this.time.delayedCall(500, () => {
            this.inventory = this.inventory.filter((e) => e != item);
            this.updateInventory();
        });
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

    update() {
        
    }

    onEnter() {
        console.warn('This AdventureScene did not implement onEnter():', this.constructor.name);
    }
}