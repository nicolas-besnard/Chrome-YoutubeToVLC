var currentPage = function()
{
	return chrome.extension.getBackgroundPage();
}

var currentTabURL = function()
{
	return encodeURIComponent(currentPage().currentTab.url);
}

var openVideoOnVLC = function()
{
	$.ajax({
		url: "http://localhost:8080/requests/status.json?command=in_play&input=" + currentTabURL(),
		type: 'GET'
	})
	.done(function(data)
	{
		var title = currentPage().currentTab.title;

		title = "<b>" + title.substr(0, title.length-9) + "</b>";

		$('#msg').hide();

		$('#added').html(title + ' playing !');
		$('#added').show();

		chrome.tabs.sendMessage(currentPage().currentTab.id, { to: "content", action: "pauseVideo" });
	})
	.fail(function()
	{
		$('#msg').show();
		$('#added').hide();
	});
}

$(document).ready(function()
{
	openVideoOnVLC();
});
