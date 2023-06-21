// ==UserScript==
// @name         kbin-subs
// @namespace    https://github.com/aclist
// @version      0.2
// @description  put subs on top page
// @author       aclist
// @match        https://kbin.social/*
// @license               MIT
// @downloadURL https://github.com/aclist/kbin-scripts/raw/main/megamod/subs.user.js
// @updateURL      https://github.com/aclist/kbin-scripts/raw/main/megamod/subs.user.js
// ==/UserScript==

function addMags(){
    var user = document.querySelector('.login');
    var split = user.href.split("/");
    var username = split[4];
    var subLink = 'https://kbin.social/u/' + username + '/subscriptions'
    console.log(username);
        if ( username == null) {
            return
        } else {
    const myListItem = document.createElement('li');
    const mySubsLink = document.createElement('a');
    mySubsLink.setAttribute('href', subLink);
    mySubsLink.innerText = 'My mags';
    mySubsLink.className = 'subs-nav';
    myListItem.append(mySubsLink);

    var nav = document.querySelector('.head-nav__menu');
    var mags = document.querySelector('[href="/magazines"]');
    nav.appendChild(myListItem);
}

function addMags(toggle){
    console.log(toggle);
    if (toggle == false) {
        $('.subs-nav').remove();
    } else {
        addMags();
    }
}
