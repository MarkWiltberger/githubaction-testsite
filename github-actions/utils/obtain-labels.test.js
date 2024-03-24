// obtain-labels.test.js

import { expect, test } from 'vitest'
import { obtainLabels } from './obtain-labels.js'


console.log(obtainLabels)

const context = {
  payload: [
    {
    issue: {
      labels: [
        {
          name: "label1",
          another_property: "other property",
        },
        {
          name: "label2",
          another_property: "other property"
        },
        {
          name: "label3",
          another_property: "other property"
        },
        {
          name: "label4",
          another_property: "other property"
        },  
      ],
    },
  }
  ],
}

const labels = ["label1", "label2","label3","label4"]

test('extracts array of label names from context object', () => {
  expect(obtainLabels(context).toBe(labels))
})
