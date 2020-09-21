(function() {
	let url = window.location.href;
	let decodedPath = decodeURIComponent(window.location.pathname);
	if (!decodedPath.startsWith("/")) decodedPath = "/" + decodedPath;

	// ignore these urls

	if (url.includes("localhost:4000")) return;

	let ignore = ["donate"];
	for (let i = 0; i < ignore.length; i++) {
		if (decodedPath.toLowerCase().startsWith("/" + ignore[i] + "/")) return;
	}

	// change blog urls which were previously spaced to dashed
	let blogDateRe = new RegExp(/\d+\/\d+\/\d+\//, "g");
	if (url.match(blogDateRe)) {
		if (url.includes(" ") || url.includes("%20")) {
			decodedPath = decodedPath.replace(/(\s|%20)/g, "-");
		}
	}

	// tags

	if (decodedPath.toLowerCase().startsWith("/tags/")) {
		decodedPath = "/blog" + decodedPath;
	}

	// change programming to software

	if (decodedPath.toLowerCase().startsWith("/programming/")) {
		decodedPath = decodedPath.replace(/programming/g, "software");
	}

	// change old En urls to new version

	let enBlogUrls = [
		{
			old: "retrospective-of-a-master-of-applied-translation-course",
			new: "masters-applied-translation-course-retrospective"
		},
		{
			old: "organizing-japanese-corrections",
			new: "organizing-language-corrections"
		}
	];

	for (let i = 0; i < enBlogUrls.length; i++) {
		if (decodedPath.toLowerCase().includes(enBlogUrls[i].old.toLowerCase())) {
			let re = new RegExp(enBlogUrls[i].old, "gmi");
			decodedPath = decodedPath.replace(re, enBlogUrls[i].new);
			decodedPath = "/en/blog" + decodedPath;
		}
	}

	// change old Ja urls to new romanized version & locale

	let jaBlogUrls = [
		{
			old: "英語のエッセイにおける主語の使い方",
			new: "english-essay-subject-usage"
		},
		{
			old: "翻訳修士号コースの回想",
			new: "masters-applied-translation-course-retrospective"
		},
		{
			old: "「Silly」は「バカ」じゃない！",
			new: "silly-and-baka-difference"
		}
	];

	for (let i = 0; i < jaBlogUrls.length; i++) {
		if (decodedPath.toLowerCase().includes(jaBlogUrls[i].old.toLowerCase())) {
			let re = new RegExp(jaBlogUrls[i].old, "gmi");
			decodedPath = decodedPath.replace(re, jaBlogUrls[i].new);
			decodedPath = "/ja/blog" + decodedPath;
		}
	}

	// change old En blog urls to new locale (e.g. /2016/...)

	if (decodedPath.toLowerCase().startsWith("/201")) {
		decodedPath = "/en/blog" + decodedPath;
	}

	// remove blog date format

	decodedPath = decodedPath.replace(blogDateRe, "");

	// change pages to new locale

	function getBrowserLanguage() {
		let languageMap = {
			"en": "en",
			"en-us": "en",
			"en-gb": "en",
			"ja": "ja",
			"ja-jp": "ja"
		}

		let userLang = "";
		if (typeof navigator === "object") {
			if (navigator.languages && Array.isArray(navigator.languages)) userLang = navigator.languages[0].toLowerCase();
			if (navigator.language) userLang = navigator.language.toLowerCase();
			if (navigator.userLanguage) userLang = navigator.userLanguage.toLowerCase();
			if (navigator.browserLanguage) userLang = navigator.browserLanguage.toLowerCase();
			if (navigator.systemLanguage) userLang = navigator.systemLanguage.toLowerCase();
		}

		if (!languageMap[userLang]) userLang = keys(languageMap[0]);
		return languageMap[userLang];
	}

	let pathLangs = ["/en/", "/ja/"];
	if (pathLangs.indexOf(decodedPath.toLowerCase().substr(0, 4)) === -1) {
		if (lang) decodedPath = "/" + getBrowserLanguage() + decodedPath;
	}

	// home pages

	if (decodedPath.endsWith("/en/") || decodedPath.endsWith("/ja/")) decodedPath = decodedPath += "blog";

	// add trailing slash (req. for Github pages and image src embed pathing)

	if (!decodedPath.endsWith("/") && !decodedPath.endsWith(".html")) decodedPath = decodedPath += "/";

	// redirect

	let newUrl = window.location.protocol + "//" + window.location.host + decodedPath;
	//newUrl = newUrl.replace(/https:\/\/www.krausekai.com/g, "http://localhost:4000");
	if (!decodeURIComponent(url).includes(newUrl)) window.location.href = newUrl;
})();
