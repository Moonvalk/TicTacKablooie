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

/***/ "./src/data/AudioLoader.ts":
/*!*********************************!*\
  !*** ./src/data/AudioLoader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioLibrary": () => (/* binding */ AudioLibrary),
/* harmony export */   "AudioLoader": () => (/* binding */ AudioLoader)
/* harmony export */ });
/* harmony import */ var _engine_components_mvAudioLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/components/mvAudioLoader */ "./src/engine/components/mvAudioLoader.ts");

class AudioLibrary {
}
AudioLibrary.MUSIC = './dist/data/audio/music.mp3';
AudioLibrary.EXPLOSION1 = './dist/data/audio/explosion1.wav';
AudioLibrary.EXPLOSION2 = './dist/data/audio/explosion2.wav';
AudioLibrary.EXPLOSION3 = './dist/data/audio/explosion3.wav';
AudioLibrary.EXPLOSION4 = './dist/data/audio/explosion4.wav';
AudioLibrary.EXPLOSION5 = './dist/data/audio/explosion5.wav';
AudioLibrary.EXPLOSION6 = './dist/data/audio/explosion6.wav';
AudioLibrary.MENU_HOVER = './dist/data/audio/menuhover.wav';
AudioLibrary.HOVER1 = './dist/data/audio/hover1.wav';
AudioLibrary.HOVER2 = './dist/data/audio/hover2.wav';
AudioLibrary.HOVER3 = './dist/data/audio/hover3.wav';
AudioLibrary.MARK1 = './dist/data/audio/mark1.wav';
AudioLibrary.MARK2 = './dist/data/audio/mark2.wav';
AudioLibrary.MARK3 = './dist/data/audio/mark3.wav';
AudioLibrary.MARK4 = './dist/data/audio/mark3.wav';
AudioLibrary.MARK5 = './dist/data/audio/mark3.wav';
AudioLibrary.MAIN_MENU = './dist/data/audio/mainmenu.wav';
AudioLibrary.MENU1 = './dist/data/audio/menu1.wav';
AudioLibrary.MENU2 = './dist/data/audio/menu2.wav';
AudioLibrary.MENU3 = './dist/data/audio/menu3.wav';
AudioLibrary.PLAY = './dist/data/audio/play.wav';
AudioLibrary.RESTART = './dist/data/audio/restart.wav';
const AudioLoader = new _engine_components_mvAudioLoader__WEBPACK_IMPORTED_MODULE_0__.MVAudioLoader();
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
ImageLibrary.EXPLOSION = './dist/data/images/Explosion.png';
ImageLibrary.AUDIO_BUTTON = './dist/data/images/Buttons/AudioButton_Idle.png';
ImageLibrary.AUDIO_BUTTON_HOVER = './dist/data/images/Buttons/AudioButton_Hover.png';
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
    ImageLibrary.SMOKE_PARTICLE,
    ImageLibrary.EXPLOSION,
    ImageLibrary.AUDIO_BUTTON,
    ImageLibrary.AUDIO_BUTTON_HOVER
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

/***/ "./src/engine/components/mvAudioGroup.ts":
/*!***********************************************!*\
  !*** ./src/engine/components/mvAudioGroup.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVAudioGroup": () => (/* binding */ MVAudioGroup)
/* harmony export */ });
/* harmony import */ var _util_extmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/extmath */ "./src/engine/util/extmath.ts");

class MVAudioGroup {
    constructor(audioResources_) {
        this.Randomize = false;
        this._nextAudioIndex = 0;
        this._audioResources = [];
        this._audioResources = audioResources_;
    }
    Play() {
        if (this._audioResources[this._nextAudioIndex].currentTime > 0 ||
            this._audioResources[this._nextAudioIndex].paused) {
            this._audioResources[this._nextAudioIndex].pause();
            this._audioResources[this._nextAudioIndex].currentTime = 0;
        }
        this._audioResources[this._nextAudioIndex].play();
        if (this.Randomize) {
            this._nextAudioIndex = _util_extmath__WEBPACK_IMPORTED_MODULE_0__.ExtMath.GetRandomInt(this._audioResources.length - 1);
            return;
        }
        this._nextAudioIndex = (this._nextAudioIndex + 1 >= this._audioResources.length) ?
            0 : this._nextAudioIndex + 1;
    }
}


/***/ }),

/***/ "./src/engine/components/mvAudioLoader.ts":
/*!************************************************!*\
  !*** ./src/engine/components/mvAudioLoader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVAudioLoader": () => (/* binding */ MVAudioLoader)
/* harmony export */ });
/* harmony import */ var _mvEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvEngine */ "./src/engine/mvEngine.ts");

class MVAudioLoader {
    constructor() {
        this._finishedLoading = false;
        this._allAudio = [];
        this._loadedAudio = {};
    }
    get Loaded() {
        return this._finishedLoading;
    }
    Add(audioURLs_) {
        audioURLs_.forEach(audioURL => {
            this._allAudio.push(audioURL);
        });
    }
    LoadAll() {
        console.log("Started loading audio");
        let promiseToLoadAudio = this._allAudio.map((audioURL) => {
            let prom = new Promise((resolve, reject) => {
                const newResource = new Audio(audioURL);
                newResource.addEventListener('canplaythrough', () => {
                    this._loadedAudio[audioURL] = newResource;
                    resolve();
                });
            });
            return prom;
        });
        Promise.all(promiseToLoadAudio).then(() => {
            _mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.Start();
        });
    }
    Get(audioURL_) {
        return this._loadedAudio[audioURL_];
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
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");
/* harmony import */ var _mvAudioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mvAudioGroup */ "./src/engine/components/mvAudioGroup.ts");





class MVButton {
    constructor(idleImage_, hoverImage_, position_, textValue_) {
        this._hoveredLastFrame = false;
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
        this._hoverSound = new _mvAudioGroup__WEBPACK_IMPORTED_MODULE_4__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_3__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_3__.AudioLibrary.MENU_HOVER)]);
    }
    get Transform() {
        return this._sprite.Transform;
    }
    IsHovered(mousePosition_) {
        const hovered = this.Contains(mousePosition_);
        if (hovered !== this._hoveredLastFrame) {
            this._hoveredLastFrame = hovered;
            if (hovered) {
                this._hoverSound.Play();
                this._sprite.SetImage(this._hoverImage);
            }
            else {
                this._sprite.SetImage(this._idleImage);
            }
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
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");

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
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_0__.AudioLoader.LoadAll();
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

/***/ "./src/game/objects/ExplosionEffect.ts":
/*!*********************************************!*\
  !*** ./src/game/objects/ExplosionEffect.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplosionEffect": () => (/* binding */ ExplosionEffect)
/* harmony export */ });
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_util_extmath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/util/extmath */ "./src/engine/util/extmath.ts");
/* harmony import */ var _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/ParticleEffect */ "./src/game/enums/ParticleEffect.ts");




class ExplosionEffect {
    constructor() {
        this.ParticleType = _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_3__.ParticleEffect.Explosion;
        this._particleCount = 1;
        this._particles = [];
        this._paused = true;
        for (let index = 0; index < this._particleCount; index++) {
            const newParticle = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_1__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLibrary.EXPLOSION));
            this._particles.push(newParticle);
        }
    }
    Play(position_) {
        this._paused = false;
        for (let index = 0; index < this._particles.length; index++) {
            this._particles[index].Transform.SetPosition(position_.x, position_.y);
            const randomScale = (Math.random() * 0.2) + 0.3;
            this._particles[index].Transform.SetScale(randomScale, randomScale);
            const randomRotation = (_engine_util_extmath__WEBPACK_IMPORTED_MODULE_2__.ExtMath.GetRandomInt(360));
            this._particles[index].Transform.SetRotation(randomRotation);
            this._particles[index].Transform.SetAlpha(1);
        }
    }
    Draw() {
        if (this._paused) {
            return;
        }
        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale < 1.3) {
                const newScale = scale + 0.05;
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Transform.SetAlpha(1 - (scale - 0.7));
                this._particles[index].Draw();
                continue;
            }
            this._paused = true;
            return;
        }
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/ParticleEffect */ "./src/game/enums/ParticleEffect.ts");
/* harmony import */ var _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/components/mvAudioGroup */ "./src/engine/components/mvAudioGroup.ts");
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");









class GameBoard {
    constructor() {
        this.RequestUpdate = false;
        this._playerTurn = 0;
        this._gameOver = false;
        this._gameTiles = [];
        this._gameWinner = _enums_GameWinner__WEBPACK_IMPORTED_MODULE_4__.GameWinner.None;
        this._lastWinningCombination = [3];
        this._explosionEffectTimer = 0;
        this._explosionEffectDuration = 10;
        this._explosionEffectIndex = 0;
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
        this._explosionSounds = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_7__.MVAudioGroup([
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION1),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION2),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION3),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION4),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION5),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.EXPLOSION6)
        ]);
        this._explosionSounds.Randomize = true;
        this._markingSounds = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_7__.MVAudioGroup([
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK1),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK2),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK3),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK4),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK5)
        ]);
    }
    get PlayerTurn() {
        return this._playerTurn;
    }
    get GameWinner() {
        return this._gameWinner;
    }
    Play() {
        if (this._gameOver && this._explosionEffectIndex <= 2) {
            if (this._explosionEffectTimer > 0) {
                this._explosionEffectTimer -= _engine_mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.DeltaTime;
            }
            else {
                const position = this._gameTiles[this._lastWinningCombination[this._explosionEffectIndex]].Transform.Position;
                _app__WEBPACK_IMPORTED_MODULE_5__.particleHandler.Play(_enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_6__.ParticleEffect.Explosion, position);
                _app__WEBPACK_IMPORTED_MODULE_5__.particleHandler.Play(_enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_6__.ParticleEffect.Smoke, position);
                this._explosionSounds.Play();
                this._explosionEffectTimer = this._explosionEffectDuration;
                this._explosionEffectIndex++;
            }
        }
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
                        _app__WEBPACK_IMPORTED_MODULE_5__.particleHandler.Play(_enums_ParticleEffect__WEBPACK_IMPORTED_MODULE_6__.ParticleEffect.Smoke, tile.Transform.Position);
                        this._markingSounds.Play();
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
        this._explosionEffectIndex = 0;
        this._explosionEffectTimer = 0;
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
                this._lastWinningCombination[0] = winCondition[0];
                this._lastWinningCombination[1] = winCondition[1];
                this._lastWinningCombination[2] = winCondition[2];
                this._explosionEffectIndex = 0;
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
                this._explosionEffectIndex = 3;
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
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");
/* harmony import */ var _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../engine/components/mvAudioGroup */ "./src/engine/components/mvAudioGroup.ts");






class GameTile {
    constructor(position_) {
        this._state = _enums_GameTileState__WEBPACK_IMPORTED_MODULE_1__.GameTileState.Empty;
        this._markedAs = _enums_GameTileMark__WEBPACK_IMPORTED_MODULE_2__.GameTileMark.None;
        this._sprite = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_0__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TILE_EMPTY));
        this.Transform.SetPosition(position_.x, position_.y);
        this._hoverAudio = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_5__.MVAudioGroup([
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLibrary.HOVER1),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLibrary.HOVER2),
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_4__.AudioLibrary.HOVER3)
        ]);
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
                this._hoverAudio.Play();
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
/* harmony import */ var _ExplosionEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExplosionEffect */ "./src/game/objects/ExplosionEffect.ts");
/* harmony import */ var _SmokeEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmokeEffect */ "./src/game/objects/SmokeEffect.ts");



