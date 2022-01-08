import RenderBoard from './board';

function Game(){
    
    function AddPosition(e:MouseEvent){
        console.log((e.target as Element).className.split(' ')[1]);
    }

    return(
        <div>
        <RenderBoard 
        ClickFunction={AddPosition}/>
        </div>
    );
}

export default Game;