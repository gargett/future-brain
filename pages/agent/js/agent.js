getRole()
// 初始化 Framework7
var myApp = new Framework7();

// 初始化省市区
var province = getProvince(regions),
    city = getCity(regions, '北京市'),
    area = getArea(regions, '北京市', '北京市');

// 保存 picker 选择的省
var provinceSelect = '';

// 省市区联动 / Framework7 picker
var pickerLocation = myApp.picker({
    input: '#location_be_agent',
    rotateEffect: true,
    toolbarTemplate: '<div class="toolbar">\
                        <div class="toolbar-inner">\
                            <div class="left">\
                                <a href="#" class="link close-picker">取消</a>\
                            </div>\
                            <div class="right">\
                                <a href="#" class="link close-picker">完成</a>\
                            </div>\
                        </div>\
                    </div>',
    cols: [{
            cssClass: 'f-s-14',
            width: '33.33%',
            textAlign: 'left',
            values: province,
            onChange: function(picker, province) {
                if (picker.cols[1].replaceValues) {
                    provinceSelect = province;
                    city = getCity(regions, province);
                    area = getArea(regions, province, city[0]);
                    picker.cols[1].replaceValues(city);
                    picker.cols[2].replaceValues(area);
                }
            }
        },
        {
            cssClass: 'f-s-14',
            width: '33.33%',
            textAlign: 'center',
            values: city,
            onChange: function(picker, city) {
                if (picker.cols[2].replaceValues) {
                    area = getArea(regions, provinceSelect, city);
                    picker.cols[2].replaceValues(area);
                }
            }
        },
        {
            cssClass: 'f-s-14',
            width: '33.33%',
            textAlign: 'right',
            values: area,
        }
    ]
});

var pickerDevice = myApp.picker({
input: '#agentId',
cols: [
{
  textAlign: 'center',
  values: ['代理商']
}
]
});




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
    $('#is_agent').show()
    getAgentData()
  } else {
    $('#agent_header').text('成为服务商')
    $('#be_agent').show()
  }
}
function getAgentData() {
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
  var data = {name:'陈生',phone:'15521156156',location:'广州',vip_send:0, vip_use:0, vip_left:0, svip_send:0, svip_use:0}
  for(var x in data) {
    console.log($(x)[0])
    $('#'+x).val(data[x])
  }
}

function submitBeAgent() {
  var formObj = $('#be_agent_form').serializeObject()
  console.log(formObj)
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
}
function getProvince(regions) {

    return regions['provincesArr'];
}

function getCity(regions, provinceName) {

    return regions['provinces'][provinceName]['citiesArr'];
}

function getArea(regions, provinceName, cityName) {

    return regions['provinces'][provinceName]['cities'][cityName]['areasArr'];

}
