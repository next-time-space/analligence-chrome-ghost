chrome.storage.local.get(['script', 'enabled', 'targetHost', 'url'], function(items) {
  try {
    if(items.enabled &&  items.targetHost && items.targetHost.indexOf(window.location.hostname) != -1) {
      if(items.url) {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.src  = items.url;
        document.head.appendChild(e);
      } else {
        eval(items.script);
      }
      console.log('Analligence Script loaded.');
    }
  } catch(e) {
    console.log('Error while loading analligence script.');
  }
});