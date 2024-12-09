import React from "react";
import Form from "next/form";
import SearchFormReset from "@/app/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }) => {
  return (
    <Form action="/" method="GET" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search startups"
      />
      {query && <SearchFormReset />}
      <button type="submit" className="search-btn text-white">
        <Search />
      </button>
    </Form>
  );
};

export default SearchForm;
