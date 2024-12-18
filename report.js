const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    collection: `https://api.postman.com/collections/37980230-ff4dec00-2978-4c0b-9f34-0298dc4bb7a7?access_key=${process.env.secretKey}`,

    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
