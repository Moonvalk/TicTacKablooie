import { Vector2 } from "../types/Vector";
import { MVSprite } from "./mvSprite";
import { MVText } from "./mvText";
import { MVTextAlignment } from "../enums/mvTextAlignment";
import { Transform } from "./Transform";
import { AudioLibrary, AudioLoader } from "../../data/AudioLoader";
import { MVAudioGroup } from "./mvAudioGroup";

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
     * The image to be displayed while this button is idle.
     */
    private _idleImage: HTMLImageElement;

    /**
     * The image to be displayed while this button is hovered.
     */
    private _hoverImage: HTMLImageElement;

    /**
     * Optional text component to be displayed on this button.
     */
    private _text?: MVText;

    /**
     * Flag for checking if this button was previously hovered.
     */
    private _hoveredLastFrame: boolean = false;

    /**
     * Used to play audio when this button is hovered.
     */
    private _hoverSound: MVAudioGroup;
    //#endregion

    /**
     * Builds a new Sprite and Transform, sets this button's displayed text,
     * and updates the position on screen.
     * @param idleImage_ - The image to be used for this button.
     * @param hoverImage_ - The image to be used for this button when hovered.
     * @param position_ - The position of this button.
     * @param textValue_ - The text value to be displayed on this button.
     */
    public constructor(
        idleImage_: HTMLImageElement,
        hoverImage_: HTMLImageElement,
        position_: Vector2,
        textValue_?: string
    ) {
        
        // Create new sprite with this image.
        this._idleImage = idleImage_;
        this._hoverImage = hoverImage_;
        this._sprite = new MVSprite(this._idleImage);
    
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

        // Add hover audio.
        this._hoverSound = new MVAudioGroup([AudioLoader.Get(AudioLibrary.MENU_HOVER)]);
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
        if (hovered !== this._hoveredLastFrame) {
            this._hoveredLastFrame = hovered;

            if (hovered) {
                this._hoverSound.Play();
                this._sprite.SetImage(this._hoverImage);
            } else {
                this._sprite.SetImage(this._idleImage);
            }
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