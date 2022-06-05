/**
 * Type representing a loadable image.
 * These images are meant to be preloaded and accessed by URL string.
 */
type LoadableImage = {
    [key: string]: HTMLImageElement;
};