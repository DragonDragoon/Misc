// ==UserScript==
// @name         FirstRowSports Adblock Bypass
// @version      1.0.0
// @namespace    DragonDragoon
// @description  Bypass Adblock block.
// @author       DragonDragoon
// @include      *firstrow*
// @run-at       document-start
// @grant        none
// @updateURL    
// @downloadURL  
// @icon         data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAPAKAADwCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAACwAADQ4FEWJ7BhVqmQMVapYCFm2WAxhxlwIXZ5YAAw5JAAAAAAAAAAAAAAAAAAAAAAAAABseHh5jV1dXtlFRTMEsMmCqV3X//zxt//8cZP//IHf//y6R//8rjP//AhVmlwAAAAAAAAAAAgICAURERIKGhobbtbW1/8zMzP/HycP/l53E/115+f8uYv//FV///yF5//8ukP//LIz//wMUa5kAAAAAAAAAAFZWViS9vb394+Pj/9/f3//U19f/t5SO/5Zrkf9bdvX/Klr//w9S//8ZZ///IHb//x5x//8CEGOYAAAAAAAAAABQUFAy2tra/Obm5v/Oz8//xMXF/7NiXP+ZT3L/Z37v/zde+/8QSP//DE///xNc//8RWP//AQxcmAAAAAAAAAAFR0hIk6qur/6goaL/qKmp/66trf++a2f/oV5//4CQ6v9Vb/D/KFH6/wtB//8FQv//Bj///wEIV5wAAAAAREVGh4yKif9vTT7/VU1K/3x+fv+ampr/w29q/61lhP+Gi9//fYjp/1Bo6P8zVe//KE/2/x9B8/4BBUt8Pj8/Gnx/gO+DXEv/gR8A/3FOPP9PVVj/lZqa/7mBgP+9aW3/VVFx/3Rggf+qao3/q2KG/5Fdgf8oJ06UAAANC1hZWlmEhIb/ajQb/4YjAP93TTn/TlRX/6arq/++np//smpp/z1BPf9DRUD/bFJM/65iXP+5YVv/JSIbbQAAAAA4ODl9fX5+/1MqGP9ZFAD/aE5C/2tvcf/Fysr/0ba2/9N9ff9WTU3/PEVF/zg/P/9ASEj/hmNj/zEpKXIAAAAAd3d3W3Bxcf81JR3/NhgN/2diYP+oqKn/0dbW/+G0tP/9j4//2H5+/4pgYP9bSkr/RktL/2dPT/8sJCSYAAAABp+fnwyQkJDeUVFR/2dmZv+ioqP/x8fH/9Xa2v/epaX//5eX//qOjv/xhYX/23d3/7toaP+cUlL/JCAg0AAAABMAAAAAqKioTZGSkuaysrP/ysrK/9vb2//7/f3/187O/+Ghof/qjIz/5Xt7/95ycv/camr/r1VV/yMiItkAAAAWAAAAAAAAAACTk5NP5ubm9fT09P/8/Pz/+/v7//X39//l6en/2tHR/9etrf/VlZX/0YKC/7aLi/8rLS20AAAACAAAAAAAAAAAAAAAAJaWljmVlZWCoqKiorW1tcHJycnf2dnZ9ebo6P/s8vL/4+bm/9DQ0Piqra3hHyAgPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpaWkBX19fC4KCgiJ0dHRfT05OeVBQUFl5enotHR0dDAAAAAAAAAAA/8EAAPwAAADgAAAA4AAAAOAAAADAAAAAgAEAAIABAACAAwAAgAMUQoABKsKAAQs/wAHRPuAB0b7wAws///8AAA==
// ==/UserScript==

'use strict';

(function() {
  var d, db, h, $, $$;
  d = document;
  db = document.body;
  h = document.getElementsByTagName('head') [0];
  
  $ = function(s, p) {
    if (!p || p == null) {
      p = d;
    }
    return p.querySelector(s);
  };
  
  $.destroy = function(s) {
    return s.parentNode.removeChild(s);
  };
  
  $.time = function(t, c, l) {
    if (c == false) {
      return clearInterval(t);
    } else {
      if (l == true) {
        return setInterval(function() {
          c();
        }, t);
      } else {
        return setTimeout(function() {
          c();
        }, t);
      }
    }
  };
  
  $.on = function(el, type, handler) {
    return el.addEventListener(type, handler, false);
  };
  
  $.off = function(el, type, handler) {
    return el.removeEventListener(type, handler, false);
  };
  
  $.ready = function(fc) {
    var cb;
    if (d.readyState !== 'loading') {
      fc();
      return ;
    }
    cb = function () {
      $.off(d, 'DOMContentLoaded', cb);
      return fc();
    };
    return $.on(d, 'DOMContentLoaded', cb);
  };
  
  $.ready(function() {
	  if (!$('#adblockplus')) {
	    $.time(1000, function() {
	      if ($('#adblockplus')) {
	        $.destroy($('#adblockplus'));
	      }
	    }, false);
	  } else {
	    $.destroy($('#adblockplus'));
	  }
  });
}).call(this);
