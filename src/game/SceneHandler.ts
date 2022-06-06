import { MVBehavior } from "../engine/mvBehavior";
import { Scene } from "./models/Scene";
import { MainMenuScene } from "./scenes/MainMenuScene";
import { GameplayScene } from "./scenes/GameplayScene";
import { GameState } from "./enums/GameState";
import { UniversalScene } from "./scenes/UniversalScene";

/**
 * Manager for handling individual Scenes. This object will handle game state.
 */
export class SceneHandler extends MVBehavior {

    //#region Data Fields
    /**
     * Stores reference to the UniversalScene object containing elements that will always be active.
     */
    private _universalScene: UniversalScene;

    /**
     * Stores reference to the current GameState.
     * GameState is used to track which Scene should be active.
     */
    private _gameState: GameState = GameState.MainMenu;

    /**
     * Holds all available Scenes to the current game.
     */
    private _scenes: Scene[] = new Array(GameState.Total);
    //#endregion

    /**
     * Default constructor. Instantiates new scene objects.
     */
    public constructor() {
        super();

        // Create new UniversalScene that will display throughout all gameplay.
        this._universalScene = new UniversalScene();

        // Create new Scenes that will display dynamically as the game is played.
        this._scenes[GameState.MainMenu] = new MainMenuScene();
        this._scenes[GameState.Gameplay] = new GameplayScene();

        
    }

    /**
     * Update method to be called by Engine per game tick.
     * Updates current selected Scene and handles requests for new Scenes.
     * @returns void
     */
    public Update(): void {

        // Continue playing the UniversalScene.
        this._universalScene.Play();

        // Play current selected Scene and handle new requests.
        this._scenes[this._gameState].Play();
        if (this._scenes[this._gameState].RequestScene > -1) {
            this._gameState = this._scenes[this._gameState].RequestScene;
            this._scenes[this._gameState].RequestScene = -1;
        }
    }
}