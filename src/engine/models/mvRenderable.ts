import { MVRenderableType } from "../enums/mvRenderableType";
import { Transform } from "../components/Transform";
import { MVText } from "../components/mvText";

/**
 * Contract for a renderable object. This is used by the MVViewport to assist
 * in determining applicable objects for rendering.
 */
export interface MVRenderable {

    /**
     * The type of rendering that should be used for this instance.
     */
    RenderType: MVRenderableType;

    /**
     * A getter for the internal element used for rendering directly.
     */
    get Contents(): HTMLImageElement | MVText;

    /**
     * A getter for the internal Transform data of any renderable component.
     */
    get Transform(): Transform;
}
