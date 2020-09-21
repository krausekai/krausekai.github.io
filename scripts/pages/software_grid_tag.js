// tags are variables usable in source markdown files like helpers in theme files

hexo.extend.tag.register("software_grid", function(args){
	let localize = hexo.extend.helper.get("localize").bind(this);

	args = JSON.parse(args);

	let contents = [];

	let startRow = '<div class="flex-row">'
	let endRow = '</div>';

	for (let i = 0; i < args.length; i++) {
		// $logo, $title, $image, $description, $link, $type
		let startBox = '<div class="software-box">'
				+'<div class="software-box-header">'
				+'<div class="center">';
					let logo = '<div class="inline-middle"><img style="max-width: 50px" src="$logo"></div>';
					let title = '<span class="item-title">$title</span>';
				let startEndA = '</div>';
				let image = '<img class="img-cropped" src="$image">';
			let startEndB = '</div>';
			let description = '<div class="software-box-content center">'
				+'$description'
			+'</div>';
			let footer = '<div class="software-box-footer">'
				+'<a href="$link" class="button bg-blue">$type</a>'
				/* +'<a href="/donate" class="button bg-red">' + localize('donate') + '</a>' */
			+'</div>'
		+ '</div>';

		let content = "";

		content += startBox;

		if (args[i].logo) {
			logo = logo.replace("$logo", args[i].logo);
			content += logo;
		}

		if (args[i].title) {
			title = title.replace("$title", args[i].title);
			content += title;
		}

		content += startEndA;

		content += startEndB;

		if (args[i].description) {
			description = description.replace("$description", args[i].description);
			content += description;
		}

		if (args[i].image) {
			image = image.replace("$image", args[i].image);
			content += image;
		}

		if (args[i].link) {
			footer = footer.replace("$link", args[i].link);
		}

		if (args[i].type) {
			footer = footer.replace("$type", localize(args[i].type));
		}

		content += footer;

		contents.push(content);
	}

  return startRow + contents.join("") + endRow;
});
