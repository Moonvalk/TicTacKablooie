import { MVAudioLoader } from "../engine/components/mvAudioLoader";

/**
 * Static class holding URLs for each audio component by the game.
 */
 export class AudioLibrary {
    static MUSIC = './dist/data/audio/music.mp3';
    static EXPLOSION1 = './dist/data/audio/explosion1.wav';
    static EXPLOSION2 = './dist/data/audio/explosion2.wav';
    static EXPLOSION3 = './dist/data/audio/explosion3.wav';
    static EXPLOSION4 = './dist/data/audio/explosion4.wav';
    static EXPLOSION5 = './dist/data/audio/explosion5.wav';
    static EXPLOSION6 = './dist/data/audio/explosion6.wav';
    static MENU_HOVER = './dist/data/audio/menuhover.wav';
    static HOVER1 = './dist/data/audio/hover1.wav';
    static HOVER2 = './dist/data/audio/hover2.wav';
    static HOVER3 = './dist/data/audio/hover3.wav';
    static MARK1 = './dist/data/audio/mark1.wav';
    static MARK2 = './dist/data/audio/mark2.wav';
    static MARK3 = './dist/data/audio/mark3.wav';
    static MARK4 = './dist/data/audio/mark3.wav';
    static MARK5 = './dist/data/audio/mark3.wav';
    static MAIN_MENU = './dist/data/audio/mainmenu.wav';
    static MENU1 = './dist/data/audio/menu1.wav';
    static MENU2 = './dist/data/audio/menu2.wav';
    static MENU3 = './dist/data/audio/menu3.wav';
    static PLAY = './dist/data/audio/play.wav';
    static RESTART = './dist/data/audio/restart.wav';
}

/**
 * Build a new audio loader and supply all AudioLibrary URLs. On application
 * start these resources will all be loaded and later accesible by AudioLibrary name.
 */
export const AudioLoader = new MVAudioLoader();
AudioLoader.Add([
    AudioLibrary.MUSIC,
    AudioLibrary.EXPLOSION1,
    AudioLibrary.EXPLOSION2,
    AudioLibrary.EXPLOSION3,
    AudioLibrary.EXPLOSION4,
    AudioLibrary.EXPLOSION5,
    AudioLibrary.EXPLOSION6,
    AudioLibrary.MENU_HOVER,
    AudioLibrary.HOVER1,
    AudioLibrary.HOVER2,
    AudioLibrary.HOVER3,
    AudioLibrary.MARK1,
    AudioLibrary.MARK2,
    AudioLibrary.MARK3,
    AudioLibrary.MARK4,
    AudioLibrary.MARK5,
    AudioLibrary.MAIN_MENU,
    AudioLibrary.MENU1,
    AudioLibrary.MENU2,
    AudioLibrary.MENU3,
    AudioLibrary.PLAY,
    AudioLibrary.RESTART
]);
