import React, { Dispatch, SetStateAction } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onSearch: (term: string) => void;
}

export const SearchBar = React.forwardRef<HTMLInputElement, Props>(
  ({ searchQuery, setSearchQuery, onSearch }, ref) => {
    return (
      <>
        <form
          role="search"
          className="mx-auto flex w-full"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              searchQuery: { value: string };
            };

            onSearch(target.searchQuery.value);
          }}
        >
          <label htmlFor="query" className="sr-only">
            Search
          </label>
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              ref={ref}
              type="search"
              id="search-field"
              role="searchbox"
              name="searchQuery"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // should trigger on every keystroke if needed onSearch(e.target.value)
              }}
              className="border-2 border-r-0  border-orange-500 outline-none rounded-l-md py-1.5 px-2 w-full focus:ring-1 focus:ring-orange-600 focus:outline-none focus:ring-offset-0"
              placeholder="Enter your search query"
              aria-label="search query input"
            />
          </div>
          <button
            type="submit"
            className=" relative rounded-r border-l-0 border-2 border-transparent bg-orange-500 px-2 py-1.5 text-sm
         text-white transition-colors hover:bg-orange-600 focus:border-transparent
         active:bg-orange-800  focus:outline-none focus:ring-1 focus:ring-orange-600"
            aria-label="Search button"
            role="button"
          >
            Search
          </button>
        </form>
      </>
    );
  }
);
