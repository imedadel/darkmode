console.log('Try this yo')
const generateID =  () => ('darkMode-' + Math.random().toString(36).substr(2, 9))

chrome.runtime.onMessage.addListener((request,sender, sendResponse) => {
	if(request) {
		console.log('set to light')
		document.body.removeChild(document.body.children[0])
		document.head.removeChild(document.head.lastChild)
	} else {
		console.log('set to dark')
		
		const darkDiv = document.createElement('div')
		darkDiv.style.cssText = `width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; background: white; mix-blend-mode: difference; z-index: 2147483646;`
		// Insert blending div at the top
		document.body.insertAdjacentElement('afterbegin', darkDiv)

		// CSS to isolate media
		const css = `img, picture, video, .emoji, iframe {isolation: isolate; mix-blend-mode: difference !important; }`
		const isolationStyle = document.createElement('style')
		isolationStyle.type = `text/css`
		isolationStyle.appendChild(document.createTextNode(css))
		document.head.appendChild(isolationStyle)
	}
})