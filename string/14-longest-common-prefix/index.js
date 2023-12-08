/**
 * @param {string[]} strs
 * @return {string}
 */

/* Time O(N) */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);

      if (ans === "") return "";
    }
  }
  return ans;
};
