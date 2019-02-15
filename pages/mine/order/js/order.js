$(document).ready(function(){
  $($('.order_tab_item')[0]).trigger('tap')
})

handlers.cancelOrder = function($this) {
  console.log('cancelOrder')
}

handlers.changeOrderTab = function($this){
  console.log('fsdf')
  $('.order_tab_item').removeClass('active')
  $( $('.order_tab_item')[$this.index()] ).addClass('active')
  var index = $this.index(),
      html = ''
  console.log('index',index)

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
  var data = [{id:1,img:'/image/headimg.jpg', order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'待付款', order_price:'69.90'},{id:1, img:'/image/headimg.jpg', order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'已付款', order_price:'69.90'},{id:1,img:'/image/headimg.jpg', order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'待付款', order_price:'69.90'}]
  data.forEach(function(item, index){
    var hidden = (item.order_paystate == '已付款' ? 'hidden':'')
    html +=
    ['<div class=\'order_content_item\'>',
    '        <div class=\'order_content_item_info\'>',
    '          <div class=\'order_content_img\'>',
    '            <img src='+item.img+' alt="">',
    '          </div>',
    '          <div class=\'order_content_title\'>',
    '            <h4>'+item.order_head+'</h4>',
    '            <p>购买'+item.order_type+'</p>',
    '            <p>'+item.order_date+'</p>',
    '            <span class=\'order_paystate\'>'+item.order_paystate+'</span>',
    '            <span class=\'order_price\'>¥'+item.order_price+'</span>',
    '          </div>',
    '        </div>',
    '        <div class=\'order_content_item_control\''+hidden+'>',
    '          <div class="order_content_item_but registerHandler" handler=cancelOrder>取消订单</div>',
    '          <div class="order_content_item_but"><a href=/pages/course/buy_course/buy_course.html?course_id='+item.id+'>付款</a></div>',
    '        </div>',
    '      </div>'].join("");
  })
  $('#order_content').html(html)
}
