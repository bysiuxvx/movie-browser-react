import React from 'react';

const Modal = (props) => {
  const { modalDetails, setMovieModal } = props;

  const style = {
    background: {
      backgroundColor: '#1f1f1f',
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: '10',
      top: '0',
      left: '0',
    },
    modalContainer: {
      width: 650,
      height: 750,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E8D9D6',
      zIndex: 20,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'default',
      borderRadius: '35px',
    },
    secondaryTextContainer: {
      alignItems: 'left',
      width: '100%',
      padding: '0 45px 0 45px',
    },
    img: {
      height: 'auto',
      maxWidth: '100%',
      margin: '0 15px 20px 15px',
      border: '1px solid black',
    },
    textMain: {
      margin: '0 45px 15px 45px',
      textAlign: 'justify',
    },
    textSecondary: {
      margin: '0 0 10px 0',
      textAlign: 'left',
    },
  };

  return (
    <>
      {modalDetails && (
        <div
          style={style.background}
          onClick={() => {
            const resetModal = () => {
              setMovieModal('');
            };
            resetModal();
          }}>
          <div style={style.modalContainer}>
            <h4 style={style.textMain}>{modalDetails.Title}</h4>
            <img
              src={modalDetails.Poster}
              alt={`${modalDetails.Title} poster unavailable`}
              style={style.img}
            />
            <div style={style.secondaryTextContainer}>
              <p style={style.textSecondary}>
                <strong>Genre:</strong> {modalDetails.Genre}
              </p>
              <p style={style.textSecondary}>
                <strong>Director:</strong> {modalDetails.Director}
              </p>
            </div>
            <p style={style.textMain}>{modalDetails.Plot}</p>
            {modalDetails.Ratings.map((rating) => (
              <p>
                <strong>{rating.Source}:</strong> {rating.Value}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
