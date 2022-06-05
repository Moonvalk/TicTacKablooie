import { MVSprite } from "../../engine/components/mvSprite";
import { MVBehavior } from "../../engine/mvBehavior";
import { Engine, Renderer } from "../../engine/mvEngine";

/**
 * Object representing the dynamic cursor to be rendered.
 * This is responsible for determining Sprite/Transform updates and
 * relaying that information to the Renderer component.
 */
export class CursorRenderer extends MVBehavior {

    //#region Data Fields
    /**
     * The MVSprite used to render the cursor.
     */
    private _sprite: MVSprite;
    //#endregion

    /**
     * Builds the new sprite object.
     * @param image_ - The image to be displayed as a cursor.
     */
    public constructor(image_: HTMLImageElement) {
        super();
        this._sprite = new MVSprite(image_);
    }

    /**
     * Update method to be called by Engine per game tick.
     * Relays cursor data to the Renderer component.
     * @returns void
     */
    public Update(): void {
        this._sprite.Transform.SetPosition(Engine.MousePosition.x, Engine.MousePosition.y);
        Renderer.SetCursor(this._sprite);
    }
}