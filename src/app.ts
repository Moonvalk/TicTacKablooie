import { CursorRenderer } from './game/objects/CursorRenderer';
import { SceneHandler } from './game/SceneHandler';
import { ImageLoader, ImageLibrary } from './data/ImageLoader';
import { MVBehavior } from './engine/mvBehavior';

/**
 * On window load begin the game engine.
 */
window.onload = function() {
    ImageLoader.LoadAll();
}

/**
 * The below class is used to create a main game engine loop once
 * images have been loaded.
 */
class MVEngineMain extends MVBehavior {

    /**
     * Determines if the engine has been initialized yet.
     */
    private _initialized: boolean = false;

    /**
     * Game engine update method. This runs each game tick once the engine has started.
     * @returns void
     */
    public Update(): void {
        if (this._initialized) {
            return;
        }
        this._initialized = true;

        // Create new top level game objects.
        sceneHandler = new SceneHandler();
        cursor = new CursorRenderer(ImageLoader.Get(ImageLibrary.CURSOR));
    }
}

// Create new Main object responsible for starting game once the engine is ready.
const Main = new MVEngineMain();
let sceneHandler: SceneHandler;
let cursor: CursorRenderer;
