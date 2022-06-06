import { Transform } from '../components/Transform'
import { Vector2 } from '../types/Vector';
import { Display } from '../setup/mvDisplay';
import { MVRenderable } from '../models/mvRenderable';
import { MVRenderableType } from '../enums/mvRenderableType';
import { MVText } from '../components/mvText';
import { MVSprite } from '../components/mvSprite';

/**
 * Class for referencing and rendering to the main canvas element.
 */
export class MVViewport {

    //#region Data Fields
    /**
     * Stores reference to the main canvas element.
     */
    public Canvas: HTMLCanvasElement;

    /**
     *  Stores reference to the canvas 2D context.
     */
    private _context: CanvasRenderingContext2D;

    /**
     * Holds the current screen resolution.
     */
    private _resolution: Vector2 = { x: 1, y: 1 };

    /**
     * Holds a list of Renderable objects queued to be rendered.
     */
    private _renderList: MVRenderable[] = [];

    /**
     * Reference to the optional cursor sprite that may be rendered to the DOM.
     */
    private _cursorSprite?: MVSprite;
    //#endregion

    /**
     * Default constructor.
     * @param  {string} canvasName_ - The name of the canvas element in the DOM.
     */
    public constructor(canvasName_: string) {
        this.Canvas = document.querySelector(canvasName_)! as HTMLCanvasElement;
        this._context = this.Canvas.getContext('2d')!;        
    }

    //#region Public Getters
    /**
     * Gets the current screen resolution.
     * @returns Vector2 - Returns a Vector2 representing the screen resolution.
     */
     get Resolution(): Vector2 {
        return this._resolution;
    }
    //#endregion

    //#region Public Methods
    /**
     * Adjusts the canvas DOM element size to match the current window width/height
     * and stores the resolution that should be used to render the game.
     * @returns void
     */
    public UpdateCanvasSize(): void {
        this.Canvas.width = window.innerWidth *  window.devicePixelRatio;
        this.Canvas.height = (this.Canvas.width / 16) * 9;
        this._resolution.x = this.Canvas.width / Display.DEFAULT_RESOLUTION.x;
        this._resolution.y = this._resolution.x;
    }

    /**
     * Adds a new sprite to the render queue.
     * @param  {Renderable} object_ - The renderable object that will be added.
     * @returns void
     */
    public AddToRenderQueue(object_: MVRenderable): void {
        this._renderList.push(object_);
    }

    /**
     * Renders all queued items to the screen each game tick.
     * @returns void
     */
    public RenderToCanvas(): void {

        // Clear the previous frame.
        this._context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        
        // Loop through all queued items and render them according to RenderableType.
        for (let index = 0; index < this._renderList.length; index++) {
            switch(this._renderList[index].RenderType) {
                case MVRenderableType.Image:
                    this.RenderImage(
                        this._renderList[index].Contents as HTMLImageElement, 
                        this._renderList[index].Transform);
                    break;

                case MVRenderableType.Text:
                    this.RenderText(
                        this._renderList[index].Contents as MVText,
                        this._renderList[index].Transform);
                    break;
            }
        }

        // Clear render list.
        this._renderList = [];

        // Finally, render the optional special cursor.
        this.renderCursor();
    }

    /**
     * Renders an image to the screen with the provided Transform data.
     * @param  {HTMLImageElement} image_ - The image to render.
     * @param  {Transform} transform_ - The Transform data to be applied to this image.
     * @returns void
     */
    public RenderImage(image_: HTMLImageElement, transform_: Transform): void {

        // Reset context transform to eliminate any issues.
        this._context.setTransform(1, 0, 0, 1, 0, 0);

        // Center the image at provided position and make any rotation/scaling adjustments.
        this._context.translate(transform_.Position.x * this._resolution.x,
            transform_.Position.y * this._resolution.y);
        this._context.rotate(transform_.Rotation);
        this._context.globalAlpha = transform_.Alpha;

        // Render now.
        this._context.drawImage(
            image_,
            -(transform_.Size.x / 2) * this._resolution.x,
            -(transform_.Size.y / 2) * this._resolution.y,
            (transform_.Size.x * this._resolution.x),
            (transform_.Size.y * this._resolution.y)
        );
        this._context.globalAlpha = 1;
    }

    /**
     * Renders text to the screen with the provided MVText/Transform data.
     * @param text_ - The MVText object which supplies rendering information.
     * @param transform_ - The Transform data to be applied to this text.
     * @returns void
     */
    public RenderText(text_: MVText, transform_: Transform): void {

        // Reset context transform to eliminate any issues.
        this._context.setTransform(1, 0, 0, 1, 0, 0);

        // Center the text at provided position and make any color/rotation/scaling adjustments.
        this._context.fillStyle = text_.Color;
        this._context.translate(transform_.Position.x * this._resolution.x,
            transform_.Position.y * this._resolution.y);
        this._context.rotate(transform_.Rotation);
        this._context.font = text_.Font;
        this._context.textAlign = text_.Alignment;

        // Render now.
        this._context.fillText(
            text_.Value,
            0,
            0,
            transform_.Size.x * this._resolution.x
        );
    }

    /**
     * Sets the cursor sprite with updated image and Transform data.
     * @param cursorSprite_ 
     * @returns void
     */
    public SetCursor(cursorSprite_: MVSprite): void {
        this._cursorSprite = cursorSprite_;
    }
    //#endregion

    /**
     * Renders an optional cursor to the screen above everything else, when set.
     * @returns void
     */
    private renderCursor(): void {

        // Determine if a cursor sprite has been set.
        if (!this._cursorSprite) {
            return;
        }

        // Reset context transform to eliminate any issues.
        this._context.setTransform(1, 0, 0, 1, 0, 0);

        // Center this image at the provided position and make any other Transform adjustments.
        this._context.translate(
            this._cursorSprite.Transform.Position.x, 
            this._cursorSprite.Transform.Position.y
        );
        this._context.rotate(this._cursorSprite.Transform.Rotation);

        // Render now.
        this._context.drawImage(
            this._cursorSprite.Contents,
            -(this._cursorSprite.Transform.Size.x / 2),
            -(this._cursorSprite.Transform.Size.y / 2),
            this._cursorSprite.Transform.Size.x,
            this._cursorSprite.Transform.Size.y
        );
    }
}
