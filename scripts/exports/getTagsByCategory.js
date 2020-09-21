module.exports = function(category, locals, options) {
	let tags = [];
	let seen = [];
	try {
		locals.categories.findOne({name: category}).posts.sort("date", -1).forEach(element => {
			let data = element.tags.data;
			for (let i = 0; i < data.length; i++) {
				if (!data[i].name || seen.indexOf(data[i].name) > -1) continue;

				if (options && options.data) tags.push(data[i]);
				else tags.push(data[i].name);

				seen.push(data[i].name);
			}
		});
	}
	catch (e) {
		console.log(e);
	}
	return [...new Set(tags)];
}
