import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { MVSprite } from "../../engine/components/mvSprite";
import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";
import { Particle } from "../models/Particle";

/**
 * Object representing a smoke particle effect that can be played on screen
 * with the help of the ParticleHandler.
 */
export class SmokeEffect implements Particle {

    //#region Data Fields
    /**
     * Holds the type of particle effect that this instance is.
     */
    public ParticleType: ParticleEffect = ParticleEffect.Smoke;

    /**
     * The number of particles to create for this effect.
     */
    private _particleCount: number = 10;

    /**
     * Stores reference to all particle sprites used to render the smoke effect.
     */
    private _particles: MVSprite[] = [];

    /**
     * Stores all speed/directions in which particles will move over their lifespan.
     */
    private _particleDirections: Vector2[] = [];

    /**
     * Stores whether or not this effect has paused due to completion.
     */
    private _paused: boolean = true;
    //#endregion

    /**
     * Builds new sprites for the smoke particle effect.
     */
    public constructor() {
        for (let index = 0; index < this._particleCount; index++) {
            const newParticle = new MVSprite(ImageLoader.Get(ImageLibrary.SMOKE_PARTICLE));
            this._particles.push(newParticle);
        }
    }

    //#region Public Methods
    /**
     * Plays this particle effect at the requested position.
     * @param position_ - The position to play this particle effect at in screen space.
     * @returns void
     */
    public Play(position_: Vector2): void {

        // Enable rendering by flagging this as no longer paused.
        this._paused = false;

        for (let index = 0; index < this._particles.length; index++) {
            
            // Update starting position.
            this._particles[index].Transform.SetPosition(position_.x, position_.y);

            // Update to a randomized scale.
            const randomScale = (Math.random() * 0.8) + 0.5;
            this._particles[index].Transform.SetScale(randomScale, randomScale);
            
            // Randomize speed/direction.
            const randomSpeedX = (Math.random() - 0.5) * 4;
            const randomSpeedY = (Math.random() - 0.5) * 4;
            this._particleDirections.push({ x: randomSpeedX, y: randomSpeedY});
            this._particles[index].Transform.SetAlpha(randomScale);
        }
    }

    /**
     * Draws this particle effect to the screen while updating animations.
     * @returns void
     */
    public Draw(): void {
        if (this._paused) {
            return;
        }

        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale > 0.01) {

                // Continue to update scale and translate until no longer visible.
                const newScale = scale * 0.95;
                this._particles[index].Transform.Translate(this._particleDirections[index]);
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Draw();
                continue;
            }

            // No longer visible so now we can pause.
            this._paused = true;
            return;
        }
    }
    //#endregion
}