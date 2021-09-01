import React from "react";
import { MdCancel } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { clearModalDetails } from "./redux/reducers/modalDetailsSlice";

const Modal = (props) => {
  const { setMovieModal, setFavorites, favorites } = props;
  const { details } = useSelector((state) => state.modalDetails);

  const dispatch = useDispatch();

  return (
    <>
      {details && (
        <>
          <div
            className="modal-background"
            onClick={() => dispatch(clearModalDetails())}
          />
          <div className="modal-container">
            <MdCancel
              className="modal-close"
              onClick={() => setMovieModal("")}
            />
            <h4>
              {details.Title} ({details.Year})
            </h4>
            <img
              src={details.Poster}
              alt={`${details.Title} poster unavailable`}
            />
            <div>
              <p>
                <strong>Genre:</strong> {details.Genre}
              </p>
              <p>
                <strong>Director:</strong> {details.Director}
              </p>
            </div>
            <p>{details.Plot}</p>
            {details.Ratings.map((rating) => (
              <p>
                <strong>{rating.Source}:</strong> {rating.Value}
              </p>
            ))}
            <GrFavorite
              className="favorite-button"
              onClick={() => setFavorites(...favorites, details)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
