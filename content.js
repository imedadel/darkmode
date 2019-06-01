console.log('Try this yo')

chrome.runtime.onMessage.addListener((request,sender, sendResponse) => {
	if(request) {
		console.log('set to light')
	} else {
		console.log('set to dark')
	}
})