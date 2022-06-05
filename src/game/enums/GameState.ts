/**
 * Provides an index for each game state. These are used to determine active scene.
 */
export enum GameState {
    /**
     * The game is currently in the main menu.
     */
    MainMenu,

    /**
     * The game is actively being played.
     */
    Gameplay,

    /**
     * The total number of elements in this enum.
     */
    Total
}
