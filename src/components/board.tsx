import './board.css';

interface clickProps{
    ClickFunction : (event:any)=>any;
}

function RenderBoard( {ClickFunction} : clickProps ){

    function handleClick(event:any){
        ClickFunction(event);
    }
    return(
        <>
        <h1 className='title' >Tic-Tac-Toe</h1>
        <div className='game-board'>
            <div onClick={handleClick} className="box 1"></div>
            <div onClick={handleClick} className="box 2"></div>
            <div onClick={handleClick} className="box 3"></div>
            <div onClick={handleClick} className="box 4"></div>
            <div onClick={handleClick} className="box 5"></div>
            <div onClick={handleClick} className="box 6"></div>
            <div onClick={handleClick} className="box 7"></div>
            <div onClick={handleClick} className="box 8"></div>
            <div onClick={handleClick} className="box 9"></div>
        </div>
        </>
    )
}

export default RenderBoard;