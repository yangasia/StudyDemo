import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick() }
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

function Square(props) {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
    );
}

class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         square: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // }

    // handleClick(i) {
    //     const square = [...this.state.square];
    //     if (calculateWinner(square) || square[i]) {
    //         return;
    //     }
    //     square[i] = this.state.xIsNext ? 'X' : 'O';
    //     this.setState({
    //         square: square,
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        // const winner = calculateWinner(this.state.square);
        // let status = null;
        // if (winner) {
        //     status = 'Winner: ' + winner;
        // }
        // else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// function Board(props)

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber:0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length - 1];
        const squares = [...current.squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber:history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    handleClickme=(i)=>{
        console.log(this.state.xIsNext);
        this.handleClick(i)
    }

    jumpto(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to start';
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpto(move)}>{desc}</button>
                </li>
            );
        });

        let status = null;
        if (winner) {
            status = 'winner: ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        // onClick={(i) => this.handleClick(i)}
                        onClick={this.handleClickme}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(square) {
    const lins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lins.length; i++) {
        const [a, b, c] = lins[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);