import { useSelector } from 'react-redux';
import { gameboard } from '../store/reducer';
import './board.css';

interface clickProps{
    ClickFunction : (event:any)=>any;
}

function RenderBoard( {ClickFunction} : clickProps ){

    const box_1 = useSelector<gameboard>((state)=> state.board[0][0])
    const box_2 = useSelector<gameboard>((state)=> state.board[0][1])
    const box_3 = useSelector<gameboard>((state)=> state.board[0][2])
    const box_4 = useSelector<gameboard>((state)=> state.board[1][0])
    const box_5 = useSelector<gameboard>((state)=> state.board[1][1])
    const box_6 = useSelector<gameboard>((state)=> state.board[1][2])
    const box_7 = useSelector<gameboard>((state)=> state.board[2][0])
    const box_8 = useSelector<gameboard>((state)=> state.board[2][1])
    const box_9 = useSelector<gameboard>((state)=> state.board[2][2])
    
    function handleClick(event:any){
        ClickFunction(event);
    }
    return(
        <>
        <h1 className='title' >Tic-Tac-Toe</h1>
        <div className='game-board'>
            <div onClick={handleClick} className="box 1">{box_1===1 ? <p className="a 1">&#10060;</p> : box_1===2 ? <p className="a 1">&#8413;</p> : null}</div>
            <div onClick={handleClick} className="box 2">{box_2===1 ? <p className="a 1">&#10060;</p> : box_2===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 3">{box_3===1 ? <p className="a 1">&#10060;</p> : box_3===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 4">{box_4===1 ? <p className="a 1">&#10060;</p> : box_4===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 5">{box_5===1 ? <p className="a 1">&#10060;</p> : box_5===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 6">{box_6===1 ? <p className="a 1">&#10060;</p> : box_6===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 7">{box_7===1 ? <p className="a 1">&#10060;</p> : box_7===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 8">{box_8===1 ? <p className="a 1">&#10060;</p> : box_8===2 ? <p className="a 1">&#8413;</p> : null }</div>
            <div onClick={handleClick} className="box 9">{box_9===1 ? <p className="a 1">&#10060;</p> : box_9===2 ? <p className="a 1">&#8413;</p> : null }</div>
        </div>
        </>
    )
}

export default RenderBoard;