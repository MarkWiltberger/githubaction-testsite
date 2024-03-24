// const obtainLabels = require('../utils/obtain-labels')

//   const labelsObject = context.payload.issue.labels;

function main({ context }) {
  console.log("create a labels object");
  //  console.log(context.payload.issue.labels);

  const labelsObject = context.payload.issue.labels;
}

module.exports = main;