class ParticleHandler extends _engine_mvBehavior__WEBPACK_IMPORTED_MODULE_0__.MVBehavior {
    constructor() {
        super();
        this._particles = [];
        this._lastIndex = 0;
        for (let index = 0; index < 3; index++) {
            const newExplosionEffect = new _ExplosionEffect__WEBPACK_IMPORTED_MODULE_1__.ExplosionEffect();
            this._particles.push(newExplosionEffect);
            const newSmokeEffect = new _SmokeEffect__WEBPACK_IMPORTED_MODULE_2__.SmokeEffect();
            this._particles.push(newSmokeEffect);
        }
    }
    Update() {
        this._particles.forEach(effect => {
            effect.Draw();
        });
    }
    Play(particleEffect_, position_) {
        let findingParticle = true;
        while (findingParticle) {
            if (this._particles[this._lastIndex].ParticleType == particleEffect_) {
                findingParticle = false;
                this._particles[this._lastIndex].Play(position_);
            }
            this._lastIndex = (this._lastIndex + 1 >= this._particles.length) ?
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
            return;
        }
        for (let index = 0; index < this._particles.length; index++) {
            const scale = this._particles[index].Transform.Scale.x;
            if (scale > 0.01) {
                const newScale = scale * 0.95;
                this._particles[index].Transform.Translate(this._particleDirections[index]);
                this._particles[index].Transform.SetScale(newScale, newScale);
                this._particles[index].Draw();
                continue;
            }
            this._paused = true;
            return;
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
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../engine/components/mvAudioGroup */ "./src/engine/components/mvAudioGroup.ts");
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");














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
        this._rematchButtonSound = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_12__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLibrary.PLAY)]);
        this._menuButtonSound = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_12__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLibrary.MAIN_MENU)]);
        this._restartButtonSound = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_12__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_13__.AudioLibrary.RESTART)]);
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
                    this._restartButtonSound.Play();
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
                    this._rematchButtonSound.Play();
                }
            }
            else if (this._menuButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.MousePosition)) {
                if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_8__.Engine.IsUserClicking) {
                    this._gameBoard.Reset();
                    this._player1Health.Reset();
                    this._player2Health.Reset();
                    this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_9__.GameState.MainMenu;
                    this._fullGameOver = false;
                    this._menuButtonSound.Play();
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
/* harmony import */ var _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../engine/components/mvAudioGroup */ "./src/engine/components/mvAudioGroup.ts");
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");








class MainMenuScene {
    constructor() {
        this.RequestScene = -1;
        this._playButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.PLAY_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.PLAY_BUTTON_HOVER), { x: 800, y: 660 });
        this._creditsButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.CREDITS_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.CREDITS_BUTTON_HOVER), { x: 1220, y: 570 });
        this._exitButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_0__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.EXIT_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.EXIT_BUTTON_HOVER), { x: 1220, y: 720 });
        this._tagline = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_5__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_3__.ImageLibrary.TAGLINE_TEXT));
        this._tagline.Transform.SetPosition(960, 880);
        this._playButtonSound = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_6__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_7__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_7__.AudioLibrary.PLAY)]);
        this._exitButtonSound = new _engine_components_mvAudioGroup__WEBPACK_IMPORTED_MODULE_6__.MVAudioGroup([_data_AudioLoader__WEBPACK_IMPORTED_MODULE_7__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_7__.AudioLibrary.MENU1)]);
    }
    Play() {
        if (this._playButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                this.RequestScene = _enums_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.Gameplay;
                this._playButtonSound.Play();
            }
        }
        else if (this._creditsButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open(_data_Strings__WEBPACK_IMPORTED_MODULE_4__.Strings.CREDITS_URL, "_blank");
                this._exitButtonSound.Play();
            }
        }
        else if (this._exitButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_1__.Engine.IsUserClicking) {
                window.open(_data_Strings__WEBPACK_IMPORTED_MODULE_4__.Strings.EXIT_URL, "_self");
                this._exitButtonSound.Play();
            }
        }
        this._playButton.Draw();
        this._creditsButton.Draw();
        this._exitButton.Draw();
        this._tagline.Draw();
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
/* harmony import */ var _data_AudioLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/AudioLoader */ "./src/data/AudioLoader.ts");
/* harmony import */ var _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/ImageLoader */ "./src/data/ImageLoader.ts");
/* harmony import */ var _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/components/mvButton */ "./src/engine/components/mvButton.ts");
/* harmony import */ var _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../engine/components/mvSprite */ "./src/engine/components/mvSprite.ts");
/* harmony import */ var _engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../engine/mvEngine */ "./src/engine/mvEngine.ts");
/* harmony import */ var _objects_GameLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/GameLogo */ "./src/game/objects/GameLogo.ts");






