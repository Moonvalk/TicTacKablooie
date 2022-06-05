/**
 * Provides an index for each available game outcome state.
 */
export enum GameWinner {
    /**
     * There is no current game winner.
     */
    None,

    /**
     * The game was unable to be won and therefore is a tie.
     */
    Tie,

    /**
     * The game was won by player 1.
     */
    Player1,

    /**
     * The game was won by player 2.
     */
    Player2
}