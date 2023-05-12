import { useEffect, useState } from "react";
import "./rankingContent.scss";
import { SearchBar } from "../searchBar/SearchBar";
import { ranking } from "./actions";
import { GameInterface, RowRanking } from "./RowRankingTemplate";
export const RankingContent = () => {
  const [loading, setLoading] = useState(false);
  const [rankingInfo, setRankingInfo] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [header2State, setHeader2State] = useState<"High" | "Low">("High");
  const [filterNameValue, setFilterNameValue] = useState("");
  const [filterDateValue, setFilterDateValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ranking();
        setRankingInfo(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
    
  }, []);


  const toggleHeader2 = () => {
    setHeader2State((prevState) => (prevState === "High" ? "Low" : "High"));
    sortGames(filteredGames, header2State);
  };

  const onSearch = (searchTerm: string) => {
    setFilterNameValue(searchTerm);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterDateValue(event.target.value);
  };

  useEffect(() => {
    if (rankingInfo != null) {
      setFilteredGames(rankingInfo);
      sortGames(filteredGames, header2State);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rankingInfo]);

  useEffect(() => {
    let toFilterList = rankingInfo;

    /*
    Filtro de fecha
    */
    if (toFilterList && filterDateValue !== "") {
      toFilterList = toFilterList.filter((game: any) =>
        game.date.split("T")[0].includes(filterDateValue)
      );
    }

    /*
    Filtro de nombre
    */
    if (toFilterList && filterNameValue !== "") {
      toFilterList = toFilterList.filter((game: any) =>
        game.username
          .toUpperCase()
          .includes(filterNameValue.toString().toUpperCase())
      );
    }

    setFilteredGames(toFilterList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterNameValue, filterDateValue]);

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
  );
};
