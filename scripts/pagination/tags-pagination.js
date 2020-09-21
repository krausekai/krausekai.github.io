let pagination = require("hexo-pagination");
let getTagsByCategory = require("../exports/getTagsByCategory");
let getPostsByTagCategory = require("../exports/getPostsByTagCategory");

const defaultThisConfig = {
	enable: true,
	per_page: 4,
	format: "page/%d/"
}

hexo.extend.generator.register("tags", function(locals) {
	let siteConfig = hexo.config || this.config || {language: ["en"]};
	let thisConfig = hexo.config.tag_pagination || this.config.tag_pagination || defaultThisConfig;
	if (!thisConfig.enable) return;

	function getPosts(lang, tag) {
		try {
			let posts = getPostsByTagCategory(lang, tag, locals);

			// return the paginated entries for the route
			let route = lang + "/blog/tags/" + tag;
			return pagination(route, posts, {
				perPage: thisConfig.per_page,
				format: thisConfig.format,
				layout: ["tag", "index"], // use 'tag.ejs' as hexo's internal declaration of 'index'
				data: posts
			});
		}
		catch (e) {
			console.log(e);
		}
	}

	let paginated = [];

	for (let i = 0; i < siteConfig.language.length; i++) {
		if (siteConfig.language[i] === "default") continue;
		let tags = getTagsByCategory(siteConfig.language[i], locals);
		for (let x = 0; x < tags.length; x++) {
			paginated = [...paginated, ...getPosts(siteConfig.language[i], tags[x])];
		}
	}

	return paginated;
});
