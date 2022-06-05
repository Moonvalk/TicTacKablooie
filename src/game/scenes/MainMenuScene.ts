import { Scene } from "../models/Scene";
import { MVButton } from '../../engine/components/mvButton';
import { Engine } from "../../engine/mvEngine";
import { GameState } from "../enums/GameState";
import { ImageLoader, ImageLibrary } from "../../data/ImageLoader";

/**
 * Scene for rendering and handling user input from the main menu.
 */
export class MainMenuScene implements Scene {

    //#region Data Fields
    /**
     * This value is used to request that the SceneHandler switches scene.
     */
    public RequestScene: number = -1;

    /**
     * Represents the play new game button.
     */
    private _playButton: MVButton;

    /**
     * Represents the credits button.
     */
    private _creditsButton: MVButton;

    /**
     * Represents the exit game button.
     */
    private _exitButton: MVButton;
    //#endregion

    /**
     * Default constructor. This is used to instantiate new buttons needed for
     * the menu.
     */
    public constructor() {
        // Build new button objects and place them onto the screen.
        this._playButton = new MVButton(
            ImageLoader.Get(ImageLibrary.BUTTON),
            { x: 960, y: 500 },
            'PLAY'
        );
        this._creditsButton = new MVButton(
            ImageLoader.Get(ImageLibrary.BUTTON),
            { x: 960, y: 620 },
            'CREDITS'
        );
        this._exitButton = new MVButton(
            ImageLoader.Get(ImageLibrary.BUTTON),
            { x: 960, y: 740 },
            'EXIT'
        );
    }

    /**
     * Play method for this Scene. Handles checking for button events and rendering.
     * @returns void
     */
    public Play(): void {
        if (this._playButton.IsHovered(Engine.MousePosition)) {
            if (Engine.IsUserClicking) {
                this.RequestScene = GameState.Gameplay;
            }
        } else if (this._creditsButton.IsHovered(Engine.MousePosition)) {
            if (Engine.IsUserClicking) {
                window.open("https://moonvalk.com/", "_blank");
            }
        } else if (this._exitButton.IsHovered(Engine.MousePosition)) {
            if (Engine.IsUserClicking) {
                window.open("https://moonvalk.com/", "_blank");
            }
        }

        // Render all buttons.
        this._playButton.Draw();
        this._creditsButton.Draw();
        this._exitButton.Draw();
    }
}
