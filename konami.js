const BASE_THEME_URL = "https://boucheriesaintgermain.fr/bsg-child/";

const CAN_BE_DISPLAYED = {
	bender: {
		name: "bender",
		html: "<div id=\"page\"><div id=\"container\"><div id=\"foot\" class=\"left\"><div id=\"f1\"></div><div id=\"f2\"></div><div id=\"leg1\" class=\"first\"><div id=\"leg1\" class=\"next1\"><div id=\"leg1\" class=\"next1\"><div id=\"leg1\" class=\"next1\"><div id=\"leg1\" class=\"next1\"></div></div></div></div></div></div><div id=\"foot\" class=\"right\"><div id=\"f1\"></div><div id=\"f2\"></div>         <div id=\"leg2\" class=\"first\"><div id=\"leg2\" class=\"next2\"><div id=\"leg2\" class=\"next2\"><div id=\"leg2\" class=\"next2\"><div id=\"leg2\" class=\"next2\"></div></div></div></div></div>        </div> <div id=\"body\"><div id=\"b1\"></div><div id=\"b2\"></div><div id=\"b3\"></div><div id=\"head\"><div id=\"h1\"></div><div id=\"h2\"></div><div id=\"h3\"></div><div id=\"h4\"></div><div id=\"h5\"><span></span></div><div id=\"eyes\"><div id=\"e\"><div id=\"e1\"><div id=\"eye\"></div><span></span></div><div id=\"e2\"><div id=\"eye\"></div><span></span></div></div></div><div id=\"mouth\"><span></span><span></span><span></span><span></span><span></span><div id=\"m1\"></div><div id=\"m2\"></div></div>              </div><div id=\"b4\"></div><div id=\"b5\"><div id=\"b51\"><div id=\"b51\"><div id=\"b51\"><div id=\"b51\"><div id=\"ab\"><div id=\"a1\"></div><div id=\"a2\"></div><div id=\"a3\" class=\"a31\"></div><div id=\"a3\" class=\"a32\"></div><div id=\"a3\" class=\"a33\"></div></div></div></div></div></div></div><div id=\"b6\"></div><div id=\"b7\"><div id=\"b71\"><div id=\"b71\"><div id=\"b71\"><div id=\"b71\"><div id=\"ac\"><div id=\"a1\"></div><div id=\"a2\"></div><div id=\"a3\" class=\"a31\"></div><div id=\"a3\" class=\"a32\"></div><div id=\"a3\" class=\"a33\"></div></div></div></div></div></div></div><div id=\"b8\"><span></span></div><div id=\"b9\"></div></div></div></div>",
		css: "my-easter-egg/css/bender.css",
	},
	homer: {
		html: "<div id=\"homer\"><div id=\"head\" style=\"\"><div id=\"shadow\"></div><div id=\"neck\"></div><div class=\"cheek\"></div><div id=\"forehead\"></div><div class=\"ear left\"></div><div id=\"eyebrow\"></div><div class=\"eye left\"></div><div id=\"beard\"></div><div id=\"smile\"></div><div id=\"upper-lip\"></div><div id=\"nose\"></div><div class=\"eye\"></div><div class=\"hair-top\"></div><div class=\"hair-top left\"></div><div id=\"hair\"></div><div class=\"ear\"></div><div id=\"v-neck\"></div><div class=\"shirt-neck\"></div></div><div id=\"legs\"><div class=\"shoe\"></div><div class=\"shoe right\"></div><div class=\"tacon\"></div><div class=\"opening left\"></div><div class=\"leg left\"></div><div id=\"waist\"></div><div class=\"leg right\"></div><div class=\"opening\"></div></div><div id=\"body\"><div class=\"shirt-arm left\"><div></div></div><div id=\"shirt\"><div></div></div><div id=\"shirt-bg\"></div><div id=\"shirt-line-2\"></div><div id=\"arm\"></div><div id=\"finger-1\" class=\"finger\"></div><div id=\"finger-2\" class=\"finger\"></div><div id=\"finger-3\" class=\"finger\"></div><div class=\"shirt-arm\"><div></div></div><div class=\"line-pants\"></div></div></div>",
		name: "homer",
		css: "my-easter-egg/css/homer.css",
	}
};

const TO_DISPLAY = CAN_BE_DISPLAYED.bender;

/**
 * /*
 * Konami-JS ~
 * :: Now with support for touch events and multiple instances for
 * :: those situations that call for multiple easter eggs!
 * Code: https://github.com/snaptortoise/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.6.2 (7/17/2018)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1+ and Android
 *
 * @format
 */

