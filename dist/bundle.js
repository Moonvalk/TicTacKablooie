/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
ImageLibrary.BUTTON = './dist/data/images/Button.png';
ImageLibrary.BUTTON_HOVER = './dist/data/images/Button_Hover.png';
ImageLibrary.HEART = './dist/data/images/Heart.png';
ImageLibrary.HEART_EMPTY = './dist/data/images/Heart_Empty.png';
ImageLibrary.TILE_EMPTY = './dist/data/images/Tiles/Tile_Empty.png';
ImageLibrary.TILE_X = './dist/data/images/Tiles/Tile_X.png';
ImageLibrary.TILE_O = './dist/data/images/Tiles/Tile_O.png';
ImageLibrary.TILE_HOVER_X = './dist/data/images/Tiles/Tile_Hover_X.png';
ImageLibrary.TILE_HOVER_O = './dist/data/images/Tiles/Tile_Hover_O.png';
ImageLibrary.TILE_WINNING_X = './dist/data/images/Tiles/Tile_Winning_X.png';
ImageLibrary.TILE_WINNING_O = './dist/data/images/Tiles/Tile_Winning_O.png';
const ImageLoader = new _engine_components_mvImageLoader__WEBPACK_IMPORTED_MODULE_0__.MVImageLoader();
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
Strings._GAME_WIN_TEXT = "WINNER!";
Strings._GAME_ACTIVE_TEXT = "YOUR TURN, ";
Strings._GAME_TIED_TEXT = "TIED!";


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
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");




class MVButton {
    constructor(image_, position_, textValue_) {
        this._sprite = new _mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(image_);
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
            this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.BUTTON_HOVER));
        }
        else {
            this._sprite.SetImage(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.BUTTON));
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
    }
    get MousePosition() {
        return this._mousePosition;
    }
    get IsUserClicking() {
        return this._isUserClicking;
    }
    get IsRunning() {
        return this._isEngineRunning;
    }
    Start() {
        this._isEngineRunning = true;
        this.GameLoop();
    }
    GameLoop() {
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
        this._context.drawImage(image_, -(transform_.Size.x / 2) * this._resolution.x, -(transform_.Size.y / 2) * this._resolution.y, (transform_.Size.x * this._resolution.x), (transform_.Size.y * this._resolution.y));
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
        this._animate = (this._animate > 100000) ? this._animate - 100000 : this._animate + 0.01;
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











class GameplayScene {
    constructor() {
        this.RequestScene = -1;
        this._instructionText = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("YOUR TURN, ");
        this._playerTurnText = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 1");
        this._player1Text = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 1");
        this._player2Text = new _engine_components_mvText__WEBPACK_IMPORTED_MODULE_0__.MVText("PLAYER 2");
        this._fullGameOver = false;
        this._gameResultTimer = 0;
        this._gameResultWaitDuration = 500;
        this.setupTextElements();
        this._gameBoard = new _objects_GameBoard__WEBPACK_IMPORTED_MODULE_3__.GameBoard();
        this._player1Health = new _objects_PlayerHealth__WEBPACK_IMPORTED_MODULE_6__.PlayerHealth(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART_EMPTY), { x: 240, y: 350 });
        this._player2Health = new _objects_PlayerHealth__WEBPACK_IMPORTED_MODULE_6__.PlayerHealth(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.HEART_EMPTY), { x: 1560, y: 350 });
        this._rematchButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.BUTTON), { x: 820, y: 600 }, 'REMATCH');
        this._menuButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_7__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_4__.ImageLibrary.BUTTON), { x: 1100, y: 600 }, 'MENU');
    }
    Play() {
        this._instructionText.Draw();
        this._playerTurnText.Draw();
        this._player1Text.Draw();
        this._player2Text.Draw();
        this._player1Health.Draw();
        this._player2Health.Draw();
        if (!this._fullGameOver) {
            if (this._gameBoard.GameWinner !== _enums_GameWinner__WEBPACK_IMPORTED_MODULE_5__.GameWinner.None) {
                if (this._gameResultTimer > 0) {
                    this._gameResultTimer -= 1;
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
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings._GAME_ACTIVE_TEXT);
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
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings._GAME_TIED_TEXT);
                this._playerTurnText.SetValue("");
                this._gameResultTimer = this._gameResultWaitDuration;
            }
            else {
                this._instructionText.Transform.SetPosition(900, 960);
                this._instructionText.SetValue(_data_Strings__WEBPACK_IMPORTED_MODULE_10__.Strings._GAME_WIN_TEXT);
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
        this._player1Text.Transform.SetPosition(300, 300);
        this._player1Text.SetFontProperties("Oswald-Regular", 32, _engine_enums_mvTextAlignment__WEBPACK_IMPORTED_MODULE_1__.MVTextAlignment.Center, _engine_enums_mvFontStyle__WEBPACK_IMPORTED_MODULE_2__.MVFontStyle.Italic);
        this._player1Text.SetMaxWidth(300);
        this._player1Text.SetColor(254, 234, 0);
        this._player2Text.Transform.SetPosition(1620, 300);
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




class MainMenuScene {
    constructor() {
        this.RequestScene = -1;
        this._playButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.BUTTON), { x: 960, y: 500 }, 'PLAY');
        this._creditsButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.BUTTON), { x: 960, y: 620 }, 'CREDITS');
        this._exitButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.BUTTON), { x: 960, y: 740 }, 'EXIT');
    }
    Play() {
        if (this._playButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.Gameplay;
            }
        }
        else if (this._creditsButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open("https://moonvalk.com/", "_blank");
            }
        }
        else if (this._exitButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open("https://moonvalk.com/", "_blank");
            }
        }
        this._playButton.Draw();
        this._creditsButton.Draw();
        this._exitButton.Draw();
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
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _objects_GameLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/GameLogo */ "./src/game/objects/GameLogo.ts");



