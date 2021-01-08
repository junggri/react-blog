const VIEW_ID = "235239777";

function queryReports() {
   window.gapi.client.request({
      path: "/v4/reports:batchGet",
      root: "https://analyticsreporting.googleapis.com/",
      method: "POST",
      body: {
         reportRequests: [
            {
               viewId: "235239777",
               dateRanges: [
                  {
                     startDate: "2021-01-03",
                     endDate: "today",
                  },
               ],
               metrics: [
                  {
                     expression: "ga:users",
                  },
               ],
               dimensions: [
                  {
                     name: "ga:date",
                  },
               ],
            },
         ],
      },
   }).then(displayResults, console.error.bind(console));
}

function displayResults(response) {
}