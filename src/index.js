
/***********************************
 *            TODOS                *
 ***********************************/

/* My to-do list:
 * - [ ] get some input:   implement user interaction (get click event from shapes).
 * - [ ] give some output: implement some animations (eg. scale up on mouse hover).
 */

/***********************************
 *            CONSTANTS            *
 ***********************************/

// colors.
const COLORS =
	{ // source: https://www.w3schools.com/colors/colors_hex.asp
		Black:                  '#000000', Navy:                '#000080', DarkBlue:         '#00008B', MediumBlue:       '#0000CD', Blue:              '#0000FF',
		DarkTurquoise:          '#00CED1', MediumSpringGreen:   '#00FA9A', Green:            '#00FF00', SpringGreen:      '#00FF7F', Aqua:              '#00FFFF',
		Cyan:                   '#00FFFF', MidnightBlue:        '#191970', DodgerBlue:       '#1E90FF', LightSeaGreen:    '#20B2AA', ForestGreen:       '#228B22',
		SeaGreen:               '#2E8B57', DarkSlateGray:       '#2F4F4F', DarkSlateGrey:    '#2F4F4F', LimeGreen:        '#32CD32', MediumSeaGreen:    '#3CB371',
		Turquoise:              '#40E0D0', RoyalBlue:           '#4169E1', SteelBlue:        '#4682B4', DarkSlateBlue:    '#483D8B', MediumTurquoise:   '#48D1CC',
		Indigo:                 '#4B0082', DarkOliveGreen:      '#556B2F', CadetBlue:        '#5F9EA0', CornflowerBlue:   '#6495ED', RebeccaPurple:     '#663399',
		MediumAquaMarine:       '#66CDAA', DimGray:             '#696969', DimGrey:          '#696969', SlateBlue:        '#6A5ACD', OliveDrab:         '#6B8E23',
		SlateGray:              '#708090', SlateGrey:           '#708090', LightSlateGray:   '#778899', LightSlateGrey:   '#778899', MediumSlateBlue:   '#7B68EE',
		LawnGreen:              '#7CFC00', Chartreuse:          '#7FFF00', Aquamarine:       '#7FFFD4', Maroon:           '#800000', Purple:            '#800080',
		Olive:                  '#808000', Gray:                '#808080', Grey:             '#808080', SkyBlue:          '#87CEEB', LightSkyBlue:      '#87CEFA',
		BlueViolet:             '#8A2BE2', DarkRed:             '#8B0000', DarkMagenta:      '#8B008B', SaddleBrown:      '#8B4513', DarkSeaGreen:      '#8FBC8F',
		LightGreen:             '#90EE90', MediumPurple:        '#9370DB', DarkViolet:       '#9400D3', PaleGreen:        '#98FB98', DarkOrchid:        '#9932CC',
		YellowGreen:            '#9ACD32', Sienna:              '#A0522D', Brown:            '#A52A2A', DarkGray:         '#A9A9A9', DarkGrey:          '#A9A9A9',
		LightBlue:              '#ADD8E6', GreenYellow:         '#ADFF2F', PaleTurquoise:    '#AFEEEE', LightSteelBlue:   '#B0C4DE', PowderBlue:        '#B0E0E6',
		FireBrick:              '#B22222', DarkGoldenRod:       '#B8860B', MediumOrchid:     '#BA55D3', RosyBrown:        '#BC8F8F', DarkKhaki:         '#BDB76B',
		Silver:                 '#C0C0C0', MediumVioletRed:     '#C71585', IndianRed:        '#CD5C5C', Peru:             '#CD853F', Chocolate:         '#D2691E',
		Tan:                    '#D2B48C', LightGray:           '#D3D3D3', LightGrey:        '#D3D3D3', Thistle:          '#D8BFD8', Orchid:            '#DA70D6',
		GoldenRod:              '#DAA520', PaleVioletRed:       '#DB7093', Crimson:          '#DC143C', Gainsboro:        '#DCDCDC', Plum:              '#DDA0DD',
		BurlyWood:              '#DEB887', LightCyan:           '#E0FFFF', Lavender:         '#E6E6FA', DarkSalmon:       '#E9967A', Violet:            '#EE82EE',
		PaleGoldenRod:          '#EEE8AA', LightCoral:          '#F08080', Khaki:            '#F0E68C', AliceBlue:        '#F0F8FF', HoneyDew:          '#F0FFF0',
		Azure:                  '#F0FFFF', SandyBrown:          '#F4A460', Wheat:            '#F5DEB3', Beige:            '#F5F5DC', WhiteSmoke:        '#F5F5F5',
		MintCream:              '#F5FFFA', GhostWhite:          '#F8F8FF', Salmon:           '#FA8072', AntiqueWhite:     '#FAEBD7', Linen:             '#FAF0E6',
		LightGoldenRodYellow:   '#FAFAD2', OldLace:             '#FDF5E6', Red:              '#FF0000', Fuchsia:          '#FF00FF', Magenta:           '#FF00FF',
		DeepPink:               '#FF1493', OrangeRed:           '#FF4500', Tomato:           '#FF6347', HotPink:          '#FF69B4', Coral:             '#FF7F50',
		DarkOrange:             '#FF8C00', LightSalmon:         '#FFA07A', Orange:           '#FFA500', LightPink:        '#FFB6C1', Pink:              '#FFC0CB',
		Gold:                   '#FFD700', PeachPuff:           '#FFDAB9', NavajoWhite:      '#FFDEAD', Moccasin:         '#FFE4B5', Bisque:            '#FFE4C4',
		MistyRose:              '#FFE4E1', BlanchedAlmond:      '#FFEBCD', PapayaWhip:       '#FFEFD5', LavenderBlush:    '#FFF0F5', SeaShell:          '#FFF5EE',
		Cornsilk:               '#FFF8DC', LemonChiffon:        '#FFFACD', FloralWhite:      '#FFFAF0', Snow:             '#FFFAFA', Yellow:            '#FFFF00',
		LightYellow:            '#FFFFE0', Ivory:               '#FFFFF0', White:            '#FFFFFF', Lime:            '#00FF00',
	};

