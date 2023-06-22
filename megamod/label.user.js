// ==UserScript==
// @name         kbin-labelop
// @namespace    https://github.com/aclist
// @version      0.2
// @description  label thread author
// @author       aclist
// @match        https://kbin.social/*
// @license               MIT
// ==/UserScript==

function labelOp(toggle){
    if (toggle === false) {
         document.styleSheets[0].addRule('.own.author > header > .user-inline::after','content: "";background-color:transparent;');
    } else {
        document.styleSheets[0].addRule('.own.author > header > .user-inline::after','content: " OP";color:white;background-color:#111;margin-left: 3px;padding-left: 3px;padding-right: 3px');
    }
}
