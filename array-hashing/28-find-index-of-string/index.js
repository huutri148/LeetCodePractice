/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;

  for (var i = 0; i < haystack.length; i++) {
    let k = i,
      j = 0;

    while (haystack[k] == needle[j] && j < needle.length) {
      k++, j++;
    }
    
    if (j == needle.length) return i;
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
