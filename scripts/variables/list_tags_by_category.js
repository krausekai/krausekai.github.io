let getTagsByCategory = require("../exports/getTagsByCategory");

function list_tags_by_category(options) {
	if (!options) {
		console.warn("tags_by_category: No options present");
		return "";
	}

	let tags;

	if (!options.category || options.category.toLowerCase() === "all") tags = this.site.tags;
	else if (options.category) tags = getTagsByCategory(options.category, this.site, {data: true});

	let order = options.order || "ascending";

	// Sort the tags
	tags.sort(function (a, b) {
		if (order === "ascending") return a.name.toLowerCase() < b.name.toLowerCase();
		if (order === "descending") return a.name.toLowerCase() > b.name.toLowerCase();
	});

	// limit how many
	if (options.limit) tags.length = options.limit;

	return tags;
}

hexo.extend.helper.register("list_tags_by_category", list_tags_by_category);
