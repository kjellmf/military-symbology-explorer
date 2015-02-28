'use strict';

// element_dict['cloverGraphic'] = element.get('CloverGraphic')
//        element_dict['diamondGraphic'] = element.get('DiamondGraphic')
//        element_dict['rectangleGraphic'] = element.get('RectangleGraphic')
//        element_dict['squareGraphic'] = element.get('SquareGraphic')


var standardIdentityMap = {
    "0": "cloverGraphic",
    "1": "cloverGraphic",
    "2": "rectangleGraphic",
    "3": "rectangleGraphic",
    "4": "squareGraphic",
    "5": "diamondGraphic",
    "6": "diamondGraphic"
};

var standardIdentityMap2 = {
    "SI_PENDING": "cloverGraphic",
    "SI_UNKNOWN": "cloverGraphic",
    "SI_ASSUMED_FRIEND": "rectangleGraphic",
    "SI_FRIEND": "rectangleGraphic",
    "SI_NEUTRAL": "squareGraphic",
    "SI_SUSPECT_JOKER": "diamondGraphic",
    "SI_HOSTILE_FAKER": "diamondGraphic"
};



function findSymbolObject(arr, ele) {
    var beginning = 0, end = arr.length,
        target;
    if (!end) {
        return null
    }
    while (true) {
        target = ((beginning + end) >> 1);
        if ((target === end || target === beginning) && arr[target].digits !== ele) {
            return null;
        }
        if (arr[target].digits > ele) {
            end = target;
        } else if (arr[target].digits < ele) {
            beginning = target;
        } else {
            return arr[target];
        }
    }
}

function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return array[i];
        }
    }
}




