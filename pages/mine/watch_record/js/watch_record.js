$(document).ready(function(){
  $($('.record_tab_item')[0]).trigger('tap')
})

handlers.changeRecordTab = function($this){
  console.log('fsdf')
  $('.record_tab_item').removeClass('active')
  $( $('.record_tab_item')[$this.index()] ).addClass('active')
  var index = $this.index(),    //index区分课程还是栏目
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
  var data = [{id:1,img:'/image/headimg.jpg', record_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', record_teacher:'未知', record_watchnum:1793},{id:1,img:'/image/headimg.jpg', record_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', record_teacher:'未知', record_watchnum:1793},{id:1,img:'/image/headimg.jpg', record_head:'【VIP5折】史蒂夫克里斯朵夫凉快舒服 第1季', record_teacher:'未知', record_watchnum:1793}]
  data.forEach(function(item, index){
    html +=
    ['<div class=\'record_content_item\'>',
    '        <div class=\'record_content_item_info\'>',
    '          <div class=\'record_content_img\'>',
    '            <img src='+item.img+' alt="">',
    '          </div>',
    '          <div class=\'record_content_title\'>',
    '            <h4>'+item.record_head+'</h4>',
    '            <p>讲师：'+item.record_teacher+'</p>',
    '            <p>观看次数：'+item.record_watchnum+'次</p>',
    '          </div>',
    '        </div>',
    '      </div>'].join("");
  })
  $('#record_content').html(html)
}
