/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "particleHandler": () => (/* binding */ particleHandler)
/* harmony export */ });
/* harmony import */ var _game_objects_CursorRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/objects/CursorRenderer */ "./src/game/objects/CursorRenderer.ts");
/* harmony import */ var _game_SceneHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/SceneHandler */ "./src/game/SceneHandler.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/mvBehavior */ "./src/engine/mvBehavior.ts");
/* harmony import */ var _game_objects_ParticleHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/objects/ParticleHandler */ "./src/game/objects/ParticleHandler.ts");





window.onload = function () {
    _data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader.LoadAll();
};
class MVEngineMain extends _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_3__.MVBehavior {
    constructor() {
        super(...arguments);
        this._initialized = false;
    }
    Update() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        sceneHandler = new _game_SceneHandler__WEBPACK_IMPORTED_MODULE_1__.SceneHandler();
        particleHandler = new _game_objects_ParticleHandler__WEBPACK_IMPORTED_MODULE_4__.ParticleHandler();
        cursor = new _game_objects_CursorRenderer__WEBPACK_IMPORTED_MODULE_0__.CursorRenderer(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLibrary.CURSOR));
    }
}
const Main = new MVEngineMain();
let sceneHandler;
let particleHandler;
let cursor;


/***/ }),

/***/ "./src/data/ImageLoader.ts":
/*!*********************************!*\
  !*** ./src/data/ImageLoader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLibrary": () => (/* binding */ ImageLibrary),
/* harmony export */   "ImageLoader": () => (/* binding */ ImageLoader)
/* harmony export */ });
/* harmony import */ var _engine_components_mvImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/components/mvImageLoader */ "./src/engine/components/mvImageLoader.ts");

class ImageLibrary {
}
ImageLibrary.BACKGROUND = './dist/data/images/Background.png';
ImageLibrary.CURSOR = './dist/data/images/Cursor.png';
ImageLibrary.MOONVALK_LOGO = './dist/data/images/Moonvalk_Logo.png';
ImageLibrary.LOGO_ICON = './dist/data/images/Logo_Icon.png';
ImageLibrary.LOGO_TEXT = './dist/data/images/Logo_Text.png';
ImageLibrary.HEART = './dist/data/images/Heart.png';
ImageLibrary.HEART_EMPTY = './dist/data/images/Heart_Empty.png';
ImageLibrary.TILE_EMPTY = './dist/data/images/Tiles/Tile_Empty.png';
ImageLibrary.TILE_X = './dist/data/images/Tiles/Tile_X.png';
ImageLibrary.TILE_O = './dist/data/images/Tiles/Tile_O.png';
ImageLibrary.TILE_HOVER_X = './dist/data/images/Tiles/Tile_Hover_X.png';
ImageLibrary.TILE_HOVER_O = './dist/data/images/Tiles/Tile_Hover_O.png';
ImageLibrary.TILE_WINNING_X = './dist/data/images/Tiles/Tile_Winning_X.png';
ImageLibrary.TILE_WINNING_O = './dist/data/images/Tiles/Tile_Winning_O.png';
ImageLibrary.RESTART_BUTTON = './dist/data/images/Buttons/RestartButton_Idle.png';
ImageLibrary.RESTART_BUTTON_HOVER = './dist/data/images/Buttons/RestartButton_Hover.png';
ImageLibrary.MENU_BUTTON = './dist/data/images/Buttons/MenuButton_Idle.png';
ImageLibrary.MENU_BUTTON_HOVER = './dist/data/images/Buttons/MenuButton_Hover.png';
ImageLibrary.REMATCH_BUTTON = './dist/data/images/Buttons/RematchButton_Idle.png';
ImageLibrary.REMATCH_BUTTON_HOVER = './dist/data/images/Buttons/RematchButton_Hover.png';
ImageLibrary.PLAY_BUTTON = './dist/data/images/Buttons/PlayButton_Idle.png';
ImageLibrary.PLAY_BUTTON_HOVER = './dist/data/images/Buttons/PlayButton_Hover.png';
ImageLibrary.CREDITS_BUTTON = './dist/data/images/Buttons/CreditsButton_Idle.png';
ImageLibrary.CREDITS_BUTTON_HOVER = './dist/data/images/Buttons/CreditsButton_Hover.png';
ImageLibrary.EXIT_BUTTON = './dist/data/images/Buttons/ExitButton_Idle.png';
ImageLibrary.EXIT_BUTTON_HOVER = './dist/data/images/Buttons/ExitButton_Hover.png';
ImageLibrary.TAGLINE_TEXT = './dist/data/images/Tagline.png';
ImageLibrary.PLAYER_SIGN_X = './dist/data/images/PlayerSign_X.png';
ImageLibrary.PLAYER_SIGN_O = './dist/data/images/PlayerSign_O.png';
ImageLibrary.SMOKE_PARTICLE = './dist/data/images/SmokeParticle.png';
const ImageLoader = new _engine_components_mvImageLoader__WEBPACK_IMPORTED_MODULE_0__.MVImageLoader();
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
    ImageLibrary.SMOKE_PARTICLE
]);


/***/ }),

/***/ "./src/data/Strings.ts":
/*!*****************************!*\
  !*** ./src/data/Strings.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strings": () => (/* binding */ Strings)
/* harmony export */ });
class Strings {
}
Strings.GAME_WIN_TEXT = "WINNER!";
Strings.GAME_ACTIVE_TEXT = "YOUR TURN, ";
Strings.GAME_TIED_TEXT = "TIED!";
Strings.CREDITS_URL = "https://moonvalk.com/category/portfolio";
Strings.EXIT_URL = "https://moonvalk.com/";


/***/ }),

/***/ "./src/engine/components/Rectangle.ts":
/*!********************************************!*\
  !*** ./src/engine/components/Rectangle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
class Rectangle {
    constructor(x_, y_, width_, height_) {
        this.Position = { x: x_, y: y_ };
        this.Size = { x: width_, y: height_ };
    }
    Contains(pointX_, pointY_) {
        return (pointX_ > this.Position.x && pointX_ < this.Position.x + this.Size.x &&
            pointY_ > this.Position.y && pointY_ < this.Position.y + this.Size.y);
    }
}


/***/ }),

/***/ "./src/engine/components/Transform.ts":
/*!********************************************!*\
  !*** ./src/engine/components/Transform.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ "./src/engine/components/Rectangle.ts");
/* harmony import */ var _util_extmath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/extmath */ "./src/engine/util/extmath.ts");
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mvEngine */ "./src/engine/mvEngine.ts");



class Transform {
    constructor() {
        this._position = { x: 0, y: 0, z: 0 };
        this._targetSize = { x: 300, y: 300 };
        this._renderSize = { x: 300, y: 300 };
        this._scale = { x: 1, y: 1 };
        this._alpha = 1;
        this._rotation = 0;
    }
    get Position() {
        return this._position;
    }
    get Size() {
        return this._renderSize;
    }
    get Scale() {
        return this._scale;
    }
    get Rotation() {
        return this._rotation;
    }
    get ViewportSize() {
        return { x: this.Size.x * _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.Resolution.x,
            y: this.Size.y * _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.Resolution.y };
    }
    get ViewportPosition() {
        return { x: this.Position.x * _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.Resolution.x,
            y: this.Position.y * _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.Resolution.y };
    }
    get Rect() {
        return new _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(this.ViewportPosition.x - (this.ViewportSize.x / 2), this.ViewportPosition.y - (this.ViewportSize.y / 2), this.ViewportSize.x, this.ViewportSize.y);
    }
    get Alpha() {
        return this._alpha;
    }
    SetFromImageData(image_) {
        if (!image_) {
            return;
        }
        this.SetSize(image_.width, image_.height);
        this._renderSize.x = this._targetSize.x;
        this._renderSize.y = this._targetSize.y;
    }
    SetFromTransform(transform_) {
        this.SetSize(transform_.Size.x, transform_.Size.y);
        this.SetScale(transform_.Scale.x, transform_.Scale.y);
        this.SetPosition(transform_.Position.x, transform_.Position.y);
        this.SetRotation(transform_.Rotation);
    }
    SetScale(scaleX_, scaleY_) {
        this._scale.x = scaleX_;
        this._scale.y = scaleY_;
        this.updateRenderSize();
    }
    SetSize(width_, height_) {
        this._targetSize.x = width_;
        this._targetSize.y = height_;
        this.updateRenderSize();
    }
    SetPosition(positionX_, positionY_) {
        this._position.x = positionX_;
        this._position.y = positionY_;
    }
    SetDepth(depth_) {
        this._position.z = depth_;
    }
    SetRotation(rotationDegrees_) {
        this._rotation = rotationDegrees_ * _util_extmath__WEBPACK_IMPORTED_MODULE_1__.ExtMath.TO_RADIANS;
    }
    Translate(translation_) {
        this.SetPosition(this.Position.x + translation_.x, this.Position.y + translation_.y);
    }
    SetAlpha(opacity_) {
        this._alpha = opacity_;
    }
    updateRenderSize() {
        this._renderSize.x = (this._targetSize.x * this._scale.x);
        this._renderSize.y = (this._targetSize.y * this._scale.y);
    }
}


/***/ }),

/***/ "./src/engine/components/mvButton.ts":
/*!*******************************************!*\
  !*** ./src/engine/components/mvButton.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVButton": () => (/* binding */ MVButton)
/* harmony export */ });
/* harmony import */ var _mvSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _mvText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mvText */ "./src/engine/components/mvText.ts");
/* harmony import */ var _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/mvTextAlignment */ "./src/engine/enums/mvTextAlignment.ts");



class MVButton {
    constructor(idleImage_, hoverImage_, position_, textValue_) {
        this._idleImage = idleImage_;
        this._hoverImage = hoverImage_;
        this._sprite = new _mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(this._idleImage);
        this.Transform.SetPosition(position_.x, position_.y);
        if (textValue_) {
            this._text = new _mvText__WEBPACK_IMPORTED_MODULE_1__.MVText(textValue_);
            this._text.SetColor(255, 255, 255);
            this._text.SetTextAlignment(_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_2__.MVTextAlignment.Center);
            this._text.SetFontSize(36);
            this._text.SetFontFamily("Oswald-Regular");
            this._text.Transform.SetPosition(position_.x, position_.y + (this._text.FontSize / 4));
            this._text.Transform.SetSize(150, this._text.FontSize);
            this._text.Transform.SetRotation(0);
        }
    }
    get Transform() {
        return this._sprite.Transform;
    }
    IsHovered(mousePosition_) {
        const hovered = this.Contains(mousePosition_);
        if (hovered) {
            this._sprite.SetImage(this._hoverImage);
        }
        else {
            this._sprite.SetImage(this._idleImage);
        }
        return hovered;
    }
    Contains(point_) {
        return this._sprite.Transform.Rect.Contains(point_.x, point_.y);
    }
    Draw() {
        var _a;
        this._sprite.Draw();
        (_a = this._text) === null || _a === void 0 ? void 0 : _a.Draw();
    }
}


/***/ }),

/***/ "./src/engine/components/mvImageLoader.ts":
/*!************************************************!*\
  !*** ./src/engine/components/mvImageLoader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVImageLoader": () => (/* binding */ MVImageLoader)
/* harmony export */ });
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvEngine */ "./src/engine/mvEngine.ts");

class MVImageLoader {
    constructor() {
        this._finishedLoading = false;
        this._allImages = [];
        this._loadedImages = {};
    }
    get Loaded() {
        return this._finishedLoading;
    }
    Add(imageURLs_) {
        imageURLs_.forEach(imgURL => {
            this._allImages.push(imgURL);
        });
    }
    LoadAll() {
        let promiseToLoadImages = this._allImages.map((imgURL) => {
            let prom = new Promise((resolve, reject) => {
                const newImage = new Image();
                newImage.onload = () => {
                    this._loadedImages[imgURL] = newImage;
                    resolve();
                };
                newImage.src = imgURL;
            });
            return prom;
        });
        Promise.all(promiseToLoadImages).then(() => {
            _mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.Start();
        });
    }
    Get(imageURL_) {
        return this._loadedImages[imageURL_];
    }
}


/***/ }),

/***/ "./src/engine/components/mvSprite.ts":
/*!*******************************************!*\
  !*** ./src/engine/components/mvSprite.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVSprite": () => (/* binding */ MVSprite)
/* harmony export */ });
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ "./src/engine/components/Transform.ts");
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/mvRenderableType */ "./src/engine/enums/mvRenderableType.ts");



class MVSprite {
    constructor(imageElement_) {
        this.RenderType = _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_2__.MVRenderableType.Image;
        this._image = imageElement_;
        this._transform = new _Transform__WEBPACK_IMPORTED_MODULE_0__.Transform();
        this._transform.SetFromImageData(this._image);
    }
    get Contents() {
        return this._image;
    }
    get Transform() {
        return this._transform;
    }
    Draw() {
        _mvEngine__WEBPACK_IMPORTED_MODULE_1__.Renderer.AddToRenderQueue(this);
    }
    SetImage(imageElement_) {
        this._image = imageElement_;
    }
}


/***/ }),

/***/ "./src/engine/components/mvText.ts":
/*!*****************************************!*\
  !*** ./src/engine/components/mvText.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVText": () => (/* binding */ MVText)
