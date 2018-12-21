document.getElementById("save").addEventListener("click",  function(e) {
  var input = document.getElementById('file');
  var node = document.getElementById('output');
  var host = document.getElementById('host').value;
  var url = document.getElementById('url').value;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    chrome.storage.local.set({ 'script': text, 'targetHost': host, 'url': url }, function() {
      console.log('Settings saved');
      node.innerText = 'Settings saved';
    });
  };
  if(input.files.length === 0 && url.length === 0) {
    node.innerText = 'Please select file or provide URL';
  } else if(host.trim() === '') {
    node.innerText = 'Host is mandatory';
  } else {
    if(input.files.length !== 0) {
      reader.readAsText(input.files[0]);
    } else {
      chrome.storage.local.set({ 'script': '', 'targetHost': host, 'url': url }, function() {
        console.log('Settings saved');
        node.innerText = 'Settings saved';
      });
    }
  }
});
chrome.storage.local.get(['targetHost'], function(items) {
  document.getElementById('host').value = items.targetHost;
})
