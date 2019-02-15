var course_id = 0;
$(document).ready(function(){
  getMediaInfo()
})
handlers.buyCourse = function($this) {
  location.href = '/pages/course/buy_course/buy_course.html?course_id='+course_id
}

handlers.inviteFriend = function($this) {
  console.log('inviteFriend')
}


function getMediaInfo() {
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
  var obj = {course_id:1,mediaType:2, title:'看老骥伏枥可是大家方式地方',isBuy:0, price:'69.00', mediaUrl:'http://www.w3school.com.cn/i/movie.ogg'}
  course_id = obj.course_id

  $('#media_title').text(obj.title)

  if(obj.mediaType == 1) {
    $('#media_block').html('<audio src='+obj.mediaUrl+' controls="controls">浏览器不支持音频</audio>')
  } else {
    $('#media_block').html('<video id="mainvideo"  src='+obj.mediaUrl+' controls="controls" width="100%"></video>')
  }

  if(!obj.isBuy) {
    $('#buy_block').show()
    $('#price_num').text(obj.price)
  } else {
    $('#buy_block').hide()
  }
}
