/**
 * Extended math values and functions.
 */
export class ExtMath {

    /**
     * Value for converting degrees to radians.
     */
    static TO_RADIANS = Math.PI / 180;

    /**
     * Returns a random integer value between 0 and the provided max.
     * @param maximumValue_ - The maximum value to return.
     * @returns number - A number between 0 and the provided maximum.
     */
    static GetRandomInt(maximumValue_: number): number {
        return Math.floor(Math.random() * maximumValue_);
    }
}
