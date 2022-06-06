import { MVImageLoader } from "../engine/components/mvImageLoader";

/**
 * Static class holding URLs for each image required by the game.
 */
export class ImageLibrary {
    static BACKGROUND = './dist/data/images/Background.png';
    static CURSOR = './dist/data/images/Cursor.png';
    static MOONVALK_LOGO = './dist/data/images/Moonvalk_Logo.png';
    static LOGO_ICON = './dist/data/images/Logo_Icon.png';
    static LOGO_TEXT = './dist/data/images/Logo_Text.png';
    static HEART = './dist/data/images/Heart.png';
    static HEART_EMPTY = './dist/data/images/Heart_Empty.png';
    static TILE_EMPTY = './dist/data/images/Tiles/Tile_Empty.png';
    static TILE_X = './dist/data/images/Tiles/Tile_X.png';
    static TILE_O = './dist/data/images/Tiles/Tile_O.png';
    static TILE_HOVER_X = './dist/data/images/Tiles/Tile_Hover_X.png';
    static TILE_HOVER_O = './dist/data/images/Tiles/Tile_Hover_O.png';
    static TILE_WINNING_X = './dist/data/images/Tiles/Tile_Winning_X.png';
    static TILE_WINNING_O = './dist/data/images/Tiles/Tile_Winning_O.png';
    static RESTART_BUTTON = './dist/data/images/Buttons/RestartButton_Idle.png';
    static RESTART_BUTTON_HOVER = './dist/data/images/Buttons/RestartButton_Hover.png';
    static MENU_BUTTON = './dist/data/images/Buttons/MenuButton_Idle.png';
    static MENU_BUTTON_HOVER = './dist/data/images/Buttons/MenuButton_Hover.png';
    static REMATCH_BUTTON = './dist/data/images/Buttons/RematchButton_Idle.png';
    static REMATCH_BUTTON_HOVER = './dist/data/images/Buttons/RematchButton_Hover.png';
    static PLAY_BUTTON = './dist/data/images/Buttons/PlayButton_Idle.png';
    static PLAY_BUTTON_HOVER = './dist/data/images/Buttons/PlayButton_Hover.png';
    static CREDITS_BUTTON = './dist/data/images/Buttons/CreditsButton_Idle.png';
    static CREDITS_BUTTON_HOVER = './dist/data/images/Buttons/CreditsButton_Hover.png';
    static EXIT_BUTTON = './dist/data/images/Buttons/ExitButton_Idle.png';
    static EXIT_BUTTON_HOVER = './dist/data/images/Buttons/ExitButton_Hover.png';
    static TAGLINE_TEXT = './dist/data/images/Tagline.png';
    static PLAYER_SIGN_X = './dist/data/images/PlayerSign_X.png';
    static PLAYER_SIGN_O = './dist/data/images/PlayerSign_O.png';
    static SMOKE_PARTICLE = './dist/data/images/SmokeParticle.png';
    static EXPLOSION = './dist/data/images/Explosion.png';
}

/**
 * Build a new image loader and supply all ImageLibrary URLs. On application
 * start these images will all be loaded and later accesible by ImageLibrary name.
 */
export const ImageLoader = new MVImageLoader();
ImageLoader.Add([
    ImageLibrary.BACKGROUND,
    ImageLibrary.CURSOR,
    ImageLibrary.MOONVALK_LOGO,
    ImageLibrary.LOGO_ICON,
    ImageLibrary.LOGO_TEXT,
    ImageLibrary.HEART,
    ImageLibrary.HEART_EMPTY,
    ImageLibrary.TILE_EMPTY,
    ImageLibrary.TILE_X,
    ImageLibrary.TILE_O,
    ImageLibrary.TILE_HOVER_X,
    ImageLibrary.TILE_HOVER_O,
    ImageLibrary.TILE_WINNING_O,
    ImageLibrary.TILE_WINNING_X,
    ImageLibrary.RESTART_BUTTON,
    ImageLibrary.RESTART_BUTTON_HOVER,
    ImageLibrary.MENU_BUTTON,
    ImageLibrary.MENU_BUTTON_HOVER,
    ImageLibrary.REMATCH_BUTTON,
    ImageLibrary.REMATCH_BUTTON_HOVER,
    ImageLibrary.PLAY_BUTTON,
    ImageLibrary.PLAY_BUTTON_HOVER,
    ImageLibrary.CREDITS_BUTTON,
    ImageLibrary.CREDITS_BUTTON_HOVER,
    ImageLibrary.EXIT_BUTTON,
    ImageLibrary.EXIT_BUTTON_HOVER,
    ImageLibrary.TAGLINE_TEXT,
    ImageLibrary.PLAYER_SIGN_X,
    ImageLibrary.PLAYER_SIGN_O,
    ImageLibrary.SMOKE_PARTICLE,
    ImageLibrary.EXPLOSION
]);
