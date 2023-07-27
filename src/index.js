import "bahmni-carbon-ui/styles.css";
import React from "react";
import * as ReactDOM from "react-dom";
import EntryComponent1 from "./entries/EntryComponent1/EntryComponent1";

const devContainer = document.getElementById("dev-bahmni-mfe");
if (devContainer) {
  const hostData = {
    patient: { uuid: "3ae1ee52-e9b2-4934-876d-30711c0e3e2f" },
  };
  const hostInterface = {
    callback(event) {
      alert("--- Simulating host interface: received callback with " + event);
    },
  };
  ReactDOM.render(
    <EntryComponent1 hostData={hostData} hostApi={hostInterface} />,
    devContainer
  );
}