class UniversalScene {
    constructor() {
        this.RequestScene = -1;
        this._background = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.BACKGROUND));
        this._background.Transform.SetPosition(960, 540);
        this._moonvalkLogo = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.MOONVALK_LOGO));
        this._moonvalkLogo.Transform.SetPosition(1720, 980);
        this._gameLogo = new _objects_GameLogo__WEBPACK_IMPORTED_MODULE_2__.GameLogo(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.LOGO_ICON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.LOGO_TEXT));
    }
    Play() {
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_objects_CursorRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/objects/CursorRenderer */ "./src/game/objects/CursorRenderer.ts");
/* harmony import */ var _game_SceneHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/SceneHandler */ "./src/game/SceneHandler.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/mvBehavior */ "./src/engine/mvBehavior.ts");




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
        cursor = new _game_objects_CursorRenderer__WEBPACK_IMPORTED_MODULE_0__.CursorRenderer(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLibrary.CURSOR));
    }
}
const Main = new MVEngineMain();
let sceneHandler;
let cursor;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMscUVBQXNCLEdBQUcsOERBQWUsQ0FBQyxxRUFBc0I7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rRDtBQUNaO0FBQ1k7QUFDZDtBQUNqRDtBQUNBLElBQUksa0VBQW1CO0FBQ3ZCO0FBQ0EsMkJBQTJCLDBEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBWTtBQUN2QyxxQkFBcUIsd0VBQWMsQ0FBQyw4REFBZSxDQUFDLGtFQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZGF0YS9JbWFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9kYXRhL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9tdkJ1dHRvbi50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9tdkltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212VGV4dC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvZW51bXMvbXZGb250U3R5bGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2VudW1zL212UmVuZGVyYWJsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2VudW1zL212VGV4dEFsaWdubWVudC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvbXZCZWhhdmlvci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvbXZFbmdpbmUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL3NldHVwL212RGlzcGxheS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvdXRpbC9leHRtYXRoLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS92aWV3L212Vmlld3BvcnQudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9TY2VuZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9HYW1lVGlsZU1hcmsudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9HYW1lVGlsZVN0YXRlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvR2FtZVdpbm5lci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvQ3Vyc29yUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvR2FtZUxvZ28udHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0dhbWVUaWxlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9QbGF5ZXJIZWFsdGgudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9zY2VuZXMvR2FtZXBsYXlTY2VuZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL3NjZW5lcy9NYWluTWVudVNjZW5lLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvc2NlbmVzL1VuaXZlcnNhbFNjZW5lLnRzIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1WSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vZW5naW5lL2NvbXBvbmVudHMvbXZJbWFnZUxvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgSW1hZ2VMaWJyYXJ5IHtcclxufVxyXG5JbWFnZUxpYnJhcnkuQkFDS0dST1VORCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQmFja2dyb3VuZC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQ1VSU09SID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9DdXJzb3IucG5nJztcclxuSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL01vb252YWxrX0xvZ28ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkxPR09fSUNPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvTG9nb19JY29uLnBuZyc7XHJcbkltYWdlTGlicmFyeS5MT0dPX1RFWFQgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0xvZ29fVGV4dC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b24ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkJVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5IRUFSVCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvSGVhcnQucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9IZWFydF9FbXB0eS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9FTVBUWSA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9FbXB0eS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9YID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX1gucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfTyA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9PLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX0hPVkVSX1ggPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfSG92ZXJfWC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX0hvdmVyX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX1dpbm5pbmdfWC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfV2lubmluZ19PLnBuZyc7XHJcbmV4cG9ydCBjb25zdCBJbWFnZUxvYWRlciA9IG5ldyBNVkltYWdlTG9hZGVyKCk7XHJcbkltYWdlTG9hZGVyLkFkZChbXHJcbiAgICBJbWFnZUxpYnJhcnkuQkFDS0dST1VORCxcclxuICAgIEltYWdlTGlicmFyeS5DVVJTT1IsXHJcbiAgICBJbWFnZUxpYnJhcnkuTU9PTlZBTEtfTE9HTyxcclxuICAgIEltYWdlTGlicmFyeS5MT0dPX0lDT04sXHJcbiAgICBJbWFnZUxpYnJhcnkuTE9HT19URVhULFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkJVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5CVVRUT05fSE9WRVIsXHJcbiAgICBJbWFnZUxpYnJhcnkuSEVBUlQsXHJcbiAgICBJbWFnZUxpYnJhcnkuSEVBUlRfRU1QVFksXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9FTVBUWSxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX1gsXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfWCxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX0hPVkVSX08sXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX08sXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX1hcclxuXSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTdHJpbmdzIHtcclxufVxyXG5TdHJpbmdzLl9HQU1FX1dJTl9URVhUID0gXCJXSU5ORVIhXCI7XHJcblN0cmluZ3MuX0dBTUVfQUNUSVZFX1RFWFQgPSBcIllPVVIgVFVSTiwgXCI7XHJcblN0cmluZ3MuX0dBTUVfVElFRF9URVhUID0gXCJUSUVEIVwiO1xyXG4iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHhfLCB5Xywgd2lkdGhfLCBoZWlnaHRfKSB7XHJcbiAgICAgICAgdGhpcy5Qb3NpdGlvbiA9IHsgeDogeF8sIHk6IHlfIH07XHJcbiAgICAgICAgdGhpcy5TaXplID0geyB4OiB3aWR0aF8sIHk6IGhlaWdodF8gfTtcclxuICAgIH1cclxuICAgIENvbnRhaW5zKHBvaW50WF8sIHBvaW50WV8pIHtcclxuICAgICAgICByZXR1cm4gKHBvaW50WF8gPiB0aGlzLlBvc2l0aW9uLnggJiYgcG9pbnRYXyA8IHRoaXMuUG9zaXRpb24ueCArIHRoaXMuU2l6ZS54ICYmXHJcbiAgICAgICAgICAgIHBvaW50WV8gPiB0aGlzLlBvc2l0aW9uLnkgJiYgcG9pbnRZXyA8IHRoaXMuUG9zaXRpb24ueSArIHRoaXMuU2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuL1JlY3RhbmdsZSc7XHJcbmltcG9ydCB7IEV4dE1hdGggfSBmcm9tICcuLi91dGlsL2V4dG1hdGgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL212RW5naW5lJztcclxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9O1xyXG4gICAgICAgIHRoaXMuX3RhcmdldFNpemUgPSB7IHg6IDMwMCwgeTogMzAwIH07XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZSA9IHsgeDogMzAwLCB5OiAzMDAgfTtcclxuICAgICAgICB0aGlzLl9zY2FsZSA9IHsgeDogMSwgeTogMSB9O1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcclxuICAgIH1cclxuICAgIGdldCBQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2l6ZTtcclxuICAgIH1cclxuICAgIGdldCBTY2FsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7XHJcbiAgICB9XHJcbiAgICBnZXQgUm90YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IFZpZXdwb3J0U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLlNpemUueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5TaXplLnkgKiBSZW5kZXJlci5SZXNvbHV0aW9uLnkgfTtcclxuICAgIH1cclxuICAgIGdldCBWaWV3cG9ydFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuUG9zaXRpb24ueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5Qb3NpdGlvbi55ICogUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgUmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLlZpZXdwb3J0UG9zaXRpb24ueCAtICh0aGlzLlZpZXdwb3J0U2l6ZS54IC8gMiksIHRoaXMuVmlld3BvcnRQb3NpdGlvbi55IC0gKHRoaXMuVmlld3BvcnRTaXplLnkgLyAyKSwgdGhpcy5WaWV3cG9ydFNpemUueCwgdGhpcy5WaWV3cG9ydFNpemUueSk7XHJcbiAgICB9XHJcbiAgICBTZXRGcm9tSW1hZ2VEYXRhKGltYWdlXykge1xyXG4gICAgICAgIGlmICghaW1hZ2VfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRTaXplKGltYWdlXy53aWR0aCwgaW1hZ2VfLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZS54ID0gdGhpcy5fdGFyZ2V0U2l6ZS54O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueSA9IHRoaXMuX3RhcmdldFNpemUueTtcclxuICAgIH1cclxuICAgIFNldEZyb21UcmFuc2Zvcm0odHJhbnNmb3JtXykge1xyXG4gICAgICAgIHRoaXMuU2V0U2l6ZSh0cmFuc2Zvcm1fLlNpemUueCwgdHJhbnNmb3JtXy5TaXplLnkpO1xyXG4gICAgICAgIHRoaXMuU2V0U2NhbGUodHJhbnNmb3JtXy5TY2FsZS54LCB0cmFuc2Zvcm1fLlNjYWxlLnkpO1xyXG4gICAgICAgIHRoaXMuU2V0UG9zaXRpb24odHJhbnNmb3JtXy5Qb3NpdGlvbi54LCB0cmFuc2Zvcm1fLlBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuU2V0Um90YXRpb24odHJhbnNmb3JtXy5Sb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBTZXRTY2FsZShzY2FsZVhfLCBzY2FsZVlfKSB7XHJcbiAgICAgICAgdGhpcy5fc2NhbGUueCA9IHNjYWxlWF87XHJcbiAgICAgICAgdGhpcy5fc2NhbGUueSA9IHNjYWxlWV87XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJTaXplKCk7XHJcbiAgICB9XHJcbiAgICBTZXRTaXplKHdpZHRoXywgaGVpZ2h0Xykge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldFNpemUueCA9IHdpZHRoXztcclxuICAgICAgICB0aGlzLl90YXJnZXRTaXplLnkgPSBoZWlnaHRfO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgU2V0UG9zaXRpb24ocG9zaXRpb25YXywgcG9zaXRpb25ZXykge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnggPSBwb3NpdGlvblhfO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgPSBwb3NpdGlvbllfO1xyXG4gICAgfVxyXG4gICAgU2V0RGVwdGgoZGVwdGhfKSB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24ueiA9IGRlcHRoXztcclxuICAgIH1cclxuICAgIFNldFJvdGF0aW9uKHJvdGF0aW9uRGVncmVlc18pIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHJvdGF0aW9uRGVncmVlc18gKiBFeHRNYXRoLlRPX1JBRElBTlM7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSZW5kZXJTaXplKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueCA9ICh0aGlzLl90YXJnZXRTaXplLnggKiB0aGlzLl9zY2FsZS54KTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplLnkgPSAodGhpcy5fdGFyZ2V0U2l6ZS55ICogdGhpcy5fc2NhbGUueSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBNVlRleHQgfSBmcm9tIFwiLi9tdlRleHRcIjtcclxuaW1wb3J0IHsgTVZUZXh0QWxpZ25tZW50IH0gZnJvbSBcIi4uL2VudW1zL212VGV4dEFsaWdubWVudFwiO1xyXG5pbXBvcnQgeyBJbWFnZUxpYnJhcnksIEltYWdlTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIE1WQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlXywgcG9zaXRpb25fLCB0ZXh0VmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKGltYWdlXyk7XHJcbiAgICAgICAgdGhpcy5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25fLngsIHBvc2l0aW9uXy55KTtcclxuICAgICAgICBpZiAodGV4dFZhbHVlXykge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gbmV3IE1WVGV4dCh0ZXh0VmFsdWVfKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRUZXh0QWxpZ25tZW50KE1WVGV4dEFsaWdubWVudC5DZW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlNldEZvbnRTaXplKDM2KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRGb250RmFtaWx5KFwiT3N3YWxkLVJlZ3VsYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSArICh0aGlzLl90ZXh0LkZvbnRTaXplIC8gNCkpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRTaXplKDE1MCwgdGhpcy5fdGV4dC5Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFJvdGF0aW9uKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBJc0hvdmVyZWQobW91c2VQb3NpdGlvbl8pIHtcclxuICAgICAgICBjb25zdCBob3ZlcmVkID0gdGhpcy5Db250YWlucyhtb3VzZVBvc2l0aW9uXyk7XHJcbiAgICAgICAgaWYgKGhvdmVyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQlVUVE9OX0hPVkVSKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CVVRUT04pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvdmVyZWQ7XHJcbiAgICB9XHJcbiAgICBDb250YWlucyhwb2ludF8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlLlRyYW5zZm9ybS5SZWN0LkNvbnRhaW5zKHBvaW50Xy54LCBwb2ludF8ueSk7XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuRHJhdygpO1xyXG4gICAgICAgIChfYSA9IHRoaXMuX3RleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uL212RW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBNVkltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2FsbEltYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlZEltYWdlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0IExvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmluaXNoZWRMb2FkaW5nO1xyXG4gICAgfVxyXG4gICAgQWRkKGltYWdlVVJMc18pIHtcclxuICAgICAgICBpbWFnZVVSTHNfLmZvckVhY2goaW1nVVJMID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYWxsSW1hZ2VzLnB1c2goaW1nVVJMKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIExvYWRBbGwoKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VUb0xvYWRJbWFnZXMgPSB0aGlzLl9hbGxJbWFnZXMubWFwKChpbWdVUkwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgbmV3SW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlZEltYWdlc1tpbWdVUkxdID0gbmV3SW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5ld0ltYWdlLnNyYyA9IGltZ1VSTDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VUb0xvYWRJbWFnZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBFbmdpbmUuU3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdldChpbWFnZVVSTF8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkSW1hZ2VzW2ltYWdlVVJMX107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL212RW5naW5lJztcclxuaW1wb3J0IHsgTVZSZW5kZXJhYmxlVHlwZSB9IGZyb20gJy4uL2VudW1zL212UmVuZGVyYWJsZVR5cGUnO1xyXG5leHBvcnQgY2xhc3MgTVZTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VFbGVtZW50Xykge1xyXG4gICAgICAgIHRoaXMuUmVuZGVyVHlwZSA9IE1WUmVuZGVyYWJsZVR5cGUuSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSBpbWFnZUVsZW1lbnRfO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0uU2V0RnJvbUltYWdlRGF0YSh0aGlzLl9pbWFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgQ29udGVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBSZW5kZXJlci5BZGRUb1JlbmRlclF1ZXVlKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgU2V0SW1hZ2UoaW1hZ2VFbGVtZW50Xykge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gaW1hZ2VFbGVtZW50XztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlJlbmRlcmFibGVUeXBlIH0gZnJvbSBcIi4uL2VudW1zL212UmVuZGVyYWJsZVR5cGVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIi4vVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4uL212RW5naW5lXCI7XHJcbmltcG9ydCB7IE1WVGV4dEFsaWdubWVudCB9IGZyb20gXCIuLi9lbnVtcy9tdlRleHRBbGlnbm1lbnRcIjtcclxuaW1wb3J0IHsgTVZGb250U3R5bGUgfSBmcm9tIFwiLi4vZW51bXMvbXZGb250U3R5bGVcIjtcclxuZXhwb3J0IGNsYXNzIE1WVGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0VmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5SZW5kZXJUeXBlID0gTVZSZW5kZXJhYmxlVHlwZS5UZXh0O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIFwiO1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gMTtcclxuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IDIwO1xyXG4gICAgICAgIHRoaXMuX2ZvbnRGYW1pbHkgPSBcIkFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZm9udFN0eWxlID0gTVZGb250U3R5bGUuUmVndWxhcjtcclxuICAgICAgICB0aGlzLl9hbGlnbm1lbnQgPSBNVlRleHRBbGlnbm1lbnQuTGVmdDtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dFZhbHVlID0gdGV4dFZhbHVlXztcclxuICAgIH1cclxuICAgIGdldCBDb250ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dFZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgZ2V0IENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvciArIHRoaXMuX2FscGhhICsgXCIpXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgRm9udFN0eWxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fZm9udFN0eWxlKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhc2UgTVZGb250U3R5bGUuUmVndWxhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WRm9udFN0eWxlLkl0YWxpYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIml0YWxpYyBcIjtcclxuICAgICAgICAgICAgY2FzZSBNVkZvbnRTdHlsZS5Cb2xkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYm9sZCBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgRm9udFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xyXG4gICAgfVxyXG4gICAgZ2V0IEZvbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLkZvbnRTdHlsZSArXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbnRTaXplICogUmVuZGVyZXIuUmVzb2x1dGlvbi54KSArXHJcbiAgICAgICAgICAgICdweCAnICsgdGhpcy5fZm9udEZhbWlseTtcclxuICAgIH1cclxuICAgIGdldCBBbGlnbm1lbnQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSBNVlRleHRBbGlnbm1lbnQuTGVmdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjtcclxuICAgICAgICAgICAgY2FzZSBNVlRleHRBbGlnbm1lbnQuUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WVGV4dEFsaWdubWVudC5DZW50ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIFJlbmRlcmVyLkFkZFRvUmVuZGVyUXVldWUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBTZXRDb2xvcihyZWRfLCBncmVlbl8sIGJsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBcInJnYmEoXCIgKyByZWRfICsgXCIsIFwiICsgZ3JlZW5fICsgXCIsIFwiICsgYmx1ZV8gKyBcIiwgXCI7XHJcbiAgICB9XHJcbiAgICBTZXRBbHBoYShhbHBoYV8pIHtcclxuICAgICAgICB0aGlzLl9hbHBoYSA9IGFscGhhXztcclxuICAgIH1cclxuICAgIFNldEZvbnRTaXplKHNpemVfKSB7XHJcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSBzaXplXztcclxuICAgIH1cclxuICAgIFNldEZvbnRTdHlsZShtdkZvbnRTdHlsZV8pIHtcclxuICAgICAgICB0aGlzLl9mb250U3R5bGUgPSBtdkZvbnRTdHlsZV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250RmFtaWx5KGZvbnROYW1lXykge1xyXG4gICAgICAgIHRoaXMuX2ZvbnRGYW1pbHkgPSBmb250TmFtZV87XHJcbiAgICB9XHJcbiAgICBTZXRNYXhXaWR0aChtYXhXaWR0aF8pIHtcclxuICAgICAgICB0aGlzLlRyYW5zZm9ybS5TZXRTaXplKG1heFdpZHRoXywgdGhpcy5UcmFuc2Zvcm0uU2l6ZS55KTtcclxuICAgIH1cclxuICAgIFNldFRleHRBbGlnbm1lbnQoYWxpZ25tZW50Xykge1xyXG4gICAgICAgIHRoaXMuX2FsaWdubWVudCA9IGFsaWdubWVudF87XHJcbiAgICB9XHJcbiAgICBTZXRWYWx1ZSh2YWx1ZV8pIHtcclxuICAgICAgICB0aGlzLl90ZXh0VmFsdWUgPSB2YWx1ZV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250UHJvcGVydGllcyhmb250RmFtaWx5XywgZm9udFNpemVfLCB0ZXh0QWxpZ25tZW50XywgZm9udFN0eWxlXykge1xyXG4gICAgICAgIHRoaXMuU2V0Rm9udEZhbWlseShmb250RmFtaWx5Xyk7XHJcbiAgICAgICAgdGhpcy5TZXRGb250U2l6ZShmb250U2l6ZV8pO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dEFsaWdubWVudCh0ZXh0QWxpZ25tZW50Xyk7XHJcbiAgICAgICAgdGhpcy5TZXRGb250U3R5bGUoZm9udFN0eWxlXyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBNVkZvbnRTdHlsZTtcclxuKGZ1bmN0aW9uIChNVkZvbnRTdHlsZSkge1xyXG4gICAgTVZGb250U3R5bGVbTVZGb250U3R5bGVbXCJSZWd1bGFyXCJdID0gMF0gPSBcIlJlZ3VsYXJcIjtcclxuICAgIE1WRm9udFN0eWxlW01WRm9udFN0eWxlW1wiSXRhbGljXCJdID0gMV0gPSBcIkl0YWxpY1wiO1xyXG4gICAgTVZGb250U3R5bGVbTVZGb250U3R5bGVbXCJCb2xkXCJdID0gMl0gPSBcIkJvbGRcIjtcclxufSkoTVZGb250U3R5bGUgfHwgKE1WRm9udFN0eWxlID0ge30pKTtcclxuIiwiZXhwb3J0IHZhciBNVlJlbmRlcmFibGVUeXBlO1xyXG4oZnVuY3Rpb24gKE1WUmVuZGVyYWJsZVR5cGUpIHtcclxuICAgIE1WUmVuZGVyYWJsZVR5cGVbTVZSZW5kZXJhYmxlVHlwZVtcIkltYWdlXCJdID0gMF0gPSBcIkltYWdlXCI7XHJcbiAgICBNVlJlbmRlcmFibGVUeXBlW01WUmVuZGVyYWJsZVR5cGVbXCJUZXh0XCJdID0gMV0gPSBcIlRleHRcIjtcclxufSkoTVZSZW5kZXJhYmxlVHlwZSB8fCAoTVZSZW5kZXJhYmxlVHlwZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgTVZUZXh0QWxpZ25tZW50O1xyXG4oZnVuY3Rpb24gKE1WVGV4dEFsaWdubWVudCkge1xyXG4gICAgTVZUZXh0QWxpZ25tZW50W01WVGV4dEFsaWdubWVudFtcIkxlZnRcIl0gPSAwXSA9IFwiTGVmdFwiO1xyXG4gICAgTVZUZXh0QWxpZ25tZW50W01WVGV4dEFsaWdubWVudFtcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XHJcbiAgICBNVlRleHRBbGlnbm1lbnRbTVZUZXh0QWxpZ25tZW50W1wiQ2VudGVyXCJdID0gMl0gPSBcIkNlbnRlclwiO1xyXG59KShNVlRleHRBbGlnbm1lbnQgfHwgKE1WVGV4dEFsaWdubWVudCA9IHt9KSk7XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuL212RW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuT25FbmFibGUoKTtcclxuICAgIH1cclxuICAgIE9uRW5hYmxlKCkge1xyXG4gICAgICAgIEVuZ2luZS5FbnF1ZXVlUnVudGltZU9iamVjdCh0aGlzKTtcclxuICAgIH1cclxuICAgIE9uRGlzYWJsZSgpIHtcclxuICAgICAgICBFbmdpbmUuRGVxdWV1ZVJ1bnRpbWVPYmplY3QodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXcvbXZWaWV3cG9ydFwiO1xyXG5leHBvcnQgY29uc3QgUmVuZGVyZXIgPSBuZXcgTVZWaWV3cG9ydCgnI2dhbWVDYW52YXMnKTtcclxuZXhwb3J0IGNsYXNzIE1WRW5naW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLl9pc1VzZXJDbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzRW5naW5lUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIFJlbmRlcmVyLlVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICBSZW5kZXJlci5DYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBSZW5kZXJlci5DYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZW5kZXJlci5DYW52YXMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faXNVc2VyQ2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgTW91c2VQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2VQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBJc1VzZXJDbGlja2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNVc2VyQ2xpY2tpbmc7XHJcbiAgICB9XHJcbiAgICBnZXQgSXNSdW5uaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuZ2luZVJ1bm5pbmc7XHJcbiAgICB9XHJcbiAgICBTdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9pc0VuZ2luZVJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2FtZUxvb3AoKTtcclxuICAgIH1cclxuICAgIEdhbWVMb29wKCkge1xyXG4gICAgICAgIFJlbmRlcmVyLlVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICB0aGlzLl9ydW50aW1lUXVldWUuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QuVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIuUmVuZGVyVG9DYW52YXMoKTtcclxuICAgICAgICB0aGlzLl9pc1VzZXJDbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLkdhbWVMb29wLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgRW5xdWV1ZVJ1bnRpbWVPYmplY3QobXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lUXVldWUucHVzaChtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRGVxdWV1ZVJ1bnRpbWVPYmplY3QobXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5zcGxpY2UoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrUXVldWVGb3JJdGVtKG12QmVoYXZpb3JPYmplY3RfKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3J1bnRpbWVRdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3J1bnRpbWVRdWV1ZVtpbmRleF0gPT09IG12QmVoYXZpb3JPYmplY3RfKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBFbmdpbmUgPSBuZXcgTVZFbmdpbmUoKTtcclxuIiwiZXhwb3J0IGNsYXNzIERpc3BsYXkge1xyXG59XHJcbkRpc3BsYXkuREVGQVVMVF9SRVNPTFVUSU9OID0geyB4OiAxOTIwLCB5OiAxMDgwIH07XHJcbiIsImV4cG9ydCBjbGFzcyBFeHRNYXRoIHtcclxufVxyXG5FeHRNYXRoLlRPX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwO1xyXG4iLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vc2V0dXAvbXZEaXNwbGF5JztcclxuaW1wb3J0IHsgTVZSZW5kZXJhYmxlVHlwZSB9IGZyb20gJy4uL2VudW1zL212UmVuZGVyYWJsZVR5cGUnO1xyXG5leHBvcnQgY2xhc3MgTVZWaWV3cG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNOYW1lXykge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB7IHg6IDEsIHk6IDEgfTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhc05hbWVfKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGdldCBSZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHV0aW9uO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgICAgICB0aGlzLkNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgdGhpcy5DYW52YXMuaGVpZ2h0ID0gKHRoaXMuQ2FudmFzLndpZHRoIC8gMTYpICogOTtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnggPSB0aGlzLkNhbnZhcy53aWR0aCAvIERpc3BsYXkuREVGQVVMVF9SRVNPTFVUSU9OLng7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbi55ID0gdGhpcy5fcmVzb2x1dGlvbi54O1xyXG4gICAgfVxyXG4gICAgQWRkVG9SZW5kZXJRdWV1ZShvYmplY3RfKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyTGlzdC5wdXNoKG9iamVjdF8pO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyVG9DYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5DYW52YXMud2lkdGgsIHRoaXMuQ2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3JlbmRlckxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uUmVuZGVyVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNVlJlbmRlcmFibGVUeXBlLkltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVySW1hZ2UodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uQ29udGVudHMsIHRoaXMuX3JlbmRlckxpc3RbaW5kZXhdLlRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1WUmVuZGVyYWJsZVR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbmRlclRleHQodGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uQ29udGVudHMsIHRoaXMuX3JlbmRlckxpc3RbaW5kZXhdLlRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ3Vyc29yKCk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJJbWFnZShpbWFnZV8sIHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2Zvcm1fLlBvc2l0aW9uLnggKiB0aGlzLl9yZXNvbHV0aW9uLngsIHRyYW5zZm9ybV8uUG9zaXRpb24ueSAqIHRoaXMuX3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodHJhbnNmb3JtXy5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2VfLCAtKHRyYW5zZm9ybV8uU2l6ZS54IC8gMikgKiB0aGlzLl9yZXNvbHV0aW9uLngsIC0odHJhbnNmb3JtXy5TaXplLnkgLyAyKSAqIHRoaXMuX3Jlc29sdXRpb24ueSwgKHRyYW5zZm9ybV8uU2l6ZS54ICogdGhpcy5fcmVzb2x1dGlvbi54KSwgKHRyYW5zZm9ybV8uU2l6ZS55ICogdGhpcy5fcmVzb2x1dGlvbi55KSk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJUZXh0KHRleHRfLCB0cmFuc2Zvcm1fKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSB0ZXh0Xy5Db2xvcjtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2Zvcm1fLlBvc2l0aW9uLnggKiB0aGlzLl9yZXNvbHV0aW9uLngsIHRyYW5zZm9ybV8uUG9zaXRpb24ueSAqIHRoaXMuX3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodHJhbnNmb3JtXy5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5mb250ID0gdGV4dF8uRm9udDtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRleHRBbGlnbiA9IHRleHRfLkFsaWdubWVudDtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxUZXh0KHRleHRfLlZhbHVlLCAwLCAwLCB0cmFuc2Zvcm1fLlNpemUueCAqIHRoaXMuX3Jlc29sdXRpb24ueCk7XHJcbiAgICB9XHJcbiAgICBTZXRDdXJzb3IoY3Vyc29yU3ByaXRlXykge1xyXG4gICAgICAgIHRoaXMuX2N1cnNvclNwcml0ZSA9IGN1cnNvclNwcml0ZV87XHJcbiAgICB9XHJcbiAgICByZW5kZXJDdXJzb3IoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jdXJzb3JTcHJpdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlBvc2l0aW9uLngsIHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uUG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUodGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5Sb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UodGhpcy5fY3Vyc29yU3ByaXRlLkNvbnRlbnRzLCAtKHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uU2l6ZS54IC8gMiksIC0odGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnkgLyAyKSwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLngsIHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uU2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVkJlaGF2aW9yIH0gZnJvbSBcIi4uL2VuZ2luZS9tdkJlaGF2aW9yXCI7XHJcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvTWFpbk1lbnVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lcGxheVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL0dhbWVwbGF5U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFVuaXZlcnNhbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL1VuaXZlcnNhbFNjZW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBTY2VuZUhhbmRsZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLk1haW5NZW51O1xyXG4gICAgICAgIHRoaXMuX3NjZW5lcyA9IG5ldyBBcnJheShHYW1lU3RhdGUuVG90YWwpO1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNjZW5lID0gbmV3IFVuaXZlcnNhbFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW0dhbWVTdGF0ZS5NYWluTWVudV0gPSBuZXcgTWFpbk1lbnVTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lc1tHYW1lU3RhdGUuR2FtZXBsYXldID0gbmV3IEdhbWVwbGF5U2NlbmUoKTtcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl91bml2ZXJzYWxTY2VuZS5QbGF5KCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW3RoaXMuX2dhbWVTdGF0ZV0uUGxheSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5SZXF1ZXN0U2NlbmUgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSB0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5SZXF1ZXN0U2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIEdhbWVTdGF0ZTtcclxuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJNYWluTWVudVwiXSA9IDBdID0gXCJNYWluTWVudVwiO1xyXG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIkdhbWVwbGF5XCJdID0gMV0gPSBcIkdhbWVwbGF5XCI7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiVG90YWxcIl0gPSAyXSA9IFwiVG90YWxcIjtcclxufSkoR2FtZVN0YXRlIHx8IChHYW1lU3RhdGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVUaWxlTWFyaztcclxuKGZ1bmN0aW9uIChHYW1lVGlsZU1hcmspIHtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJYXCJdID0gMV0gPSBcIlhcIjtcclxuICAgIEdhbWVUaWxlTWFya1tHYW1lVGlsZU1hcmtbXCJPXCJdID0gMl0gPSBcIk9cIjtcclxufSkoR2FtZVRpbGVNYXJrIHx8IChHYW1lVGlsZU1hcmsgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVUaWxlU3RhdGU7XHJcbihmdW5jdGlvbiAoR2FtZVRpbGVTdGF0ZSkge1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiRW1wdHlcIl0gPSAwXSA9IFwiRW1wdHlcIjtcclxuICAgIEdhbWVUaWxlU3RhdGVbR2FtZVRpbGVTdGF0ZVtcIkhvdmVyZWRcIl0gPSAxXSA9IFwiSG92ZXJlZFwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiTWFya2VkXCJdID0gMl0gPSBcIk1hcmtlZFwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiV2lubmluZ1wiXSA9IDNdID0gXCJXaW5uaW5nXCI7XHJcbn0pKEdhbWVUaWxlU3RhdGUgfHwgKEdhbWVUaWxlU3RhdGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIEdhbWVXaW5uZXI7XHJcbihmdW5jdGlvbiAoR2FtZVdpbm5lcikge1xyXG4gICAgR2FtZVdpbm5lcltHYW1lV2lubmVyW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJUaWVcIl0gPSAxXSA9IFwiVGllXCI7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJQbGF5ZXIxXCJdID0gMl0gPSBcIlBsYXllcjFcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlBsYXllcjJcIl0gPSAzXSA9IFwiUGxheWVyMlwiO1xyXG59KShHYW1lV2lubmVyIHx8IChHYW1lV2lubmVyID0ge30pKTtcclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZCZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBFbmdpbmUsIFJlbmRlcmVyIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgQ3Vyc29yUmVuZGVyZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlXykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKGltYWdlXyk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihFbmdpbmUuTW91c2VQb3NpdGlvbi54LCBFbmdpbmUuTW91c2VQb3NpdGlvbi55KTtcclxuICAgICAgICBSZW5kZXJlci5TZXRDdXJzb3IodGhpcy5fc3ByaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlIH0gZnJvbSBcIi4vR2FtZVRpbGVcIjtcclxuaW1wb3J0IHsgR2FtZVRpbGVTdGF0ZSB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlTWFyayB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZU1hcmtcIjtcclxuaW1wb3J0IHsgR2FtZVdpbm5lciB9IGZyb20gXCIuLi9lbnVtcy9HYW1lV2lubmVyXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVybiA9IDA7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lVGlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gR2FtZVdpbm5lci5Ob25lO1xyXG4gICAgICAgIHRoaXMuX3dpbm5pbmdDb25kaXRpb25zID0gW1xyXG4gICAgICAgICAgICBbMCwgMSwgMl0sXHJcbiAgICAgICAgICAgIFszLCA0LCA1XSxcclxuICAgICAgICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICAgICAgICBbMCwgMywgNl0sXHJcbiAgICAgICAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICAgICAgICBbMCwgNCwgOF0sXHJcbiAgICAgICAgICAgIFsyLCA0LCA2XVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IG5ldyBHYW1lVGlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogODIwICsgKDE0MCAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDUxMCArICgxNDAgKiBqKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lVGlsZXMucHVzaChuZXdUaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICBnZXQgUGxheWVyVHVybigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyVHVybjtcclxuICAgIH1cclxuICAgIGdldCBHYW1lV2lubmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lV2lubmVyO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICBsZXQgY2hlY2tHYW1lT3V0Y29tZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2dhbWVPdmVyICYmIHRpbGUuU3RhdGUgIT09IEdhbWVUaWxlU3RhdGUuTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5DaGVjayhFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrID0gKHRoaXMuX3BsYXllclR1cm4gPT09IDApID8gR2FtZVRpbGVNYXJrLlggOiBHYW1lVGlsZU1hcmsuTztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuTWFya2VkLCBtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVybiA9ICh0aGlzLl9wbGF5ZXJUdXJuID09PSAwKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0dhbWVPdXRjb21lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuSG92ZXJlZCwgbWFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5TZXQoR2FtZVRpbGVTdGF0ZS5FbXB0eSwgR2FtZVRpbGVNYXJrLk5vbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuRHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tHYW1lT3V0Y29tZSAmJiAhdGhpcy5fZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lR2FtZU91dGNvbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuRW1wdHksIEdhbWVUaWxlTWFyay5Ob25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSBHYW1lV2lubmVyLk5vbmU7XHJcbiAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGRldGVybWluZUdhbWVPdXRjb21lKCkge1xyXG4gICAgICAgIGxldCByb3VuZFdvbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gNzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5Db25kaXRpb24gPSB0aGlzLl93aW5uaW5nQ29uZGl0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLl9nYW1lVGlsZXNbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuX2dhbWVUaWxlc1t3aW5Db25kaXRpb25bMV1dO1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5fZ2FtZVRpbGVzW3dpbkNvbmRpdGlvblsyXV07XHJcbiAgICAgICAgICAgIGlmIChhLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCAmJiBiLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCAmJlxyXG4gICAgICAgICAgICAgICAgYy5TdGF0ZSAhPT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLk1hcmtpbmcgPT09IGIuTWFya2luZyAmJiBiLk1hcmtpbmcgPT09IGMuTWFya2luZykge1xyXG4gICAgICAgICAgICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYS5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBhLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgYi5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBiLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgYy5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBjLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVdpbm5lciA9IChhLk1hcmtpbmcgPT09IEdhbWVUaWxlTWFyay5PKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVdpbm5lci5QbGF5ZXIyIDogR2FtZVdpbm5lci5QbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3VuZFdvbikge1xyXG4gICAgICAgICAgICBsZXQgYWxsVGlsZXNNYXJrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZ2FtZVRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVUaWxlc1tpbmRleF0uU3RhdGUgPT09IEdhbWVUaWxlU3RhdGUuTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbGxUaWxlc01hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsbFRpbGVzTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gR2FtZVdpbm5lci5UaWU7XHJcbiAgICAgICAgICAgICAgICByb3VuZFdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdW5kV29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVMb2dvIHtcclxuICAgIGNvbnN0cnVjdG9yKGljb25JbWFnZV8sIHRleHRJbWFnZV8pIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlID0gMDtcclxuICAgICAgICB0aGlzLl9pY29uID0gbmV3IE1WU3ByaXRlKGljb25JbWFnZV8pO1xyXG4gICAgICAgIHRoaXMuX2ljb24uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDExNjAsIDI2MCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IG5ldyBNVlNwcml0ZSh0ZXh0SW1hZ2VfKTtcclxuICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5NjAsIDI2MCk7XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aGlzLl9hbmltYXRlKSAqIDE1O1xyXG4gICAgICAgIHRoaXMuX2ljb24uVHJhbnNmb3JtLlNldFJvdGF0aW9uKHdhdmUpO1xyXG4gICAgICAgIGNvbnN0IHB1bHNlID0gTWF0aC5zaW4odGhpcy5fYW5pbWF0ZSAqIDEuMykgKiAwLjE7XHJcbiAgICAgICAgdGhpcy5faWNvbi5UcmFuc2Zvcm0uU2V0U2NhbGUoMSArIHB1bHNlLCAxICsgcHVsc2UpO1xyXG4gICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHRoaXMuX3RleHQuVHJhbnNmb3JtLlBvc2l0aW9uLngsIDI2MCArIHdhdmUpO1xyXG4gICAgICAgIHRoaXMuX2ljb24uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3RleHQuRHJhdygpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlID0gKHRoaXMuX2FuaW1hdGUgPiAxMDAwMDApID8gdGhpcy5fYW5pbWF0ZSAtIDEwMDAwMCA6IHRoaXMuX2FuaW1hdGUgKyAwLjAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lVGlsZU1hcmsgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVRpbGVNYXJrXCI7XHJcbmltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZVRpbGUge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb25fKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHYW1lVGlsZVN0YXRlLkVtcHR5O1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEFzID0gR2FtZVRpbGVNYXJrLk5vbmU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9FTVBUWSkpO1xyXG4gICAgICAgIHRoaXMuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSk7XHJcbiAgICB9XHJcbiAgICBnZXQgVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGUuVHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgZ2V0IFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBNYXJraW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZWRBcztcclxuICAgIH1cclxuICAgIENoZWNrKG1vdXNlUG9zaXRpb25fKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVHJhbnNmb3JtLlJlY3QuQ29udGFpbnMobW91c2VQb3NpdGlvbl8ueCwgbW91c2VQb3NpdGlvbl8ueSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFNldChzdGF0ZV8sIG1hcmtpbmdfKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09IHN0YXRlXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGVfO1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEFzID0gbWFya2luZ187XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuRW1wdHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0VNUFRZKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLkhvdmVyZWQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0hPVkVSX1gpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuTWFya2VkOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtlZEFzID09PSBHYW1lVGlsZU1hcmsuTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfTykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLldpbm5pbmc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX08pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuZXhwb3J0IGNsYXNzIFBsYXllckhlYWx0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihmdWxsSFBJbWFnZV8sIGVtcHR5SFBJbWFnZV8sIHNjcmVlblBvc2l0aW9uXyA9IHsgeDogMjQwLCB5OiAzNTAgfSkge1xyXG4gICAgICAgIHRoaXMuX21heEhlYWx0aCA9IDM7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2Z1bGxJbWFnZSA9IGZ1bGxIUEltYWdlXztcclxuICAgICAgICB0aGlzLl9lbXB0eUltYWdlID0gZW1wdHlIUEltYWdlXztcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLl9tYXhIZWFsdGg7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uWCA9IHNjcmVlblBvc2l0aW9uXy54O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tYXhIZWFsdGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3ByaXRlID0gbmV3IE1WU3ByaXRlKHRoaXMuX2Z1bGxJbWFnZSk7XHJcbiAgICAgICAgICAgIG5ld1Nwcml0ZS5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25YICsgKGluZGV4ICogNjApLCBzY3JlZW5Qb3NpdGlvbl8ueSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXMucHVzaChuZXdTcHJpdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBIUCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoO1xyXG4gICAgfVxyXG4gICAgUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gdGhpcy5fbWF4SGVhbHRoO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW1hZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBMb3NlSGVhbHRoKCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCAtPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW1hZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tYXhIZWFsdGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1tpbmRleF0uRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUltYWdlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fbWF4SGVhbHRoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbaW5kZXhdLlNldEltYWdlKHRoaXMuX2hlYWx0aCA+IGluZGV4ID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxJbWFnZSA6IHRoaXMuX2VtcHR5SW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlRleHQgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZUZXh0XCI7XHJcbmltcG9ydCB7IE1WVGV4dEFsaWdubWVudCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmltcG9ydCB7IE1WRm9udFN0eWxlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9lbnVtcy9tdkZvbnRTdHlsZVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vb2JqZWN0cy9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5uZXIgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVdpbm5lclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJIZWFsdGggfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJIZWFsdGhcIjtcclxuaW1wb3J0IHsgTVZCdXR0b24gfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZCdXR0b25cIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9TdHJpbmdzXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lcGxheVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0ID0gbmV3IE1WVGV4dChcIllPVVIgVFVSTiwgXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAyXCIpO1xyXG4gICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVSZXN1bHRUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbiA9IDUwMDtcclxuICAgICAgICB0aGlzLnNldHVwVGV4dEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGggPSBuZXcgUGxheWVySGVhbHRoKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuSEVBUlQpLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZKSwgeyB4OiAyNDAsIHk6IDM1MCB9KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoID0gbmV3IFBsYXllckhlYWx0aChJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSksIHsgeDogMTU2MCwgeTogMzUwIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlbWF0Y2hCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CVVRUT04pLCB7IHg6IDgyMCwgeTogNjAwIH0sICdSRU1BVENIJyk7XHJcbiAgICAgICAgdGhpcy5fbWVudUJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkJVVFRPTiksIHsgeDogMTEwMCwgeTogNjAwIH0sICdNRU5VJyk7XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aC5EcmF3KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mdWxsR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5HYW1lV2lubmVyICE9PSBHYW1lV2lubmVyLk5vbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lUmVzdWx0VGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyIC09IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyMUhlYWx0aC5IUCA9PT0gMCB8fCB0aGlzLl9wbGF5ZXIySGVhbHRoLkhQID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lQm9hcmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW1hdGNoQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIxSGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX21lbnVCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcmVtYXRjaEJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21lbnVCdXR0b24uRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUdhbWVCb2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUGxheSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lQm9hcmQuUmVxdWVzdFVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuTm9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5MDAsIDk2MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuU2V0VmFsdWUoU3RyaW5ncy5fR0FNRV9BQ1RJVkVfVEVYVCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLlBsYXllclR1cm4gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRWYWx1ZShcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldENvbG9yKDI1NCwgMjM0LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldFZhbHVlKFwiUExBWUVSIDJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0Q29sb3IoNDUsIDI0MiwgMjM5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5UaWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuX0dBTUVfVElFRF9URVhUKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldFZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyID0gdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuX0dBTUVfV0lOX1RFWFQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5HYW1lV2lubmVyID09PSBHYW1lV2lubmVyLlBsYXllcjEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLkxvc2VIZWFsdGgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2dhbWVCb2FyZC5HYW1lV2lubmVyID09PSBHYW1lV2lubmVyLlBsYXllcjIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIxSGVhbHRoLkxvc2VIZWFsdGgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVSZXN1bHRUaW1lciA9IHRoaXMuX2dhbWVSZXN1bHRXYWl0RHVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cFRleHRFbGVtZW50cygpIHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDkwMCwgOTYwKTtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuU2V0Rm9udFByb3BlcnRpZXMoXCJPc3dhbGQtUmVndWxhclwiLCAzMiwgTVZUZXh0QWxpZ25tZW50LkNlbnRlciwgTVZGb250U3R5bGUuSXRhbGljKTtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuU2V0TWF4V2lkdGgoMzAwKTtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuU2V0Q29sb3IoNzMsIDgzLCA5Nyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDEwMzUsIDk2MCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0Rm9udFByb3BlcnRpZXMoXCJPc3dhbGQtUmVndWxhclwiLCAzMiwgTVZUZXh0QWxpZ25tZW50LkNlbnRlciwgTVZGb250U3R5bGUuSXRhbGljKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldENvbG9yKDI1NCwgMjM0LCAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMzAwLCAzMDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlNldEZvbnRQcm9wZXJ0aWVzKFwiT3N3YWxkLVJlZ3VsYXJcIiwgMzIsIE1WVGV4dEFsaWdubWVudC5DZW50ZXIsIE1WRm9udFN0eWxlLkl0YWxpYyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVRleHQuU2V0TWF4V2lkdGgoMzAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5TZXRDb2xvcigyNTQsIDIzNCwgMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDE2MjAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuU2V0Rm9udFByb3BlcnRpZXMoXCJPc3dhbGQtUmVndWxhclwiLCAzMiwgTVZUZXh0QWxpZ25tZW50LkNlbnRlciwgTVZGb250U3R5bGUuSXRhbGljKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0LlNldENvbG9yKDQ1LCAyNDIsIDIzOSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZCdXR0b24gfSBmcm9tICcuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdkJ1dHRvbic7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZFbmdpbmVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VudW1zL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUxvYWRlciwgSW1hZ2VMaWJyYXJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSAtMTtcclxuICAgICAgICB0aGlzLl9wbGF5QnV0dG9uID0gbmV3IE1WQnV0dG9uKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQlVUVE9OKSwgeyB4OiA5NjAsIHk6IDUwMCB9LCAnUExBWScpO1xyXG4gICAgICAgIHRoaXMuX2NyZWRpdHNCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CVVRUT04pLCB7IHg6IDk2MCwgeTogNjIwIH0sICdDUkVESVRTJyk7XHJcbiAgICAgICAgdGhpcy5fZXhpdEJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkJVVFRPTiksIHsgeDogOTYwLCB5OiA3NDAgfSwgJ0VYSVQnKTtcclxuICAgIH1cclxuICAgIFBsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXlCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5HYW1lcGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jcmVkaXRzQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL21vb252YWxrLmNvbS9cIiwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXhpdEJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tb29udmFsay5jb20vXCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BsYXlCdXR0b24uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX2NyZWRpdHNCdXR0b24uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX2V4aXRCdXR0b24uRHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lTG9nbyB9IGZyb20gXCIuLi9vYmplY3RzL0dhbWVMb2dvXCI7XHJcbmV4cG9ydCBjbGFzcyBVbml2ZXJzYWxTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CQUNLR1JPVU5EKSk7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA1NDApO1xyXG4gICAgICAgIHRoaXMuX21vb252YWxrTG9nbyA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08pKTtcclxuICAgICAgICB0aGlzLl9tb29udmFsa0xvZ28uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDE3MjAsIDk4MCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUxvZ28gPSBuZXcgR2FtZUxvZ28oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5MT0dPX0lDT04pLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkxPR09fVEVYVCkpO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9nYW1lTG9nby5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fbW9vbnZhbGtMb2dvLkRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEN1cnNvclJlbmRlcmVyIH0gZnJvbSAnLi9nYW1lL29iamVjdHMvQ3Vyc29yUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTY2VuZUhhbmRsZXIgfSBmcm9tICcuL2dhbWUvU2NlbmVIYW5kbGVyJztcclxuaW1wb3J0IHsgSW1hZ2VMb2FkZXIsIEltYWdlTGlicmFyeSB9IGZyb20gJy4vZGF0YS9JbWFnZUxvYWRlcic7XHJcbmltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tICcuL2VuZ2luZS9tdkJlaGF2aW9yJztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIEltYWdlTG9hZGVyLkxvYWRBbGwoKTtcclxufTtcclxuY2xhc3MgTVZFbmdpbmVNYWluIGV4dGVuZHMgTVZCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHNjZW5lSGFuZGxlciA9IG5ldyBTY2VuZUhhbmRsZXIoKTtcclxuICAgICAgICBjdXJzb3IgPSBuZXcgQ3Vyc29yUmVuZGVyZXIoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5DVVJTT1IpKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBNYWluID0gbmV3IE1WRW5naW5lTWFpbigpO1xyXG5sZXQgc2NlbmVIYW5kbGVyO1xyXG5sZXQgY3Vyc29yO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=