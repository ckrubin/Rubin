!function(t){var i={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},s=!1;t(window).bind("load.jcarousel",function(){s=!0}),t.jcarousel=function(s,n){this.options=t.extend({},i,n||{}),this.autoStopped=this.locked=!1,this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null,n&&void 0!==n.rtl||(this.options.rtl="rtl"==(t(s).attr("dir")||t("html").attr("dir")||"").toLowerCase()),this.wh=this.options.vertical?"height":"width",this.lt=this.options.vertical?"top":this.options.rtl?"right":"left";for(var o="",l=s.className.split(" "),e=0;e<l.length;e++)if(-1!=l[e].indexOf("jcarousel-skin")){t(s).removeClass(l[e]),o=l[e];break}"UL"==s.nodeName.toUpperCase()||"OL"==s.nodeName.toUpperCase()?(this.list=t(s),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=t(s),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip")),0===this.clip.size()&&(this.clip=this.list.wrap("<div></div>").parent()),0===this.container.size()&&(this.container=this.clip.wrap("<div></div>").parent()),""!==o&&-1==this.container.parent()[0].className.indexOf("jcarousel-skin")&&this.container.wrap('<div class=" '+o+'"></div>'),this.buttonPrev=t(".jcarousel-prev",this.container),0===this.buttonPrev.size()&&null!==this.options.buttonPrevHTML&&(this.buttonPrev=t(this.options.buttonPrevHTML).appendTo(this.container)),this.buttonPrev.addClass(this.className("jcarousel-prev")),this.buttonNext=t(".jcarousel-next",this.container),0===this.buttonNext.size()&&null!==this.options.buttonNextHTML&&(this.buttonNext=t(this.options.buttonNextHTML).appendTo(this.container)),this.buttonNext.addClass(this.className("jcarousel-next")),this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"}),this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0),this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}),!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var a=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,o=this.list.children("li"),h=this;if(o.size()>0){var r=0,c=this.options.offset;o.each(function(){h.format(this,c++),r+=h.dimension(this,a)}),this.list.css(this.wh,r+100+"px"),n&&void 0!==n.size||(this.options.size=o.size())}this.container.css("display","block"),this.buttonNext.css("display","block"),this.buttonPrev.css("display","block"),this.funcNext=function(){h.next()},this.funcPrev=function(){h.prev()},this.funcResize=function(){h.resizeTimer&&clearTimeout(h.resizeTimer),h.resizeTimer=setTimeout(function(){h.reload()},100)},null!==this.options.initCallback&&this.options.initCallback(this,"init"),this.setup()};var n=t.jcarousel;n.fn=n.prototype={jcarousel:"0.2.8"},n.fn.extend=n.extend=t.extend,n.fn.extend({setup:function(){if(this.prevLast=this.prevFirst=this.last=this.first=null,this.animating=!1,this.tail=this.resizeTimer=this.timer=null,this.inTail=!1,!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var i=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null,this.animate(i,!1),t(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize),null!==this.options.setupCallback&&this.options.setupCallback(this)}},reset:function(){this.list.empty(),this.list.css(this.lt,"0px"),this.list.css(this.wh,"10px"),null!==this.options.initCallback&&this.options.initCallback(this,"reset"),this.setup()},reload:function(){if(null!==this.tail&&this.inTail&&this.list.css(this.lt,n.intval(this.list.css(this.lt))+this.tail),this.tail=null,this.inTail=!1,null!==this.options.reloadCallback&&this.options.reloadCallback(this),null!==this.options.visible){var t=this,i=Math.ceil(this.clipping()/this.options.visible),s=0,o=0;this.list.children("li").each(function(n){s+=t.dimension(this,i),n+1<t.first&&(o=s)}),this.list.css(this.wh,s+"px"),this.list.css(this.lt,-o+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0,this.buttons()},unlock:function(){this.locked=!1,this.buttons()},size:function(t){return void 0!==t&&(this.options.size=t,this.locked||this.buttons()),this.options.size},has:function(t,i){void 0!==i&&i||(i=t),null!==this.options.size&&i>this.options.size&&(i=this.options.size);for(var s=t;i>=s;s++){var n=this.get(s);if(!n.length||n.hasClass("jcarousel-item-placeholder"))return!1}return!0},get:function(i){return t(">.jcarousel-item-"+i,this.list)},add:function(i,s){var o=this.get(i),l=0,e=t(s);if(0===o.length){for(var a,h=n.intval(i),o=this.create(i);;)if(a=this.get(--h),0>=h||a.length){0>=h?this.list.prepend(o):a.after(o);break}}else l=this.dimension(o);return"LI"==e.get(0).nodeName.toUpperCase()?(o.replaceWith(e),o=e):o.empty().append(s),this.format(o.removeClass(this.className("jcarousel-item-placeholder")),i),e=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,l=this.dimension(o,e)-l,i>0&&i<this.first&&this.list.css(this.lt,n.intval(this.list.css(this.lt))-l+"px"),this.list.css(this.wh,n.intval(this.list.css(this.wh))+l+"px"),o},remove:function(t){var i=this.get(t);if(i.length&&!(t>=this.first&&t<=this.last)){var s=this.dimension(i);t<this.first&&this.list.css(this.lt,n.intval(this.list.css(this.lt))+s+"px"),i.remove(),this.list.css(this.wh,n.intval(this.list.css(this.wh))-s+"px")}},next:function(){null===this.tail||this.inTail?this.scroll("both"!=this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||this.last!=this.options.size?this.first+this.options.scroll:1):this.scrollTail(!1)},prev:function(){null!==this.tail&&this.inTail?this.scrollTail(!0):this.scroll("both"!=this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||1!=this.first?this.first-this.options.scroll:this.options.size)},scrollTail:function(t){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var i=n.intval(this.list.css(this.lt)),i=t?i+this.tail:i-this.tail;this.inTail=!t,this.prevFirst=this.first,this.prevLast=this.last,this.animate(i)}},scroll:function(t,i){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(t),i))},pos:function(t,i){var s=n.intval(this.list[0].style[this.lt]);if(this.locked||this.animating)return s;"circular"!=this.options.wrap&&(t=1>t?1:this.options.size&&t>this.options.size?this.options.size:t);for(var o=this.first>t,l="circular"!=this.options.wrap&&this.first<=1?1:this.first,e=o?this.get(l):this.get(this.last),a=o?l:l-1,h=null,r=0,c=!1,u=0;o?--a>=t:++a<t;)h=this.get(a),c=!h.length,0===h.length&&(h=this.create(a).addClass(this.className("jcarousel-item-placeholder")),e[o?"before":"after"](h),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=a||a>this.options.size))&&(e=this.get(this.index(a)),e.length&&(h=this.add(a,e.clone(!0)))),e=h,u=this.dimension(h),c&&(r+=u),null!==this.first&&("circular"==this.options.wrap||a>=1&&(null===this.options.size||a<=this.options.size))&&(s=o?s+u:s-u);for(var l=this.clipping(),p=[],d=0,f=0,e=this.get(t-1),a=t;++d;){if(h=this.get(a),c=!h.length,0===h.length&&(h=this.create(a).addClass(this.className("jcarousel-item-placeholder")),0===e.length?this.list.prepend(h):e[o?"before":"after"](h),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=a||a>this.options.size)&&(e=this.get(this.index(a)),e.length&&(h=this.add(a,e.clone(!0))))),e=h,u=this.dimension(h),0===u)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");if("circular"!=this.options.wrap&&null!==this.options.size&&a>this.options.size?p.push(h):c&&(r+=u),f+=u,f>=l)break;a++}for(h=0;h<p.length;h++)p[h].remove();if(r>0&&(this.list.css(this.wh,this.dimension(this.list)+r+"px"),o&&(s-=r,this.list.css(this.lt,n.intval(this.list.css(this.lt))-r+"px"))),r=t+d-1,"circular"!=this.options.wrap&&this.options.size&&r>this.options.size&&(r=this.options.size),a>r)for(d=0,a=r,f=0;++d&&(h=this.get(a--),h.length)&&(f+=this.dimension(h),!(f>=l)););for(a=r-d+1,"circular"!=this.options.wrap&&1>a&&(a=1),this.inTail&&o&&(s+=this.tail,this.inTail=!1),this.tail=null,"circular"!=this.options.wrap&&r==this.options.size&&r-d+1>=1&&(o=n.intval(this.get(r).css(this.options.vertical?"marginBottom":"marginRight")),f-o>l)&&(this.tail=f-l-o),i&&t===this.options.size&&this.tail&&(s-=this.tail,this.inTail=!0);t-->a;)s+=this.dimension(this.get(t));return this.prevFirst=this.first,this.prevLast=this.last,this.first=a,this.last=r,s},animate:function(i,s){if(!this.locked&&!this.animating){this.animating=!0;var n=this,o=function(){if(n.animating=!1,0===i&&n.list.css(n.lt,0),!n.autoStopped&&("circular"==n.options.wrap||"both"==n.options.wrap||"last"==n.options.wrap||null===n.options.size||n.last<n.options.size||n.last==n.options.size&&null!==n.tail&&!n.inTail)&&n.startAuto(),n.buttons(),n.notify("onAfterAnimation"),"circular"==n.options.wrap&&null!==n.options.size)for(var t=n.prevFirst;t<=n.prevLast;t++)null!==t&&!(t>=n.first&&t<=n.last)&&(1>t||t>n.options.size)&&n.remove(t)};if(this.notify("onBeforeAnimation"),this.options.animation&&s!==!1){var l=this.options.vertical?{top:i}:this.options.rtl?{right:i}:{left:i},o={duration:this.options.animation,easing:this.options.easing,complete:o};t.isFunction(this.options.animationStepCallback)&&(o.step=this.options.animationStepCallback),this.list.animate(l,o)}else this.list.css(this.lt,i+"px"),o()}},startAuto:function(t){if(void 0!==t&&(this.options.auto=t),0===this.options.auto)return this.stopAuto();if(null===this.timer){this.autoStopped=!1;var i=this;this.timer=window.setTimeout(function(){i.next()},1e3*this.options.auto)}},stopAuto:function(){this.pauseAuto(),this.autoStopped=!0},pauseAuto:function(){null!==this.timer&&(window.clearTimeout(this.timer),this.timer=null)},buttons:function(t,i){null!=t||(t=!this.locked&&0!==this.options.size&&(this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||this.last<this.options.size),this.locked||this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||!(this.last>=this.options.size))||(t=null!==this.tail&&!this.inTail),null!=i||(i=!this.locked&&0!==this.options.size&&(this.options.wrap&&"last"!=this.options.wrap||this.first>1),this.locked||this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||1!=this.first)||(i=null!==this.tail&&this.inTail);var s=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),t&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext),this.buttonNext[t?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",t?!1:!0),null!==this.options.buttonNextCallback&&this.buttonNext.data("jcarouselstate")!=t&&this.buttonNext.each(function(){s.options.buttonNextCallback(s,this,t)}).data("jcarouselstate",t)):null!==this.options.buttonNextCallback&&this.buttonNextState!=t&&this.options.buttonNextCallback(s,null,t),this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),i&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[i?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",i?!1:!0),null!==this.options.buttonPrevCallback&&this.buttonPrev.data("jcarouselstate")!=i&&this.buttonPrev.each(function(){s.options.buttonPrevCallback(s,this,i)}).data("jcarouselstate",i)):null!==this.options.buttonPrevCallback&&this.buttonPrevState!=i&&this.options.buttonPrevCallback(s,null,i),this.buttonNextState=t,this.buttonPrevState=i},notify:function(t){var i=null===this.prevFirst?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",t,i),this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",t,i,this.first),this.callback("itemFirstOutCallback",t,i,this.prevFirst)),this.prevLast!==this.last&&(this.callback("itemLastInCallback",t,i,this.last),this.callback("itemLastOutCallback",t,i,this.prevLast)),this.callback("itemVisibleInCallback",t,i,this.first,this.last,this.prevFirst,this.prevLast),this.callback("itemVisibleOutCallback",t,i,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(i,s,n,o,l,e,a){if(null!=this.options[i]&&("object"==typeof this.options[i]||"onAfterAnimation"==s)){var h="object"==typeof this.options[i]?this.options[i][s]:this.options[i];if(t.isFunction(h)){var r=this;if(void 0===o)h(r,n,s);else if(void 0===l)this.get(o).each(function(){h(r,this,o,n,s)});else for(var i=function(t){r.get(t).each(function(){h(r,this,t,n,s)})},c=o;l>=c;c++)null!==c&&!(c>=e&&a>=c)&&i(c)}}},create:function(t){return this.format("<li></li>",t)},format:function(i,s){for(var i=t(i),n=i.get(0).className.split(" "),o=0;o<n.length;o++)-1!=n[o].indexOf("jcarousel-")&&i.removeClass(n[o]);return i.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+s)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",s),i},className:function(t){return t+" "+t+(this.options.vertical?"-vertical":"-horizontal")},dimension:function(i,s){var o=t(i);if(null==s)return this.options.vertical?o.outerHeight(!0)||n.intval(this.options.itemFallbackDimension):o.outerWidth(!0)||n.intval(this.options.itemFallbackDimension);var l=this.options.vertical?s-n.intval(o.css("marginTop"))-n.intval(o.css("marginBottom")):s-n.intval(o.css("marginLeft"))-n.intval(o.css("marginRight"));return t(o).css(this.wh,l+"px"),this.dimension(o)},clipping:function(){return this.options.vertical?this.clip[0].offsetHeight-n.intval(this.clip.css("borderTopWidth"))-n.intval(this.clip.css("borderBottomWidth")):this.clip[0].offsetWidth-n.intval(this.clip.css("borderLeftWidth"))-n.intval(this.clip.css("borderRightWidth"))},index:function(t,i){return null==i&&(i=this.options.size),Math.round(((t-1)/i-Math.floor((t-1)/i))*i)+1}}),n.extend({defaults:function(s){return t.extend(i,s||{})},intval:function(t){return t=parseInt(t,10),isNaN(t)?0:t},windowLoaded:function(){s=!0}}),t.fn.jcarousel=function(i){if("string"==typeof i){var s=t(this).data("jcarousel"),o=Array.prototype.slice.call(arguments,1);return s[i].apply(s,o)}return this.each(function(){var s=t(this).data("jcarousel");s?(i&&t.extend(s.options,i),s.reload()):t(this).data("jcarousel",new n(this,i))})}}(jQuery);