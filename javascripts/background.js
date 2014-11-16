var checkForValidUrl = function(tabId, changeInfo, tab)
{
	if (tab.url.indexOf("watch?") >= 0 || tab.url.indexOf("/v/") >= 0)
	{
		console.log(tab);
		currentTab = tab;
		chrome.pageAction.show(tabId);
	}
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);
