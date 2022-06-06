import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { MVSprite } from "../../engine/components/mvSprite";
import { Vector2 } from "../../engine/types/Vector";
import { ExtMath } from "../../engine/util/extmath";
import { ParticleEffect } from "../enums/ParticleEffect";
import { Particle } from "../models/Particle";

/**
 * Object representing a playable explosion effect on screen.
 */
export class ExplosionEffect implements Particle {

    //#region Data Fields
    /**
     * Holds the type of particle effect that this instance is.
     */
     public ParticleType: ParticleEffect = ParticleEffect.Explosion;

     /**
      * The amount of particles required for this effect.
      */
     private _particleCount: number = 1;
 
     /**
      * Stores all particle sprites used for rendering.
      */
     private _particles: MVSprite[] = [];
 
     /**
      * Tracks whether or not this effect has paused due to completion.
      */
     private _paused: boolean = true;
 
     /**
      * Builds a list of new particle sprites for later use.
      */
     public constructor() {
         for (let index = 0; index < this._particleCount; index++) {
             const newParticle = new MVSprite(ImageLoader.Get(ImageLibrary.EXPLOSION));
             this._particles.push(newParticle);
         }
     }
 
     /**
      * Plays this particle effect by triggering new Transform updates.
      * @param position_ - The position on screen to play this effect at.
      * @returns void
      */
     public Play(position_: Vector2): void {
 
        // Unpause.
        this._paused = false;
        for (let index = 0; index < this._particles.length; index++) {
            
            // Update starting position.
            this._particles[index].Transform.SetPosition(position_.x, position_.y);

            // Update to a randomized scale.
            const randomScale = (Math.random() * 0.2) + 0.3;
            this._particles[index].Transform.SetScale(randomScale, randomScale);
            
            // Get a random rotation for this effect.
            const randomRotation = (ExtMath.GetRandomInt(360));
            this._particles[index].Transform.SetRotation(randomRotation);
            this._particles[index].Transform.SetAlpha(1);
        }
    }

    /**
     * Renders this effect to the screen and updates Transform.
     * @returns void
     */
    public Draw(): void {
        if (this._paused) {
            return;
        }

        // Loop through all available particles and continue to increment scale until finished.
        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale < 1.3) {
                const newScale = scale + 0.05;
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Transform.SetAlpha(1 - (scale - 0.7));
                this._particles[index].Draw();
                continue;
            }
            this._paused = true;
            return;
        }
    }
}