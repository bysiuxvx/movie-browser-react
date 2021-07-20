import React from 'react';

const style = {
  modalInactive: {
    height: 50,
    width: '35vw',
    outline: 'none',
    margin: '50px 0',
    fontSize: 23,
    textAlign: 'center',
    backgroundColor: '#E8D9D6',
    borderRadius: '25px',
    border: 'none',
  },
  modalActive: { display: 'none' },
};

const Search = (props) => {
  const { input, newSearch, modalDetails } = props;

  return (
    <div>
      <input
        style={modalDetails ? style.modalActive : style.modalInactive}
        type="text"
        value={input}
        onChange={(event) => newSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
