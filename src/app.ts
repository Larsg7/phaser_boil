/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />


class SimpleGame {
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'phaser2.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        var text = this.game.add.text( 10, 10, "Test", { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
    }
}

window.onload = () => {
    var game = new SimpleGame();
};