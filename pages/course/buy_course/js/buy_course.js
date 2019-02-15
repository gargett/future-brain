var price = 0;
$(document).ready(function(){
  getCourseDetail()
})

handlers.selectPayType = function($this) {
  $('.buy_platform_item').removeClass('active')
  $this.addClass('active')
}

handlers.buy = function($this) {
  var buyType = $('.buy_platform_item.active').index()
  console.log('buyType',buyType)
  if(buyType == 0) {
    //微信支付
  } else {
    console.log('price',price)
    //账户支付
  }
}

function getCourseDetail() {
  // $.ajax({
  //   url:'',
  //   type:'get',
  //   dataType:'json',
  //   data:{},
  //   success:function(res){
  //
  //   },
  //   error:function(){
  //
  //   }
  // })
  var priceStr = '69.00'
  price = Number(priceStr)
  var title = '史蒂夫就是短款礼服是大方神答复'
  $('.course_price').text(priceStr)
  var course_info_img = '/image/headimg.jpg'
  $('#course_info_img img').attr('src', course_info_img)
}
