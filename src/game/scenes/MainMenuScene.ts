import { Scene } from "../models/Scene";
import { MVButton } from '../../engine/components/mvButton';
import { Engine } from "../../engine/mvEngine";
import { GameState } from "../enums/GameState";
import { ImageLoader, ImageLibrary } from "../../data/ImageLoader";
import { Strings } from "../../data/Strings";
import { MVSprite } from "../../engine/components/mvSprite";
import { SmokeEffect } from "../objects/SmokeEffect";

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

    /**
     * Tagline to display game description on main menu.
     */
    private _tagline: MVSprite;


    private _particleEffect?: SmokeEffect;
    //#endregion

    /**
     * Default constructor. This is used to instantiate new buttons needed for
     * the menu.
     */
    public constructor() {

        // Build new button objects and place them onto the screen.
        this._playButton = new MVButton(
            ImageLoader.Get(ImageLibrary.PLAY_BUTTON),
            ImageLoader.Get(ImageLibrary.PLAY_BUTTON_HOVER),
            { x: 800, y: 660 }
        );
        this._creditsButton = new MVButton(
            ImageLoader.Get(ImageLibrary.CREDITS_BUTTON),
            ImageLoader.Get(ImageLibrary.CREDITS_BUTTON_HOVER),
            { x: 1220, y: 570 }
        );
        this._exitButton = new MVButton(
            ImageLoader.Get(ImageLibrary.EXIT_BUTTON),
            ImageLoader.Get(ImageLibrary.EXIT_BUTTON_HOVER),
            { x: 1220, y: 720 }
        );

        this._tagline = new MVSprite(ImageLoader.Get(ImageLibrary.TAGLINE_TEXT));
        this._tagline.Transform.SetPosition(960, 880);
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
                window.open(Strings.CREDITS_URL, "_blank");
            }
        } else if (this._exitButton.IsHovered(Engine.MousePosition)) {
            if (Engine.IsUserClicking) {
                window.open(Strings.EXIT_URL, "_self");
            }
        }

        // Render all buttons.
        this._playButton.Draw();
        this._creditsButton.Draw();
        this._exitButton.Draw();
        this._tagline.Draw();

        if (this._particleEffect) {
            this._particleEffect.Draw();
        }
    }
}
