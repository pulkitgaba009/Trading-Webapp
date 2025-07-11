import { Tooltip, Grow } from "@mui/material";
import { useState } from "react";
import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          style={{ color: "black" }}
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <p>{stock.name}</p>;
        })}
      </ul>
    </div>
  );
};

export default WatchList;
