import { useSelector } from "react-redux";
import { gameboard } from "../store/reducer";

function Victory():any{

    function handleReset(){
        window.location.reload();
    }

    const winner = useSelector<gameboard>((state)=> state.winner)
    return(
        <div className="victoryMsg">
        { winner===1 ? <h1>&#10060; Wins!!!</h1> : winner===2 ? <h1>&#8413; Wins!!!</h1> : <h1>Draw :/</h1>}
        <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Victory;