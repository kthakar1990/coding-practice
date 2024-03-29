## How to use Node Promisify with New Relic Synthetic monitors
![New Relic Example](./new_relic_example.jpg)

Recently I came across a requirement where I had to use $http call on New Relic (NR) synthetic monitors and it uses node's request library to make the rest http calls.

However, NR does support the latest node promise handling features of `async/await` . As per request's [documentation](https://github.com/request/request#promises--asyncawait), in order to make the request to return promise there are several wrapper libraries. However, with node v8.0 there's also a support for [util.promisify()](https://nodejs.org/api/util.html#util_util_promisify_original) which is totally awesome. So, I decided to use that and convert $http calls to return promise instead. This way I can use `async` function and `await` for the promises to resolve.
If you need to learn more information about util.promisify(), I recommend that your read more articles dedicated to that topic [here](https://medium.com/search?q=promisify).

Below is a example code snippet for Post request on NR:
```
const util = require('util');
const request = require('request');
let requestPromise = util.promisify(request);
const options = {
url: tiphost,
method: 'post',
json: true,
body: {
 foo: 'bar'
},
headers: {
  'Content-Type': 'application/json'
 }
};
let response = await requestPromise(options);
return response.body;
```

above example is for post request but it can easily be used for get request as well. This way the code looks much cleaner and you can avoid the callback hell if you need to make multiple calls.

Hope this helps!