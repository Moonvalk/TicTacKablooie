import { Engine } from "../../engine/mvEngine";
import { GameTile } from "./GameTile"
import { GameTileState } from "../enums/GameTileState";
import { GameTileMark } from "../enums/GameTileMark";
import { GameWinner } from "../enums/GameWinner";
import { particleHandler } from "../../app";
import { ParticleEffect } from "../enums/ParticleEffect";

/**
 * Object for handling the game board.
 */
export class GameBoard {

    //#region Data Fields
    /**
     * Flag used to request an update to the parent GameplayScene object.
     */
    public RequestUpdate: boolean = false;

    /**
     * Tracks which player's turn is active during gameplay.
     */
    private _playerTurn: number = 0;

    /**
     * Tracks the state of the game.
     */
    private _gameOver: boolean = false;

    /**
     * Holds reference to all game tiles.
     */
    private _gameTiles: GameTile[] = [];

    /**
     * Tracks the current game winner.
     */
    private _gameWinner: GameWinner = GameWinner.None;

    /**
     * Stores the last winning combination for effects.
     */
    private _lastWinningCombination: number[] = [3];

    /**
     * A timer value used to delay each explosion effect when a game is won.
     */
    private _explosionEffectTimer: number = 0;

    /**
     * The explosion effect duration used to offset each trigger.
     */
    private _explosionEffectDuration: number = 10;

    /**
     * The next available index of the last winning combination to play an effect at.
     */
    private _explosionEffectIndex: number = 0;

    /**
     * All possible winning combinations based on tile positions.
     */
    private _winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //#endregion

    /**
     * Creates new game tiles in a grid for playing.
     */
    public constructor() {

        // Loop through each row and push new tiles to be interacted with.
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                const newTile = new GameTile({
                    x: 820 + (140 * i),
                    y: 510 + (140 * j)
                });
                this._gameTiles.push(newTile);
            }
        }
        this.Reset();
    }

    //#region Public Getters
    /**
     * Gets the current player turn.
     * @returns number - The index of the current player.
     */
    get PlayerTurn(): number {
        return this._playerTurn;
    }

    /**
     * Gets the current game winner, if applicable.
     * @returns GameWinner - The GameWinner of the current board.
     */
    get GameWinner(): GameWinner {
        return this._gameWinner;
    }
    //#endregion

    //#region Public Methods
    /**
     * Displays and updates the game board each frame.
     * @returns void
     */
    public Play(): void {

        // Handle playing particle effects when a win has recently occurred.
        if (this._gameOver && this._explosionEffectIndex <= 2) {
            if (this._explosionEffectTimer > 0) {
                this._explosionEffectTimer -= Engine.DeltaTime;
            } else {
                const position = this._gameTiles[this._lastWinningCombination[this._explosionEffectIndex]].Transform.Position;
                particleHandler.Play(ParticleEffect.Explosion, position);
                particleHandler.Play(ParticleEffect.Smoke, position);
                this._explosionEffectTimer = this._explosionEffectDuration;
                this._explosionEffectIndex++;
            }
        }

        // Loop through each game tile and determine if a hover/press has occurred.
        // Continue to set new states for tiles as changes are made.
        let checkGameOutcome = false;
        this._gameTiles.forEach(tile => {
            if (!this._gameOver && tile.State !== GameTileState.Marked) {
                if (tile.Check(Engine.MousePosition)) {

                    // Determine potential mark that will be displayed based on player turn.
                    const mark = (this._playerTurn === 0) ? GameTileMark.X : GameTileMark.O;
                    
                    if (Engine.IsUserClicking) {

                        // This applicable tile was clicked so now we can mark it and push forward.
                        tile.Set(GameTileState.Marked, mark);
                        this._playerTurn = (this._playerTurn === 0) ? 1 : 0;
                        this.RequestUpdate = true;
                        checkGameOutcome = true;

                        // Play a particle effect here.
                        particleHandler.Play(ParticleEffect.Smoke, tile.Transform.Position);

                    } else {
                        tile.Set(GameTileState.Hovered, mark);
                    }
                } else {
                    tile.Set(GameTileState.Empty, GameTileMark.None);
                }
            }

            // Render each tile when finished.
            tile.Draw();

            // If a change was made to the board let's determine if the game has an outcome yet.
            if (checkGameOutcome && !this._gameOver) {
                this.determineGameOutcome();
            }
        });
    }

    /**
     * Resets this game board for a new game.
     * @returns void
     */
    public Reset(): void {

        // Update all game tile states.
        this._gameTiles.forEach(tile => {
            tile.Set(GameTileState.Empty, GameTileMark.None);
        });
        this._gameOver = false;
        this._gameWinner = GameWinner.None;
        this.RequestUpdate = true;
        this._explosionEffectIndex = 0;
        this._explosionEffectTimer = 0;
    }
    //#endregion

    //#region Private Methods
    /**
     * Determines whether or not a winning scenario has been met.
     * @returns void
     */
    private determineGameOutcome(): void {

        // Track if the round was won while checking scenarios.
        let roundWon = false;
        for (let index = 0; index <= 7; index++) {

            // Get each winning condition and the tiles located there.
            const winCondition = this._winningConditions[index];
            const a = this._gameTiles[winCondition[0]];
            const b = this._gameTiles[winCondition[1]];
            const c = this._gameTiles[winCondition[2]];

            // If ANY tile is unmarked, we can skip.
            if (a.State !== GameTileState.Marked && b.State !== GameTileState.Marked &&
                c.State !== GameTileState.Marked) {
                continue;
            }

            // If these tiles all match, a win has occurred.
            if (a.Marking === b.Marking && b.Marking === c.Marking) {
                roundWon = true;
                a.Set(GameTileState.Winning, a.Marking);
                b.Set(GameTileState.Winning, b.Marking);
                c.Set(GameTileState.Winning, c.Marking);
                this._gameWinner = (a.Marking === GameTileMark.O) ?
                    GameWinner.Player2 : GameWinner.Player1;

                // Store the last winning combination for animations.
                this._lastWinningCombination[0] = winCondition[0];
                this._lastWinningCombination[1] = winCondition[1];
                this._lastWinningCombination[2] = winCondition[2];
                this._explosionEffectIndex = 0;
                break;
            }
        }

        // If the round was not won by winning combination, make a safety check to
        // ensure no tie occurred either.
        if (!roundWon) {

            // Loop through all tiles to see if everything was marked.
            let allTilesMarked = true;
            for (let index = 0; index < this._gameTiles.length; index++) {
                if (this._gameTiles[index].State === GameTileState.Marked) {
                    continue;
                }
                allTilesMarked = false;
                break;
            }

            // A tie has occurred.
            if (allTilesMarked) {
                this._gameWinner = GameWinner.Tie;
                this._explosionEffectIndex = 3;
                roundWon = true;
            }
        }

        // Finally, now that a round was won we can request an update from the GameplayScene.
        if (roundWon) {
            this._gameOver = true;
            this.RequestUpdate = true;
        }
    }
    //#endregion
}