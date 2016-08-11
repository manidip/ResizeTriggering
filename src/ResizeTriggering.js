(function($){
  var $listening = $(), lastSize = [], timerID = null;
  $.ResizeTriggeringInterval = 16;
  $.fn.resizeTriggering = function(){
    $listening = $listening.add(this);
    checkForResize();
    return this;
  };
  function checkForResize(){
    clearTimeout(timerID);
    $listening.each(function(i, el){
      var $el = $(el);
      var size = {
        width: $el.width(),
        height: $el.height()
      };
      var last = lastSize[i];
      if(
        !last ||
        last.width != size.width ||
        last.height != size.height
      ){
        last = size;
        $el.trigger("resize");
      }
    });
    setTimeout(checkForResize, $.ResizeTriggeringInterval);
  };
  
})(jQuery);
