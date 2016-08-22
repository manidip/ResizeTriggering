jQuery.ResizeTriggering = (function($){
  function ResizeTriggering(selector, direction){
    ResizeTriggering.start(selector, direction);
    return this;
  };
  ResizeTriggering._interval = 16;
  Object.defineProperty(ResizeTriggering, "interval", {
    get: function(){
      return ResizeTriggering._interval;
    },
    set: function(ms){
      clearInterval(ResizeTriggering.intervalID);
      ResizeTriggering._interval = ms;
      ResizeTriggering.intervalID = window.setInterval(ResizeTriggering._check, ResizeTriggering._interval);
    }
  });
  ResizeTriggering._elements = $();
  ResizeTriggering._directions = [];
  ResizeTriggering._sizes = [];
  ResizeTriggering._check = function(){
    ResizeTriggering._elements.each(function(i, el){
      var $el = $(el);
      var s = {
        w: $el.width(),
        h: $el.height()
      };
      var d = ResizeTriggering._directions[i];
      var o = ResizeTriggering._sizes[i];
      if(
        (
          d == "both" &&
          (
            o.w != s.w ||
            o.h != s.h
          )
        ) ||
        (
          d == "width" &&
          o.w != s.w
        ) ||
        (
          d == "height" &&
          o.h != s.h
        )
      ) $el.trigger("resize");
    });
  };
  ResizeTriggering.intervalID = window.setInterval(ResizeTriggering._check, ResizeTriggering._interval);
  ResizeTriggering.start = function(selector, direction){
    var $el = $(selector);
    ResizeTriggering._elements = ResizeTriggering._elements.add($el);
    ResizeTriggering._directions.push(direction || "both");
    ResizeTriggering._sizes.push({
      w: $el.width(),
      h: $el.height()
    });
  };
  ResizeTriggering.stop = function(selector){
    var index = -1;
    var $el = $(selector);
    ResizeTriggering._elements.each(function(i, el){
      if($(el) == $el){
        index = i;
      }
    });
    if(index > -1){
      
    }
  };
  ResizeTriggering.version = "2.0.0";
  $.fn.resizeTriggering = function(direction){
    ResizeTriggering.start(this, direction);
    return this;
  };
  return ResizeTriggering;
})(jQuery);
