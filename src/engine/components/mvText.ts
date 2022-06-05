import { MVRenderableType } from "../enums/mvRenderableType";
import { MVRenderable } from "../models/mvRenderable";
import { Transform } from "./Transform";
import { Renderer } from "../mvEngine";
import { MVTextAlignment } from "../enums/mvTextAlignment";
import { MVFontStyle } from "../enums/mvFontStyle"; 

/**
 * Configurable text object that can be rendered to the viewport dynamically.
 */
export class MVText implements MVRenderable {

    //#region Data Fields
    /**
     * Holds the RenderableType used by this Renderable component.
     */
    public RenderType: MVRenderableType = MVRenderableType.Text;

    /**
     * The text value to be displayed when this instance is rendered.
     */
    private _textValue: string;

    /**
     * Holds reference to the Transform that is used to display this instance.
     */
    private _transform: Transform;

    /**
     * Stores the RGB color values used to render text.
     */
    private _color: string = "rgba(0, 0, 0, ";

    /**
     * Stores the opacity/alpha used when rendering text.
     */
    private _alpha: number = 1;

    /**
     * Stores the font size to be applied to text.
     */
    private _fontSize: number = 20;

    /**
     * Stores the font family to be applied to text.
     */
    private _fontFamily: string = "Arial";

    /**
     * Holds the font style (italic, bold, etc.).
     */
    private _fontStyle: MVFontStyle = MVFontStyle.Regular;

    /**
     * Holds the selected text alignment.
     */
    private _alignment: MVTextAlignment = MVTextAlignment.Left;
    //#endregion

    /**
     * Builds a new Transform for this object and stores the provided text data.
     * @param textValue_ - The text value to be displayed for this instance.
     */
    public constructor(textValue_: string) {
        this._transform = new Transform();
        this._textValue = textValue_;
    }

    //#region Public Getters
    /**
     * Gets the contents of this text object. This is a requirement for renderables
     * and is fulfilled by supplying itself.
     * @returns MVText - Returns this object.
     */
    get Contents(): MVText {
        return this;
    }

    /**
     * Gets the text value stored within this instance.
     * @returns string - Text value as a string.
     */
    get Value(): string {
        return this._textValue;
    }

    /**
     * Gets the Transform applied to this instance.
     * @returns Transform - The Transform used to render this instance.
     */
    get Transform(): Transform {
        return this._transform;
    }

    /**
     * Gets the full RGBA() string representing color data for this instance.
     * @returns string - The full RGBA() data string.
     */
    get Color(): string {
        return this._color + this._alpha + ")";
    }

    /**
     * Gets the font style applied to text when rendered.
     * @returns string - The font style as a parsable string.
     */
    get FontStyle(): string {
        switch(this._fontStyle) {
            default:
            case MVFontStyle.Regular:
                return "";
            case MVFontStyle.Italic:
                return "italic ";
            case MVFontStyle.Bold:
                return "bold ";
        }
    }

    /**
     * Gets the font size applied to this text when rendered.
     * @returns number - The font size in pixels.
     */
    get FontSize(): number {
        return this._fontSize;
    }

    /**
     * Gets the full font properties list used to change rendering of text to DOM canvas elements.
     * @returns string - The full font properties string.
     */
    get Font(): string {
        return (
            this.FontStyle +
            this._fontSize * Renderer.Resolution.x) +
            'px ' + this._fontFamily;
    }

    /**
     * Gets the text alignment applied to text when rendered.
     * @returns CanvasTextAlign - A string that is parsable as a matching canvas text alignment.
     */
    get Alignment(): CanvasTextAlign {
        switch(this._alignment) {
            default:
            case MVTextAlignment.Left:
                return "left";
            case MVTextAlignment.Right:
                return "right";
            case MVTextAlignment.Center:
                return "center";
        }
    }
    //#endregion

    //#region Public Methods
    /**
     * Adds this text instance to the render queue for this frame.
     * @returns void
     */
    public Draw(): void {
        Renderer.AddToRenderQueue(this);
    }

    /**
     * Sets the RGB color used to render this text instance.
     * @param red_ - Red value (0 - 255).
     * @param green_ - Green value (0 - 255).
     * @param blue_ - Blue value (0 - 255).
     * @returns void
     */
    public SetColor(red_: number, green_: number, blue_: number): void {
        this._color = "rgba(" + red_ + ", " + green_ + ", " + blue_ + ", ";
    }

    /**
     * Sets the alpha/opacity used when rendering.
     * @param alpha_ - The alpha value (0.0 - 1.0).
     * @returns void
     */
    public SetAlpha(alpha_: number): void {
        this._alpha = alpha_;
    }

    /**
     * Sets the font size in pixels used when rendering text.
     * @param size_ - The font size in pixels.
     * @returns void
     */
    public SetFontSize(size_: number): void {
        this._fontSize = size_;
    }

    /**
     * Sets the font style.
     * @param mvFontStyle_ - The font style to set this instance to.
     * @returns void
     */
    public SetFontStyle(mvFontStyle_: MVFontStyle): void {
        this._fontStyle = mvFontStyle_;
    }

    /**
     * Sets the font family.
     * @param fontName_ - The name of the font to use.
     * @returns void
     */
    public SetFontFamily(fontName_: string): void {
        this._fontFamily = fontName_;
    }

    /**
     * Sets the maximum width to display text.
     * @param maxWidth_ - The maximum displayed width in pixels.
     * @returns void
     */
    public SetMaxWidth(maxWidth_: number): void {
        this.Transform.SetSize(maxWidth_, this.Transform.Size.y);
    }

    /**
     * Sets the text alignment within container for text.
     * @param alignment_ - The alignment to used when displaying this text instance.
     * @returns void
     */
    public SetTextAlignment(alignment_: MVTextAlignment): void {
        this._alignment = alignment_;
    }

    /**
     * Sets the text value to be displayed by this instance.
     * @param value_ - The string value to store/display.
     * @returns void
     */
    public SetValue(value_: string): void {
        this._textValue = value_;
    }

    /**
     * Sets font family, font size, text alignment, and font style all at once.
     * @param fontFamily_ - The name of the font to use.
     * @param fontSize_ - The size of the font in pixels.
     * @param textAlignment_ - The alignment to used when displaying this text instance.
     * @param fontStyle_ - The font style to set this instance to.
     * @returns void
     */
    public SetFontProperties(
        fontFamily_: string,
        fontSize_: number,
        textAlignment_: MVTextAlignment,
        fontStyle_: MVFontStyle
    ): void {
        this.SetFontFamily(fontFamily_);
        this.SetFontSize(fontSize_);
        this.SetTextAlignment(textAlignment_);
        this.SetFontStyle(fontStyle_);
    }
    //#endregion
}