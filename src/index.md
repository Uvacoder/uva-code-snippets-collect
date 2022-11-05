---
title: Coding Problem Solutions
description: List of my solutions to some coding problems on coding platforms like Leetcode
layout: base.njk
---

# Outline

> List of my solutions to some coding problems on coding platforms like {% mdExternalLink 'Leetcode' 'https://leetcode.com' %}, {% mdExternalLink 'binarysearch' 'https://binarysearch.com' %} and {% mdExternalLink 'Coderbyte' 'https://coderbyte.com' %}.

<ul>
{%- for solution in collections.solutions -%}
  {% assign imgUrl = "/assets/" | append: solution.data.platform | append: ".png" %}
  <li>
		<a href="{{ solution.data.page.fileSlug | url }}">{{solution.data.title}}</a>
    <img src="{{ imgUrl | url }}" alt="{{ solution.data.platform | capitalize }}" title="{{ solution.data.platform | capitalize }}" />
	</li>
{%- endfor -%}
</ul>
