import { MVSprite } from "../../engine/components/mvSprite";
import { Vector2 } from "../../engine/types/Vector";

/**
 * Represents a health display designated for a singular player.
 */
export class PlayerHealth {

    //#region Data Fields
    /**
     * The maximum/starting health value for a player.
     */
    private _maxHealth: number = 3;

    /**
     * The current health value for a player.
     */
    private _health: number;

    /**
     * An array of sprites used to render health images to the screen.
     */
    private _sprites: MVSprite[] = [];

    /**
     * The image used to represent a full health point.
     */
    private _fullImage: HTMLImageElement;

    /**
     * The image used to represent an empty health point.
     */
    private _emptyImage: HTMLImageElement;
    //#endregion

    /**
     * Stores necessary images for displaying health and then positions the display on screen.
     * @param fullHPImage_ - The image used for full health points.
     * @param emptyHPImage_ - The image used for empty health points.
     * @param screenPosition_ - The position to display health on screen.
     */
    public constructor(
        fullHPImage_: HTMLImageElement,
        emptyHPImage_: HTMLImageElement,
        screenPosition_: Vector2 = { x: 240, y: 350 }
    ) {

        // Store images and ensure that health starts at maximum.
        this._fullImage = fullHPImage_;
        this._emptyImage = emptyHPImage_;
        this._health = this._maxHealth;

        // Position each sprite element on screen.
        let positionX = screenPosition_.x;
        for (let index = 0; index < this._maxHealth; index++) {
            const newSprite = new MVSprite(this._fullImage);
            newSprite.Transform.SetPosition(positionX + (index * 60), screenPosition_.y);
            this._sprites.push(newSprite);
        }
    }

    //#region Public Getters
    /**
     * Gets the current health points.
     * @returns number - The current health points value.
     */
    get HP(): number {
        return this._health;
    }
    //#endregion

    //#region Public Methods
    /**
     * Resets this component by forcing health to max health and updating display.
     * @returns void
     */
    public Reset(): void {
        this._health = this._maxHealth;
        this.updateImages();
    }

    /**
     * Causes this health component to lose 1 point.
     * @returns void
     */
    public LoseHealth(): void {
        this._health -= 1;
        this.updateImages();
    }

    /**
     * Renders the health display to screen.
     * @returns void
     */
    public Draw(): void {
        for (let index = 0; index < this._maxHealth; index++) {
            this._sprites[index].Draw();
        }
    }
    //#endregion

    //#region Private Methods
    /**
     * Updates all images to be full or empty depending on health value.
     * @returns void
     */
    private updateImages(): void {
        for (let index = 0; index < this._maxHealth; index++) {
            this._sprites[index].SetImage(this._health > index ?
                this._fullImage : this._emptyImage);
        }
    }
    //#endregion
}