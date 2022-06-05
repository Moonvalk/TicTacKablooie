import { Vector2, Vector3 } from '../types/Vector'
import { Rectangle } from './Rectangle';
import { ExtMath } from '../util/extmath';
import { Renderer } from '../mvEngine';

/**
 * Class for representing basic transformable data when rendering.
 */
export class Transform {

    //#region Data Fields
    /**
     * Stores the position of this transform in screen space. 
     */ 
    private _position: Vector3 = { x: 0, y: 0, z: 0 };

    /**
     * Holds the target size set from external data.
     */
    private _targetSize: Vector2 = { x: 300, y: 300 };

    /**
     * Holds the rendered image size when modified by scale.
     */
    private _renderSize: Vector2 = { x: 300, y: 300 };

    /**
     * Holds the scale multiplier applied to width and height when rendering.
     */
    private _scale: Vector2 = { x: 1, y: 1 };

    /**
     * Holds the current Z-axis rotation used when rendering.
     */
    private _rotation: number = 0;
    //#endregion

    //#region Public Getters
    /**
     * Gets the current position in screen space.
     * @returns Vector3 - Returns the current position of this Transform in screen space.
     */
     get Position(): Vector3 {
        return this._position;
    }

    /**
     * Gets the current size of this transform.
     * @returns Vector2 - The size of this Transform that will be rendered.
     */
    get Size(): Vector2 {
        return this._renderSize;
    }

    /**
     * Gets the current scale applied to this transform.
     * @returns Vector2 - The two-point scale applied to each axis of this Transform.
     */
    get Scale(): Vector2 {
        return this._scale;
    }

    /**
     * Gets the current rotation along the Z-axis applied to this transform.
     * @returns number - The rotation in radians.
     */
    get Rotation(): number {
        return this._rotation;
    }

    /**
     * Gets the viewport size of this Transform. This is Size with Resolution scaling.
     * @returns Vector2 - The size of this Transform when rendered to the viewport.
     */
    get ViewportSize(): Vector2 {
        return { x: this.Size.x * Renderer.Resolution.x,
            y: this.Size.y * Renderer.Resolution.y };
    }

    /**
     * Gets the viewport position of this Transform. This is Position with Resolution scaling.
     * @returns Vector2 - The position of this Transform when rendered to the viewport.
     */
    get ViewportPosition(): Vector2 {
        return { x: this.Position.x * Renderer.Resolution.x,
            y: this.Position.y * Renderer.Resolution.y };
    }
    
    /**
     * Returns a new Rectangle representing this Transform.
     * @returns Rectangle - A rectangle container representing this Transform when rendered to the viewport.
     */
    get Rect(): Rectangle {
        return new Rectangle(
            this.ViewportPosition.x - (this.ViewportSize.x / 2),
            this.ViewportPosition.y - (this.ViewportSize.y / 2),
            this.ViewportSize.x,
            this.ViewportSize.y
        );
    }
    //#endregion

    //#region Public Methods
    /**
     * Pulls image size data and stores it in this Transform instance.
     * @param  {HTMLImageElement} image_ - The image to set Transform data from.
     * @returns void
     */
    public SetFromImageData(image_: HTMLImageElement): void {
        if (!image_) {
            return;
        }
        this.SetSize(image_.width, image_.height);
        this._renderSize.x = this._targetSize.x;
        this._renderSize.y = this._targetSize.y;
    }

    /**
     * Sets new Transform data from the supplied Transform.
     * @param  {Transform} transform_ - The Transform object to pull data from.
     * @returns void
     */
    public SetFromTransform(transform_: Transform): void {
        this.SetSize(transform_.Size.x, transform_.Size.y);
        this.SetScale(transform_.Scale.x, transform_.Scale.y);
        this.SetPosition(transform_.Position.x, transform_.Position.y);
        this.SetRotation(transform_.Rotation);
    }

    /**
     * Sets the scale of this Transform.
     * @param  {number} scaleX_ - Scale along the x axis.
     * @param  {number} scaleY_ - Scale along the y axis.
     * @returns void
     */
    public SetScale(scaleX_: number, scaleY_: number): void {
        this._scale.x = scaleX_;
        this._scale.y = scaleY_;
        this.updateRenderSize();
    }

    /**
     * Sets the width and height of this Transform.
     * @param  {number} width_ - Width to be applied.
     * @param  {number} height_ - Height to be applied.
     * @returns void
     */
    public SetSize(width_: number, height_: number): void {
        this._targetSize.x = width_;
        this._targetSize.y = height_;
        this.updateRenderSize();
    }

    /**
     * Sets the position of this Transform.
     * @param  {number} positionX_ - Position along the X axis.
     * @param  {number} positionY_ - Position along the Y axis.
     * @returns void
     */
    public SetPosition(positionX_: number, positionY_: number): void {
        this._position.x = positionX_;
        this._position.y = positionY_;
    }

    /**
     * Sets the depth of this Transform.
     * @param  {number} depth_ - The depth of this Transform. This is represented by
     *      the third Z-axis value of Position.
     * @returns void
     */
    public SetDepth(depth_: number): void {
        this._position.z = depth_;
    }

    /**
     * Sets the rotation of this Transform in degrees.
     * @param  {number} rotationDegrees_ - The rotation to be used along the Z-axis in degrees.
     * @returns void
     */
    public SetRotation(rotationDegrees_: number): void {
        this._rotation = rotationDegrees_ * ExtMath.TO_RADIANS;
    }
    //#endregion

    //#region Private Methods
    /**
     * Updates the stored render size of this Transform by multiplying target size by scale.
     * @returns void
     */
    private updateRenderSize(): void {
        this._renderSize.x = (this._targetSize.x * this._scale.x);
        this._renderSize.y = (this._targetSize.y * this._scale.y);
    }
    //#endregion
}