/**
 * Type representing a loadable audio resource.
 * These resources are meant to be preloaded and accessed by URL string.
 */
export type LoadableAudio = {
    [key: string]: HTMLAudioElement;
};