document.getElementById("save").addEventListener("click",  function(e) {
  var input = document.getElementById('file');
  var node = document.getElementById('output');
  var host = document.getElementById('host').value;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    chrome.storage.local.set({ 'script': text, 'targetHost': host }, function() {
      console.log('Settings saved');
      node.innerText = 'Settings saved';
    });
  };
  if(input.files.length === 0) {
    node.innerText = 'Please select file';
  } else if(host.trim() === '') {
    node.innerText = 'Host is mandatory';
  } else {
    reader.readAsText(input.files[0]);
  }
});
chrome.storage.local.get(['targetHost'], function(items) {
  document.getElementById('host').value = items.targetHost;
})
