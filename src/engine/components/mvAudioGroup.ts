import { ExtMath } from "../util/extmath";

/**
 * A container for a group of audio resources.
 */
export class MVAudioGroup {

    //#region Data Fields
    /**
     * Should audio resources be randomized each play?
     */
    public Randomize: boolean = false;

    /**
     * The next audio resource index to play.
     */
    private _nextAudioIndex: number = 0;

    /**
     * Stores all audio resources available to this group.
     */
    private _audioResources: HTMLAudioElement[] = [];
    //#endregion

    /**
     * Adds audio resources to this group and initializes it.
     * @param audioResources_ - Array of audio resources.
     */
    public constructor(audioResources_: HTMLAudioElement[]) {
        this._audioResources = audioResources_;
    }

    //#region Public Methods
    /**
     * Plays an audio resource from this group.
     * @returns void
     */
    public Play(): void {
        if (this._audioResources[this._nextAudioIndex].currentTime > 0 ||
            this._audioResources[this._nextAudioIndex].paused) {
            this._audioResources[this._nextAudioIndex].pause();
            this._audioResources[this._nextAudioIndex].currentTime = 0;
        }
        this._audioResources[this._nextAudioIndex].play();

        if (this.Randomize) {
            this._nextAudioIndex = ExtMath.GetRandomInt(this._audioResources.length - 1);
            return;
        }

        this._nextAudioIndex = (this._nextAudioIndex + 1 >= this._audioResources.length) ?
            0 : this._nextAudioIndex + 1;
    }
    //#endregion
}