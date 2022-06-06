import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";

/**
 * Contract for an object which will be playable as a particle effect.
 */
export interface Particle {
    ParticleType: ParticleEffect;
    Play(position_: Vector2): void;
    Draw(): void;
}