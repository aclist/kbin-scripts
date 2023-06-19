// ==UserScript==
// @name                  kbin-unsquash
// @namespace      https://github.com/aclist/
// @description      unsquash inline images in comments
// @author                aclist
// @version               0.0.6
// @match                 https://kbin.social/*
// @license                MIT
// @downloadURL https://github.com/aclist/kbin-scripts/raw/main/unsquash.user.js
// @updateURL       https://github.com/aclist/kbin-scripts/raw/main/unsquash.user.js
// ==/UserScript==

const inlineSelector = 'footer figure a.thumb img';
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
          selector = fixedSelector;
     } else {
          selector = inlineSelector;
     }
  const items = document.querySelectorAll(selector);
  items.forEach((item) => {
        updateImg(item,method);
  });
}

/*both fixed size and inline images can exist on profile pages*/
const imgTypes = ["inline", "fixed"];
for (let i = 0; i < imgTypes.length; i++) {
    checkItems(imgTypes[i]);
}
