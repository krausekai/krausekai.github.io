let pagination = require("hexo-pagination");

const defaultThisConfig = {
	enable: true,
	per_page: 4,
	format: "page/%d/"
}

hexo.extend.generator.register("blog", function(locals) {
	let config = hexo.config || this.config || {language: ["en"]};
	let thisConfig = hexo.config.blog_pagination || this.config.blog_pagination || defaultThisConfig;
	if (!thisConfig.enable) return;

	function getPosts(lang) {
		try {
			let posts = locals.categories.findOne({name: lang}).posts.sort("date", -1);

			// return the paginated entries for the route
			let route = lang + "/blog";
			//console.log(posts.data)
			return pagination(route, posts, {
				perPage: thisConfig.per_page,
				format: thisConfig.format,
				layout: ["index", "index"], // use 'index.ejs' as hexo's internal declaration of 'index'
			});
		}
		catch (e) {
			console.log(e);
		}
	}

	let paginated = [];

	for (let i = 0; i < config.language.length; i++) {
		if (config.language[i] === "default") continue;
		let posts = getPosts(config.language[i]) || [];
		paginated = [...paginated, ...posts];
	}

	return paginated;
});
