function openOptions() {
  chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function(tab) {
    // Tab opened.
  });
}

document.getElementById("showOption").addEventListener("click", openOptions);
document.getElementById("enable").addEventListener("change", function(event) {
  chrome.storage.local.set({'enabled': event.target.checked }, function() {
  });
});
chrome.storage.local.get(['enabled'], function(items) {
  document.getElementById("enable").checked = items.enabled;
});
