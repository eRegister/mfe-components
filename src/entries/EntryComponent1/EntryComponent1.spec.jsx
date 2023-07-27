import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EntryComponent1 from "./EntryComponent1";

describe("EntryComponent1", () => {
  it("renders correctly", async () => {
    const hostData = {
      patient: {
        uuid: "__test-uuid__",
      },
    };

    const hostApi = {
      callback: jest.fn(),
    };

    render(<EntryComponent1 hostData={hostData} hostApi={hostApi} />);

    // First check needs to be inside a waitFor since this component is wrapped under i18nProvider which is finicky like that
    await waitFor(() => {
      expect(screen.getByText("patient uuid: __test-uuid__")).toBeTruthy();
    });

    const button = screen.getByText("Demo of host callback");
    fireEvent.click(button);

    expect(hostApi.callback).toHaveBeenCalledWith("event-from-demo-mfe");
  });
});
