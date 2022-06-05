import { MVViewport } from "./view/mvViewport";
import { MVBehavior } from "./mvBehavior";
import { Vector2 } from "./types/Vector";

// Create a new Renderer component.
export const Renderer = new MVViewport('#gameCanvas');

/**
 * Main class for handling game engine.
 */
export class MVEngine {

    //#region Data Fields
    /**
     * A queue for MVBehavior objects that will be updated at runtime.
     */
    private _runtimeQueue: MVBehavior[] = [];

    /**
     * Stores the last known mouse position over the canvas.
     */
    private _mousePosition: Vector2 = { x: 0, y: 0 };

    /**
     * Flag for determining when the user is clicking.
     */ 
    private _isUserClicking: boolean = false;

    /**
     * Flag that determines when the engine is actively running.
     */
    private _isEngineRunning: boolean = false;
    //#endregion

    /**
     * Default constructor. Adds event listeners for mouse events
     * and updates canvas size to match window.
     */
    public constructor() {

        // Update canvas to stretch across entire viewport window.
        Renderer.UpdateCanvasSize();

        // Add a listener for mouse moving and clicking events.
        Renderer.Canvas.addEventListener('mousemove', (event) => {
            const rect = Renderer.Canvas.getBoundingClientRect();
            
            // Store mouse position.
            this._mousePosition.x = event.clientX - rect.left;
            this._mousePosition.y = event.clientY - rect.top;
        });

        Renderer.Canvas.onclick = () => {
            this._isUserClicking = true;
        };
    }

    //#region Public Getters
    /**
     * Gets the mouse position on the canvas element.
     * @returns Vector2 - The two-point Vector representing mouse position within the DOM canvas element.
     */
    get MousePosition(): Vector2 {
        return this._mousePosition;
    }

    /**
     * Returns true if the user is actively clicking the canvas element this frame.
     * @returns boolean - Returns whether or not the user clicked this frame.
     */
    get IsUserClicking(): boolean {
        return this._isUserClicking;
    }

    /**
     * Gets whether the engine is actively running.
     * @returns boolean - True if the engine is running.
     */
    get IsRunning(): boolean {
        return this._isEngineRunning;
    }
    //#endregion
    
    //#region Public Methods
    /**
     * Starts the game engine.
     * @returns void
     */
    public Start(): void {
        this._isEngineRunning = true;
        this.GameLoop();
    }

    /**
     * Initializes and continues the main game loop.
     * @returns void
     */
    public GameLoop(): void {

        // Continue to update canvas size in the event that it changes.
        Renderer.UpdateCanvasSize();
        
        // Loop through the entire runtime queue and update all available objects.       
        this._runtimeQueue.forEach(object => {
            object.Update();
        });

        // Draw the game now.
        Renderer.RenderToCanvas();

        // Make necessary resets and then request a new frame looping this method.
        this._isUserClicking = false;
        requestAnimationFrame(this.GameLoop.bind(this));
    }

    /**
     * Adds a new runtime object to the queue.
     * @param  {MVBehavior} mvBehaviorObject_ - The new MVBehavior to enqueue for updates.
     * @returns void
     */
    public EnqueueRuntimeObject(mvBehaviorObject_: MVBehavior): void {
        const index = this.checkQueueForItem(mvBehaviorObject_);
        if (index == -1) {
            this._runtimeQueue.push(mvBehaviorObject_);
        }
    }

    /**
     * Removes a runtime object from the queue.
     * @param  {MVBehavior} mvBehaviorObject_ - The existing MVBehavior to remove from the queue.
     * @returns void
     */
    public DequeueRuntimeObject(mvBehaviorObject_: MVBehavior): void {
        const index = this.checkQueueForItem(mvBehaviorObject_);
        if (index > -1) {
            this._runtimeQueue.splice(index);
        }
    }
    //#endregion

    //#region Private Methods
    /**
     * Checks the runtime queue for a specific MVBehavior and returns the index if found.
     * If not found this will return -1.
     * @param  {MVBehavior} mvBehaviorObject_ - The MVBehavior object to search for.
     * @returns number - Index of the MVBehavior requested in the queue, if applicable.
     */
     private checkQueueForItem(mvBehaviorObject_: MVBehavior): number {
        for (let index = 0; index < this._runtimeQueue.length; index++) {
            if (this._runtimeQueue[index] === mvBehaviorObject_) {
                return index;
            }
        }
        return -1;
    }
    //#endregion
}

// Create a new MVEngine in charge of running game objects.
export const Engine = new MVEngine();