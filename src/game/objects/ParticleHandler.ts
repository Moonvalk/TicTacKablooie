import { MVBehavior } from "../../engine/mvBehavior";
import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";
import { Particle } from "../models/Particle";
import { SmokeEffect } from "./SmokeEffect";

/**
 * Class for handling all particle effects.
 */
export class ParticleHandler extends MVBehavior {

    private _particles: Particle[] = [];

    private _lastIndex: number = 0;

    /**
     * 
     */
    public constructor() {
        super();
        for (let index = 0; index < 3; index++) {
            const newSmokeEffect = new SmokeEffect();
            this._particles.push(newSmokeEffect)
        }
    }

    /**
     * 
     */
    public Update(): void {
        this._particles.forEach(effect => {
            effect.Draw();
        });
    }

    /**
     * 
     * @param particleEffect_ 
     * @param position_ 
     */
    public Play(particleEffect_: ParticleEffect, position_: Vector2): void {
        let findingParticle = true;

        console.log("Got to play method...");

        while (findingParticle) {
            if (this._particles[this._lastIndex].ParticleType == particleEffect_) {
                findingParticle = false;
                console.log("Playing new particle effect");
                this._particles[this._lastIndex].Play(position_);
            }
            this._lastIndex = (this._lastIndex + 1 >= this._particles.length) ? 
                0 : this._lastIndex + 1;
        }
    }
}