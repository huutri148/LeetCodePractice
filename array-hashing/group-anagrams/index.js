/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const reorder = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

const groupWords = (strs, map) => {
  for (const originString of strs) {
    const sorted = reorder(originString);
    const values = map.get(sorted) || [];

    values.push(originString);
    map.set(sorted, values);
  }
};

const groupAnagrams = (strs) => {
  if (!strs.length) return [];

  const map = new Map();
  groupWords(strs, map);   /* Time O(N * (K * log(K)) | Space O(N * K) */

  return [...map.values()];
};
