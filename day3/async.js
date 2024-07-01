async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I completted successfully");
    }, 2000);
  });
}

(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
