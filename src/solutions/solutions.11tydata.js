// adds contextual `leetcode` or `binarysearch` tag to each solution
module.exports = {
	eleventyComputed: {
		// compute platform (e.g. leetcode) from problem url
		platform: (data) => {
			let urlHostname = new URL(`${data.problemUrl}`).hostname.split(".");
			let platform = urlHostname[urlHostname.length - 2];
			return `${platform.toLowerCase()}`;
		},
		// add platform to tags list
		tags: (data) => {
			return [`${data.platform}`, ...data.tags];
		}
	}
};
