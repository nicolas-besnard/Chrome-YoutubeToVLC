(function()
{
	chrome.runtime.onMessage.addListener(function(message, sender, sendResponse)
	{
		if (message.to == "content")
		{
			if (message.action == "pauseVideo")
			{
				$('.ytp-button-pause').click();
			}
		}
	});
}());