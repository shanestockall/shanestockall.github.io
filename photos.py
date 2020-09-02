import os
from PIL import Image

importString = "import "
fromString = "from '"
endString = "';"

def main():
	folders = ['./src/assets/img/examples/people', './src/assets/img/examples/places', './src/assets/img/examples/things']

	photos = []

	for folder in folders: 
		path = os.walk(folder)

		for root, directories, files in path: 
			for file in files:
				photo = {}
				photo['src'] = os.path.join(root.split('src/')[1], file)
				calculate_width(photo, root, file)
				importstr = build_import(photo, len(photos), file)
				if importstr is not None:
					print(importstr)

				if (file.endswith('.jpg') or file.endswith('.png')):
					photos.append(photo)

	print(photos)

def build_import(photo, length, file):
	if file.endswith('.jpg') or file.endswith('.png'):
		src = photo['src']
		photo['src'] = '{photo' + str(length) + '}.photo' + str(length)
		return importString + 'photo' + str(length) + ' ' + fromString + src + endString

def calculate_width(photo, root, file):
	if (file.endswith('.jpg') or file.endswith('.png')):
		im = Image.open(os.path.join(root, file))
		width, height = im.size
		AR = find_aspect_ratio(width, height)
		if AR is None: 
			AR = '1:1'

		photo['width'] = AR.split(':')[0]
		photo['height'] = AR.split(':')[1]

def gcd (a,b):
    if b == 0:
        return a
    return gcd(b, a % b)

def find_aspect_ratio(width, height):
	if (width > height):
		cd = gcd(width, height)
		widthR = width / cd
		heightR = height / cd
		return str(int(widthR)) + ':' + str(int(heightR))
	if (height > width):
		cd = gcd(height, width)
		heightR = height / cd
		widthR = width / cd
		return str(int(widthR)) + ':' + str(int(heightR))

if __name__ == '__main__':
	main()