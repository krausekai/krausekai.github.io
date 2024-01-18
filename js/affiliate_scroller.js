function afs_loader () {
	// Audible, Tunnelbear VPN, Freelancer
	var affiliates = [
		"<a href='https://www.amazon.com/dp/B00NB86OYE?tag=krausekai-20&linkCode=ur1' target='_blank' style='outline:none;border:none;'><img src='/images/affiliates/audible.jpg' alt='Get 2 Free Audio Books at Audible by Amazon' border='0' /></a>",
		"<a href='https://www.amazon.com/gp/kindle/ku/sign-up?tag=krausekai-20&linkCode=ur1&ie=UTF8&*Version*=1&*entries*=0' target='_blank' style='outline:none;border:none;'><img src='/images/affiliates/kindle.png' alt='Kindle Free Trial by Amazon' border='0' /></a>"
	];

	var affiliateEl = document.getElementById("affiliates");
	affiliateEl.innerHTML = affiliates[0];

	pos = 0;
	function afs () {
		if (pos >= affiliates.length-1) {
			pos = -1;
		}
		pos++;

		affiliateEl.innerHTML = affiliates[pos];
	}
	setInterval(() => {
		window.requestAnimationFrame(afs);
	}, 6500);
}
afs_loader();