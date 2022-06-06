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
AudioLibrary.MARK4 = './dist/data/audio/mark4.wav';
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
        if (!this._audioResources[this._nextAudioIndex]) {
            return;
        }
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
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            _mvEngine__WEBPACK_IMPORTED_MODULE_0__.Engine.Start();
            return;
        }
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
        return { x: this._mousePosition.x * devicePixelRatio, y: this._mousePosition.y * devicePixelRatio };
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
            _data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLoader.Get(_data_AudioLoader__WEBPACK_IMPORTED_MODULE_8__.AudioLibrary.MARK4)
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
        if (this._gameMusic) {
            this._gameMusic.loop = true;
        }
        this._audioButton = new _engine_components_mvButton__WEBPACK_IMPORTED_MODULE_2__.MVButton(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.AUDIO_BUTTON), _data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLoader.Get(_data_ImageLoader__WEBPACK_IMPORTED_MODULE_1__.ImageLibrary.AUDIO_BUTTON_HOVER), { x: 1810, y: 110 });
    }
    Play() {
        var _a, _b, _c;
        this._background.Draw();
        this._gameLogo.Draw();
        this._moonvalkLogo.Draw();
        if (this._audioButton.IsHovered(_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.MousePosition)) {
            if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.IsUserClicking) {
                this._audioToggle = !this._audioToggle;
                if (!this._audioToggle) {
                    (_a = this._gameMusic) === null || _a === void 0 ? void 0 : _a.pause();
                }
            }
        }
        this._audioButton.Draw();
        if (_engine_mvEngine__WEBPACK_IMPORTED_MODULE_4__.Engine.IsUserClicking) {
            if (this._audioToggle && ((_b = this._gameMusic) === null || _b === void 0 ? void 0 : _b.paused)) {
                (_c = this._gameMusic) === null || _c === void 0 ? void 0 : _c.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly8wLTAtMS8uL3NyYy9kYXRhL0F1ZGlvTG9hZGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2RhdGEvSW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZGF0YS9TdHJpbmdzLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZBdWRpb0dyb3VwLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9jb21wb25lbnRzL212QXVkaW9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZCdXR0b24udHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2NvbXBvbmVudHMvbXZJbWFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvY29tcG9uZW50cy9tdlRleHQudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL2VudW1zL212Rm9udFN0eWxlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9lbnVtcy9tdlJlbmRlcmFibGVUeXBlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9lbnVtcy9tdlRleHRBbGlnbm1lbnQudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL212QmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL212RW5naW5lLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2VuZ2luZS9zZXR1cC9tdkRpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZW5naW5lL3V0aWwvZXh0bWF0aC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9lbmdpbmUvdmlldy9tdlZpZXdwb3J0LnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvU2NlbmVIYW5kbGVyLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvR2FtZVRpbGVNYXJrLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvZW51bXMvR2FtZVRpbGVTdGF0ZS50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL2VudW1zL0dhbWVXaW5uZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9lbnVtcy9QYXJ0aWNsZUVmZmVjdC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvQ3Vyc29yUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL0V4cGxvc2lvbkVmZmVjdC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvR2FtZUJvYXJkLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9HYW1lTG9nby50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvR2FtZVRpbGUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9vYmplY3RzL1BhcnRpY2xlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL29iamVjdHMvUGxheWVySGVhbHRoLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvb2JqZWN0cy9TbW9rZUVmZmVjdC50cyIsIndlYnBhY2s6Ly8wLTAtMS8uL3NyYy9nYW1lL3NjZW5lcy9HYW1lcGxheVNjZW5lLnRzIiwid2VicGFjazovLzAtMC0xLy4vc3JjL2dhbWUvc2NlbmVzL01haW5NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvLi9zcmMvZ2FtZS9zY2VuZXMvVW5pdmVyc2FsU2NlbmUudHMiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMC0wLTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLzAtMC0xL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8wLTAtMS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3Vyc29yUmVuZGVyZXIgfSBmcm9tICcuL2dhbWUvb2JqZWN0cy9DdXJzb3JSZW5kZXJlcic7XHJcbmltcG9ydCB7IFNjZW5lSGFuZGxlciB9IGZyb20gJy4vZ2FtZS9TY2VuZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBJbWFnZUxvYWRlciwgSW1hZ2VMaWJyYXJ5IH0gZnJvbSAnLi9kYXRhL0ltYWdlTG9hZGVyJztcclxuaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gJy4vZW5naW5lL212QmVoYXZpb3InO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUhhbmRsZXIgfSBmcm9tICcuL2dhbWUvb2JqZWN0cy9QYXJ0aWNsZUhhbmRsZXInO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgSW1hZ2VMb2FkZXIuTG9hZEFsbCgpO1xyXG59O1xyXG5jbGFzcyBNVkVuZ2luZU1haW4gZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgc2NlbmVIYW5kbGVyID0gbmV3IFNjZW5lSGFuZGxlcigpO1xyXG4gICAgICAgIHBhcnRpY2xlSGFuZGxlciA9IG5ldyBQYXJ0aWNsZUhhbmRsZXIoKTtcclxuICAgICAgICBjdXJzb3IgPSBuZXcgQ3Vyc29yUmVuZGVyZXIoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5DVVJTT1IpKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBNYWluID0gbmV3IE1WRW5naW5lTWFpbigpO1xyXG5sZXQgc2NlbmVIYW5kbGVyO1xyXG5leHBvcnQgbGV0IHBhcnRpY2xlSGFuZGxlcjtcclxubGV0IGN1cnNvcjtcclxuIiwiaW1wb3J0IHsgTVZBdWRpb0xvYWRlciB9IGZyb20gXCIuLi9lbmdpbmUvY29tcG9uZW50cy9tdkF1ZGlvTG9hZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBBdWRpb0xpYnJhcnkge1xyXG59XHJcbkF1ZGlvTGlicmFyeS5NVVNJQyA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tdXNpYy5tcDMnO1xyXG5BdWRpb0xpYnJhcnkuRVhQTE9TSU9OMSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9leHBsb3Npb24xLndhdic7XHJcbkF1ZGlvTGlicmFyeS5FWFBMT1NJT04yID0gJy4vZGlzdC9kYXRhL2F1ZGlvL2V4cGxvc2lvbjIud2F2JztcclxuQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjMgPSAnLi9kaXN0L2RhdGEvYXVkaW8vZXhwbG9zaW9uMy53YXYnO1xyXG5BdWRpb0xpYnJhcnkuRVhQTE9TSU9ONCA9ICcuL2Rpc3QvZGF0YS9hdWRpby9leHBsb3Npb240Lndhdic7XHJcbkF1ZGlvTGlicmFyeS5FWFBMT1NJT041ID0gJy4vZGlzdC9kYXRhL2F1ZGlvL2V4cGxvc2lvbjUud2F2JztcclxuQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjYgPSAnLi9kaXN0L2RhdGEvYXVkaW8vZXhwbG9zaW9uNi53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUVOVV9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tZW51aG92ZXIud2F2JztcclxuQXVkaW9MaWJyYXJ5LkhPVkVSMSA9ICcuL2Rpc3QvZGF0YS9hdWRpby9ob3ZlcjEud2F2JztcclxuQXVkaW9MaWJyYXJ5LkhPVkVSMiA9ICcuL2Rpc3QvZGF0YS9hdWRpby9ob3ZlcjIud2F2JztcclxuQXVkaW9MaWJyYXJ5LkhPVkVSMyA9ICcuL2Rpc3QvZGF0YS9hdWRpby9ob3ZlcjMud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1BUksxID0gJy4vZGlzdC9kYXRhL2F1ZGlvL21hcmsxLndhdic7XHJcbkF1ZGlvTGlicmFyeS5NQVJLMiA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tYXJrMi53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUFSSzMgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWFyazMud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1BUks0ID0gJy4vZGlzdC9kYXRhL2F1ZGlvL21hcms0Lndhdic7XHJcbkF1ZGlvTGlicmFyeS5NQUlOX01FTlUgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWFpbm1lbnUud2F2JztcclxuQXVkaW9MaWJyYXJ5Lk1FTlUxID0gJy4vZGlzdC9kYXRhL2F1ZGlvL21lbnUxLndhdic7XHJcbkF1ZGlvTGlicmFyeS5NRU5VMiA9ICcuL2Rpc3QvZGF0YS9hdWRpby9tZW51Mi53YXYnO1xyXG5BdWRpb0xpYnJhcnkuTUVOVTMgPSAnLi9kaXN0L2RhdGEvYXVkaW8vbWVudTMud2F2JztcclxuQXVkaW9MaWJyYXJ5LlBMQVkgPSAnLi9kaXN0L2RhdGEvYXVkaW8vcGxheS53YXYnO1xyXG5BdWRpb0xpYnJhcnkuUkVTVEFSVCA9ICcuL2Rpc3QvZGF0YS9hdWRpby9yZXN0YXJ0Lndhdic7XHJcbmV4cG9ydCBjb25zdCBBdWRpb0xvYWRlciA9IG5ldyBNVkF1ZGlvTG9hZGVyKCk7XHJcbkF1ZGlvTG9hZGVyLkFkZChbXHJcbiAgICBBdWRpb0xpYnJhcnkuTVVTSUMsXHJcbiAgICBBdWRpb0xpYnJhcnkuRVhQTE9TSU9OMSxcclxuICAgIEF1ZGlvTGlicmFyeS5FWFBMT1NJT04yLFxyXG4gICAgQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjMsXHJcbiAgICBBdWRpb0xpYnJhcnkuRVhQTE9TSU9ONCxcclxuICAgIEF1ZGlvTGlicmFyeS5FWFBMT1NJT041LFxyXG4gICAgQXVkaW9MaWJyYXJ5LkVYUExPU0lPTjYsXHJcbiAgICBBdWRpb0xpYnJhcnkuTUVOVV9IT1ZFUixcclxuICAgIEF1ZGlvTGlicmFyeS5IT1ZFUjEsXHJcbiAgICBBdWRpb0xpYnJhcnkuSE9WRVIyLFxyXG4gICAgQXVkaW9MaWJyYXJ5LkhPVkVSMyxcclxuICAgIEF1ZGlvTGlicmFyeS5NQVJLMSxcclxuICAgIEF1ZGlvTGlicmFyeS5NQVJLMixcclxuICAgIEF1ZGlvTGlicmFyeS5NQVJLMyxcclxuICAgIEF1ZGlvTGlicmFyeS5NQVJLNCxcclxuICAgIEF1ZGlvTGlicmFyeS5NQUlOX01FTlUsXHJcbiAgICBBdWRpb0xpYnJhcnkuTUVOVTEsXHJcbiAgICBBdWRpb0xpYnJhcnkuTUVOVTIsXHJcbiAgICBBdWRpb0xpYnJhcnkuTUVOVTMsXHJcbiAgICBBdWRpb0xpYnJhcnkuUExBWSxcclxuICAgIEF1ZGlvTGlicmFyeS5SRVNUQVJUXHJcbl0pO1xyXG4iLCJpbXBvcnQgeyBNVkltYWdlTG9hZGVyIH0gZnJvbSBcIi4uL2VuZ2luZS9jb21wb25lbnRzL212SW1hZ2VMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEltYWdlTGlicmFyeSB7XHJcbn1cclxuSW1hZ2VMaWJyYXJ5LkJBQ0tHUk9VTkQgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0JhY2tncm91bmQucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkNVUlNPUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQ3Vyc29yLnBuZyc7XHJcbkltYWdlTGlicmFyeS5NT09OVkFMS19MT0dPID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9Nb29udmFsa19Mb2dvLnBuZyc7XHJcbkltYWdlTGlicmFyeS5MT0dPX0lDT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0xvZ29fSWNvbi5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuTE9HT19URVhUID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9Mb2dvX1RleHQucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkhFQVJUID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9IZWFydC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuSEVBUlRfRU1QVFkgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0hlYXJ0X0VtcHR5LnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX0VNUFRZID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX0VtcHR5LnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX1ggPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfWC5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9UaWxlcy9UaWxlX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9Ib3Zlcl9YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX0hPVkVSX08gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfSG92ZXJfTy5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX1ggPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL1RpbGVzL1RpbGVfV2lubmluZ19YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfTyA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGlsZXMvVGlsZV9XaW5uaW5nX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlJFU1RBUlRfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1Jlc3RhcnRCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUmVzdGFydEJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuTUVOVV9CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvTWVudUJ1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5NRU5VX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9NZW51QnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9SZW1hdGNoQnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1JlbWF0Y2hCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL1BsYXlCdXR0b25fSWRsZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUExBWV9CVVRUT05fSE9WRVIgPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvUGxheUJ1dHRvbl9Ib3Zlci5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQ1JFRElUU19CVVRUT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0J1dHRvbnMvQ3JlZGl0c0J1dHRvbl9JZGxlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9DcmVkaXRzQnV0dG9uX0hvdmVyLnBuZyc7XHJcbkltYWdlTGlicmFyeS5FWElUX0JVVFRPTiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9FeGl0QnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkVYSVRfQlVUVE9OX0hPVkVSID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0V4aXRCdXR0b25fSG92ZXIucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlRBR0xJTkVfVEVYVCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvVGFnbGluZS5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fWCA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvUGxheWVyU2lnbl9YLnBuZyc7XHJcbkltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9PID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9QbGF5ZXJTaWduX08ucG5nJztcclxuSW1hZ2VMaWJyYXJ5LlNNT0tFX1BBUlRJQ0xFID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9TbW9rZVBhcnRpY2xlLnBuZyc7XHJcbkltYWdlTGlicmFyeS5FWFBMT1NJT04gPSAnLi9kaXN0L2RhdGEvaW1hZ2VzL0V4cGxvc2lvbi5wbmcnO1xyXG5JbWFnZUxpYnJhcnkuQVVESU9fQlVUVE9OID0gJy4vZGlzdC9kYXRhL2ltYWdlcy9CdXR0b25zL0F1ZGlvQnV0dG9uX0lkbGUucG5nJztcclxuSW1hZ2VMaWJyYXJ5LkFVRElPX0JVVFRPTl9IT1ZFUiA9ICcuL2Rpc3QvZGF0YS9pbWFnZXMvQnV0dG9ucy9BdWRpb0J1dHRvbl9Ib3Zlci5wbmcnO1xyXG5leHBvcnQgY29uc3QgSW1hZ2VMb2FkZXIgPSBuZXcgTVZJbWFnZUxvYWRlcigpO1xyXG5JbWFnZUxvYWRlci5BZGQoW1xyXG4gICAgSW1hZ2VMaWJyYXJ5LkJBQ0tHUk9VTkQsXHJcbiAgICBJbWFnZUxpYnJhcnkuQ1VSU09SLFxyXG4gICAgSW1hZ2VMaWJyYXJ5Lk1PT05WQUxLX0xPR08sXHJcbiAgICBJbWFnZUxpYnJhcnkuTE9HT19JQ09OLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkxPR09fVEVYVCxcclxuICAgIEltYWdlTGlicmFyeS5IRUFSVCxcclxuICAgIEltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX0VNUFRZLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfWCxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX08sXHJcbiAgICBJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9YLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlRJTEVfSE9WRVJfTyxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfTyxcclxuICAgIEltYWdlTGlicmFyeS5USUxFX1dJTk5JTkdfWCxcclxuICAgIEltYWdlTGlicmFyeS5SRVNUQVJUX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5SRVNUQVJUX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5NRU5VX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5NRU5VX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5QTEFZX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5QTEFZX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5FWElUX0JVVFRPTixcclxuICAgIEltYWdlTGlicmFyeS5FWElUX0JVVFRPTl9IT1ZFUixcclxuICAgIEltYWdlTGlicmFyeS5UQUdMSU5FX1RFWFQsXHJcbiAgICBJbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fWCxcclxuICAgIEltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9PLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LlNNT0tFX1BBUlRJQ0xFLFxyXG4gICAgSW1hZ2VMaWJyYXJ5LkVYUExPU0lPTixcclxuICAgIEltYWdlTGlicmFyeS5BVURJT19CVVRUT04sXHJcbiAgICBJbWFnZUxpYnJhcnkuQVVESU9fQlVUVE9OX0hPVkVSXHJcbl0pO1xyXG4iLCJleHBvcnQgY2xhc3MgU3RyaW5ncyB7XHJcbn1cclxuU3RyaW5ncy5HQU1FX1dJTl9URVhUID0gXCJXSU5ORVIhXCI7XHJcblN0cmluZ3MuR0FNRV9BQ1RJVkVfVEVYVCA9IFwiWU9VUiBUVVJOLCBcIjtcclxuU3RyaW5ncy5HQU1FX1RJRURfVEVYVCA9IFwiVElFRCFcIjtcclxuU3RyaW5ncy5DUkVESVRTX1VSTCA9IFwiaHR0cHM6Ly9tb29udmFsay5jb20vY2F0ZWdvcnkvcG9ydGZvbGlvXCI7XHJcblN0cmluZ3MuRVhJVF9VUkwgPSBcImh0dHBzOi8vbW9vbnZhbGsuY29tL1wiO1xyXG4iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHhfLCB5Xywgd2lkdGhfLCBoZWlnaHRfKSB7XHJcbiAgICAgICAgdGhpcy5Qb3NpdGlvbiA9IHsgeDogeF8sIHk6IHlfIH07XHJcbiAgICAgICAgdGhpcy5TaXplID0geyB4OiB3aWR0aF8sIHk6IGhlaWdodF8gfTtcclxuICAgIH1cclxuICAgIENvbnRhaW5zKHBvaW50WF8sIHBvaW50WV8pIHtcclxuICAgICAgICByZXR1cm4gKHBvaW50WF8gPiB0aGlzLlBvc2l0aW9uLnggJiYgcG9pbnRYXyA8IHRoaXMuUG9zaXRpb24ueCArIHRoaXMuU2l6ZS54ICYmXHJcbiAgICAgICAgICAgIHBvaW50WV8gPiB0aGlzLlBvc2l0aW9uLnkgJiYgcG9pbnRZXyA8IHRoaXMuUG9zaXRpb24ueSArIHRoaXMuU2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuL1JlY3RhbmdsZSc7XHJcbmltcG9ydCB7IEV4dE1hdGggfSBmcm9tICcuLi91dGlsL2V4dG1hdGgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL212RW5naW5lJztcclxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9O1xyXG4gICAgICAgIHRoaXMuX3RhcmdldFNpemUgPSB7IHg6IDMwMCwgeTogMzAwIH07XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZSA9IHsgeDogMzAwLCB5OiAzMDAgfTtcclxuICAgICAgICB0aGlzLl9zY2FsZSA9IHsgeDogMSwgeTogMSB9O1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gMTtcclxuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICB9XHJcbiAgICBnZXQgUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNpemU7XHJcbiAgICB9XHJcbiAgICBnZXQgU2NhbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xyXG4gICAgfVxyXG4gICAgZ2V0IFJvdGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBWaWV3cG9ydFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5TaXplLnggKiBSZW5kZXJlci5SZXNvbHV0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuU2l6ZS55ICogUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgVmlld3BvcnRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLlBvc2l0aW9uLnggKiBSZW5kZXJlci5SZXNvbHV0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuUG9zaXRpb24ueSAqIFJlbmRlcmVyLlJlc29sdXRpb24ueSB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IFJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5WaWV3cG9ydFBvc2l0aW9uLnggLSAodGhpcy5WaWV3cG9ydFNpemUueCAvIDIpLCB0aGlzLlZpZXdwb3J0UG9zaXRpb24ueSAtICh0aGlzLlZpZXdwb3J0U2l6ZS55IC8gMiksIHRoaXMuVmlld3BvcnRTaXplLngsIHRoaXMuVmlld3BvcnRTaXplLnkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IEFscGhhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbHBoYTtcclxuICAgIH1cclxuICAgIFNldEZyb21JbWFnZURhdGEoaW1hZ2VfKSB7XHJcbiAgICAgICAgaWYgKCFpbWFnZV8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlNldFNpemUoaW1hZ2VfLndpZHRoLCBpbWFnZV8uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplLnggPSB0aGlzLl90YXJnZXRTaXplLng7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU2l6ZS55ID0gdGhpcy5fdGFyZ2V0U2l6ZS55O1xyXG4gICAgfVxyXG4gICAgU2V0RnJvbVRyYW5zZm9ybSh0cmFuc2Zvcm1fKSB7XHJcbiAgICAgICAgdGhpcy5TZXRTaXplKHRyYW5zZm9ybV8uU2l6ZS54LCB0cmFuc2Zvcm1fLlNpemUueSk7XHJcbiAgICAgICAgdGhpcy5TZXRTY2FsZSh0cmFuc2Zvcm1fLlNjYWxlLngsIHRyYW5zZm9ybV8uU2NhbGUueSk7XHJcbiAgICAgICAgdGhpcy5TZXRQb3NpdGlvbih0cmFuc2Zvcm1fLlBvc2l0aW9uLngsIHRyYW5zZm9ybV8uUG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5TZXRSb3RhdGlvbih0cmFuc2Zvcm1fLlJvdGF0aW9uKTtcclxuICAgIH1cclxuICAgIFNldFNjYWxlKHNjYWxlWF8sIHNjYWxlWV8pIHtcclxuICAgICAgICB0aGlzLl9zY2FsZS54ID0gc2NhbGVYXztcclxuICAgICAgICB0aGlzLl9zY2FsZS55ID0gc2NhbGVZXztcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlclNpemUoKTtcclxuICAgIH1cclxuICAgIFNldFNpemUod2lkdGhfLCBoZWlnaHRfKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2l6ZS54ID0gd2lkdGhfO1xyXG4gICAgICAgIHRoaXMuX3RhcmdldFNpemUueSA9IGhlaWdodF87XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJTaXplKCk7XHJcbiAgICB9XHJcbiAgICBTZXRQb3NpdGlvbihwb3NpdGlvblhfLCBwb3NpdGlvbllfKSB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24ueCA9IHBvc2l0aW9uWF87XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24ueSA9IHBvc2l0aW9uWV87XHJcbiAgICB9XHJcbiAgICBTZXREZXB0aChkZXB0aF8pIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi56ID0gZGVwdGhfO1xyXG4gICAgfVxyXG4gICAgU2V0Um90YXRpb24ocm90YXRpb25EZWdyZWVzXykge1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcm90YXRpb25EZWdyZWVzXyAqIEV4dE1hdGguVE9fUkFESUFOUztcclxuICAgIH1cclxuICAgIFRyYW5zbGF0ZSh0cmFuc2xhdGlvbl8pIHtcclxuICAgICAgICB0aGlzLlNldFBvc2l0aW9uKHRoaXMuUG9zaXRpb24ueCArIHRyYW5zbGF0aW9uXy54LCB0aGlzLlBvc2l0aW9uLnkgKyB0cmFuc2xhdGlvbl8ueSk7XHJcbiAgICB9XHJcbiAgICBTZXRBbHBoYShvcGFjaXR5Xykge1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gb3BhY2l0eV87XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSZW5kZXJTaXplKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclNpemUueCA9ICh0aGlzLl90YXJnZXRTaXplLnggKiB0aGlzLl9zY2FsZS54KTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTaXplLnkgPSAodGhpcy5fdGFyZ2V0U2l6ZS55ICogdGhpcy5fc2NhbGUueSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXh0TWF0aCB9IGZyb20gXCIuLi91dGlsL2V4dG1hdGhcIjtcclxuZXhwb3J0IGNsYXNzIE1WQXVkaW9Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhdWRpb1Jlc291cmNlc18pIHtcclxuICAgICAgICB0aGlzLlJhbmRvbWl6ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX25leHRBdWRpb0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLl9hdWRpb1Jlc291cmNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzID0gYXVkaW9SZXNvdXJjZXNfO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hdWRpb1Jlc291cmNlc1t0aGlzLl9uZXh0QXVkaW9JbmRleF0uY3VycmVudFRpbWUgPiAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXVkaW9SZXNvdXJjZXNbdGhpcy5fbmV4dEF1ZGlvSW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1ZGlvUmVzb3VyY2VzW3RoaXMuX25leHRBdWRpb0luZGV4XS5wbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuUmFuZG9taXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHRBdWRpb0luZGV4ID0gRXh0TWF0aC5HZXRSYW5kb21JbnQodGhpcy5fYXVkaW9SZXNvdXJjZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbmV4dEF1ZGlvSW5kZXggPSAodGhpcy5fbmV4dEF1ZGlvSW5kZXggKyAxID49IHRoaXMuX2F1ZGlvUmVzb3VyY2VzLmxlbmd0aCkgP1xyXG4gICAgICAgICAgICAwIDogdGhpcy5fbmV4dEF1ZGlvSW5kZXggKyAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgTVZBdWRpb0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9hbGxBdWRpbyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlZEF1ZGlvID0ge307XHJcbiAgICB9XHJcbiAgICBnZXQgTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hlZExvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBBZGQoYXVkaW9VUkxzXykge1xyXG4gICAgICAgIGF1ZGlvVVJMc18uZm9yRWFjaChhdWRpb1VSTCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEF1ZGlvLnB1c2goYXVkaW9VUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgTG9hZEFsbCgpIHtcclxuICAgICAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgIEVuZ2luZS5TdGFydCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcm9taXNlVG9Mb2FkQXVkaW8gPSB0aGlzLl9hbGxBdWRpby5tYXAoKGF1ZGlvVVJMKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVzb3VyY2UgPSBuZXcgQXVkaW8oYXVkaW9VUkwpO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkQXVkaW9bYXVkaW9VUkxdID0gbmV3UmVzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlVG9Mb2FkQXVkaW8pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBFbmdpbmUuU3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdldChhdWRpb1VSTF8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkQXVkaW9bYXVkaW9VUkxfXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IE1WVGV4dCB9IGZyb20gXCIuL212VGV4dFwiO1xyXG5pbXBvcnQgeyBNVlRleHRBbGlnbm1lbnQgfSBmcm9tIFwiLi4vZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmltcG9ydCB7IEF1ZGlvTGlicmFyeSwgQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9BdWRpb0xvYWRlclwiO1xyXG5pbXBvcnQgeyBNVkF1ZGlvR3JvdXAgfSBmcm9tIFwiLi9tdkF1ZGlvR3JvdXBcIjtcclxuZXhwb3J0IGNsYXNzIE1WQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkbGVJbWFnZV8sIGhvdmVySW1hZ2VfLCBwb3NpdGlvbl8sIHRleHRWYWx1ZV8pIHtcclxuICAgICAgICB0aGlzLl9ob3ZlcmVkTGFzdEZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faWRsZUltYWdlID0gaWRsZUltYWdlXztcclxuICAgICAgICB0aGlzLl9ob3ZlckltYWdlID0gaG92ZXJJbWFnZV87XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKHRoaXMuX2lkbGVJbWFnZSk7XHJcbiAgICAgICAgdGhpcy5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25fLngsIHBvc2l0aW9uXy55KTtcclxuICAgICAgICBpZiAodGV4dFZhbHVlXykge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gbmV3IE1WVGV4dCh0ZXh0VmFsdWVfKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRUZXh0QWxpZ25tZW50KE1WVGV4dEFsaWdubWVudC5DZW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlNldEZvbnRTaXplKDM2KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dC5TZXRGb250RmFtaWx5KFwiT3N3YWxkLVJlZ3VsYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uXy54LCBwb3NpdGlvbl8ueSArICh0aGlzLl90ZXh0LkZvbnRTaXplIC8gNCkpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRTaXplKDE1MCwgdGhpcy5fdGV4dC5Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHQuVHJhbnNmb3JtLlNldFJvdGF0aW9uKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ob3ZlclNvdW5kID0gbmV3IE1WQXVkaW9Hcm91cChbQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NRU5VX0hPVkVSKV0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlLlRyYW5zZm9ybTtcclxuICAgIH1cclxuICAgIElzSG92ZXJlZChtb3VzZVBvc2l0aW9uXykge1xyXG4gICAgICAgIGNvbnN0IGhvdmVyZWQgPSB0aGlzLkNvbnRhaW5zKG1vdXNlUG9zaXRpb25fKTtcclxuICAgICAgICBpZiAoaG92ZXJlZCAhPT0gdGhpcy5faG92ZXJlZExhc3RGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3ZlcmVkTGFzdEZyYW1lID0gaG92ZXJlZDtcclxuICAgICAgICAgICAgaWYgKGhvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyU291bmQuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKHRoaXMuX2hvdmVySW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKHRoaXMuX2lkbGVJbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvdmVyZWQ7XHJcbiAgICB9XHJcbiAgICBDb250YWlucyhwb2ludF8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlLlRyYW5zZm9ybS5SZWN0LkNvbnRhaW5zKHBvaW50Xy54LCBwb2ludF8ueSk7XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuRHJhdygpO1xyXG4gICAgICAgIChfYSA9IHRoaXMuX3RleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXVkaW9Mb2FkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9BdWRpb0xvYWRlclwiO1xyXG5leHBvcnQgY2xhc3MgTVZJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9hbGxJbWFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9sb2FkZWRJbWFnZXMgPSB7fTtcclxuICAgIH1cclxuICAgIGdldCBMb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaGVkTG9hZGluZztcclxuICAgIH1cclxuICAgIEFkZChpbWFnZVVSTHNfKSB7XHJcbiAgICAgICAgaW1hZ2VVUkxzXy5mb3JFYWNoKGltZ1VSTCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEltYWdlcy5wdXNoKGltZ1VSTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBMb2FkQWxsKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlVG9Mb2FkSW1hZ2VzID0gdGhpcy5fYWxsSW1hZ2VzLm1hcCgoaW1nVVJMKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIG5ld0ltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZWRJbWFnZXNbaW1nVVJMXSA9IG5ld0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWdVUkw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlVG9Mb2FkSW1hZ2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuTG9hZEFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgR2V0KGltYWdlVVJMXykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZWRJbWFnZXNbaW1hZ2VVUkxfXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vbXZFbmdpbmUnO1xyXG5pbXBvcnQgeyBNVlJlbmRlcmFibGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvbXZSZW5kZXJhYmxlVHlwZSc7XHJcbmV4cG9ydCBjbGFzcyBNVlNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUVsZW1lbnRfKSB7XHJcbiAgICAgICAgdGhpcy5SZW5kZXJUeXBlID0gTVZSZW5kZXJhYmxlVHlwZS5JbWFnZTtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IGltYWdlRWxlbWVudF87XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybS5TZXRGcm9tSW1hZ2VEYXRhKHRoaXMuX2ltYWdlKTtcclxuICAgIH1cclxuICAgIGdldCBDb250ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgICB9XHJcbiAgICBnZXQgVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIFJlbmRlcmVyLkFkZFRvUmVuZGVyUXVldWUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBTZXRJbWFnZShpbWFnZUVsZW1lbnRfKSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSBpbWFnZUVsZW1lbnRfO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WUmVuZGVyYWJsZVR5cGUgfSBmcm9tIFwiLi4vZW51bXMvbXZSZW5kZXJhYmxlVHlwZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi4vbXZFbmdpbmVcIjtcclxuaW1wb3J0IHsgTVZUZXh0QWxpZ25tZW50IH0gZnJvbSBcIi4uL2VudW1zL212VGV4dEFsaWdubWVudFwiO1xyXG5pbXBvcnQgeyBNVkZvbnRTdHlsZSB9IGZyb20gXCIuLi9lbnVtcy9tdkZvbnRTdHlsZVwiO1xyXG5leHBvcnQgY2xhc3MgTVZUZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHRWYWx1ZV8pIHtcclxuICAgICAgICB0aGlzLlJlbmRlclR5cGUgPSBNVlJlbmRlcmFibGVUeXBlLlRleHQ7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBcInJnYmEoMCwgMCwgMCwgXCI7XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gMjA7XHJcbiAgICAgICAgdGhpcy5fZm9udEZhbWlseSA9IFwiQXJpYWxcIjtcclxuICAgICAgICB0aGlzLl9mb250U3R5bGUgPSBNVkZvbnRTdHlsZS5SZWd1bGFyO1xyXG4gICAgICAgIHRoaXMuX2FsaWdubWVudCA9IE1WVGV4dEFsaWdubWVudC5MZWZ0O1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuICAgICAgICB0aGlzLl90ZXh0VmFsdWUgPSB0ZXh0VmFsdWVfO1xyXG4gICAgfVxyXG4gICAgZ2V0IENvbnRlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICBnZXQgQ29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yICsgdGhpcy5fYWxwaGEgKyBcIilcIjtcclxuICAgIH1cclxuICAgIGdldCBGb250U3R5bGUoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9mb250U3R5bGUpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSBNVkZvbnRTdHlsZS5SZWd1bGFyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGNhc2UgTVZGb250U3R5bGUuSXRhbGljOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaXRhbGljIFwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WRm9udFN0eWxlLkJvbGQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJib2xkIFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBGb250U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm9udFNpemU7XHJcbiAgICB9XHJcbiAgICBnZXQgRm9udCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuRm9udFN0eWxlICtcclxuICAgICAgICAgICAgdGhpcy5fZm9udFNpemUgKiBSZW5kZXJlci5SZXNvbHV0aW9uLngpICtcclxuICAgICAgICAgICAgJ3B4ICcgKyB0aGlzLl9mb250RmFtaWx5O1xyXG4gICAgfVxyXG4gICAgZ2V0IEFsaWdubWVudCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWdubWVudCkge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlIE1WVGV4dEFsaWdubWVudC5MZWZ0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgICAgICAgICBjYXNlIE1WVGV4dEFsaWdubWVudC5SaWdodDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIGNhc2UgTVZUZXh0QWxpZ25tZW50LkNlbnRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIERyYXcoKSB7XHJcbiAgICAgICAgUmVuZGVyZXIuQWRkVG9SZW5kZXJRdWV1ZSh0aGlzKTtcclxuICAgIH1cclxuICAgIFNldENvbG9yKHJlZF8sIGdyZWVuXywgYmx1ZV8pIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IFwicmdiYShcIiArIHJlZF8gKyBcIiwgXCIgKyBncmVlbl8gKyBcIiwgXCIgKyBibHVlXyArIFwiLCBcIjtcclxuICAgIH1cclxuICAgIFNldEFscGhhKGFscGhhXykge1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gYWxwaGFfO1xyXG4gICAgfVxyXG4gICAgU2V0Rm9udFNpemUoc2l6ZV8pIHtcclxuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHNpemVfO1xyXG4gICAgfVxyXG4gICAgU2V0Rm9udFN0eWxlKG12Rm9udFN0eWxlXykge1xyXG4gICAgICAgIHRoaXMuX2ZvbnRTdHlsZSA9IG12Rm9udFN0eWxlXztcclxuICAgIH1cclxuICAgIFNldEZvbnRGYW1pbHkoZm9udE5hbWVfKSB7XHJcbiAgICAgICAgdGhpcy5fZm9udEZhbWlseSA9IGZvbnROYW1lXztcclxuICAgIH1cclxuICAgIFNldE1heFdpZHRoKG1heFdpZHRoXykge1xyXG4gICAgICAgIHRoaXMuVHJhbnNmb3JtLlNldFNpemUobWF4V2lkdGhfLCB0aGlzLlRyYW5zZm9ybS5TaXplLnkpO1xyXG4gICAgfVxyXG4gICAgU2V0VGV4dEFsaWdubWVudChhbGlnbm1lbnRfKSB7XHJcbiAgICAgICAgdGhpcy5fYWxpZ25tZW50ID0gYWxpZ25tZW50XztcclxuICAgIH1cclxuICAgIFNldFZhbHVlKHZhbHVlXykge1xyXG4gICAgICAgIHRoaXMuX3RleHRWYWx1ZSA9IHZhbHVlXztcclxuICAgIH1cclxuICAgIFNldEZvbnRQcm9wZXJ0aWVzKGZvbnRGYW1pbHlfLCBmb250U2l6ZV8sIHRleHRBbGlnbm1lbnRfLCBmb250U3R5bGVfKSB7XHJcbiAgICAgICAgdGhpcy5TZXRGb250RmFtaWx5KGZvbnRGYW1pbHlfKTtcclxuICAgICAgICB0aGlzLlNldEZvbnRTaXplKGZvbnRTaXplXyk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0QWxpZ25tZW50KHRleHRBbGlnbm1lbnRfKTtcclxuICAgICAgICB0aGlzLlNldEZvbnRTdHlsZShmb250U3R5bGVfKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIE1WRm9udFN0eWxlO1xyXG4oZnVuY3Rpb24gKE1WRm9udFN0eWxlKSB7XHJcbiAgICBNVkZvbnRTdHlsZVtNVkZvbnRTdHlsZVtcIlJlZ3VsYXJcIl0gPSAwXSA9IFwiUmVndWxhclwiO1xyXG4gICAgTVZGb250U3R5bGVbTVZGb250U3R5bGVbXCJJdGFsaWNcIl0gPSAxXSA9IFwiSXRhbGljXCI7XHJcbiAgICBNVkZvbnRTdHlsZVtNVkZvbnRTdHlsZVtcIkJvbGRcIl0gPSAyXSA9IFwiQm9sZFwiO1xyXG59KShNVkZvbnRTdHlsZSB8fCAoTVZGb250U3R5bGUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIE1WUmVuZGVyYWJsZVR5cGU7XHJcbihmdW5jdGlvbiAoTVZSZW5kZXJhYmxlVHlwZSkge1xyXG4gICAgTVZSZW5kZXJhYmxlVHlwZVtNVlJlbmRlcmFibGVUeXBlW1wiSW1hZ2VcIl0gPSAwXSA9IFwiSW1hZ2VcIjtcclxuICAgIE1WUmVuZGVyYWJsZVR5cGVbTVZSZW5kZXJhYmxlVHlwZVtcIlRleHRcIl0gPSAxXSA9IFwiVGV4dFwiO1xyXG59KShNVlJlbmRlcmFibGVUeXBlIHx8IChNVlJlbmRlcmFibGVUeXBlID0ge30pKTtcclxuIiwiZXhwb3J0IHZhciBNVlRleHRBbGlnbm1lbnQ7XHJcbihmdW5jdGlvbiAoTVZUZXh0QWxpZ25tZW50KSB7XHJcbiAgICBNVlRleHRBbGlnbm1lbnRbTVZUZXh0QWxpZ25tZW50W1wiTGVmdFwiXSA9IDBdID0gXCJMZWZ0XCI7XHJcbiAgICBNVlRleHRBbGlnbm1lbnRbTVZUZXh0QWxpZ25tZW50W1wiUmlnaHRcIl0gPSAxXSA9IFwiUmlnaHRcIjtcclxuICAgIE1WVGV4dEFsaWdubWVudFtNVlRleHRBbGlnbm1lbnRbXCJDZW50ZXJcIl0gPSAyXSA9IFwiQ2VudGVyXCI7XHJcbn0pKE1WVGV4dEFsaWdubWVudCB8fCAoTVZUZXh0QWxpZ25tZW50ID0ge30pKTtcclxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4vbXZFbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIE1WQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5PbkVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgT25FbmFibGUoKSB7XHJcbiAgICAgICAgRW5naW5lLkVucXVldWVSdW50aW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgfVxyXG4gICAgT25EaXNhYmxlKCkge1xyXG4gICAgICAgIEVuZ2luZS5EZXF1ZXVlUnVudGltZU9iamVjdCh0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlZpZXdwb3J0IH0gZnJvbSBcIi4vdmlldy9tdlZpZXdwb3J0XCI7XHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9zZXR1cC9tdkRpc3BsYXlcIjtcclxuZXhwb3J0IGNvbnN0IFJlbmRlcmVyID0gbmV3IE1WVmlld3BvcnQoJyNnYW1lQ2FudmFzJyk7XHJcbmV4cG9ydCBjbGFzcyBNVkVuZ2luZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ydW50aW1lUXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgdGhpcy5faXNVc2VyQ2xpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc0VuZ2luZVJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICBSZW5kZXJlci5VcGRhdGVDYW52YXNTaXplKCk7XHJcbiAgICAgICAgUmVuZGVyZXIuQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gUmVuZGVyZXIuQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uLnggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uLnkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIuQ2FudmFzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzVXNlckNsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVzdGFtcCA9IDA7XHJcbiAgICB9XHJcbiAgICBnZXQgTW91c2VQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLl9tb3VzZVBvc2l0aW9uLnggKiBkZXZpY2VQaXhlbFJhdGlvLCB5OiB0aGlzLl9tb3VzZVBvc2l0aW9uLnkgKiBkZXZpY2VQaXhlbFJhdGlvIH07XHJcbiAgICB9XHJcbiAgICBnZXQgVmlld3BvcnRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuX21vdXNlUG9zaXRpb24ueCAvIFJlbmRlcmVyLlJlc29sdXRpb24ueCwgeTogdGhpcy5fbW91c2VQb3NpdGlvbi55IC8gUmVuZGVyZXIuUmVzb2x1dGlvbi55IH07XHJcbiAgICB9XHJcbiAgICBnZXQgSXNVc2VyQ2xpY2tpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVXNlckNsaWNraW5nO1xyXG4gICAgfVxyXG4gICAgZ2V0IElzUnVubmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNFbmdpbmVSdW5uaW5nO1xyXG4gICAgfVxyXG4gICAgZ2V0IERlbHRhVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gICAgfVxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNFbmdpbmVSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5HYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIEdhbWVMb29wKHRpbWVzdGFtcF8pIHtcclxuICAgICAgICB0aGlzLl9kZWx0YVRpbWUgPSAodGltZXN0YW1wXyAtIHRoaXMuX2xhc3RUaW1lc3RhbXApIC8gRGlzcGxheS5QRVJGRUNUX0ZSQU1FX1RJTUU7XHJcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcF87XHJcbiAgICAgICAgUmVuZGVyZXIuVXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC5VcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZW5kZXJlci5SZW5kZXJUb0NhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuX2lzVXNlckNsaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuR2FtZUxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBFbnF1ZXVlUnVudGltZU9iamVjdChtdkJlaGF2aW9yT2JqZWN0Xykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja1F1ZXVlRm9ySXRlbShtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVRdWV1ZS5wdXNoKG12QmVoYXZpb3JPYmplY3RfKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEZXF1ZXVlUnVudGltZU9iamVjdChtdkJlaGF2aW9yT2JqZWN0Xykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja1F1ZXVlRm9ySXRlbShtdkJlaGF2aW9yT2JqZWN0Xyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVudGltZVF1ZXVlLnNwbGljZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tRdWV1ZUZvckl0ZW0obXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcnVudGltZVF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcnVudGltZVF1ZXVlW2luZGV4XSA9PT0gbXZCZWhhdmlvck9iamVjdF8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IEVuZ2luZSA9IG5ldyBNVkVuZ2luZSgpO1xyXG4iLCJleHBvcnQgY2xhc3MgRGlzcGxheSB7XHJcbn1cclxuRGlzcGxheS5ERUZBVUxUX1JFU09MVVRJT04gPSB7IHg6IDE5MjAsIHk6IDEwODAgfTtcclxuRGlzcGxheS5QRVJGRUNUX0ZSQU1FX1RJTUUgPSAoMTAwMCAvIDYwKTtcclxuIiwiZXhwb3J0IGNsYXNzIEV4dE1hdGgge1xyXG4gICAgc3RhdGljIEdldFJhbmRvbUludChtYXhpbXVtVmFsdWVfKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heGltdW1WYWx1ZV8pO1xyXG4gICAgfVxyXG59XHJcbkV4dE1hdGguVE9fUkFESUFOUyA9IE1hdGguUEkgLyAxODA7XHJcbiIsImltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9zZXR1cC9tdkRpc3BsYXknO1xyXG5pbXBvcnQgeyBNVlJlbmRlcmFibGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvbXZSZW5kZXJhYmxlVHlwZSc7XHJcbmV4cG9ydCBjbGFzcyBNVlZpZXdwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc05hbWVfKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9IHsgeDogMSwgeTogMSB9O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzTmFtZV8pO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgZ2V0IFJlc29sdXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdXRpb247XHJcbiAgICB9XHJcbiAgICBVcGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgICAgIHRoaXMuQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICB0aGlzLkNhbnZhcy5oZWlnaHQgPSAodGhpcy5DYW52YXMud2lkdGggLyAxNikgKiA5O1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24ueCA9IHRoaXMuQ2FudmFzLndpZHRoIC8gRGlzcGxheS5ERUZBVUxUX1JFU09MVVRJT04ueDtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnkgPSB0aGlzLl9yZXNvbHV0aW9uLng7XHJcbiAgICB9XHJcbiAgICBBZGRUb1JlbmRlclF1ZXVlKG9iamVjdF8pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0LnB1c2gob2JqZWN0Xyk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJUb0NhbnZhcygpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkNhbnZhcy53aWR0aCwgdGhpcy5DYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcmVuZGVyTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5SZW5kZXJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1WUmVuZGVyYWJsZVR5cGUuSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXJJbWFnZSh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5Db250ZW50cywgdGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTVZSZW5kZXJhYmxlVHlwZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVyVGV4dCh0aGlzLl9yZW5kZXJMaXN0W2luZGV4XS5Db250ZW50cywgdGhpcy5fcmVuZGVyTGlzdFtpbmRleF0uVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW5kZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDdXJzb3IoKTtcclxuICAgIH1cclxuICAgIFJlbmRlckltYWdlKGltYWdlXywgdHJhbnNmb3JtXykge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRyYW5zZm9ybV8uUG9zaXRpb24ueCAqIHRoaXMuX3Jlc29sdXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55ICogdGhpcy5fcmVzb2x1dGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0cmFuc2Zvcm1fLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gdHJhbnNmb3JtXy5BbHBoYTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShpbWFnZV8sIC0odHJhbnNmb3JtXy5TaXplLnggLyAyKSAqIHRoaXMuX3Jlc29sdXRpb24ueCwgLSh0cmFuc2Zvcm1fLlNpemUueSAvIDIpICogdGhpcy5fcmVzb2x1dGlvbi55LCAodHJhbnNmb3JtXy5TaXplLnggKiB0aGlzLl9yZXNvbHV0aW9uLngpLCAodHJhbnNmb3JtXy5TaXplLnkgKiB0aGlzLl9yZXNvbHV0aW9uLnkpKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFJlbmRlclRleHQodGV4dF8sIHRyYW5zZm9ybV8pIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHRleHRfLkNvbG9yO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRyYW5zZm9ybV8uUG9zaXRpb24ueCAqIHRoaXMuX3Jlc29sdXRpb24ueCwgdHJhbnNmb3JtXy5Qb3NpdGlvbi55ICogdGhpcy5fcmVzb2x1dGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0cmFuc2Zvcm1fLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmZvbnQgPSB0ZXh0Xy5Gb250O1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudGV4dEFsaWduID0gdGV4dF8uQWxpZ25tZW50O1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFRleHQodGV4dF8uVmFsdWUsIDAsIDAsIHRyYW5zZm9ybV8uU2l6ZS54ICogdGhpcy5fcmVzb2x1dGlvbi54KTtcclxuICAgIH1cclxuICAgIFNldEN1cnNvcihjdXJzb3JTcHJpdGVfKSB7XHJcbiAgICAgICAgdGhpcy5fY3Vyc29yU3ByaXRlID0gY3Vyc29yU3ByaXRlXztcclxuICAgIH1cclxuICAgIHJlbmRlckN1cnNvcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1cnNvclNwcml0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKHRoaXMuX2N1cnNvclNwcml0ZS5UcmFuc2Zvcm0uUG9zaXRpb24ueCwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5Qb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZSh0aGlzLl9jdXJzb3JTcHJpdGUuQ29udGVudHMsIC0odGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnggLyAyKSwgLSh0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlNpemUueSAvIDIpLCB0aGlzLl9jdXJzb3JTcHJpdGUuVHJhbnNmb3JtLlNpemUueCwgdGhpcy5fY3Vyc29yU3ByaXRlLlRyYW5zZm9ybS5TaXplLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WQmVoYXZpb3IgfSBmcm9tIFwiLi4vZW5naW5lL212QmVoYXZpb3JcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9NYWluTWVudVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVwbGF5U2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvR2FtZXBsYXlTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9lbnVtcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2FsU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvVW5pdmVyc2FsU2NlbmVcIjtcclxuZXhwb3J0IGNsYXNzIFNjZW5lSGFuZGxlciBleHRlbmRzIE1WQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuTWFpbk1lbnU7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzID0gbmV3IEFycmF5KEdhbWVTdGF0ZS5Ub3RhbCk7XHJcbiAgICAgICAgdGhpcy5fdW5pdmVyc2FsU2NlbmUgPSBuZXcgVW5pdmVyc2FsU2NlbmUoKTtcclxuICAgICAgICB0aGlzLl9zY2VuZXNbR2FtZVN0YXRlLk1haW5NZW51XSA9IG5ldyBNYWluTWVudVNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzW0dhbWVTdGF0ZS5HYW1lcGxheV0gPSBuZXcgR2FtZXBsYXlTY2VuZSgpO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3VuaXZlcnNhbFNjZW5lLlBsYXkoKTtcclxuICAgICAgICB0aGlzLl9zY2VuZXNbdGhpcy5fZ2FtZVN0YXRlXS5QbGF5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IHRoaXMuX3NjZW5lc1t0aGlzLl9nYW1lU3RhdGVdLlJlcXVlc3RTY2VuZTtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVzW3RoaXMuX2dhbWVTdGF0ZV0uUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgR2FtZVN0YXRlO1xyXG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xyXG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIk1haW5NZW51XCJdID0gMF0gPSBcIk1haW5NZW51XCI7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiR2FtZXBsYXlcIl0gPSAxXSA9IFwiR2FtZXBsYXlcIjtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJUb3RhbFwiXSA9IDJdID0gXCJUb3RhbFwiO1xyXG59KShHYW1lU3RhdGUgfHwgKEdhbWVTdGF0ZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVRpbGVNYXJrO1xyXG4oZnVuY3Rpb24gKEdhbWVUaWxlTWFyaykge1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIlhcIl0gPSAxXSA9IFwiWFwiO1xyXG4gICAgR2FtZVRpbGVNYXJrW0dhbWVUaWxlTWFya1tcIk9cIl0gPSAyXSA9IFwiT1wiO1xyXG59KShHYW1lVGlsZU1hcmsgfHwgKEdhbWVUaWxlTWFyayA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVRpbGVTdGF0ZTtcclxuKGZ1bmN0aW9uIChHYW1lVGlsZVN0YXRlKSB7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJFbXB0eVwiXSA9IDBdID0gXCJFbXB0eVwiO1xyXG4gICAgR2FtZVRpbGVTdGF0ZVtHYW1lVGlsZVN0YXRlW1wiSG92ZXJlZFwiXSA9IDFdID0gXCJIb3ZlcmVkXCI7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJNYXJrZWRcIl0gPSAyXSA9IFwiTWFya2VkXCI7XHJcbiAgICBHYW1lVGlsZVN0YXRlW0dhbWVUaWxlU3RhdGVbXCJXaW5uaW5nXCJdID0gM10gPSBcIldpbm5pbmdcIjtcclxufSkoR2FtZVRpbGVTdGF0ZSB8fCAoR2FtZVRpbGVTdGF0ZSA9IHt9KSk7XHJcbiIsImV4cG9ydCB2YXIgR2FtZVdpbm5lcjtcclxuKGZ1bmN0aW9uIChHYW1lV2lubmVyKSB7XHJcbiAgICBHYW1lV2lubmVyW0dhbWVXaW5uZXJbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlRpZVwiXSA9IDFdID0gXCJUaWVcIjtcclxuICAgIEdhbWVXaW5uZXJbR2FtZVdpbm5lcltcIlBsYXllcjFcIl0gPSAyXSA9IFwiUGxheWVyMVwiO1xyXG4gICAgR2FtZVdpbm5lcltHYW1lV2lubmVyW1wiUGxheWVyMlwiXSA9IDNdID0gXCJQbGF5ZXIyXCI7XHJcbn0pKEdhbWVXaW5uZXIgfHwgKEdhbWVXaW5uZXIgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIFBhcnRpY2xlRWZmZWN0O1xyXG4oZnVuY3Rpb24gKFBhcnRpY2xlRWZmZWN0KSB7XHJcbiAgICBQYXJ0aWNsZUVmZmVjdFtQYXJ0aWNsZUVmZmVjdFtcIlNtb2tlXCJdID0gMF0gPSBcIlNtb2tlXCI7XHJcbiAgICBQYXJ0aWNsZUVmZmVjdFtQYXJ0aWNsZUVmZmVjdFtcIkV4cGxvc2lvblwiXSA9IDFdID0gXCJFeHBsb3Npb25cIjtcclxufSkoUGFydGljbGVFZmZlY3QgfHwgKFBhcnRpY2xlRWZmZWN0ID0ge30pKTtcclxuIiwiaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZCZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBFbmdpbmUsIFJlbmRlcmVyIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgQ3Vyc29yUmVuZGVyZXIgZXh0ZW5kcyBNVkJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlXykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IE1WU3ByaXRlKGltYWdlXyk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihFbmdpbmUuTW91c2VQb3NpdGlvbi54LCBFbmdpbmUuTW91c2VQb3NpdGlvbi55KTtcclxuICAgICAgICBSZW5kZXJlci5TZXRDdXJzb3IodGhpcy5fc3ByaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbWFnZUxpYnJhcnksIEltYWdlTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuaW1wb3J0IHsgTVZTcHJpdGUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZTcHJpdGVcIjtcclxuaW1wb3J0IHsgRXh0TWF0aCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvdXRpbC9leHRtYXRoXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlRWZmZWN0IH0gZnJvbSBcIi4uL2VudW1zL1BhcnRpY2xlRWZmZWN0XCI7XHJcbmV4cG9ydCBjbGFzcyBFeHBsb3Npb25FZmZlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5QYXJ0aWNsZVR5cGUgPSBQYXJ0aWNsZUVmZmVjdC5FeHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVDb3VudCA9IDE7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkVYUExPU0lPTikpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXMucHVzaChuZXdQYXJ0aWNsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGxheShwb3NpdGlvbl8pIHtcclxuICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvbl8ueCwgcG9zaXRpb25fLnkpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TY2FsZSA9IChNYXRoLnJhbmRvbSgpICogMC4yKSArIDAuMztcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUocmFuZG9tU2NhbGUsIHJhbmRvbVNjYWxlKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUm90YXRpb24gPSAoRXh0TWF0aC5HZXRSYW5kb21JbnQoMzYwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFJvdGF0aW9uKHJhbmRvbVJvdGF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0QWxwaGEoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9wYXJ0aWNsZXNbaW5kZXhdLlRyYW5zZm9ybS5TY2FsZS54O1xyXG4gICAgICAgICAgICBpZiAoc2NhbGUgPCAxLjMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gc2NhbGUgKyAwLjA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUobmV3U2NhbGUsIG5ld1NjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldEFscGhhKDEgLSAoc2NhbGUgLSAwLjcpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlIH0gZnJvbSBcIi4vR2FtZVRpbGVcIjtcclxuaW1wb3J0IHsgR2FtZVRpbGVTdGF0ZSB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVUaWxlTWFyayB9IGZyb20gXCIuLi9lbnVtcy9HYW1lVGlsZU1hcmtcIjtcclxuaW1wb3J0IHsgR2FtZVdpbm5lciB9IGZyb20gXCIuLi9lbnVtcy9HYW1lV2lubmVyXCI7XHJcbmltcG9ydCB7IHBhcnRpY2xlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9hcHBcIjtcclxuaW1wb3J0IHsgUGFydGljbGVFZmZlY3QgfSBmcm9tIFwiLi4vZW51bXMvUGFydGljbGVFZmZlY3RcIjtcclxuaW1wb3J0IHsgTVZBdWRpb0dyb3VwIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QXVkaW9Hcm91cFwiO1xyXG5pbXBvcnQgeyBBdWRpb0xpYnJhcnksIEF1ZGlvTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvQXVkaW9Mb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcXVlc3RVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuID0gMDtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVUaWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSBHYW1lV2lubmVyLk5vbmU7XHJcbiAgICAgICAgdGhpcy5fbGFzdFdpbm5pbmdDb21iaW5hdGlvbiA9IFszXTtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0RHVyYXRpb24gPSAxMDtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fd2lubmluZ0NvbmRpdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IEdhbWVUaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiA4MjAgKyAoMTQwICogaSksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNTEwICsgKDE0MCAqIGopXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVUaWxlcy5wdXNoKG5ld1RpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuUmVzZXQoKTtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25Tb3VuZHMgPSBuZXcgTVZBdWRpb0dyb3VwKFtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04xKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04yKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT04zKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT040KSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT041KSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5FWFBMT1NJT042KVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuX2V4cGxvc2lvblNvdW5kcy5SYW5kb21pemUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hcmtpbmdTb3VuZHMgPSBuZXcgTVZBdWRpb0dyb3VwKFtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NQVJLMSksXHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuTUFSSzIpLFxyXG4gICAgICAgICAgICBBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5Lk1BUkszKSxcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5NQVJLNClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGdldCBQbGF5ZXJUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJUdXJuO1xyXG4gICAgfVxyXG4gICAgZ2V0IEdhbWVXaW5uZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVXaW5uZXI7XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lT3ZlciAmJiB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA8PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9leHBsb3Npb25FZmZlY3RUaW1lciA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cGxvc2lvbkVmZmVjdFRpbWVyIC09IEVuZ2luZS5EZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dhbWVUaWxlc1t0aGlzLl9sYXN0V2lubmluZ0NvbWJpbmF0aW9uW3RoaXMuX2V4cGxvc2lvbkVmZmVjdEluZGV4XV0uVHJhbnNmb3JtLlBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVIYW5kbGVyLlBsYXkoUGFydGljbGVFZmZlY3QuRXhwbG9zaW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUhhbmRsZXIuUGxheShQYXJ0aWNsZUVmZmVjdC5TbW9rZSwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwbG9zaW9uU291bmRzLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cGxvc2lvbkVmZmVjdFRpbWVyID0gdGhpcy5fZXhwbG9zaW9uRWZmZWN0RHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGVja0dhbWVPdXRjb21lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZ2FtZU92ZXIgJiYgdGlsZS5TdGF0ZSAhPT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aWxlLkNoZWNrKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSAodGhpcy5fcGxheWVyVHVybiA9PT0gMCkgPyBHYW1lVGlsZU1hcmsuWCA6IEdhbWVUaWxlTWFyay5PO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5TZXQoR2FtZVRpbGVTdGF0ZS5NYXJrZWQsIG1hcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuID0gKHRoaXMuX3BsYXllclR1cm4gPT09IDApID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVxdWVzdFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrR2FtZU91dGNvbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZUhhbmRsZXIuUGxheShQYXJ0aWNsZUVmZmVjdC5TbW9rZSwgdGlsZS5UcmFuc2Zvcm0uUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXJraW5nU291bmRzLlBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuSG92ZXJlZCwgbWFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5TZXQoR2FtZVRpbGVTdGF0ZS5FbXB0eSwgR2FtZVRpbGVNYXJrLk5vbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuRHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tHYW1lT3V0Y29tZSAmJiAhdGhpcy5fZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lR2FtZU91dGNvbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIHRpbGUuU2V0KEdhbWVUaWxlU3RhdGUuRW1wdHksIEdhbWVUaWxlTWFyay5Ob25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSBHYW1lV2lubmVyLk5vbmU7XHJcbiAgICAgICAgdGhpcy5SZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXhwbG9zaW9uRWZmZWN0VGltZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lR2FtZU91dGNvbWUoKSB7XHJcbiAgICAgICAgbGV0IHJvdW5kV29uID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSA3OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHRoaXMuX3dpbm5pbmdDb25kaXRpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuX2dhbWVUaWxlc1t3aW5Db25kaXRpb25bMF1dO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdGhpcy5fZ2FtZVRpbGVzW3dpbkNvbmRpdGlvblsxXV07XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLl9nYW1lVGlsZXNbd2luQ29uZGl0aW9uWzJdXTtcclxuICAgICAgICAgICAgaWYgKGEuU3RhdGUgIT09IEdhbWVUaWxlU3RhdGUuTWFya2VkICYmIGIuU3RhdGUgIT09IEdhbWVUaWxlU3RhdGUuTWFya2VkICYmXHJcbiAgICAgICAgICAgICAgICBjLlN0YXRlICE9PSBHYW1lVGlsZVN0YXRlLk1hcmtlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEuTWFya2luZyA9PT0gYi5NYXJraW5nICYmIGIuTWFya2luZyA9PT0gYy5NYXJraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByb3VuZFdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhLlNldChHYW1lVGlsZVN0YXRlLldpbm5pbmcsIGEuTWFya2luZyk7XHJcbiAgICAgICAgICAgICAgICBiLlNldChHYW1lVGlsZVN0YXRlLldpbm5pbmcsIGIuTWFya2luZyk7XHJcbiAgICAgICAgICAgICAgICBjLlNldChHYW1lVGlsZVN0YXRlLldpbm5pbmcsIGMuTWFya2luZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lV2lubmVyID0gKGEuTWFya2luZyA9PT0gR2FtZVRpbGVNYXJrLk8pID9cclxuICAgICAgICAgICAgICAgICAgICBHYW1lV2lubmVyLlBsYXllcjIgOiBHYW1lV2lubmVyLlBsYXllcjE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0V2lubmluZ0NvbWJpbmF0aW9uWzBdID0gd2luQ29uZGl0aW9uWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFdpbm5pbmdDb21iaW5hdGlvblsxXSA9IHdpbkNvbmRpdGlvblsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RXaW5uaW5nQ29tYmluYXRpb25bMl0gPSB3aW5Db25kaXRpb25bMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBsb3Npb25FZmZlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdW5kV29uKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxUaWxlc01hcmtlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9nYW1lVGlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVRpbGVzW2luZGV4XS5TdGF0ZSA9PT0gR2FtZVRpbGVTdGF0ZS5NYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsbFRpbGVzTWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWxsVGlsZXNNYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVXaW5uZXIgPSBHYW1lV2lubmVyLlRpZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cGxvc2lvbkVmZmVjdEluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm91bmRXb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlJlcXVlc3RVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lTG9nbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uSW1hZ2VfLCB0ZXh0SW1hZ2VfKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5faWNvbiA9IG5ldyBNVlNwcml0ZShpY29uSW1hZ2VfKTtcclxuICAgICAgICB0aGlzLl9pY29uLlRyYW5zZm9ybS5TZXRQb3NpdGlvbigxMTYwLCAyNjApO1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSBuZXcgTVZTcHJpdGUodGV4dEltYWdlXyk7XHJcbiAgICAgICAgdGhpcy5fdGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCAyNjApO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGhpcy5fYW5pbWF0ZSkgKiAxNTtcclxuICAgICAgICB0aGlzLl9pY29uLlRyYW5zZm9ybS5TZXRSb3RhdGlvbih3YXZlKTtcclxuICAgICAgICBjb25zdCBwdWxzZSA9IE1hdGguc2luKHRoaXMuX2FuaW1hdGUgKiAxLjMpICogMC4xO1xyXG4gICAgICAgIHRoaXMuX2ljb24uVHJhbnNmb3JtLlNldFNjYWxlKDEgKyBwdWxzZSwgMSArIHB1bHNlKTtcclxuICAgICAgICB0aGlzLl90ZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbih0aGlzLl90ZXh0LlRyYW5zZm9ybS5Qb3NpdGlvbi54LCAyNjAgKyB3YXZlKTtcclxuICAgICAgICB0aGlzLl9pY29uLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl90ZXh0LkRyYXcoKTtcclxuICAgIH1cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9ICh0aGlzLl9hbmltYXRlID4gMTAwMDAwKSA/XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGUgLSAxMDAwMDAgOiB0aGlzLl9hbmltYXRlICsgKEVuZ2luZS5EZWx0YVRpbWUgKiAwLjAzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlNwcml0ZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdlNwcml0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lVGlsZVN0YXRlIH0gZnJvbSBcIi4uL2VudW1zL0dhbWVUaWxlU3RhdGVcIjtcclxuaW1wb3J0IHsgR2FtZVRpbGVNYXJrIH0gZnJvbSBcIi4uL2VudW1zL0dhbWVUaWxlTWFya1wiO1xyXG5pbXBvcnQgeyBJbWFnZUxpYnJhcnksIEltYWdlTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvSW1hZ2VMb2FkZXJcIjtcclxuaW1wb3J0IHsgQXVkaW9MaWJyYXJ5LCBBdWRpb0xvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0F1ZGlvTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1WQXVkaW9Hcm91cCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdkF1ZGlvR3JvdXBcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWVUaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uXykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gR2FtZVRpbGVTdGF0ZS5FbXB0eTtcclxuICAgICAgICB0aGlzLl9tYXJrZWRBcyA9IEdhbWVUaWxlTWFyay5Ob25lO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfRU1QVFkpKTtcclxuICAgICAgICB0aGlzLlRyYW5zZm9ybS5TZXRQb3NpdGlvbihwb3NpdGlvbl8ueCwgcG9zaXRpb25fLnkpO1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQXVkaW8gPSBuZXcgTVZBdWRpb0dyb3VwKFtcclxuICAgICAgICAgICAgQXVkaW9Mb2FkZXIuR2V0KEF1ZGlvTGlicmFyeS5IT1ZFUjEpLFxyXG4gICAgICAgICAgICBBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5LkhPVkVSMiksXHJcbiAgICAgICAgICAgIEF1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuSE9WRVIzKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlLlRyYW5zZm9ybTtcclxuICAgIH1cclxuICAgIGdldCBTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgTWFya2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VkQXM7XHJcbiAgICB9XHJcbiAgICBDaGVjayhtb3VzZVBvc2l0aW9uXykge1xyXG4gICAgICAgIGlmICh0aGlzLlRyYW5zZm9ybS5SZWN0LkNvbnRhaW5zKG1vdXNlUG9zaXRpb25fLngsIG1vdXNlUG9zaXRpb25fLnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBTZXQoc3RhdGVfLCBtYXJraW5nXykge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBzdGF0ZV8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlXztcclxuICAgICAgICB0aGlzLl9tYXJrZWRBcyA9IG1hcmtpbmdfO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLkVtcHR5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9FTVBUWSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZVRpbGVTdGF0ZS5Ib3ZlcmVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJBdWRpby5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9IT1ZFUl9PKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuU2V0SW1hZ2UoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5USUxFX0hPVkVSX1gpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVUaWxlU3RhdGUuTWFya2VkOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtlZEFzID09PSBHYW1lVGlsZU1hcmsuTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfTykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lVGlsZVN0YXRlLldpbm5pbmc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFya2VkQXMgPT09IEdhbWVUaWxlTWFyay5PKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLlNldEltYWdlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVElMRV9XSU5OSU5HX08pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5TZXRJbWFnZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlRJTEVfV0lOTklOR19YKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5EcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTVZCZWhhdmlvciB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZCZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBFeHBsb3Npb25FZmZlY3QgfSBmcm9tIFwiLi9FeHBsb3Npb25FZmZlY3RcIjtcclxuaW1wb3J0IHsgU21va2VFZmZlY3QgfSBmcm9tIFwiLi9TbW9rZUVmZmVjdFwiO1xyXG5leHBvcnQgY2xhc3MgUGFydGljbGVIYW5kbGVyIGV4dGVuZHMgTVZCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RXhwbG9zaW9uRWZmZWN0ID0gbmV3IEV4cGxvc2lvbkVmZmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXMucHVzaChuZXdFeHBsb3Npb25FZmZlY3QpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTbW9rZUVmZmVjdCA9IG5ldyBTbW9rZUVmZmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXMucHVzaChuZXdTbW9rZUVmZmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlcy5mb3JFYWNoKGVmZmVjdCA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdC5EcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQbGF5KHBhcnRpY2xlRWZmZWN0XywgcG9zaXRpb25fKSB7XHJcbiAgICAgICAgbGV0IGZpbmRpbmdQYXJ0aWNsZSA9IHRydWU7XHJcbiAgICAgICAgd2hpbGUgKGZpbmRpbmdQYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGFydGljbGVzW3RoaXMuX2xhc3RJbmRleF0uUGFydGljbGVUeXBlID09IHBhcnRpY2xlRWZmZWN0Xykge1xyXG4gICAgICAgICAgICAgICAgZmluZGluZ1BhcnRpY2xlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZXNbdGhpcy5fbGFzdEluZGV4XS5QbGF5KHBvc2l0aW9uXyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGFzdEluZGV4ID0gKHRoaXMuX2xhc3RJbmRleCArIDEgPj0gdGhpcy5fcGFydGljbGVzLmxlbmd0aCkgP1xyXG4gICAgICAgICAgICAgICAgMCA6IHRoaXMuX2xhc3RJbmRleCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJIZWFsdGgge1xyXG4gICAgY29uc3RydWN0b3IoZnVsbEhQSW1hZ2VfLCBlbXB0eUhQSW1hZ2VfLCBzY3JlZW5Qb3NpdGlvbl8gPSB7IHg6IDI0MCwgeTogMzUwIH0pIHtcclxuICAgICAgICB0aGlzLl9tYXhIZWFsdGggPSAzO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9mdWxsSW1hZ2UgPSBmdWxsSFBJbWFnZV87XHJcbiAgICAgICAgdGhpcy5fZW1wdHlJbWFnZSA9IGVtcHR5SFBJbWFnZV87XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gdGhpcy5fbWF4SGVhbHRoO1xyXG4gICAgICAgIGxldCBwb3NpdGlvblggPSBzY3JlZW5Qb3NpdGlvbl8ueDtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fbWF4SGVhbHRoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Nwcml0ZSA9IG5ldyBNVlNwcml0ZSh0aGlzLl9mdWxsSW1hZ2UpO1xyXG4gICAgICAgICAgICBuZXdTcHJpdGUuVHJhbnNmb3JtLlNldFBvc2l0aW9uKHBvc2l0aW9uWCArIChpbmRleCAqIDYwKSwgc2NyZWVuUG9zaXRpb25fLnkpO1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzLnB1c2gobmV3U3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgSFAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcclxuICAgIH1cclxuICAgIFJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMuX21heEhlYWx0aDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUltYWdlcygpO1xyXG4gICAgfVxyXG4gICAgTG9zZUhlYWx0aCgpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggLT0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUltYWdlcygpO1xyXG4gICAgfVxyXG4gICAgRHJhdygpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fbWF4SGVhbHRoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbaW5kZXhdLkRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJbWFnZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX21heEhlYWx0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2luZGV4XS5TZXRJbWFnZSh0aGlzLl9oZWFsdGggPiBpbmRleCA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mdWxsSW1hZ2UgOiB0aGlzLl9lbXB0eUltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlRWZmZWN0IH0gZnJvbSBcIi4uL2VudW1zL1BhcnRpY2xlRWZmZWN0XCI7XHJcbmV4cG9ydCBjbGFzcyBTbW9rZUVmZmVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlBhcnRpY2xlVHlwZSA9IFBhcnRpY2xlRWZmZWN0LlNtb2tlO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlQ291bnQgPSAxMDtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZURpcmVjdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9wYXJ0aWNsZUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuU01PS0VfUEFSVElDTEUpKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBsYXkocG9zaXRpb25fKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0UG9zaXRpb24ocG9zaXRpb25fLngsIHBvc2l0aW9uXy55KTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2NhbGUgPSAoTWF0aC5yYW5kb20oKSAqIDAuOCkgKyAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldFNjYWxlKHJhbmRvbVNjYWxlLCByYW5kb21TY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNwZWVkWSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlRGlyZWN0aW9ucy5wdXNoKHsgeDogcmFuZG9tU3BlZWRYLCB5OiByYW5kb21TcGVlZFkgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNldEFscGhhKHJhbmRvbVNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcGFydGljbGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uVHJhbnNmb3JtLlNjYWxlLng7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDAuMDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gc2NhbGUgKiAwLjk1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uVHJhbnNsYXRlKHRoaXMuX3BhcnRpY2xlRGlyZWN0aW9uc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzW2luZGV4XS5UcmFuc2Zvcm0uU2V0U2NhbGUobmV3U2NhbGUsIG5ld1NjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlc1tpbmRleF0uRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNVlRleHQgfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZUZXh0XCI7XHJcbmltcG9ydCB7IE1WVGV4dEFsaWdubWVudCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvZW51bXMvbXZUZXh0QWxpZ25tZW50XCI7XHJcbmltcG9ydCB7IE1WRm9udFN0eWxlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9lbnVtcy9tdkZvbnRTdHlsZVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vb2JqZWN0cy9HYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5uZXIgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVdpbm5lclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJIZWFsdGggfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJIZWFsdGhcIjtcclxuaW1wb3J0IHsgTVZCdXR0b24gfSBmcm9tIFwiLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZCdXR0b25cIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9tdkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW51bXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9TdHJpbmdzXCI7XHJcbmltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IE1WQXVkaW9Hcm91cCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdkF1ZGlvR3JvdXBcIjtcclxuaW1wb3J0IHsgQXVkaW9MaWJyYXJ5LCBBdWRpb0xvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0F1ZGlvTG9hZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lcGxheVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0ID0gbmV3IE1WVGV4dChcIllPVVIgVFVSTiwgXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0ID0gbmV3IE1WVGV4dChcIlBMQVlFUiAyXCIpO1xyXG4gICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVSZXN1bHRUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFdhaXREdXJhdGlvbiA9IDEyMDtcclxuICAgICAgICB0aGlzLnNldHVwVGV4dEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFIZWFsdGggPSBuZXcgUGxheWVySGVhbHRoKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuSEVBUlQpLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUX0VNUFRZKSwgeyB4OiAyMjAsIHk6IDY1MCB9KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIySGVhbHRoID0gbmV3IFBsYXllckhlYWx0aChJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkhFQVJUKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5IRUFSVF9FTVBUWSksIHsgeDogMTU4MCwgeTogNjUwIH0pO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUExBWUVSX1NJR05fWCkpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFTaWduLlRyYW5zZm9ybS5TZXRQb3NpdGlvbigyODAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlNpZ24gPSBuZXcgTVZTcHJpdGUoSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5QTEFZRVJfU0lHTl9PKSk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlNpZ24uVHJhbnNmb3JtLlNldFBvc2l0aW9uKDE2NDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXRjaEJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlJFTUFUQ0hfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5SRU1BVENIX0JVVFRPTl9IT1ZFUiksIHsgeDogNzgwLCB5OiA2NTAgfSk7XHJcbiAgICAgICAgdGhpcy5fbWVudUJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5Lk1FTlVfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5NRU5VX0JVVFRPTl9IT1ZFUiksIHsgeDogMTE0MCwgeTogNjUwIH0pO1xyXG4gICAgICAgIHRoaXMuX3Jlc3RhcnRCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5SRVNUQVJUX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuUkVTVEFSVF9CVVRUT05fSE9WRVIpLCB7IHg6IDIwMCwgeTogOTYwIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlbWF0Y2hCdXR0b25Tb3VuZCA9IG5ldyBNVkF1ZGlvR3JvdXAoW0F1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuUExBWSldKTtcclxuICAgICAgICB0aGlzLl9tZW51QnV0dG9uU291bmQgPSBuZXcgTVZBdWRpb0dyb3VwKFtBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5Lk1BSU5fTUVOVSldKTtcclxuICAgICAgICB0aGlzLl9yZXN0YXJ0QnV0dG9uU291bmQgPSBuZXcgTVZBdWRpb0dyb3VwKFtBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5LlJFU1RBUlQpXSk7XHJcbiAgICB9XHJcbiAgICBQbGF5KCkge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aC5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVNpZ24uRHJhdygpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJTaWduLkRyYXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2Z1bGxHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzdGFydEJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5NYWluTWVudTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXN0YXJ0QnV0dG9uU291bmQuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yZXN0YXJ0QnV0dG9uLkRyYXcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5HYW1lV2lubmVyICE9PSBHYW1lV2lubmVyLk5vbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lUmVzdWx0VGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVJlc3VsdFRpbWVyIC09IEVuZ2luZS5EZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyMUhlYWx0aC5IUCA9PT0gMCB8fCB0aGlzLl9wbGF5ZXIySGVhbHRoLkhQID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lQm9hcmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW1hdGNoQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQm9hcmQuUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIxSGVhbHRoLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbWF0Y2hCdXR0b25Tb3VuZC5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fbWVudUJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5SZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcjJIZWFsdGguUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcXVlc3RTY2VuZSA9IEdhbWVTdGF0ZS5NYWluTWVudTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mdWxsR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZW51QnV0dG9uU291bmQuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbWF0Y2hCdXR0b24uRHJhdygpO1xyXG4gICAgICAgICAgICB0aGlzLl9tZW51QnV0dG9uLkRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVHYW1lQm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlBsYXkoKTtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLlJlcXVlc3RVcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZUJvYXJkLlJlcXVlc3RVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVCb2FyZC5HYW1lV2lubmVyID09PSBHYW1lV2lubmVyLk5vbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTAwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuR0FNRV9BQ1RJVkVfVEVYVCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJvYXJkLlBsYXllclR1cm4gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRWYWx1ZShcIlBMQVlFUiAxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldENvbG9yKDI1NCwgMjM0LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldFZhbHVlKFwiUExBWUVSIDJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0Q29sb3IoNDUsIDI0MiwgMjM5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5UaWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9uVGV4dC5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA5NjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldFZhbHVlKFN0cmluZ3MuR0FNRV9USUVEX1RFWFQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0VmFsdWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lUmVzdWx0VGltZXIgPSB0aGlzLl9nYW1lUmVzdWx0V2FpdER1cmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5MDAsIDk2MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0cnVjdGlvblRleHQuU2V0VmFsdWUoU3RyaW5ncy5HQU1FX1dJTl9URVhUKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5QbGF5ZXIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMkhlYWx0aC5Mb3NlSGVhbHRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9nYW1lQm9hcmQuR2FtZVdpbm5lciA9PT0gR2FtZVdpbm5lci5QbGF5ZXIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyMUhlYWx0aC5Mb3NlSGVhbHRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lUmVzdWx0VGltZXIgPSB0aGlzLl9nYW1lUmVzdWx0V2FpdER1cmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0dXBUZXh0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5MDAsIDk2MCk7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldEZvbnRQcm9wZXJ0aWVzKFwiT3N3YWxkLVJlZ3VsYXJcIiwgMzIsIE1WVGV4dEFsaWdubWVudC5DZW50ZXIsIE1WRm9udFN0eWxlLkl0YWxpYyk7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25UZXh0LlNldENvbG9yKDczLCA4MywgOTcpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbigxMDM1LCA5NjApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllclR1cm5UZXh0LlNldEZvbnRQcm9wZXJ0aWVzKFwiT3N3YWxkLVJlZ3VsYXJcIiwgMzIsIE1WVGV4dEFsaWdubWVudC5DZW50ZXIsIE1WRm9udFN0eWxlLkl0YWxpYyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyVHVyblRleHQuU2V0TWF4V2lkdGgoMzAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJUdXJuVGV4dC5TZXRDb2xvcigyNTQsIDIzNCwgMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVRleHQuVHJhbnNmb3JtLlNldFBvc2l0aW9uKDI4MCwgNjAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIxVGV4dC5TZXRGb250UHJvcGVydGllcyhcIk9zd2FsZC1SZWd1bGFyXCIsIDMyLCBNVlRleHRBbGlnbm1lbnQuQ2VudGVyLCBNVkZvbnRTdHlsZS5JdGFsaWMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjFUZXh0LlNldE1heFdpZHRoKDMwMCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMVRleHQuU2V0Q29sb3IoMjU0LCAyMzQsIDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0LlRyYW5zZm9ybS5TZXRQb3NpdGlvbigxNjQwLCA2MDApO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcjJUZXh0LlNldEZvbnRQcm9wZXJ0aWVzKFwiT3N3YWxkLVJlZ3VsYXJcIiwgMzIsIE1WVGV4dEFsaWdubWVudC5DZW50ZXIsIE1WRm9udFN0eWxlLkl0YWxpYyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyMlRleHQuU2V0TWF4V2lkdGgoMzAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIyVGV4dC5TZXRDb2xvcig0NSwgMjQyLCAyMzkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1WQnV0dG9uIH0gZnJvbSAnLi4vLi4vZW5naW5lL2NvbXBvbmVudHMvbXZCdXR0b24nO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi4vLi4vZW5naW5lL212RW5naW5lXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9lbnVtcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgSW1hZ2VMb2FkZXIsIEltYWdlTGlicmFyeSB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9TdHJpbmdzXCI7XHJcbmltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IE1WQXVkaW9Hcm91cCB9IGZyb20gXCIuLi8uLi9lbmdpbmUvY29tcG9uZW50cy9tdkF1ZGlvR3JvdXBcIjtcclxuaW1wb3J0IHsgQXVkaW9MaWJyYXJ5LCBBdWRpb0xvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0F1ZGlvTG9hZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gLTE7XHJcbiAgICAgICAgdGhpcy5fcGxheUJ1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LlBMQVlfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5QTEFZX0JVVFRPTl9IT1ZFUiksIHsgeDogODAwLCB5OiA2NjAgfSk7XHJcbiAgICAgICAgdGhpcy5fY3JlZGl0c0J1dHRvbiA9IG5ldyBNVkJ1dHRvbihJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkNSRURJVFNfQlVUVE9OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5DUkVESVRTX0JVVFRPTl9IT1ZFUiksIHsgeDogMTIyMCwgeTogNTcwIH0pO1xyXG4gICAgICAgIHRoaXMuX2V4aXRCdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5FWElUX0JVVFRPTiksIEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuRVhJVF9CVVRUT05fSE9WRVIpLCB7IHg6IDEyMjAsIHk6IDcyMCB9KTtcclxuICAgICAgICB0aGlzLl90YWdsaW5lID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuVEFHTElORV9URVhUKSk7XHJcbiAgICAgICAgdGhpcy5fdGFnbGluZS5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oOTYwLCA4ODApO1xyXG4gICAgICAgIHRoaXMuX3BsYXlCdXR0b25Tb3VuZCA9IG5ldyBNVkF1ZGlvR3JvdXAoW0F1ZGlvTG9hZGVyLkdldChBdWRpb0xpYnJhcnkuUExBWSldKTtcclxuICAgICAgICB0aGlzLl9leGl0QnV0dG9uU291bmQgPSBuZXcgTVZBdWRpb0dyb3VwKFtBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5Lk1FTlUxKV0pO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheUJ1dHRvbi5Jc0hvdmVyZWQoRW5naW5lLk1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmIChFbmdpbmUuSXNVc2VyQ2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVxdWVzdFNjZW5lID0gR2FtZVN0YXRlLkdhbWVwbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUJ1dHRvblNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jcmVkaXRzQnV0dG9uLklzSG92ZXJlZChFbmdpbmUuTW91c2VQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKEVuZ2luZS5Jc1VzZXJDbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oU3RyaW5ncy5DUkVESVRTX1VSTCwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leGl0QnV0dG9uU291bmQuUGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V4aXRCdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihTdHJpbmdzLkVYSVRfVVJMLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhpdEJ1dHRvblNvdW5kLlBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wbGF5QnV0dG9uLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9jcmVkaXRzQnV0dG9uLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9leGl0QnV0dG9uLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl90YWdsaW5lLkRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBdWRpb0xpYnJhcnksIEF1ZGlvTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvQXVkaW9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2VMaWJyYXJ5LCBJbWFnZUxvYWRlciB9IGZyb20gXCIuLi8uLi9kYXRhL0ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1WQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212QnV0dG9uXCI7XHJcbmltcG9ydCB7IE1WU3ByaXRlIH0gZnJvbSBcIi4uLy4uL2VuZ2luZS9jb21wb25lbnRzL212U3ByaXRlXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi8uLi9lbmdpbmUvbXZFbmdpbmVcIjtcclxuaW1wb3J0IHsgR2FtZUxvZ28gfSBmcm9tIFwiLi4vb2JqZWN0cy9HYW1lTG9nb1wiO1xyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2FsU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5SZXF1ZXN0U2NlbmUgPSAtMTtcclxuICAgICAgICB0aGlzLl9hdWRpb1RvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IG5ldyBNVlNwcml0ZShJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkJBQ0tHUk9VTkQpKTtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLlRyYW5zZm9ybS5TZXRQb3NpdGlvbig5NjAsIDU0MCk7XHJcbiAgICAgICAgdGhpcy5fbW9vbnZhbGtMb2dvID0gbmV3IE1WU3ByaXRlKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuTU9PTlZBTEtfTE9HTykpO1xyXG4gICAgICAgIHRoaXMuX21vb252YWxrTG9nby5UcmFuc2Zvcm0uU2V0UG9zaXRpb24oMjIwLCAxMjApO1xyXG4gICAgICAgIHRoaXMuX2dhbWVMb2dvID0gbmV3IEdhbWVMb2dvKEltYWdlTG9hZGVyLkdldChJbWFnZUxpYnJhcnkuTE9HT19JQ09OKSwgSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5MT0dPX1RFWFQpKTtcclxuICAgICAgICB0aGlzLl9nYW1lTXVzaWMgPSBBdWRpb0xvYWRlci5HZXQoQXVkaW9MaWJyYXJ5Lk1VU0lDKTtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZU11c2ljKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNdXNpYy5sb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYXVkaW9CdXR0b24gPSBuZXcgTVZCdXR0b24oSW1hZ2VMb2FkZXIuR2V0KEltYWdlTGlicmFyeS5BVURJT19CVVRUT04pLCBJbWFnZUxvYWRlci5HZXQoSW1hZ2VMaWJyYXJ5LkFVRElPX0JVVFRPTl9IT1ZFUiksIHsgeDogMTgxMCwgeTogMTEwIH0pO1xyXG4gICAgfVxyXG4gICAgUGxheSgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLkRyYXcoKTtcclxuICAgICAgICB0aGlzLl9nYW1lTG9nby5EcmF3KCk7XHJcbiAgICAgICAgdGhpcy5fbW9vbnZhbGtMb2dvLkRyYXcoKTtcclxuICAgICAgICBpZiAodGhpcy5fYXVkaW9CdXR0b24uSXNIb3ZlcmVkKEVuZ2luZS5Nb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb1RvZ2dsZSA9ICF0aGlzLl9hdWRpb1RvZ2dsZTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fYXVkaW9Ub2dnbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9nYW1lTXVzaWMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnV0dG9uLkRyYXcoKTtcclxuICAgICAgICBpZiAoRW5naW5lLklzVXNlckNsaWNraW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdWRpb1RvZ2dsZSAmJiAoKF9iID0gdGhpcy5fZ2FtZU11c2ljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGF1c2VkKSkge1xyXG4gICAgICAgICAgICAgICAgKF9jID0gdGhpcy5fZ2FtZU11c2ljKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9