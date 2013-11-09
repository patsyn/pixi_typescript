///<reference path="libs\require.d.ts"/>
define(["require", "exports", "PixiBasics"], function(require, exports, __basicsRef__) {
    var basicsRef = __basicsRef__;

    require(['PixiBasics', 'Scripts/libs/pixi'], function () {
        var greeter = new basicsRef.PixiTests.PixiBasics(document);
        greeter.start();
    });
});
//# sourceMappingURL=app.js.map