// fill color modes.
const CMODES =
	{
		FILL    : 0,
		SHUFFLE : 1,
	};
const BACKGROUND_COLOR   = COLORS.Black;
const DEFAULT_FILL_COLOR = BACKGROUND_COLOR;

// orientations.
const ORIENTATIONS =
	{
		TOP     : 0,
		RIGHT   : 1,
		BOTTOM  : 2,
		LEFT    : 3,
	};

/***********************************
 *           SETUP SCREEN          *
 ***********************************/

// create a canvas in the size of the the screen.
var maxWidth = window.innerWidth;
var maxHeight = window.innerHeight;
var canvas = document.getElementById('canvas');
canvas.width  = maxWidth;
canvas.height = maxHeight;

// set background color to black.
document.body.style.background = BACKGROUND_COLOR;

// remove scroll bars from right and bottom window side.
document.body.style.overflow = 'hidden';

/***********************************
 *           DEFINE FUNCTIONS      *
 ***********************************/

function drawBody(body) {
	var shape = body.shape;
	var color = body.color;
	var position = body.pos;
	positionShape(shape, position, color);
}

function positionShape(shape, position, color) {
	var xOffset = calculateOffset(position.xPosition, 0, maxWidth,  ORIENTATIONS.LEFT, ORIENTATIONS.RIGHT);
	var yOffset = calculateOffset(position.yPosition, 0, maxHeight, ORIENTATIONS.TOP,  ORIENTATIONS.BOTTOM);
	drawShape(shape, xOffset, yOffset, color);
}

function calculateOffset(axisPosition, min, max, minCondition, maxCondition) {
	var offset      = 0;
	var distance    = axisPosition.distance;
	var orientation = axisPosition.orientation;
	if (orientation == minCondition) {
		offset = min + distance;
	} else if (orientation == maxCondition) {
		offset = max - distance;
	}
	return offset;
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIndex(arr) {
	var min = 0;
	var max = arr.length;
	return getRandomNumber(min, max);
}

function selectColorByMode(colorArr, mode, index, lastColor) {
	var color = DEFAULT_FILL_COLOR;
	if (mode == CMODES.FILL) {
		if (colorArr[index]) {
			color = colorArr[index];
		} else {
			color = lastColor;
		}
	} else if (mode == CMODES.SHUFFLE) {
		color = colorArr[getRandomIndex(colorArr)];
	}
	return color;
}

function drawShape(shape, xOffset, yOffset, color) {
	var mode = color.mode;
	var cols = color.colors;
	var lastColor = null;
	shape.forEach((fragment, index) => {
		var fragmentColor = selectColorByMode(cols, mode, index, lastColor);
		lastColor = fragmentColor;
		drawFragment(fragment, xOffset, yOffset, fragmentColor);
	});
}

function drawFragment(fragment, xOffset, yOffset, color) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.beginPath();
	addLinesToContext(ctx, fragment, xOffset, yOffset);
	ctx.closePath();
	ctx.fill();
}

function addLinesToContext(ctx, fragment, xOffset, yOffset) {
	for (const stroke of fragment) {
		var x = stroke[0];
		var y = stroke[1];
		x = x + xOffset;
		y = y + yOffset;
		ctx.lineTo(x, y);
	}
}
function scaleShape(shape, factor) {
	for (const fragment of shape) {
		for (const stroke of fragment) {
			stroke[0] = stroke[0] * factor;
			stroke[1] = stroke[1] * factor;

		}
	}
}


/***********************************
 *  DEFINE SHAPE, POSITION, COLOR  *
 ***********************************/