/* harmony export */ });
/* harmony import */ var _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/mvRenderableType */ "./src/engine/enums/mvRenderableType.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ "./src/engine/components/Transform.ts");
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/mvTextAlignment */ "./src/engine/enums/mvTextAlignment.ts");
/* harmony import */ var _enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/mvFontStyle */ "./src/engine/enums/mvFontStyle.ts");





class MVText {
    constructor(textValue_) {
        this.RenderType = _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_0__.MVRenderableType.Text;
        this._color = "rgba(0, 0, 0, ";
        this._alpha = 1;
        this._fontSize = 20;
        this._fontFamily = "Arial";
        this._fontStyle = _enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_4__.MVFontStyle.Regular;
        this._alignment = _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_3__.MVTextAlignment.Left;
        this._transform = new _Transform__WEBPACK_IMPORTED_MODULE_1__.Transform();
        this._textValue = textValue_;
    }
    get Contents() {
        return this;
    }
    get Value() {
        return this._textValue;
    }
    get Transform() {
        return this._transform;
    }
    get Color() {
        return this._color + this._alpha + ")";
    }
    get FontStyle() {
        switch (this._fontStyle) {
            default:
            case _enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_4__.MVFontStyle.Regular:
                return "";
            case _enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_4__.MVFontStyle.Italic:
                return "italic ";
            case _enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_4__.MVFontStyle.Bold:
                return "bold ";
        }
    }
    get FontSize() {
        return this._fontSize;
    }
    get Font() {
        return (this.FontStyle +
            this._fontSize * _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.Resolution.x) +
            'px ' + this._fontFamily;
    }
    get Alignment() {
        switch (this._alignment) {
            default:
            case _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_3__.MVTextAlignment.Left:
                return "left";
            case _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_3__.MVTextAlignment.Right:
                return "right";
            case _enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_3__.MVTextAlignment.Center:
                return "center";
        }
    }
    Draw() {
        _mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.AddToRenderQueue(this);
    }
    SetColor(red_, green_, blue_) {
        this._color = "rgba(" + red_ + ", " + green_ + ", " + blue_ + ", ";
    }
    SetAlpha(alpha_) {
        this._alpha = alpha_;
    }
    SetFontSize(size_) {
        this._fontSize = size_;
    }
    SetFontStyle(mvFontStyle_) {
        this._fontStyle = mvFontStyle_;
    }
    SetFontFamily(fontName_) {
        this._fontFamily = fontName_;
    }
    SetMaxWidth(maxWidth_) {
        this.Transform.SetSize(maxWidth_, this.Transform.Size.y);
    }
    SetTextAlignment(alignment_) {
        this._alignment = alignment_;
    }
    SetValue(value_) {
        this._textValue = value_;
    }
    SetFontProperties(fontFamily_, fontSize_, textAlignment_, fontStyle_) {
        this.SetFontFamily(fontFamily_);
        this.SetFontSize(fontSize_);
        this.SetTextAlignment(textAlignment_);
        this.SetFontStyle(fontStyle_);
    }
}


/***/ }),

/***/ "./src/engine/enums/mvFontStyle.ts":
/*!*****************************************!*\
  !*** ./src/engine/enums/mvFontStyle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVFontStyle": () => (/* binding */ MVFontStyle)
/* harmony export */ });
var MVFontStyle;
(function (MVFontStyle) {
    MVFontStyle[MVFontStyle["Regular"] = 0] = "Regular";
    MVFontStyle[MVFontStyle["Italic"] = 1] = "Italic";
    MVFontStyle[MVFontStyle["Bold"] = 2] = "Bold";
})(MVFontStyle || (MVFontStyle = {}));


/***/ }),

/***/ "./src/engine/enums/mvRenderableType.ts":
/*!**********************************************!*\
  !*** ./src/engine/enums/mvRenderableType.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVRenderableType": () => (/* binding */ MVRenderableType)
/* harmony export */ });
var MVRenderableType;
(function (MVRenderableType) {
    MVRenderableType[MVRenderableType["Image"] = 0] = "Image";
    MVRenderableType[MVRenderableType["Text"] = 1] = "Text";
})(MVRenderableType || (MVRenderableType = {}));


/***/ }),

/***/ "./src/engine/enums/mvTextAlignment.ts":
/*!*********************************************!*\
  !*** ./src/engine/enums/mvTextAlignment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVTextAlignment": () => (/* binding */ MVTextAlignment)
/* harmony export */ });
var MVTextAlignment;
(function (MVTextAlignment) {
    MVTextAlignment[MVTextAlignment["Left"] = 0] = "Left";
    MVTextAlignment[MVTextAlignment["Right"] = 1] = "Right";
    MVTextAlignment[MVTextAlignment["Center"] = 2] = "Center";
})(MVTextAlignment || (MVTextAlignment = {}));


/***/ }),

/***/ "./src/engine/mvBehavior.ts":
/*!**********************************!*\
  !*** ./src/engine/mvBehavior.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVBehavior": () => (/* binding */ MVBehavior)
/* harmony export */ });
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvEngine */ "./src/engine/mvEngine.ts");

class MVBehavior {
    constructor() {
        this.OnEnable();
    }
    OnEnable() {
        _mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.EnqueueRuntimeObject(this);
    }
    OnDisable() {
        _mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.DequeueRuntimeObject(this);
    }
}


/***/ }),

/***/ "./src/engine/mvEngine.ts":
/*!********************************!*\
  !*** ./src/engine/mvEngine.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* binding */ Engine),
/* harmony export */   "MVEngine": () => (/* binding */ MVEngine),
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _view_mvViewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/mvViewport */ "./src/engine/view/mvViewport.ts");
/* harmony import */ var _setup_mvDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup/mvDisplay */ "./src/engine/setup/mvDisplay.ts");


const Renderer = new _view_mvViewport__WEBPACK_IMPORTED_MODULE_0__.MVViewport('#gameCanvas');
class MVEngine {
    constructor() {
        this._runtimeQueue = [];
        this._mousePosition = { x: 0, y: 0 };
        this._isUserClicking = false;
        this._isEngineRunning = false;
        Renderer.UpdateCanvasSize();
        Renderer.Canvas.addEventListener('mousemove', (event) => {
            const rect = Renderer.Canvas.getBoundingClientRect();
            this._mousePosition.x = event.clientX - rect.left;
            this._mousePosition.y = event.clientY - rect.top;
        });
        Renderer.Canvas.onclick = () => {
            this._isUserClicking = true;
        };
        this._deltaTime = 0;
        this._lastTimestamp = 0;
    }
    get MousePosition() {
        return this._mousePosition;
    }
    get ViewportMousePosition() {
        return { x: this._mousePosition.x / Renderer.Resolution.x, y: this._mousePosition.y / Renderer.Resolution.y };
    }
    get IsUserClicking() {
        return this._isUserClicking;
    }
    get IsRunning() {
        return this._isEngineRunning;
    }
    get DeltaTime() {
        return this._deltaTime;
    }
    Start() {
        this._isEngineRunning = true;
        requestAnimationFrame(this.GameLoop.bind(this));
    }
    GameLoop(timestamp_) {
        this._deltaTime = (timestamp_ - this._lastTimestamp) / _setup_mvDisplay__WEBPACK_IMPORTED_MODULE_1__.Display.PERFECT_FRAME_TIME;
        this._lastTimestamp = timestamp_;
        Renderer.UpdateCanvasSize();
        this._runtimeQueue.forEach(object => {
            object.Update();
        });
        Renderer.RenderToCanvas();
        this._isUserClicking = false;
        requestAnimationFrame(this.GameLoop.bind(this));
    }
    EnqueueRuntimeObject(mvBehaviorObject_) {
        const index = this.checkQueueForItem(mvBehaviorObject_);
        if (index == -1) {
            this._runtimeQueue.push(mvBehaviorObject_);
        }
    }
    DequeueRuntimeObject(mvBehaviorObject_) {
        const index = this.checkQueueForItem(mvBehaviorObject_);
        if (index > -1) {
            this._runtimeQueue.splice(index);
        }
    }
    checkQueueForItem(mvBehaviorObject_) {
        for (let index = 0; index < this._runtimeQueue.length; index++) {
            if (this._runtimeQueue[index] === mvBehaviorObject_) {
                return index;
            }
        }
        return -1;
    }
}
const Engine = new MVEngine();


/***/ }),

/***/ "./src/engine/setup/mvDisplay.ts":
/*!***************************************!*\
  !*** ./src/engine/setup/mvDisplay.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
class Display {
}
Display.DEFAULT_RESOLUTION = { x: 1920, y: 1080 };
Display.PERFECT_FRAME_TIME = (1000 / 60);


/***/ }),

/***/ "./src/engine/util/extmath.ts":
/*!************************************!*\
  !*** ./src/engine/util/extmath.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtMath": () => (/* binding */ ExtMath)
/* harmony export */ });
class ExtMath {
    static GetRandomInt(maximumValue_) {
        return Math.floor(Math.random() * maximumValue_);
    }
}
ExtMath.TO_RADIANS = Math.PI / 180;


/***/ }),

/***/ "./src/engine/view/mvViewport.ts":
/*!***************************************!*\
  !*** ./src/engine/view/mvViewport.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVViewport": () => (/* binding */ MVViewport)
/* harmony export */ });
/* harmony import */ var _setup_mvDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup/mvDisplay */ "./src/engine/setup/mvDisplay.ts");
/* harmony import */ var _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/mvRenderableType */ "./src/engine/enums/mvRenderableType.ts");


class MVViewport {
    constructor(canvasName_) {
        this._resolution = { x: 1, y: 1 };
        this._renderList = [];
        this.Canvas = document.querySelector(canvasName_);
        this._context = this.Canvas.getContext('2d');
    }
    get Resolution() {
        return this._resolution;
    }
    UpdateCanvasSize() {
        this.Canvas.width = window.innerWidth * window.devicePixelRatio;
        this.Canvas.height = (this.Canvas.width / 16) * 9;
        this._resolution.x = this.Canvas.width / _setup_mvDisplay__WEBPACK_IMPORTED_MODULE_0__.Display.DEFAULT_RESOLUTION.x;
        this._resolution.y = this._resolution.x;
    }
    AddToRenderQueue(object_) {
        this._renderList.push(object_);
    }
    RenderToCanvas() {
        this._context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        for (let index = 0; index < this._renderList.length; index++) {
            switch (this._renderList[index].RenderType) {
                case _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_1__.MVRenderableType.Image:
                    this.RenderImage(this._renderList[index].Contents, this._renderList[index].Transform);
                    break;
                case _enums_mvRenderableType__WEBPACK_IMPORTED_MODULE_1__.MVRenderableType.Text:
                    this.RenderText(this._renderList[index].Contents, this._renderList[index].Transform);
                    break;
            }
        }
        this._renderList = [];
        this.renderCursor();
    }
    RenderImage(image_, transform_) {
        this._context.setTransform(1, 0, 0, 1, 0, 0);
        this._context.translate(transform_.Position.x * this._resolution.x, transform_.Position.y * this._resolution.y);
        this._context.rotate(transform_.Rotation);
        this._context.globalAlpha = transform_.Alpha;
        this._context.drawImage(image_, -(transform_.Size.x / 2) * this._resolution.x, -(transform_.Size.y / 2) * this._resolution.y, (transform_.Size.x * this._resolution.x), (transform_.Size.y * this._resolution.y));
        this._context.globalAlpha = 1;
    }
    RenderText(text_, transform_) {
        this._context.setTransform(1, 0, 0, 1, 0, 0);
        this._context.fillStyle = text_.Color;
        this._context.translate(transform_.Position.x * this._resolution.x, transform_.Position.y * this._resolution.y);
        this._context.rotate(transform_.Rotation);
        this._context.font = text_.Font;
        this._context.textAlign = text_.Alignment;
        this._context.fillText(text_.Value, 0, 0, transform_.Size.x * this._resolution.x);
    }
    SetCursor(cursorSprite_) {
        this._cursorSprite = cursorSprite_;
    }
    renderCursor() {
        if (!this._cursorSprite) {
            return;
        }
        this._context.setTransform(1, 0, 0, 1, 0, 0);
        this._context.translate(this._cursorSprite.Transform.Position.x, this._cursorSprite.Transform.Position.y);
        this._context.rotate(this._cursorSprite.Transform.Rotation);
        this._context.drawImage(this._cursorSprite.Contents, -(this._cursorSprite.Transform.Size.x / 2), -(this._cursorSprite.Transform.Size.y / 2), this._cursorSprite.Transform.Size.x, this._cursorSprite.Transform.Size.y);
    }
}


/***/ }),

/***/ "./src/game/SceneHandler.ts":
/*!**********************************!*\
  !*** ./src/game/SceneHandler.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneHandler": () => (/* binding */ SceneHandler)
/* harmony export */ });
/* harmony import */ var _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/mvBehavior */ "./src/engine/mvBehavior.ts");
/* harmony import */ var _scenes_MainMenuScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/MainMenuScene */ "./src/game/scenes/MainMenuScene.ts");
/* harmony import */ var _scenes_GameplayScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameplayScene */ "./src/game/scenes/GameplayScene.ts");
/* harmony import */ var _enums_GameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/GameState */ "./src/game/enums/GameState.ts");
/* harmony import */ var _scenes_UniversalScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/UniversalScene */ "./src/game/scenes/UniversalScene.ts");





