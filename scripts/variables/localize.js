// source: https://it.knightnet.org.uk/kb/node-js/get-properties/
function getProp(obj, prop) {
	if (typeof obj !== 'object') throw 'getProp: obj is not an object';
	if (typeof prop !== 'string') throw 'getProp: prop is not a string';

	// Replace [] notation with dot notation
	prop = prop.replace(/\[["'`](.*)["'`]\]/g,".$1");

	return prop.split('.').reduce(function(prev, curr) {
		return prev ? prev[curr] : undefined
	}, obj);
}

function getLocalizedData(args, lang) {
	let data = hexo.locals.get("data")[lang];

	let foundValue = getProp(data, args.toString());

	if (typeof foundValue === "string") {
		let inlineArgs = foundValue.match(/\[(this(\w|\.).+?)\]/gmi) || [];
		for (inlineArg of inlineArgs) {
			let query = inlineArg.replace(/\[this\.(.+)\]/, "$1");
			foundValue = foundValue.replace(inlineArg, getProp(data, query));
		}
	}

	return foundValue;
}

hexo.extend.helper.register("localize", function(args, lang) {
	lang = lang || hexo.extend.helper.get("lang").bind(hexo)(this.path);
	return getLocalizedData(args, lang);
});

hexo.extend.tag.register("localize", function(args, lang){
	lang = lang || hexo.extend.helper.get("lang").bind(hexo)(this.path);
	return getLocalizedData(args[0], lang);
});
