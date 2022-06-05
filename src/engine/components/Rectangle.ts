import { Vector2 } from "../types/Vector";

/**
 * Container for a paired rectangular data requiring position/size.
 */
export class Rectangle {

    //#region Data Fields
    /**
     * The position of this rectangle on screen (from top left corner).
     */
    public Position: Vector2;
    
    /**
     * The size of this rectangle on screen (width/height).
     */
    public Size: Vector2;
    //#endregion

    /**
     * Builds a new Rectangle instance.
     * @param  {number} x_ - The top left corner X position.
     * @param  {number} y_ - The top left corner Y position.
     * @param  {number} width_ - The total width of this container.
     * @param  {number} height_ - The total height of this container.
     */
    public constructor(x_: number, y_: number, width_: number, height_: number) {
        this.Position = { x: x_, y: y_ };
        this.Size = { x: width_, y: height_ };
    }

    /**
     * Determines if the provided point is included within this container.
     * @param  {number} pointX_ - The point along the X axis.
     * @param  {number} pointY_ - The point along the Y axis.
     * @returns boolean - Returns true if the provided point is found within this instance.
     */
    public Contains(pointX_: number, pointY_: number): boolean {
        return (
            pointX_ > this.Position.x && pointX_ < this.Position.x + this.Size.x &&
            pointY_ > this.Position.y && pointY_ < this.Position.y + this.Size.y
        );
    }
}
