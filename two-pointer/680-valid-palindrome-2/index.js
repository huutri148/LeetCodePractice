/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 * Time(O(n)) || Space(O(1))
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  let [l, r] = [0, s.length - 1];

  while (l < r) {
    if (s[l] !== s[r]) {
      const skipL = s.slice(l + 1, r + 1);
      const skipR = s.slice(l, r);

      return isPalindrome(skipL) || isPalindrome(skipR);
    }
    l++;
    r--;
  }
  return true;
};

const isPalindrome = (s) => {
  let [l, r] = [0, s.length - 1];

  while (l < r) {
    if (s[l] !== s[r]) return false;

    l++;
    r--;
  }

  return true;
};
