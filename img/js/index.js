import bound from 'bound.js'

const boundary = Bound({
	margins: {bottom: 100 }
}) 

const image = document.querySelector('img')
const whenImageEnters = (ratio) => {
	return () =>{
		image.src = image.dataset.src
		// image.classList.add('reveal')
		boundary.unWatch(image)
		console.log('show!')
	}

}

image.forEach(img)

const whenImageLeaves = (ratio) => {}