var Konami = function(callback) {
	var konami = {
		addEvent: function(obj, type, fn, ref_obj) {
			if (obj.addEventListener) obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj['e' + type + fn] = fn;
				obj[type + fn] = function() {
					obj['e' + type + fn](window.event, ref_obj);
				};
				obj.attachEvent('on' + type, obj[type + fn]);
			}
		},
		removeEvent: function(obj, eventName, eventCallback) {
			if (obj.removeEventListener) {
				obj.removeEventListener(eventName, eventCallback);
			} else if (obj.attachEvent) {
				obj.detachEvent(eventName);
			}
		},
		input: '',
		pattern: '38384040373937396665',
		keydownHandler: function(e, ref_obj) {
			if (ref_obj) {
				konami = ref_obj;
			} // IE
			konami.input += e ? e.keyCode : event.keyCode;
			if (konami.input.length > konami.pattern.length) {
				konami.input = konami.input.substr(
					konami.input.length - konami.pattern.length
				);
			}
			if (konami.input === konami.pattern) {
				konami.code(konami._currentLink);
				konami.input = '';
				e.preventDefault();
				return false;
			}
		},
		load: function(link) {
			this._currentLink = link;
			this.addEvent(document, 'keydown', this.keydownHandler, this);
			this.iphone.load(link);
		},
		unload: function() {
			this.removeEvent(document, 'keydown', this.keydownHandler);
			this.iphone.unload();
		},
		code: function(link) {
			window.location = link;
		},
		iphone: {
			start_x: 0,
			start_y: 0,
			stop_x: 0,
			stop_y: 0,
			tap: false,
			capture: false,
			orig_keys: '',
			keys: [
				'UP',
				'UP',
				'DOWN',
				'DOWN',
				'LEFT',
				'RIGHT',
				'LEFT',
				'RIGHT',
				'TAP',
				'TAP'
			],
			input: [],
			code: function(link) {
				konami.code(link);
			},
			touchmoveHandler: function(e) {
				if (e.touches.length === 1 && konami.iphone.capture === true) {
					var touch = e.touches[0];
					konami.iphone.stop_x = touch.pageX;
					konami.iphone.stop_y = touch.pageY;
					konami.iphone.tap = false;
					konami.iphone.capture = false;
					konami.iphone.check_direction();
				}
			},
			touchendHandler: function() {
				konami.iphone.input.push(konami.iphone.check_direction());

				if (konami.iphone.input.length > konami.iphone.keys.length)
					konami.iphone.input.shift();

				if (konami.iphone.input.length === konami.iphone.keys.length) {
					var match = true;
					for (var i = 0; i < konami.iphone.keys.length; i++) {
						if (konami.iphone.input[i] !== konami.iphone.keys[i]) {
							match = false;
						}
					}
					if (match) {
						konami.iphone.code(konami._currentLink);
					}
				}
			},
			touchstartHandler: function(e) {
				konami.iphone.start_x = e.changedTouches[0].pageX;
				konami.iphone.start_y = e.changedTouches[0].pageY;
				konami.iphone.tap = true;
				konami.iphone.capture = true;
			},
			load: function(link) {
				this.orig_keys = this.keys;
				konami.addEvent(document, 'touchmove', this.touchmoveHandler);
				konami.addEvent(
					document,
					'touchend',
					this.touchendHandler,
					false
				);
				konami.addEvent(document, 'touchstart', this.touchstartHandler);
			},
			unload: function() {
				konami.removeEvent(
					document,
					'touchmove',
					this.touchmoveHandler
				);
				konami.removeEvent(document, 'touchend', this.touchendHandler);
				konami.removeEvent(
					document,
					'touchstart',
					this.touchstartHandler
				);
			},
			check_direction: function() {
				x_magnitude = Math.abs(this.start_x - this.stop_x);
				y_magnitude = Math.abs(this.start_y - this.stop_y);
				x = this.start_x - this.stop_x < 0 ? 'RIGHT' : 'LEFT';
				y = this.start_y - this.stop_y < 0 ? 'DOWN' : 'UP';
				result = x_magnitude > y_magnitude ? x : y;
				result = this.tap === true ? 'TAP' : result;
				return result;
			}
		}
	};

	typeof callback === 'string' && konami.load(callback);
	if (typeof callback === 'function') {
		konami.code = callback;
		konami.load();
	}

	return konami;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Konami;
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return Konami;
		});
	} else {
		window.Konami = Konami;
	}
}


var easter_egg = new Konami(function() {
	alert('Hey you have enabled Konami code');
	let html = '';
	html += "<div id='konami' style='width: 100%; height: 100%; position: absolute;'>";
	html += TO_DISPLAY.html;
	html += '</div>';
	let body = document.querySelector('body');
	body.innerHTML =
		"<div id='konami-hide' style='display: none;'>" +
		body.innerHTML +
		'</div>' +
		html;
	/** LINK STYLESHEET */
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('link');
	style.href = `${BASE_THEME_URL}${TO_DISPLAY.css}`;
	style.type = 'text/css';
	style.rel = 'stylesheet';
	style.id = "konami-style";
	head.append(style);

	document.querySelector('#konami').addEventListener('click', function() {
		let old_body = document.querySelector('#konami-hide').innerHTML;
		let stylesheet = document.querySelector("#konami-style");
		stylesheet.parentNode.removeChild(stylesheet);
		body.innerHTML = old_body;
	});
});
