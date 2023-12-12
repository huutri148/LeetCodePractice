/**
 * https://leetcode.com/problems/daily-temperatures
 * Time O(N) | Space O(n)
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const decreaseTempStack = [],
    result = Array(temperatures.length).fill(0);

  for (const currentDay in temperatures) {
    while (
      temperatures[currentDay] >
      temperatures[decreaseTempStack[decreaseTempStack.length - 1]]
    ) {
      const day = decreaseTempStack.pop();
      const countDay = currentDay - day;
      result[day] = countDay;
    }

    if (
      temperatures[currentDay] <=
        temperatures[decreaseTempStack[decreaseTempStack.length - 1]] ||
      !decreaseTempStack[decreaseTempStack.length - 1]
    ) {
      decreaseTempStack.push(+currentDay);
    }
  }

  return result;
};

const bottomUpDailyTemperatures = (temp) => {
  const stack = [],
    res = [];

  for (let i = temp.length - 1; i >= 0; i--) {
    while (temp[stack[stack.length - 1]] <= temp[i]) stack.pop();

    res[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }

  return res;
};
