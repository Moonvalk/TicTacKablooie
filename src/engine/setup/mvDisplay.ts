import { Vector2 } from "../types/Vector";

/**
 * Holds setup data relevant to display.
 */
export class Display {
    
    /**
     * Set the default resolution here.
     */
    static DEFAULT_RESOLUTION: Vector2 = { x: 1920, y: 1080 };

    /**
     * The target perfect frame time.
     */
    static PERFECT_FRAME_TIME: number = (1000 / 60);
}