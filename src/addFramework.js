if(!$add)var $add={version:{},auto:{disabled:false}};
$add.version.Framework = "1.0.0";
$add.Framework = {
  cookie: {
    get: function(name){
      
    },
    set: function(name, value, expirationDays){
      
    },
    remove: function(name){
      
    },
    exists: function(name){
      
    }
  }
};
$add.auto.Framework = function(){
  if(!$add.auto.disabled){
    
    $("header.fixed").parent().addClass("fixed-header-parent");
    $("header").prepend("<button class='header-mobile-menu-btn fa fa-bars'></button>");
    $(".flex-col, flex-col").parent().addClass("flex-col-parent");
    $(".flex-col.always, flex-col.always").parent().addClass("flex-col-parent-always");
    $(".flex-row, flex-row").parent().addClass("flex-row-parent");
    $("li > a").parent().addClass("link-parent");
    $(".header-mobile-menu-btn").on("click", function(e){
      $(e.target).parent().toggleClass("mobile-menu-open");
      $("body").toggleClass("mobile-menu-open");
    });
    $("table").each(function(i,el){
      var $table = $(el);
      var fields = $table.find("thead td").map(function(i,el){
        var $field = $(el);
        if($field.data("label"))
          return $field.data("label");
        else
          return $field.html();
      });
      $table.find("tbody tr").each(function(i, el){
        $(el).find("td").each(function(i, el){
          console.log(i);
          $(el).data("field", fields[i]).attr("data-field", fields[i]);
        });
      });
    });
    $("img").wrap("<div class='imgWrapper'></div>");
  }
};
$(function(){
  $add.auto.Framework();
})