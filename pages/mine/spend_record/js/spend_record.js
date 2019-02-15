$(document).ready(function(){
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
  var data = [{spend_go:'去向1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'},{spend_go:'去向1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'},{spend_go:'去向1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'}],
      html = ''
  data.forEach(function(item,index){
      html +=
      ['<li class=\'spend_record_list_item\'>',
      '  <span class="spend_record_nav_item">'+item.spend_go+'</span>',
      '  <span class="spend_record_nav_item">'+item.deal_type+'</span>',
      '  <span class="spend_record_nav_item">'+item.time+'</span>',
      '  <span class="spend_record_nav_item">'+item.amount+'</span>',
      '</li>'].join("");
  })
  $('#spend_record_list').html(html)
})
