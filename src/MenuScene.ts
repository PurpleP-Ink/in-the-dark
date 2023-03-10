import Phaser from "phaser";

let logo:Phaser.GameObjects.Image;
let playBtn:Phaser.GameObjects.BitmapText;

export default class MenuScene extends Phaser.Scene
{
    constructor()
    {
        super("MenuScene");
    }

    create()
    {
        logo = this.add.image(this.renderer.width / 2, 250, "logo");

        playBtn = this.add.bitmapText(logo.x - 40, logo.y + 100, "retro", "play");
        
        // create a hovering effect for the play button (when hovered over, the play button changes to all caps)
        this.input.on("pointermove", (pointer:Phaser.Input.Pointer) =>
        {
            if ((pointer.x > playBtn.x && pointer.x < playBtn.x + playBtn.width)
            &&  pointer.y > playBtn.y && pointer.y < playBtn.y + playBtn.height)
            {
                playBtn.text = "PLAY";
            }
            else
            {
                playBtn.text = "play";
            }
        });

        //start the game when the play button is clicked
        this.input.on("pointerdown", (pointer:Phaser.Input.Pointer) =>
        {
            if ((pointer.x > playBtn.x && pointer.x < playBtn.x + playBtn.width)
            &&  pointer.y > playBtn.y && pointer.y < playBtn.y + playBtn.height)
            {
                this.sound.stopAll();
                this.scene.start("GameScene");
            }
        });

        this.sound.play("main-menu", {loop: true});
    }
}