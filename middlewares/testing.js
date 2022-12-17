/*
 * For a middleware we use a next() function
 * to end it or pass to the next middleware in
 * the stack
 *
 */
function sayHello(req, res, next) {
  console.log("Hello World!");
  next();
}

export default sayHello;