class SceneHandler extends _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_0__.MVBehavior {
    constructor() {
        super();
        this._gameState = _enums_GameState__WEBPACK_IMPORTED_MODULE_3__.GameState.MainMenu;
        this._scenes = new Array(_enums_GameState__WEBPACK_IMPORTED_MODULE_3__.GameState.Total);
        this._universalScene = new _scenes_UniversalScene__WEBPACK_IMPORTED_MODULE_4__.UniversalScene();
        this._scenes[_enums_GameState__WEBPACK_IMPORTED_MODULE_3__.GameState.MainMenu] = new _scenes_MainMenuScene__WEBPACK_IMPORTED_MODULE_1__.MainMenuScene();
        this._scenes[_enums_GameState__WEBPACK_IMPORTED_MODULE_3__.GameState.Gameplay] = new _scenes_GameplayScene__WEBPACK_IMPORTED_MODULE_2__.GameplayScene();
    }
    Update() {
        this._universalScene.Play();
        this._scenes[this._gameState].Play();
        if (this._scenes[this._gameState].RequestScene > -1) {
            this._gameState = this._scenes[this._gameState].RequestScene;
            this._scenes[this._gameState].RequestScene = -1;
        }
    }
}


/***/ }),

/***/ "./src/game/enums/GameState.ts":
/*!*************************************!*\
  !*** ./src/game/enums/GameState.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameState": () => (/* binding */ GameState)
/* harmony export */ });
var GameState;
(function (GameState) {
    GameState[GameState["MainMenu"] = 0] = "MainMenu";
    GameState[GameState["Gameplay"] = 1] = "Gameplay";
    GameState[GameState["Total"] = 2] = "Total";
})(GameState || (GameState = {}));


/***/ }),

/***/ "./src/game/enums/GameTileMark.ts":
/*!****************************************!*\
  !*** ./src/game/enums/GameTileMark.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTileMark": () => (/* binding */ GameTileMark)
/* harmony export */ });
var GameTileMark;
(function (GameTileMark) {
    GameTileMark[GameTileMark["None"] = 0] = "None";
    GameTileMark[GameTileMark["X"] = 1] = "X";
    GameTileMark[GameTileMark["O"] = 2] = "O";
})(GameTileMark || (GameTileMark = {}));


/***/ }),

/***/ "./src/game/enums/GameTileState.ts":
/*!*****************************************!*\
  !*** ./src/game/enums/GameTileState.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTileState": () => (/* binding */ GameTileState)
/* harmony export */ });
var GameTileState;
(function (GameTileState) {
    GameTileState[GameTileState["Empty"] = 0] = "Empty";
    GameTileState[GameTileState["Hovered"] = 1] = "Hovered";
    GameTileState[GameTileState["Marked"] = 2] = "Marked";
    GameTileState[GameTileState["Winning"] = 3] = "Winning";
})(GameTileState || (GameTileState = {}));


/***/ }),

/***/ "./src/game/enums/GameWinner.ts":
/*!**************************************!*\
  !*** ./src/game/enums/GameWinner.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameWinner": () => (/* binding */ GameWinner)
/* harmony export */ });
var GameWinner;
(function (GameWinner) {
    GameWinner[GameWinner["None"] = 0] = "None";
    GameWinner[GameWinner["Tie"] = 1] = "Tie";
    GameWinner[GameWinner["Player1"] = 2] = "Player1";
    GameWinner[GameWinner["Player2"] = 3] = "Player2";
})(GameWinner || (GameWinner = {}));


/***/ }),

/***/ "./src/game/enums/ParticleEffect.ts":
/*!******************************************!*\
  !*** ./src/game/enums/ParticleEffect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleEffect": () => (/* binding */ ParticleEffect)
/* harmony export */ });
var ParticleEffect;
(function (ParticleEffect) {
    ParticleEffect[ParticleEffect["Smoke"] = 0] = "Smoke";
    ParticleEffect[ParticleEffect["Explosion"] = 1] = "Explosion";
})(ParticleEffect || (ParticleEffect = {}));


/***/ }),

/***/ "./src/game/objects/CursorRenderer.ts":
/*!********************************************!*\
  !*** ./src/game/objects/CursorRenderer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CursorRenderer": () => (/* binding */ CursorRenderer)
/* harmony export */ });
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/mvBehavior */ "./src/engine/mvBehavior.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");



class CursorRenderer extends _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_1__.MVBehavior {
    constructor(image_) {
        super();
        this._sprite = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(image_);
    }
    Update() {
        this._sprite.Transform.SetPosition(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_2__.Engine.MousePosition.x, _engine_mvEngine__WEBPACK_IMPORTED_MODULE_2__.Engine.MousePosition.y);
        _engine_mvEngine__WEBPACK_IMPORTED_MODULE_2__.Renderer.SetCursor(this._sprite);
    }
}


/***/ }),

/***/ "./src/game/objects/GameBoard.ts":
/*!***************************************!*\
  !*** ./src/game/objects/GameBoard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _GameTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameTile */ "./src/game/objects/GameTile.ts");
/* harmony import */ var _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/GameTileState */ "./src/game/enums/GameTileState.ts");
/* harmony import */ var _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/GameTileMark */ "./src/game/enums/GameTileMark.ts");
/* harmony import */ var _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/GameWinner */ "./src/game/enums/GameWinner.ts");





class GameBoard {
    constructor() {
        this.RequestUpdate = false;
        this._playerTurn = 0;
        this._gameOver = false;
        this._gameTiles = [];
        this._gameWinner = _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.None;
        this._winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                const newTile = new _GameTile__WEBPACK_IMPORTED_MODULE_1__.GameTile({
                    x: 820 + (140 * i),
                    y: 510 + (140 * j)
                });
                this._gameTiles.push(newTile);
            }
        }
        this.Reset();
    }
    get PlayerTurn() {
        return this._playerTurn;
    }
    get GameWinner() {
        return this._gameWinner;
    }
    Play() {
        let checkGameOutcome = false;
        this._gameTiles.forEach(tile => {
            if (!this._gameOver && tile.State !== _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked) {
                if (tile.Check(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.MousePosition)) {
                    const mark = (this._playerTurn === 0) ? _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__.GameTileMark.X : _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__.GameTileMark.O;
                    if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.IsUserClicking) {
                        tile.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked, mark);
                        this._playerTurn = (this._playerTurn === 0) ? 1 : 0;
                        this.RequestUpdate = true;
                        checkGameOutcome = true;
                    }
                    else {
                        tile.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Hovered, mark);
                    }
                }
                else {
                    tile.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Empty, _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__.GameTileMark.None);
                }
            }
            tile.Draw();
            if (checkGameOutcome && !this._gameOver) {
                this.determineGameOutcome();
            }
        });
    }
    Reset() {
        this._gameTiles.forEach(tile => {
            tile.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Empty, _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__.GameTileMark.None);
        });
        this._gameOver = false;
        this._gameWinner = _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.None;
        this.RequestUpdate = true;
    }
    determineGameOutcome() {
        let roundWon = false;
        for (let index = 0; index <= 7; index++) {
            const winCondition = this._winningConditions[index];
            const a = this._gameTiles[winCondition[0]];
            const b = this._gameTiles[winCondition[1]];
            const c = this._gameTiles[winCondition[2]];
            if (a.State !== _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked && b.State !== _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked &&
                c.State !== _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked) {
                continue;
            }
            if (a.Marking === b.Marking && b.Marking === c.Marking) {
                roundWon = true;
                a.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Winning, a.Marking);
                b.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Winning, b.Marking);
                c.Set(_enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Winning, c.Marking);
                this._gameWinner = (a.Marking === _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_3__.GameTileMark.O) ?
                    _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.Player2 : _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.Player1;
                break;
            }
        }
        if (!roundWon) {
            let allTilesMarked = true;
            for (let index = 0; index < this._gameTiles.length; index++) {
                if (this._gameTiles[index].State === _enums_GameTileState__WEBPACK_IMPORTED_MODULE_2__.GameTileState.Marked) {
                    continue;
                }
                allTilesMarked = false;
                break;
            }
            if (allTilesMarked) {
                this._gameWinner = _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.Tie;
                roundWon = true;
            }
        }
        if (roundWon) {
            this._gameOver = true;
            this.RequestUpdate = true;
        }
    }
}


/***/ }),

/***/ "./src/game/objects/GameLogo.ts":
/*!**************************************!*\
  !*** ./src/game/objects/GameLogo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameLogo": () => (/* binding */ GameLogo)
/* harmony export */ });
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");


class GameLogo {
    constructor(iconImage_, textImage_) {
        this._animate = 0;
        this._icon = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(iconImage_);
        this._icon.Transform.SetPosition(1160, 260);
        this._text = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(textImage_);
        this._text.Transform.SetPosition(960, 260);
    }
    Draw() {
        this.animate();
        const wave = Math.sin(this._animate) * 15;
        this._icon.Transform.SetRotation(wave);
        const pulse = Math.sin(this._animate * 1.3) * 0.1;
        this._icon.Transform.SetScale(1 + pulse, 1 + pulse);
        this._text.Transform.SetPosition(this._text.Transform.Position.x, 260 + wave);
        this._icon.Draw();
        this._text.Draw();
    }
    animate() {
        this._animate = (this._animate > 100000) ?
            this._animate - 100000 : this._animate + (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.DeltaTime * 0.03);
    }
}


/***/ }),

/***/ "./src/game/objects/GameTile.ts":
/*!**************************************!*\
  !*** ./src/game/objects/GameTile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTile": () => (/* binding */ GameTile)
/* harmony export */ });
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/GameTileState */ "./src/game/enums/GameTileState.ts");
/* harmony import */ var _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/GameTileMark */ "./src/game/enums/GameTileMark.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");




class GameTile {
    constructor(position_) {
        this._state = _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Empty;
        this._markedAs = _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__.GameTileMark.None;
        this._sprite = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_EMPTY));
        this.Transform.SetPosition(position_.x, position_.y);
    }
    get Transform() {
        return this._sprite.Transform;
    }
    get State() {
        return this._state;
    }
    get Marking() {
        return this._markedAs;
    }
    Check(mousePosition_) {
        if (this.Transform.Rect.Contains(mousePosition_.x, mousePosition_.y)) {
            return true;
        }
        return false;
    }
    Set(state_, marking_) {
        if (this._state == state_) {
            return;
        }
        this._state = state_;
        this._markedAs = marking_;
        switch (this._state) {
            default:
            case _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Empty:
                this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_EMPTY));
                break;
            case _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Hovered:
                if (this._markedAs === _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__.GameTileMark.O) {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_HOVER_O));
                }
                else {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_HOVER_X));
                }
                break;
            case _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Marked:
                if (this._markedAs === _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__.GameTileMark.O) {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_O));
                }
                else {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_X));
                }
                break;
            case _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Winning:
                if (this._markedAs === _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__.GameTileMark.O) {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_WINNING_O));
                }
                else {
                    this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_WINNING_X));
                }
                break;
        }
    }
    Draw() {
        this._sprite.Draw();
    }
}


/***/ }),

/***/ "./src/game/objects/ParticleHandler.ts":
/*!*********************************************!*\
  !*** ./src/game/objects/ParticleHandler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleHandler": () => (/* binding */ ParticleHandler)
/* harmony export */ });
/* harmony import */ var _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/mvBehavior */ "./src/engine/mvBehavior.ts");
/* harmony import */ var _SmokeEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmokeEffect */ "./src/game/objects/SmokeEffect.ts");


class ParticleHandler extends _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_0__.MVBehavior {
    constructor() {
        super();
        this._particles = [];
        this._lastIndex = 0;
        for (let index = 0; index < 3; index++) {
            const newSmokeEffect = new _SmokeEffect__WEBPACK_IMPORTED_MODULE_1__.SmokeEffect();
            this._particles.push(newSmokeEffect);
        }
    }
    Update() {
        this._particles.forEach(effect => {
            effect.Draw();
        });
    }
    Play(particleEffect_, position_) {
        let findingParticle = false;
        while (findingParticle) {
            if (this._particles[this._lastIndex].ParticleType === particleEffect_) {
                findingParticle = false;
                this._particles[this._lastIndex].Play(position_);
            }
            this._lastIndex = (this._lastIndex + 1 > this._particles.length) ?
                0 : this._lastIndex + 1;
        }
    }
}


/***/ }),

/***/ "./src/game/objects/PlayerHealth.ts":
/*!******************************************!*\
  !*** ./src/game/objects/PlayerHealth.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerHealth": () => (/* binding */ PlayerHealth)
/* harmony export */ });
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");

class PlayerHealth {
    constructor(fullHPImage_, emptyHPImage_, screenPosition_ = { x: 240, y: 350 }) {
        this._maxHealth = 3;
        this._sprites = [];
        this._fullImage = fullHPImage_;
        this._emptyImage = emptyHPImage_;
        this._health = this._maxHealth;
        let positionX = screenPosition_.x;
        for (let index = 0; index < this._maxHealth; index++) {
            const newSprite = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(this._fullImage);
            newSprite.Transform.SetPosition(positionX + (index * 60), screenPosition_.y);
            this._sprites.push(newSprite);
        }
    }
    get HP() {
        return this._health;
    }
    Reset() {
        this._health = this._maxHealth;
        this.updateImages();
    }
    LoseHealth() {
        this._health -= 1;
        this.updateImages();
    }
    Draw() {
        for (let index = 0; index < this._maxHealth; index++) {
            this._sprites[index].Draw();
        }
    }
    updateImages() {
        for (let index = 0; index < this._maxHealth; index++) {
            this._sprites[index].SetImage(this._health > index ?
                this._fullImage : this._emptyImage);
        }
    }
}


