import React from "react"
import { MdCancel } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { clearModalDetails } from "./redux/reducers/modalDetailsSlice"
import FavoritesHandler from "./FavoritesHandler"

const Modal = (props) => {
  const { details } = useSelector((state) => state.modalDetails)

  const dispatch = useDispatch()

  return (
    <>
      {details && (
        <>
          <div
            className="modal-background"
            onClick={() => dispatch(clearModalDetails())}
          />
          <div className={"modal-container"}>
            <MdCancel
              className="modal-close"
              onClick={() => dispatch(clearModalDetails())}
            />
            <h4>
              {details.Title} ({details.Year})
            </h4>
            <img src={details.Poster} alt={`Poster unavailable`} />
            <div>
              <p>
                <strong>Genre:</strong> {details.Genre}
              </p>
              <p>
                <strong>Director:</strong> {details.Director}
              </p>
            </div>
            <p>{details.Plot}</p>
            {details.Ratings.length > 0 || details.Ratings != []
              ? details.Ratings.map((rating) => (
                  <p>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </p>
                ))
              : null}
            {/* <ImHeart className="favorite-button" /> */}
            <FavoritesHandler details={details} />
          </div>
        </>
      )}
    </>
  )
}

export default Modal
