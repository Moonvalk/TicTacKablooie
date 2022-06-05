import { Transform } from './Transform'
import { Renderer } from '../mvEngine'
import { MVRenderable } from '../models/mvRenderable';
import { MVRenderableType } from '../enums/mvRenderableType';

/**
 * Container for representing a renderable sprite.
 */
export class MVSprite implements MVRenderable {

    //#region Data Fields
    /**
     * Holds the RenderableType used by this Renderable component.
     */
    public RenderType: MVRenderableType = MVRenderableType.Image;

    /**
     * Stores reference to the image that will be displayed by this sprite.
     */
    private _image: HTMLImageElement;

    /**
     * Holds reference to the Transform that is used to display this instance.
     */
    private _transform: Transform;
    //#endregion

    /**
     * Sets the image to be rendered and updates Transform data to match.
     * @param  {string} imageName_ - The name of the image source.
     */
    public constructor(imageElement_: HTMLImageElement) {

        // Set the image object source.
        this._image = imageElement_;

        // Create a new Transform with the image data as a starting point.
        this._transform = new Transform();
        this._transform.SetFromImageData(this._image);
    }

    //#region Public Getters
    /**
     * Gets the image object stored within this sprite container.
     * @returns HTMLImageElement - The image to be rendered.
     */
     get Contents(): HTMLImageElement {
        return this._image;
    }
    
    /**
     * Gets the Transform applied to this sprite.
     * @returns Transform - Returns this instance's Transform component.
     */
    get Transform(): Transform {
        return this._transform;
    }
    //#endregion

    //#region Public Methods
    /**
     * Adds this instance to the render queue to be drawn this frame.
     * @returns void
     */
    public Draw(): void {
        Renderer.AddToRenderQueue(this);
    }

    /**
     * Sets the image source stored within the image component.
     * @param imageName_ - The name of the image file to store.
     * @returns void
     */
    public SetImage(imageElement_: HTMLImageElement): void {
        this._image = imageElement_;
    }
    //#endregion
}