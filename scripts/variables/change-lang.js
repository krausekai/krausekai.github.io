// <%= change_lang( lang(page.path) ) %>
hexo.extend.helper.register("change-lang", function(lang) {
	if (lang === "en") return "ja";
	if (lang === "ja") return "en";
});
