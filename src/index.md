---
title: Coding Problem Solutions
layout: home.njk
---

<!-- description for main page -->

## Outline

<ul>
{%- for solution in collections.solutions | sort -%}
  <li>
		<a href="{{ solution.data.page.fileSlug | url }}">{{solution.data.title}}</a>
	</li>
{%- endfor -%}
</ul>
