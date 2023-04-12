import Home from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("Num1")).toBeInTheDocument();
    expect(screen.getByTestId("Num2")).toBeInTheDocument();
  });

  it("adds to numbers", () => {
    render(<Home />);
    const num1input = screen.getByTestId("Num1");
    const num2input = screen.getByTestId("Num2");
    const addButton = screen.getByTestId("Add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, {target: {value: 2}});
    fireEvent.change(num2input, {target: {value: 4}});
    fireEvent.click(addButton)

    expect(result).toHaveTextContent("6")

  });

  it("adds to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("Num1");
    const num2input = screen.getByTestId("Num2");
    const substractButton = screen.getByTestId("Substract");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, {target: {value: 2}});
    fireEvent.change(num2input, {target: {value: 4}});
    fireEvent.click(substractButton)

    expect(result).toHaveTextContent("-2")

  })

  it("substract to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("Num1");
    const num2input = screen.getByTestId("Num2");
    const multiplytButton = screen.getByTestId("Multiply");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, {target: {value: 2}});
    fireEvent.change(num2input, {target: {value: 4}});
    fireEvent.click(multiplytButton)

    expect(result).toHaveTextContent("8")

  })

});
