
const defaultThisConfig = {
	enable: true,
	per_page: 4,
	format: "page/%d/"
}

hexo.extend.helper.register("lang", function(path) {
	let config = hexo.config || this.config || {language: ["en"]};
	let lang;

	let thisConfig = hexo.config.blog_pagination || this.config.blog_pagination || defaultThisConfig;
	if (!thisConfig.enable) return;

	if (!lang && path && config.language) {
		for (var i = 0; i < config.language.length; i++) {
			if (path.startsWith(config.language[i] + "/")) {
				lang = config.language[i];
				break;
			}
		}
	}

	if (!lang) lang = config.language[0];

	return lang;
});
