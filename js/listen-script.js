chrome.storage.local.get(['script', 'enabled', 'targetHost'], function(items) {
  try {
    if(items.enabled &&  items.targetHost && items.targetHost.indexOf(window.location.hostname) != -1) {
      eval(items.script);
      console.log('Analligence Script loaded.');
    }
  } catch(e) {
    console.log('Error while loading analligence script.');
  }
});