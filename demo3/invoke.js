const request = require("request");

const url = "https://jsonplaceholder.typicode.com/users";

// request (option , callback)

request(
  {
    url,
    json: true
  },
  (error, response, body) => {
    // Print all the results

    console.log(body);
    console.log(JSON.stringify(body, null, 4));
    console.log(response);

    // error would be null unless error . Try changing the URL to check how that works

    // print email only for each

    body.forEach((element) => {
      console.log(element.email);
    });
  }
);

// Handling Errors

url2 = "https://jsonplaceholder.typicode.com/usersaa";
request(
  {
    url: url2,
    json: true
  },
  (err, res, body) => {
    if (err) {
      console.log("Error logged in");
    } else if (res.statusCode !== 200) {
      console.log(
        "There was an error while invoking the API. Status Code : " +
          res.statusCode
      );
    } else {
      console.log("API invoked sucessfully.");
      console.log(body);
    }
  }
);