class UniversalScene {
    constructor() {
        this.RequestScene = -1;
        this._audioToggle = true;
        this._background = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_3__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.BACKGROUND));
        this._background.Transform.SetPosition(960, 540);
        this._moonvalkLogo = new _engine_components_mvSprite__WEBPACK_IMPORTED_MODULE_3__.MVSprite(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.MOONVALK_LOGO));
        this._moonvalkLogo.Transform.SetPosition(220, 120);
        this._gameLogo = new _objects_GameLogo__WEBPACK_IMPORTED_MODULE_5__.GameLogo(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.LOGO_ICON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.LOGO_TEXT));
        this._gameMusic = _data_AudioLoader__WEBPACK_IMPORTED_MODULE_0__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_0__.AudioLibrary.MUSIC);
        this._gameMusic.loop = true;
        this._audioButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_2__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.AUDIO_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.AUDIO_BUTTON_HOVER), { x: 1810, y: 110 });
    }
    Play() {
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();
        if (this._audioButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.IsUserClicking) {
                this._audioToggle = !this._audioToggle;
                if (!this._audioToggle) {
                    this._gameMusic.pause();
                }
            }
        }
        this._audioButton.Draw();
        if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.IsUserClicking) {
            if (this._audioToggle && this._gameMusic.paused) {
                this._gameMusic.play();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQyw0QkFBNEIsMkRBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NtRTtBQUNBO0FBQ1A7QUFDQTtBQUNiO0FBQ0E7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVEsQ0FBQyw4REFBZSxDQUFDLHNFQUF1QjtBQUMvRTtBQUNBLGlDQUFpQyxpRUFBUSxDQUFDLDhEQUFlLENBQUMseUVBQTBCO0FBQ3BGO0FBQ0EsNkJBQTZCLHVEQUFRLENBQUMsOERBQWUsQ0FBQyxxRUFBc0IsR0FBRyw4REFBZSxDQUFDLHFFQUFzQjtBQUNySCwwQkFBMEIsOERBQWUsQ0FBQyxpRUFBa0I7QUFDNUQ7QUFDQSxnQ0FBZ0MsaUVBQVEsQ0FBQyw4REFBZSxDQUFDLHdFQUF5QixHQUFHLDhEQUFlLENBQUMsOEVBQStCLEtBQUssaUJBQWlCO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0VBQW9CO0FBQzVELGdCQUFnQixtRUFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZGF0YS9BdWRpb0xvYWRlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9kYXRhL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2RhdGEvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212QXVkaW9Hcm91cC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9tdkF1ZGlvTG9hZGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212SW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZUZXh0LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9lbnVtcy9tdkZvbnRTdHlsZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvZW51bXMvbXZSZW5kZXJhYmxlVHlwZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvZW51bXMvbXZUZXh0QWxpZ25tZW50LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9tdkJlaGF2aW9yLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9tdkVuZ2luZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvc2V0dXAvbXZEaXNwbGF5LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS91dGlsL2V4dG1hdGgudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL3ZpZXcvbXZWaWV3cG9ydC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL1NjZW5lSGFuZGxlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVUaWxlTWFyay50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVUaWxlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9HYW1lV2lubmVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvUGFydGljbGVFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0N1cnNvclJlbmRlcmVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9FeHBsb3Npb25FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvR2FtZUxvZ28udHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0dhbWVUaWxlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9QYXJ0aWNsZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL1BsYXllckhlYWx0aC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvU21va2VFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9zY2VuZXMvR2FtZXBsYXlTY2VuZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL3NjZW5lcy9NYWluTWVudVNjZW5lLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvc2NlbmVzL1VuaXZlcnNhbFNjZW5lLnRzIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnNvclJlbmRlcmVyIH0gZnJvbSAnLi9nYW1lL29iamVjdHMvQ3Vyc29yUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTY2VuZUhhbmRsZXIgfSBmcm9tICcuL2dhbWUvU2NlbmVIYW5kbGVyJztcclxuaW1wb3J0IHsgSW1hZ2VMb2FkZXIsIEltYWdlTGlicmFyeSB9IGZyb20gJy4vZGF0YS9JbWFnZUxvYWRlcic7XHJcbmltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tICcuL2VuZ2luZS9tdkJlaGF2aW9yJztcclxuaW1wb3J0IHsgUGFydGljbGVIYW5kbGVyIH0gZnJvbSAnLi9nYW1lL29iamVjdHMvUGFydGljbGVIYW5kbGVyJztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIEltYWdlTG9hZGVyLkxvYWRBbGwoKTtcclxufTtcclxuY2xhc3MgTVZFbmdpbmVNYWluIGV4dGVuZHMgTVZCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHNjZW5lSGFuZGxlciA9IG5ldyBTY2VuZUhhbmRsZXIoKTtcclxuICAgICAgICBwYXJ0aWNsZUhhbmRsZXIgPSBuZXcgUGFydGljbGVIYW5kbGVyKCk7XHJcbiAgICAgICAgY3Vyc29yID0gbmV3IEN1cnNvclJlbmRlcmVyKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQ1VSU09SKSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgTWFpbiA9IG5ldyBNVkVuZ2luZU1haW4oKTtcclxubGV0IHNjZW5lSGFuZGxlcjtcclxuZXhwb3J0IGxldCBwYXJ0aWNsZUhhbmRsZXI7XHJcbmxldCBjdXJzb3I7XHJcbiIsImltcG9ydCB7IE1WQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vZW5naW5lL2NvbXBvbmVudHMvbXZBdWRpb0xvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgQXVkaW9MaWJyYXJ5IHtcclxufVxyXG5BdWRpb0xpYnJhcnkuTVVTSUMgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbXVzaWMubXAzJztcclxuQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjEgPSAnLi9kaXN0L2RhdGEvYXVkaW8vZXhwbG9zaW9uMS53YXYnO1xyXG5BdWRpb0xpYnJhcnkuRVhQTE9TSU9OMiA9ICcuL2Rpc3QvZGF0YS9hdWRpby9leHBsb3Npb24yLndhdic7XHJcbkF1ZGlvTGlicmFyeS5FWFBMT1NJT04zID0gJy4vZGlzdC9kYXRhL2F1ZGlvL2V4cGxvc2lvbjMud2F2JztcclxuQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjQgPSAnLi9kaXN0L2RhdGEvYXVkaW8vZXhwbG9zaW9uNC53YXYnO1xyXG5BdWRpb0xpYnJhcnkuRVhQTE9TSU9ONSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9leHBsb3Npb241Lndhdic7XHJcbkF1ZGlvTGlicmFyeS5FWFBMT1NJT042ID0gJy4vZGlzdC9kYXRhL2F1ZGlvL2V4cGxvc2lvbjYud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1FTlVfSE9WRVIgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWVudWhvdmVyLndhdic7XHJcbkF1ZGlvTGlicmFyeS5IT1ZFUjEgPSAnLi9kaXN0L2RhdGEvYXVkaW8vaG92ZXIxLndhdic7XHJcbkF1ZGlvTGlicmFyeS5IT1ZFUjIgPSAnLi9kaXN0L2RhdGEvYXVkaW8vaG92ZXIyLndhdic7XHJcbkF1ZGlvTGlicmFyeS5IT1ZFUjMgPSAnLi9kaXN0L2RhdGEvYXVkaW8vaG92ZXIzLndhdic7XHJcbkF1ZGlvTGlicmFyeS5NQVJLMSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tYXJrMS53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUFSSzIgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWFyazIud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1BUkszID0gJy4vZGlzdC9kYXRhL2F1ZGlvL21hcmszLndhdic7XHJcbkF1ZGlvTGlicmFyeS5NQVJLNCA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tYXJrMy53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUFSSzUgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWFyazMud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1BSU5fTUVOVSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tYWlubWVudS53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUVOVTEgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWVudTEud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1FTlUyID0gJy4vZGlzdC9kYXRhL2F1ZGlvL21lbnUyLndhdic7XHJcbkF1ZGlvTGlicmFyeS5NRU5VMyA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tZW51My53YXYnO1xyXG5BdWRpb0xpYnJhcnkuUExBWSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9wbGF5Lndhdic7XHJcbkF1ZGlvTGlicmFyeS5SRVNUQVJUID0gJy4vZGlzdC9kYXRhL2F1ZGlvL3Jlc3RhcnQud2F2JztcclxuZXhwb3J0IGNvbnN0IEF1ZGlvTG9hZGVyID0gbmV3IE1WQXVkaW9Mb2FkZXIoKTtcclxuQXVkaW9Mb2FkZXIuQWRkKFtcclxuICAgIEF1ZGlvTGlicmFyeS5NVVNJQyxcclxuICAgIEF1ZGlvTGlicmFyeS5FWFBMT1NJT04xLFxyXG4gICAgQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjIsXHJcbiAgICBBdWRpb0xpYnJhcnkuRVhQTE9TSU9OMyxcclxuICAgIEF1ZGlvTGlicmFyeS5FWFBMT1NJT040LFxyXG4gICAgQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjUsXHJcbiAgICBBdWRpb0xpYnJhcnkuRVhQTE9TSU9ONixcclxuICAgIEF1ZGlvTGlicmFyeS5NRU5VX0hPVkVSLFxyXG4gICAgQXVkaW9MaWJyYXJ5LkhPVkVSMSxcclxuICAgIEF1ZGlvTGlicmFyeS5IT1ZFUjIsXHJcbiAgICBBdWRpb0xpYnJhcnkuSE9WRVIzLFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BUksxLFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BUksyLFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BUkszLFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BUks0LFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BUks1LFxyXG4gICAgQXVkaW9MaWJyYXJ5Lk1BSU5fTUVOVSxcclxuICAgIEF1ZGlvTGlicmFyeS5NRU5VMSxcclxuICAgIEF1ZGlvTGlicmFyeS5NRU5VMixcclxuICAgIEF1ZGlvTGlicmFyeS5NRU5VMyxcclxuICAgIEF1ZGlvTGlicmFyeS5QTEFZLFxyXG4gICAgQXVkaW9MaWJyYXJ5LlJFU1RBUlRcclxuXSk7XHJcbiIsImltcG9ydCB7IE1WSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vZW5naW5lL2NvbXBvbmVudHMvbXZJbWFnZUxvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgSW1hZ2VMaWJyYXJ5IHtcclxufVxyXG5JbWFnZUxpYnJhcnkuQkFDS0dST1VORCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQmFja2dyb3VuZC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQ1VSU09SID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9DdXJzb3IucG5nJztcclxuSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL01vb252YWxrX0xvZ28ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkxPR09fSUNPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvTG9nb19JY29uLnBuZyc7XHJcbkltYWdlTGlicmFyeS5MT0dPX1RFWFQgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0xvZ29fVGV4dC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuSEVBUlQgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0hlYXJ0LnBuZyc7XHJcbkltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvSGVhcnRfRW1wdHkucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfRU1QVFkgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfRW1wdHkucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfTy5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9YID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX0hvdmVyX1gucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfTyA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9Ib3Zlcl9PLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9XaW5uaW5nX1gucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX1dpbm5pbmdfTy5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUmVzdGFydEJ1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5SRVNUQVJUX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9SZXN0YXJ0QnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5NRU5VX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9NZW51QnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL01lbnVCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1JlbWF0Y2hCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUkVNQVRDSF9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUmVtYXRjaEJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUExBWV9CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUGxheUJ1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5QTEFZX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9QbGF5QnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9DcmVkaXRzQnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0NyZWRpdHNCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0V4aXRCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuRVhJVF9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvRXhpdEJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVEFHTElORV9URVhUID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UYWdsaW5lLnBuZyc7XHJcbkltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9YID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9QbGF5ZXJTaWduX1gucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlBMQVlFUl9TSUdOX08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1BsYXllclNpZ25fTy5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuU01PS0VfUEFSVElDTEUgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1Ntb2tlUGFydGljbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkVYUExPU0lPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvRXhwbG9zaW9uLnBuZyc7XHJcbkltYWdlTGlicmFyeS5BVURJT19CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvQXVkaW9CdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQVVESU9fQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0F1ZGlvQnV0dG9uX0hvdmVyLnBuZyc7XHJcbmV4cG9ydCBjb25zdCBJbWFnZUxvYWRlciA9IG5ldyBNVkltYWdlTG9hZGVyKCk7XHJcbkltYWdlTG9hZGVyLkFkZChbXHJcbiAgICBJbWFnZUxpYnJhcnkuQkFDS0dST1VORCxcclxuICAgIEltYWdlTGlicmFyeS5DVVJTT1IsXHJcbiAgICBJbWFnZUxpYnJhcnkuTU9PTlZBTEtfTE9HTyxcclxuICAgIEltYWdlTGlicmFyeS5MT0dPX0lDT04sXHJcbiAgICBJbWFnZUxpYnJhcnkuTE9HT19URVhULFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkhFQVJULFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfRU1QVFksXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfTyxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX0hPVkVSX1gsXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCxcclxuICAgIEltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlBMQVlFUl9TSUdOX08sXHJcbiAgICBJbWFnZUxpYnJhcnkuU01PS0VfUEFSVElDTEUsXHJcbiAgICBJbWFnZUxpYnJhcnkuRVhQTE9TSU9OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkFVRElPX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5BVURJT19CVVRUT05fSE9WRVJcclxuXSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTdHJpbmdzIHtcclxufVxyXG5TdHJpbmdzLkdBTUVfV0lOX1RFWFQgPSBcIldJTk5FUiFcIjtcclxuU3RyaW5ncy5HQU1FX0FDVElWRV9URVhUID0gXCJZT1VSIFRVUk4sIFwiO1xyXG5TdHJpbmdzLkdBTUVfVElFRF9URVhUID0gXCJUSUVEIVwiO1xyXG5TdHJpbmdzLkNSRURJVFNfVVJMID0gXCJodHRwczovL21vb252YWxrLmNvbS9jYXRlZ29yeS9wb3J0Zm9saW9cIjtcclxuU3RyaW5ncy5FWElUX1VSTCA9IFwiaHR0cHM6Ly9tb29udmFsay5jb20vXCI7XHJcbiIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xyXG4gICAgY29uc3RydWN0b3IoeF8sIHlfLCB3aWR0aF8sIGhlaWdodF8pIHtcclxuICAgICAgICB0aGlzLlBvc2l0aW9uID0geyB4OiB4XywgeTogeV8gfTtcclxuICAgICAgICB0aGlzLlNpemUgPSB7IHg6IHdpZHRoXywgeTogaGVpZ2h0XyB9O1xyXG4gICAgfVxyXG4gICAgQ29udGFpbnMocG9pbnRYXywgcG9pbnRZXykge1xyXG4gICAgICAgIHJldHVybiAocG9pbnRYXyA+IHRoaXMuUG9zaXRpb24ueCAmJiBwb2ludFhfIDwgdGhpcy5Qb3NpdGlvbi54ICsgdGhpcy5TaXplLnggJiZcclxuICAgICAgICAgICAgcG9pbnRZXyA+IHRoaXMuUG9zaXRpb24ueSAmJiBwb2ludFlfIDwgdGhpcy5Qb3NpdGlvbi55ICsgdGhpcy5TaXplLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4vUmVjdGFuZ2xlJztcclxuaW1wb3J0IHsgRXh0TWF0aCB9IGZyb20gJy4uL3V0aWwvZXh0bWF0aCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vbXZFbmdpbmUnO1xyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2l6ZSA9IHsgeDogMzAwLCB5OiAzMDAgfTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplID0geyB4OiAzMDAsIHk6IDMwMCB9O1xyXG4gICAgICAgIHRoaXMuX3NjYWxlID0geyB4OiAxLCB5OiAxIH07XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcclxuICAgIH1cclxuICAgIGdldCBQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2l6ZTtcclxuICAgIH1cclxuICAgIGdldCBTY2FsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7XHJcbiAgICB9XHJcbiAgICBnZXQgUm90YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IFZpZXdwb3J0U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLlNpemUueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5TaXplLnkgKiBSZW5kZXJlci5SZXNvbHV0aW9uLnkgfTtcclxuICAgIH1cclxuICAgIGdldCBWaWV3cG9ydFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuUG9zaXRpb24ueCAqIFJlbmRlcmVyLlJlc29sdXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5Qb3NpdGlvbi55ICogUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgUmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLlZpZXdwb3J0UG9zaXRpb24ueCAtICh0aGlzLlZpZXdwb3J0U2l6ZS54IC8gMiksIHRoaXMuVmlld3BvcnRQb3NpdGlvbi55IC0gKHRoaXMuVmlld3BvcnRTaXplLnkgLyAyKSwgdGhpcy5WaWV3cG9ydFNpemUueCwgdGhpcy5WaWV3cG9ydFNpemUueSk7XHJcbiAgICB9XHJcbiAgICBnZXQgQWxwaGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG4gICAgU2V0RnJvbUltYWdlRGF0YShpbWFnZV8pIHtcclxuICAgICAgICBpZiAoIWltYWdlXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuU2V0U2l6ZShpbWFnZV8ud2lkdGgsIGltYWdlXy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueCA9IHRoaXMuX3RhcmdldFNpemUueDtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplLnkgPSB0aGlzLl90YXJnZXRTaXplLnk7XHJcbiAgICB9XHJcbiAgICBTZXRGcm9tVHJhbnNmb3JtKHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLlNldFNpemUodHJhbnNmb3JtXy5TaXplLngsIHRyYW5zZm9ybV8uU2l6ZS55KTtcclxuICAgICAgICB0aGlzLlNldFNjYWxlKHRyYW5zZm9ybV8uU2NhbGUueCwgdHJhbnNmb3JtXy5TY2FsZS55KTtcclxuICAgICAgICB0aGlzLlNldFBvc2l0aW9uKHRyYW5zZm9ybV8uUG9zaXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLlNldFJvdGF0aW9uKHRyYW5zZm9ybV8uUm90YXRpb24pO1xyXG4gICAgfVxyXG4gICAgU2V0U2NhbGUoc2NhbGVYXywgc2NhbGVZXykge1xyXG4gICAgICAgIHRoaXMuX3NjYWxlLnggPSBzY2FsZVhfO1xyXG4gICAgICAgIHRoaXMuX3NjYWxlLnkgPSBzY2FsZVlfO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgU2V0U2l6ZSh3aWR0aF8sIGhlaWdodF8pIHtcclxuICAgICAgICB0aGlzLl90YXJnZXRTaXplLnggPSB3aWR0aF87XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2l6ZS55ID0gaGVpZ2h0XztcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlclNpemUoKTtcclxuICAgIH1cclxuICAgIFNldFBvc2l0aW9uKHBvc2l0aW9uWF8sIHBvc2l0aW9uWV8pIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi54ID0gcG9zaXRpb25YXztcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi55ID0gcG9zaXRpb25ZXztcclxuICAgIH1cclxuICAgIFNldERlcHRoKGRlcHRoXykge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogPSBkZXB0aF87XHJcbiAgICB9XHJcbiAgICBTZXRSb3RhdGlvbihyb3RhdGlvbkRlZ3JlZXNfKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSByb3RhdGlvbkRlZ3JlZXNfICogRXh0TWF0aC5UT19SQURJQU5TO1xyXG4gICAgfVxyXG4gICAgVHJhbnNsYXRlKHRyYW5zbGF0aW9uXykge1xyXG4gICAgICAgIHRoaXMuU2V0UG9zaXRpb24odGhpcy5Qb3NpdGlvbi54ICsgdHJhbnNsYXRpb25fLngsIHRoaXMuUG9zaXRpb24ueSArIHRyYW5zbGF0aW9uXy55KTtcclxuICAgIH1cclxuICAgIFNldEFscGhhKG9wYWNpdHlfKSB7XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBvcGFjaXR5XztcclxuICAgIH1cclxuICAgIHVwZGF0ZVJlbmRlclNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZS54ID0gKHRoaXMuX3RhcmdldFNpemUueCAqIHRoaXMuX3NjYWxlLngpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueSA9ICh0aGlzLl90YXJnZXRTaXplLnkgKiB0aGlzLl9zY2FsZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFeHRNYXRoIH0gZnJvbSBcIi4uL3V0aWwvZXh0bWF0aFwiO1xyXG5leHBvcnQgY2xhc3MgTVZBdWRpb0dyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGF1ZGlvUmVzb3VyY2VzXykge1xyXG4gICAgICAgIHRoaXMuUmFuZG9taXplID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbmV4dEF1ZGlvSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fYXVkaW9SZXNvdXJjZXMgPSBhdWRpb1Jlc291cmNlc187XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdWRpb1Jlc291cmNlc1t0aGlzLl9uZXh0QXVkaW9JbmRleF0uY3VycmVudFRpbWUgPiAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXVkaW9SZXNvdXJjZXNbdGhpcy5fbmV4dEF1ZGlvSW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuUmFuZG9taXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHRBdWRpb0luZGV4ID0gRXh0TWF0aC5HZXRSYW5kb21JbnQodGhpcy5fYXVkaW9SZXNvdXJjZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbmV4dEF1ZGlvSW5kZXggPSAodGhpcy5fbmV4dEF1ZGlvSW5kZXggKyAxID49IHRoaXMuX2F1ZGlvUmVzb3VyY2VzLmxlbmd0aCkgP1xyXG4gICAgICAgICAgICAwIDogdGhpcy5fbmV4dEF1ZGlvSW5kZXggKyAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgTVZBdWRpb0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9hbGxBdWRpbyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlZEF1ZGlvID0ge307XHJcbiAgICB9XHJcbiAgICBnZXQgTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hlZExvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBBZGQoYXVkaW9VUkxzXykge1xyXG4gICAgICAgIGF1ZGlvVVJMc18uZm9yRWFjaChhdWRpb1VSTCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEF1ZGlvLnB1c2goYXVkaW9VUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgTG9hZEFsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgbG9hZGluZyBhdWRpb1wiKTtcclxuICAgICAgICBsZXQgcHJvbWlzZVRvTG9hZEF1ZGlvID0gdGhpcy5fYWxsQXVkaW8ubWFwKChhdWRpb1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Jlc291cmNlID0gbmV3IEF1ZGlvKGF1ZGlvVVJMKTtcclxuICAgICAgICAgICAgICAgIG5ld1Jlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlZEF1ZGlvW2F1ZGlvVVJMXSA9IG5ld1Jlc291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZVRvTG9hZEF1ZGlvKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgRW5naW5lLlN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBHZXQoYXVkaW9VUkxfKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZEF1ZGlvW2F1ZGlvVVJMX107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBNVlRleHQgfSBmcm9tIFwiLi9tdlRleHRcIjtcclxuaW1wb3J0IHsgTVZUZXh0QWxpZ25tZW50IH0gZnJvbSBcIi4uL2VudW1zL212VGV4dEFsaWdubWVudFwiO1xyXG5pbXBvcnQgeyBBdWRpb0xpYnJhcnksIEF1ZGlvTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvQXVkaW9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgTVZBdWRpb0dyb3VwIH0gZnJvbSBcIi4vbXZBdWRpb0dyb3VwXCI7XHJcbmV4cG9ydCBjbGFzcyBNVkJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZGxlSW1hZ2VfLCBob3ZlckltYWdlXywgcG9zaXRpb25fLCB0ZXh0VmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5faG92ZXJlZExhc3RGcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lkbGVJbWFnZSA9IGlkbGVJbWFnZV87XHJcbiAgICAgICAgdGhpcy5faG92ZXJJbWFnZSA9IGhvdmVySW1hZ2VfO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBNVlNwcml0ZSh0aGlzLl9pZGxlSW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSk7XHJcbiAgICAgICAgaWYgKHRleHRWYWx1ZV8pIHtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IG5ldyBNVlRleHQodGV4dFZhbHVlXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuU2V0Q29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuU2V0VGV4dEFsaWdubWVudChNVlRleHRBbGlnbm1lbnQuQ2VudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRGb250U2l6ZSgzNik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuU2V0Rm9udEZhbWlseShcIk9zd2FsZC1SZWd1bGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvbl8ueCwgcG9zaXRpb25fLnkgKyAodGhpcy5fdGV4dC5Gb250U2l6ZSAvIDQpKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5UcmFuc2Zvcm0uU2V0U2l6ZSgxNTAsIHRoaXMuX3RleHQuRm9udFNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRSb3RhdGlvbigwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faG92ZXJTb3VuZCA9IG5ldyBNVkF1ZGlvR3JvdXAoW0F1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuTUVOVV9IT1ZFUildKTtcclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBJc0hvdmVyZWQobW91c2VQb3NpdGlvbl8pIHtcclxuICAgICAgICBjb25zdCBob3ZlcmVkID0gdGhpcy5Db250YWlucyhtb3VzZVBvc2l0aW9uXyk7XHJcbiAgICAgICAgaWYgKGhvdmVyZWQgIT09IHRoaXMuX2hvdmVyZWRMYXN0RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5faG92ZXJlZExhc3RGcmFtZSA9IGhvdmVyZWQ7XHJcbiAgICAgICAgICAgIGlmIChob3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlclNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZSh0aGlzLl9ob3ZlckltYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZSh0aGlzLl9pZGxlSW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBob3ZlcmVkO1xyXG4gICAgfVxyXG4gICAgQ29udGFpbnMocG9pbnRfKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm0uUmVjdC5Db250YWlucyhwb2ludF8ueCwgcG9pbnRfLnkpO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLkRyYXcoKTtcclxuICAgICAgICAoX2EgPSB0aGlzLl90ZXh0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuRHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEF1ZGlvTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvQXVkaW9Mb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIE1WSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoZWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fYWxsSW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fbG9hZGVkSW1hZ2VzID0ge307XHJcbiAgICB9XHJcbiAgICBnZXQgTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hlZExvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBBZGQoaW1hZ2VVUkxzXykge1xyXG4gICAgICAgIGltYWdlVVJMc18uZm9yRWFjaChpbWdVUkwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxJbWFnZXMucHVzaChpbWdVUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgTG9hZEFsbCgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZVRvTG9hZEltYWdlcyA9IHRoaXMuX2FsbEltYWdlcy5tYXAoKGltZ1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkSW1hZ2VzW2ltZ1VSTF0gPSBuZXdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbmV3SW1hZ2Uuc3JjID0gaW1nVVJMO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZVRvTG9hZEltYWdlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkxvYWRBbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdldChpbWFnZVVSTF8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkSW1hZ2VzW2ltYWdlVVJMX107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL212RW5naW5lJztcclxuaW1wb3J0IHsgTVZSZW5kZXJhYmxlVHlwZSB9IGZyb20gJy4uL2VudW1zL212UmVuZGVyYWJsZVR5cGUnO1xyXG5leHBvcnQgY2xhc3MgTVZTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VFbGVtZW50Xykge1xyXG4gICAgICAgIHRoaXMuUmVuZGVyVHlwZSA9IE1WUmVuZGVyYWJsZVR5cGUuSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSBpbWFnZUVsZW1lbnRfO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0uU2V0RnJvbUltYWdlRGF0YSh0aGlzLl9pbWFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgQ29udGVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBSZW5kZXJlci5BZGRUb1JlbmRlclF1ZXVlKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgU2V0SW1hZ2UoaW1hZ2VFbGVtZW50Xykge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gaW1hZ2VFbGVtZW50XztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlJlbmRlcmFibGVUeXBlIH0gZnJvbSBcIi4uL2VudW1zL212UmVuZGVyYWJsZVR5cGVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIi4vVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4uL212RW5naW5lXCI7XHJcbmltcG9ydCB7IE1WVGV4dEFsaWdubWVudCB9IGZyb20gXCIuLi9lbnVtcy9tdlRleHRBbGlnbm1lbnRcIjtcclxuaW1wb3J0IHsgTVZGb250U3R5bGUgfSBmcm9tIFwiLi4vZW51bXMvbXZGb250U3R5bGVcIjtcclxuZXhwb3J0IGNsYXNzIE1WVGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0VmFsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5SZW5kZXJUeXBlID0gTVZSZW5kZXJhYmxlVHlwZS5UZXh0O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIFwiO1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gMTtcclxuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IDIwO1xyXG4gICAgICAgIHRoaXMuX2ZvbnRGYW1pbHkgPSBcIkFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZm9udFN0eWxlID0gTVZGb250U3R5bGUuUmVndWxhcjtcclxuICAgICAgICB0aGlzLl9hbGlnbm1lbnQgPSBNVlRleHRBbGlnbm1lbnQuTGVmdDtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dFZhbHVlID0gdGV4dFZhbHVlXztcclxuICAgIH1cclxuICAgIGdldCBDb250ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dFZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgZ2V0IENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvciArIHRoaXMuX2FscGhhICsgXCIpXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgRm9udFN0eWxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fZm9udFN0eWxlKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhc2UgTVZGb250U3R5bGUuUmVndWxhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WRm9udFN0eWxlLkl0YWxpYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIml0YWxpYyBcIjtcclxuICAgICAgICAgICAgY2FzZSBNVkZvbnRTdHlsZS5Cb2xkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYm9sZCBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgRm9udFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xyXG4gICAgfVxyXG4gICAgZ2V0IEZvbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLkZvbnRTdHlsZSArXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbnRTaXplICogUmVuZGVyZXIuUmVzb2x1dGlvbi54KSArXHJcbiAgICAgICAgICAgICdweCAnICsgdGhpcy5fZm9udEZhbWlseTtcclxuICAgIH1cclxuICAgIGdldCBBbGlnbm1lbnQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbm1lbnQpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSBNVlRleHRBbGlnbm1lbnQuTGVmdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjtcclxuICAgICAgICAgICAgY2FzZSBNVlRleHRBbGlnbm1lbnQuUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WVGV4dEFsaWdubWVudC5DZW50ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIFJlbmRlcmVyLkFkZFRvUmVuZGVyUXVldWUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBTZXRDb2xvcihyZWRfLCBncmVlbl8sIGJsdWVfKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBcInJnYmEoXCIgKyByZWRfICsgXCIsIFwiICsgZ3JlZW5fICsgXCIsIFwiICsgYmx1ZV8gKyBcIiwgXCI7XHJcbiAgICB9XHJcbiAgICBTZXRBbHBoYShhbHBoYV8pIHtcclxuICAgICAgICB0aGlzLl9hbHBoYSA9IGFscGhhXztcclxuICAgIH1cclxuICAgIFNldEZvbnRTaXplKHNpemVfKSB7XHJcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSBzaXplXztcclxuICAgIH1cclxuICAgIFNldEZvbnRTdHlsZShtdkZvbnRTdHlsZV8pIHtcclxuICAgICAgICB0aGlzLl9mb250U3R5bGUgPSBtdkZvbnRTdHlsZV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250RmFtaWx5KGZvbnROYW1lXykge1xyXG4gICAgICAgIHRoaXMuX2ZvbnRGYW1pbHkgPSBmb250TmFtZV87XHJcbiAgICB9XHJcbiAgICBTZXRNYXhXaWR0aChtYXhXaWR0aF8pIHtcclxuICAgICAgICB0aGlzLlRyYW5zZm9ybS5TZXRTaXplKG1heFdpZHRoXywgdGhpcy5UcmFuc2Zvcm0uU2l6ZS55KTtcclxuICAgIH1cclxuICAgIFNldFRleHRBbGlnbm1lbnQoYWxpZ25tZW50Xykge1xyXG4gICAgICAgIHRoaXMuX2FsaWdubWVudCA9IGFsaWdubWVudF87XHJcbiAgICB9XHJcbiAgICBTZXRWYWx1ZSh2YWx1ZV8pIHtcclxuICAgICAgICB0aGlzLl90ZXh0VmFsdWUgPSB2YWx1ZV87XHJcbiAgICB9XHJcbiAgICBTZXRGb250UHJvcGVydGllcyhmb250RmFtaWx5XywgZm9udFNpemVfLCB0ZXh0QWxpZ25tZW50XywgZm9udFN0eWxlXykge1xyXG4gICAgICAgIHRoaXMuU2V0Rm9udEZhbWlseShmb250RmFtaWx5Xyk7XHJcbiAgICAgICAgdGhpcy5TZXRGb250U2l6ZShmb250U2l6ZV8pO1xyXG4gICAgICAgIHRoaXMuU2V0VGV4dEFsaWdubWVudCh0ZXh0QWxpZ25tZW50Xyk7XHJcbiAgICAgICAgdGhpcy5TZXRGb250U3R5bGUoZm9udFN0eWxlXyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBNVkZvbnRTdHlsZTtcclxuKGZ1bmN0aW9uIChNVkZvbnRTdHlsZSkge1xyXG4gICAgTVZGb250U3R5bGVbTVZGb250U3R5bGVbXCJSZWd1bGFyXCJdID0gMF0gPSBcIlJlZ3VsYXJcIjtcclxuICAgIE1WRm9udFN0eWxlW01WRm9udFN0eWxlW1wiSXRhbGljXCJdID0gMV0gPSBcIkl0YWxpY1wiO1xyXG4gICAgTVZGb250U3R5bGVbTVZGb250U3R5bGVbXCJCb2xkXCJdID0gMl0gPSBcIkJvbGRcIjtcclxufSkoTVZGb250U3R5bGUgfHwgKE1WRm9udFN0eWxlID0ge30pKTtcclxuIiwiZXhwb3J0IHZhciBNVlJlbmRlcmFibGVUeXBlO1xyXG4oZnVuY3Rpb24gKE1WUmVuZGVyYWJsZVR5cGUpIHtcclxuICAgIE1WUmVuZGVyYWJsZVR5cGVbTVZSZW5kZXJhYmxlVHlwZVtcIkltYWdlXCJdID0gMF0gPSBcIkltYWdlXCI7XHJcbiAgICBNVlJlbmRlcmFibGVUeXBlW01WUmVuZGVyYWJsZVR5cGVbXCJUZXh0XCJdID0gMV0gPSBcIlRleHRcIjtcclxufSkoTVZSZW5kZXJhYmxlVHlwZSB8fCAoTVZSZW5kZXJhYmxlVHlwZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgTVZUZXh0QWxpZ25tZW50O1xyXG4oZnVuY3Rpb24gKE1WVGV4dEFsaWdubWVudCkge1xyXG4gICAgTVZUZXh0QWxpZ25tZW50W01WVGV4dEFsaWdubWVudFtcIkxlZnRcIl0gPSAwXSA9IFwiTGVmdFwiO1xyXG4gICAgTVZUZXh0QWxpZ25tZW50W01WVGV4dEFsaWdubWVudFtcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XHJcbiAgICBNVlRleHRBbGlnbm1lbnRbTVZUZXh0QWxpZ25tZW50W1wiQ2VudGVyXCJdID0gMl0gPSBcIkNlbnRlclwiO1xyXG59KShNVlRleHRBbGlnbm1lbnQgfHwgKE1WVGV4dEFsaWdubWVudCA9IHt9KSk7XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuL212RW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuT25FbmFibGUoKTtcclxuICAgIH1cclxuICAgIE9uRW5hYmxlKCkge1xyXG4gICAgICAgIEVuZ2luZS5FbnF1ZXVlUnVudGltZU9iamVjdCh0aGlzKTtcclxuICAgIH1cclxuICAgIE9uRGlzYWJsZSgpIHtcclxuICAgICAgICBFbmdpbmUuRGVxdWV1ZVJ1bnRpbWVPYmplY3QodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXcvbXZWaWV3cG9ydFwiO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vc2V0dXAvbXZEaXNwbGF5XCI7XHJcbmV4cG9ydCBjb25zdCBSZW5kZXJlciA9IG5ldyBNVlZpZXdwb3J0KCcjZ2FtZUNhbnZhcycpO1xyXG5leHBvcnQgY2xhc3MgTVZFbmdpbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcnVudGltZVF1ZXVlID0gW107XHJcbiAgICAgICAgdGhpcy5fbW91c2VQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIHRoaXMuX2lzVXNlckNsaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faXNFbmdpbmVSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgUmVuZGVyZXIuVXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIFJlbmRlcmVyLkNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IFJlbmRlcmVyLkNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fbW91c2VQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgdGhpcy5fbW91c2VQb3NpdGlvbi55ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFJlbmRlcmVyLkNhbnZhcy5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1VzZXJDbGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9kZWx0YVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lc3RhbXAgPSAwO1xyXG4gICAgfVxyXG4gICAgZ2V0IE1vdXNlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgVmlld3BvcnRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuX21vdXNlUG9zaXRpb24ueCAvIFJlbmRlcmVyLlJlc29sdXRpb24ueCwgeTogdGhpcy5fbW91c2VQb3NpdGlvbi55IC8gUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgSXNVc2VyQ2xpY2tpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVXNlckNsaWNraW5nO1xyXG4gICAgfVxyXG4gICAgZ2V0IElzUnVubmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNFbmdpbmVSdW5uaW5nO1xyXG4gICAgfVxyXG4gICAgZ2V0IERlbHRhVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gICAgfVxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNFbmdpbmVSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5HYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIEdhbWVMb29wKHRpbWVzdGFtcF8pIHtcclxuICAgICAgICB0aGlzLl9kZWx0YVRpbWUgPSAodGltZXN0YW1wXyAtIHRoaXMuX2xhc3RUaW1lc3RhbXApIC8gRGlzcGxheS5QRVJGRUNUX0ZSQU1FX1RJTUU7XHJcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcF87XHJcbiAgICAgICAgUmVuZGVyZXIuVXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC5VcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZW5kZXJlci5SZW5kZXJUb0NhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuX2lzVXNlckNsaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuR2FtZUxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBFbnF1ZXVlUnVudGltZU9iamVjdChtdkJlaGF2aW9yT2JqZWN0Xykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja1F1ZXVlRm9ySXRlbShtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5wdXNoKG12QmVoYXZpb3JPYmplY3RfKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEZXF1ZXVlUnVudGltZU9iamVjdChtdkJlaGF2aW9yT2JqZWN0Xykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja1F1ZXVlRm9ySXRlbShtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVudGltZVF1ZXVlLnNwbGljZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcnVudGltZVF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcnVudGltZVF1ZXVlW2luZGV4XSA9PT0gbXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IEVuZ2luZSA9IG5ldyBNVkVuZ2luZSgpO1xyXG4iLCJleHBvcnQgY2xhc3MgRGlzcGxheSB7XHJcbn1cclxuRGlzcGxheS5ERUZBVUxUX1JFU09MVVRJT04gPSB7IHg6IDE5MjAsIHk6IDEwODAgfTtcclxuRGlzcGxheS5QRVJGRUNUX0ZSQU1FX1RJTUUgPSAoMTAwMCAvIDYwKTtcclxuIiwiZXhwb3J0IGNsYXNzIEV4dE1hdGgge1xyXG4gICAgc3RhdGljIEdldFJhbmRvbUludChtYXhpbXVtVmFsdWVfKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heGltdW1WYWx1ZV8pO1xyXG4gICAgfVxyXG59XHJcbkV4dE1hdGguVE9fUkFESUFOUyA9IE1hdGguUEkgLyAxODA7XHJcbiIsImltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9zZXR1cC9tdkRpc3BsYXknO1xyXG5pbXBvcnQgeyBNVlJlbmRlcmFibGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvbXZSZW5kZXJhYmxlVHlwZSc7XHJcbmV4cG9ydCBjbGFzcyBNVlZpZXdwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc05hbWVfKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9IHsgeDogMSwgeTogMSB9O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzTmFtZV8pO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgZ2V0IFJlc29sdXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdXRpb247XHJcbiAgICB9XHJcbiAgICBVcGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgICAgIHRoaXMuQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICB0aGlzLkNhbnZhcy5oZWlnaHQgPSAodGhpcy5DYW52YXMud2lkdGggLyAxNikgKiA5O1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24ueCA9IHRoaXMuQ2FudmFzLndpZHRoIC8gRGlzcGxheS5ERUZBVUxUX1JFU09MVVRJT04ueDtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnkgPSB0aGlzLl9yZXNvbHV0aW9uLng7XHJcbiAgICB9XHJcbiAgICBBZGRUb1JlbmRlclF1ZXVlKG9iamVjdF8pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0LnB1c2gob2JqZWN0Xyk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJUb0NhbnZhcygpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkNhbnZhcy53aWR0aCwgdGhpcy5DYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcmVuZGVyTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5SZW5kZXJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1WUmVuZGVyYWJsZVR5cGUuSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXJJbWFnZSh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5Db250ZW50cywgdGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTVZSZW5kZXJhYmxlVHlwZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVyVGV4dCh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5Db250ZW50cywgdGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDdXJzb3IoKTtcclxuICAgIH1cclxuICAgIFJlbmRlckltYWdlKGltYWdlXywgdHJhbnNmb3JtXykge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRyYW5zZm9ybV8uUG9zaXRpb24ueCAqIHRoaXMuX3Jlc29sdXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55ICogdGhpcy5fcmVzb2x1dGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0cmFuc2Zvcm1fLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gdHJhbnNmb3JtXy5BbHBoYTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShpbWFnZV8sIC0odHJhbnNmb3JtXy5TaXplLnggLyAyKSAqIHRoaXMuX3Jlc29sdXRpb24ueCwgLSh0cmFuc2Zvcm1fLlNpemUueSAvIDIpICogdGhpcy5fcmVzb2x1dGlvbi55LCAodHJhbnNmb3JtXy5TaXplLnggKiB0aGlzLl9yZXNvbHV0aW9uLngpLCAodHJhbnNmb3JtXy5TaXplLnkgKiB0aGlzLl9yZXNvbHV0aW9uLnkpKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFJlbmRlclRleHQodGV4dF8sIHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHRleHRfLkNvbG9yO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRyYW5zZm9ybV8uUG9zaXRpb24ueCAqIHRoaXMuX3Jlc29sdXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55ICogdGhpcy5fcmVzb2x1dGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0cmFuc2Zvcm1fLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZvbnQgPSB0ZXh0Xy5Gb250O1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudGV4dEFsaWduID0gdGV4dF8uQWxpZ25tZW50O1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFRleHQodGV4dF8uVmFsdWUsIDAsIDAsIHRyYW5zZm9ybV8uU2l6ZS54ICogdGhpcy5fcmVzb2x1dGlvbi54KTtcclxuICAgIH1cclxuICAgIFNldEN1cnNvcihjdXJzb3JTcHJpdGVfKSB7XHJcbiAgICAgICAgdGhpcy5fY3Vyc29yU3ByaXRlID0gY3Vyc29yU3ByaXRlXztcclxuICAgIH1cclxuICAgIHJlbmRlckN1cnNvcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1cnNvclNwcml0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uUG9zaXRpb24ueCwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5Qb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZSh0aGlzLl9jdXJzb3JTcHJpdGUuQ29udGVudHMsIC0odGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnggLyAyKSwgLSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlNpemUueSAvIDIpLCB0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlNpemUueCwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tIFwiLi4vZW5naW5lL212QmVoYXZpb3JcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9NYWluTWVudVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVwbGF5U2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvR2FtZXBsYXlTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9lbnVtcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2FsU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvVW5pdmVyc2FsU2NlbmVcIjtcclxuZXhwb3J0IGNsYXNzIFNjZW5lSGFuZGxlciBleHRlbmRzIE1WQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzID0gbmV3IEFycmF5KEdhbWVTdGF0ZS5Ub3RhbCk7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2NlbmUgPSBuZXcgVW5pdmVyc2FsU2NlbmUoKTtcclxuICAgICAgICB0aGlzLl9zY2VuZXNbR2FtZVN0YXRlLk1haW5NZW51XSA9IG5ldyBNYWluTWVudVNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW0dhbWVTdGF0ZS5HYW1lcGxheV0gPSBuZXcgR2FtZXBsYXlTY2VuZSgpO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNjZW5lLlBsYXkoKTtcclxuICAgICAgICB0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5QbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZTtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVzW3RoaXMuX2dhbWVTdGF0ZV0uUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgR2FtZVN0YXRlO1xyXG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xyXG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIk1haW5NZW51XCJdID0gMF0gPSBcIk1haW5NZW51XCI7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiR2FtZXBsYXlcIl0gPSAxXSA9IFwiR2FtZXBsYXlcIjtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJUb3RhbFwiXSA9IDJdID0gXCJUb3RhbFwiO1xyXG59KShHYW1lU3RhdGUgfHwgKEdhbWVTdGF0ZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVRpbGVNYXJrO1xyXG4oZnVuY3Rpb24gKEdhbWVUaWxlTWFyaykge1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIlhcIl0gPSAxXSA9IFwiWFwiO1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIk9cIl0gPSAyXSA9IFwiT1wiO1xyXG59KShHYW1lVGlsZU1hcmsgfHwgKEdhbWVUaWxlTWFyayA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVRpbGVTdGF0ZTtcclxuKGZ1bmN0aW9uIChHYW1lVGlsZVN0YXRlKSB7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJFbXB0eVwiXSA9IDBdID0gXCJFbXB0eVwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiSG92ZXJlZFwiXSA9IDFdID0gXCJIb3ZlcmVkXCI7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJNYXJrZWRcIl0gPSAyXSA9IFwiTWFya2VkXCI7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJXaW5uaW5nXCJdID0gM10gPSBcIldpbm5pbmdcIjtcclxufSkoR2FtZVRpbGVTdGF0ZSB8fCAoR2FtZVRpbGVTdGF0ZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVdpbm5lcjtcclxuKGZ1bmN0aW9uIChHYW1lV2lubmVyKSB7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlRpZVwiXSA9IDFdID0gXCJUaWVcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlBsYXllcjFcIl0gPSAyXSA9IFwiUGxheWVyMVwiO1xyXG4gICAgR2FtZVdpbm5lcltHYW1lV2lubmVyW1wiUGxheWVyMlwiXSA9IDNdID0gXCJQbGF5ZXIyXCI7XHJcbn0pKEdhbWVXaW5uZXIgfHwgKEdhbWVXaW5uZXIgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIFBhcnRpY2xlRWZmZWN0O1xyXG4oZnVuY3Rpb24gKFBhcnRpY2xlRWZmZWN0KSB7XHJcbiAgICBQYXJ0aWNsZUVmZmVjdFtQYXJ0aWNsZUVmZmVjdFtcIlNtb2tlXCJdID0gMF0gPSBcIlNtb2tlXCI7XHJcbiAgICBQYXJ0aWNsZUVmZmVjdFtQYXJ0aWNsZUVmZmVjdFtcIkV4cGxvc2lvblwiXSA9IDFdID0gXCJFeHBsb3Npb25cIjtcclxufSkoUGFydGljbGVFZmZlY3QgfHwgKFBhcnRpY2xlRWZmZWN0ID0ge30pKTtcclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZCZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBFbmdpbmUsIFJlbmRlcmVyIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgQ3Vyc29yUmVuZGVyZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlXykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKGltYWdlXyk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihFbmdpbmUuTW91c2VQb3NpdGlvbi54LCBFbmdpbmUuTW91c2VQb3NpdGlvbi55KTtcclxuICAgICAgICBSZW5kZXJlci5TZXRDdXJzb3IodGhpcy5fc3ByaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbWFnZUxpYnJhcnksIEltYWdlTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgRXh0TWF0aCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvdXRpbC9leHRtYXRoXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlRWZmZWN0IH0gZnJvbSBcIi4uL2VudW1zL1BhcnRpY2xlRWZmZWN0XCI7XHJcbmV4cG9ydCBjbGFzcyBFeHBsb3Npb25FZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5QYXJ0aWNsZVR5cGUgPSBQYXJ0aWNsZUVmZmVjdC5FeHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVDb3VudCA9IDE7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkVYUExPU0lPTikpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXMucHVzaChuZXdQYXJ0aWNsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGxheShwb3NpdGlvbl8pIHtcclxuICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvbl8ueCwgcG9zaXRpb25fLnkpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TY2FsZSA9IChNYXRoLnJhbmRvbSgpICogMC4yKSArIDAuMztcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUocmFuZG9tU2NhbGUsIHJhbmRvbVNjYWxlKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUm90YXRpb24gPSAoRXh0TWF0aC5HZXRSYW5kb21JbnQoMzYwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFJvdGF0aW9uKHJhbmRvbVJvdGF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0QWxwaGEoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TY2FsZS54O1xyXG4gICAgICAgICAgICBpZiAoc2NhbGUgPCAxLjMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gc2NhbGUgKyAwLjA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUobmV3U2NhbGUsIG5ld1NjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldEFscGhhKDEgLSAoc2NhbGUgLSAwLjcpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlIH0gZnJvbSBcIi4vR2FtZVRpbGVcIjtcclxuaW1wb3J0IHsgR2FtZVRpbGVTdGF0ZSB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlTWFyayB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZU1hcmtcIjtcclxuaW1wb3J0IHsgR2FtZVdpbm5lciB9IGZyb20gXCIuLi9lbnVtcy9HYW1lV2lubmVyXCI7XHJcbmltcG9ydCB7IHBhcnRpY2xlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9hcHBcIjtcclxuaW1wb3J0IHsgUGFydGljbGVFZmZlY3QgfSBmcm9tIFwiLi4vZW51bXMvUGFydGljbGVFZmZlY3RcIjtcclxuaW1wb3J0IHsgTVZBdWRpb0dyb3VwIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QXVkaW9Hcm91cFwiO1xyXG5pbXBvcnQgeyBBdWRpb0xpYnJhcnksIEF1ZGlvTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvQXVkaW9Mb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuID0gMDtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSBHYW1lV2lubmVyLk5vbmU7XHJcbiAgICAgICAgdGhpcy5fbGFzdFdpbm5pbmdDb21iaW5hdGlvbiA9IFszXTtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0RHVyYXRpb24gPSAxMDtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fd2lubmluZ0NvbmRpdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IEdhbWVUaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiA4MjAgKyAoMTQwICogaSksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNTEwICsgKDE0MCAqIGopXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVUaWxlcy5wdXNoKG5ld1RpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25Tb3VuZHMgPSBuZXcgTVZBdWRpb0dyb3VwKFtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04xKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04yKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04zKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT040KSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT041KSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT042KVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuX2V4cGxvc2lvblNvdW5kcy5SYW5kb21pemUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hcmtpbmdTb3VuZHMgPSBuZXcgTVZBdWRpb0dyb3VwKFtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NQVJLMSksXHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuTUFSSzIpLFxyXG4gICAgICAgICAgICBBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5Lk1BUkszKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NQVJLNCksXHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuTUFSSzUpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBnZXQgUGxheWVyVHVybigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyVHVybjtcclxuICAgIH1cclxuICAgIGdldCBHYW1lV2lubmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lV2lubmVyO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZU92ZXIgJiYgdGhpcy5fZXhwbG9zaW9uRWZmZWN0SW5kZXggPD0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhwbG9zaW9uRWZmZWN0VGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RUaW1lciAtPSBFbmdpbmUuRGVsdGFUaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nYW1lVGlsZXNbdGhpcy5fbGFzdFdpbm5pbmdDb21iaW5hdGlvblt0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleF1dLlRyYW5zZm9ybS5Qb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlSGFuZGxlci5QbGF5KFBhcnRpY2xlRWZmZWN0LkV4cGxvc2lvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVIYW5kbGVyLlBsYXkoUGFydGljbGVFZmZlY3QuU21va2UsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cGxvc2lvblNvdW5kcy5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RUaW1lciA9IHRoaXMuX2V4cGxvc2lvbkVmZmVjdER1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0SW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hlY2tHYW1lT3V0Y29tZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2dhbWVPdmVyICYmIHRpbGUuU3RhdGUgIT09IEdhbWVUaWxlU3RhdGUuTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5DaGVjayhFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrID0gKHRoaXMuX3BsYXllclR1cm4gPT09IDApID8gR2FtZVRpbGVNYXJrLlggOiBHYW1lVGlsZU1hcmsuTztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuTWFya2VkLCBtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVybiA9ICh0aGlzLl9wbGF5ZXJUdXJuID09PSAwKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0dhbWVPdXRjb21lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVIYW5kbGVyLlBsYXkoUGFydGljbGVFZmZlY3QuU21va2UsIHRpbGUuVHJhbnNmb3JtLlBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya2luZ1NvdW5kcy5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLlNldChHYW1lVGlsZVN0YXRlLkhvdmVyZWQsIG1hcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuRW1wdHksIEdhbWVUaWxlTWFyay5Ob25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLkRyYXcoKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrR2FtZU91dGNvbWUgJiYgIXRoaXMuX2dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVybWluZUdhbWVPdXRjb21lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLlNldChHYW1lVGlsZVN0YXRlLkVtcHR5LCBHYW1lVGlsZU1hcmsuTm9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gR2FtZVdpbm5lci5Ob25lO1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX2V4cGxvc2lvbkVmZmVjdFRpbWVyID0gMDtcclxuICAgIH1cclxuICAgIGRldGVybWluZUdhbWVPdXRjb21lKCkge1xyXG4gICAgICAgIGxldCByb3VuZFdvbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gNzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5Db25kaXRpb24gPSB0aGlzLl93aW5uaW5nQ29uZGl0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLl9nYW1lVGlsZXNbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuX2dhbWVUaWxlc1t3aW5Db25kaXRpb25bMV1dO1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5fZ2FtZVRpbGVzW3dpbkNvbmRpdGlvblsyXV07XHJcbiAgICAgICAgICAgIGlmIChhLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCAmJiBiLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCAmJlxyXG4gICAgICAgICAgICAgICAgYy5TdGF0ZSAhPT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLk1hcmtpbmcgPT09IGIuTWFya2luZyAmJiBiLk1hcmtpbmcgPT09IGMuTWFya2luZykge1xyXG4gICAgICAgICAgICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYS5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBhLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgYi5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBiLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgYy5TZXQoR2FtZVRpbGVTdGF0ZS5XaW5uaW5nLCBjLk1hcmtpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVdpbm5lciA9IChhLk1hcmtpbmcgPT09IEdhbWVUaWxlTWFyay5PKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVdpbm5lci5QbGF5ZXIyIDogR2FtZVdpbm5lci5QbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFdpbm5pbmdDb21iaW5hdGlvblswXSA9IHdpbkNvbmRpdGlvblswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RXaW5uaW5nQ29tYmluYXRpb25bMV0gPSB3aW5Db25kaXRpb25bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0V2lubmluZ0NvbWJpbmF0aW9uWzJdID0gd2luQ29uZGl0aW9uWzJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3VuZFdvbikge1xyXG4gICAgICAgICAgICBsZXQgYWxsVGlsZXNNYXJrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZ2FtZVRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVUaWxlc1tpbmRleF0uU3RhdGUgPT09IEdhbWVUaWxlU3RhdGUuTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbGxUaWxlc01hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsbFRpbGVzTWFya2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gR2FtZVdpbm5lci5UaWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICByb3VuZFdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdW5kV29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZUxvZ28ge1xyXG4gICAgY29uc3RydWN0b3IoaWNvbkltYWdlXywgdGV4dEltYWdlXykge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2ljb24gPSBuZXcgTVZTcHJpdGUoaWNvbkltYWdlXyk7XHJcbiAgICAgICAgdGhpcy5faWNvbi5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMTE2MCwgMjYwKTtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gbmV3IE1WU3ByaXRlKHRleHRJbWFnZV8pO1xyXG4gICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDk2MCwgMjYwKTtcclxuICAgIH1cclxuICAgIERyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgd2F2ZSA9IE1hdGguc2luKHRoaXMuX2FuaW1hdGUpICogMTU7XHJcbiAgICAgICAgdGhpcy5faWNvbi5UcmFuc2Zvcm0uU2V0Um90YXRpb24od2F2ZSk7XHJcbiAgICAgICAgY29uc3QgcHVsc2UgPSBNYXRoLnNpbih0aGlzLl9hbmltYXRlICogMS4zKSAqIDAuMTtcclxuICAgICAgICB0aGlzLl9pY29uLlRyYW5zZm9ybS5TZXRTY2FsZSgxICsgcHVsc2UsIDEgKyBwdWxzZSk7XHJcbiAgICAgICAgdGhpcy5fdGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24odGhpcy5fdGV4dC5UcmFuc2Zvcm0uUG9zaXRpb24ueCwgMjYwICsgd2F2ZSk7XHJcbiAgICAgICAgdGhpcy5faWNvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dC5EcmF3KCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSAodGhpcy5fYW5pbWF0ZSA+IDEwMDAwMCkgP1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlIC0gMTAwMDAwIDogdGhpcy5fYW5pbWF0ZSArIChFbmdpbmUuRGVsdGFUaW1lICogMC4wMyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgR2FtZVRpbGVTdGF0ZSB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlTWFyayB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZU1hcmtcIjtcclxuaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEF1ZGlvTGlicmFyeSwgQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9BdWRpb0xvYWRlclwiO1xyXG5pbXBvcnQgeyBNVkF1ZGlvR3JvdXAgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZBdWRpb0dyb3VwXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lVGlsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbl8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IEdhbWVUaWxlU3RhdGUuRW1wdHk7XHJcbiAgICAgICAgdGhpcy5fbWFya2VkQXMgPSBHYW1lVGlsZU1hcmsuTm9uZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0VNUFRZKSk7XHJcbiAgICAgICAgdGhpcy5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25fLngsIHBvc2l0aW9uXy55KTtcclxuICAgICAgICB0aGlzLl9ob3ZlckF1ZGlvID0gbmV3IE1WQXVkaW9Hcm91cChbXHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuSE9WRVIxKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5IT1ZFUjIpLFxyXG4gICAgICAgICAgICBBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5LkhPVkVSMylcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGdldCBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5UcmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBnZXQgU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IE1hcmtpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlZEFzO1xyXG4gICAgfVxyXG4gICAgQ2hlY2sobW91c2VQb3NpdGlvbl8pIHtcclxuICAgICAgICBpZiAodGhpcy5UcmFuc2Zvcm0uUmVjdC5Db250YWlucyhtb3VzZVBvc2l0aW9uXy54LCBtb3VzZVBvc2l0aW9uXy55KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgU2V0KHN0YXRlXywgbWFya2luZ18pIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT0gc3RhdGVfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZV87XHJcbiAgICAgICAgdGhpcy5fbWFya2VkQXMgPSBtYXJraW5nXztcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZVRpbGVTdGF0ZS5FbXB0eTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfRU1QVFkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuSG92ZXJlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyQXVkaW8uUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtlZEFzID09PSBHYW1lVGlsZU1hcmsuTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfTykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLk1hcmtlZDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXJrZWRBcyA9PT0gR2FtZVRpbGVNYXJrLk8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX08pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfWCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZVRpbGVTdGF0ZS5XaW5uaW5nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtlZEFzID09PSBHYW1lVGlsZU1hcmsuTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19PKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfWCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuRHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212QmVoYXZpb3JcIjtcclxuaW1wb3J0IHsgRXhwbG9zaW9uRWZmZWN0IH0gZnJvbSBcIi4vRXhwbG9zaW9uRWZmZWN0XCI7XHJcbmltcG9ydCB7IFNtb2tlRWZmZWN0IH0gZnJvbSBcIi4vU21va2VFZmZlY3RcIjtcclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlSGFuZGxlciBleHRlbmRzIE1WQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0V4cGxvc2lvbkVmZmVjdCA9IG5ldyBFeHBsb3Npb25FZmZlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzLnB1c2gobmV3RXhwbG9zaW9uRWZmZWN0KTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U21va2VFZmZlY3QgPSBuZXcgU21va2VFZmZlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzLnB1c2gobmV3U21va2VFZmZlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZXMuZm9yRWFjaChlZmZlY3QgPT4ge1xyXG4gICAgICAgICAgICBlZmZlY3QuRHJhdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUGxheShwYXJ0aWNsZUVmZmVjdF8sIHBvc2l0aW9uXykge1xyXG4gICAgICAgIGxldCBmaW5kaW5nUGFydGljbGUgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChmaW5kaW5nUGFydGljbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcnRpY2xlc1t0aGlzLl9sYXN0SW5kZXhdLlBhcnRpY2xlVHlwZSA9PSBwYXJ0aWNsZUVmZmVjdF8pIHtcclxuICAgICAgICAgICAgICAgIGZpbmRpbmdQYXJ0aWNsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW3RoaXMuX2xhc3RJbmRleF0uUGxheShwb3NpdGlvbl8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RJbmRleCA9ICh0aGlzLl9sYXN0SW5kZXggKyAxID49IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGgpID9cclxuICAgICAgICAgICAgICAgIDAgOiB0aGlzLl9sYXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5leHBvcnQgY2xhc3MgUGxheWVySGVhbHRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGZ1bGxIUEltYWdlXywgZW1wdHlIUEltYWdlXywgc2NyZWVuUG9zaXRpb25fID0geyB4OiAyNDAsIHk6IDM1MCB9KSB7XHJcbiAgICAgICAgdGhpcy5fbWF4SGVhbHRoID0gMztcclxuICAgICAgICB0aGlzLl9zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fZnVsbEltYWdlID0gZnVsbEhQSW1hZ2VfO1xyXG4gICAgICAgIHRoaXMuX2VtcHR5SW1hZ2UgPSBlbXB0eUhQSW1hZ2VfO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMuX21heEhlYWx0aDtcclxuICAgICAgICBsZXQgcG9zaXRpb25YID0gc2NyZWVuUG9zaXRpb25fLng7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX21heEhlYWx0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTcHJpdGUgPSBuZXcgTVZTcHJpdGUodGhpcy5fZnVsbEltYWdlKTtcclxuICAgICAgICAgICAgbmV3U3ByaXRlLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvblggKyAoaW5kZXggKiA2MCksIHNjcmVlblBvc2l0aW9uXy55KTtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlcy5wdXNoKG5ld1Nwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IEhQKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcbiAgICBSZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLl9tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbWFnZXMoKTtcclxuICAgIH1cclxuICAgIExvc2VIZWFsdGgoKSB7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbWFnZXMoKTtcclxuICAgIH1cclxuICAgIERyYXcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX21heEhlYWx0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2luZGV4XS5EcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSW1hZ2VzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tYXhIZWFsdGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1tpbmRleF0uU2V0SW1hZ2UodGhpcy5faGVhbHRoID4gaW5kZXggP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbEltYWdlIDogdGhpcy5fZW1wdHlJbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUVmZmVjdCB9IGZyb20gXCIuLi9lbnVtcy9QYXJ0aWNsZUVmZmVjdFwiO1xyXG5leHBvcnQgY2xhc3MgU21va2VFZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5QYXJ0aWNsZVR5cGUgPSBQYXJ0aWNsZUVmZmVjdC5TbW9rZTtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZUNvdW50ID0gMTA7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVEaXJlY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlNNT0tFX1BBUlRJQ0xFKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQbGF5KHBvc2l0aW9uXykge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9wYXJ0aWNsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNjYWxlID0gKE1hdGgucmFuZG9tKCkgKiAwLjgpICsgMC41O1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRTY2FsZShyYW5kb21TY2FsZSwgcmFuZG9tU2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TcGVlZFkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZURpcmVjdGlvbnMucHVzaCh7IHg6IHJhbmRvbVNwZWVkWCwgeTogcmFuZG9tU3BlZWRZIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRBbHBoYShyYW5kb21TY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TY2FsZS54O1xyXG4gICAgICAgICAgICBpZiAoc2NhbGUgPiAwLjAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTY2FsZSA9IHNjYWxlICogMC45NTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlRyYW5zbGF0ZSh0aGlzLl9wYXJ0aWNsZURpcmVjdGlvbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFNjYWxlKG5ld1NjYWxlLCBuZXdTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLkRyYXcoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZUZXh0IH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212VGV4dFwiO1xyXG5pbXBvcnQgeyBNVlRleHRBbGlnbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2VudW1zL212VGV4dEFsaWdubWVudFwiO1xyXG5pbXBvcnQgeyBNVkZvbnRTdHlsZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvZW51bXMvbXZGb250U3R5bGVcIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4uL29iamVjdHMvR2FtZUJvYXJkXCI7XHJcbmltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBHYW1lV2lubmVyIH0gZnJvbSBcIi4uL2VudW1zL0dhbWVXaW5uZXJcIjtcclxuaW1wb3J0IHsgUGxheWVySGVhbHRoIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVySGVhbHRoXCI7XHJcbmltcG9ydCB7IE1WQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZFbmdpbmVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VudW1zL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSBcIi4uLy4uL2RhdGEvU3RyaW5nc1wiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBNVkF1ZGlvR3JvdXAgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZBdWRpb0dyb3VwXCI7XHJcbmltcG9ydCB7IEF1ZGlvTGlicmFyeSwgQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9BdWRpb0xvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZXBsYXlTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dCA9IG5ldyBNVlRleHQoXCJZT1VSIFRVUk4sIFwiKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dCA9IG5ldyBNVlRleHQoXCJQTEFZRVIgMVwiKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dCA9IG5ldyBNVlRleHQoXCJQTEFZRVIgMVwiKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dCA9IG5ldyBNVlRleHQoXCJQTEFZRVIgMlwiKTtcclxuICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lUmVzdWx0VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX2dhbWVSZXN1bHRXYWl0RHVyYXRpb24gPSAxMjA7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRleHRFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxSGVhbHRoID0gbmV3IFBsYXllckhlYWx0aChJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSksIHsgeDogMjIwLCB5OiA2NTAgfSk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aCA9IG5ldyBQbGF5ZXJIZWFsdGgoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5IRUFSVCksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuSEVBUlRfRU1QVFkpLCB7IHg6IDE1ODAsIHk6IDY1MCB9KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxU2lnbiA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlBMQVlFUl9TSUdOX1gpKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxU2lnbi5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMjgwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJTaWduID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fTykpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJTaWduLlRyYW5zZm9ybS5TZXRQb3NpdGlvbigxNjQwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuX3JlbWF0Y2hCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUkVNQVRDSF9CVVRUT05fSE9WRVIpLCB7IHg6IDc4MCwgeTogNjUwIH0pO1xyXG4gICAgICAgIHRoaXMuX21lbnVCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5NRU5VX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuTUVOVV9CVVRUT05fSE9WRVIpLCB7IHg6IDExNDAsIHk6IDY1MCB9KTtcclxuICAgICAgICB0aGlzLl9yZXN0YXJ0QnV0dG9uID0gbmV3IE1WQnV0dG9uKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT04pLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OX0hPVkVSKSwgeyB4OiAyMDAsIHk6IDk2MCB9KTtcclxuICAgICAgICB0aGlzLl9yZW1hdGNoQnV0dG9uU291bmQgPSBuZXcgTVZBdWRpb0dyb3VwKFtBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5LlBMQVkpXSk7XHJcbiAgICAgICAgdGhpcy5fbWVudUJ1dHRvblNvdW5kID0gbmV3IE1WQXVkaW9Hcm91cChbQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NQUlOX01FTlUpXSk7XHJcbiAgICAgICAgdGhpcy5fcmVzdGFydEJ1dHRvblNvdW5kID0gbmV3IE1WQXVkaW9Hcm91cChbQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5SRVNUQVJUKV0pO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyU2lnbi5EcmF3KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mdWxsR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc3RhcnRCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzdGFydEJ1dHRvblNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcmVzdGFydEJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciAhPT0gR2FtZVdpbm5lci5Ob25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVJlc3VsdFRpbWVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVSZXN1bHRUaW1lciAtPSBFbmdpbmUuRGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllcjFIZWFsdGguSFAgPT09IDAgfHwgdGhpcy5fcGxheWVyMkhlYWx0aC5IUCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR2FtZUJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVtYXRjaEJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1hdGNoQnV0dG9uU291bmQuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX21lbnVCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVsbEdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVudUJ1dHRvblNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yZW1hdGNoQnV0dG9uLkRyYXcoKTtcclxuICAgICAgICAgICAgdGhpcy5fbWVudUJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlR2FtZUJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVCb2FyZC5QbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5SZXF1ZXN0VXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVCb2FyZC5SZXF1ZXN0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5Ob25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDkwMCwgOTYwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRWYWx1ZShTdHJpbmdzLkdBTUVfQUNUSVZFX1RFWFQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5QbGF5ZXJUdXJuID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0VmFsdWUoXCJQTEFZRVIgMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRDb2xvcigyNTQsIDIzNCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRWYWx1ZShcIlBMQVlFUiAyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldENvbG9yKDQ1LCAyNDIsIDIzOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuVGllKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDk2MCwgOTYwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRWYWx1ZShTdHJpbmdzLkdBTUVfVElFRF9URVhUKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldFZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyID0gdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuR0FNRV9XSU5fVEVYVCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuUGxheWVyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguTG9zZUhlYWx0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZUJvYXJkLkdhbWVXaW5uZXIgPT09IEdhbWVXaW5uZXIuUGxheWVyMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGguTG9zZUhlYWx0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyID0gdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldHVwVGV4dEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5TZXRDb2xvcig3MywgODMsIDk3KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMTAzNSwgOTYwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0Q29sb3IoMjU0LCAyMzQsIDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbigyODAsIDYwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVRleHQuU2V0Rm9udFByb3BlcnRpZXMoXCJPc3dhbGQtUmVndWxhclwiLCAzMiwgTVZUZXh0QWxpZ25tZW50LkNlbnRlciwgTVZGb250U3R5bGUuSXRhbGljKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5TZXRNYXhXaWR0aCgzMDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlNldENvbG9yKDI1NCwgMjM0LCAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMTY0MCwgNjAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuU2V0Q29sb3IoNDUsIDI0MiwgMjM5KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVkJ1dHRvbiB9IGZyb20gJy4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uJztcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IEltYWdlTG9hZGVyLCBJbWFnZUxpYnJhcnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSBcIi4uLy4uL2RhdGEvU3RyaW5nc1wiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBNVkF1ZGlvR3JvdXAgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZBdWRpb0dyb3VwXCI7XHJcbmltcG9ydCB7IEF1ZGlvTGlicmFyeSwgQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9BdWRpb0xvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuX3BsYXlCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5QTEFZX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUExBWV9CVVRUT05fSE9WRVIpLCB7IHg6IDgwMCwgeTogNjYwIH0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWRpdHNCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQ1JFRElUU19CVVRUT05fSE9WRVIpLCB7IHg6IDEyMjAsIHk6IDU3MCB9KTtcclxuICAgICAgICB0aGlzLl9leGl0QnV0dG9uID0gbmV3IE1WQnV0dG9uKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuRVhJVF9CVVRUT04pLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSKSwgeyB4OiAxMjIwLCB5OiA3MjAgfSk7XHJcbiAgICAgICAgdGhpcy5fdGFnbGluZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCkpO1xyXG4gICAgICAgIHRoaXMuX3RhZ2xpbmUuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDk2MCwgODgwKTtcclxuICAgICAgICB0aGlzLl9wbGF5QnV0dG9uU291bmQgPSBuZXcgTVZBdWRpb0dyb3VwKFtBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5LlBMQVkpXSk7XHJcbiAgICAgICAgdGhpcy5fZXhpdEJ1dHRvblNvdW5kID0gbmV3IE1WQXVkaW9Hcm91cChbQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NRU5VMSldKTtcclxuICAgIH1cclxuICAgIFBsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXlCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5HYW1lcGxheTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlCdXR0b25Tb3VuZC5QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY3JlZGl0c0J1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFN0cmluZ3MuQ1JFRElUU19VUkwsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhpdEJ1dHRvblNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9leGl0QnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oU3RyaW5ncy5FWElUX1VSTCwgXCJfc2VsZlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4aXRCdXR0b25Tb3VuZC5QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxheUJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fY3JlZGl0c0J1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fZXhpdEJ1dHRvbi5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fdGFnbGluZS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXVkaW9MaWJyYXJ5LCBBdWRpb0xvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0F1ZGlvTG9hZGVyXCI7XHJcbmltcG9ydCB7IEltYWdlTGlicmFyeSwgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9JbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBNVkJ1dHRvbiB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmltcG9ydCB7IEdhbWVMb2dvIH0gZnJvbSBcIi4uL29iamVjdHMvR2FtZUxvZ29cIjtcclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNhbFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9Ub2dnbGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5CQUNLR1JPVU5EKSk7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA1NDApO1xyXG4gICAgICAgIHRoaXMuX21vb252YWxrTG9nbyA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08pKTtcclxuICAgICAgICB0aGlzLl9tb29udmFsa0xvZ28uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDIyMCwgMTIwKTtcclxuICAgICAgICB0aGlzLl9nYW1lTG9nbyA9IG5ldyBHYW1lTG9nbyhJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkxPR09fSUNPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuTE9HT19URVhUKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU11c2ljID0gQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NVVNJQyk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU11c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnV0dG9uID0gbmV3IE1WQnV0dG9uKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuQVVESU9fQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5BVURJT19CVVRUT05fSE9WRVIpLCB7IHg6IDE4MTAsIHk6IDExMCB9KTtcclxuICAgIH1cclxuICAgIFBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUxvZ28uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX21vb252YWxrTG9nby5EcmF3KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1ZGlvQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9Ub2dnbGUgPSAhdGhpcy5fYXVkaW9Ub2dnbGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvVG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZU11c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYXVkaW9CdXR0b24uRHJhdygpO1xyXG4gICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2F1ZGlvVG9nZ2xlICYmIHRoaXMuX2dhbWVNdXNpYy5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=