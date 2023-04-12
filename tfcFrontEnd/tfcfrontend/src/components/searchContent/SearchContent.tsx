import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerCard } from "../playerCard/PlayerCard";
import { SearchBar } from "../searchBar/SearchBar";
import "./searchContent.scss";
import { fetchFilteredUser } from "./actions";

export const SearchContent = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: any) => state.fetchFilteredUser
  );
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    dispatch(fetchFilteredUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = (searchTerm: string) => {
    if (data) {
      setFilteredPlayers(
        data.filter((user: any) =>
          user.name.toUpperCase().includes(searchTerm.toString().toUpperCase())
        )
      );
    }
  };

  useEffect(() => {
    if (data != null) {
      setFilteredPlayers(data);
    }
  }, [data]);

  return (
    <div className="search_centered">
      <h2 className="search_centered_title"> Search users:</h2>
      <div className="search_centered_searchBar">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="search_centered_usersContent">
        {loading && (
          <>
            <h2>Loading...</h2>
          </>
        )}
        {!loading &&
          (filteredPlayers.length < 0 || filteredPlayers === null) && (
            <h2>No data</h2>
          )}
        {!loading &&
          filteredPlayers.length > 0 &&
          filteredPlayers.map((player: any, i: number) => {
            return (
              <PlayerCard
                key={`user_${i}`}
                userId={player.id}
                name={player.name}
                gamesPlayed={player.gamesPlayed}
                warnsApplied={player.warnsApplied}
              />
            );
          })}
      </div>
    </div>
  );
};
