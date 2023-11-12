import React from "react";
import { render, screen } from "@testing-library/react";
import YummyTextField from "./yummy-text-field.component";

describe("<YummyTextField />", () => {
  test("renders the text field component", () => {
    render(<YummyTextField label="Test Label" />);
    const textField = screen.getByLabelText("Test Label");
    expect(textField).toBeInTheDocument();
  });
});
