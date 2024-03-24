const obtainLabels = require("../utils/obtain-labels");

//   const labelsObject = context.payload.issue.labels;

function main(context) {
  console.log("run obtainLabels");
  //  console.log(context.payload.issue.labels);
  const issueLabels = obtainLabels(context);
}

module.exports = main;
