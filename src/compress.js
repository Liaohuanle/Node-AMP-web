const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')
module.exports = () => imagemin(['build/*.{jpg,png}'], 'assets', {
	plugins: [
		imageminJpegtran(),
		imageminPngquant({quality: '15-25'})
	]
}).then(files => {
	console.log(files);
})