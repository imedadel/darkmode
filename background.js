let darkToggle = false
const setDarkToggle = () => darkToggle = !darkToggle

chrome.browserAction.onClicked.addListener(tab => {
	chrome.tabs.sendMessage(tab.id, darkToggle)
	setDarkToggle()
})
