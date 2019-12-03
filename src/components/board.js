import React from "react";
import Status from "./status";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            ctplayer: null,
            winner: null,
            player1: 0,
            player2: 0
        };
    }

    isArrayFull(arr) {
        for (var i = 0, l = arr.length; i < l; i++) {
            if ("undefined" === typeof arr[i] || null === arr[i]) {
                return false;
            }
        }
        return true;
    }
    checkWinner() {
        let winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let hasWinner = false;
        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i];
            if (
                this.state.board[a] &&
                this.state.board[a] === this.state.board[b] &&
                this.state.board[a] === this.state.board[c]
            ) {
                this.setState({
                    winner: this.state.ctplayer,
                    player2:
                        this.state.ctplayer === "X"
                            ? this.state.player2 + 1
                            : this.state.player2,
                    player1:
                        this.state.ctplayer === "O"
                            ? this.state.player1 + 1
                            : this.state.player1
                });
                hasWinner = true;
                setTimeout(() => {
                    this.setState({
                      player: null,
                      winner: null,
                      board: Array(9).fill(null)
                    });
                  }, 2000);
            }
        }
        if (!hasWinner && this.isArrayFull(this.state.board)) {
            this.setState({
                winner: "draw"
            });
            setTimeout(() => {
                this.setState({
                  player: null,
                  winner: null,
                  board: Array(9).fill(null)
                });
              }, 2000);
        }
    }

    handleClick(i) {
        let newBoard = this.state.board;
        if (this.state.board[i] == null && !this.state.winner) {
            newBoard[i] = this.state.ctplayer;
            this.setState({
                board: newBoard,
                ctplayer: this.state.ctplayer === "X" ? "O" : "X"
            });
            this.checkWinner();
        }
    }

    setPlayer(player) {
        console.log(player);
    }

    render() {
        const Box = this.state.board.map((box, i) => (
            <div id="box" key={i} onClick={() => this.handleClick(i)}>
                {box}
            </div>
        ));
        return (
            <div className="container">
                <div className="mt-4" id="board">
                    {Box}
                </div>

                <Status
                    player={this.state.ctplayer}
                    setPlayer={e => {
                        this.setPlayer(e);
                    }}
                    winner={this.state.winner}
                />
                <div className="text-center pl-3">
                    <table className="scores">
                        <tr>
                            <td>
                                Player1(O)
                           </td>
                            <td>
                                Player2(X)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.state.player1}
                            </td>
                            <td>
                                {this.state.player2}
                            </td>
                        </tr>


                    </table>
                </div>

                
            </div>
        );
    }
}

export default Board;
