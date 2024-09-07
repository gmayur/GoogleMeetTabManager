document.getElementById('checkNow').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    let closedCount = 0;
    tabs.forEach((tab) => {
      if (tab.url.includes("meet") && !tab.active) {
        chrome.tabs.remove(tab.id);
        closedCount++;
      }
    });
    alert(`Closed ${closedCount} inactive "meet" tab(s).`);
  });
});