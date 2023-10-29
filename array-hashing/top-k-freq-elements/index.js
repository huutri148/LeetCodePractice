/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * **/

const topKFrequent_1 = (nums, k) => {
  let map = {};
  for (let num of nums) {
    if (!map[num]) map[num] = 0;
    map[num]++;
  }

  return [...Object.keys(map)].sort((a, b) => map[b] - map[a]).slice(0, k);
};

// Map
const frequentMap = (nums, map) => {
  for (const num of nums) {
    let freq = map.get(num) || 0;

    freq = freq + 1;
    map.set(num, freq);
  }
};

const topKFrequent_2 = (nums, k) => {
  if (!nums.length) return [];

  const map = new Map();
  frequentMap(nums, map); /* Time O(N * (K * log(K)) | Space O(N * K) */

  const result = [...map.keys()].sort(
    (keyIndex, orderKeyIndex) => map.get(keyIndex) - map.get(orderKeyIndex)
  );

  return result.slice(0, k);
};
