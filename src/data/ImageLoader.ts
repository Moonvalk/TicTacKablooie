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
    static BUTTON = './dist/data/images/Button.png';
    static BUTTON_HOVER = './dist/data/images/Button_Hover.png';
    static HEART = './dist/data/images/Heart.png';
    static HEART_EMPTY = './dist/data/images/Heart_Empty.png';
    static TILE_EMPTY = './dist/data/images/Tiles/Tile_Empty.png';
    static TILE_X = './dist/data/images/Tiles/Tile_X.png';
    static TILE_O = './dist/data/images/Tiles/Tile_O.png';
    static TILE_HOVER_X = './dist/data/images/Tiles/Tile_Hover_X.png';
    static TILE_HOVER_O = './dist/data/images/Tiles/Tile_Hover_O.png';
    static TILE_WINNING_X = './dist/data/images/Tiles/Tile_Winning_X.png';
    static TILE_WINNING_O = './dist/data/images/Tiles/Tile_Winning_O.png';
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
    ImageLibrary.BUTTON,
    ImageLibrary.BUTTON_HOVER,
    ImageLibrary.HEART,
    ImageLibrary.HEART_EMPTY,
    ImageLibrary.TILE_EMPTY,
    ImageLibrary.TILE_X,
    ImageLibrary.TILE_O,
    ImageLibrary.TILE_HOVER_X,
    ImageLibrary.TILE_HOVER_O,
    ImageLibrary.TILE_WINNING_O,
    ImageLibrary.TILE_WINNING_X
]);
