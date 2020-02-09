document.addEventListener('DOMContentLoaded', function () { // 选项页的只有DOM载入, 因为其是内嵌的
    // 默认的数据
    var json_data
    readJsonFile("data/config.json", function (response_text) {
        json_data = JSON.parse(response_text)
    })
    var table_body = document.getElementById("table-data")
    for (var i = 0; i < json_data.length; i++) {
        var new_tr = document.createElement('tr')
        new_tr.innerHTML = "<th>" + json_data[i].describe + "</th><th>" + json_data[i].url + "</th>"
        table_body.appendChild(new_tr)
    }
})