// ==UserScript==
// @name         kbin-alphasubs
// @author aclist
// @namespace    http://tampermonkey.net/
// @description alpha sort subs index
// @version      0.0.1
// @match                 https://kbin.social/u/*
// @license               MIT
// @downloadURL https://github.com/aclist/kbin-scripts/raw/main/alphasubs.user.js
// @updateURL      https://github.com/aclist/kbin-scripts/raw/main/alphasubs.user.js
// ==/UserScript==

if (window.location.href.indexOf("subscriptions") > -1) {

    var mags = document.querySelectorAll('.section.magazines.magazines-columns ul li a');
    var magsArr = []
    var namesArr = []
    mags.forEach((item) => {
        var toLower = item.href.toLowerCase();
        magsArr.push(toLower);
        var hrName = item.innerText.toLowerCase();
        namesArr.push(hrName);
    });

    namesArr.sort();
    magsArr.sort();

    var outer = document.querySelector('.section.magazines.magazines-columns')
    var ul = document.querySelector('.section.magazines.magazines-columns ul')
    ul.remove();

    for (let i =0; i<magsArr.length; ++i){
        const myListItem = document.createElement('li');
        const mySubsLink = document.createElement('a');
        mySubsLink.setAttribute('href', magsArr[i]);
        mySubsLink.innerText = namesArr[i];
        mySubsLink.className = 'subs-nav';
        myListItem.append(mySubsLink);
        outer.append(myListItem);
    }
}
