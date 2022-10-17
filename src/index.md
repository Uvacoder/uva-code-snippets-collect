---
title: Coding Problem Solutions
description: List of my solutions to some coding problems on leetcode.com and binarysearch.com
layout: base.njk
---

## Outline

List of my solutions to some coding problems on [Leetcode](https://leetcode.com) and [binarysearch](https://binarysearch.com).

<ul>
{%- for solution in collections.solutions | sort -%}
  <li>
		<a href="{{ solution.data.page.fileSlug | url }}">{{solution.data.title}}</a>
	</li>
{%- endfor -%}
</ul>
