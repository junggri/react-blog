const VIEW_ID = "235239777";

function queryReports() {
   window.gapi.client.request({
      path: "/v4/reports:batchGet",
      root: "https://analyticsreporting.googleapis.com/",
      method: "POST",
      body: {
         reportRequests: [
            {
               viewId: VIEW_ID,
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
            },
         ],
      },
   }).then(displayResults, console.error.bind(console));
}

function displayResults(response) {
   const formattedJson = JSON.stringify(response.result, null, 2);
   // console.log(formattedJson);
   // document.getElementById("query-output").value = formattedJson;
}

