$(document).ready(function(){
  getCourseDetail()
})

handlers.changeTab = function($this) {
  var index = $this.index()
  $('.course_intro_change').removeClass('active')
  $($this).addClass('active')
  if (index == 0) {
    $('#course_introduce_tab').show()
    $('#course_catalog_tab').hide()
  } else {
    $('#course_catalog_tab').show()
    $('#course_introduce_tab').hide()
  }
}

handlers.buyCourse = function($this) {
  var course_id = /course_id=(\d*)/.exec(location.href)[1]
  location.href  = '/pages/course/buy_course/buy_course.html?course_id='+course_id
}

handlers.inviteFriend = function($this) {
  console.log('inviteFriend')
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
  var bannerimg = '/image/banner.jpeg'
  $('#banner img').attr('src', bannerimg)

  var price = '69.00'
  $('#buy_block #price_num').text(price)

  var data = [{id:1, img:'/image/headimg.jpg',title:'茶馆闲聊 - 完成和朋友喝茶对话的任务', watch_num:0, other_num:0},{id:1, img:'/image/headimg.jpg',title:'茶馆闲聊 - 完成和朋友喝茶对话的任务', watch_num:0, other_num:0},{id:1, img:'/image/headimg.jpg',title:'茶馆闲聊 - 完成和朋友喝茶对话的任务', watch_num:0, other_num:0}],
      html = ''
  data.forEach(function(item){
    html +=
    [
    '<a href=/pages/course/course_detail/course_detail.html?id='+item.id+'>',
    '<li class="course_catalog_item" data-id='+item.id+'>',
    '  <div class="course_catalog_item_img">',
    '    <img src='+item.img+' alt="">',
    '  </div>',
    '  <div class=\'course_catalog_item_info\'>',
    '    <h4>'+item.title+'</h4>',
    '    <span><span id="watch_num">'+item.watch_num+'</span></span> <span><span id="other_num">'+item.other_num+'</span></span>',
    '  </div>',
    '</li>',
    '</a>'
    ].join("");
  })
  $('#course_catalog_tab ul').html(html)
}
