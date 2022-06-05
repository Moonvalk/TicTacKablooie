import { Engine } from "./mvEngine";

/**
 * Abstract representing an object that will be added to the game loop update queue.
 */
export abstract class MVBehavior {
    
    /**
     * Enable this object on construction by adding it to the MVEngine queue.
     */
    public constructor() {
        this.OnEnable();
    }

    //#region Methods
    /**
     * Enables this object by adding it to the Engine queue.
     * @returns void
     */
    public OnEnable(): void {
        Engine.EnqueueRuntimeObject(this);
    }

    /**
     * Main update loop where game logic can be stored.
     * @returns void
     */
    public abstract Update(): void;

    /**
     * Disables this object by removing it from the Engine queue.
     * @returns void
     */
    public OnDisable(): void {
        Engine.DequeueRuntimeObject(this);
    }
    //#endregion
}