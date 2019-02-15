var current = 1
$(document).ready(function(){
  getCourselist(current++)
})

handlers.loadMore = function() {
  getCourselist(current++)
}

handlers.courseSearch = function() {
  search()
}

function getCourselist(current) {
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
  if(current == 1) {
    $('#courses_list').html('')
  }
  var data = [{id:1,img:'/image/headimg.jpg', title:'时代科技峰会上顶级咖啡', price:'69.00'},{id:1,img:'/image/headimg.jpg', title:'时代科技峰会上顶级咖啡', price:'69.00'},{id:1,img:'/image/headimg.jpg', title:'时代科技峰会上顶级咖啡', price:'69.00'}],
      html = ""
  if(data.length != 0) {
    data.forEach(function(item){
      html +=
      [
      '<a href=/pages/course/course_introduce/course_introduce.html?course_id='+item.id+'>',
      '<li class=\'courses_list_item\'>',
      '  <div class="courses_list_item_img"><img src='+item.img+' alt=""></div>',
      '  <div class="courses_list_item_info">',
      '    <h4>'+item.title+'</h4>',
      '    <p>¥<span class=\'price\'>'+item.price+'</span></p>',
      '  </div>',
      '</li>',
      '</a>'
      ].join("");
    })
    html += '<li id=load_more class=registerHandler handler=loadMore>加载更多</li>'
    $('#load_more').remove()
    $('#courses_list').append(html)
  }
}

function search() {
  var searchKey = $('#search_block input').val()
  console.log(searchKey)
  current = 1
  getCourselist(current++)
}
