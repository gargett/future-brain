$(document).ready(function(){
  $($('.order_tab_item')[0]).trigger('tap')
})

handlers.changeOrderTab = function($this){
  console.log('fsdf')
  $('.order_tab_item').removeClass('active')
  $( $('.order_tab_item')[$this.index()] ).addClass('active')
  var index = $this.index(),
      html = ''
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
  var data = [{id:1,img:'', order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'待付款', order_price:'69.90'},{id:1, order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'待付款', order_price:'69.90'},{id:1, order_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', order_type:'栏目', order_date:'2018-08-12 10:24:07', order_paystate:'待付款', order_price:'69.90'}]
  data.forEach(function(item, index){
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
    '        <div class=\'order_content_item_control\'>',
    '          <div class="order_content_item_but">取消订单</div>',
    '          <div class="order_content_item_but">付款</div>',
    '        </div>',
    '      </div>'].join("");
  })
  $('#order_content').html(html)
}
