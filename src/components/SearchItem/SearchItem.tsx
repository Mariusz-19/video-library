import { createRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchItem.scss";

function SearchItem() {
  const navigate = useNavigate();
  const inputRef = createRef<HTMLInputElement>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userInputValue = inputRef.current?.value;
    navigate(`/results/?q=${userInputValue}`);
  };

  return (
    <div className="search-item">
      <form onSubmit={handleSubmit}>
        <input className="search-box" type="search" ref={inputRef}></input>
        <button className="search-button" type="submit">
          Szukaj
        </button>
      </form>
    </div>
  );
}

export default SearchItem;
