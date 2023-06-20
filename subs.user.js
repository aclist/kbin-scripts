// ==UserScript==
// @name         kbin-subs
// @namespace    https://github.com/aclist
// @version      0.1
// @description  put subs on top page
// @author       aclist
// @match        https://kbin.social/*
// @license               MIT
// @downloadURL https://github.com/aclist/kbin-scripts/raw/main/subs.user.js
// @updateURL      https://github.com/aclist/kbin-scripts/raw/main/subs.user.js
// ==/UserScript==

var user = document.querySelector('.login');
var split = user.href.split("/");
var username = split[4];
var subLink = 'https://kbin.social/u/' + username + '/subscriptions'

const myListItem = document.createElement('li');
const mySubsLink = document.createElement('a');
mySubsLink.setAttribute('href', subLink);
mySubsLink.innerText = 'My subs';
mySubsLink.className = 'subs-nav';
myListItem.append(mySubsLink);

var nav = document.querySelector('.head-nav__menu');
var mags = document.querySelector('[href="/magazines"]');
nav.appendChild(myListItem);



