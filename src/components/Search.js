import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.input}
        onChange={(event) => props.newSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
