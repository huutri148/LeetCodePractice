/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const strs = s.trim().split(" ");

  return strs[strs.length - 1].length;
};

const lengthOfLastWord_2 = (s) => {
  const trimmedString = s.trim();

  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};
