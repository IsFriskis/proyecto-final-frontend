import { useEffect, useState } from "react";
import "./rankingContent.scss";
import { SearchBar } from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { ranking } from "./actions";
import { GameInterface, RowRanking } from "./RowRankingTemplate";

export const RankingContent = () => {
  const dispatch = useDispatch();
  const { rankingInfo, loading } = useSelector((state: any) => state.ranking);
  const [filteredGames, setFilteredGames] = useState([]);
  const [header2State, setHeader2State] = useState<"High" | "Low">("High");

  useEffect(() => {
    dispatch(ranking());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleHeader2 = () => {
    setHeader2State((prevState) => (prevState === "High" ? "Low" : "High"));
    sortGames(filteredGames, header2State);
  };

  const onSearch = (searchTerm: string) => {
    if (rankingInfo) {
      setFilteredGames(
        rankingInfo.filter((game: any) =>
          game.username
            .toUpperCase()
            .includes(searchTerm.toString().toUpperCase())
        )
      );
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (rankingInfo) {
      setFilteredGames(
        rankingInfo.filter((game: any) =>
          game.date.split("T")[0].includes(event.target.value)
        )
      );
    }
    console.log(event.target.value);
  };

  useEffect(() => {
    if (rankingInfo != null) {
      setFilteredGames(rankingInfo);
      sortGames(filteredGames, header2State);
    }
    console.log(rankingInfo);
    console.log(filteredGames);
  }, [rankingInfo]);

  useEffect(() => {
    setFilteredGames(sortGames(filteredGames, header2State));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header2State]);
  function sortGames(games: any, isAscending: string) {
    var bool = false;
    if (isAscending === "High") {
      bool = true;
    }
    return games.sort((a: any, b: any) => {
      if (bool) {
        return a.score - b.score;
      } else {
        return b.score - a.score;
      }
    });
  }
  return (
    //<main className="container">
    <div className="parent-container">
      <div className="tableDiv">
        <table className="rankingTable">
          <tbody>
            <tr className="rankingTableHeader">
              <th>Rank</th>
              <th>
                <SearchBar onSearch={onSearch} />
                <br />
                Username
              </th>
              <th onClick={toggleHeader2}>
                <span>{header2State}</span>
                <span>{header2State === "High" ? "  ↑" : "  ↓"}</span>
              </th>
              <th>
                <input type="date" onChange={handleDateChange} />
                <br />
                Date
              </th>
              <th>Game ID</th>
            </tr>
            {!loading &&
              filteredGames.length > 0 &&
              header2State === "High" &&
              filteredGames.map((game: GameInterface, i: number) => {
                return (
                  <RowRanking
                    key={i}
                    username={game.username}
                    score={game.score}
                    date={game.date}
                    id={game.id}
                    rankingNumber={i + 1}
                  />
                );
              })}
            {!loading &&
              filteredGames.length > 0 &&
              header2State !== "High" &&
              filteredGames.reverse().map((game: GameInterface, i: number) => {
                return (
                  <RowRanking
                    key={i}
                    username={game.username}
                    score={game.score}
                    date={game.date}
                    id={game.id}
                    rankingNumber={filteredGames.length - i}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    //
  );
};
