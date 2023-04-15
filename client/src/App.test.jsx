import { render, screen } from "@testing-library/react";
import App from "./App";
import ListBlog from "./components/ListBlog";

// First Test - Fix it to Pass
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

describe("ListBlog", () => {
  test("renders my ListBlog component", () => {
    render(<ListBlog />);
  });
});
