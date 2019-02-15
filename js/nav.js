getRole()
function getRole() {
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
  var role = '服务商'
  if(role == '服务商') {
    $('#agent_header').text('代理商')
    $('#tab_nav a:nth-of-type(4)').hide()
  }
}
