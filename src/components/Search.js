import React from 'react';
import { MdCancel } from 'react-icons/md';

const style = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '400px',
    outline: 'none',
    fontSize: 23,
    textAlign: 'center',
    backgroundColor: '#E8D9D6',
    borderRadius: '25px',
    border: 'none',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    fontSize: 30,
    color: '#1f1f1f',
    cursor: 'pointer',
  },
};

const Search = (props) => {
  const { input, newSearch } = props;

  return (
    <div>
      <div style={style.container}>
        <input
          style={style.input}
          type="text"
          value={input}
          placeholder="Search for a movie :)"
          onChange={(event) => newSearch(event.target.value)}></input>
        {input ? (
          <MdCancel style={style.clearButton} onClick={() => newSearch('')} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
