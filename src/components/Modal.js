import React from 'react';

const Modal = (props) => {
  const { modalDetails } = props;

  const style = {
    width: 500,
    height: 800,
    backgroundColor: 'aqua',
    zIndex: 20,
    position: 'absolute',
  };

  return (
    <>
      {modalDetails && (
        <div div style={style}>
          <img src={modalDetails.Poster} alt="" />
          <h4>{modalDetails.Title}</h4>
          <p>{modalDetails.Plot}</p>
          {modalDetails.Ratings.map((rating) => (
            <p>
              <strong>{rating.Source}</strong> {rating.Value}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Modal;
