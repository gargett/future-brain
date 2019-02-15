window.handlers = {}
$(document).on('tap','.registerHandler',function() {
  console.log('han',$(this).attr('handler'))
  var handler = $(this).attr('handler')
  handlers[handler]($(this))
})
handlers.changeTab = function($this) {
  $('[handler=changeTab]').removeClass('active')
  $this.addClass('active')
  
  var pageto = $this.attr('pageto')
  $('.tab').hide()
  $('#'+pageto+'Tab').show()
  handlers[pageto+'Show']()
}
handlers.toPage = function($this) {
  console.log('topaog')
  var url = $this.attr('data-url')
  location.href = url
}
handlers.toBack = function() {
  history.back(-1)
}
//处理后退的tab转换
window.addEventListener("popstate", function (e) {
  var pageto = window.location.hash.slice(1)
  $('.tab').hide()
  $('#'+pageto+'Tab').show()
}, false);
