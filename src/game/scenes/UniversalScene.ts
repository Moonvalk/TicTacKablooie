import { AudioLibrary, AudioLoader } from "../../data/AudioLoader";
import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { MVButton } from "../../engine/components/mvButton";
import { MVSprite } from "../../engine/components/mvSprite";
import { Engine } from "../../engine/mvEngine";
import { Scene } from "../models/Scene";
import { GameLogo } from "../objects/GameLogo";

/**
 * Container for a UnversalScene object. This holds all elements that should be
 * 'universally' active.
 */
export class UniversalScene implements Scene {

    //#region Data Fields
    /**
     * Added to fulfill the contract from Scene implementation.
     * This value is used to request that the SceneHandler switches scene.
     */
    public RequestScene: number = -1;

    /**
     * Stores the background sprite.
     */
    private _background: MVSprite;

    /**
     * Stores the game logo object that will be animated with code.
     */
    private _gameLogo: GameLogo;
 
    /**
     * Stores the Moonvalk Logo sprite used to render the logo to screen.
     */
    private _moonvalkLogo: MVSprite;

    /**
     * The game music to be played once started.
     */
    private _gameMusic?: HTMLAudioElement;

    /**
     * Button for turning game music on and off.
     */
    private _audioButton: MVButton;

    /**
     * Flag that toggles audio on/off.
     */
    private _audioToggle: boolean = true;
    //#endregion

    /**
     * Builds sprite objects and animated game logo.
     */
    public constructor() {
        this._background = new MVSprite(ImageLoader.Get(ImageLibrary.BACKGROUND));
        this._background.Transform.SetPosition(960, 540);
        this._moonvalkLogo = new MVSprite(ImageLoader.Get(ImageLibrary.MOONVALK_LOGO));
        this._moonvalkLogo.Transform.SetPosition(220, 120);

        this._gameLogo = new GameLogo(
            ImageLoader.Get(ImageLibrary.LOGO_ICON),
            ImageLoader.Get(ImageLibrary.LOGO_TEXT)
        );

        // Load game music.
        this._gameMusic = AudioLoader.Get(AudioLibrary.MUSIC);
        if (this._gameMusic) {
            this._gameMusic.loop = true;
        }

        // Create new audio button for toggling music.
        this._audioButton = new MVButton(
            ImageLoader.Get(ImageLibrary.AUDIO_BUTTON),
            ImageLoader.Get(ImageLibrary.AUDIO_BUTTON_HOVER),
            { x: 1810 , y: 110 }
        );
    }

    /**
     * Play method for this Scene. This draws all universal sprites to the viewport.
     * @returns void
     */
    public Play(): void {

        // Render universal components.
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();

        // Handle game music state.
        if (this._audioButton.IsHovered(Engine.MousePosition)) {
            if (Engine.IsUserClicking) {
                this._audioToggle = !this._audioToggle;
                if (!this._audioToggle) {
                    this._gameMusic?.pause();
                }
            }
        }
        this._audioButton.Draw();

        if (Engine.IsUserClicking) {
            if (this._audioToggle && this._gameMusic?.paused) {
                this._gameMusic?.play();
            }
        }
    }
}