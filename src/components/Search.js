import React from 'react';

const Search = (props) => {
  const { input, newSearch } = props;

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => newSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
