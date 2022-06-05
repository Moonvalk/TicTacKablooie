import { Vector2 } from "../types/Vector";
import { MVSprite } from "./mvSprite";
import { MVText } from "./mvText";
import { MVTextAlignment } from "../enums/mvTextAlignment";
import { Transform } from "./Transform";
import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";

/**
 * Class for creating screen button components.
 */
export class MVButton {

    //#region Data Fields
    /**
     * Sprite used for rendering and handling transform.
     */
    private _sprite: MVSprite;

    /**
     * Optional text component to be displayed on this button.
     */
    private _text?: MVText;
    //#endregion

    /**
     * Builds a new Sprite and Transform, sets this button's displayed text,
     * and updates the position on screen.
     * @param textValue_ - The text value to be displayed on this button.
     * @param image_ - The image to be used for this button.
     * @param position_ - The position of this button.
     */
    public constructor(image_: HTMLImageElement, position_: Vector2, textValue_?: string) {
        
        // Create new sprite with this image.
        this._sprite = new MVSprite(image_);

        // Update Transform position.
        this.Transform.SetPosition(position_.x, position_.y);

        // Create a new MVText object if a text value is requested.
        if (textValue_) {
            this._text = new MVText(textValue_);

            // Re-style this text by default for buttons.
            this._text.SetColor(255, 255, 255);
            this._text.SetTextAlignment(MVTextAlignment.Center);
            this._text.SetFontSize(36);
            this._text.SetFontFamily("Oswald-Regular");
            this._text.Transform.SetPosition(
                position_.x, 
                position_.y + (this._text.FontSize / 4)
                );
            this._text.Transform.SetSize(150, this._text.FontSize);
            this._text.Transform.SetRotation(0);
        }
    }

    //#region Public Getters
    /**
     * Gets the Transform attached to the inner Sprite component.
     * @returns Transform - Returns the Transform applied to the Sprite component.
     */
    get Transform(): Transform {
        return this._sprite.Transform;
    }
    //#endregion

    //#region Public Methods
    /**
     * Determines if this button is being hovered.
     * @param mousePosition_ - The current mouse position.
     * @returns boolean - Returns true if the mouse is above the sprite transform.
     */
    public IsHovered(mousePosition_: Vector2): boolean {
        const hovered = this.Contains(mousePosition_);
        if (hovered) {
            this._sprite.SetImage(ImageLoader.Get(ImageLibrary.BUTTON_HOVER));
        } else {
            this._sprite.SetImage(ImageLoader.Get(ImageLibrary.BUTTON));
        }
        return hovered;
    }

    /**
     * Checks if the provided point is within this instance's rendered area.
     * @param point_ - The point on screen to check.
     * @returns boolean - Returns true if the point provided is contained within this button.
     */
    public Contains(point_: Vector2): boolean {
        return this._sprite.Transform.Rect.Contains(point_.x, point_.y);
    }

    /**
     * Renders this button to the screen.
     * @returns void
     */
    public Draw(): void {
        this._sprite.Draw();
        this._text?.Draw();
    }
    //#endregion
}