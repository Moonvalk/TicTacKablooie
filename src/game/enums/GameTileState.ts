/**
 * Provides an index for each possible game tile state.
 */
 export enum GameTileState {
    /**
     * This tile is empty and has not been selected.
     */
    Empty,

    /**
     * This tile is hovered and will display a marking.
     */
    Hovered,

    /**
     * This tile has been selected, is marked, and cannot be changed by the player.
     */
    Marked,

    /**
     * This tile partakes in a winning combination and cannot be adjusted by players.
     */
    Winning
}