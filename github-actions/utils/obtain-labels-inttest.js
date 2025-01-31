/**
 * Get all labels from the issue
 * @param {Object} context - context object from actions/github-script
 * @return {Array} - returns an array of all the labels
 */
function obtainLabels(context) {
  const labelsObject = context.payload.issue.labels;
  console.log("context:");
  console.log(context);
  console.log("labelsObject:");
  console.log(labelsObject);
  const labels = labelsObject.map((label) => label.name);
  return labels;
}

module.exports = obtainLabels;
