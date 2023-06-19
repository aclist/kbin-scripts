// ==UserScript==
// @name                  kbin-dropdown
// @namespace      https://github.com/aclist/kbin-scripts/
// @description      make dropdown on profile page
// @author                aclist
// @version               0.0.2
// @match                 https://kbin.social/u/*
// @require               http://code.jquery.com/jquery-3.4.1.min.js
// @license               MIT
// @downloadURL https://github.com/aclist/kbin-scripts/raw/main/dropdown.user.js
// @updateURL      https://github.com/aclist/kbin-scripts/raw/main/dropdown.user.js
// ==/UserScript==

/* globals $ */

function addOption(item){
    var text = item.innerText;
    var val = text.substring(0, text.indexOf(' '));
    var option = document.createElement("option");
     option.setAttribute("value", val);
     option.text = text;
     selectList.appendChild(option);
}

function buildDropdown(selector) {
    var active = document.querySelector('.options__main li a.active')
    addOption(active);
    const items = document.querySelectorAll(selector);
      items.forEach((item) => {
          addOption(item);
      });
}

//inject select menu//
var leftDiv = document.querySelector(".options__title");
var selector = '.options__main li a:not(.active)'
var selectList = document.createElement("select");
selectList.setAttribute("id", "dropdown-select");
selectList.style.cssText += 'margin-left: 10px;height:fit-content;font-size:0.8em;padding:5px';
leftDiv.appendChild(selectList);
buildDropdown(selector);

// clean up old elements //
var horizontalScroll = document.querySelector('.options__main');
horizontalScroll.parentNode.removeChild(horizontalScroll)
var scrollArrows = document.querySelector('.scroll');
scrollArrows.parentNode.removeChild(scrollArrows);

// event listener //
$(document).on('change','#dropdown-select',function(){
    var page = $('#dropdown-select').val();
    var baseUrl = window.location.href;
    var urlArr = baseUrl.split("/");
    var username = urlArr[4];
    const pref = 'https://kbin.social/u/'
    var finalUrl = pref + username + "/" + page;
    console.log(finalUrl);
    window.location = finalUrl;
})
