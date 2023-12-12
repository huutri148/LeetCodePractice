var MinStack = function () {
  this.stackArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let item;
  const arrLength = this.stackArr.length;

  if (arrLength === 0) {
    item = { val, min: val };
  } else if (arrLength > 0) {
    item = {
      val,
      min: Math.min(this.stackArr[arrLength - 1].min, val),
    };
  }

  this.stackArr.push(item);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stackArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackArr[this.stackArr.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stackArr[this.stackArr.length - 1].min;
};

