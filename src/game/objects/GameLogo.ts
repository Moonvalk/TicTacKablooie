import { MVSprite } from "../../engine/components/mvSprite";
import { Engine } from "../../engine/mvEngine";

/**
 * Object representing the animated game logo.
 */
export class GameLogo {
    //#region Data Fields
    /**
     * The icon element of the logo.
     */
    private _icon: MVSprite;

    /**
     * The text element of the logo.
     */
    private _text: MVSprite;

    /**
     * A value used to animate elements of the logo.
     */
    private _animate: number = 0;
    //#endregion

    /**
     * Builds the Sprite objects required to render the animated logo.
     * @param iconImage_ - The logo icon image.
     * @param textImage_ - The logo text image.
     */
    public constructor(iconImage_: HTMLImageElement, textImage_: HTMLImageElement) {

        // Build new logo objects and position them on screen.
        this._icon = new MVSprite(iconImage_);
        this._icon.Transform.SetPosition(1160, 260);
        this._text = new MVSprite(textImage_);
        this._text.Transform.SetPosition(960, 260);
    }
    
    /**
     * Renders the game logo to the screen.
     * @returns void
     */
    public Draw(): void {
        this.animate();

        // Using the _animate value, move/rotate/scale the logo elements around on screen.
        const wave = Math.sin(this._animate) * 15;
        this._icon.Transform.SetRotation(wave);
        const pulse = Math.sin(this._animate * 1.3) * 0.1;
        this._icon.Transform.SetScale(1 + pulse, 1 + pulse);
        this._text.Transform.SetPosition(this._text.Transform.Position.x, 260 + wave);

        // Now render.
        this._icon.Draw();
        this._text.Draw();
    }

    /**
     * Increments the animation value until overflowing and then resets.
     * @returns void
     */
    private animate(): void {
        this._animate = (this._animate > 100000) ?
            this._animate - 100000 : this._animate + (Engine.DeltaTime * 0.03);
    }
}