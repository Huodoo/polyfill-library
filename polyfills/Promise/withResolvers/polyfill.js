/* global self */
// eslint-disable-next-line no-unused-vars
(function () {
  CreateMethodProperty(Promise, "withResolvers", function withResolvers() {
    var resolve, reject;
    var promise = new Promise(function (res, rej) {
      resolve = res;
      reject = rej;
    });
		return { resolve: resolve, reject: reject, promise: promise };
  });
})();
