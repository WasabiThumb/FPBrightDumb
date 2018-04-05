// ==UserScript==
// @name         Bright Dumb Rating
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fixes the dumb rating
// @author       WasabiThumbs
// @match        https://forum.facepunch.com/f/*
// @grant        unsafeWindow
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $("[data-label=Dumb]").find("a").find("img").setAttribute("src", "https://s9.postimg.org/yb00bsue7/9e90af9a-5954-411a-b8e3-5b15f2290b7c.png");
})();
