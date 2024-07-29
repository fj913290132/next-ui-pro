import React from "react";

import RowSteps from "./row-steps";

export default function Component() {
  return (
    <RowSteps
      className="max-w-md"
      defaultStep={2}
      steps={[
        {
          title: "Create",
        },
        {
          title: "Review",
        },
        {
          title: "Publish",
        },
      ]}
    />
  );
}
