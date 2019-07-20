var isChrome = !!chrome;
chrome = chrome || browser;

var BtoolsInfo = {
  version: '1.0.7',
  releaseVersion: 8
}

if(isChrome) {
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-121985229-2']);
  _gaq.push(['_trackPageview']);
}

// 安装完成后
chrome.runtime.onInstalled.addListener(function(details) {

});

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
  switch(request.type) {
    case 'fetch':
      fetch(request.url)
        .then(function(response) { return response.json() })
        .then(function(json) { return sendResponse(json) })
        .catch(function(error) { return sendResponse(null) });
      return true;  // Will respond asynchronously.
    break;
    case 'getInfo':
      sendResponse(BtoolsInfo)
    break;
  }
});
