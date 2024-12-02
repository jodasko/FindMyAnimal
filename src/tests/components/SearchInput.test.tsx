import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SearchProvider } from "../../contexts/SearchContext";
import SearchInput from "../../components/SearchInput";

describe("SearchInput Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchProvider>
          <SearchInput />
        </SearchProvider>
      </MemoryRouter>
    );
  });

  const findSearchInput = () => screen.getByRole("textbox") as HTMLInputElement;
  const findClearButton = () => screen.getByRole("button", { name: /clear/i });

  test("Render SearchInput and allows input", async () => {
    const input = findSearchInput();
    await userEvent.type(input, "cat"); // type into input
    expect(input).toHaveValue("cat");
  });

  test("Clear input when the X button is clicked", async () => {
    const input = findSearchInput();
    await userEvent.type(input, "mmm");
    expect(input).toHaveValue("mmm");

    const clearButton = findClearButton(); // click the clear button
    await userEvent.click(clearButton);

    expect(input).toHaveValue("");
  });
});
