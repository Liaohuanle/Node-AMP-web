const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')
module.exports = () => imagemin(['assets/new/*.{jpg,png}'], 'assets', {
	plugins: [
		imageminJpegtran(),
		imageminPngquant({quality: '25-35'})
	]
}).then(files => {
	console.log(files);
})