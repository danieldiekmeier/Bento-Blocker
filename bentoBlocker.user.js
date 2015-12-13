// ==UserScript==
// @name           Bento Blocker
// @author         Daniel Diekmeier
// @description    Blocks Teasers to Bento on Spiegel Online
// @include        http://www.spiegel.de/*
// @version        1.0
// ==/UserScript==

var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})}

loadAndExecute("https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js", function() {
  var $link = $('a[href*="bento.de')
  $link.parents('.teaser').hide()
  $link.parents('.asset-box').hide()
  $link.parents('.ressort-teaser-box-top').hide()
  $link.hide()

  $link = $('[title*="bento"]')
  $link.parents('.asset-box').hide()
  $link.hide()
})
