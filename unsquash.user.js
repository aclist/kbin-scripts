// ==UserScript==
// @name          kbin-unsquash
// @namespace     https://github.com/aclist/
// @description   unsquash inline images in comments
// @author        aclist
// @version       0.0.5
// @include       https://kbin.social/*
// @license       GNU-V3.0
// ==/UserScript==

const inlineSelector = 'figure a.thumb img';
const fixedSelector = 'article figure a img';

function updateImg(item, method) {
   var style
   if (method == "fixed") {
    style = 'object-fit: cover !important';
   } else {
       var p = item.parentElement.href;
        item.src = p;
        style = 'max-width: 50% !important';
   }
    item.style.cssText += style;
}

function checkItems(method) {
    var selector
    if (method == "fixed") {
          selector = fixedSelector
      } else {
          selector = inlineSelector;
      }
  const items = document.querySelectorAll(selector);
  items.forEach((item) => {
        updateImg(item,method);
  });
}

/*both fixed size and inline images can exist on profile pages*/
checkItems("inline")
checkItems("fixed")
