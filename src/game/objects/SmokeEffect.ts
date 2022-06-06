import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { MVSprite } from "../../engine/components/mvSprite";
import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";
import { Particle } from "../models/Particle";

/**
 * 
 */
export class SmokeEffect implements Particle {

    //#region Data Fields
    /**
     * Holds the type of particle effect that this instance is.
     */
    public ParticleType: ParticleEffect = ParticleEffect.Smoke;

    /**
     * 
     */
    private _particleCount: number = 10;

    /**
     * 
     */
    private _particles: MVSprite[] = [];

    /**
     * 
     */
    private _particleDirections: Vector2[] = [];

    /**
     * 
     */
    private _paused: boolean = true;

    /**
     * 
     */
    public constructor() {
        for (let index = 0; index < this._particleCount; index++) {
            const newParticle = new MVSprite(ImageLoader.Get(ImageLibrary.SMOKE_PARTICLE));
            this._particles.push(newParticle);
        }
    }

    /**
     * 
     * @param position_ 
     */
    public Play(position_: Vector2): void {

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
     * 
     */
    public Draw(): boolean {
        if (this._paused) {
            return true;
        }

        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale > 0.01) {
                const newScale = scale * 0.95;
                this._particles[index].Transform.Translate(this._particleDirections[index]);
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Transform.SetAlpha(newScale);
                this._particles[index].Draw();
                continue;
            }
            this._paused = true;
        }

        return this._paused;
    }
}