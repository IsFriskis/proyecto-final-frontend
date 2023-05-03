import { useEffect, useState } from "react";
import "./rankingContent.scss";
import { SearchBar } from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { ranking } from "./actions";

export const RankingContent = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: any) => state.ranking
  );
  const [filteredGames, setFilteredGames] = useState([]);
  const [header2State, setHeader2State] = useState<"High" | "Low">("High");

  useEffect(() => {
    dispatch(ranking());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleHeader2 = () => {
    setHeader2State((prevState) => (prevState === "High" ? "Low" : "High"));
    if(header2State === "High"){

    }
  };

  const onSearch = (searchTerm: string) => {
    if (data) {
        setFilteredGames(
          data.filter((game: any) =>
            game.username.toUpperCase().includes(searchTerm.toString().toUpperCase())
          )
        );
      }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
        setFilteredGames(
          data.filter((game: any) =>
            game.date.split('T')[0].includes(event.target.value)
          )
        );
      }
    console.log(event.target.value);
  };

  useEffect(() => {
    if (data != null) {
      setFilteredGames(data);
    }
  }, [data]);

  function sortGames(games: any, isAscending: string) {
    var bool = false;
    if(isAscending === "High"){
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
      <table className="rankingTable">
        <tbody>
        <tr className="rankingTableHeader">
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
        <tr className="rankingDataRow">
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
          <td>Row 1, Cell 4</td>
        </tr>
        </tbody>
      </table>
    //</main>
  );
};
