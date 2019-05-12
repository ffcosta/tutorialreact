import React from 'react'
import Board from './Board'
import calculateWinner from './calculateWinner';
import CalculatePosition from './CalcullatePosition';

//import calculatePositionSquare from './calculatePositionSquare';

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null), 
        jogadas: [],
        values: []
      }],
      stepNumber: 0,
      xIsNext: true,
      
    }
  }
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length -1]
    const squares = current.squares.slice()
    const jogadas = current.jogadas.slice()
    const values = current.values.slice()
 
    if(calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    values.push(squares[i])
    jogadas.push(CalculatePosition(i))
    this.setState({
      history: history.concat([{
        squares: squares,
        jogadas: jogadas,
        values: values
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      
    })
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
    render() {
      const history = this.state.history
      const current = history[this.state.stepNumber]
      const winner = calculateWinner(current.squares)
     
      const moves = history.map((step, move) =>{
        const jogada = step.jogadas[step.jogadas.length - 1]
        const value = step.values[step.values.length - 1]
        const desc = move ?
        
        'Go to move #' + move + `- Jogada: Input ${value} in ` + jogada:
        'Go to game start'
        return (
           <li key={move}>
             <button className="btn btn-info btn-sm active btn-block" onClick={() => this.jumpTo(move)}>{desc}</button>
           </li>


        )
      })

      let status
      if(winner){
        status = 'Winner: ' + winner
      }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
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

  export default Game
  
  