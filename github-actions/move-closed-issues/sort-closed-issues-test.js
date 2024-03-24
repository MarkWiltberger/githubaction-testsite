const obtainLabels = require("../utils/obtain-labels");

//   const labelsObject = context.payload.issue.labels;

function main({ context }) {
  console.log("console log context");
  console.log(context);
  // const issueLabels = obtainLabels(context);
}

module.exports = main;
