import { Vector2 } from "../../engine/types/Vector";
import { ParticleEffect } from "../enums/ParticleEffect";

/**
 * 
 */
export interface Particle {
    ParticleType: ParticleEffect;
    Play(position_: Vector2): void;
    Draw(): boolean;
}