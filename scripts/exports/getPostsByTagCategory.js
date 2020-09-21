// get posts of a category, and filter it down to only one tag

module.exports = function(category, tag, locals) {
	try {
		let posts = locals.categories.findOne({name: category}).posts.sort("date", -1);
		let found = [];
		posts.forEach(element => {
			let data = element.tags.data;
			for (let i = 0; i < data.length; i++) {
				if (data[i].name && data[i].name === tag) {
					found.push(element);
				}
			}
		});
		posts.data = found;

		return posts
	}
	catch (e) {
		console.log(e);
	}
}
