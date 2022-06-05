import { Scene } from "../models/Scene";
import { MVText } from "../../engine/components/mvText";
import { MVTextAlignment } from "../../engine/enums/mvTextAlignment";
import { MVFontStyle } from "../../engine/enums/mvFontStyle";
import { GameBoard } from "../objects/GameBoard";
import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { GameWinner } from "../enums/GameWinner";
import { PlayerHealth } from "../objects/PlayerHealth";
import { MVButton } from "../../engine/components/mvButton";
import { Engine } from "../../engine/mvEngine";
import { GameState } from "../enums/GameState";
import { Strings } from "../../data/Strings";

/**
 * Scene for displaying and handling gameplay.
 */
export class GameplayScene implements Scene{

    //#region Data Fields
    /**
     * This value is used to request that the SceneHandler switches scene.
     */
    public RequestScene: number = -1;

    /**
     * Text component used to display turn instructions.
     */
    private _instructionText: MVText = new MVText("YOUR TURN, ");

    /**
     * Text component for displaying which player's turn it is currently.
     */
    private _playerTurnText: MVText = new MVText("PLAYER 1");

    /**
     * Text component for displaying the player 1 title.
     */
    private _player1Text: MVText = new MVText("PLAYER 1");

    /**
     * Text component for displaying the player 2 title.
     */
    private _player2Text: MVText = new MVText("PLAYER 2");

    /**
     * Health display component for player 1.
     */
    private _player1Health: PlayerHealth;

    /**
     * Heath display component for player 2.
     */
    private _player2Health: PlayerHealth;

    /**
     * Stores reference to the game board. This is the main object for gameplay.
     */
    private _gameBoard: GameBoard;

    /**
     * Flag that tracks when the full game is over and a player is out of health.
     */
    private _fullGameOver: boolean = false;

    /**
     * A value used as a timer to keep game results up for player viewing.
     */
     private _gameResultTimer: number = 0;

     /**
      * The total number of frames that must pass for game results to be viewable.
      */
     private _gameResultWaitDuration: number = 500;

     /**
      * The rematch button displayed at the end of gameplay.
      */
    private _rematchButton: MVButton;

    /**
     * The menu button displayed at the end of gameplay.
     */
    private _menuButton: MVButton;
    //#endregion

    /**
     * Builds game board, text elements, and player life heart displays.
     */
    public constructor() {

        // Instantiate new text items with updating styling.
        this.setupTextElements();
        
        // Build new game board.
        this._gameBoard = new GameBoard();

        // Build health components.
        this._player1Health = new PlayerHealth(
            ImageLoader.Get(ImageLibrary.HEART),
            ImageLoader.Get(ImageLibrary.HEART_EMPTY),
            { x: 240, y: 350 }
        );
        this._player2Health = new PlayerHealth(
            ImageLoader.Get(ImageLibrary.HEART),
            ImageLoader.Get(ImageLibrary.HEART_EMPTY),
            { x: 1560, y: 350 }
        );

        // Build new buttons for end of gameplay.
        this._rematchButton = new MVButton(
            ImageLoader.Get(ImageLibrary.BUTTON),
            { x: 820, y: 600 },
            'REMATCH'
        );
        this._menuButton = new MVButton(
            ImageLoader.Get(ImageLibrary.BUTTON),
            { x: 1100, y: 600 },
            'MENU'
        );
    }

