//
//return;


function log(message) {
    var container = document.getElementById("container");
    container.innerText += "\n\n" + message;
}



log("启动构建中...请勿关闭此界面");
sendBuildRequest();

function sendBuildRequest() {


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        if (xmlhttp.responseText) {
            log("构建成功，即将刷新浏览器...");
            reloadChromeTab();
        }
    };


    xmlhttp.onerror = function(){
        log("无法连接到egret本机服务器，请确认已执行 egret startserver 命令")
    }

    xmlhttp.open("get", "http://localhost:3000/HelloEgret/__compile__", true);
    xmlhttp.send("");
    button.enabled = false;
}


function reloadChromeTab(){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.reload(tab.id);
    });
}