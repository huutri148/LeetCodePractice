/**
 * @param {string} s
 * @return {number}
 */

/* Time O(N) | Space O(n)*/
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let leftIndex = 0;
  let maxSize = 0;

  if (!s.length) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {

    while (set.has(s[i])) {
      set.delete(s[leftIndex]);
      leftIndex++;
    }

    set.add(s[i]);
    maxSize = Math.max(maxSize, i - leftIndex + 1);
  }

  return maxSize;
};
