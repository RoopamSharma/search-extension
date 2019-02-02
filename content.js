document.addEventListener('selectionchange', function() {
  var email = window.getSelection().toString();
  chrome.storage.sync.set({'email': email}, function() {
      console.log('The email is '+email);
  });
});
