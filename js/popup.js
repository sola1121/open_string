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
                                 "<input type='text' id='input_" + i + "'>&nbsp;&nbsp;" + 
                                 "<button class='pure-button jump_button' data_str='"+ json_data[i].url +"'>组合跳转▷</button> </div>"
        content_form.appendChild(new_filedset)
    }
}

//为页面添加功能
function add_func(){
    var btns = document.getElementsByClassName("jump_button")
    for (var i=0; i<btns.length; i++){
        btns[i].addEventListener("click", function(){
            console.log(btns[i].previousElementSibling)
            console.log(btns[i].previousElementSibling.getAttribute("value"))
            var str_url = btns[i].getAttribute("data_str")
            str_url = str_url.replace("%s", btns[i].previousElementSibling.getAttribute("value"))
            console.log(str_url)
            var aElem = document.createElement('a')
            aElem.setAttribute("href", str_url)
            aElem.setAttribute("target", "_blank")
            aElem.click()   // chrome.tabs.create({url: ""});
        }, false)
    }
}
