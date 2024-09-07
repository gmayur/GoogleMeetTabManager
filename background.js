// Initialize the counter and timestamp
chrome.storage.local.get(['closedTabsCount', 'lastResetTime'], (result) => {
    if (chrome.runtime.lastError) {
      console.error("Error accessing storage:", chrome.runtime.lastError);
      return;
    }
    if (!result.closedTabsCount) {
      chrome.storage.local.set({ closedTabsCount: 0, lastResetTime: Date.now() });
    }
  });
  
  chrome.alarms.create("checkTabs", { periodInMinutes: 3 });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "checkTabs") {
      chrome.tabs.query({}, (tabs) => {
        let closedCount = 0;
        tabs.forEach((tab) => {
          if (tab.url && tab.url.includes("meet.google.com/landing") && !tab.active) {
            chrome.tabs.remove(tab.id);
            closedCount++;
          }
        });
        
        // Update the counter
        updateCounter(closedCount);
      });
    } else if (alarm.name === "resetCounter") {
      chrome.storage.local.set({ closedTabsCount: 0, lastResetTime: Date.now() });
      chrome.action.setBadgeText({ text: '0' });
    }
  });
  
  function updateCounter(newClosedCount) {
    chrome.storage.local.get(['closedTabsCount', 'lastResetTime'], (result) => {
      const currentTime = Date.now();
      let { closedTabsCount, lastResetTime } = result;
      
      // Reset counter if it's been more than an 16 hours
      if (currentTime - lastResetTime > 16 * 3600000) {
        closedTabsCount = 0;
        lastResetTime = currentTime;
      }
      
      closedTabsCount += newClosedCount;
      
      chrome.storage.local.set({ closedTabsCount, lastResetTime });
      
      // Update badge text
      chrome.action.setBadgeText({ text: closedTabsCount.toString() });
    });
  }
  
  // Reset counter every 16 hours
  chrome.alarms.create("resetCounter", { periodInMinutes: 16 * 60 });