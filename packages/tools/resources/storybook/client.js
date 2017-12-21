var storybook = require('@kadira/storybook');

console.log('sadasdasdasdasdasd', SRC_PATH);
var req = require.context(SRC_PATH, true, /\.page\.tsx$/);

storybook.configure(function () {
	req.keys()
		.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		})
		.forEach(req);
}, module);