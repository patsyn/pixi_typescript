///<reference path="libs\pixi.d.ts"/>
define(["require", "exports"], function(require, exports) {
    (function (PixiTests) {
        var PixiBasics = (function () {
            function PixiBasics(document) {
                this.document = document;
            }
            PixiBasics.prototype.start = function () {
                var _this = this;
                this.stage = new PIXI.Stage(0x66FF99);

                // create a renderer instance
                this.renderer = PIXI.autoDetectRenderer(400, 300);

                // add the renderer view element to the DOM
                this.document.body.appendChild(this.renderer.view);

                this.renderLoop = function () {
                    return _this.animate();
                };
                requestAnimFrame(this.renderLoop);

                // create a texture from an image path
                this.texture = PIXI.Texture.fromImage("bunny.png");

                // create a new Sprite using the texture
                this.bunny = new PIXI.Sprite(this.texture);

                // center the sprites anchor point
                this.bunny.anchor.x = 0.5;
                this.bunny.anchor.y = 0.5;

                // move the sprite t the center of the screen
                this.bunny.position.x = 200;
                this.bunny.position.y = 150;

                this.stage.addChild(this.bunny);
            };

            PixiBasics.prototype.animate = function () {
                requestAnimFrame(this.renderLoop);

                // just for fun, lets rotate mr rabbit a little
                this.bunny.rotation += 0.1;

                // render the stage
                this.renderer.render(this.stage);
            };
            return PixiBasics;
        })();
        PixiTests.PixiBasics = PixiBasics;
    })(exports.PixiTests || (exports.PixiTests = {}));
    var PixiTests = exports.PixiTests;
});
//# sourceMappingURL=PixiBasics.js.map
