// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	// eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("src/style.css");
	eleventyConfig.addPassthroughCopy("src/assets/");

	// add safe external links in markdown
	eleventyConfig.addShortcode("mdExternalLink", function (text, url) {
		return `<a href="${url}" target="_blank" rel="noopener noreferrer">
			${text}
		</a>`;
	});

	// Build the collection of solutions for previous-next style navigation
	eleventyConfig.addCollection("solutions", function (collection) {
		// get list of solutions in ascending order
		const solutions = collection
			.getFilteredByTag("solutions")
			.map((solution) => {
				if (solution.data.problemUrl.toLowerCase().includes("leetcode")) {
					solution.data.tags.unshift("leetcode");
				} else if (
					solution.data.problemUrl.toLowerCase().includes("binarysearch")
				) {
					solution.data.tags.unshift("binarysearch");
				}
				return solution;
			})
			.sort(function (a, b) {
				return a.inputPath.localeCompare(b.inputPath);
			});

		// Adds {{ prevSol.url }} {{ prevSol.data.title }}, etc, to our njks templates
		for (let i = 0; i < solutions.length; i++) {
			const prevSol = solutions[i - 1];
			const nextSol = solutions[i + 1];

			solutions[i].data["prevSol"] = prevSol;
			solutions[i].data["nextSol"] = nextSol;
		}

		return solutions;
	});

	return {
		pathPrefix: "/coding-problem-solutions/",
		dir: {
			input: "src"
		}
	};
};
