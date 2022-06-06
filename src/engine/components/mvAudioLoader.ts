import { Engine } from "../mvEngine";
import { LoadableAudio } from "../types/LoadableAudio";

/**
 * Responsible for loading all audio resources required by the game.
 */
export class MVAudioLoader {

    //#region Data Fields
    /**
     * Flag that determines when audio is completely loaded.
     */
    private _finishedLoading: boolean = false;

    /**
     * A list of strings used to store all required resources by URL.
     */
    private _allAudio: string[] = [];

    /**
     * Stores all loaded audio resources for playing later in the application.
     */
    private _loadedAudio: LoadableAudio = {};
    //#endregion

    /**
     * Gets whether or not resources have finished loading.
     * @returns boolean - True if resources are finished loading.
     */
    get Loaded(): boolean {
        return this._finishedLoading;
    }

    /**
     * Adds a new resource by URL to the loading sequence.
     * @param audioURLs_ - An array of audio URLs to load.
     * @returns void
     */
    public Add(audioURLs_: string[]): void {

        //Add each element to the _allAudio array.
        audioURLs_.forEach(audioURL => {
            this._allAudio.push(audioURL);
        });
    }

    /**
     * This method is called once all resources have been added to the queue
     * and loading can occur. After audio is finished loading the engine is started.
     * @returns void
     */
    public LoadAll(): void {
        
        console.log("Started loading audio");

        // Loop through all audio URLs and create a promise to load each one individually.
        // Resolve when a load is successful and add the new resource to the global _loadedAudio list.
        let promiseToLoadAudio = this._allAudio.map((audioURL) => {
            let prom = new Promise<void>((resolve, reject) => {
                const newResource = new Audio(audioURL);
                newResource.addEventListener('canplaythrough', () => {
                    this._loadedAudio[audioURL] = newResource;
                    resolve();
                });                
            });
            return prom;
        });
        
        // When all resources have resolved ping the engine to start.
        Promise.all(promiseToLoadAudio).then(() => {
            Engine.Start();
        });
    }

    /**
     * Gets an audio element that has been previously loaded and is ready for playing.
     * @param audioURL_ - An audio resource by URL to search for.
     * @returns HTMLAudioElement - The audio matching the requested URL.
     */
    public Get(audioURL_: string): HTMLAudioElement {
        return this._loadedAudio[audioURL_];
    }
}