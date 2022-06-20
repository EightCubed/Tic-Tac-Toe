import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TURN, SET_DRAW, SET_WINNER } from '../store/actionTypes';
import { gameboard } from '../store/reducer';
import RenderBoard from './board';
import Victory from './victory';
import './game.css';

function Game(){
    const dispatch = useDispatch()

    const box_1 = useSelector<gameboard>((state)=> state.board[0][0])
    const box_2 = useSelector<gameboard>((state)=> state.board[0][1])
    const box_3 = useSelector<gameboard>((state)=> state.board[0][2])
    const box_4 = useSelector<gameboard>((state)=> state.board[1][0])
    const box_5 = useSelector<gameboard>((state)=> state.board[1][1])
    const box_6 = useSelector<gameboard>((state)=> state.board[1][2])
    const box_7 = useSelector<gameboard>((state)=> state.board[2][0])
    const box_8 = useSelector<gameboard>((state)=> state.board[2][1])
    const box_9 = useSelector<gameboard>((state)=> state.board[2][2])
    const turns = useSelector<gameboard,number>((state)=>state.turns)

    const winner = useSelector<gameboard>((state)=> state.winner)
    const current = useSelector<gameboard>((state)=> state.current)

    function AddPosition(e:MouseEvent){
        const boxnum = (e.target as Element).className.split(' ')[1];
        const row = Math.floor((parseInt(boxnum)-1)/3);
        const col = (parseInt(boxnum)-1)%3;   
        const box = [[box_1,box_2,box_3],[box_4,box_5,box_6],[box_7,box_8,box_9]]
        
        if(box[row][col]===0)
            dispatch({type:ADD_TURN , arr1 : row , arr2 : col })
    }

    useEffect( ()=> {
        checkWin()
        checkDraw()
    },[turns])

    function checkDraw(){
        if(turns===9)
            {console.log('draw')
            dispatch({type:SET_DRAW})}
    }

    function checkWin(){
        const box = [[box_1,box_2,box_3],[box_4,box_5,box_6],[box_7,box_8,box_9]]

        if ( (box[0][0]===box[0][1]) && (box[0][1]===box[0][2]) && (box[0][2]===box[0][0])&&(box[0][0]!==0) )
        dispatch({type:SET_WINNER , win : box[0][0]})
        else if ( (box[1][0]===box[1][1]) && (box[1][1]===box[1][2]) && (box[1][2]===box[1][0])&&(box[1][0]!==0) )
        dispatch({type:SET_WINNER , win : box[1][0]})
        else if ( (box[2][0]===box[2][1]) && (box[2][1]===box[2][2]) && (box[2][2]===box[2][0])&&(box[2][0]!==0) )
        dispatch({type:SET_WINNER , win : box[2][0]})
    

        else if ( (box[0][0]===box[1][0]) && (box[1][0]===box[2][0]) && (box[2][0]===box[0][0])&&(box[0][0]!==0) )
        dispatch({type:SET_WINNER , win : box[0][0]})
        else if ( (box[0][1]===box[1][1]) && (box[1][1]===box[2][1]) && (box[2][1]===box[0][1])&&(box[0][1]!==0) )
        dispatch({type:SET_WINNER , win : box[0][1]})
        else if ( (box[0][2]===box[1][2]) && (box[1][2]===box[2][2]) && (box[2][2]===box[0][2])&&(box[0][2]!==0) )
        dispatch({type:SET_WINNER , win : box[0][2]})


        else if ( (box[0][0]===box[1][1]) && (box[1][1]===box[2][2]) && (box[2][2]===box[0][0])&&(box[0][0]!==0) )
        dispatch({type:SET_WINNER , win : box[1][1]})
        else if ( (box[0][2]===box[1][1]) && (box[1][1]===box[2][0]) && (box[2][0]===box[0][2])&&(box[0][2]!==0) )
        dispatch({type:SET_WINNER , win : box[1][1]})
    }

    return(
        <div>
            <div className='playing'>
                {winner===0 ? <div><RenderBoard ClickFunction={AddPosition}/> 
                    <div className='turn'>
                        Playing : {current ? <div className='cross'>&#10060;</div> : <div className='circle'>&#8413;</div> }
                    </div> 
                    </div>
                    : null 
                }
            </div>
            <div className="victory">
            { winner!==0 ? <Victory/> : null }
            </div>
        </div>
    );
}

export default Game;