import React from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
// import { newSearch, clearSearch } from "./redux/reducers/movieSearchSlice";
// import { useSelector } from "react-redux";

const style = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "400px",
    outline: "none",
    fontSize: 23,
    textAlign: "center",
    backgroundColor: "#E8D9D6",
    borderRadius: "25px",
    border: "none",
  },
  clearButton: {
    position: "absolute",
    right: 10,
    fontSize: 30,
    color: "#1f1f1f",
    cursor: "pointer",
  },
};

const Search = (props) => {
  const { input, newSearch } = props;

  const dispatch = useDispatch();

  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          value={input}
          placeholder="Search for a movie :)"
          onChange={(event) => newSearch(event.target.value)}
        ></input>
        {input ? (
          <MdCancel className="search-clear" onClick={() => newSearch("")} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;

// const dispatch = useDispatch();

//   const { search } = useSelector((state) => state.movieSearch);

//   return (
//     <div>
//       <div style={style.container}>
//         <input
//           style={style.input}
//           type="text"
//           // value={input}
//           value={search}
//           placeholder="Search for a movie :)"
//           onChange={(event) => dispatch(newSearch(event.target.value))}
//         ></input>
//         {search ? (
//           <MdCancel
//             style={style.clearButton}
//             onClick={() => dispatch(clearSearch())}
//           />
//         ) : null}
//       </div>
//     </div>
//   );
// };
