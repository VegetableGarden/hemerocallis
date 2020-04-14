document.addEventListener('DOMContentLoaded', () => {
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
    switch (request.cmd) {
        case 'save-cole-github-token-and-username':
            saveTokenAndUsername(request.token, request.username);
            break;
        default:
            console.log('收到来自无法识别的消息类型', request);
            break;
    }
    sendResponse('ok')
});