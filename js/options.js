document.onload = function(){
    add_content()
}

dddd = document.getElementById("info")

function add_content(){
    var json_data
    readJsonFile("data/config.json", function(response_text){
        json_data = JSON.parse(response_text);
    })

    dddd.innerHTMl = "执行到for之前" + json_data
}