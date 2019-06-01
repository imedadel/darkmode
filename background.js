let darkToggle = false
const setDarkToggle = () => darkToggle = !darkToggle

chrome.browserAction.onClicked.addListener(tab => {
	//Fired when User Clicks ICON
	// if (tab.url.indexOf('https://www.google.co.in/') != -1) {
	// Inspect whether the place where user clicked matches with our list of URL
	// chrome.tabs.executeScript(
	// 	tab.id,
	// 	{
	// 		file: 'content.js',
	// 	},
	// 	() => {
	// 		// Execute your code
	// 		console.log('Script Executed .. ') // Notification on Completion
	// 	}
	// )
	// }
	chrome.tabs.sendMessage(tab.id, darkToggle)
	setDarkToggle()
})
