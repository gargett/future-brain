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
  var data = [{income_source:'来源1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'},{income_source:'来源1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'},{income_source:'来源1', deal_type:'方式1', time:'2018-10-14', amount:'12.00'}],
      html = ''
  data.forEach(function(item,index){
      html +=
      ['<li class=\'income_detail_list_item\'>',
      '  <span class="income_detail_nav_item">'+item.income_source+'</span>',
      '  <span class="income_detail_nav_item">'+item.deal_type+'</span>',
      '  <span class="income_detail_nav_item">'+item.time+'</span>',
      '  <span class="income_detail_nav_item">'+item.amount+'</span>',
      '</li>'].join("");
  })
  $('#income_detail_list').html(html)
})
