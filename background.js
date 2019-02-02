chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({email: 'empty'}, function() {
      console.log('The email is empty.');
    });
  
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: '[a-zA-Z]*.[a-zA-Z]*'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
   });
});
