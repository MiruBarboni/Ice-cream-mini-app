const imgContainer = document.querySelector('.section-5-imgs');
const images = document.querySelectorAll('.section-5-imgs div');
const galleryContainer = document.querySelector('.gallery');
const gallerImgs = document.querySelectorAll('.img-slide');
const closeBtn = document.querySelector('.close');
const zoominBtn = document.querySelector('.zoom-in');
const zoomoutBtn = document.querySelector('.zoom-out');
const arrowbackBtn = document.querySelector('.arrow-back');
const arrowforwardBtn = document.querySelector('.arrow-forward');
const indexImg = document.querySelector('.index');
const shareBtn = document.querySelector('.share');
const shareDropdownMenu = document.querySelector('.share-dropdown-menu');
const backDrop = document.querySelector('#backdrop');
const dropdownArraw = document.querySelector('.dropdown-mark');
const downloadImg = document.querySelector('#download');
const tooltiptext = document.querySelector('.tooltiptext');
const body = document.querySelector('body');
const navMenuBtn = document.querySelector('.nav-menu');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#closeMenuBtn');
const navItems = document.querySelectorAll('.nav-item');

let currentSlideIndex = 1;
const nrOfImages = images.length;

const nextImage = () => {
	return (currentSlideIndex =
		currentSlideIndex < nrOfImages ? currentSlideIndex + 1 : 1);
};

const previouImage = () => {
	return (currentSlideIndex =
		currentSlideIndex > 1 ? currentSlideIndex - 1 : nrOfImages);
};

const DisplayImg = (id) => {
	const img = document.getElementById(`img-${id}`);

	gallerImgs.forEach((img) => {
		img.style.display = 'none';
	});

	img.style.display = 'flex';
	currentSlideIndex = +id;
	indexImg.innerHTML = `1/${currentSlideIndex}`;

	let srcImg = img.children[0].src;
	downloadImg.setAttribute('href', srcImg);
};
const showImg = (e) => {
	const imgId = e.currentTarget.dataset.slidenumber;
	DisplayImg(imgId);
	galleryContainer.classList.add('gallery-show');
	body.style.overflowY = 'hidden';
};

images.forEach((image) => {
	image.addEventListener('click', showImg);
});

arrowbackBtn.addEventListener('click', () => {
	const imgId = previouImage();
	DisplayImg(imgId);
});
arrowforwardBtn.addEventListener('click', () => {
	const imgId = nextImage();
	DisplayImg(imgId);
});

zoominBtn.addEventListener('click', () => {
	gallerImgs.forEach((img) => {
		img.style.transform = 'scale(1.1)';
	});
	zoominBtn.style.display = 'none';
	zoomoutBtn.style.display = 'block';
});

zoomoutBtn.addEventListener('click', () => {
	zoomoutBtn.style.display = 'none';
	zoominBtn.style.display = 'block';
	gallerImgs.forEach((img) => {
		img.style.transform = 'rotate(0deg)';
	});
});

closeBtn.addEventListener('click', () => {
	galleryContainer.classList.remove('gallery-show');
	zoomoutBtn.style.display = 'none';
	zoominBtn.style.display = 'block';
	gallerImgs.forEach((img) => {
		img.style.transform = 'rotate(0deg)';
	});
	body.style.overflowY = 'scroll';
});

shareBtn.addEventListener('click', () => {
	shareDropdownMenu.classList.add('share-dropdown-menu-show');
	backDrop.style.display = 'block';
	dropdownArraw.classList.add('dropdown-mark-show');
});

backDrop.addEventListener('click', () => {
	shareDropdownMenu.classList.remove('share-dropdown-menu-show');
	backDrop.style.display = 'none';
	dropdownArraw.classList.remove('dropdown-mark-show');
	menu.classList.remove('menu-show');
	body.style.overflowY = 'scroll';
});

navMenuBtn.addEventListener('click', () => {
	menu.classList.add('menu-show');
	body.style.overflowY = 'hidden';
	backDrop.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
	menu.classList.remove('menu-show');
	body.style.overflowY = 'scroll';
	backDrop.style.display = 'none';
});

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		menu.classList.remove('menu-show');
		body.style.overflowY = 'scroll';
		backDrop.style.display = 'none';
	});
});