var heartShape =
	[ // shape
		[ // fragment
			[1, 0], // stroke
			[1, 1],
			[0, 1],
		],
		[
			[2, 0],
			[1, 0],
			[1, 1],
		],
		[
			[2, 0],
			[2, 1],
			[1, 1],
		],
		[
			[2, 0],
			[3, 1],
			[2, 1],
		],
		[
			[4, 0],
			[4, 1],
			[3, 1],
		],
		[
			[5, 0],
			[4, 0],
			[4, 1],
		],
		[
			[5, 0],
			[5, 1],
			[4, 1],
		],
		[
			[5, 0],
			[6, 1],
			[5, 1],
		],
		[
			[0, 1],
			[1, 1],
			[0, 2],
		],
		[
			[1, 1],
			[1, 2],
			[0, 2],
		],
		[
			[1, 1],
			[2, 2],
			[1, 2],
		],
		[
			[1, 1],
			[2, 1],
			[2, 2],
		],
		[
			[2, 1],
			[3, 1],
			[2, 2],
		],
		[
			[3, 1],
			[3, 2],
			[2, 2],
		],
		[
			[3, 1],
			[4, 2],
			[3, 2],
		],
		[
			[3, 1],
			[4, 1],
			[4, 2],
		],
		[
			[4, 1],
			[5, 1],
			[4, 2],
		],
		[
			[5, 1],
			[5, 2],
			[4, 2],
		],
		[
			[5, 1],
			[6, 2],
			[5, 2],
		],
		[
			[5, 1],
			[6, 1],
			[6, 2],
		],
		[
			[0, 2],
			[1, 2],
			[1, 3],
		],
		[
			[5, 2],
			[6, 2],
			[5, 3],
		],
		[
			[1, 2],
			[2, 2],
			[1, 3],
		],
		[
			[2, 2],
			[2, 3],
			[1, 3],
		],
		[
			[2, 2],
			[3, 3],
			[2, 3],
		],
		[
			[2, 2],
			[3, 2],
			[3, 3],
		],
		[
			[3, 2],
			[4, 2],
			[3, 3],
		],
		[
			[4, 2],
			[4, 3],
			[3, 3],
		],
		[
			[4, 2],
			[5, 3],
			[4, 3],
		],
		[
			[4, 2],
			[5, 2],
			[5, 3],
		],
		[
			[1, 3],
			[2, 3],
			[2, 4],
		],
		[
			[2, 3],
			[3, 3],
			[2, 4],
		],
		[
			[3, 3],
			[3, 4],
			[2, 4],
		],
		[
			[3, 3],
			[4, 4],
			[3, 4],
		],
		[
			[3, 3],
			[4, 3],
			[4, 4],
		],
		[
			[4, 3],
			[5, 3],
			[4, 4],
		],
		[
			[2, 4],
			[3, 4],
			[3, 5],
		],
		[
			[3, 4],
			[4, 4],
			[3, 5],
		],
	];

scaleShape(heartShape, 10);

var shuffleGreen   = { mode : CMODES.SHUFFLE, colors : [COLORS.Lime, COLORS.SeaGreen, COLORS.LightGreen, COLORS.SpringGreen, COLORS.YellowGreen, ], };
var shuffleRed     = { mode : CMODES.SHUFFLE, colors : [COLORS.DarkRed, COLORS.IndianRed, COLORS.OrangeRed, COLORS.Red, COLORS.MediumVioletRed, ], };
var fillBlue       = { mode : CMODES.FILL,    colors : [COLORS.Blue,], };
var fillYellowGray = { mode : CMODES.FILL,    colors : [ 
	COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Gray, 
	COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Yellow, COLORS.Gray,   COLORS.Gray, 
	COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Yellow, COLORS.Gray,   COLORS.Yellow, COLORS.Yellow, 
	COLORS.Yellow, COLORS.Yellow, COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Yellow, COLORS.Yellow,
	COLORS.Yellow, COLORS.Gray,   COLORS.Gray,   COLORS.Gray,   COLORS.Yellow, COLORS.Gray,
], };

var heartPosition = { 
	xPosition : { distance : 400, orientation: ORIENTATIONS.RIGHT, },
	yPosition : { distance :  50, orientation: ORIENTATIONS.TOP, },
};

/***********************************
 *         CREATE BODIES           *
 ***********************************/

var heart1 = {
	shape: heartShape,
	color: shuffleGreen,
	pos:   heartPosition,
};

var heart2 = JSON.parse(JSON.stringify(heart1));
heart2.pos.yPosition.distance = heart2.pos.yPosition.distance + 100;
heart2.pos.xPosition.orientation = ORIENTATIONS.LEFT;
heart2.color = shuffleRed;

var heart3 = JSON.parse(JSON.stringify(heart2));
heart3.pos.yPosition.distance = heart2.pos.yPosition.distance + 100;
heart3.pos.xPosition.orientation = ORIENTATIONS.RIGHT;
heart3.color = fillBlue;
scaleShape(heart3.shape, 1.5);

var heart4 = JSON.parse(JSON.stringify(heart2));
heart4.pos.yPosition.distance = heart3.pos.yPosition.distance + 100;
heart4.pos.xPosition.orientation = ORIENTATIONS.LEFT;
heart4.color = fillYellowGray;
scaleShape(heart4.shape, .5);

/***********************************
 *               MAIN              *
 ***********************************/

// draw shapes.
drawBody(heart1);
drawBody(heart2);
drawBody(heart3);
drawBody(heart4);

