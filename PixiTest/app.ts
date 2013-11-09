///<reference path="libs\require.d.ts"/>

import basicsRef = require("PixiBasics");

require(['PixiBasics', 'libs/pixi'], () => {
    var greeter = new basicsRef.PixiTests.PixiBasics(document);
    greeter.start();
});