export interface GameInterface {
    key: number,
    id: number,
    score: number,
    date: string,
    username: string
}

export const RowRanking = (props: GameInterface & { rankingNumber: number }) => {
    const {username, score, date, id, rankingNumber} = props;
    
    return(
        <tr className="rankingDataRow">
          <td><span>{rankingNumber}</span></td>
          <td><span>{username}</span></td>
          <td><span>{score}</span></td>
          <td><span>{date.split("T")[0]}</span></td>
          <td><span>{id}</span></td>
        </tr>
    );
}