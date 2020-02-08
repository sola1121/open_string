// ajax读取已设置文件
function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}


// 通过storage来对设置进行储存与读取, 一下功能没用上, 作为例子放在这儿
//REVIEW: https://developer.chrome.com/extensions/options