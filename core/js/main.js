// var script = document.createElement('script');
// script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

class Config {
  constructor(url, enabled) {
    this.url = url;
    this.enabled = enabled;
  }
}

function GetUrl() {
  return document.url;
}

function GetEnabled() {
  return true;
}

// var imgClass = "ext-overlay-img"
// var imgSelector = "." + imgClass;

// var btnClass = "ext-overlay-action"
// var btnSelector = "." + btnClass;

// $("img, video").each(function () {
//   if ((($(this).height() * $(this).width()) > 40000) &&
//     window.location.pathname.slice(-3) !== 'png' &&
//     window.location.pathname.slice(-3) !== 'jpg' &&
//     window.location.pathname.slice(-4) !== 'jpeg') {
//     var src = $(this).attr('src');
//     var actionImgUrl = chrome.runtime.getURL("images/baseline_image_search_black_24.png");

//     $(this).addClass(imgClass);
//     $(this).wrap("<div class='ext-overlay-wrapper'></div>");
//     $(this).after($("<a type='button' class='" + btnClass + "' href='" + src + "' target='_blank'><img class='ext-overlay-action-img' src='" + actionImgUrl + "' alt='download' /></a>"));
//   }
// });

// $(imgSelector).on("mouseover", function () {

//   // if (!$(imgSelector).next().hasClass(btnClass)) {
//   //   $(imgSelector).after("<a class='" + btnClass + "' href='" + src + "' target='_blank' />");
//   // }
// });

// $(imgSelector).mouseover(function () {
//   $(this).next(btnSelector).show();
// });

  $("img").each(function(){
    if ((($(this).height() * $(this).width()) > 40000) &&
    window.location.pathname.slice(-3) !== 'png' &&
    window.location.pathname.slice(-3) !== 'jpg' &&
    window.location.pathname.slice(-4) !== 'jpeg') {
    //Wrap the image with an overlay
    $(this).wrap("<div class='description_overlay'></div>");
	
    //Cache description overlay object
    var o = $(this).parent(".description_overlay");
	
    //Append the description to the overlay
    o.append("<div class='description'><div class='description_content'></div></div>");
	
    //Align the description with the image
    o.find(".description").css("opacity", 0);
    o.find(".description").css("width", $(this).width());
    o.find(".description").css("display", "block");
    o.find(".description").css("text-align", "center");

    //Set the description from the img alt attribute
    o.find(".description_content").html("Click to download");
	
    //Apply the hover effects
    o.mouseover(function(){
      o.find(".description").stop().fadeTo(500, 0.7);
    });

    o.mouseout(function(){
      o.find(".description").stop().fadeTo(500, 0);
    });}
  });

// $(imgSelector).mouseleave(function () {
//   $(this).next(btnSelector).animate({ opacity: 0 }, 500);
// });

// $(imgSelector).on("mouseleave", function () {

//   // if (!$(imgSelector).next().hasClass(btnClass)) {
//   //   $(imgSelector).after("<a class='" + btnClass + "' href='" + src + "' target='_blank' />");
//   // }
// });


// var OperatorEnum = {
//   Gt: 1,
//   Eq:2,
//   Lt:3,
//   Append : 11,
// };

// class Attribute {
//   constructor(name, value, operatorEnum) {
//     this.name = name;
//     this.value = value;
//     this.operatorEnum = operatorEnum;
//   }
// }

// class ElementFilter {
//   constructor(attribute) {
//     this.attribute = attribute;
//   }
// }

// class Elm {
//   constructor(type, elementFilter = null) {
//     this.type = type;
//     this.elementFilter = elementFilter;
//   }
// }

// class Processor {
//   constructor(config, elementSelector, elementReplacement) {
//     this.config = config;
//     this.elementSelector = elementSelector;
//     this.elementReplacement = elementReplacement;
//   }

//   processReplacements(elementSelector, elementReplacement) {

//   }
// }



//jq = jQuery.noConflict( true );
// var config = new Config(GetUrl(), GetEnabled());
// var processor = new Processor(config);
// var filterSelect = new ElementFilter(new Attribute("width", "200px", OperatorEnum.Gt))
// var selectorElm = new Elm(type = "img", filterSelect);
// var attr = new Attribute("class", "imageHoundOverlay", OperatorEnum.Append);

// processor.processReplacements(selectorElm, selectorElm,  )




