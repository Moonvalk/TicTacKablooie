import { MVSprite } from "../../engine/components/mvSprite";
import { Vector2 } from "../../engine/types/Vector";
import { GameTileState } from "../enums/GameTileState";
import { GameTileMark } from "../enums/GameTileMark";
import { Transform } from "../../engine/components/Transform";
import { ImageLibrary, ImageLoader } from "../../data/ImageLoader";
import { AudioLibrary, AudioLoader } from "../../data/AudioLoader";
import { MVAudioGroup } from "../../engine/components/mvAudioGroup";

/**
 * Container representing a singular game tile on the game board.
 */
export class GameTile {
    
    //#region Data Fields
    /**
     * Sprite to be displayed on this tile.
     */
    private _sprite: MVSprite;

    /**
     * Holds reference to the active state of this tile.
     */
    private _state: GameTileState = GameTileState.Empty;

    /**
     * Holds reference to the active marking on this tile.
     */
    private _markedAs: GameTileMark = GameTileMark.None;

    /**
     * Used to play hover audio whenever this instance is hovered over.
     */
    private _hoverAudio: MVAudioGroup;
    //#endregion

    /**
     * Builds a new sprite for being displayed on this tile and positions
     * itself to the requested Vector2 screen point.
     * @param position_ - The position to display this tile at.
     */
    public constructor(position_: Vector2) {
        this._sprite = new MVSprite(ImageLoader.Get(ImageLibrary.TILE_EMPTY));
        this.Transform.SetPosition(position_.x, position_.y);

        this._hoverAudio = new MVAudioGroup([
            AudioLoader.Get(AudioLibrary.HOVER1),
            AudioLoader.Get(AudioLibrary.HOVER2),
            AudioLoader.Get(AudioLibrary.HOVER3)
        ]);
    }

    //#region Public Getters
    /**
     * Gets the Sprite transform.
     * @returns Transform - The Sprite Transform used for rendering.
     */
    get Transform(): Transform {
        return this._sprite.Transform;
    }

    /**
     * Gets the current state of this tile.
     * @returns GameTileState - Index of GameTileState representing the state of this tile.
     */
    get State(): GameTileState {
        return this._state;
    }

    /**
     * Gets the current marking on this tile.
     * @returns GameTileMark - The marking displayed on this tile.
     */
    get Marking(): GameTileMark {
        return this._markedAs;
    }
    //#endregion

    //#region Public Methods
    /**
     * Checks if this tile is being hovered.
     * @param mousePosition_ - The current mouse position on the DOM.
     * @returns boolean - Returns true if this tile is actively being hovered.
     */
    public Check(mousePosition_: Vector2): boolean {
        if (this.Transform.Rect.Contains(mousePosition_.x, mousePosition_.y)) {
            return true;
        }
        return false;
    }

    /**
     * Sets the state and marking displayed on this tile.
     * @param state_ - The GameTileState to be updated to.
     * @param marking_ - The GameTileMark to update to.
     * @returns void
     */
    public Set(state_: GameTileState, marking_: GameTileMark): void {

        // Ignore updates to this tile when state has not updated.
        if (this._state == state_) {
            return;
        }

        // Store new state and marking.
        this._state = state_;
        this._markedAs = marking_;

        // Now update image to match new state / marking combination.
        switch(this._state) {
            default:
            case GameTileState.Empty:
                this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_EMPTY));
                break;

            case GameTileState.Hovered:
                this._hoverAudio.Play();
                if (this._markedAs === GameTileMark.O) {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_HOVER_O));
                } else {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_HOVER_X));
                }
                break;

            case GameTileState.Marked:
                if (this._markedAs === GameTileMark.O) {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_O));
                } else {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_X));
                }
                break;

            case GameTileState.Winning:
                if (this._markedAs === GameTileMark.O) {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_WINNING_O));
                } else {
                    this._sprite.SetImage(ImageLoader.Get(ImageLibrary.TILE_WINNING_X));
                }
                break;
        }
    }

    /**
     * Renders this tile to the screen.
     * @returns void
     */
    public Draw(): void {
        this._sprite.Draw();
    }
    //#endregion
}