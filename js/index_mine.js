getUserInfo()

handlers.mineShow = function() {
  console.log('mineshow')
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
      userName = 'Gargett',
      userId = 'Hjf123ff'
  $('.mine_user_info_img img').attr('src', userImg)
  $('.mine_user_info_user').text(userName)
  $('.mine_user_info_userid').text(userId)
}
