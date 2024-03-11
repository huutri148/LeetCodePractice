console.log("Program started");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend", error: null });
  }, 5000);
});

console.log(promise);
console.log("Program in progress...");

promise
  .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain complete!");
      }, 2000);
    });
  })
  .then((value) => {
    console.log(value);
  });

promise
  .then(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Second promise chain complete!");
        }, 10000);
      })
  )
  .then(console.log);
