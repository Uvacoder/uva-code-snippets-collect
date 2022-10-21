---
title: Valid Palindrome
problemUrl: https://leetcode.com/problems/valid-palindrome/
tags:
  - javascript
  - palindrome
---

**My Solution**:

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let stripped = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

	let reversed = stripped.split("").reverse().join("");

	return stripped === reversed;
};
```
