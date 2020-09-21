/*
<% site.categories.sort('name', 'asc').each(function(category) { %>
	<% category.posts.sort('date', 'desc').forEach(function(post) { %>
		<a href="<%- post.path %>"><%- post.title %></a><br />
	<% }); %>
<% }); %>
*/

function get_posts_by_category_tag(category, tag) {
	let posts = [];
	try {
		let i = 0;
		this.site.categories.findOne({name: category}).posts.sort("date", -1).forEach(element => {
			let data = element.tags.data;
			for (let i = 0; i < data.length; i++) {
				if (!data[i].name || data[i].name.toLowerCase() !== tag.toLowerCase()) continue;
				posts.push(element)
			}
		});
	}
	catch (e) {
		console.log(e);
	}
	return [...new Set(posts)];
}

hexo.extend.helper.register("get_posts_by_category_tag", get_posts_by_category_tag);
