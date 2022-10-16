// adds contextual `leetcode` or `binarysearch` tag to each solution
module.exports = {
	eleventyComputed: {
		tags: (data) => {
			if (data.problemUrl.toLowerCase().includes("leetcode")) {
				return ["leetcode", ...data.tags];
			} else if (data.problemUrl.toLowerCase().includes("binarysearch")) {
				return ["binarysearch", ...data.tags];
			}
		}
	}
};
