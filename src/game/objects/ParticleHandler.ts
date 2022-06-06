import { MVBehavior } from "../../engine/mvBehavior";
import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";
import { Particle } from "../models/Particle";
import { ExplosionEffect } from "./ExplosionEffect";
import { SmokeEffect } from "./SmokeEffect";

/**
 * Class for handling all particle effects.
 */
export class ParticleHandler extends MVBehavior {

    //#region Data Fields
    /**
     * Stores all particle effects that can be played by this handler.
     */
    private _particles: Particle[] = [];

    /**
     * Tracks the last index played. This is used to loop through the
     * array of available particles, keeping a constant number available at one time.
     */
    private _lastIndex: number = 0;
    //#endregion

    /**
     * Builds a new array of particle effects specific to this game.
     */
    public constructor() {
        super();

        // Create 3 copies of each available effect for later use.
        for (let index = 0; index < 3; index++) {
            const newExplosionEffect = new ExplosionEffect();
            this._particles.push(newExplosionEffect);

            const newSmokeEffect = new SmokeEffect();
            this._particles.push(newSmokeEffect);
        }
    }

    //#region Public Methods
    /**
     * Updates all particle effects by requesting to render.
     * @returns void
     */
    public Update(): void {
        this._particles.forEach(effect => {
            effect.Draw();
        });
    }

    /**
     * Triggers a new particle effect at the provided screen position.
     * @param particleEffect_ - The ParticleEffect to be played.
     * @param position_ - The location on screen to play this effect at.
     * @returns void
     */
    public Play(particleEffect_: ParticleEffect, position_: Vector2): void {

        // Search for the effect in the particles array.
        let findingParticle = true;
        while (findingParticle) {

            // When found, cycle the last index for next time and play the effect.
            if (this._particles[this._lastIndex].ParticleType == particleEffect_) {
                findingParticle = false;
                this._particles[this._lastIndex].Play(position_);
            }
            this._lastIndex = (this._lastIndex + 1 >= this._particles.length) ? 
                0 : this._lastIndex + 1;
        }
    }
    //#endregion
}