console.log('background running');

chrome.runtime.onInstalled.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab);
}