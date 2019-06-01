console.log('Try this yo')
const generateID =  () => ('darkMode-' + Math.random().toString(36).substr(2, 9))

chrome.runtime.onMessage.addListener((request,sender, sendResponse) => {
	if(request) {
		console.log('set to light')
		document.body.removeChild(document.body.children[0])
	} else {
		console.log('set to dark')
		// let darkDivID = generateID()

		const darkDiv = document.createElement('div')
		// darkDiv.id = darkDivID
		darkDiv.style.cssText = `position: fixed; height: 100vh; width: 100vw; background-color: color('sugarcane'); mix-blend-mode: exclusion; pointer-events: none;`
		// document.body.appendChild(darkDiv)
		document.body.insertAdjacentElement('afterbegin', darkDiv)
	}
})