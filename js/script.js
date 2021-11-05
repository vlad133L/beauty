const nav=document.querySelector('.nav');
window.addEventListener("scroll",function(){
	let scrollFix=window.scrollY;
	if(scrollFix > 0){
		nav.classList.add('fix');
	}else{
		nav.classList.remove('fix');
	}
});
