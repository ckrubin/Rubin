!function(t){t.fn.quicksand=function(e,i){var s={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:!0,enhancement:function(t){},selector:"> *",dx:0,dy:0};t.extend(s,i),(t.browser.msie||"undefined"==typeof t.fn.scale)&&(s.useScaling=!1);var a;return a="function"==typeof arguments[1]?arguments[1]:arguments[2],this.each(function(i){var o,n,r=[],l=t(e).clone(),f=t(this),p=t(this).css("height"),h=!1,c=t(f).offset(),u=[],g=t(this).find(s.selector);if(t.browser.msie&&parseInt(t.browser.version)<7)return void f.html("").append(l);var y=function(){var t=f.find("> *");t.remove(),f.prepend(w.find("> *")),h&&f.css("height",n),s.enhancement(f),"function"==typeof a&&a.call(this)},m=f.offsetParent(),b=m.offset();"relative"==m.css("position")?"body"==m.get(0).nodeName.toLowerCase()||(b.top+=parseFloat(m.css("border-top-width"))||0,b.left+=parseFloat(m.css("border-left-width"))||0):(b.top-=parseFloat(m.css("border-top-width"))||0,b.left-=parseFloat(m.css("border-left-width"))||0,b.top-=parseFloat(m.css("margin-top"))||0,b.left-=parseFloat(m.css("margin-left"))||0),isNaN(b.left)&&(b.left=0),isNaN(b.top)&&(b.top=0),b.left-=s.dx,b.top-=s.dy,f.css("height",t(this).height()),g.each(function(e){u[e]=t(this).offset()}),t(this).stop();var v=0,x=0;g.each(function(e){t(this).stop();var i=t(this).get(0);"absolute"==i.style.position?(v=-s.dx,x=-s.dy):(v=s.dx,x=s.dy),i.style.position="absolute",i.style.margin="0",i.style.top=u[e].top-parseFloat(i.style.marginTop)-b.top+x+"px",i.style.left=u[e].left-parseFloat(i.style.marginLeft)-b.left+v+"px"});var w=t(f).clone(),F=w.get(0);F.innerHTML="",F.setAttribute("id",""),F.style.height="auto",F.style.width=f.width()+"px",w.append(l),w.insertBefore(f),w.css("opacity",0),F.style.zIndex=-1,F.style.margin="0",F.style.position="absolute",F.style.top=c.top-b.top+"px",F.style.left=c.left-b.left+"px","dynamic"===s.adjustHeight?f.animate({height:w.height()},s.duration,s.easing):"auto"===s.adjustHeight&&(n=w.height(),parseFloat(p)<parseFloat(n)?f.css("height",n):h=!0),g.each(function(e){var i=[];"function"==typeof s.attribute?(o=s.attribute(t(this)),l.each(function(){return s.attribute(this)==o?(i=t(this),!1):void 0})):i=l.filter("["+s.attribute+"="+t(this).attr(s.attribute)+"]"),i.length?s.useScaling?r.push({element:t(this),animation:{top:i.offset().top-b.top,left:i.offset().left-b.left,opacity:1,scale:"1.0"}}):r.push({element:t(this),animation:{top:i.offset().top-b.top,left:i.offset().left-b.left,opacity:1}}):s.useScaling?r.push({element:t(this),animation:{opacity:"0.0",scale:"0.0"}}):r.push({element:t(this),animation:{opacity:"0.0"}})}),l.each(function(e){var i=[],a=[];"function"==typeof s.attribute?(o=s.attribute(t(this)),g.each(function(){return s.attribute(this)==o?(i=t(this),!1):void 0}),l.each(function(){return s.attribute(this)==o?(a=t(this),!1):void 0})):(i=g.filter("["+s.attribute+"="+t(this).attr(s.attribute)+"]"),a=l.filter("["+s.attribute+"="+t(this).attr(s.attribute)+"]"));var n;if(0===i.length){n=s.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"},d=a.clone();var p=d.get(0);p.style.position="absolute",p.style.margin="0",p.style.top=a.offset().top-b.top+"px",p.style.left=a.offset().left-b.left+"px",d.css("opacity",0),s.useScaling&&d.css("transform","scale(0.0)"),d.appendTo(f),r.push({element:t(d),animation:n})}}),w.remove(),s.enhancement(f);var S=r.length,N=0;for(i=0;i<r.length;i++)r[i].element.animate(r[i].animation,s.duration,s.easing,function(){N++,N===S&&y()})})}}(jQuery);