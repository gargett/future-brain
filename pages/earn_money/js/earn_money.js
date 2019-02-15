$(document).ready(function(){
  getUserInfo()
  $($('.tuiguang_block_nav_item')[0]).trigger('tap')
})
handlers.toUpgrade = function() {
  console.log('toUpgrade')
}
handlers.changeTab = function($this) {
  $('.tuiguang_block_nav_item').removeClass('active')
  $this.addClass('active')

  var index = $this.index()
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
  var data = [{id:1,img:'/image/headimg.jpg', title:"趣味魔方啊啊啊啊啊啊啊啊", price:'0.00', yongjin:'18.00'}, {id:1,img:'/image/headimg.jpg', title:"趣味魔方啊啊啊啊啊啊啊啊", price:'0.00', yongjin:'18.00'}, {id:1,img:'/image/headimg.jpg', title:"趣味魔方啊啊啊啊啊啊啊啊", price:'0.00', yongjin:'18.00'}]
  var html = ""
  data.forEach(function(item,index){
    html +=
    ['<li class="tuiguang_block_list_item" data-id='+item.id+'>',
    '  <div class="tuiguang_item_img"><img src='+item.img+'></div>',
    '  <div class="tuiguang_item_info">',
    '    <h4>'+item.title+'</h4>',
    '    <p class=\'price\'>¥ '+item.price+'</p>',
    '    <p class=\'yongjin\'>预计佣金：¥ '+item.yongjin+'</p>',
    '  </div>',
    '  <span class="tuiguang_item_but">推广</span>',
    '</li>'].join("");
  })
  $('#tuiguang_block_list').html(html)
}

function getUserInfo() {
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
  var userImg = '/image/head.jpg',
      isVip = false,
      userName = 'Gargett'
  $('.user_img img').attr('src',userImg)
  $('.user_name h4').text(userName)
  isVip?$('.user_name p').hide():$('.user_name p').show()
}
