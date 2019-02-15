handlers.indexShow = function() {
  loadCourses()
}


function loadCourses() {
  // $.ajax({
  //   url:'',
  //   type:'get',
  //   dataType:'json',
  //   data:{},
  //   success:function(res){
  //      renderCourses(res.data)
  //   },
  //   error:function(){
  //
  //   }
  // })
  var data = [{img:'/image/headimg.jpg',title:'【VIP5折】零基础直达流利口语 第1季',price:'69.00',buyer:149, id:4},{img:'/image/headimg.jpg',title:'【VIP5折】零基础直达流利口语 第1季',price:'69.00',buyer:149, id:4},{img:'/image/headimg.jpg',title:'【VIP5折】零基础直达流利口语 第1季',price:'69.00',buyer:149, id:4},{img:'/image/headimg.jpg',title:'【VIP5折】零基础直达流利口语 第1季',price:'69.00',buyer:149, id:4}]
  renderCourses(data)
}
function renderCourses(data) {
  var html = ""
  data.forEach(function(item, index){
    html +=
    [
      '<a href=/pages/course/course_introduce/course_introduce.html?course_id='+item.id+'>',
      '<li class="courses_list_item">',
      '  <div class="courses_list_item_img"><img src='+item.img+' alt='+item.title+'></div>',
      '  <div class="courses_list_item_title">'+item.title+'</div>',
      '  <div>',
      '    <span class="courses_list_item_price"><span>¥</span><span class="courses_list_item_price_num">'+item.price+'</span></span>',
      '    <span class="courses_list_item_buyer"><span class="courses_list_item_buyer_num">'+item.buyer+'</span>人购买</span>',
      '  </div>',
      '</li>',
      '</a>'
    ].join("");
  })
  console.log('html',html)
  $('#courses_list').html(html)
}
