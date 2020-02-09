window.onload = function(){
    this.add_html()
    this.add_func()
}

// 生成当前页面, 应该由data/config中的内容生成对应的表单
function add_html(){
    var json_data
    readJsonFile("data/config.json", function(response_text){
        json_data = JSON.parse(response_text);
    })
    
    var content_form = document.forms[0]
    for (var i=0; i<json_data.length; i++){
        var new_filedset = document.createElement("fieldset")
        new_filedset.innerHTML = "<div class='pure-control-group'>  <label for='input_" + i + "'>" + json_data[i].describe + "</label>" +
                                 "<input type='text' id='input_" + i + "' value=''>&nbsp;&nbsp;" + 
                                 "<button class='pure-button jump_button' data_str='"+ json_data[i].url +"'>组合跳转▷</button> </div>"
        content_form.appendChild(new_filedset)
    }
}

//为页面添加功能
function add_func(){
    var btns = document.getElementsByClassName("jump_button")
    for (var i=0; i<btns.length; i++){
        btns[i].addEventListener("click", function(){
            var str_url = this.getAttribute("data_str")
            console.log(this.previousElementSibling)
            str_url = String(str_url).replace("%s", this.previousElementSibling.value)   // 配置中使用%s代表需要填入的部分
            chrome.tabs.create({url: str_url})
        })
    }
}
