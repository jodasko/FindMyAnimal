import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import ResultsPage from "../../layout/ResultsPage";

describe("ResultsPage Component", () => {
  it("Displays a list of results after loading is complete", async () => {
    const mockContextValue = {
      isVisible: true,
      setIsVisible: jest.fn(),
      searchTerm: "cat",
      setSearchTerm: jest.fn(),
      handleSearch: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
      data: [
        {
          id: 1,
          title: "Animal 1",
          description: "Description 1",
          url: "url1",
          image: "image1.jpg",
          type: "cat",
        },
        {
          id: 2,
          title: "Animal 2",
          description: "Description 2",
          url: "url2",
          image: "image2.jpg",
          type: "dog",
        },
      ],
      onInitPage: jest.fn(),
      selectedResult: null,
      setSelectedResult: jest.fn(),
      error: false,
      setError: jest.fn(),
      isErrorVisible: false,
      setIsErrorVisible: jest.fn(),
    };

    render(
      <MemoryRouter>
        <SearchContext.Provider value={mockContextValue}>
          <ResultsPage />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    // Check if the list is displayed
    const results = screen.getAllByRole("list");
    expect(results).toHaveLength(2);
  });
});
