import React from 'react';
import Status from './status';

class Board extends React.Component {
    constructor(props){
        super(props);
this.state={
    board:Array(9).fill(null),
    ctplayer:null,
    winner:null
}
    }

    checkWinner(){
        let winLines= [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i];
            if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
              
              this.setState({
                  winner:this.state.ctplayer
              })
            }
          }
          
        }
   

    handleClick(i) {
        let newBoard=this.state.board;
        if(this.state.board[i] == null && !this.state.winner){
            newBoard[i]=this.state.ctplayer;
            this.setState({
                board: newBoard,
                ctplayer:this.state.ctplayer == "X" ? "O" : "X"
            })
            this.checkWinner();
        }
        
    }

    setPlayer(player){
        console.log(player);
    }

    reset() {
        this.setState({
          player: null,
          winner: null,
          board: Array(9).fill(null)
        })
      }

    render() {
   const Box=this.state.board.map((box,i) => <div id='box' key={i} onClick={()=>this.handleClick(i)}>{box}</div>)
        return <div className="container">
            <div className="mt-4" id="board">
           {Box}
           
        </div>

         <Status
          player={this.state.ctplayer}
          setPlayer={(e) => { this.setPlayer(e) }}
          winner={this.state.winner}
        />

<button disabled={!this.state.winner} onClick={() => this.reset()}> Reset</button >
        </div>
        

    }
}

export default Board;