    //#region Public Methods
    /**
     * Play method for this Scene.
     * @returns void
     */
    public Play(): void {

        // Render all text elements.
        this._instructionText.Draw();
        this._playerTurnText.Draw();
        this._player1Text.Draw();
        this._player2Text.Draw();

        // Render player health display.
        this._player1Health.Draw();
        this._player2Health.Draw();

        if (!this._fullGameOver) {

            if (this._gameBoard.GameWinner !== GameWinner.None) {
                if (this._gameResultTimer > 0) {
                    this._gameResultTimer -= 1;
                } else {
                    this._gameBoard.Reset();
                    if (this._player1Health.HP === 0 || this._player2Health.HP === 0) {
                        this._fullGameOver = true;
                        return;
                    }
                }
            }

            // Render the game board while still actively playing.
            this.handleGameBoard();
        } else {

            // Determine if any button presses are made.
            if (this._rematchButton.IsHovered(Engine.MousePosition)) {
                if (Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this._fullGameOver = false;
                }
            } else if (this._menuButton.IsHovered(Engine.MousePosition)) {
                if (Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this.RequestScene = GameState.MainMenu;
                    this._fullGameOver = false;
                }
            }

            // Render 'Rematch' and 'Menu' buttons now.
            this._rematchButton.Draw();
            this._menuButton.Draw();
        }
        
    }
    //#endregion

    //#region Private Methods
    /**
     * Handles the game board rendering and logic updates.
     * @returns void
     */
    private handleGameBoard(): void {
        
        // Play game board and listen for update requests.
        this._gameBoard.Play();


        if (this._gameBoard.RequestUpdate) {
            this._gameBoard.RequestUpdate = false;

            // If an update is requested while no winner has been decided...
            if (this._gameBoard.GameWinner === GameWinner.None) {

                // Display active game stats and text.
                this._instructionText.Transform.SetPosition(900, 960);
                this._instructionText.SetValue(Strings._GAME_ACTIVE_TEXT);
                if (this._gameBoard.PlayerTurn === 0) {
                    this._playerTurnText.SetValue("PLAYER 1");
                    this._playerTurnText.SetColor(254, 234, 0);
                } else {
                    this._playerTurnText.SetValue("PLAYER 2");
                    this._playerTurnText.SetColor(45, 242, 239);
                }

            } else if (this._gameBoard.GameWinner === GameWinner.Tie) {

                // Handle tie scenario by updating text and delaying next game.
                this._instructionText.Transform.SetPosition(960, 960);
                this._instructionText.SetValue(Strings._GAME_TIED_TEXT);
                this._playerTurnText.SetValue("");
                this._gameResultTimer = this._gameResultWaitDuration;
            } else {

                // Handle a winning game by updating display, health, and delaying the potential next game.
                this._instructionText.Transform.SetPosition(900, 960);
                this._instructionText.SetValue(Strings._GAME_WIN_TEXT);

                if (this._gameBoard.GameWinner === GameWinner.Player1) {
                    this._player2Health.LoseHealth();
                } else if (this._gameBoard.GameWinner === GameWinner.Player2) {
                    this._player1Health.LoseHealth();
                }
                this._gameResultTimer = this._gameResultWaitDuration;
            }
        }
    }

    /**
     * Sets up all text elements with new styling/positions.
     * @returns void
     */
    private setupTextElements(): void {
        this._instructionText.Transform.SetPosition(900, 960);
        this._instructionText.SetFontProperties("Oswald-Regular", 32, MVTextAlignment.Center, MVFontStyle.Italic);
        this._instructionText.SetMaxWidth(300);
        this._instructionText.SetColor(73, 83, 97);

        this._playerTurnText.Transform.SetPosition(1035, 960);
        this._playerTurnText.SetFontProperties("Oswald-Regular", 32, MVTextAlignment.Center, MVFontStyle.Italic);
        this._playerTurnText.SetMaxWidth(300);
        this._playerTurnText.SetColor(254, 234, 0);

        this._player1Text.Transform.SetPosition(300, 300);
        this._player1Text.SetFontProperties("Oswald-Regular", 32, MVTextAlignment.Center, MVFontStyle.Italic);
        this._player1Text.SetMaxWidth(300);
        this._player1Text.SetColor(254, 234, 0);

        this._player2Text.Transform.SetPosition(1620, 300);
        this._player2Text.SetFontProperties("Oswald-Regular", 32, MVTextAlignment.Center, MVFontStyle.Italic);
        this._player2Text.SetMaxWidth(300);
        this._player2Text.SetColor(45, 242, 239);
    }
    //#endregion
}