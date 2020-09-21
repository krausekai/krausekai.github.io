// consider https://github.com/chenzhutian/hexo-all-minifier

function minify(str) {
	// remove new lines
	str = str.replace(/(\r|\n)+/gmi, "\n");
	// remove whitespace between tags
	str = str.replace(/>\s+?</gmi, "><");
	// remove comments, but preserve <!--more--> for posts
	str = str.replace(/<!--(?!(\s+|)more(\s+|)).+?-->/gmi, "");

  return str;
}

hexo.extend.filter.register("after_render:html", minify);

function minifyRoutes() {
	let sitemap = hexo.route.get("sitemap.xml");
	if (sitemap) {
		hexo.route.set("sitemap.xml", {
			data: minify(sitemap._data),
			modified: false
		});
	}
}

hexo.extend.filter.register("after_generate", minifyRoutes);
