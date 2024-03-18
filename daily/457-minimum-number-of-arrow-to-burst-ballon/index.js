/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((pointX, pointY) => pointX[0] - pointY[0]);

  let count = 1,
    topBorder = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (topBorder < points[i][0]) {
      topBorder = points[i][1];
      count++;
    } else if (topBorder > points[i][1]) topBorder = points[i][1];
  }

  return count;
};
