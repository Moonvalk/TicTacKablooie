/**
 * Contract for available scenes requiring that they can request
 * scene updates and have an available Play method.
 */
export interface Scene {
    RequestScene: number;
    Play(): void;
}
