/**
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const mapOne = new Map();
  const mapTwo = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapOne.has(s[i])) {
      if (mapOne.get(s[i]) !== t[i]) return false;
    } else mapOne.set(s[i], t[i]);

    if (mapTwo.has(t[i])) {
      if (mapTwo.get(t[i]) !== s[i]) return false;
    } else mapTwo.set(t[i], s[i]);
  }

  return true;
};