/***/ }),

/***/ "./src/game/objects/SmokeEffect.ts":
/*!*****************************************!*\
  !*** ./src/game/objects/SmokeEffect.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmokeEffect": () => (/* binding */ SmokeEffect)
/* harmony export */ });
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/ParticleEffect */ "./src/game/enums/ParticleEffect.ts");



class SmokeEffect {
    constructor() {
        this.ParticleType = _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_2__.ParticleEffect.Smoke;
        this._particleCount = 10;
        this._particles = [];
        this._particleDirections = [];
        this._paused = true;
        for (let index = 0; index < this._particleCount; index++) {
            const newParticle = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.SMOKE_PARTICLE));
            this._particles.push(newParticle);
        }
    }
    Play(position_) {
        this._paused = false;
        for (let index = 0; index < this._particles.length; index++) {
            this._particles[index].Transform.SetPosition(position_.x, position_.y);
            const randomScale = (Math.random() * 0.8) + 0.5;
            this._particles[index].Transform.SetScale(randomScale, randomScale);
            const randomSpeedX = (Math.random() - 0.5) * 4;
            const randomSpeedY = (Math.random() - 0.5) * 4;
            this._particleDirections.push({ x: randomSpeedX, y: randomSpeedY });
            this._particles[index].Transform.SetAlpha(randomScale);
        }
    }
    Draw() {
        if (this._paused) {
            return true;
        }
        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale > 0.01) {
                const newScale = scale * 0.95;
                this._particles[index].Transform.Translate(this._particleDirections[index]);
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Transform.SetAlpha(newScale);
                this._particles[index].Draw();
                continue;
            }
            this._paused = true;
        }
        return this._paused;
    }
}


/***/ }),

/***/ "./src/game/scenes/GameplayScene.ts":
/*!******************************************!*\
  !*** ./src/game/scenes/GameplayScene.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameplayScene": () => (/* binding */ GameplayScene)
/* harmony export */ });
/* harmony import */ var _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvText */ "./src/engine/components/mvText.ts");
/* harmony import */ var _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/enums/mvTextAlignment */ "./src/engine/enums/mvTextAlignment.ts");
/* harmony import */ var _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/enums/mvFontStyle */ "./src/engine/enums/mvFontStyle.ts");
/* harmony import */ var _objects_GameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/GameBoard */ "./src/game/objects/GameBoard.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/GameWinner */ "./src/game/enums/GameWinner.ts");
/* harmony import */ var _objects_PlayerHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../objects/PlayerHealth */ "./src/game/objects/PlayerHealth.ts");
/* harmony import */ var _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/components/mvButton */ "./src/engine/components/mvButton.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _enums_GameState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/GameState */ "./src/game/enums/GameState.ts");
/* harmony import */ var _data_Strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/Strings */ "./src/data/Strings.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");












class GameplayScene {
    constructor() {
        this.RequestScene = -1;
        this._instructionText = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("YOUR TURN, ");
        this._playerTurnText = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 1");
        this._player1Text = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 1");
        this._player2Text = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 2");
        this._fullGameOver = false;
        this._gameResultTimer = 0;
        this._gameResultWaitDuration = 120;
        this.setupTextElements();
        this._gameBoard = new _objects_GameBoard__WEBPACK_IMPORTED_MODULE_3__.GameBoard();
        this._player1Health = new _objects_PlayerHealth__WEBPACK_IMPORTED_MODULE_6__.PlayerHealth(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART_EMPTY), { x: 220, y: 650 });
        this._player2Health = new _objects_PlayerHealth__WEBPACK_IMPORTED_MODULE_6__.PlayerHealth(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART_EMPTY), { x: 1580, y: 650 });
        this._player1Sign = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_11__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.PLAYER_SIGN_X));
        this._player1Sign.Transform.SetPosition(280, 500);
        this._player2Sign = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_11__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.PLAYER_SIGN_O));
        this._player2Sign.Transform.SetPosition(1640, 500);
        this._rematchButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.REMATCH_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.REMATCH_BUTTON_HOVER), { x: 780, y: 650 });
        this._menuButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.MENU_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.MENU_BUTTON_HOVER), { x: 1140, y: 650 });
        this._restartButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.RESTART_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.RESTART_BUTTON_HOVER), { x: 200, y: 960 });
    }
    Play() {
        this._instructionText.Draw();
        this._playerTurnText.Draw();
        this._player1Text.Draw();
        this._player2Text.Draw();
        this._player1Health.Draw();
        this._player2Health.Draw();
        this._player1Sign.Draw();
        this._player2Sign.Draw();
        if (!this._fullGameOver) {
            if (this._restartButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.MousePosition)) {
                if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_9__.GameState.MainMenu;
                    this._fullGameOver = false;
                    return;
                }
            }
            this._restartButton.Draw();
            if (this._gameBoard.GameWinner !== _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.None) {
                if (this._gameResultTimer > 0) {
                    this._gameResultTimer -= _engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.DeltaTime;
                }
                else {
                    this._gameBoard.Reset();
                    if (this._player1Health.HP === 0 || this._player2Health.HP === 0) {
                        this._fullGameOver = true;
                        return;
                    }
                }
            }
            this.handleGameBoard();
        }
        else {
            if (this._rematchButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.MousePosition)) {
                if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this._fullGameOver = false;
                }
            }
            else if (this._menuButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.MousePosition)) {
                if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_9__.GameState.MainMenu;
                    this._fullGameOver = false;
                }
            }
            this._rematchButton.Draw();
            this._menuButton.Draw();
        }
    }
    handleGameBoard() {
        this._gameBoard.Play();
        if (this._gameBoard.RequestUpdate) {
            this._gameBoard.RequestUpdate = false;
            if (this._gameBoard.GameWinner === _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.None) {
                this._instructionText.Transform.SetPosition(900, 960);
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings.GAME_ACTIVE_TEXT);
                if (this._gameBoard.PlayerTurn === 0) {
                    this._playerTurnText.SetValue("PLAYER 1");
                    this._playerTurnText.SetColor(254, 234, 0);
                }
                else {
                    this._playerTurnText.SetValue("PLAYER 2");
                    this._playerTurnText.SetColor(45, 242, 239);
                }
            }
            else if (this._gameBoard.GameWinner === _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.Tie) {
                this._instructionText.Transform.SetPosition(960, 960);
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings.GAME_TIED_TEXT);
                this._playerTurnText.SetValue("");
                this._gameResultTimer = this._gameResultWaitDuration;
            }
            else {
                this._instructionText.Transform.SetPosition(900, 960);
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings.GAME_WIN_TEXT);
                if (this._gameBoard.GameWinner === _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.Player1) {
                    this._player2Health.LoseHealth();
                }
                else if (this._gameBoard.GameWinner === _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.Player2) {
                    this._player1Health.LoseHealth();
                }
                this._gameResultTimer = this._gameResultWaitDuration;
            }
        }
    }
    setupTextElements() {
        this._instructionText.Transform.SetPosition(900, 960);
        this._instructionText.SetFontProperties("Oswald-Regular", 32, _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__.MVTextAlignment.Center, _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__.MVFontStyle.Italic);
        this._instructionText.SetMaxWidth(300);
        this._instructionText.SetColor(73, 83, 97);
        this._playerTurnText.Transform.SetPosition(1035, 960);
        this._playerTurnText.SetFontProperties("Oswald-Regular", 32, _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__.MVTextAlignment.Center, _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__.MVFontStyle.Italic);
        this._playerTurnText.SetMaxWidth(300);
        this._playerTurnText.SetColor(254, 234, 0);
        this._player1Text.Transform.SetPosition(280, 600);
        this._player1Text.SetFontProperties("Oswald-Regular", 32, _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__.MVTextAlignment.Center, _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__.MVFontStyle.Italic);
        this._player1Text.SetMaxWidth(300);
        this._player1Text.SetColor(254, 234, 0);
        this._player2Text.Transform.SetPosition(1640, 600);
        this._player2Text.SetFontProperties("Oswald-Regular", 32, _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__.MVTextAlignment.Center, _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__.MVFontStyle.Italic);
        this._player2Text.SetMaxWidth(300);
        this._player2Text.SetColor(45, 242, 239);
    }
}


/***/ }),

/***/ "./src/game/scenes/MainMenuScene.ts":
/*!******************************************!*\
  !*** ./src/game/scenes/MainMenuScene.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuScene": () => (/* binding */ MainMenuScene)
/* harmony export */ });
/* harmony import */ var _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/mvButton */ "./src/engine/components/mvButton.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _enums_GameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/GameState */ "./src/game/enums/GameState.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _data_Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/Strings */ "./src/data/Strings.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");






class MainMenuScene {
    constructor() {
        this.RequestScene = -1;
        this._playButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.PLAY_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.PLAY_BUTTON_HOVER), { x: 800, y: 660 });
        this._creditsButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.CREDITS_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.CREDITS_BUTTON_HOVER), { x: 1220, y: 570 });
        this._exitButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.EXIT_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.EXIT_BUTTON_HOVER), { x: 1220, y: 720 });
        this._tagline = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_5__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TAGLINE_TEXT));
        this._tagline.Transform.SetPosition(960, 880);
    }
    Play() {
        if (this._playButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.Gameplay;
            }
        }
        else if (this._creditsButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open(_data_Strings__WEBPACK_IMPORTED_MODULE_4__.Strings.CREDITS_URL, "_blank");
            }
        }
        else if (this._exitButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open(_data_Strings__WEBPACK_IMPORTED_MODULE_4__.Strings.EXIT_URL, "_self");
            }
        }
        this._playButton.Draw();
        this._creditsButton.Draw();
        this._exitButton.Draw();
        this._tagline.Draw();
        if (this._particleEffect) {
            this._particleEffect.Draw();
        }
    }
}


/***/ }),

/***/ "./src/game/scenes/UniversalScene.ts":
/*!*******************************************!*\
  !*** ./src/game/scenes/UniversalScene.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalScene": () => (/* binding */ UniversalScene)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/ParticleEffect */ "./src/game/enums/ParticleEffect.ts");
/* harmony import */ var _objects_GameLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/GameLogo */ "./src/game/objects/GameLogo.ts");






