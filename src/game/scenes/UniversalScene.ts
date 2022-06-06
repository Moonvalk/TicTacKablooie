import { particleHandler } from "../../app";
import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { MVSprite } from "../../engine/components/mvSprite";
import { Engine } from "../../engine/mvEngine";
import { ParticleEffect } from "../enums/ParticleEffect";
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
    }

    /**
     * Play method for this Scene. This draws all universal sprites to the viewport.
     * @returns void
     */
    public Play(): void {
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();

        if (Engine.IsUserClicking) {
            console.log("Try to play smoke particles...");
            particleHandler.Play(ParticleEffect.Smoke, Engine.ViewportMousePosition);
        }
    }
}