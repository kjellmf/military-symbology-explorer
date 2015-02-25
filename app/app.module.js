angular.module('symbolApp', ['ngAnimate', 'ui.router', 'ngClipboard'])
    .constant("config", {
        BLANK_PATH: "assets/img/blank.png",
        SVG_PATH: "svg/MIL_STD_2525D_Symbols/"
    })

    .config(['ngClipProvider', function (ngClipProvider) {
        ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
    }]);

;