class UniversalScene {
    constructor() {
        this.RequestScene = -1;
        this._background = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_2__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.BACKGROUND));
        this._background.Transform.SetPosition(960, 540);
        this._moonvalkLogo = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_2__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.MOONVALK_LOGO));
        this._moonvalkLogo.Transform.SetPosition(220, 120);
        this._gameLogo = new _objects_GameLogo__WEBPACK_IMPORTED_MODULE_5__.GameLogo(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.LOGO_ICON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.LOGO_TEXT));
    }
    Play() {
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();
        if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_3__.Engine.IsUserClicking) {
            _app__WEBPACK_IMPORTED_MODULE_0__.particleHandler.Play(_enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_4__.ParticleEffect.Smoke, _engine_mvEngine__WEBPACK_IMPORTED_MODULE_3__.Engine.ViewportMousePosition);
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsdUVBQW9CLEVBQUUsMEVBQTRCO0FBQ25GO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzAtMC0xLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9kYXRhL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2RhdGEvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212SW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZUZXh0LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9lbnVtcy9tdkZvbnRTdHlsZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvZW51bXMvbXZSZW5kZXJhYmxlVHlwZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvZW51bXMvbXZUZXh0QWxpZ25tZW50LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9tdkJlaGF2aW9yLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9tdkVuZ2luZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvc2V0dXAvbXZEaXNwbGF5LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS91dGlsL2V4dG1hdGgudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL3ZpZXcvbXZWaWV3cG9ydC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL1NjZW5lSGFuZGxlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVUaWxlTWFyay50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVUaWxlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9HYW1lV2lubmVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvUGFydGljbGVFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0N1cnNvclJlbmRlcmVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9HYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0dhbWVMb2dvLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9HYW1lVGlsZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvUGFydGljbGVIYW5kbGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9QbGF5ZXJIZWFsdGgudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL1Ntb2tlRWZmZWN0LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvc2NlbmVzL0dhbWVwbGF5U2NlbmUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9zY2VuZXMvTWFpbk1lbnVTY2VuZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL3NjZW5lcy9Vbml2ZXJzYWxTY2VuZS50cyIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJzb3JSZW5kZXJlciB9IGZyb20gJy4vZ2FtZS9vYmplY3RzL0N1cnNvclJlbmRlcmVyJztcclxuaW1wb3J0IHsgU2NlbmVIYW5kbGVyIH0gZnJvbSAnLi9nYW1lL1NjZW5lSGFuZGxlcic7XHJcbmltcG9ydCB7IEltYWdlTG9hZGVyLCBJbWFnZUxpYnJhcnkgfSBmcm9tICcuL2RhdGEvSW1hZ2VMb2FkZXInO1xyXG5pbXBvcnQgeyBNVkJlaGF2aW9yIH0gZnJvbSAnLi9lbmdpbmUvbXZCZWhhdmlvcic7XHJcbmltcG9ydCB7IFBhcnRpY2xlSGFuZGxlciB9IGZyb20gJy4vZ2FtZS9vYmplY3RzL1BhcnRpY2xlSGFuZGxlcic7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBJbWFnZUxvYWRlci5Mb2FkQWxsKCk7XHJcbn07XHJcbmNsYXNzIE1WRW5naW5lTWFpbiBleHRlbmRzIE1WQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBzY2VuZUhhbmRsZXIgPSBuZXcgU2NlbmVIYW5kbGVyKCk7XHJcbiAgICAgICAgcGFydGljbGVIYW5kbGVyID0gbmV3IFBhcnRpY2xlSGFuZGxlcigpO1xyXG4gICAgICAgIGN1cnNvciA9IG5ldyBDdXJzb3JSZW5kZXJlcihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkNVUlNPUikpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IE1haW4gPSBuZXcgTVZFbmdpbmVNYWluKCk7XHJcbmxldCBzY2VuZUhhbmRsZXI7XHJcbmV4cG9ydCBsZXQgcGFydGljbGVIYW5kbGVyO1xyXG5sZXQgY3Vyc29yO1xyXG4iLCJpbXBvcnQgeyBNVkltYWdlTG9hZGVyIH0gZnJvbSBcIi4uL2VuZ2luZS9jb21wb25lbnRzL212SW1hZ2VMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEltYWdlTGlicmFyeSB7XHJcbn1cclxuSW1hZ2VMaWJyYXJ5LkJBQ0tHUk9VTkQgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0JhY2tncm91bmQucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkNVUlNPUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQ3Vyc29yLnBuZyc7XHJcbkltYWdlTGlicmFyeS5NT09OVkFMS19MT0dPID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9Nb29udmFsa19Mb2dvLnBuZyc7XHJcbkltYWdlTGlicmFyeS5MT0dPX0lDT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0xvZ29fSWNvbi5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuTE9HT19URVhUID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9Mb2dvX1RleHQucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkhFQVJUID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9IZWFydC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuSEVBUlRfRU1QVFkgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0hlYXJ0X0VtcHR5LnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX0VNUFRZID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX0VtcHR5LnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX1ggPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfWC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9Ib3Zlcl9YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX0hPVkVSX08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfSG92ZXJfTy5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX1ggPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfV2lubmluZ19YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfTyA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9XaW5uaW5nX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1Jlc3RhcnRCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUmVzdGFydEJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuTUVOVV9CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvTWVudUJ1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5NRU5VX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9NZW51QnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9SZW1hdGNoQnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1JlbWF0Y2hCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1BsYXlCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUExBWV9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUGxheUJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQ1JFRElUU19CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvQ3JlZGl0c0J1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9DcmVkaXRzQnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5FWElUX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9FeGl0QnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0V4aXRCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGFnbGluZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvUGxheWVyU2lnbl9YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9QbGF5ZXJTaWduX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlNNT0tFX1BBUlRJQ0xFID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9TbW9rZVBhcnRpY2xlLnBuZyc7XHJcbmV4cG9ydCBjb25zdCBJbWFnZUxvYWRlciA9IG5ldyBNVkltYWdlTG9hZGVyKCk7XHJcbkltYWdlTG9hZGVyLkFkZChbXHJcbiAgICBJbWFnZUxpYnJhcnkuQkFDS0dST1VORCxcclxuICAgIEltYWdlTGlicmFyeS5DVVJTT1IsXHJcbiAgICBJbWFnZUxpYnJhcnkuTU9PTlZBTEtfTE9HTyxcclxuICAgIEltYWdlTGlicmFyeS5MT0dPX0lDT04sXHJcbiAgICBJbWFnZUxpYnJhcnkuTE9HT19URVhULFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkhFQVJULFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfRU1QVFksXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfTyxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX0hPVkVSX1gsXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCxcclxuICAgIEltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlFUl9TSUdOX08sXHJcbiAgICBJbWFnZUxpYnJhcnkuU01PS0VfUEFSVElDTEVcclxuXSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTdHJpbmdzIHtcclxufVxyXG5TdHJpbmdzLkdBTUVfV0lOX1RFWFQgPSBcIldJTk5FUiFcIjtcclxuU3RyaW5ncy5HQU1FX0FDVElWRV9URVhUID0gXCJZT1VSIFRVUk4sIFwiO1xyXG5TdHJpbmdzLkdBTUVfVElFRF9URVhUID0gXCJUSUVEIVwiO1xyXG5TdHJpbmdzLkNSRURJVFNfVVJMID0gXCJodHRwczovL21vb252YWxrLmNvbS9jYXRlZ29yeS9wb3J0Zm9saW9cIjtcclxuU3RyaW5ncy5FWElUX1VSTCA9IFwiaHR0cHM6Ly9tb29udmFsay5jb20vXCI7XHJcbiIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xyXG4gICAgY29uc3RydWN0b3IoeF8sIHlfLCB3aWR0aF8sIGhlaWdodF8pIHtcclxuICAgICAgICB0aGlzLlBvc2l0aW9uID0geyB4OiB4XywgeTogeV8gfTtcclxuICAgICAgICB0aGlzLlNpemUgPSB7IHg6IHdpZHRoXywgeTogaGVpZ2h0XyB9O1xyXG4gICAgfVxyXG4gICAgQ29udGFpbnMocG9pbnRYXywgcG9pbnRZXykge1xyXG4gICAgICAgIHJldHVybiAocG9pbnRYXyA+IHRoaXMuUG9zaXRpb24ueCAmJiBwb2ludFhfIDwgdGhpcy5Qb3NpdGlvbi54ICsgdGhpcy5TaXplLnggJiZcclxuICAgICAgICAgICAgcG9pbnRZXyA+IHRoaXMuUG9zaXRpb24ueSAmJiBwb2ludFlfIDwgdGhpcy5Qb3NpdGlvbi55ICsgdGhpcy5TaXplLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcclxuaW1wb3J0IHsgRXh0TWF0aCB9IGZyb20gJy4uL3V0aWwvZXh0bWF0aCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vbXZFbmdpbmUnO1xyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2l6ZSA9IHsgeDogMzAwLCB5OiAzMDAgfTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplID0geyB4OiAzMDAsIHk6IDMwMCB9O1xyXG4gICAgICAgIHRoaXMuX3NjYWxlID0geyB4OiAxLCB5OiAxIH07XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcclxuICAgIH1cclxuICAgIGdldCBQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2l6ZTtcclxuICAgIH1cclxuICAgIGdldCBTY2FsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7XHJcbiAgICB9XHJcbiAgICBnZXQgUm90YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IFZpZXdwb3J0U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLlNpemUueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5TaXplLnkgKiBSZW5kZXJlci5SZXNvbHV0aW9uLnkgfTtcclxuICAgIH1cclxuICAgIGdldCBWaWV3cG9ydFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuUG9zaXRpb24ueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5Qb3NpdGlvbi55ICogUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgUmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLlZpZXdwb3J0UG9zaXRpb24ueCAtICh0aGlzLlZpZXdwb3J0U2l6ZS54IC8gMiksIHRoaXMuVmlld3BvcnRQb3NpdGlvbi55IC0gKHRoaXMuVmlld3BvcnRTaXplLnkgLyAyKSwgdGhpcy5WaWV3cG9ydFNpemUueCwgdGhpcy5WaWV3cG9ydFNpemUueSk7XHJcbiAgICB9XHJcbiAgICBnZXQgQWxwaGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG4gICAgU2V0RnJvbUltYWdlRGF0YShpbWFnZV8pIHtcclxuICAgICAgICBpZiAoIWltYWdlXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuU2V0U2l6ZShpbWFnZV8ud2lkdGgsIGltYWdlXy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueCA9IHRoaXMuX3RhcmdldFNpemUueDtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplLnkgPSB0aGlzLl90YXJnZXRTaXplLnk7XHJcbiAgICB9XHJcbiAgICBTZXRGcm9tVHJhbnNmb3JtKHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLlNldFNpemUodHJhbnNmb3JtXy5TaXplLngsIHRyYW5zZm9ybV8uU2l6ZS55KTtcclxuICAgICAgICB0aGlzLlNldFNjYWxlKHRyYW5zZm9ybV8uU2NhbGUueCwgdHJhbnNmb3JtXy5TY2FsZS55KTtcclxuICAgICAgICB0aGlzLlNldFBvc2l0aW9uKHRyYW5zZm9ybV8uUG9zaXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLlNldFJvdGF0aW9uKHRyYW5zZm9ybV8uUm90YXRpb24pO1xyXG4gICAgfVxyXG4gICAgU2V0U2NhbGUoc2NhbGVYXywgc2NhbGVZXykge1xyXG4gICAgICAgIHRoaXMuX3NjYWxlLnggPSBzY2FsZVhfO1xyXG4gICAgICAgIHRoaXMuX3NjYWxlLnkgPSBzY2FsZVlfO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgU2V0U2l6ZSh3aWR0aF8sIGhlaWdodF8pIHtcclxuICAgICAgICB0aGlzLl90YXJnZXRTaXplLnggPSB3aWR0aF87XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2l6ZS55ID0gaGVpZ2h0XztcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlclNpemUoKTtcclxuICAgIH1cclxuICAgIFNldFBvc2l0aW9uKHBvc2l0aW9uWF8sIHBvc2l0aW9uWV8pIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi54ID0gcG9zaXRpb25YXztcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi55ID0gcG9zaXRpb25ZXztcclxuICAgIH1cclxuICAgIFNldERlcHRoKGRlcHRoXykge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogPSBkZXB0aF87XHJcbiAgICB9XHJcbiAgICBTZXRSb3RhdGlvbihyb3RhdGlvbkRlZ3JlZXNfKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSByb3RhdGlvbkRlZ3JlZXNfICogRXh0TWF0aC5UT19SQURJQU5TO1xyXG4gICAgfVxyXG4gICAgVHJhbnNsYXRlKHRyYW5zbGF0aW9uXykge1xyXG4gICAgICAgIHRoaXMuU2V0UG9zaXRpb24odGhpcy5Qb3NpdGlvbi54ICsgdHJhbnNsYXRpb25fLngsIHRoaXMuUG9zaXRpb24ueSArIHRyYW5zbGF0aW9uXy55KTtcclxuICAgIH1cclxuICAgIFNldEFscGhhKG9wYWNpdHlfKSB7XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBvcGFjaXR5XztcclxuICAgIH1cclxuICAgIHVwZGF0ZVJlbmRlclNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZS54ID0gKHRoaXMuX3RhcmdldFNpemUueCAqIHRoaXMuX3NjYWxlLngpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueSA9ICh0aGlzLl90YXJnZXRTaXplLnkgKiB0aGlzLl9zY2FsZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IE1WVGV4dCB9IGZyb20gXCIuL212VGV4dFwiO1xyXG5pbXBvcnQgeyBNVlRleHRBbGlnbm1lbnQgfSBmcm9tIFwiLi4vZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBNVkJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZGxlSW1hZ2VfLCBob3ZlckltYWdlXywgcG9zaXRpb25fLCB0ZXh0VmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5faWRsZUltYWdlID0gaWRsZUltYWdlXztcclxuICAgICAgICB0aGlzLl9ob3ZlckltYWdlID0gaG92ZXJJbWFnZV87XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKHRoaXMuX2lkbGVJbWFnZSk7XHJcbiAgICAgICAgdGhpcy5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25fLngsIHBvc2l0aW9uXy55KTtcclxuICAgICAgICBpZiAodGV4dFZhbHVlXykge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gbmV3IE1WVGV4dCh0ZXh0VmFsdWVfKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRUZXh0QWxpZ25tZW50KE1WVGV4dEFsaWdubWVudC5DZW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlNldEZvbnRTaXplKDM2KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRGb250RmFtaWx5KFwiT3N3YWxkLVJlZ3VsYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSArICh0aGlzLl90ZXh0LkZvbnRTaXplIC8gNCkpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRTaXplKDE1MCwgdGhpcy5fdGV4dC5Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFJvdGF0aW9uKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBJc0hvdmVyZWQobW91c2VQb3NpdGlvbl8pIHtcclxuICAgICAgICBjb25zdCBob3ZlcmVkID0gdGhpcy5Db250YWlucyhtb3VzZVBvc2l0aW9uXyk7XHJcbiAgICAgICAgaWYgKGhvdmVyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKHRoaXMuX2hvdmVySW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKHRoaXMuX2lkbGVJbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBob3ZlcmVkO1xyXG4gICAgfVxyXG4gICAgQ29udGFpbnMocG9pbnRfKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm0uUmVjdC5Db250YWlucyhwb2ludF8ueCwgcG9pbnRfLnkpO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLkRyYXcoKTtcclxuICAgICAgICAoX2EgPSB0aGlzLl90ZXh0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuRHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgTVZJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9hbGxJbWFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9sb2FkZWRJbWFnZXMgPSB7fTtcclxuICAgIH1cclxuICAgIGdldCBMb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaGVkTG9hZGluZztcclxuICAgIH1cclxuICAgIEFkZChpbWFnZVVSTHNfKSB7XHJcbiAgICAgICAgaW1hZ2VVUkxzXy5mb3JFYWNoKGltZ1VSTCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEltYWdlcy5wdXNoKGltZ1VSTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBMb2FkQWxsKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlVG9Mb2FkSW1hZ2VzID0gdGhpcy5fYWxsSW1hZ2VzLm1hcCgoaW1nVVJMKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIG5ld0ltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZWRJbWFnZXNbaW1nVVJMXSA9IG5ld0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWdVUkw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlVG9Mb2FkSW1hZ2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgRW5naW5lLlN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBHZXQoaW1hZ2VVUkxfKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZEltYWdlc1tpbWFnZVVSTF9dO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4vVHJhbnNmb3JtJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9tdkVuZ2luZSc7XHJcbmltcG9ydCB7IE1WUmVuZGVyYWJsZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9tdlJlbmRlcmFibGVUeXBlJztcclxuZXhwb3J0IGNsYXNzIE1WU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlRWxlbWVudF8pIHtcclxuICAgICAgICB0aGlzLlJlbmRlclR5cGUgPSBNVlJlbmRlcmFibGVUeXBlLkltYWdlO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gaW1hZ2VFbGVtZW50XztcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtLlNldEZyb21JbWFnZURhdGEodGhpcy5faW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IENvbnRlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZTtcclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcclxuICAgIH1cclxuICAgIERyYXcoKSB7XHJcbiAgICAgICAgUmVuZGVyZXIuQWRkVG9SZW5kZXJRdWV1ZSh0aGlzKTtcclxuICAgIH1cclxuICAgIFNldEltYWdlKGltYWdlRWxlbWVudF8pIHtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IGltYWdlRWxlbWVudF87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZSZW5kZXJhYmxlVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9tdlJlbmRlcmFibGVUeXBlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCIuL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuLi9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBNVlRleHRBbGlnbm1lbnQgfSBmcm9tIFwiLi4vZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmltcG9ydCB7IE1WRm9udFN0eWxlIH0gZnJvbSBcIi4uL2VudW1zL212Rm9udFN0eWxlXCI7XHJcbmV4cG9ydCBjbGFzcyBNVlRleHQge1xyXG4gICAgY29uc3RydWN0b3IodGV4dFZhbHVlXykge1xyXG4gICAgICAgIHRoaXMuUmVuZGVyVHlwZSA9IE1WUmVuZGVyYWJsZVR5cGUuVGV4dDtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IFwicmdiYSgwLCAwLCAwLCBcIjtcclxuICAgICAgICB0aGlzLl9hbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSAyMDtcclxuICAgICAgICB0aGlzLl9mb250RmFtaWx5ID0gXCJBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbnRTdHlsZSA9IE1WRm9udFN0eWxlLlJlZ3VsYXI7XHJcbiAgICAgICAgdGhpcy5fYWxpZ25tZW50ID0gTVZUZXh0QWxpZ25tZW50LkxlZnQ7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIHRoaXMuX3RleHRWYWx1ZSA9IHRleHRWYWx1ZV87XHJcbiAgICB9XHJcbiAgICBnZXQgQ29udGVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcclxuICAgIH1cclxuICAgIGdldCBDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3IgKyB0aGlzLl9hbHBoYSArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IEZvbnRTdHlsZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2ZvbnRTdHlsZSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlIE1WRm9udFN0eWxlLlJlZ3VsYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgY2FzZSBNVkZvbnRTdHlsZS5JdGFsaWM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpdGFsaWMgXCI7XHJcbiAgICAgICAgICAgIGNhc2UgTVZGb250U3R5bGUuQm9sZDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImJvbGQgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IEZvbnRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb250U2l6ZTtcclxuICAgIH1cclxuICAgIGdldCBGb250KCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5Gb250U3R5bGUgK1xyXG4gICAgICAgICAgICB0aGlzLl9mb250U2l6ZSAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCkgK1xyXG4gICAgICAgICAgICAncHggJyArIHRoaXMuX2ZvbnRGYW1pbHk7XHJcbiAgICB9XHJcbiAgICBnZXQgQWxpZ25tZW50KCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25tZW50KSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhc2UgTVZUZXh0QWxpZ25tZW50LkxlZnQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGNhc2UgTVZUZXh0QWxpZ25tZW50LlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgICAgICAgICAgY2FzZSBNVlRleHRBbGlnbm1lbnQuQ2VudGVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBSZW5kZXJlci5BZGRUb1JlbmRlclF1ZXVlKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgU2V0Q29sb3IocmVkXywgZ3JlZW5fLCBibHVlXykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gXCJyZ2JhKFwiICsgcmVkXyArIFwiLCBcIiArIGdyZWVuXyArIFwiLCBcIiArIGJsdWVfICsgXCIsIFwiO1xyXG4gICAgfVxyXG4gICAgU2V0QWxwaGEoYWxwaGFfKSB7XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBhbHBoYV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250U2l6ZShzaXplXykge1xyXG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gc2l6ZV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250U3R5bGUobXZGb250U3R5bGVfKSB7XHJcbiAgICAgICAgdGhpcy5fZm9udFN0eWxlID0gbXZGb250U3R5bGVfO1xyXG4gICAgfVxyXG4gICAgU2V0Rm9udEZhbWlseShmb250TmFtZV8pIHtcclxuICAgICAgICB0aGlzLl9mb250RmFtaWx5ID0gZm9udE5hbWVfO1xyXG4gICAgfVxyXG4gICAgU2V0TWF4V2lkdGgobWF4V2lkdGhfKSB7XHJcbiAgICAgICAgdGhpcy5UcmFuc2Zvcm0uU2V0U2l6ZShtYXhXaWR0aF8sIHRoaXMuVHJhbnNmb3JtLlNpemUueSk7XHJcbiAgICB9XHJcbiAgICBTZXRUZXh0QWxpZ25tZW50KGFsaWdubWVudF8pIHtcclxuICAgICAgICB0aGlzLl9hbGlnbm1lbnQgPSBhbGlnbm1lbnRfO1xyXG4gICAgfVxyXG4gICAgU2V0VmFsdWUodmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dFZhbHVlID0gdmFsdWVfO1xyXG4gICAgfVxyXG4gICAgU2V0Rm9udFByb3BlcnRpZXMoZm9udEZhbWlseV8sIGZvbnRTaXplXywgdGV4dEFsaWdubWVudF8sIGZvbnRTdHlsZV8pIHtcclxuICAgICAgICB0aGlzLlNldEZvbnRGYW1pbHkoZm9udEZhbWlseV8pO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9udFNpemUoZm9udFNpemVfKTtcclxuICAgICAgICB0aGlzLlNldFRleHRBbGlnbm1lbnQodGV4dEFsaWdubWVudF8pO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9udFN0eWxlKGZvbnRTdHlsZV8pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgTVZGb250U3R5bGU7XHJcbihmdW5jdGlvbiAoTVZGb250U3R5bGUpIHtcclxuICAgIE1WRm9udFN0eWxlW01WRm9udFN0eWxlW1wiUmVndWxhclwiXSA9IDBdID0gXCJSZWd1bGFyXCI7XHJcbiAgICBNVkZvbnRTdHlsZVtNVkZvbnRTdHlsZVtcIkl0YWxpY1wiXSA9IDFdID0gXCJJdGFsaWNcIjtcclxuICAgIE1WRm9udFN0eWxlW01WRm9udFN0eWxlW1wiQm9sZFwiXSA9IDJdID0gXCJCb2xkXCI7XHJcbn0pKE1WRm9udFN0eWxlIHx8IChNVkZvbnRTdHlsZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgTVZSZW5kZXJhYmxlVHlwZTtcclxuKGZ1bmN0aW9uIChNVlJlbmRlcmFibGVUeXBlKSB7XHJcbiAgICBNVlJlbmRlcmFibGVUeXBlW01WUmVuZGVyYWJsZVR5cGVbXCJJbWFnZVwiXSA9IDBdID0gXCJJbWFnZVwiO1xyXG4gICAgTVZSZW5kZXJhYmxlVHlwZVtNVlJlbmRlcmFibGVUeXBlW1wiVGV4dFwiXSA9IDFdID0gXCJUZXh0XCI7XHJcbn0pKE1WUmVuZGVyYWJsZVR5cGUgfHwgKE1WUmVuZGVyYWJsZVR5cGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIE1WVGV4dEFsaWdubWVudDtcclxuKGZ1bmN0aW9uIChNVlRleHRBbGlnbm1lbnQpIHtcclxuICAgIE1WVGV4dEFsaWdubWVudFtNVlRleHRBbGlnbm1lbnRbXCJMZWZ0XCJdID0gMF0gPSBcIkxlZnRcIjtcclxuICAgIE1WVGV4dEFsaWdubWVudFtNVlRleHRBbGlnbm1lbnRbXCJSaWdodFwiXSA9IDFdID0gXCJSaWdodFwiO1xyXG4gICAgTVZUZXh0QWxpZ25tZW50W01WVGV4dEFsaWdubWVudFtcIkNlbnRlclwiXSA9IDJdID0gXCJDZW50ZXJcIjtcclxufSkoTVZUZXh0QWxpZ25tZW50IHx8IChNVlRleHRBbGlnbm1lbnQgPSB7fSkpO1xyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgTVZCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLk9uRW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICBPbkVuYWJsZSgpIHtcclxuICAgICAgICBFbmdpbmUuRW5xdWV1ZVJ1bnRpbWVPYmplY3QodGhpcyk7XHJcbiAgICB9XHJcbiAgICBPbkRpc2FibGUoKSB7XHJcbiAgICAgICAgRW5naW5lLkRlcXVldWVSdW50aW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3L212Vmlld3BvcnRcIjtcclxuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuL3NldHVwL212RGlzcGxheVwiO1xyXG5leHBvcnQgY29uc3QgUmVuZGVyZXIgPSBuZXcgTVZWaWV3cG9ydCgnI2dhbWVDYW52YXMnKTtcclxuZXhwb3J0IGNsYXNzIE1WRW5naW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLl9pc1VzZXJDbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzRW5naW5lUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIFJlbmRlcmVyLlVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICBSZW5kZXJlci5DYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBSZW5kZXJlci5DYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZW5kZXJlci5DYW52YXMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faXNVc2VyQ2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9sYXN0VGltZXN0YW1wID0gMDtcclxuICAgIH1cclxuICAgIGdldCBNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3VzZVBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IFZpZXdwb3J0TW91c2VQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLl9tb3VzZVBvc2l0aW9uLnggLyBSZW5kZXJlci5SZXNvbHV0aW9uLngsIHk6IHRoaXMuX21vdXNlUG9zaXRpb24ueSAvIFJlbmRlcmVyLlJlc29sdXRpb24ueSB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IElzVXNlckNsaWNraW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VzZXJDbGlja2luZztcclxuICAgIH1cclxuICAgIGdldCBJc1J1bm5pbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRW5naW5lUnVubmluZztcclxuICAgIH1cclxuICAgIGdldCBEZWx0YVRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbHRhVGltZTtcclxuICAgIH1cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2lzRW5naW5lUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuR2FtZUxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBHYW1lTG9vcCh0aW1lc3RhbXBfKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsdGFUaW1lID0gKHRpbWVzdGFtcF8gLSB0aGlzLl9sYXN0VGltZXN0YW1wKSAvIERpc3BsYXkuUEVSRkVDVF9GUkFNRV9USU1FO1xyXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXBfO1xyXG4gICAgICAgIFJlbmRlcmVyLlVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICB0aGlzLl9ydW50aW1lUXVldWUuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QuVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIuUmVuZGVyVG9DYW52YXMoKTtcclxuICAgICAgICB0aGlzLl9pc1VzZXJDbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLkdhbWVMb29wLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgRW5xdWV1ZVJ1bnRpbWVPYmplY3QobXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lUXVldWUucHVzaChtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRGVxdWV1ZVJ1bnRpbWVPYmplY3QobXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5zcGxpY2UoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrUXVldWVGb3JJdGVtKG12QmVoYXZpb3JPYmplY3RfKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3J1bnRpbWVRdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3J1bnRpbWVRdWV1ZVtpbmRleF0gPT09IG12QmVoYXZpb3JPYmplY3RfKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBFbmdpbmUgPSBuZXcgTVZFbmdpbmUoKTtcclxuIiwiZXhwb3J0IGNsYXNzIERpc3BsYXkge1xyXG59XHJcbkRpc3BsYXkuREVGQVVMVF9SRVNPTFVUSU9OID0geyB4OiAxOTIwLCB5OiAxMDgwIH07XHJcbkRpc3BsYXkuUEVSRkVDVF9GUkFNRV9USU1FID0gKDEwMDAgLyA2MCk7XHJcbiIsImV4cG9ydCBjbGFzcyBFeHRNYXRoIHtcclxuICAgIHN0YXRpYyBHZXRSYW5kb21JbnQobWF4aW11bVZhbHVlXykge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhpbXVtVmFsdWVfKTtcclxuICAgIH1cclxufVxyXG5FeHRNYXRoLlRPX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwO1xyXG4iLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vc2V0dXAvbXZEaXNwbGF5JztcclxuaW1wb3J0IHsgTVZSZW5kZXJhYmxlVHlwZSB9IGZyb20gJy4uL2VudW1zL212UmVuZGVyYWJsZVR5cGUnO1xyXG5leHBvcnQgY2xhc3MgTVZWaWV3cG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNOYW1lXykge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB7IHg6IDEsIHk6IDEgfTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhc05hbWVfKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGdldCBSZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHV0aW9uO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgICAgICB0aGlzLkNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgdGhpcy5DYW52YXMuaGVpZ2h0ID0gKHRoaXMuQ2FudmFzLndpZHRoIC8gMTYpICogOTtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnggPSB0aGlzLkNhbnZhcy53aWR0aCAvIERpc3BsYXkuREVGQVVMVF9SRVNPTFVUSU9OLng7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbi55ID0gdGhpcy5fcmVzb2x1dGlvbi54O1xyXG4gICAgfVxyXG4gICAgQWRkVG9SZW5kZXJRdWV1ZShvYmplY3RfKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyTGlzdC5wdXNoKG9iamVjdF8pO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyVG9DYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5DYW52YXMud2lkdGgsIHRoaXMuQ2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3JlbmRlckxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uUmVuZGVyVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNVlJlbmRlcmFibGVUeXBlLkltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVySW1hZ2UodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uQ29udGVudHMsIHRoaXMuX3JlbmRlckxpc3RbaW5kZXhdLlRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1WUmVuZGVyYWJsZVR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbmRlclRleHQodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uQ29udGVudHMsIHRoaXMuX3JlbmRlckxpc3RbaW5kZXhdLlRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ3Vyc29yKCk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJJbWFnZShpbWFnZV8sIHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2Zvcm1fLlBvc2l0aW9uLnggKiB0aGlzLl9yZXNvbHV0aW9uLngsIHRyYW5zZm9ybV8uUG9zaXRpb24ueSAqIHRoaXMuX3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodHJhbnNmb3JtXy5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5nbG9iYWxBbHBoYSA9IHRyYW5zZm9ybV8uQWxwaGE7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2VfLCAtKHRyYW5zZm9ybV8uU2l6ZS54IC8gMikgKiB0aGlzLl9yZXNvbHV0aW9uLngsIC0odHJhbnNmb3JtXy5TaXplLnkgLyAyKSAqIHRoaXMuX3Jlc29sdXRpb24ueSwgKHRyYW5zZm9ybV8uU2l6ZS54ICogdGhpcy5fcmVzb2x1dGlvbi54KSwgKHRyYW5zZm9ybV8uU2l6ZS55ICogdGhpcy5fcmVzb2x1dGlvbi55KSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJUZXh0KHRleHRfLCB0cmFuc2Zvcm1fKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSB0ZXh0Xy5Db2xvcjtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2Zvcm1fLlBvc2l0aW9uLnggKiB0aGlzLl9yZXNvbHV0aW9uLngsIHRyYW5zZm9ybV8uUG9zaXRpb24ueSAqIHRoaXMuX3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodHJhbnNmb3JtXy5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5mb250ID0gdGV4dF8uRm9udDtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRleHRBbGlnbiA9IHRleHRfLkFsaWdubWVudDtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxUZXh0KHRleHRfLlZhbHVlLCAwLCAwLCB0cmFuc2Zvcm1fLlNpemUueCAqIHRoaXMuX3Jlc29sdXRpb24ueCk7XHJcbiAgICB9XHJcbiAgICBTZXRDdXJzb3IoY3Vyc29yU3ByaXRlXykge1xyXG4gICAgICAgIHRoaXMuX2N1cnNvclNwcml0ZSA9IGN1cnNvclNwcml0ZV87XHJcbiAgICB9XHJcbiAgICByZW5kZXJDdXJzb3IoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jdXJzb3JTcHJpdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlBvc2l0aW9uLngsIHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uUG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UodGhpcy5fY3Vyc29yU3ByaXRlLkNvbnRlbnRzLCAtKHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uU2l6ZS54IC8gMiksIC0odGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnkgLyAyKSwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLngsIHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uU2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVkJlaGF2aW9yIH0gZnJvbSBcIi4uL2VuZ2luZS9tdkJlaGF2aW9yXCI7XHJcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvTWFpbk1lbnVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lcGxheVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL0dhbWVwbGF5U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFVuaXZlcnNhbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL1VuaXZlcnNhbFNjZW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBTY2VuZUhhbmRsZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLk1haW5NZW51O1xyXG4gICAgICAgIHRoaXMuX3NjZW5lcyA9IG5ldyBBcnJheShHYW1lU3RhdGUuVG90YWwpO1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNjZW5lID0gbmV3IFVuaXZlcnNhbFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW0dhbWVTdGF0ZS5NYWluTWVudV0gPSBuZXcgTWFpbk1lbnVTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lc1tHYW1lU3RhdGUuR2FtZXBsYXldID0gbmV3IEdhbWVwbGF5U2NlbmUoKTtcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl91bml2ZXJzYWxTY2VuZS5QbGF5KCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW3RoaXMuX2dhbWVTdGF0ZV0uUGxheSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5SZXF1ZXN0U2NlbmUgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSB0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5SZXF1ZXN0U2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIEdhbWVTdGF0ZTtcclxuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJNYWluTWVudVwiXSA9IDBdID0gXCJNYWluTWVudVwiO1xyXG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIkdhbWVwbGF5XCJdID0gMV0gPSBcIkdhbWVwbGF5XCI7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiVG90YWxcIl0gPSAyXSA9IFwiVG90YWxcIjtcclxufSkoR2FtZVN0YXRlIHx8IChHYW1lU3RhdGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVUaWxlTWFyaztcclxuKGZ1bmN0aW9uIChHYW1lVGlsZU1hcmspIHtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJYXCJdID0gMV0gPSBcIlhcIjtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJPXCJdID0gMl0gPSBcIk9cIjtcclxufSkoR2FtZVRpbGVNYXJrIHx8IChHYW1lVGlsZU1hcmsgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVUaWxlU3RhdGU7XHJcbihmdW5jdGlvbiAoR2FtZVRpbGVTdGF0ZSkge1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiRW1wdHlcIl0gPSAwXSA9IFwiRW1wdHlcIjtcclxuICAgIEdhbWVUaWxlU3RhdGVbR2FtZVRpbGVTdGF0ZVtcIkhvdmVyZWRcIl0gPSAxXSA9IFwiSG92ZXJlZFwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiTWFya2VkXCJdID0gMl0gPSBcIk1hcmtlZFwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiV2lubmluZ1wiXSA9IDNdID0gXCJXaW5uaW5nXCI7XHJcbn0pKEdhbWVUaWxlU3RhdGUgfHwgKEdhbWVUaWxlU3RhdGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVXaW5uZXI7XHJcbihmdW5jdGlvbiAoR2FtZVdpbm5lcikge1xyXG4gICAgR2FtZVdpbm5lcltHYW1lV2lubmVyW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJUaWVcIl0gPSAxXSA9IFwiVGllXCI7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJQbGF5ZXIxXCJdID0gMl0gPSBcIlBsYXllcjFcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlBsYXllcjJcIl0gPSAzXSA9IFwiUGxheWVyMlwiO1xyXG59KShHYW1lV2lubmVyIHx8IChHYW1lV2lubmVyID0ge30pKTtcclxuIiwiZXhwb3J0IHZhciBQYXJ0aWNsZUVmZmVjdDtcclxuKGZ1bmN0aW9uIChQYXJ0aWNsZUVmZmVjdCkge1xyXG4gICAgUGFydGljbGVFZmZlY3RbUGFydGljbGVFZmZlY3RbXCJTbW9rZVwiXSA9IDBdID0gXCJTbW9rZVwiO1xyXG4gICAgUGFydGljbGVFZmZlY3RbUGFydGljbGVFZmZlY3RbXCJFeHBsb3Npb25cIl0gPSAxXSA9IFwiRXhwbG9zaW9uXCI7XHJcbn0pKFBhcnRpY2xlRWZmZWN0IHx8IChQYXJ0aWNsZUVmZmVjdCA9IHt9KSk7XHJcbiIsImltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212QmVoYXZpb3JcIjtcclxuaW1wb3J0IHsgRW5naW5lLCBSZW5kZXJlciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZFbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIEN1cnNvclJlbmRlcmVyIGV4dGVuZHMgTVZCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWFnZV8pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBNVlNwcml0ZShpbWFnZV8pO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oRW5naW5lLk1vdXNlUG9zaXRpb24ueCwgRW5naW5lLk1vdXNlUG9zaXRpb24ueSk7XHJcbiAgICAgICAgUmVuZGVyZXIuU2V0Q3Vyc29yKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lVGlsZSB9IGZyb20gXCIuL0dhbWVUaWxlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lVGlsZU1hcmsgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVNYXJrXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5uZXIgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVdpbm5lclwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm4gPSAwO1xyXG4gICAgICAgIHRoaXMuX2dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVRpbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fZ2FtZVdpbm5lciA9IEdhbWVXaW5uZXIuTm9uZTtcclxuICAgICAgICB0aGlzLl93aW5uaW5nQ29uZGl0aW9ucyA9IFtcclxuICAgICAgICAgICAgWzAsIDEsIDJdLFxyXG4gICAgICAgICAgICBbMywgNCwgNV0sXHJcbiAgICAgICAgICAgIFs2LCA3LCA4XSxcclxuICAgICAgICAgICAgWzAsIDMsIDZdLFxyXG4gICAgICAgICAgICBbMSwgNCwgN10sXHJcbiAgICAgICAgICAgIFsyLCA1LCA4XSxcclxuICAgICAgICAgICAgWzAsIDQsIDhdLFxyXG4gICAgICAgICAgICBbMiwgNCwgNl1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgR2FtZVRpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDgyMCArICgxNDAgKiBpKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiA1MTAgKyAoMTQwICogailcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVRpbGVzLnB1c2gobmV3VGlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5SZXNldCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IFBsYXllclR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllclR1cm47XHJcbiAgICB9XHJcbiAgICBnZXQgR2FtZVdpbm5lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVdpbm5lcjtcclxuICAgIH1cclxuICAgIFBsYXkoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrR2FtZU91dGNvbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lT3ZlciAmJiB0aWxlLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUuQ2hlY2soRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFyayA9ICh0aGlzLl9wbGF5ZXJUdXJuID09PSAwKSA/IEdhbWVUaWxlTWFyay5YIDogR2FtZVRpbGVNYXJrLk87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLlNldChHYW1lVGlsZVN0YXRlLk1hcmtlZCwgbWFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm4gPSAodGhpcy5fcGxheWVyVHVybiA9PT0gMCkgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tHYW1lT3V0Y29tZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLlNldChHYW1lVGlsZVN0YXRlLkhvdmVyZWQsIG1hcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuRW1wdHksIEdhbWVUaWxlTWFyay5Ob25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLkRyYXcoKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrR2FtZU91dGNvbWUgJiYgIXRoaXMuX2dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVybWluZUdhbWVPdXRjb21lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLlNldChHYW1lVGlsZVN0YXRlLkVtcHR5LCBHYW1lVGlsZU1hcmsuTm9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gR2FtZVdpbm5lci5Ob25lO1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFVwZGF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBkZXRlcm1pbmVHYW1lT3V0Y29tZSgpIHtcclxuICAgICAgICBsZXQgcm91bmRXb24gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IDc7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgd2luQ29uZGl0aW9uID0gdGhpcy5fd2lubmluZ0NvbmRpdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5fZ2FtZVRpbGVzW3dpbkNvbmRpdGlvblswXV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLl9nYW1lVGlsZXNbd2luQ29uZGl0aW9uWzFdXTtcclxuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuX2dhbWVUaWxlc1t3aW5Db25kaXRpb25bMl1dO1xyXG4gICAgICAgICAgICBpZiAoYS5TdGF0ZSAhPT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQgJiYgYi5TdGF0ZSAhPT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQgJiZcclxuICAgICAgICAgICAgICAgIGMuU3RhdGUgIT09IEdhbWVUaWxlU3RhdGUuTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5NYXJraW5nID09PSBiLk1hcmtpbmcgJiYgYi5NYXJraW5nID09PSBjLk1hcmtpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGEuU2V0KEdhbWVUaWxlU3RhdGUuV2lubmluZywgYS5NYXJraW5nKTtcclxuICAgICAgICAgICAgICAgIGIuU2V0KEdhbWVUaWxlU3RhdGUuV2lubmluZywgYi5NYXJraW5nKTtcclxuICAgICAgICAgICAgICAgIGMuU2V0KEdhbWVUaWxlU3RhdGUuV2lubmluZywgYy5NYXJraW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSAoYS5NYXJraW5nID09PSBHYW1lVGlsZU1hcmsuTykgP1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVXaW5uZXIuUGxheWVyMiA6IEdhbWVXaW5uZXIuUGxheWVyMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91bmRXb24pIHtcclxuICAgICAgICAgICAgbGV0IGFsbFRpbGVzTWFya2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2dhbWVUaWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lVGlsZXNbaW5kZXhdLlN0YXRlID09PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWxsVGlsZXNNYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbGxUaWxlc01hcmtlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVdpbm5lciA9IEdhbWVXaW5uZXIuVGllO1xyXG4gICAgICAgICAgICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3VuZFdvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuUmVxdWVzdFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZFbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVMb2dvIHtcclxuICAgIGNvbnN0cnVjdG9yKGljb25JbWFnZV8sIHRleHRJbWFnZV8pIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlID0gMDtcclxuICAgICAgICB0aGlzLl9pY29uID0gbmV3IE1WU3ByaXRlKGljb25JbWFnZV8pO1xyXG4gICAgICAgIHRoaXMuX2ljb24uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDExNjAsIDI2MCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IG5ldyBNVlNwcml0ZSh0ZXh0SW1hZ2VfKTtcclxuICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5NjAsIDI2MCk7XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aGlzLl9hbmltYXRlKSAqIDE1O1xyXG4gICAgICAgIHRoaXMuX2ljb24uVHJhbnNmb3JtLlNldFJvdGF0aW9uKHdhdmUpO1xyXG4gICAgICAgIGNvbnN0IHB1bHNlID0gTWF0aC5zaW4odGhpcy5fYW5pbWF0ZSAqIDEuMykgKiAwLjE7XHJcbiAgICAgICAgdGhpcy5faWNvbi5UcmFuc2Zvcm0uU2V0U2NhbGUoMSArIHB1bHNlLCAxICsgcHVsc2UpO1xyXG4gICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHRoaXMuX3RleHQuVHJhbnNmb3JtLlBvc2l0aW9uLngsIDI2MCArIHdhdmUpO1xyXG4gICAgICAgIHRoaXMuX2ljb24uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3RleHQuRHJhdygpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlID0gKHRoaXMuX2FuaW1hdGUgPiAxMDAwMDApID9cclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZSAtIDEwMDAwMCA6IHRoaXMuX2FuaW1hdGUgKyAoRW5naW5lLkRlbHRhVGltZSAqIDAuMDMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lVGlsZU1hcmsgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVNYXJrXCI7XHJcbmltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZVRpbGUge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb25fKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHYW1lVGlsZVN0YXRlLkVtcHR5O1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEFzID0gR2FtZVRpbGVNYXJrLk5vbmU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9FTVBUWSkpO1xyXG4gICAgICAgIHRoaXMuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSk7XHJcbiAgICB9XHJcbiAgICBnZXQgVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGUuVHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgZ2V0IFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBNYXJraW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZWRBcztcclxuICAgIH1cclxuICAgIENoZWNrKG1vdXNlUG9zaXRpb25fKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVHJhbnNmb3JtLlJlY3QuQ29udGFpbnMobW91c2VQb3NpdGlvbl8ueCwgbW91c2VQb3NpdGlvbl8ueSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFNldChzdGF0ZV8sIG1hcmtpbmdfKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09IHN0YXRlXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGVfO1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEFzID0gbWFya2luZ187XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuRW1wdHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0VNUFRZKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLkhvdmVyZWQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0hPVkVSX1gpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuTWFya2VkOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtlZEFzID09PSBHYW1lVGlsZU1hcmsuTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfTykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLldpbm5pbmc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX08pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZCZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBTbW9rZUVmZmVjdCB9IGZyb20gXCIuL1Ntb2tlRWZmZWN0XCI7XHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZUhhbmRsZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fbGFzdEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTbW9rZUVmZmVjdCA9IG5ldyBTbW9rZUVmZmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXMucHVzaChuZXdTbW9rZUVmZmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlcy5mb3JFYWNoKGVmZmVjdCA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdC5EcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQbGF5KHBhcnRpY2xlRWZmZWN0XywgcG9zaXRpb25fKSB7XHJcbiAgICAgICAgbGV0IGZpbmRpbmdQYXJ0aWNsZSA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlIChmaW5kaW5nUGFydGljbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcnRpY2xlc1t0aGlzLl9sYXN0SW5kZXhdLlBhcnRpY2xlVHlwZSA9PT0gcGFydGljbGVFZmZlY3RfKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5kaW5nUGFydGljbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1t0aGlzLl9sYXN0SW5kZXhdLlBsYXkocG9zaXRpb25fKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0SW5kZXggPSAodGhpcy5fbGFzdEluZGV4ICsgMSA+IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGgpID9cclxuICAgICAgICAgICAgICAgIDAgOiB0aGlzLl9sYXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5leHBvcnQgY2xhc3MgUGxheWVySGVhbHRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGZ1bGxIUEltYWdlXywgZW1wdHlIUEltYWdlXywgc2NyZWVuUG9zaXRpb25fID0geyB4OiAyNDAsIHk6IDM1MCB9KSB7XHJcbiAgICAgICAgdGhpcy5fbWF4SGVhbHRoID0gMztcclxuICAgICAgICB0aGlzLl9zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fZnVsbEltYWdlID0gZnVsbEhQSW1hZ2VfO1xyXG4gICAgICAgIHRoaXMuX2VtcHR5SW1hZ2UgPSBlbXB0eUhQSW1hZ2VfO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMuX21heEhlYWx0aDtcclxuICAgICAgICBsZXQgcG9zaXRpb25YID0gc2NyZWVuUG9zaXRpb25fLng7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX21heEhlYWx0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTcHJpdGUgPSBuZXcgTVZTcHJpdGUodGhpcy5fZnVsbEltYWdlKTtcclxuICAgICAgICAgICAgbmV3U3ByaXRlLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvblggKyAoaW5kZXggKiA2MCksIHNjcmVlblBvc2l0aW9uXy55KTtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlcy5wdXNoKG5ld1Nwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IEhQKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcbiAgICBSZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLl9tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbWFnZXMoKTtcclxuICAgIH1cclxuICAgIExvc2VIZWFsdGgoKSB7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbWFnZXMoKTtcclxuICAgIH1cclxuICAgIERyYXcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX21heEhlYWx0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2luZGV4XS5EcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSW1hZ2VzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tYXhIZWFsdGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1tpbmRleF0uU2V0SW1hZ2UodGhpcy5faGVhbHRoID4gaW5kZXggP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbEltYWdlIDogdGhpcy5fZW1wdHlJbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUVmZmVjdCB9IGZyb20gXCIuLi9lbnVtcy9QYXJ0aWNsZUVmZmVjdFwiO1xyXG5leHBvcnQgY2xhc3MgU21va2VFZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5QYXJ0aWNsZVR5cGUgPSBQYXJ0aWNsZUVmZmVjdC5TbW9rZTtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZUNvdW50ID0gMTA7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVEaXJlY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlNNT0tFX1BBUlRJQ0xFKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQbGF5KHBvc2l0aW9uXykge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9wYXJ0aWNsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNjYWxlID0gKE1hdGgucmFuZG9tKCkgKiAwLjgpICsgMC41O1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRTY2FsZShyYW5kb21TY2FsZSwgcmFuZG9tU2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TcGVlZFkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZURpcmVjdGlvbnMucHVzaCh7IHg6IHJhbmRvbVNwZWVkWCwgeTogcmFuZG9tU3BlZWRZIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRBbHBoYShyYW5kb21TY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNjYWxlLng7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDAuMDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gc2NhbGUgKiAwLjk1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uVHJhbnNsYXRlKHRoaXMuX3BhcnRpY2xlRGlyZWN0aW9uc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUobmV3U2NhbGUsIG5ld1NjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldEFscGhhKG5ld1NjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlRleHQgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZUZXh0XCI7XHJcbmltcG9ydCB7IE1WVGV4dEFsaWdubWVudCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmltcG9ydCB7IE1WRm9udFN0eWxlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9lbnVtcy9tdkZvbnRTdHlsZVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vb2JqZWN0cy9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5uZXIgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVdpbm5lclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJIZWFsdGggfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJIZWFsdGhcIjtcclxuaW1wb3J0IHsgTVZCdXR0b24gfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZCdXR0b25cIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9TdHJpbmdzXCI7XHJcbmltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lcGxheVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0ID0gbmV3IE1WVGV4dChcIllPVVIgVFVSTiwgXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAyXCIpO1xyXG4gICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVSZXN1bHRUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbiA9IDEyMDtcclxuICAgICAgICB0aGlzLnNldHVwVGV4dEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGggPSBuZXcgUGxheWVySGVhbHRoKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuSEVBUlQpLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZKSwgeyB4OiAyMjAsIHk6IDY1MCB9KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoID0gbmV3IFBsYXllckhlYWx0aChJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSksIHsgeDogMTU4MCwgeTogNjUwIH0pO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fWCkpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduLlRyYW5zZm9ybS5TZXRQb3NpdGlvbigyODAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlNpZ24gPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9PKSk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlNpZ24uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDE2NDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXRjaEJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTl9IT1ZFUiksIHsgeDogNzgwLCB5OiA2NTAgfSk7XHJcbiAgICAgICAgdGhpcy5fbWVudUJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5NRU5VX0JVVFRPTl9IT1ZFUiksIHsgeDogMTE0MCwgeTogNjUwIH0pO1xyXG4gICAgICAgIHRoaXMuX3Jlc3RhcnRCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5SRVNUQVJUX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT05fSE9WRVIpLCB7IHg6IDIwMCwgeTogOTYwIH0pO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyU2lnbi5EcmF3KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mdWxsR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc3RhcnRCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc3RhcnRCdXR0b24uRHJhdygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgIT09IEdhbWVXaW5uZXIuTm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVSZXN1bHRUaW1lciA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lUmVzdWx0VGltZXIgLT0gRW5naW5lLkRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wbGF5ZXIxSGVhbHRoLkhQID09PSAwIHx8IHRoaXMuX3BsYXllcjJIZWFsdGguSFAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVCb2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbWF0Y2hCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fbWVudUJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5NYWluTWVudTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yZW1hdGNoQnV0dG9uLkRyYXcoKTtcclxuICAgICAgICAgICAgdGhpcy5fbWVudUJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlR2FtZUJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVCb2FyZC5QbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5SZXF1ZXN0VXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXF1ZXN0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5Ob25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDkwMCwgOTYwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRWYWx1ZShTdHJpbmdzLkdBTUVfQUNUSVZFX1RFWFQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5QbGF5ZXJUdXJuID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0VmFsdWUoXCJQTEFZRVIgMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRDb2xvcigyNTQsIDIzNCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRWYWx1ZShcIlBMQVlFUiAyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldENvbG9yKDQ1LCAyNDIsIDIzOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuVGllKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDk2MCwgOTYwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRWYWx1ZShTdHJpbmdzLkdBTUVfVElFRF9URVhUKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldFZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyID0gdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuR0FNRV9XSU5fVEVYVCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuUGxheWVyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguTG9zZUhlYWx0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuUGxheWVyMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguTG9zZUhlYWx0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyID0gdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldHVwVGV4dEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRDb2xvcig3MywgODMsIDk3KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMTAzNSwgOTYwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0Q29sb3IoMjU0LCAyMzQsIDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbigyODAsIDYwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVRleHQuU2V0Rm9udFByb3BlcnRpZXMoXCJPc3dhbGQtUmVndWxhclwiLCAzMiwgTVZUZXh0QWxpZ25tZW50LkNlbnRlciwgTVZGb250U3R5bGUuSXRhbGljKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlNldENvbG9yKDI1NCwgMjM0LCAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMTY0MCwgNjAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuU2V0Q29sb3IoNDUsIDI0MiwgMjM5KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVkJ1dHRvbiB9IGZyb20gJy4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uJztcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IEltYWdlTG9hZGVyLCBJbWFnZUxpYnJhcnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSBcIi4uLy4uL2RhdGEvU3RyaW5nc1wiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX3BsYXlCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5QTEFZX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUExBWV9CVVRUT05fSE9WRVIpLCB7IHg6IDgwMCwgeTogNjYwIH0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWRpdHNCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQ1JFRElUU19CVVRUT05fSE9WRVIpLCB7IHg6IDEyMjAsIHk6IDU3MCB9KTtcclxuICAgICAgICB0aGlzLl9leGl0QnV0dG9uID0gbmV3IE1WQnV0dG9uKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuRVhJVF9CVVRUT04pLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSKSwgeyB4OiAxMjIwLCB5OiA3MjAgfSk7XHJcbiAgICAgICAgdGhpcy5fdGFnbGluZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCkpO1xyXG4gICAgICAgIHRoaXMuX3RhZ2xpbmUuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDk2MCwgODgwKTtcclxuICAgIH1cclxuICAgIFBsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXlCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5HYW1lcGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jcmVkaXRzQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oU3RyaW5ncy5DUkVESVRTX1VSTCwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXhpdEJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFN0cmluZ3MuRVhJVF9VUkwsIFwiX3NlbGZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxheUJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fY3JlZGl0c0J1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fZXhpdEJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fdGFnbGluZS5EcmF3KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcnRpY2xlRWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlRWZmZWN0LkRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFydGljbGVIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5pbXBvcnQgeyBJbWFnZUxpYnJhcnksIEltYWdlTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUVmZmVjdCB9IGZyb20gXCIuLi9lbnVtcy9QYXJ0aWNsZUVmZmVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lTG9nbyB9IGZyb20gXCIuLi9vYmplY3RzL0dhbWVMb2dvXCI7XHJcbmV4cG9ydCBjbGFzcyBVbml2ZXJzYWxTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CQUNLR1JPVU5EKSk7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA1NDApO1xyXG4gICAgICAgIHRoaXMuX21vb252YWxrTG9nbyA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08pKTtcclxuICAgICAgICB0aGlzLl9tb29udmFsa0xvZ28uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDIyMCwgMTIwKTtcclxuICAgICAgICB0aGlzLl9nYW1lTG9nbyA9IG5ldyBHYW1lTG9nbyhJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkxPR09fSUNPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuTE9HT19URVhUKSk7XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVMb2dvLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9tb29udmFsa0xvZ28uRHJhdygpO1xyXG4gICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgcGFydGljbGVIYW5kbGVyLlBsYXkoUGFydGljbGVFZmZlY3QuU21va2UsIEVuZ2luZS5WaWV3cG9ydE1vdXNlUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==