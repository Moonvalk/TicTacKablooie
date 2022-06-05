import { Engine } from "../mvEngine";

/**
 * Responsible for loading all images required by the game.
 */
export class MVImageLoader {

    //#region Data Fields
    /**
     * Flag that determines when images are completely loaded.
     */
    private _finishedLoading: boolean = false;

    /**
     * A list of strings used to store all required images by URL.
     */
    private _allImages: string[] = [];

    /**
     * Stores all loaded images for rendering later in the application.
     */
    private _loadedImages: LoadableImage = {};
    //#endregion

    /**
     * Gets whether or not images have finished loading.
     * @returns boolean - True if images are finished loading.
     */
    get Loaded(): boolean {
        return this._finishedLoading;
    }

    /**
     * Adds a new image by URL to the loading sequence.
     * @param imageURLs_ - An array of images to load.
     * @returns void
     */
    public Add(imageURLs_: string[]): void {

        //Add each element to the _allImages array.
        imageURLs_.forEach(imgURL => {
            this._allImages.push(imgURL);
        });
    }

    /**
     * This method is called once all images have been added to the queue
     * and loading can occur. After images are finished loading the engine is started.
     * @returns void
     */
    public LoadAll(): void {
        
        // Loop through all images and create a promise to load each one individually.
        // Resolve when a load is successful and add the new image to the global _loadedImages list.
        let promiseToLoadImages = this._allImages.map((imgURL) => {
            let prom = new Promise<void>((resolve, reject) => {
                const newImage = new Image();
                newImage.onload = () => {
                    this._loadedImages[imgURL] = newImage;
                    resolve();
                };
                newImage.src = imgURL;
            });
            return prom;
        });
        
        // When all images have resolved ping the engine to start.
        Promise.all(promiseToLoadImages).then(() => {
            Engine.Start();
        });
    }

    /**
     * Gets an image element that has been previously loaded and is ready for rendering.
     * @param imageURL_ - An image by URL to search for.
     * @returns HTMLImageElement - The image matching the requested URL.
     */
    public Get(imageURL_: string): HTMLImageElement {
        return this._loadedImages[imageURL_];
    }
}