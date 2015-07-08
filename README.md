promise-map-object
====================
A fairly common pattern is to use `_` to `map` an array into promises, then to call `Q.all` on that array.
This library takes that idea a little bit further and now allows you to map an object's values through promises.

Usage
=====
```js
var pmo = require("promise-map-object");

var a = {
  foo: {name: "asdf",age: {$gt: 13}},
  bar: {age:;{$lte: 13}}
}

pmo(a, function(query) {
  return db(query); //some database query promise, or similar
}).then(function(mappedA) {
  console.log(mappedA); //res.json, or doing something else with it
});
```
