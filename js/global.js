window.handlers = {}
$(document).ready(function(){
  $(document).on('tap','.registerHandler',function() {
    var handler = $(this).attr('handler')
    handlers[handler]($(this))
  })
});

handlers.toBack = function() {
  history.back(-1)
}

handlers.guanZhu = function() {
  var html = '<div id="guanzhu_mask"><div id="guanzhu_img"><span id="close_guanzhu" class=registerHandler handler=closeGuanzhu></span></div></div>'
  $('body').append(html)
}

handlers.upgradeVip = function() {
  console.log('upgradeVip')
}

handlers.closeGuanzhu = function() {
  $('#guanzhu_mask').remove()
}

$.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
};
