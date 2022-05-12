// ==UserScript==
// @name         Youtube video sound no limit
// @namespace    https://zqwqz.org
// @version      0.1
// @description  lel
// @author       You
// @include      https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    var old_url = '';
    var mutationObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (location.href != old_url) {
                old_url = location.href;
                if (old_url.match(/watch/)) {
                setTimeout(function() {
                   document.querySelector("video").volume = 1;
                },1000);
                }
            }
        });
    });
    mutationObserver.observe(document.documentElement, {childList: true, subtree: true});
})();
